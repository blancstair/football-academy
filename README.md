# Football Academy: Football IQ

**A complete, mobile-first, dark-by-default football learning app that can be published free on GitHub Pages.** All lessons, quizzes, and game situations focus entirely on the mental side of American football. There are no physical drills.

## What's included

- **20 sequential core levels**: six complete-beginner foundations, four football-intelligence foundations, and ten advanced college-style tactical levels (fronts, run families, passing structures, coverage rules, protections, quarterback reads, defensive checks, sequencing, spread/RPOs, full-play scouting).
- **30 position-specific lessons** with expanded All-Pro specialist material: Quarterback, Running Back, Wide Receiver, Tight End, Offensive Line, Defensive Line & EDGE, Linebacker, Cornerback, Safety, and Special Teams. Every path has Rookie, Starter, and All-Pro tiers.
- **5 strategy electives**: Playbook Architecture, Coverage Recognition, Clock & Fourth Down, Rules & Officiating, and Communication & Team IQ.
- **Interactive Play Designer**: six offensive concepts, three defensive looks, four play phases, selectable player positions, and responsive SVG field diagrams.
- **Film Room**: three animated-step case studies with questions.
- **Coach Simulator**: merges situational challenges into the live drive simulator, with clock, downs, yards, timeouts, field goal decisions, and evolving score. Simplified outcomes are illustrative, not actual game probabilities.
- **Randomized knowledge checks**: a 9–14+ item bank per lesson; each attempt presents five random questions, with randomly rearranged options. College levels always include two random applied-read scenarios. Retries prefer questions not seen in the immediately preceding attempt. Four of five correct is required for a pass.
- **Complete-play teaching sample**: Level 20 includes an eleven-player assignment breakdown, run/pass conflict read and defensive rotation analysis.
- **Multiple local students**: user enters a name or nickname when first opening the app; each student has separate progress, quiz results, XP, and unlocks.
- **Dark mode by default** with a light theme toggle.
- **Offline PWA**: the service worker precaches all application resources after a successful first visit.
- **JSON export/import** for transferring local progress; no logins or cloud accounts.
- Accessible keyboard controls, responsive phone/tablet/desktop design, and reduced-motion consideration.

## Publish with GitHub Pages

1. Create a **public** GitHub repository named `football-academy` (or any name you like).
2. Upload the **contents of this project folder to the repository root**, including the hidden `.github` directory and `.nojekyll` file. When uploading through a browser, preserve the folder structure. Alternatively use Git:
   ```bash
   git init
   git add .
   git commit -m "Launch Football Academy"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/football-academy.git
   git push -u origin main
   ```
3. In **Repository Settings → Pages → Build and deployment**, select **GitHub Actions** as the source.
4. The included `.github/workflows/pages.yml` deploys your files whenever `main` is updated.
5. Open `https://YOUR-USERNAME.github.io/football-academy/` once Pages reports that the deployment succeeded. GitHub Pages supplies HTTPS.
6. On Android Chrome, open the browser menu and choose **Install app** or **Add to Home screen** if offered. Desktop Chrome/Edge may show an install icon in the address bar.

**Important:** GitHub Pages websites are publicly reachable. The repository contains no user data; students' names, lesson progress, and scores are stored on each device, not uploaded to GitHub. Do not commit real student profiles or exported backup files to a public repository.

## Preview on your computer

ES modules and service workers are better tested over HTTP rather than double-clicking `index.html`.

```bash
cd football-academy
python -m http.server 8000
```

Visit `http://localhost:8000`. This address qualifies as a secure context for testing install/offline functionality in supported browsers. You can also use `npx serve .` if you already have Node tooling.

## Offline and syncing behavior

- The **first visit must be online** to load the application and allow its service worker to cache assets.
- After caching, the site can open offline in a compatible browser. Browser storage can still be removed by the user, the browser, or storage-clearing tools.
- Progress is saved in `localStorage` in the browser/device. It is **not** synchronized automatically between devices and may be erased if browser data is cleared.
- Use **Settings → Export JSON** to back up progress. Importing replaces current local profiles; back up the target device first.
- Changing the code changes lessons for every visitor when their PWA updates. For code updates to the precached app, increment `VERSION` in `sw.js` (for example, `football-academy-v1.0.1`) to ensure the new assets replace the old cached version.

## Source structure

```
index.html                 Main entrypoint
manifest.webmanifest       Installable PWA metadata
sw.js                      Offline cache/service worker
.nojekyll                  Static GitHub Pages publishing
css/styles.css             Responsive themes and layout
js/app.js                  User interface, navigation, progress, quizzes, simulator
js/curriculum.js           Foundation and intermediate levels
js/college.js              Ten sequential college-level tactical lessons
js/position-advanced.js    Expanded position All-Pro concepts
js/question-banks.js       Question bank sampler, shuffling, unseen-question preference
js/advanced-checks.js      Advanced scenario-based knowledge checks
js/play-structure.js       Complete eleven-player offensive call
js/coaching.js             Concept-specific coaching explanations
js/positions.js            Position tiers and electives
js/labs.js                 SVG football field renderer and practice scenarios
assets/                    PWA icons
tests/                     No-dependency content validation tests
package.json                Optional npm test command
.github/workflows/pages.yml Automatic GitHub Pages deployment
```

To add a new lesson, follow the data shape in `js/curriculum.js` or `js/positions.js`. Each lesson contains concepts and multiple-choice questions, with explanations and the index of the correct answer. Each five-question checkpoint draws from a larger bank and passes at **80%** (four of five) or higher. Previous tier or level completion controls unlocks. Keep lesson IDs stable after releasing the app so saved progress continues to work.

## Notes on football rulebooks

Content is designed to explain common **11-player American football** concepts with NFL-style examples. Youth, flag, high-school, NCAA, and NFL rules can differ, particularly for kickoffs, clock stoppages, and penalty enforcement. This is a football knowledge course, not an authoritative rulebook or a tool for evaluating physical technique.

## Troubleshooting

- **GitHub Pages shows a 404:** Verify `index.html` is at repository root, that Pages is set to **GitHub Actions**, and that the workflow succeeded under the Actions tab.
- **App looks old after an update:** Increase `VERSION` in `sw.js`, publish, and reload. Older cached app code can otherwise persist offline.
- **The install option is missing:** Verify HTTPS, the manifest and icons, and use a compatible browser. The site can still be used normally without installation.
- **Saved progress disappeared:** Local browser data may have been cleared. Restore an exported JSON backup from Settings.
- **Name not shared between devices:** By design; importing a JSON backup is how progress is transferred without a server-side database.

### Academic scope and limits
- This is a football **mental learning course**, not a physical training program.
- College-level lessons teach real schematic vocabulary and reading principles, but naming conventions and match rules vary between coaching staffs. Illustrative calls are explicitly labeled.
- An educational play assignment is not a substitution for an actual college team's installation or NCAA rulebook.
- Advanced level is defined by the ability to reason about a full play, not simply recalling terminology. The final lesson documents offensive assignments, defenders' responses and next-call adjustments.
- This draft uses a deterministic question bank and local grading, not generative AI. Real footage, enhanced play animation, and play-specific player inspection are independent future work and are **not included**.

## Run curriculum validation

If Node.js is installed, run `npm test` to validate all 55 lessons, question banks, and playable lab content. This does not require downloading packages.
