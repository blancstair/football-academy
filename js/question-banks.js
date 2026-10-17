/* Knowledge checkpoint engine. Each level has a bank instead of a fixed exam.
   Legacy lesson items are retained for familiar concepts; additional items use
   distinct concept explanations and film-analysis cues. The collegiate sequence
   includes separately authored higher-order scenarios in college.js. */
import {coachingFor} from './coaching.js';
import {collegeChallenges} from './advanced-checks.js';
const copy=q=>[q[0],[...q[1]],Number(q[2]),q[3]];
function conceptQuestions(lesson){
 const entries=lesson.concepts;
 const notes=entries.map((_,i)=>coachingFor(lesson,i));
 const items=[];
 if(entries.length<3)return items;
 for(let i=0;i<entries.length;i++){
  const order=[i,(i+1)%entries.length,(i+2)%entries.length];
  // Competing choices all come from legitimate concepts in the SAME lesson;
  // this tests distinction without absurd or unrelated distractors.
  items.push([
   `In ${lesson.title}, which explanation matches “${entries[i][0]}”?`,
   order.map(j=>entries[j][1]),0,
   `The key distinction is ${entries[i][1]} ${notes[i].insight}`
  ]);
  items.push([
   `In a film breakdown, which observation best helps recognize “${entries[i][0]}”?`,
   order.map(j=>notes[j].watch),0,
   `${notes[i].insight} Look for this: ${notes[i].watch}`
  ]);
 }
 return items;
}
export function questionBankFor(lesson){
 const original=lesson.quiz.map(copy);
 // College levels already contain ten authored and explained scenario questions.
 if(lesson.id.startsWith('core-') && lesson.number>=11)return [...original,...(collegeChallenges[lesson.number]||[])];
 return [...original,...conceptQuestions(lesson)];
}
function shuffle(arr,random=Math.random){const out=[...arr];for(let i=out.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[out[i],out[j]]=[out[j],out[i]];}return out;}
export function drawCheckpoint(lesson,previousQuestions=[],random=Math.random){
 const bank=questionBankFor(lesson);
 if(bank.length<5)throw new Error(`Not enough questions for ${lesson.id}`);
 const old=new Set(previousQuestions.map(q=>q[0]));
 // Higher levels guarantee two *random* application problems plus three
 // random supporting questions; a hard level never becomes five vocabulary checks.
 const challenges=collegeChallenges[lesson.number]||[];
 const pick=(pool,count)=>[
  ...shuffle(pool.filter(q=>!old.has(q[0])),random),
  ...shuffle(pool.filter(q=>old.has(q[0])),random)
 ].slice(0,count);
 const selected=challenges.length>=4
  ? [...pick(challenges,2),...pick(bank.filter(q=>!challenges.includes(q)),3)]
  :pick(bank,5);
 return shuffle(selected,random).map(item=>{
  const choices=shuffle(item[1].map((label,index)=>({label,index})),random);
  return [item[0],choices.map(x=>x.label),choices.findIndex(x=>x.index===Number(item[2])),item[3]];
 });
}
