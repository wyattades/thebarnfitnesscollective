# The Barn Fitness Collective — site guide (read this first)

This is the website for **The Barn Fitness Collective**, a gym in Sebastopol, CA.
It's a static [Astro](https://astro.build) site, hosted on **Netlify**, updated by
editing files (usually via Claude Code) and pushing to GitHub — every push
auto-deploys.

**You (Claude) will do almost all edits here.** The owner describes what they
want in plain English; you make the change, preview it, and deploy. Optimize for
edits that are safe and hard to break: change **content** in `src/data/`, not
layout, whenever possible.

## The golden rules

1. **Content lives in `src/data/`.** Classes, pricing, team, FAQ, and global
   info (address, booking link, socials) are all plain data files. Editing these
   is the safe, common path. Prefer it.
2. **Design lives in `src/styles/tokens.css`.** Colors and fonts are defined once
   there and used everywhere. Change a brand color in that one file.
3. **Never hardcode the booking link, email, or address in a page.** Import from
   `src/data/site.ts` so there's one source of truth.
4. **Add images by dropping the file in `src/assets/images/`** and referencing it
   by filename. Never resize by hand — the `<Img>` component optimizes.
5. **Always preview before deploying** (`npm run dev`) and **build before
   pushing** (`npm run build`) to catch errors.

## Project structure

```
src/
  data/            ← EDIT HERE for content changes
    site.ts          global info: name, address, email, booking URL, nav, socials
    classes.ts       home "What We Offer" cards + the weekly schedule
    pricing.ts       pricing plans
    team.ts          coaches (name, role, photo, creds, bio)
    faq.ts           FAQ questions & answers, grouped by category
  styles/
    tokens.css       ← EDIT HERE for brand colors / fonts (the whole look)
    global.css       reset + shared primitives (buttons, section headers, fade-up)
  components/        reusable building blocks (one concern each, scoped styles)
  layouts/
    BaseLayout.astro the page shell: <head>, fonts, analytics, header, footer
  pages/             one file per URL (index.astro = home page)
  assets/images/     ← DROP IMAGES HERE (optimized automatically)
  lib/               small helpers (image lookup, inline-link rendering)
public/              files served as-is: /video/hero.mp4, favicon, _redirects
```

Pages map to URLs by filename: `src/pages/faq.astro` → `/faq`,
`src/pages/index.astro` → `/`.

## Design system

- **Colors** (CSS variables, in `tokens.css`): `--rust` `--coral` `--teal`
  `--sky` `--cream` `--dark` `--off-white`. Use `var(--coral)` etc. — never a raw
  hex in a component.
- **Fonts**: `--font-display` (Playfair Display, headlines), `--font-body`
  (DM Sans), `--font-stamp` (Bebas Neue, the condensed uppercase labels).
- **Shared classes** (in `global.css`): `.btn-primary`, `.btn-ghost`,
  `.section-eyebrow`, `.section-title` (use `<em>` inside for the accent word),
  `.section-body`, `.fade-up` (animates in on scroll).

## Common edits — see the `barn-edit` skill for step-by-step recipes

- Change a price → `src/data/pricing.ts`
- Add / edit / remove a class → `src/data/classes.ts`
- Add / edit a coach → `src/data/team.ts` (+ drop photo in `src/assets/images/`)
- Add / edit an FAQ → `src/data/faq.ts`
- Change address / email / booking link / Instagram → `src/data/site.ts`
- Swap the hero video → replace `public/video/hero.mp4` + `hero-poster.jpg`
- Change a brand color or font → `src/styles/tokens.css`

## Commands

```bash
npm install       # once, after cloning
npm run dev       # local preview at http://localhost:4321
npm run build     # production build into dist/ (run before deploying)
npm run preview   # preview the production build locally
```

## Deploy

Pushing to the GitHub `main` branch auto-deploys to Netlify (~30s). See the
`barn-deploy` skill. First-time environment setup is in the `barn-setup` skill.

## Integrations to preserve (do not rebuild these)

- **Booking / schedule**: external Glofox portal (`site.bookingUrl`).
- **Mobile app**: ZenPlanner-powered, in the App Store / Google Play
  (`site.app`).
- **Analytics**: Google Analytics 4, loaded only when `PUBLIC_GA_MEASUREMENT_ID`
  is set (see `.env.example`).

## Gotchas

- Astro scoped `<style>` only styles that component. To style markup passed via a
  slot or rendered with `set:html`, use `:global(...)`.
- The GA snippet is off locally by design (no measurement ID in `.env`). That's
  expected — it turns on in production via Netlify env vars.
- `src/data/*.ts` is TypeScript: keep quotes/commas valid. `npm run build` will
  tell you if something's malformed.
