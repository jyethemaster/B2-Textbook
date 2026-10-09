# Nederlands B2 · Hoofdstuk 1–4

A small offline-capable web app (PWA) with the notes and exercises for chapters 1 to 4 of a Dutch B2 course.

| Chapter | Topic |
|---|---|
| 1 Positief | conjunctions and adverbs, zou(den), connecting words, vocabulary |
| 2 Sociaal | passive voice, het/dat and er in passives, zou(den) for advice |
| 3 Progressief | uses of er, verbs with and without prepositions, giving several arguments |
| 4 (Inter)nationaal | perfectum vs imperfectum, flashbacks, describing figures, irrealis |

Each chapter has three tabs: **Grammatica**, **Oefeningen** (with Check, Show answers and Reset) and **Lezen**. The app remembers which chapter you were on.

**Progress:** every chapter shows a percentage bar, and the percentage also appears on the chapter buttons. An item counts once you answer it correctly with **Check**. Items checked after **Show answers** do not count until you press **Reset** on that exercise. Progress is saved on your device, and **Reset voortgang** clears it for one chapter.

## Files

| File | Purpose |
|---|---|
| `index.html` | The whole app (styles, content and code in one file) |
| `manifest.json` | Install info (name, colours, icons) |
| `sw.js` | Service worker for offline use |
| `icon-192.png`, `icon-512.png`, `icon-maskable-512.png` | App icons |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are |

## Publish with GitHub Pages

1. Create a new repository on GitHub, for example `nederlands-b2`.
2. Upload all the files in this folder to the root of the repository, including `.nojekyll`.
3. Go to **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, and save.
4. After a minute the app is at `https://<your-username>.github.io/nederlands-b2/`.
5. On your phone, open that address and use **Add to Home Screen** (iPhone: Share → Add to Home Screen; Android: menu → Install app).

## Updating

Change `index.html`, then change `VERSION` in `sw.js` (for example `v2` to `v3`) so phones fetch the new version instead of the offline copy. Open the app once online to update.

## Keeping it separate from other apps

All the files use their own names (the `nederlands-b2-` cache prefix and the `nl-b2-chapter` storage key), so it does not read or change any other app you host under the same GitHub address.
