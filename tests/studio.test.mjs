import test from 'node:test';
import assert from 'node:assert/strict';
import {offensePlays,defensiveCalls,offenseFormations,defenseFormations,buildMatch,inspect,fieldSvg,resolvePlay} from '../js/studio-engine.js';
import {designerStudio,filmStudio,simulatorStudio,setupStudio,studioClick,studioChange,resetStudioForDifficulty} from '../js/studio-ui.js';
import {positions,positionLessons} from '../js/positions.js';
import {questionBankFor,drawCheckpoint} from '../js/question-banks.js';
const element=(action,value)=>({closest(selector){return selector==='[data-studio]'?{dataset:{studio:action,studioVal:value}}:null}});
test('all offensive/defensive calls provide 11 individual assignment reads per side',()=>{
 assert.ok(offensePlays.length>=38);assert.ok(defensiveCalls.length>=23);
 assert.ok(offenseFormations.length>=10);assert.ok(defenseFormations.length>=8);
 for(const o of offensePlays)for(const d of defensiveCalls){
  const m=buildMatch(o.id,d.id);assert.equal(m.attackers.length,11);assert.equal(m.defenders.length,11);
  for(const a of [...m.attackers,...m.defenders]){
   const info=inspect(m,a.id);
   for(const k of ['action','read','technique','ifThen','why'])assert.ok(info[k]?.length>25,`${o.id}/${d.id}/${a.id}/${k}`);
  }
  assert.match(fieldSvg(m,3,'LT'),/data-studio-player="LT"/);
  assert.ok(Number.isFinite(resolvePlay(m).gain));
 }
});
test('inspection changes with selected play and defense and includes blocking',()=>{
 const a=inspect(buildMatch('inside-zone','cover3','ace','fourthree'),'LG');
 const b=inspect(buildMatch('counter','bearfit','ace','bear'),'LG');
 const c=inspect(buildMatch('mesh','cover0','spread','nickel'),'LG');
 assert.notEqual(a.action,b.action);
 assert.notEqual(b.action,c.action);
 assert.match(a.technique,/zone|Step|control|climb/i);
 assert.match(b.action,/pull|down-block/i);
 assert.match(c.action,/protection/i);
 const m=buildMatch('rpo-glance','palms');assert.match(inspect(m,'QB').read,/linebacker|read|run|conflict|RPO/i);
});
test('all practice tools expose the full library and a study surface',()=>{
 const a=designerStudio('allpro','DIFFICULTY CONTROL');assert.match(a,/38 offensive plays/);assert.match(a,/data-studio-player="QB"/);assert.match(a,/Exact call assignment/);assert.match(a,/DIFFICULTY CONTROL/);
 const f=filmStudio('starter');assert.match(f,/FILM BREAKDOWN/);assert.match(f,/Pre-snap shell/);assert.match(f,/data-studio-select="film:def"/);
 const g=simulatorStudio('allpro');assert.match(g,/Call Defense/);assert.match(g,/YOUR TEAM/);assert.match(g,/OPPONENT/);assert.match(g,/data-studio="call"/);
});
test('simulator can call defense and inspect resolved play without revealing it pre-snap',()=>{
 resetStudioForDifficulty();setupStudio(()=>{});simulatorStudio('starter');
 studioClick(element('mode','defense'),'starter','sim');
 let before=simulatorStudio('starter');
 assert.match(before,/Opposing|opponent|OppONENT/i);
 assert.match(before,/Offensive call hidden until after snap/);
 studioChange({dataset:{studioSelect:'sim:def'},value:'cover3'},'starter');
 studioClick(element('call'), 'starter','sim');
 let after=simulatorStudio('starter');assert.match(after,/LAST SNAP/);assert.match(after,/Post-play film breakdown|Drive complete/);assert.match(after,/Set up next snap|Drive complete/);
 studioClick(element('sim-next-snap'),'starter','sim');
 after=simulatorStudio('starter');assert.match(after,/data-studio="call"/);
});
test('position academy has distinct beginner, intermediate, advanced instructional content and question banks',()=>{
 assert.equal(positions.length,10);assert.equal(positionLessons.length,30);
 for(const p of positions){const tiers=[1,2,3].map(t=>positionLessons.find(x=>x.id===`pos-${p.id}-${t}`));
  for(const [i,l] of tiers.entries()){
   assert.ok(l.concepts.length>=5,`${p.id} tier ${i+1}`);
   assert.ok(questionBankFor(l).length>=9);
   assert.equal(drawCheckpoint(l).length,5);
   assert.ok(l.concepts.some(x=>/read|key|zone|route|cover|fit|block|field|assignment|responsib|pressure|punt|kick|run|gap/i.test(x[1])));
  }
  assert.notEqual(tiers[0].concepts.at(-1)[0],tiers[1].concepts.at(-1)[0]);
  assert.notEqual(tiers[1].concepts.at(-1)[0],tiers[2].concepts.at(-1)[0]);
 }
});
