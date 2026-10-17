import test from 'node:test';
import assert from 'node:assert/strict';
import {coreLessons} from '../js/curriculum.js';
import {positionLessons,electiveLessons} from '../js/positions.js';
import {coachingNotes,coachingFor} from '../js/coaching.js';
const all=[...coreLessons,...positionLessons,...electiveLessons];
test('every concept has its own substantive coaching extension',()=>{
  assert.ok(Object.keys(coachingNotes).length>=45);
  const seenInsights=new Set(),seenObservations=new Set();
  for(const lesson of all){
    assert.ok(lesson.coaching?.length||coachingNotes[lesson.id]?.length,lesson.id);
    for(let i=0;i<lesson.concepts.length;i++){
      const {insight,watch}=coachingFor(lesson,i);
      assert.ok(insight.length>100,`${lesson.id} concept ${i+1}: insight too short`);
      assert.ok(watch.length>60,`${lesson.id} concept ${i+1}: observation too short`);
      assert.ok(!seenInsights.has(insight),`${lesson.id} duplicate insight`);
      assert.ok(!seenObservations.has(watch),`${lesson.id} duplicate observation`);
      seenInsights.add(insight);seenObservations.add(watch);
    }
  }
});
