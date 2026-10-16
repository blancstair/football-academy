// Football Academy core curriculum. Zero physical drills; entirely mental gameplay and decision-making.
// Question tuple: [question, [answer choices], correct index, explanation].
export const coreLessons = [
  {
    id:'core-1',number:1,title:'The Game in One Drive',category:'The fundamentals',duration:9,
    summary:'Understand what each team is trying to accomplish, and how a football game actually flows.',
    goals:['Find the end zones and the 50-yard line','Explain offense and defense','Understand how possession changes'],
    concepts:[
      ['The big objective','Two teams compete to score more points. The offense tries to move the ball toward the opponent’s end zone; the defense tries to stop it.','Think of the offense as the team currently trying to advance the ball.'],
      ['The field','A standard American football field has 100 yards between goal lines, plus a 10-yard end zone at each end. Yard lines help everyone know how far the offense must go.','Cross the opponent’s goal line with possession of the football to score a touchdown.'],
      ['One play at a time','Most plays begin with a snap from the center to the quarterback. Players then run, pass, block, or defend until the ball is dead.','The offense regroups before the next snap.'],
      ['Possession','The team with the ball is on offense. Possession can change after kicks, turnovers, or failing to get a first down on fourth down.','A defender catching the opponent’s pass is an interception, which changes possession.']
    ],
    quiz:[
      ['What is the offense trying to do?',['Stop the clock forever','Move the ball to score','Prevent every tackle'],'1','The offense wants to advance the ball and score points.'],
      ['What is the total playing-field distance between the two goal lines?',['100 yards','50 yards','120 yards'],'0','There are 100 yards between the goal lines, plus two 10-yard end zones.'],
      ['What usually starts a play?',['The referee throws a flag','The snap','A field-goal attempt'],'1','Most plays start when the center snaps the football.'],
      ['A defender catches a pass intended for an offensive player. What happened?',['A touchdown','An interception','An extra point'],'1','A defender caught the other team’s pass, creating a turnover.'],
      ['Which team is on defense?',['The team trying to stop the ball carrier','The team that snaps the ball','Whichever team wears white'],'0','Defense describes a role, not a jersey color.']
    ]
  },
  {
    id:'core-2',number:2,title:'Downs, Distance & First Downs',category:'The fundamentals',duration:11,
    summary:'Make sense of 1st-and-10, fourth down, the yellow TV line, and the chain crew.',
    goals:['Read down and distance','Earn a new first down','Understand fourth-down choices'],
    concepts:[
      ['Four chances','The offense normally gets four downs to gain 10 yards. Earning enough yardage for the line to gain produces a new first down.','After gaining 6 yards on first down, the situation becomes 2nd-and-4.'],
      ['The line to gain','The line of scrimmage is where the ball starts a play. The line to gain marks how far the offense must advance to get a new set of downs.','On TV the yellow line is a helpful graphic, not paint on the field.'],
      ['Losses count','A play that loses yards increases the distance needed. Penalties may also change the down, distance, or position.','Lose 3 on 1st-and-10 and the next play is usually 2nd-and-13.'],
      ['Fourth down','On fourth down, a team may try for the remaining yards, punt to push the opponent back, or attempt a field goal when in range.','If a fourth-down attempt fails, the other team usually gets the ball where the play ended.']
    ],
    quiz:[
      ['It is 1st-and-10 and the offense gains 4 yards. What is next?',['2nd-and-6','2nd-and-10','1st-and-4'],'0','Four gained yards leave six needed for a new first down.'],
      ['What is the line of scrimmage?',['Where a play starts','The back of the end zone','The kicking team’s bench'],'0','Each play begins at a line of scrimmage.'],
      ['The offense gains the 10 yards needed on second down. What now?',['Automatically punt','A new first down','The game ends'],'1','Reaching the line to gain earns a new set of downs.'],
      ['On fourth down, a team is far from scoring range. Which option is often used?',['Punt','Extra point','Coin toss'],'0','Punting trades possession for improved field position.'],
      ['First-and-10 loses 5 yards. What is the next down and distance in a normal play?',['2nd-and-5','2nd-and-15','3rd-and-10'],'1','Losing five yards leaves fifteen to the first-down marker.']
    ]
  },
  {
    id:'core-3',number:3,title:'Scoring & the Scoreboard',category:'The fundamentals',duration:10,
    summary:'Learn the scoring plays and how the game clock, quarters, and possession relate.',
    goals:['Calculate touchdown drives','Recognize safeties and field goals','Read a basic scoreboard'],
    concepts:[
      ['Touchdown: 6 points','Crossing the opponent’s goal line with possession or legally catching the ball in the end zone scores six points.','Touchdown first; the try comes afterward.'],
      ['The try','After a touchdown, the scoring team normally chooses a one-point kick or a two-point scrimmage attempt.','Six plus a successful extra-point kick makes seven.'],
      ['Other scores','A successful field goal is worth three points. A safety is generally worth two to the defense when the offense is responsible for a dead ball behind its own goal line.','A field goal from the 20-yard line of scrimmage is usually described as a 37-yard attempt.'],
      ['Clocks and quarters','NFL games have four 15-minute quarters; some youth leagues use shorter periods. The game clock can stop for several reasons, including timeouts and incomplete passes.','The team ahead with little time left may prioritize keeping the clock moving.']
    ],
    quiz:[
      ['How many points is a touchdown worth before the try?',['3','6','7'],'1','A touchdown itself is six points.'],
      ['What does a successful standard field goal score?',['1 point','2 points','3 points'],'2','Field goals are worth three points.'],
      ['Touchdown plus a successful extra-point kick usually totals how many?',['6','7','8'],'1','6 + 1 = 7.'],
      ['The offense commits a dead-ball safety in its own end zone. Who scores?',['The defense','The offense','Neither team'],'0','A safety generally awards two points to the defending team.'],
      ['What is a timeout used for?',['Automatically score a point','Stop the game clock temporarily','Create a fifth down'],'1','Teams use timeouts to manage the game and discuss strategy.']
    ]
  },
  {
    id:'core-4',number:4,title:'Meet All 22 Players',category:'Personnel & roles',duration:12,
    summary:'Understand the eleven-player sides and the different jobs on offense, defense, and special teams.',
    goals:['Recognize major positions','Distinguish offense and defense','Explain why the offensive line matters'],
    concepts:[
      ['Offensive skill players','The quarterback directs most plays; running backs carry and catch; receivers run routes; tight ends can receive and block.','Different formations use different combinations of players.'],
      ['The offensive line','The center, guards, and tackles block to create rushing space and protect the passer. Most offensive linemen are not eligible to catch a normal forward pass.','The center typically snaps the ball.'],
      ['Defenders','Defensive linemen attack gaps and rush the quarterback. Linebackers support run defense and coverage. Cornerbacks and safeties defend passes and runs.','The secondary usually includes corners and safeties.'],
      ['Specialists','Kickers, punters, long snappers, returners, and coverage players manage the kicking game and field position.','On a punt, the punting team hopes the opponent must start farther from its goal.']
    ],
    quiz:[
      ['Who usually receives the snap?',['Quarterback','Cornerback','Punter'],'0','The quarterback typically receives the center’s snap.'],
      ['What is a primary job of offensive linemen?',['Kick extra points','Block and protect','Call defensive coverages'],'1','Offensive linemen protect the passer and open rushing lanes.'],
      ['Which position is in the defensive secondary?',['Guard','Safety','Center'],'1','Safeties and cornerbacks are defensive backs.'],
      ['Which specialist often snaps to a punter?',['Long snapper','Wide receiver','Defensive end'],'0','The long snapper handles long-distance snaps.'],
      ['How many players per side are on the field in standard 11-player football?',['7','10','11'],'2','Standard tackle football is played with eleven on each side.']
    ]
  },
  {
    id:'core-5',number:5,title:'Running, Passing & Turnovers',category:'How plays work',duration:12,
    summary:'Learn how the offense gains yards and how defenders disrupt those plans.',
    goals:['Distinguish run and pass concepts','Recognize incomplete passes and turnovers','Understand sacks and fumbles'],
    concepts:[
      ['Running plays','A handoff puts the football in a runner’s hands. Blockers try to create lanes while defenders work to fill them.','An inside run attacks near the offensive line; an outside run attacks the edge.'],
      ['Passing plays','Typically one legal forward pass is allowed per down, and it must be thrown from behind the line of scrimmage. Receivers get open by running routes.','An incomplete pass generally ends the play and does not gain yards.'],
      ['Sacks and pressure','A sack occurs when a quarterback intending to pass is tackled behind the line before throwing. A hurried quarterback may make a poor choice.','Pressure is not the same thing as a sack.'],
      ['Turnovers','An interception occurs when a defender catches a pass. A fumble is a player losing possession of a live football; either team may recover it.','If the offense recovers its own fumble, it may keep possession.']
    ],
    quiz:[
      ['A quarterback hands the ball to a running back. What is it?',['A running play','A punt','A safety'],'0','Handing the ball to a runner is a basic run concept.'],
      ['What usually happens to an incomplete forward pass?',['The clock always keeps running','The play ends without a catch','The defense scores six'],'1','An uncaught legal forward pass is generally incomplete.'],
      ['What is a sack?',['Tackling a passer behind the line before a pass','Catching a punt','A two-point try'],'0','A sack is a quarterback tackle behind the line on a passing play.'],
      ['A defender catches the quarterback’s pass. It is a...',['Fumble','Interception','Field goal'],'1','A defensive catch of an opposing pass is an interception.'],
      ['A running back drops the ball while running. It is a...',['Fumble','Timeout','False start'],'0','Losing possession of a live football is a fumble.']
    ]
  },
  {
    id:'core-6',number:6,title:'Watch Football Like a Fan',category:'Understanding live games',duration:12,
    summary:'Read broadcasts, common referee signals, basic penalties, and typical game situations.',
    goals:['Read the TV scoreboard','Recognize common fouls','Understand what coaches do between plays'],
    concepts:[
      ['Broadcast basics','Scoreboards commonly show team abbreviations, score, quarter, remaining time, down, and yards needed.','3rd-and-2 means it is the third chance and two yards are needed.'],
      ['Flags are not automatically accepted','Referees throw penalty flags for possible fouls. The referee announces enforcement, and some penalties can be declined.','A holding penalty against the offense often erases a nice gain.'],
      ['Common fouls','False start means an offensive player illegally moves before the snap. Offside often means a defender is on the wrong side when the ball is snapped.','Pass interference restricts an eligible opponent’s opportunity to catch a pass.'],
      ['The coach’s choices','Coaches select personnel, formations, and plays according to time, score, distance, and opponent tendencies.','A punt on 4th-and-long may be smarter than risking a turnover.']
    ],
    quiz:[
      ['What does 3rd-and-2 mean?',['Third quarter, 2 minutes left','Third down, 2 yards needed','Two more touchdowns'],'1','It names down and yards required for a first down.'],
      ['A referee throws a flag. Does that automatically mean a penalty is enforced?',['Yes, always','Not necessarily','Only in the first quarter'],'1','Officials confer and explain their ruling; some flags are picked up or penalties declined.'],
      ['Which is usually an offensive pre-snap foul?',['False start','Interception','Touchback'],'0','False start is an illegal movement by the offense before the snap.'],
      ['Why might a team punt on 4th-and-15?',['Improve field position','Score a touchdown automatically','Keep the ball forever'],'0','Punting may force the opponent to start deeper in its territory.'],
      ['What does the game clock show?',['Time remaining in a period','Total yards gained','Number of players'],'0','The game clock tracks the period time.']
    ]
  },
  {
    id:'core-7',number:7,title:'Formations & Personnel',category:'Football intelligence',duration:13,
    summary:'Spot offensive and defensive shapes and recognize why teams line up differently.',
    goals:['Identify shotgun and under-center looks','Understand personnel groupings','Differentiate front and coverage'],
    concepts:[
      ['Where the quarterback stands','Under center means the QB is immediately behind the center. In shotgun, the QB stands several yards back and receives a longer snap.','Either alignment can lead to run or pass plays.'],
      ['Personnel packages','In common offensive shorthand, 11 personnel means one running back, one tight end, and usually three wide receivers. The first number is backs and the second tight ends.','12 personnel is one running back and two tight ends.'],
      ['The defense responds','Defensive fronts describe players near the line. Nickel defenses often use five defensive backs to handle extra receivers.','A defensive alignment is a clue, not a guaranteed assignment.'],
      ['Motion and shifts','An eligible offensive player may move before the snap within the rules. Motion can change spacing or reveal defensive reactions.','A corner following a receiver may hint at man coverage.']
    ],
    quiz:[
      ['Where does a shotgun quarterback normally line up?',['Several yards behind the center','Next to a sideline official','In the end zone'],'0','Shotgun uses a deeper starting position.'],
      ['What does 12 personnel usually contain?',['Two QBs and one center','One running back and two tight ends','Twelve offensive players'],'1','The numbers refer to running backs and tight ends.'],
      ['What does a nickel defensive package generally add?',['A fifth defensive back','An extra quarterback','An extra kicker'],'0','Nickel is a five-defensive-back grouping.'],
      ['Why can offensive motion be helpful?',['It can reveal defensive reactions','It stops the game clock','It gives a free first down'],'0','Defensive movement can provide information.'],
      ['Do formations always tell you exactly which play is coming?',['Yes','No','Only on first down'],'1','Teams disguise intentions and run multiple plays from the same look.']
    ]
  },
  {
    id:'core-8',number:8,title:'The Language of the Huddle',category:'Football intelligence',duration:12,
    summary:'Decode simple play calls, assignments, snap counts, and pre-snap changes.',
    goals:['Explain a play call','Distinguish motion from an audible','Understand pre-snap communication'],
    concepts:[
      ['Calls have components','A play call can identify formation, motion, protection, run/pass concept, and a snap instruction. Different teams use different naming systems.','“Shotgun Trips Right, Slant” is an illustrative call, not a universal play name.'],
      ['Every player has a job','Knowing the play means knowing your own assignment and how it fits the group. The same formation may feature a run, pass, or fake.','A receiver may clear space for another receiver rather than be the target.'],
      ['Audibles','A quarterback can change an offensive play at the line within the play clock and applicable rules. Players need to hear or recognize the new call.','An audible might change a run into a quick pass against a crowded front.'],
      ['Pre-snap clues','Players study defenders, spacing, leverage, and potential blitzers before the ball moves. Good communication prevents confusion.','Seeing one defender move is a clue, not certainty.']
    ],
    quiz:[
      ['What is an audible?',['Changing the play before the snap','A type of punt','The final whistle'],'0','An audible is a pre-snap play change.'],
      ['Can different teams use different names for the same type of play?',['Yes','No','Only in the NFL'],'0','Playbook language varies between coaching systems.'],
      ['A receiver is not targeted on a pass. Can their route still matter?',['Yes, it can influence defenders','No, it was always pointless','Only on fourth down'],'0','Routes can open space for teammates.'],
      ['What does the play clock regulate?',['Time allowed to start the next play','How long a pass can travel','How many yards to a first down'],'0','The offense must snap before the play clock expires.'],
      ['A defender moves with a receiver in motion. What should the QB think?',['It is evidence that may suggest man coverage','Man is guaranteed','A penalty is automatic'],'0','It is a useful clue, but defenses can disguise.']
    ]
  },
  {
    id:'core-9',number:9,title:'How a Playbook Works',category:'Football intelligence',duration:14,
    summary:'Learn the building blocks of runs, route concepts, protections, and defensive answers.',
    goals:['Interpret basic route diagrams','Recognize run/pass combinations','Learn the idea of a defensive counter'],
    concepts:[
      ['Routes and combinations','A route describes a receiver’s planned path: slant, out, curl, go, and more. Route concepts combine multiple routes to create choices for the quarterback.','Two receivers running different routes can stretch a defender’s responsibilities.'],
      ['Runs have a design','Inside zone asks blockers to work together to create lanes; power schemes frequently feature a pulling blocker. The ball carrier reads how lanes develop.','Two running plays can look similar at the snap but attack different gaps.'],
      ['Protection matters','Pass protection sets blocking responsibilities so the QB has time. Defenses counter with rushers, overloads, stunts, and disguised pressure.','Extra rushers can force a fast throw or a protection adjustment.'],
      ['Every answer has a counter','A play can work against one defense and struggle against another. Coaches build complementary calls so defenders cannot easily predict the next action.','A quick pass can attack an area vacated by an aggressive blitzer.']
    ],
    quiz:[
      ['What does a receiver route describe?',['Their intended path','Their uniform number','A timeout signal'],'0','A route is the path planned for a passing play.'],
      ['What is a “go” route?',['A mostly vertical route downfield','A backward handoff','A pass to a referee'],'0','Go routes attack vertically.'],
      ['What is a major purpose of pass protection?',['Give the QB time and space','Ensure a touchdown','Stop the game clock'],'0','Pass protection helps handle the defensive rush.'],
      ['If the defense sends extra rushers, what can help?',['A quick passing concept','Waiting forever to throw','No offensive blockers'],'0','Quick concepts can beat pressure when executed and read correctly.'],
      ['Why might a coach pair different plays from one formation?',['To make the offense less predictable','To change the ball color','Because downs do not matter'],'0','Same-look complementary plays challenge defensive expectations.']
    ]
  },
  {
    id:'core-10',number:10,title:'Situational Football',category:'Football intelligence',duration:15,
    summary:'Combine time, score, down, field position, and risk into smarter football decisions.',
    goals:['Compare fourth-down options','Manage late-game time','Understand red-zone and backed-up choices'],
    concepts:[
      ['Score changes risk','A team ahead by three points with seconds left may prefer ball security. A team down eight may need a touchdown and two-point try.','The right call depends on the whole game state, not one formation.'],
      ['Field position matters','A short yardage attempt deep in your own end can be riskier than the same attempt near midfield. Punting may have strategic value.','A failed fourth down gives the opponent excellent field position.'],
      ['Red-zone choices','Inside the opponent’s 20, space shrinks, defenders have less deep field to cover, and touchdowns versus field goals become important tradeoffs.','A short completion inbounds can be costly when the offense is short on time.'],
      ['Clock awareness','Timeouts, out-of-bounds plays, incomplete passes, inbounds tackles, and kneel-downs can all affect the remaining time. Rules vary by league.','Late in a game, a short gain in the middle can be worse than an incompletion if it burns precious time.']
    ],
    quiz:[
      ['Down by eight late in a normal game, what could tie the score?',['Touchdown and two-point try','One field goal','One safety'],'0','A touchdown and successful two-point try total eight points.'],
      ['Why is failing on fourth down at your own 10 dangerous?',['Opponent gets excellent field position','You automatically win','The defense must punt'],'0','The opponent can take over very close to scoring.'],
      ['What is the red zone?',['Inside the opponent’s 20-yard line','The entire third quarter','Only the end zone'],'0','The red zone is the area from the opponent’s 20 to its goal line.'],
      ['Late in the game with no timeouts, which result usually stops the clock?',['Incomplete pass','A tackled inbounds runner','A completed short pass inbounds'],'0','An incomplete forward pass usually stops the game clock.'],
      ['What makes a play decision smart?',['Considering time, score, field position, and matchup','Picking the same play every time','Always throwing deep'],'0','Good situational decisions weigh multiple tradeoffs.']
    ]
  }
];
export const fundamentals = coreLessons.slice(0,6);
export const advancedCore = coreLessons.slice(6);
