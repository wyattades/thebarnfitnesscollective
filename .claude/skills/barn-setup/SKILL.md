---
name: barn-setup
description: One-time environment setup for The Barn website — install dependencies, connect Netlify hosting, set up Google Analytics, and verify the site runs locally. Use when setting up the project on a new machine, connecting hosting for the first time, or when the dev server / deploy isn't working because the environment isn't configured yet.
---

# First-time setup for The Barn website

Walk through these steps in order. Several require the **owner** to click
something (they own the accounts) — pause and ask them clearly when needed. Never
ask them for passwords; direct them to log in themselves. The owner is
non-technical: explain each pause in plain language and do all the commands
yourself.

## 0. Bootstrap on a brand-new computer (getting the code)

Skip this if the project is already on the machine (a `package.json` is present).
Otherwise the owner is starting fresh — likely from the README setup prompt.
Note: the cloned repo IS the site — `package.json` and `src/` are at its top
level (there is no `site/` subfolder in a clone). Run everything from that folder.

1. **Verify the tools exist.** Check `git --version` and `node --version`. If Node
   is missing, point them to https://nodejs.org (LTS) or `brew install node`. Git
   ships with the Xcode command-line tools (`xcode-select --install`).
2. **Authenticate GitHub** (needed because the repo is private). Easiest is the
   GitHub CLI: if `gh` exists, run `gh auth login` and read them the on-screen
   steps (they pick GitHub.com → HTTPS → "Login with a web browser", then paste
   the one-time code the terminal shows into the browser page that opens). If
   `gh` isn't installed, `brew install gh` first. Confirm the owner has already
   been added as a collaborator on the repo (README step 1); if a clone 403s,
   that's the missing piece — ask them to have Wyatt add them.
3. **Clone the repo** into a sensible place (e.g. `~/Documents`):
   ```bash
   cd ~/Documents
   git clone https://github.com/wyattades/thebarnfitnesscollective.git
   cd thebarnfitnesscollective
   ```
   The site itself lives at the repo root here (the Astro project). Do the
   remaining steps from that folder.

## 1. Install dependencies

From the project folder (the one containing `package.json`):

```bash
npm install
```

Then confirm it runs:

```bash
npm run dev
```

Open http://localhost:4321 — you should see the video hero. Stop the server with
Ctrl-C when done.

## 2. Connect GitHub (code hosting)

The code should live in a GitHub repo so Netlify can auto-deploy from it.

- If there's no git remote yet, ask the owner to create an empty repo on GitHub
  (github.com → New repository, private is fine), then:

  ```bash
  git remote add origin <the repo URL they give you>
  git push -u origin main
  ```

- If `gh` (GitHub CLI) is installed and authenticated, you can create it:
  `gh repo create the-barn-site --private --source=. --push`

## 3. Connect Netlify (hosting)

Netlify builds and hosts the site, and redeploys on every push.

**Ask the owner to do this once (it's a few clicks, no code):**
1. Go to https://app.netlify.com and log in (or sign up — free).
2. Click **Add new site → Import an existing project**.
3. Choose **GitHub** and pick the repo from step 2.
4. Netlify auto-detects the settings from `netlify.toml` (build command
   `npm run build`, publish directory `dist`). Confirm and deploy.

That's it — Netlify will give a URL like `the-barn.netlify.app`. Every future
push to `main` redeploys automatically.

_(Optional, for CLI deploys: `npm i -g netlify-cli`, then the owner runs
`netlify login` and `netlify link` once.)_

## 4. Set up Google Analytics (GA4)

1. Ask the owner to create a GA4 property at https://analytics.google.com
   (Admin → Create property) and copy the **Measurement ID** (looks like
   `G-XXXXXXXXXX`).
2. In Netlify: **Site configuration → Environment variables → Add a variable**
   - Key: `PUBLIC_GA_MEASUREMENT_ID`
   - Value: the `G-…` ID
3. Trigger a redeploy (or push any change). Analytics is now live.

Analytics intentionally stays **off** in local development (no ID in `.env`), so
your test visits aren't counted. To test locally, copy `.env.example` to `.env`
and put the ID there temporarily.

## 5. Point the domain (when ready to go live)

The domain `thebarnfitnesscollective.com` is currently at Squarespace. Keep the
Squarespace site up until this one is verified, then:
- In Netlify: **Domain management → Add a custom domain** → follow the DNS
  instructions (either move the domain's DNS to Netlify, or add the records
  Netlify shows at the current registrar).
- This is an owner action (they control the domain). Walk them through it; don't
  change DNS without confirming.

## Verify everything

- `npm run build` completes with no errors.
- The Netlify deploy succeeds and the site loads.
- After setting the GA env var + redeploying, view-source on the live site shows
  the `gtag` script.
