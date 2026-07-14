---
name: barn-deploy
description: Preview and publish changes to The Barn website for a non-technical owner. Use after making edits — to show the owner a private preview, then (only on their approval) publish it live, or to roll back a change. Handles all git/deploy mechanics silently; the owner only ever says "preview", "publish it", or "undo that".
---

# Preview & publish The Barn website

The owner is **non-technical**. They never touch git or think about deploys. Your
job is to make the change, show them a **preview**, and only make it **live** when
they say so — handling everything else invisibly. Two words only: *preview* and
*live*.

## Step 1 — Preview (do this automatically after every edit)

Default to the **local dev server** — it's instant, free, and perfect for
back-and-forth tweaks.

```bash
npm run dev        # from the project folder — serves at http://localhost:4321
```

Then, in plain language:
- Give them the link: *"Preview it here: http://localhost:4321"* (link to the
  specific page you changed if relevant, e.g. `/programming-and-pricing`).
- **Better yet, screenshot it and show them in the chat** so they may not even
  need to open a browser.
- Invite tweaks: *"Want anything adjusted before I publish?"* Iterate freely —
  the preview updates live as you edit.

Keep the dev server running during a back-and-forth so previews are instant.

### When they want a preview on their phone or to share it

Use a **preview deploy** (needs Netlify connected — see `barn-setup`). Push a
branch and open a PR; Netlify posts a preview URL on the PR. Hand them just the
URL. Do NOT explain "branch" or "PR" unless they ask.

```bash
git checkout -b preview-<short-description>
git add -A && git commit -m "<what changed>"
git push -u origin preview-<short-description>
# open a PR (gh pr create ...) — Netlify comments a preview link on it
```

## Step 2 — Publish (ONLY after they clearly approve)

Wait for a clear go-ahead: "publish it", "make it live", "ship it", "looks good".
Never publish on your own.

```bash
npm run build      # from the project folder — must succeed; never publish a failing build
git add -A
git commit -m "Plain description, e.g. Raise Unlimited membership to $209/mo"
git push           # pushing to main auto-deploys via Netlify (~30s)
```

Then confirm in plain words: *"Done — it's live now at
thebarnfitnesscollective.com. Takes about 30 seconds to show up. If anything
looks off, just say 'undo that' and I'll roll it back."*

If you used a preview-deploy PR, publishing = merge the PR to `main`.

## Step 3 — Undo / roll back (when they say "undo that")

Reassure first: nothing is ever permanently broken; every version is saved.

- **Fastest (no code):** in the Netlify dashboard → **Deploys** → pick the
  previous good deploy → **Publish deploy**. Instant rollback.
- **Or revert the last change:** `git revert HEAD && git push` (auto-redeploys).

Then confirm it's back to normal.

## Rules

- **Preview first, always. Never publish without explicit approval.**
- Never make the owner run git or explain git to them.
- `npm run build` must pass before any publish.
- After publishing, always confirm it's live and remind them it's reversible.
