# The Barn Fitness Collective — your website 🐐

This is the home for your website. The big idea: **you update the site by chatting
with an assistant called Claude Code — in plain English. No web builder, no code,
nothing to "design."** You say what you want, you get a preview, and when you like
it, you publish. That's the whole thing.

This page gets you set up the first time and explains how everything fits
together. Take your time — you only do the setup once.

---

## How it all works (the 30-second version)

```
You (chatting with Claude)  →  a preview only you can see  →  you say "publish"  →  it's live
```

Behind the scenes there are a few free services doing the heavy lifting. **You
almost never touch these directly** — they just quietly do their jobs:

- **Claude Code** — the assistant you chat with to make changes. This is the only
  one you actually use day to day.
- **GitHub** — a safe filing cabinet that stores every version of the site (so
  nothing can ever be truly lost or broken).
- **Netlify** — the service that takes the site and puts it on the internet at
  your real web address. It updates automatically whenever you publish.
- **Google Analytics** — quietly counts how many people visit. You just check its
  dashboard when you're curious.

You mostly live in the first one. Once it's set up, the rest is invisible.

---

## First-time setup (about 20 minutes, done once)

You'll do these four steps a single time. After that, updating the site is just
chatting.

### 1. Ask Wyatt to give you access

Ask Wyatt to **add you as a collaborator** on the website's code (he does this in
GitHub — it takes him ten seconds). You'll get an email invite; click **Accept**.

### 2. Install Claude Code

This is the assistant you'll chat with. Install it by following the official
guide: **https://docs.claude.com/claude-code** (look for "Install" / "Get
started"). If you hit anything confusing here, this is the one step worth asking
Wyatt to sit with you for — it's the only fiddly part, and it's over quickly.

### 3. Get the website onto your computer

Open Claude Code, and **paste this message** to it exactly:

> Please set up the Barn Fitness Collective website on my computer so I can edit
> it. The code is at https://github.com/wyattades/thebarnfitnesscollective — put
> it in a sensible folder like my Documents. Install everything it needs and then
> start a preview so I can see the site in my browser. If I need to log in to
> GitHub, walk me through it one step at a time.

Claude will do the technical work and, if it needs you to log in to GitHub, it'll
walk you through it. When it's done, it'll give you a preview link (something like
`localhost:4321`) — open it and you'll see the site. 🎉

### 4. That's it

You're ready. From now on you just chat. Skip down to **Everyday use**.

---

## Everyday use

When you want to change something:

1. **Open Claude Code** in the website folder (the same way you did in setup — if
   you're not sure how, ask Claude "how do I reopen the Barn website?" or ask
   Wyatt).
2. **Say what you want**, in normal words. For example:
   - *"Change the Unlimited membership to $209 a month."*
   - *"Add a new coach named Sam — here's a photo and a short bio."*
   - *"Fix the typo about parking in the FAQ."*
   - *"Add a class called Sunrise Strength on Sunday mornings."*
3. **Claude shows you a preview.** Look it over; ask for tweaks ("make it bigger",
   "use the coral color", "never mind, undo that").
4. **When you're happy, say "publish it."** About 30 seconds later it's live on
   the real website.
5. **Changed your mind after publishing?** Just say **"undo that."** Every version
   is saved — you truly cannot break this permanently.

There's a friendly, more detailed walk-through of this in
**[UPDATING.md](UPDATING.md)** — start there if you want a little more hand-holding.

### A few handy things to say

| You want to… | Just say to Claude… |
| --- | --- |
| See a change before it's public | (Claude previews automatically) |
| Check it on your phone / send it to someone first | "Give me a preview link I can open on my phone" |
| Make it public | "Publish it" |
| Undo a change | "Undo that" |
| See how many people visited | "How do I check the website visitor stats?" |

---

## Good to know

- **Previewing is private and free.** Nothing you try is public until you say
  "publish." Experiment freely.
- **Photos are easy.** Hand Claude any image (any size — it'll shrink it for the
  web automatically) and say where it should go.
- **You can't lose anything.** Every change is saved forever and any of them can
  be brought back.
- **Your real web address** (thebarnfitnesscollective.com) and the booking app
  keep working exactly as before — this just replaces how the site is built.

## If you get stuck

- Ask Claude directly: *"How do I …?"* — it knows this specific website.
- Or ask Wyatt.

---

<sub>Technically curious, or a developer helping out? The engineering details
(project structure, design system, deploy pipeline) live in
[CLAUDE.md](CLAUDE.md), and the setup/edit/publish playbooks are in
`.claude/skills/`.</sub>
