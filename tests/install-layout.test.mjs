import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const source=p=>readFileSync(resolve(root,p),'utf8');

const run=script=>spawnSync(process.execPath,['--input-type=module','-e',script],{cwd:root,encoding:'utf8',timeout:12000});

test('Install app is visible in the toolbar and Settings even without the native install event',()=>{
 const script=String.raw`
 const handlers={};
 const app={innerHTML:'',addEventListener(type,handler){handlers[type]=handler},contains(){return true}};
 globalThis.document={getElementById(){return app},querySelector(){return null},body:{dataset:{}}};
 globalThis.localStorage={getItem(){return JSON.stringify({theme:'dark',profiles:[{id:'student-a',name:'Test student',completed:{},xp:0,practiceLevel:'rookie',created:'2026-10-16'}],activeId:'student-a'})},setItem(){}};
 globalThis.window={addEventListener(){},scrollTo(){}};
 Object.defineProperty(globalThis,'navigator',{value:{},configurable:true});
 globalThis.location={protocol:'file:'};
 await import('./js/app.js');
 if(!app.innerHTML.includes('aria-label="Install Football Academy as an app"'))throw Error('Toolbar install button missing');
 const button=dataset=>({dataset,closest(selector){if(selector==='[data-studio]'||selector==='[data-studio-player], [data-studio-inspect]')return null;return this}});
 const click=dataset=>handlers.click({target:button(dataset)});
 click({go:'settings'});
 if(!app.innerHTML.includes('Install Football Academy</button>'))throw Error('Settings install CTA missing');
 click({action:'install'});
 if(!app.innerHTML.includes('Install the app')||!app.innerHTML.includes('Add to Home Screen'))throw Error('Install help not shown');
 click({action:'close-dialog'});
 if(app.innerHTML.includes('id="install-help-title"'))throw Error('Dialog not dismissible');
 console.log('Fallback installation guidance reachable');
 `;
 const result=run(script);
 assert.equal(result.status,0,result.stderr||result.stdout);
});

test('Install button uses native install prompt when the browser offers one',()=>{
 const script=String.raw`
 const handlers={}; let prompts=0;
 globalThis.setTimeout=()=>1;globalThis.clearTimeout=()=>{};
 const app={innerHTML:'',addEventListener(type,handler){handlers[type]=handler},contains(){return true}};
 globalThis.document={getElementById(){return app},querySelector(){return null},body:{dataset:{}}};
 globalThis.localStorage={getItem(){return JSON.stringify({theme:'dark',profiles:[{id:'student-a',name:'Test student',completed:{},xp:0,practiceLevel:'rookie',created:'2026-10-16'}],activeId:'student-a'})},setItem(){}};
 globalThis.window={addEventListener(type,fn){handlers[type]=fn},scrollTo(){}};
 Object.defineProperty(globalThis,'navigator',{value:{},configurable:true});
 globalThis.location={protocol:'file:'};
 await import('./js/app.js');
 handlers.beforeinstallprompt({preventDefault(){},prompt(){prompts++},userChoice:Promise.resolve({outcome:'accepted'})});
 handlers.click({target:{dataset:{action:'install'},closest(selector){if(selector==='[data-studio]'||selector==='[data-studio-player], [data-studio-inspect]')return null;return this}}});
 if(prompts!==1)throw Error('Native install prompt was not invoked');
 await Promise.resolve();
 handlers.appinstalled();
 if(app.innerHTML.includes('aria-label="Install Football Academy as an app"'))throw Error('Toolbar install remains after installation');
 console.log('Native installation path works');
 `;
 const result=run(script);
 assert.equal(result.status,0,result.stderr||result.stdout);
});

test('Compact layout maintains mobile targets and shows lesson before sidebar',()=>{
 const css=source('css/styles.css');
 assert.match(css,/\.nav-item\{min-height:39px/);
 assert.match(css,/@media\(max-width:870px\)\{\.sidebar\{padding-top:17px\}\.nav-item\{min-height:44px/);
 assert.match(css,/@media\(max-width:620px\)[\s\S]*?\.lesson-sidebar\{order:0\}/);
 assert.match(css,/\.top-install-label\{display:none\}/);
 assert.match(css,/\.topbar\{height:59px/);
});
