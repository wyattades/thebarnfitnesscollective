---
name: barn-instagram
description: Refresh the Instagram photo grid on the home page ("More than a gym, a collective") with the latest posts from @thebarnfitnesscollective. Use when the owner says the community photos look stale or asks to update the Instagram section. Pulls recent posts via the browser, downloads them locally, and regenerates the data file.
---

# Refresh the Instagram grid

The grid uses **local copies** of real Instagram photos (Instagram has no free
public feed API, and its image URLs expire — so we snapshot them). This refreshes
that snapshot. It needs the browser tool because Instagram gates the profile
behind a login wall + JavaScript that a plain script can't get past.

## Steps

1. **Open the profile in the browser** (the in-app Browser is fine):
   `https://www.instagram.com/thebarnfitnesscollective/`
   A login modal appears, but the recent post thumbnails are already in the DOM
   behind it — that's all we need.

2. **Extract recent post image URLs + captions + permalinks** by running this in
   the page:

   ```js
   (() => {
     const seen = new Set();
     return [...document.querySelectorAll('img')]
       .filter(i => /cdninstagram|fbcdn/.test(i.src) && !/profile_pic|t51.82787-19/.test(i.src) && i.naturalWidth > 150)
       .filter(i => { const id = i.src.split('/v/')[1]?.slice(0,40); if (seen.has(id)) return false; seen.add(id); return true; })
       .slice(0, 8)
       .map(i => {
         const a = i.closest('a');
         const link = a ? new URL(a.getAttribute('href'), location.origin).href : '';
         const alt = (i.alt||'').replace(/\s+/g,' ').split('.')[0].slice(0,60);
         return `${i.src} | ${alt} | ${link}`;
       })
       .join('\n');
   })()
   ```

   Each line is `<image-url> | <short caption> | <post permalink>`. Prefer lines
   that look like real photos of people/the gym over pure text flyers, but a mix
   is fine (it's their real feed).

3. **Save the output** to `scripts/insta-urls.txt` (one post per line). Keep the
   6 best.

4. **Run the updater** from the project folder:

   ```bash
   node scripts/update-instagram.mjs --count 6
   ```

   It downloads the images into `src/assets/images/` (replacing the old
   `insta-*.jpg`) and rewrites `src/data/instagram.ts`.

5. **Preview and publish** (see the `barn-deploy` skill): `npm run dev`, check the
   community section looks good, then publish on the owner's go-ahead.

## Notes

- The image URLs are time-limited — download them (step 4) promptly after
  extracting (step 2), in the same session.
- If a download is skipped ("not an image" / HTTP error), the URL likely expired;
  re-extract and try again.
- To change how many tiles show, pass a different `--count` (the grid is designed
  for 6; multiples of 3 look best).

## Automating this (optional)

Astro builds only when the site is deployed — it can't refresh on its own. To
make this happen on a cadence (say, daily), the reliable option is a **scheduled
Claude Code routine** (see the `schedule` skill) that runs these steps and
publishes. A plain cron script won't work because of Instagram's login wall — it
needs the browser step. Set this up only if the owner asks; it's a standing
automation.
