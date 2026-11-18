THE DAILY CHRONICLE — MEMORY GAME | TEAM 2, CHAIN A, MIDDLE
==========================================================

FILES TO REPLACE IN GITHUB REPOSITORY ROOT
------------------------------------------
index.html — original structure, unchanged
styles.css — original styling plus save/recovery status styling
script.js — original stimuli/task/scoring plus chain validation and DataPipe
README.txt — updated configuration and deployment instructions

DEPLOYMENT
----------
1. Upload these four files to the root of your existing GitHub repository.
2. Keep their names EXACTLY index.html, styles.css, script.js, README.txt.
3. Commit the changes and wait for GitHub Pages to publish.
4. Test with a predecessor-style link (replace YOUR_SITE_URL with your Pages URL):
   YOUR_SITE_URL?sid=TEST123456789&chain=A
   This is only a functional test: completing it submits real data to DataPipe.
5. Do not publish a public standalone participant link without sid and chain.

CONFIGURATION (script.js)
-------------------------
TEAM_ID = '2'
CHAIN_ID = 'A'
DATAPIPE_EXPERIMENT_ID = 'wlEDnZ5skDe5'
POSITION = MIDDLE
NEXT_PROJECT_URL = https://miamac10.github.io/Final-Project-Group-3/
API = https://pipe.jspsych.org/api/data/

DATA / CHAIN BEHAVIOR
---------------------
- The middle activity requires an incoming anonymous sid and chain=A in the URL.
- Missing/invalid sid or incorrect/missing chain blocks the experiment; no new sid is generated.
- Original four fictional stories, word challenges, headlines, 12 memory questions,
  scoring, detailed results, and conclusion are preserved.
- On the last memory response, the app automatically generates two CSV files:
    summary_<sid>.csv — participant-level counts and score
    trials_<sid>.csv  — one row per question, including classifications
  Both include session_id, team_id, chain_id. No names, email addresses,
  passwords, API keys, or other participant identifying fields are collected.
- It uploads both files to DataPipe using JSON POST requests.
  HTTP 201 and 202 count as accepted; FILE_EXISTS after a retry counts as accepted.
- Only after BOTH uploads are accepted does it redirect with the same sid and chain:
  https://miamac10.github.io/Final-Project-Group-3/?sid=<sid>&chain=A
- If an upload fails, there is no redirect. The page offers Retry and both
  CSV downloads for backup. Already-confirmed files are skipped on retry.
- DataPipe dashboard must be configured to accept new data and have a connected
  storage provider. This app is static and requires no application server.

TESTING CHECKLIST
-----------------
[ ] Open site without params: blocked with clear instructions.
[ ] Open ?sid=TEST123456789&chain=B: blocked.
[ ] Open ?sid=TEST123456789&chain=A: welcome loads.
[ ] Finish the four original stories and 12 questions.
[ ] Saving status appears automatically; no separate Save button.
[ ] Check DataPipe for both CSV files; verify identifiers and scoring.
[ ] Confirm URL at next project preserves sid and chain=A.
[ ] For failure testing, use browser DevTools network blocking for DataPipe:
    the app must stay put and show retry and both backup downloads.
[ ] Re-enable network and retry; then confirm successful redirect.

CAUTION
-------
Do not use a real participant's sid in test submissions. Avoid testing twice
with the same sid because DataPipe prevents duplicate filenames. This activity
is a demonstration and contains no accurate-headlines-only control group.
