THE DAILY CHRONICLE — TEAM 2 / CHAIN A / MIDDLE
================================================

This is the existing four-story memory game with automatic DataPipe
saving and chain navigation added. Stories, headlines, scoring, visual
design, and other experiment phases remain unchanged.

REPLACE THESE FILES IN YOUR GITHUB REPOSITORY ROOT
-------------------------------------------------
index.html  (same markup, included for a complete deployable set)
script.js   (updated session validation, CSV exports, saving and redirect)
styles.css  (existing design plus save-status styles)
README.txt  (updated instructions)

Upload the four files with THESE EXACT names, not names such as
script(2).js. Keep all files in the repository root, then Commit changes.

CONFIGURATION (script.js)
-------------------------
TEAM_ID = '2'
CHAIN_ID = 'A'
CHAIN_POSITION = 'MIDDLE'
DATAPIPE_EXPERIMENT_ID = 'wlEDnZ5skDe5'
NEXT_PROJECT_URL = https://miamac10.github.io/Final-Project-Group-3/

SESSION REQUIREMENT
-------------------
This is a MIDDLE project. Participants must arrive via the preceding
activity with both sid and chain=A in the URL. For example, to test:
https://YOUR-GITHUB-PAGES-SITE/?sid=TEST123456&chain=A

Opening the site without parameters, or with chain other than A,
intentionally displays a block message. It does NOT create a new sid.
For a real study, the preceding activity must create and pass the sid.

END-OF-EXPERIMENT BEHAVIOR
--------------------------
After question 12 is answered, the game retains its scored results,
question explanations, and conclusion. It automatically submits
summary_<sid>.csv and trials_<sid>.csv to DataPipe as JSON POSTs:
https://pipe.jspsych.org/api/data/

Both files contain session_id, team_id, and chain_id columns.
HTTP 201 and 202 count as accepted. On retries, HTTP 400 with error
FILE_EXISTS counts as accepted for that same filename.

Only after both files are accepted does the app redirect to
https://miamac10.github.io/Final-Project-Group-3/?sid=<same>&chain=A

If saving fails, the participant stays on their results page and sees
Retry saving plus two local CSV download buttons. Retrying retains
accepted-file status and does not resend already confirmed files.

TESTING & DEPLOYMENT
--------------------
1. Upload the four files with exact filenames to your GitHub Pages repo.
2. Confirm Pages is publishing from the folder containing index.html.
3. Open the Pages URL without parameters: it should be blocked.
4. Open it with ?sid=TEST123456&chain=A and finish all questions.
5. Verify both CSV filenames in your DataPipe experiment's storage.
6. Confirm the redirect preserves sid=TEST123456&chain=A.
7. Test failed requests with browser DevTools Network -> Offline near
   the final answer; verify retry and CSV downloads without redirect.
8. Use a DIFFERENT anonymous sid on each new full test, since DataPipe
   requires unique filenames. Check the DataPipe dashboard that the
   experiment is accepting data and a storage provider is connected.

Important: A live DataPipe upload was intentionally NOT performed in
this package because that would add fake participant data. Production
behavior still needs a test on your published site and experiment.

PRIVACY AND STUDY LIMITATIONS
-----------------------------
The experiment sends no name, email, password, or credential. Its
DataPipe experiment ID is configuration, not a secret. Anonymous sid
comes only from the preceding experiment URL. The four stories are
fictional. This demonstration has no accurate-headlines-only comparison
group, so individual errors cannot establish causation.
