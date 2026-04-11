# Portfolio Site — Build Instructions

> **What this is:** Yael's project portfolio as a subdomain site (e.g., `projects.yourdomain.com`). A standalone static site showcasing all active projects, positioned around the identity of **Systems Designer** — someone who designs structured, human-centered systems across technology, personal growth, relationships, and learning.

---

## Final Decisions

| Decision | Choice |
|---|---|
| Name on site | Yael |
| Tagline | "Building structured tools for an intentional life." |
| Footer | GitHub link only (no email) |
| Domain | Placeholder — add before Cloudflare Pages deployment |
| Screenshots | Styled placeholders for now, real screenshots added later |

---

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **Styling:** TailwindCSS 4 (CSS-based config, no tailwind.config.js)
- **Hosting:** Cloudflare Pages (static export via `output: 'export'`)
- **No backend** — fully static site

### Cloudflare Pages Setup
- `next.config.ts`: `output: 'export'`, `trailingSlash: true`, `images: { unoptimized: true }`
- Output directory: `out/`
- Subdomain: `projects.yourdomain.com` — update placeholder in `Footer.tsx` and DNS

---

## Site Structure

### Pages

1. **Landing / Home (`/`)**
   - Short intro: name, "Systems Designer", tagline
   - 3-column responsive grid of project cards
   - Skills/tech cloud at the bottom
   - GitHub footer link

2. **Individual Project Pages (`/projects/[slug]`)**
   - Full project detail (see Project Page sections below)

---

## Design

- Background: warm off-white `#FAFAF7`
- Fonts: DM Serif Display (headings) + Inter (body) via next/font/google
- No dark mode
- Each project has a unique accent color carried through card and detail page
- Subtle fade-up animation on project cards (CSS only, no JS library)

---

## Projects (7 active)

| # | Project | Slug | Accent |
|---|---------|------|--------|
| 1 | Studyquiz | `studyquiz` | Amber/gold |
| 2 | Retreat Architect | `retreat-architect` | Sage green (emerald) |
| 3 | Conflict Soup | `conflict-soup` | Soft coral (rose) |
| 4 | Karaoke Brain | `karaoke-brain` | Purple/violet |
| 5 | Retention Intelligence (MV App) | `mv-app` | Teal — described generically, no Mindvalley name |
| 6 | Lifebook Journaling System | `journaling` | Warm brown/sienna — includes Obsidian Archive as a subsection |
| 7 | Cyclic Life | `cyclic-life` | Rose/pink |

**Excluded:** Conflict Fishbowl (placeholder only), AI Learning (not a standalone project), Obsidian Archive (folded into Journaling page).

---

## Project Page Sections

Each project page (`/projects/[slug]`) includes:

1. **Back link** → home
2. **Header:** name, status badge, tagline in accent color
3. **Hero:** styled placeholder (letter + accent color) — replace with screenshot when available
4. **The Why:** 2-3 paragraphs, first person
5. **What It Does:** 4-6 features with accent dot bullets
6. **How It's Built:** tech stack with `{name, reason}` pairs
7. **Skills Demonstrated:** pills in accent color
8. **Links:** live/github if available
9. **Status:** current state and what's next

---

## To-Do

### Before going live
- [ ] Update GitHub URL in `src/components/Footer.tsx` (search for `YOUR_USERNAME`)
- [ ] Add real domain to Cloudflare Pages and update Footer link if needed
- [ ] Add public GitHub links to individual projects in `src/data/projects.ts` where repos are public

### Screenshots (add later)
1. Place image in `public/screenshots/[slug].png`
2. Set `screenshot: "/screenshots/[slug].png"` in the project entry in `src/data/projects.ts`
3. Update the hero section in `src/app/projects/[slug]/page.tsx` to render `<Image>` when `project.screenshot` is set

---

## File Structure

```
portfolio/
├── CLAUDE.md
├── build-instructions.md          ← this file
├── next.config.ts                 # output: 'export', trailingSlash, images: unoptimized
├── src/
│   ├── app/
│   │   ├── layout.tsx             # fonts, metadata, globals.css
│   │   ├── page.tsx               # landing page
│   │   └── projects/[slug]/
│   │       └── page.tsx           # individual project page
│   ├── components/
│   │   ├── ProjectCard.tsx
│   │   ├── SkillPill.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── projects.ts            # ← edit this to update any project content
│   └── lib/
│       └── types.ts
└── public/
    └── screenshots/               # add project screenshots here
```

---

## Deployment (Cloudflare Pages)

1. Push repo to GitHub
2. Cloudflare Dashboard → Pages → Create project → Connect GitHub repo
3. Build settings:
   - Build command: `npm run build`
   - Output directory: `out`
4. Add custom domain: `projects.yourdomain.com` → Cloudflare handles DNS automatically

---

## Commands

```bash
npm run dev       # local dev server
npm run build     # build static export to out/
```
