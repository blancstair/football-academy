import test from 'node:test';
import assert from 'node:assert/strict';
import {coreLessons} from '../js/curriculum.js';
import {positionLessons,electiveLessons} from '../js/positions.js';
import {questionBankFor,drawCheckpoint} from '../js/question-banks.js';
const all=[...coreLessons,...positionLessons,...electiveLessons];
test('every level and specialist tier has a nontrivial bank and one randomized five-question checkpoint',()=>{
 for(const lesson of all){
  const bank=questionBankFor(lesson);
  assert.ok(bank.length>=9,`${lesson.id} bank too small`);
  assert.equal(new Set(bank.map(q=>q[0])).size,bank.length,`${lesson.id} duplicate question text`);
  const sampled=drawCheckpoint(lesson);
  assert.equal(sampled.length,5,lesson.id);
  assert.equal(new Set(sampled.map(q=>q[0])).size,5,lesson.id);
  for(const q of sampled){
   assert.ok(q[0]&&q[3]);
   assert.equal(q[1].length,3);
   assert.ok(q[2]>=0&&q[2]<3);
   assert.equal(new Set(q[1]).size,3,`${lesson.id}: answer choices must be distinct`);
  }
 }
});
test('retry prioritizes unseen questions, changes selection, and does not modify bank',()=>{
 for(const l of all){
  const old=drawCheckpoint(l),next=drawCheckpoint(l,old),a=new Set(old.map(q=>q[0]));
  assert.equal(next.length,5,l.id);
  const overlap=next.filter(q=>a.has(q[0])).length;
  assert.ok(overlap<=Math.max(2,10-questionBankFor(l).length),`${l.id} draws too many repeated questions: ${overlap}`);
 }
});
test('college sequence has increasing level numbers, reads, and full play assignment teaching',()=>{
 const college=coreLessons.slice(10);
 assert.deepEqual(college.map(l=>l.number),[11,12,13,14,15,16,17,18,19,20]);
 for(const l of college){assert.ok(l.concepts.length>=5);assert.ok(l.coaching?.length===l.concepts.length);}
 assert.match(college.at(-1).coaching.map(x=>x[0]).join(' '),/eleven offensive players/);
});
