const stories=[
{topic:'School Phone Policy',desk:'EDUCATION',paragraphs:[`Parents, students and teachers filled the Fairview School Board's gymnasium on Tuesday evening for a debate over how phones should be handled during the school day. Speakers on both sides described the issue as more complicated than whether students should have access to technology.`,`Several parents argued that carrying a phone helps children feel safe and provides a way to contact family members in an emergency. Teachers, meanwhile, described lessons repeatedly interrupted by notifications and disputes between students over videos recorded without permission. A student representative asked the board to consider students' concerns before changing the rules.`,`Following three public meetings, the board voted 5–2 to require middle-school students to place their phones in locked pouches during class hours. The policy will begin next September. High-school students are not covered by the new rule, and the district estimates it will spend $8,400 to purchase the pouches.`,`Board members supporting the change said the goal was to reduce distractions rather than prevent communication. Opponents questioned whether the district had considered enough alternatives. The schools will share additional implementation details with families before the policy begins.`],headlines:[['New Phone Rule Will Cover Every Student in the District','misleading'],['Fairview Middle School Phone Rule Starts Next September','accurate'],['District to Spend $18,400 on Phone-Locking Pouches','misleading']],questions:[['Which students must store their phones?',['All district students','Middle-school students','High-school students','Only elementary students'],1,0],['When will the policy begin?',['Next January','Next May','Next September','Immediately'],2,-1],['How much will the district spend on pouches?',['$4,800','$8,400','$18,400','$24,000'],1,2]]},
{topic:'Animal Shelter Policy',desk:'COMMUNITY',paragraphs:[`The Brookdale Animal Shelter is changing its adoption process after hearing from families who struggled during their first days with a new pet. Staff said that a successful adoption can still involve a difficult adjustment period, particularly for dogs that are unsettled by unfamiliar sounds, schedules and people.`,`Several adopters told shelter workers they felt overwhelmed when their pets were anxious at home. Others said they worried they would have to pay another fee if an adoption did not work out. Shelter staff said rushed decisions can be stressful for animals as well as families.`,`Beginning March 1, every dog adoption will include a seven-day adjustment period. During that week, adopters may contact shelter staff for advice and can return the dog without an additional fee. The policy applies only to dogs; cats and other shelter animals are not included.`,`The shelter arranged 146 dog adoptions last year. Officials hope that offering support during the first week will help more families feel prepared, although they cautioned that each animal's adjustment may take a different amount of time.`],headlines:[['Brookdale Shelter Adds Seven-Day Adjustment Period for Dog Adoptions','accurate'],['New Shelter Rule Requires a 30-Day Trial Before Any Animal Adoption','misleading'],['Policy Will Apply to Cats, Dogs, and All Other Shelter Animals','misleading']],questions:[['How long is the adjustment period?',['Three days','Seven days','14 days','30 days'],1,3],['Which animals does the policy apply to?',['Dogs only','Cats only','All animals','Dogs and cats'],0,2],['When does the policy begin?',['January 1','February 1','March 1','April 1'],2,-1]]},
{topic:'Food Labeling',desk:'FOOD & AGRICULTURE',paragraphs:[`A new labeling requirement for honey sold at farmers' markets is drawing mixed reactions from shoppers and small beekeepers. Supporters say customers should have clearer information about where food comes from. Some producers argue that even a small change in packaging can cost time and money.`,`The state agriculture department announced that packaged honey sold at farmers' markets must identify the county in which it was produced. The requirement begins July 1 and applies only to containers larger than four ounces.`,`Officials emphasized that producers will not have to print individual beekeepers' names on labels. The rule also leaves existing food-safety inspections unchanged. The department estimates that approximately sixty small producers will be affected by the new requirement.`,`At a recent market, shoppers said they appreciated more specific information about locally produced food, while vendors asked the department for clear instructions before the summer deadline. The department said guidance would be provided before enforcement begins.`],headlines:[['New Honey Labels Must Identify the County of Production','accurate'],['State to Require Honey Labels to Name Every Beekeeper','misleading'],['New Rule Applies to All Honey Containers, Regardless of Size','misleading']],questions:[['What information must the label include?',["The beekeeper's name",'The county of production',"The farm's street address",'A list of ingredients'],1,0],['When does the rule take effect?',['May 1','June 1','July 1','August 1'],2,-1],['Which containers are covered?',['All sizes','Larger than four ounces','Smaller than four ounces','Only one-pound containers'],1,0]]},
{topic:"Women's Soccer",desk:'SPORTS',paragraphs:[`Supporters of the Lakeside women's soccer club received unexpected venue news this week: the team will leave its regular stadium temporarily while repairs are completed. The announcement drew concern from season-ticket holders who have grown used to the atmosphere and convenience of the team's familiar home ground.`,`Club representatives confirmed that Lakeside will play its home matches at Memorial Field this season, rather than canceling or moving games out of the area. The team has scheduled 12 home matches, with the first set for August 9.`,`Ticket prices will remain unchanged, and season-ticket holders will retain their reserved seating locations at the temporary venue. The club said it would provide fans with additional travel and entry information ahead of opening day.`,`Players said they were relieved to have a confirmed place to compete, while some supporters remained concerned about accessibility and the game-day experience. Stadium repairs are expected to be finished by next spring, when the club hopes to return to its usual field.`],headlines:[['Lakeside Soccer Club Moves 12 Home Matches to Memorial Field','accurate'],['Team Announces All Home Matches Will Be Played Without Fans','misleading'],['Lakeside Schedules 21 Home Matches for the Coming Season','misleading']],questions:[['Where will the team play home matches?',['Memorial Field','Its usual stadium','The university gym','A neighboring town'],0,-1],['How many home matches are scheduled?',['10','12','18','21'],1,3],['When is the first match?',['July 9','August 9','September 9','October 9'],1,-1]]}
];
// Chain configuration. This is a MIDDLE activity: never create a replacement session ID.
const TEAM_ID = '2';
const CHAIN_ID = 'A';
const DATAPIPE_EXPERIMENT_ID = 'wlEDnZ5skDe5';
const NEXT_PROJECT_URL = 'https://miamac10.github.io/Final-Project-Group-3/';
const DATAPIPE_ENDPOINT = 'https://pipe.jspsych.org/api/data/';
const $=id=>document.getElementById(id), app=$('app');
let ordered=[],index=0,answers=[];
const incoming = new URLSearchParams(window.location.search);
const session = incoming.get('sid');
const incomingChain = incoming.get('chain');
// Restrict identifiers to short, URL-safe anonymous tokens (not names or email addresses).
const validSession = typeof session === 'string' && /^[A-Za-z0-9_-]{6,128}$/.test(session);
const validChain = incomingChain === CHAIN_ID;
let finalFiles = null;
const acceptedFiles = new Set();
const attemptedFiles = new Set();
let uploadInProgress = false;
function shuffle(a){return [...a].sort(()=>Math.random()-.5)}function esc(t){return String(t).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}function draw(s){app.innerHTML=s;window.scrollTo({top:0,behavior:'smooth'})}function meta(stage){return `<div class="meta"><span>${esc(stage)}</span><span class="stage-pill">STORY ${index+1} OF ${ordered.length}</span></div>`}function button(id,label){return `<button class="btn" id="${id}">${label} &rarr;</button>`}
function welcome(){draw(`<div class="hero"><section><div class="eyebrow"><i class="dot"></i> AN INTERACTIVE MEMORY EXPERIMENT</div><h2>Can you remember <em>what really happened?</em></h2><p class="lead">News headlines are quick to read—and surprisingly easy to remember. But what happens when a headline changes a detail from the article you just read?</p><div class="features"><div class="feature"><span>01</span><div><b>Read the original story</b><small>Four fictional news reports, presented without headlines.</small></div></div><div class="feature"><span>02</span><div><b>Try a short word challenge</b><small>A brief distraction before you encounter new headlines.</small></div></div><div class="feature"><span>03</span><div><b>View the headlines and test your memory</b><small>Answer only using what the original articles actually said.</small></div></div></div>${button('start','Enter the newsroom')}<p class="fine">A psychology demonstration. Anonymous responses will be sent securely to DataPipe when you finish. Stories are fictional, not real reporting.</p></section><aside class="cover"><div class="circle">SPECIAL<br>EDITION</div><b>THE<br>MEMORY<br>REPORT</b><small>Read between the lines.<br>Remember beyond the headline.</small></aside></div>`);$('start').onclick=()=>{ordered=shuffle(stories).map(s=>({...s,headlines:shuffle(s.headlines)}));index=0;answers=[];article()}}
function article(){const s=ordered[index];draw(`${meta('ORIGINAL REPORT · '+s.desk)}<h2 class="page-title">Read the original report.</h2><p class="lead">There is no headline yet. Pay attention to details like <b>who, what, when, where and how many</b>. Once you continue, you cannot return to this report until the results.</p><article class="story"><div class="desk"><span>THE DAILY CHRONICLE / ${esc(s.desk)}</span><span>ORIGINAL REPORT</span></div><div class="byline">By The Chronicle News Desk · Research edition</div>${s.paragraphs.map(p=>`<p>${esc(p)}</p>`).join('')}</article><div class="actions"><span class="fine">Read at your own pace.</span>${button('done','I finished reading')}</div>`);$('done').onclick=distractor}
const wordSets=[{words:['APPLE','BANANA','CARROT','GRAPE'],odd:'CARROT',why:'Carrot is a vegetable; the others are fruits.'},{words:['SOCCER','TENNIS','BASEBALL','HAMMER'],odd:'HAMMER',why:'Hammer is a tool; the others are sports.'},{words:['ROBIN','EAGLE','SALMON','SPARROW'],odd:'SALMON',why:'Salmon is a fish; the others are birds.'},{words:['PIANO','GUITAR','VIOLIN','LANTERN'],odd:'LANTERN',why:'Lantern is not a musical instrument.'}];
function distractor(){let set=wordSets[index],selection=null;draw(`${meta('QUICK WORD CHALLENGE')}<div class="eyebrow">A SHORT MENTAL RESET</div><h2 class="page-title">Which word doesn't belong?</h2><p class="lead">Before the headline feed, try this unrelated mini challenge.</p><div class="word-grid">${shuffle(set.words).map(w=>`<button class="choice" data-word="${w}">${w}</button>`).join('')}</div><div id="word-feedback" class="hint" aria-live="polite">Select a word to continue.</div><div class="actions"><span class="fine">This challenge does not count toward your score.</span><button class="btn" id="go" disabled>View headline feed &rarr;</button></div>`);document.querySelectorAll('[data-word]').forEach(b=>b.onclick=()=>{selection=b.dataset.word;document.querySelectorAll('[data-word]').forEach(x=>x.classList.toggle('selected',x===b));$('word-feedback').textContent=selection===set.odd?'Correct! '+set.why:'Good try. '+set.why;$('go').disabled=false});$('go').onclick=headlines}
function headlines(){let s=ordered[index],n=0;function show(){draw(`${meta('LATEST HEADLINES')}<div class="eyebrow">INCOMING NEWS ALERT</div><h2 class="page-title">A headline just arrived.</h2><p class="lead">Read the following headline, then move to the next one. You will soon answer questions about the original report.</p><div class="feed"><div class="feed-head"><span class="avatar">DC</span><div><b>The Daily Chronicle</b><span class="hint" style="margin:2px 0">${esc(s.desk)} Desk · News feed</span></div></div><h3>${esc(s.headlines[n][0])}</h3><div class="foot">LATEST UPDATE &nbsp; • &nbsp; HEADLINE ${n+1} OF ${s.headlines.length} &nbsp; • &nbsp; <span class="mark">NEWS ALERT</span></div></div><div class="actions"><span class="fine">A headline may not tell the whole story.</span>${button('next',n===s.headlines.length-1?'Start memory questions':'Next headline')}</div>`);$('next').onclick=()=>{if(++n<s.headlines.length)show();else memory()}}show()}
function memory(){let s=ordered[index],qIdx=0;function show(){let q=s.questions[qIdx],selected=-1;draw(`${meta('MEMORY CHECK · QUESTION '+(qIdx+1)+' OF '+s.questions.length)}<div class="eyebrow">WHAT DO YOU REMEMBER?</div><h2 class="page-title">Think back to the original article.</h2><div class="alert">Answer from what the <b>full original article</b> stated, not from any headline. You cannot go back to read it now.</div><div class="question"><small>QUESTION ${String(qIdx+1).padStart(2,'0')}</small><h3>${esc(q[0])}</h3></div><div class="answers">${q[1].map((v,j)=>`<button class="choice" data-answer="${j}"><span class="letter">${'ABCD'[j]}</span><span>${esc(v)}</span></button>`).join('')}</div><div class="actions"><span class="fine">Choose one response; your choice is final.</span><button class="btn" id="submit" disabled>Submit response &rarr;</button></div>`);document.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>{selected=Number(b.dataset.answer);document.querySelectorAll('[data-answer]').forEach(x=>x.classList.toggle('selected',x===b));$('submit').disabled=false});$('submit').onclick=()=>{answers.push({topic:s.topic,question:q[0],chosen:q[1][selected],correctAnswer:q[1][q[2]],correct:selected===q[2],misinfo:selected===q[3],type:selected===q[2]?'Correct recall':selected===q[3]?'Headline-consistent error':'Other error'});if(++qIdx<3)show();else if(++index<ordered.length)article();else results()}}show()}
function results(){const correct=answers.filter(a=>a.correct).length,misinfo=answers.filter(a=>a.misinfo).length,other=answers.length-correct-misinfo,pct=Math.round(100*correct/answers.length);draw(`<div class="eyebrow">YOUR MEMORY REPORT IS READY</div><h2 class="page-title">The story behind your score.</h2><p class="lead">You completed all four stories. Here's how closely your recall matched what the original articles said.</p><div class="scores"><div class="score accent"><strong>${pct}%</strong><small>Correct recall · ${correct} of ${answers.length}</small></div><div class="score"><strong>${misinfo}</strong><small>Answers matching altered headline details</small></div><div class="score"><strong>${other}</strong><small>Other incorrect answers</small></div></div><h3 class="page-title" style="font-size:28px">Your answers, explained</h3><p class="fine">Open any question below to compare your answer with the fact in the original report.</p>${ordered.map(s=>`<section><h3 style="border-bottom:2px solid #263b4a;padding-bottom:9px;font-family:'Playfair Display',serif">${esc(s.topic)}</h3>${answers.filter(a=>a.topic===s.topic).map(a=>`<details class="result-item"><summary><span class="result-tag">${a.correct?'✓ CORRECT':a.misinfo?'! HEADLINE-MATCHING ERROR':'○ OTHER ERROR'}</span>${esc(a.question)}</summary><p><b>Your answer:</b> ${esc(a.chosen)}<br><b>Original article:</b> ${esc(a.correctAnswer)}</p></details>`).join('')}</section>`).join('')}<div class="conclusion"><div class="eyebrow">WHY THIS STUDY MATTERS</div><h3>Headlines can shape the details we remember.</h3><p>News headlines are designed to capture attention quickly, but they can simplify, exaggerate, or change important information. In this activity, you first read each full article and later saw a mixture of accurate and misleading headlines. The memory questions asked what the <b>article</b> really said—not what the headlines suggested.</p><p>${misinfo?`You selected <b>${misinfo}</b> ${misinfo===1?'answer':'answers'} that matched an altered headline detail. This is consistent with the kind of memory confusion researchers study, but it does not prove that a headline caused your answer.`:`You did not select any of the specific altered details targeted by the misleading headlines. That is encouraging, but it does not mean anyone is immune to misleading information.`}</p><p><b>What you can take away:</b> Memory is reconstructive rather than a perfect replay. Repeated or newer information can sometimes become mixed with what we originally learned. When a headline makes a strong claim, read the underlying article and double-check exact numbers, dates, and who a rule applies to before sharing or repeating it.</p><p class="fine">Research note: This activity is a demonstration, not a controlled experiment. Without a comparison group that sees only accurate headlines, an individual's results cannot establish that misinformation caused particular mistakes.</p></div><div id="save-status" class="save-status" role="status" aria-live="polite"><strong>Saving your results...</strong><p>Please keep this page open. You will move to the next activity after both files are accepted.</p></div><div id="save-recovery" class="save-recovery" hidden><button class="btn" id="retry-save">Retry saving &rarr;</button><button class="btn secondary" id="download-summary">Download summary CSV</button><button class="btn secondary" id="download-trials">Download trials CSV</button></div>`);
  finalFiles = buildCsvFiles(correct, misinfo, other, pct);
  $('retry-save').onclick = uploadAllFiles;
  $('download-summary').onclick = () => downloadCsv(finalFiles[0]);
  $('download-trials').onclick = () => downloadCsv(finalFiles[1]);
  void uploadAllFiles();
}

function csvEncode(rows) {
  return rows.map(row => row.map(value => '"' + String(value ?? '').replace(/"/g, '""') + '"').join(',')).join('\r\n') + '\r\n';
}

function buildCsvFiles(correct, misinfo, other, pct) {
  const ids = [session, TEAM_ID, CHAIN_ID];
  const summary = csvEncode([
    ['session_id', 'team_id', 'chain_id', 'total_questions', 'correct_recall', 'headline_consistent_errors', 'other_errors', 'percentage_correct'],
    [...ids, answers.length, correct, misinfo, other, pct]
  ]);
  const trials = csvEncode([
    ['session_id', 'team_id', 'chain_id', 'trial_number', 'topic', 'question', 'selected_answer', 'correct_answer', 'correct', 'headline_consistent_error', 'classification'],
    ...answers.map((answer, i) => [...ids, i + 1, answer.topic, answer.question, answer.chosen, answer.correctAnswer, answer.correct, answer.misinfo, answer.type])
  ]);
  return [
    { filename: `summary_${session}.csv`, data: summary },
    { filename: `trials_${session}.csv`, data: trials }
  ];
}

function downloadCsv(file) {
  const blob = new Blob([file.data], {type: 'text/csv;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = file.filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

async function sendFile(file) {
  attemptedFiles.add(file.filename);
  const response = await fetch(DATAPIPE_ENDPOINT, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({experimentID: DATAPIPE_EXPERIMENT_ID, filename: file.filename, data: file.data})
  });
  let payload = {};
  try { payload = await response.json(); } catch (_) { /* Some HTTP failures are not JSON. */ }
  const duplicateOnRetry = response.status === 400 && payload.error === 'FILE_EXISTS' && attemptedFiles.has(file.filename) && file.attemptCount > 1;
  if (response.status === 201 || response.status === 202 || duplicateOnRetry) {
    acceptedFiles.add(file.filename);
    return;
  }
  throw new Error(payload.message || payload.error || `HTTP ${response.status}`);
}

async function uploadAllFiles() {
  if (uploadInProgress || !finalFiles) return;
  uploadInProgress = true;
  $('save-recovery').hidden = true;
  $('save-status').innerHTML = '<strong>Saving your results...</strong><p>Please keep this page open while your files are accepted.</p>';
  try {
    // Upload individually and retain confirmation per file, so retries skip accepted files.
    for (const file of finalFiles) {
      if (acceptedFiles.has(file.filename)) continue;
      file.attemptCount = (file.attemptCount || 0) + 1;
      await sendFile(file);
    }
    if (finalFiles.every(file => acceptedFiles.has(file.filename))) {
      $('save-status').innerHTML = '<strong>Results saved successfully.</strong><p>Continuing to the next activity...</p>';
      const destination = new URL(NEXT_PROJECT_URL);
      destination.searchParams.set('sid', session);
      destination.searchParams.set('chain', CHAIN_ID);
      window.location.assign(destination.toString());
    }
  } catch (err) {
    $('save-status').innerHTML = `<strong>Saving failed.</strong><p>Your results have not all been confirmed. You will stay on this page. Check your connection and select Retry saving. If it keeps failing, download both CSV backups and contact the study team.</p><p class="fine">Details: ${esc(err.message || 'Unknown upload error')}</p>`;
    $('save-recovery').hidden = false;
  } finally {
    uploadInProgress = false;
  }
}

function blockInvalidEntry() {
  draw(`<div class="eyebrow">ACTIVITY LINK REQUIRED</div><h2 class="page-title">Please start with the preceding activity.</h2><div class="alert" role="alert">This is the middle activity in a connected study. Your link must include a valid anonymous session ID (sid) and chain=${esc(CHAIN_ID)} from the preceding activity. This link is missing the required information or has the wrong chain. Please return to the preceding activity and continue using its Next button. This experiment cannot start from this page directly.</div>`);
}

if (validSession && validChain) welcome();
else blockInvalidEntry();
