import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync, readdirSync} from 'node:fs';
import {join, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';
import {runInNewContext} from 'node:vm';
const root=join(dirname(fileURLToPath(import.meta.url)),'..');
const read=p=>readFileSync(join(root,p),'utf8');
const html=read('index.html');
const sw=read('sw.js');

test('main app runs its first render rather than leaving the default boot screen',()=>{
 const script=`const app={innerHTML:'',addEventListener(){},contains(){return true}};
 globalThis.localStorage={getItem(){return null},setItem(){}};
 globalThis.document={getElementById(){return app},querySelector(){return null},body:{dataset:{}}};
 globalThis.window={addEventListener(){},scrollTo(){}};
 Object.defineProperty(globalThis,'navigator',{value:{},configurable:true});
 globalThis.location={protocol:'file:'};
 import('./js/app.js').then(()=>{if(!app.innerHTML.includes('Command Center')||app.innerHTML.includes('Preparing the playbook'))process.exitCode=2;}).catch(e=>{console.error(e);process.exitCode=1;});`;
 const result=spawnSync(process.execPath,['--input-type=module','-e',script],{cwd:root,encoding:'utf8',timeout:10000});
 assert.equal(result.status,0, result.stderr||result.stdout);
});

test('boot loader exposes measurable percentage and maps every module to one cache-safe release',()=>{
 const importmap=html.match(/<script type="importmap">([\s\S]*?)<\/script>/)?.[1];
 assert.ok(importmap,'missing import map');
 const map=JSON.parse(importmap).imports;
 const modules=readdirSync(join(root,'js')).filter(n=>n.endsWith('.js'));
 for(const file of modules){
   const path='./js/'+file;
   assert.match(map[path]||'',/^\.\/js\/[^?]+\.js\?release=/,'Missing cache-busting import for '+file);
   assert.ok(sw.includes("'"+map[path]+"'"),'Offline worker missing versioned module '+file);
 }
 assert.equal(new Set(Object.values(map).map(v=>v.split('?release=')[1])).size,1,'mixed release versions');
 assert.match(html,/id="boot-percent"[^>]*>0%/);
 assert.match(html,/role="progressbar"[^>]+aria-valuenow="0"/);
 assert.match(html,/response\.arrayBuffer\(\)/,'progress must reflect completed file downloads');
 assert.match(html,/run\(\)\.catch/,'loader needs a visible startup error state');
 assert.match(html,/clearObsoleteCache/,'loader needs a cache-repair path');
 assert.doesNotMatch(read('js/app.js'),/serviceWorker\.register/,'worker registration must not be gated on successful app imports');
});

test('service worker uses the network when executable modules are available, even with a stale cache hit',async()=>{
 const events={};let p;
 const scriptContext={
  self:{location:{origin:'https://example.test'},registration:{scope:'https://example.test/football-academy/'},addEventListener:(k,v)=>events[k]=v},
  caches:{match:async()=>new Response('OLD'),open:async()=>({put:async()=>{}})},
  fetch:async()=>new Response('NEW',{status:200}),
  URL,Response,Promise
 };
 runInNewContext(sw,scriptContext);
 const request={method:'GET',url:'https://example.test/football-academy/js/studio-ui.js'};
 events.fetch({request,respondWith:response=>{p=response;}});
 assert.ok(p,'worker did not respond to JS request');
 assert.equal(await (await p).text(),'NEW','service worker returned stale JS from cache');
});

test('loading percentage advances with completed files and reaches 100 on successful startup',async()=>{
 const raw=html.match(/<script>\s*([\s\S]*?)<\/script>/)?.[1];
 assert.ok(raw,'missing independent loader');
 const js=raw.replace("await import('./js/app.js?release='+RELEASE)","await fakeImport()");
 assert.notEqual(js,raw,'could not isolate dynamic app import');
 const elements=new Map();
 for(const id of ['boot-screen','boot-track','boot-bar','boot-percent','boot-status','boot-error','boot-repair']){
   elements.set(id,{hidden:id==='boot-error'||id==='boot-repair',style:{},textContent:'',attrs:{},setAttribute(n,v){this.attrs[n]=v},addEventListener(){}});
 }
 let assets=0,imported=0;
 const fakeFetch=async()=>({ok:true,arrayBuffer:async()=>{assets++;return new ArrayBuffer(1)}});
 const done=new Promise((resolve,reject)=>{
   const context={document:{getElementById:(id)=>elements.get(id)},navigator:{onLine:true},location:{protocol:'file:'},fetch:fakeFetch,
      fakeImport:async()=>{imported++;resolve();},URL,Promise,console,sessionStorage:{getItem:()=>null,setItem(){}},window:{},};
   try{runInNewContext(js,context)}catch(e){reject(e)}
 });
 await done;
 await new Promise(resolve=>setImmediate(resolve));
 assert.equal(assets,14);
 assert.equal(imported,1);
 assert.equal(elements.get('boot-percent').textContent,'100%');
 assert.equal(elements.get('boot-track').attrs['aria-valuenow'],'100');
 assert.equal(elements.get('boot-error').hidden,true);
});
