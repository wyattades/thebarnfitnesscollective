# The Barn Fitness Collective — website

The website for [The Barn Fitness Collective](https://www.thebarnfitnesscollective.com),
a functional-fitness gym in Sebastopol, CA. Built with [Astro](https://astro.build),
hosted on [Netlify](https://netlify.com), and designed to be updated by describing
changes to Claude Code — no page builder required.

## Why this setup

- **Cheap**: hosting is free (Netlify), code hosting is free (GitHub), analytics
  is free (Google Analytics). Only cost is the domain (~$12–20/yr).
- **Hard to break**: one global design system (`src/styles/tokens.css`) and
  reusable components. Content lives in plain data files, separate from layout.
- **Easy HD images**: drop a photo in `src/assets/images/` and reference it by
  name — it's resized, compressed, and served in modern formats automatically.
- **Fast + robust**: fully static HTML, nothing to hack, essentially can't go
  down.

## Editing the site

Most changes are edits to `src/data/`:

| To change… | Edit… |
| --- | --- |
| Prices | `src/data/pricing.ts` |
| Classes / weekly schedule | `src/data/classes.ts` |
| Coaches | `src/data/team.ts` |
| FAQ | `src/data/faq.ts` |
| Address, email, booking link, socials | `src/data/site.ts` |
| Brand colors / fonts | `src/styles/tokens.css` |

The easiest way: tell Claude Code what you want (e.g. "raise the Unlimited plan
to $209" or "add a new coach named …"). Detailed recipes live in the
`.claude/skills/` folder (`barn-setup`, `barn-edit`, `barn-deploy`) and in
[CLAUDE.md](CLAUDE.md).

## Running locally

```bash
npm install     # once
npm run dev     # preview at http://localhost:4321
npm run build   # production build (run before deploying)
```

## Deploying

Push to the `main` branch → Netlify builds and publishes automatically (~30s).
See the `barn-deploy` skill. First-time hosting/analytics setup is in the
`barn-setup` skill.

## Tech

Astro 5 · static output · Google Analytics 4 (via `PUBLIC_GA_MEASUREMENT_ID`) ·
Netlify hosting · design system in CSS variables + scoped Astro components.
