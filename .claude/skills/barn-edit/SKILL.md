---
name: barn-edit
description: Make common content edits to The Barn website — change prices, add or edit a class, add or edit a coach, add or update photos, edit the FAQ, or update the address/booking link/socials. Use whenever the owner asks to change wording, prices, schedule, team, images, or any site content. Covers the safe, data-driven edit path.
---

# Editing The Barn website

Almost every content change is a small edit to a file in `src/data/`. After any
edit: run `npm run dev` to preview, then follow the `barn-deploy` skill to
publish. If a change feels like it needs new layout/CSS, prefer reusing an
existing component and its classes over inventing new styles.

## Change a price

Edit `src/data/pricing.ts`. Each plan has `price` (number only — the `$` is added
automatically), `freq`, and `features`. Set `featured: true` on exactly one plan
to give it the coral highlight + "Most Popular" badge.

## Add / edit / remove a class

Edit `src/data/classes.ts`:
- **`offers`** = the cards in the home "What We Offer" grid. Copy an existing
  entry, change `tag`, `name`, `description`, `icon` (2–3 char corner stamp),
  `accent` (`c1`–`c4` gradient), and `link`/`linkLabel`.
- **`schedule`** = the weekly schedule strip. `accent` is `rust` | `teal` |
  `coral` (the top border color). Put a newline in `meta` for a two-line summary.
- The class descriptions on the **Programming & Pricing** page are in
  `src/pages/programming-and-pricing.astro` (the `classes` array near the top).

## Add / edit a coach

1. Drop the photo into `src/assets/images/` (any size — it's optimized). Use a
   clear name like `team-firstname.jpg`.
2. Edit `src/data/team.ts`. Copy an existing entry and set `name`, `role`,
   `photo` (the filename you just added), `initial` (big faint letter),
   `creds` (the little tags), optional `email`, and `bio` (array of paragraphs,
   shown on the Our Team page). Order in the array = order on the page.

## Add / edit an FAQ

Edit `src/data/faq.ts`. Questions are grouped by `category` (in order). Each item
is `{ q, a }`. Answers may include simple links written as
`[link text](https://example.com)` or `[link text](/internal-page)`.

## Update address, email, booking link, phone, or socials

Edit `src/data/site.ts`. These flow to the header, footer, and every button —
change once here, updates everywhere. Don't hardcode them in pages.

## Add / replace a general image

- Drop the file in `src/assets/images/`.
- In a component or page, render it with the Img wrapper:
  `import Img from "../components/Img.astro"` then
  `<Img name="your-file.jpg" alt="Describe the photo" />`.
- It's resized, compressed, and served in modern formats automatically. This is
  the fix for the old "adding HD images is painful" problem — just drop and
  reference.

## Swap the hero video

Replace `public/video/hero.mp4` (keep the same filename) and
`public/video/hero-poster.jpg` (a still frame shown before the video plays). Keep
it compressed (~720p is plenty behind the overlay).

## Change a brand color or font (whole-site)

Edit `src/styles/tokens.css`. For example, change `--coral` and every button,
eyebrow, and accent updates at once. Fonts are the `--font-*` variables (also
update the Google Fonts `<link>` in `src/layouts/BaseLayout.astro` if you switch
to a different font family).

## Add a whole new page

Create `src/pages/<slug>.astro`. Start from an existing interior page (e.g.
`src/pages/contact.astro`) — wrap content in `<BaseLayout title="…">` and use
`<PageHero …/>` plus the shared `.section` / `.section-title` classes. Add it to
`mainNav` and/or `footerNav` in `src/data/site.ts` so it's reachable.

## Always, before publishing

```bash
npm run dev     # eyeball the change
npm run build   # must complete with no errors
```
