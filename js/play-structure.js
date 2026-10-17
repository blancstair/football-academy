/* Demonstration of a COMPLETE 11-player college call, with explicit assumptions.
   This is instructional: a staff's blocking, eligibility and RPO tags can differ. */
const roles=[
 ['QB','Gun 4–5 yd behind center','Receive snap; mesh with back; identify defined apex conflict','Give when the apex widens, throw glance when apex inserts AND throwing lane remains legal/open'],
 ['RB','Offset left of QB','Inside-zone track right; accept mesh; press crease and cut from the block read','Confirm handoff unless QB pulls for quick throw'],
 ['LT','Backside tackle','Zone step right; secure backside edge/C gap per line call','Prevent backside pursuit without allowing dangerous penetration'],
 ['LG','Backside guard','Zone track and secure backside B gap; assist/climb based on front','Work with C to prevent interior penetration'],
 ['C','Over the ball','Make front/protection declaration; snap; work zone combination toward play-side second level','Help establish first-level movement before leaving combination'],
 ['RG','Play-side guard','Combo front-side down lineman with center/tackle depending on technique','Release to identified linebacker only when down lineman is secured'],
 ['RT','Play-side tackle','Zone step to play-side edge; secure B/C relationship by front rules','Control first-level threat so back can press track'],
 ['Y (TE)','Attached right','Zone edge block; prevent immediate edge penetration into the run','Creates the front-side run surface and constrains edge fit'],
 ['Z (WR1)','Wide right','Outside vertical stem to occupy corner and possible deep help','Clear space for glance window; maintain legal route'],
 ['H (WR2)','Slot right','Quick glance/slant behind conflict player, at team-defined depth','Offer a rapid pass target ONLY on QB pull and correct leverage'],
 ['X (WR3)','Wide left','Backside hitch or defined alert based on coverage','Hold backside coverage and remain emergency outlet if progression/rule permits']
];
const E=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function fullPlayTeachingCard(){return `<section class="full-play-card" aria-label="Complete eleven-player play assignment demonstration">
  <div class="caps">EXAMPLE · ENTIRE PLAY STRUCTURE</div>
  <h3>11 Personnel · Gun Trips Right · Inside Zone + Slot Glance (illustrative RPO)</h3>
  <p class="muted small">The offense has one back, one tight end, three wide receivers, five linemen and a QB. The base action is zone right. This is one illustrative assignment structure; actual college playbooks define their own tags, footwork and protection rules.</p>
  <div class="grid cols-2" style="margin:12px 0;gap:10px"><div class="coach-note"><strong>Defensive picture</strong><p>Nickel, six-man box, two-high pre-snap shell and apex defender between the slot and run box. Defenders may rotate after the snap.</p></div><div class="coach-note"><strong>The conflict read</strong><p>Slot-side apex: if he widens and stays outside, run numbers may favor the handoff. If he inserts into the run fit, the glance MAY open behind him if coverage and timing permit.</p></div></div>
  <div class="role-table-wrap"><table class="role-table"><thead><tr><th>Player</th><th>Alignment</th><th>Assignment</th><th>Key decision / purpose</th></tr></thead><tbody>${roles.map(row=>`<tr>${row.map(c=>`<td>${E(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>
  <div class="coach-note"><strong>QB decision tree</strong><p><b>1.</b> Before snap: identify box, shell, apex and rush threats. <b>2.</b> At mesh: confirm actual apex insertion and outside support. <b>3.</b> Give if pass leverage is not favorable; throw quick glance only if receiver, coverage and downfield legality permit. <b>4.</b> On film review: identify the replacement defender and any lineman who released too far downfield for the pass.</p></div>
  <p class="tiny">Film-study task: explain all 11 assignments before pressing Next. Ask what changes if the apex stays wide, the post safety rotates down, or the defense rushes an extra linebacker.</p>
 </section>`;}
