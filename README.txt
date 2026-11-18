THE DAILY CHRONICLE — MEMORY GAME
=================================

ABOUT
-----
An interactive psychology memory demonstration exploring how accurate and
misleading news headlines may relate to recall of details in full articles.
The four news stories are fictional and written for this activity.

FILES
-----
index.html  - Web page structure and entry point
styles.css  - Colors, layout, typography, and interactive styling
script.js   - Stories, word activity, headline feed, memory quiz, results,
              conclusion, and CSV download
README.txt  - These instructions

HOW TO OPEN
-----------
Place index.html, styles.css, and script.js in the SAME folder.
Double-click index.html to play in a browser. No installation is required.

HOW TO UPDATE GITHUB PAGES
--------------------------
1. Open https://github.com/aoifecunningham/Testing-Memory-Game
2. Upload or replace index.html, styles.css, script.js, and README.txt
   in the repository's top-level (root) folder.
3. Commit the changes.
4. Check https://aoifecunningham.github.io/Testing-Memory-Game/
   after GitHub Pages has published the update.

HOW THE GAME WORKS
------------------
1. Read each original fictional news story without a headline.
2. Complete a brief unrelated word challenge.
3. View headlines, some accurate and some misleading.
4. Answer three memory questions based on the ORIGINAL story.
5. Review your score, any headline-consistent mistakes, and a conclusion
   explaining why misinformation and memory matter.
6. Optionally download individual results as a CSV file.

RESEARCH NOTE
-------------
This is a demonstration, not a controlled experiment. A participant's
mistakes cannot by themselves prove that misleading headlines caused
memory changes. There is no accurate-headlines-only comparison group.
No responses are sent to a server by these files; a CSV is only saved
locally when a participant clicks the download button.

EDITING
-------
Edit article paragraphs, headlines, and quiz questions in the stories
array near the top of script.js. Keep the correct-answer and misleading-
answer indices aligned with the answer options.
