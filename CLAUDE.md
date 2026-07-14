# The Barn Fitness Collective — site guide (read this first)

This is the website for **The Barn Fitness Collective**, a gym in Sebastopol, CA.
It's a static [Astro](https://astro.build) site, hosted on **Netlify**, updated by
editing files (usually via Claude Code) and pushing to GitHub — every push
auto-deploys.

**You (Claude) will do almost all edits here.** The owner describes what they
want in plain English; you make the change, preview it, and deploy. Optimize for
edits that are safe and hard to break: change **content** in `src/data/`, not
layout, whenever possible.

## ⭐ How to work with the owner (READ THIS)

**The owner is non-technical.** They do not know git, branches, pull requests, or
deploys — and they should never need to. Never ask them to run git commands or
explain git concepts. You do all of that silently. Their whole vocabulary is
**"preview"** (a private draft) and **"live"** (the public site). A friendly
version of this for them is in `UPDATING.md`.

**Default workflow for every change request:**

1. **Make the edit** (prefer `src/data/`).
2. **Show a Preview automatically — do not wait to be asked.** Start the local
   dev server (`npm run dev`) if it isn't running, then give them the link in
   plain words: *"Preview it here: http://localhost:4321/…"*. Even better, take a
   screenshot and show it directly in the chat so they may not even need to open
   a browser. The local server is the default preview because it's instant and
   free — ideal for back-and-forth tweaking.
3. **Iterate** on their feedback ("bigger", "more coral", "undo that") — the
   preview updates live.
4. **Only publish when they clearly approve** (e.g. they say "publish it", "make
   it live", "looks good, ship it"). Publishing = build, commit, push (see the
   `barn-deploy` skill). Then **confirm in plain language**: *"It's live now at
   thebarnfitnesscollective.com — takes ~30 seconds to appear."*
5. **Always remind them changes are reversible**: if they don't like it, "undo
   that" rolls back (Netlify one-click rollback, or `git revert`).

**When to use a preview *deploy* instead of the local server:** only when they
want to (a) check it on their phone, (b) share it with someone before it's public,
or (c) review a big/risky change on a real URL first. Once Netlify is connected,
push a branch and open a PR — Netlify auto-builds a preview URL. Hand them the
URL; never mention "branch" or "PR" unless they ask.

**Never publish without an explicit go-ahead.** Preview first, always.

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

## SEO (mostly automatic — keep it that way)

Every page gets strong SEO **for free** via `BaseLayout` → `Seo.astro`: canonical
URL, Open Graph + Twitter cards (with the `/og-image.jpg` share image), robots,
and `HealthClub` LocalBusiness structured data (address, phone, geo, socials)
built from `src/data/site.ts`. There's a sitemap (`@astrojs/sitemap`) and a
`robots.txt`.

The only per-page SEO work — and it's **required** (TypeScript enforces it):

- Every page MUST pass a `title` and a unique `description` to `<BaseLayout>`.
  Keep `description` to ~150 chars, specific to that page. A dev-build warning
  fires if it's missing or too long.
- To give a page its own share image: `<BaseLayout … image="/some-image.jpg">`.
- Business facts (address, phone, geo, price range) live in `site.ts` → they feed
  the structured data. Update them there, never hardcode in `Seo.astro`.
- Page-specific structured data (like the FAQ's `FAQPage` schema) goes via the
  named head slot: `<script type="application/ld+json" slot="head" …>`.

Don't add SEO tags ad hoc in individual pages — extend `Seo.astro` so every page
benefits and nothing drifts.

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
