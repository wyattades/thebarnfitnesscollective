---
name: barn-deploy
description: Publish changes to The Barn website live. Use after making edits when the owner wants the changes to go live. Covers building to check for errors, committing, pushing to GitHub (which auto-deploys via Netlify), and verifying the deploy.
---

# Deploying The Barn website

The site auto-deploys: **pushing to the `main` branch on GitHub triggers a
Netlify build**, live in ~30 seconds. There's nothing to manually upload.

## Steps

1. **Build first** to catch errors before they reach the live site:

   ```bash
   cd site
   npm run build
   ```

   If it fails, fix the reported file and rebuild. Never push a build that fails.

2. **Preview locally** if the change is visual — `npm run dev`, look at
   http://localhost:4321, confirm it looks right.

3. **Commit and push:**

   ```bash
   git add -A
   git commit -m "Describe the change, e.g. Update Unlimited membership price to $209"
   git push
   ```

   > Only commit/push when the owner has asked to publish. If you're on `main`,
   > that's expected for this project (it's the deploy branch).

4. **Verify the deploy.** Netlify builds automatically. Check the deploy status
   in the Netlify dashboard (Deploys tab). Once it says "Published", reload the
   live site and confirm the change is there. Hard-refresh if you don't see it
   (Cmd/Ctrl-Shift-R).

## Preview before going live (recommended for bigger changes)

Instead of pushing straight to `main`, push a branch and open a pull request —
Netlify builds a **preview URL** for that branch so the owner can see the change
on a real link before it's public. Merge the PR to go live.

```bash
git checkout -b update-pricing
git add -A && git commit -m "Update pricing"
git push -u origin update-pricing
# open a PR; Netlify posts a preview link on it
```

## Rolling back a bad change

Two easy options:
- **Netlify dashboard → Deploys →** pick the previous good deploy → **Publish
  deploy**. Instant rollback, no code needed.
- Or revert the commit: `git revert HEAD && git push`.

## If a deploy fails

- Read the Netlify deploy log (Deploys → the failed deploy → open the log).
- It's almost always a build error that `npm run build` would also show locally —
  reproduce locally, fix, and push again.
