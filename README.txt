THE DAILY CHRONICLE — PSYC 402 FINAL PROJECT
============================================
Team: 2 | Chain: A | Position: MIDDLE
DataPipe experiment ID: wlEDnZ5skDe5
Next activity: https://miamac10.github.io/Final-Project-Group-3/

FILES TO REPLACE AT THE ROOT OF YOUR EXISTING GITHUB REPOSITORY
----------------------------------------------------------------
index.html  — existing entry point (unchanged, included for completeness)
styles.css  — existing design plus upload-status styles
script.js   — existing game plus chain session validation, DataPipe CSV uploads, and redirect
README.txt  — updated instructions

Keep the exact filenames above; remove the (2) suffixes from uploaded original names.
These files are designed for a static GitHub Pages site. No server or npm build required.

IMPORTANT: MIDDLE ACTIVITY — OPEN WITH A VALID INCOMING LINK
-----------------------------------------------------------
This project intentionally will NOT start when opened directly without query parameters.
The preceding activity must send the participant here with both:
  ?sid=ANONYMOUS_SESSION_ID&chain=A
The app accepts a 1–128-character anonymous sid made of letters, digits, underscore or hyphen.
It does not create a replacement sid. A missing/invalid sid or wrong chain displays a stop message.

For a local test, use a query string such as:
  index.html?sid=TEST-TEAM2-001&chain=A
Do not use the same test ID for different participants. Do not share names or personal
identifiers in sid. For a fresh full test use a different anonymous test ID.

PRESERVED EXPERIMENT
--------------------
1. Participants read four fictional articles (shuffled order).
2. Each article is followed by a word challenge.
3. Three shuffled accurate/misleading headlines appear one at a time.
4. Three article-based memory questions follow each article (12 total).
5. The existing scoring and explanation/conclusion remain on the results screen.

AUTOMATIC SAVING AND HANDOFF
---------------------------
After the twelfth response, the app immediately renders the results plus a Saving... message.
It posts two files to https://pipe.jspsych.org/api/data/ using experimentID wlEDnZ5skDe5:
  summary_<sid>.csv — one participant-level record
  trials_<sid>.csv  — twelve question-level records
Both files include session_id, team_id, chain_id; files do NOT include personal identifiers.
Responses with HTTP 201 or 202 are accepted. On retries, HTTP 400 with FILE_EXISTS
is accepted for a previously sent filename. A file already acknowledged is not resent.
Only after BOTH file uploads succeed will the browser navigate to:
  https://miamac10.github.io/Final-Project-Group-3/?sid=<same sid>&chain=A
The participant never clicks a separate Save button.

If either upload fails, the game stays on the results screen and offers Retry saving,
Download summary CSV, and Download trial CSV. Backup downloads are not shown normally.
Retry keeps the same filenames and CSV contents. Do not refresh the page on failure,
because in-memory responses would be lost; use the backup CSV download buttons instead.

TEST BEFORE PARTICIPANT COLLECTION
----------------------------------
1. Configure your DataPipe dashboard to accept data under this experiment ID.
2. Publish the four files at your existing GitHub Pages repo root.
3. Verify that the bare site URL refuses to start and explains the preceding activity.
4. Verify ?sid=TEST-UNIQUE-001&chain=B is rejected.
5. Complete a run with ?sid=TEST-UNIQUE-002&chain=A and confirm the Saving... status.
6. Verify BOTH CSV files exist in DataPipe, contain matching identifiers, and have 1/12 rows.
7. Verify handoff to Group 3 retains identical sid and chain=A.
8. Test a failed upload using a blocked network request and verify retry/download options;
   a failed upload must NOT redirect.
9. Coordinate with the preceding activity: its link must pass sid and chain=A.

PRIVACY AND RESEARCH NOTES
--------------------------
Fictional stories; there is no accurate-headline-only control group. Individual mistakes
alone do not prove that headlines caused memory errors. No names, emails, passwords,
API keys, or other personal information are requested or sent by the experiment code.
The DataPipe experiment ID is public configuration, not an API key. DataPipe still
receives the normal network metadata associated with web requests.

EDITING
-------
Stories, headlines and quiz questions remain in the `stories` array in script.js.
Keep correct-answer and misleading-answer indices aligned with answer choices.
