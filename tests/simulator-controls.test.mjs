import test from 'node:test';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {dirname,resolve} from 'node:path';

const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');

test('Coach Simulator buttons work through the real application click dispatcher',()=>{
 const harness=String.raw`
 const handlers={};
 const root={_html:'',addEventListener(type,fn){handlers[type]=fn;},contains(){return true;},get innerHTML(){return this._html;},set innerHTML(s){this._html=s;}};
 globalThis.localStorage={getItem(){return null},setItem(){}};
 globalThis.document={getElementById(){return root;},querySelector(){return null},body:{dataset:{}}};
 globalThis.window={addEventListener(){},scrollTo(){}};
 Object.defineProperty(globalThis,'navigator',{value:{},configurable:true});
 globalThis.location={protocol:'file:'};
 function button(dataset){return {dataset,closest(selector){if(selector.startsWith('[data-go],'))return this;if(selector==='[data-studio]')return 'studio' in dataset?this:null;return null;}}}
 function click(dataset){handlers.click({target:button(dataset)});}
 function verify(yes,reason){if(!yes)throw Error(reason);}
 await import('./js/app.js');
 click({go:'simulator'});
 verify(root.innerHTML.includes('Call the play'),'Simulator play button absent');
 click({studio:'call'});
 verify(root.innerHTML.includes('LAST SNAP'),'Calling a play did not resolve a snap');
 click({studio:'sim-next-snap'});
 verify(root.innerHTML.includes('data-studio="call"'),'Next snap did not return play calling');
 click({studio:'mode',studioVal:'defense'});
 verify(root.innerHTML.includes('Your defensive formation'),'Defense mode did not activate');
 handlers.change({target:{dataset:{studioSelect:'sim:def'},value:'cover3'}});
 verify(root.innerHTML.includes('Your defensive formation'),'Defensive call change lost active mode');
 click({studio:'call'});
 verify(root.innerHTML.includes('LAST SNAP'),'Defensive play did not resolve');
 console.log('Simulator click integration passed');
 `;
 const result=spawnSync(process.execPath,['--input-type=module','-e',harness],{cwd:root,encoding:'utf8',timeout:10000});
 assert.equal(result.status,0,result.stderr||result.stdout);
});
