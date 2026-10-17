import test from 'node:test';
import assert from 'node:assert/strict';
import {coreLessons} from '../js/curriculum.js';
import {positions,positionLessons,electiveLessons} from '../js/positions.js';
import {playOptions,defenses,filmCases,situations} from '../js/labs.js';
const all=[...coreLessons,...positionLessons,...electiveLessons];
test('curriculum has all promised modules',()=>{
 assert.equal(coreLessons.length,20);
 assert.equal(positions.length,10);
 assert.equal(positionLessons.length,30);
 assert.equal(electiveLessons.length,5);
 assert.equal(new Set(all.map(l=>l.id)).size,all.length);
});
test('every lesson has valid questions and explanations',()=>{
 for(const l of all){
  assert.ok(l.title&&l.summary&&l.concepts?.length>=3&&l.quiz?.length>=3,l.id);
  for(const item of l.quiz){assert.ok(item[0]&&item[3],l.id);assert.ok(item[1].length>=3,l.id);assert.ok(Number.isInteger(Number(item[2]))&&Number(item[2])>=0&&Number(item[2])<item[1].length,l.id)}
 }
});
test('position tiers reference valid positions',()=>{
 const ids=new Set(positions.map(p=>p.id));
 for(const l of positionLessons){assert.ok(ids.has(l.positionId));assert.ok(l.tier>=1&&l.tier<=3)}
 for(const p of positions){assert.equal(positionLessons.filter(l=>l.positionId===p.id).length,3)}
});
test('interactive labs contain enough playable content',()=>{
 assert.ok(playOptions.length>=6&&defenses.length>=3);
 assert.ok(filmCases.length>=3&&situations.length>=4);
});
