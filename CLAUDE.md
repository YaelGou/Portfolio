# Portfolio Site — CLAUDE.md

## What This Is
Yael's personal portfolio site. A static Next.js 16 site deployed to Cloudflare Pages as a subdomain (e.g. `projects.yourdomain.com`). No backend — fully static export.

## Stack
- Next.js 16 + TypeScript + App Router
- TailwindCSS 4 (CSS-based config, no tailwind.config.js)
- Static export: `output: 'export'` → builds to `out/`
- Fonts: DM Serif Display (headings) + Inter (body) via next/font/google

## Key Files
- `src/data/projects.ts` — all project content lives here; edit this to update any project
- `src/lib/types.ts` — Project and TechItem TypeScript interfaces
- `src/components/ProjectCard.tsx` — landing page card
- `src/components/ProjectThumbnail.tsx` — SVG illustration per project slug
- `src/app/page.tsx` — landing page (hero + grid + skills cloud)
- `src/app/projects/[slug]/page.tsx` — individual project pages

## Projects (12)
| Slug | Name | Accent | Status |
|---|---|---|---|
| studyquiz | Studyquiz | amber-700 | In Progress |
| retreat-architect | Retreat Architect | emerald-700 | In Progress |
| conflict-soup | Conflict Soup | rose-700 | Active |
| karaoke-brain | Karaoke Brain | violet-700 | Active |
| mv-app | Retention Intelligence | teal-700 | Active |
| journaling | Lifebook Journaling System | amber-800 | Active |
| cyclic-life | Cyclic Life | pink-700 | In Progress |
| friend-crm | Friend Reconnection CRM | slate-500 | Active |
| vsdx-processor | VSDX AI Diagram Processor | indigo-700 | Active |
| slack-kb-bot | Slack AI Knowledge Base | sky-700 | Active |
| todoist-ai | Todoist AI Assistant | red-700 | Active |
| ai-chat-app | AI Chat App | lime-700 | Active |

## Design
- Warm off-white background (`#FAFAF7`)
- No dark mode
- Each project card: white bg, stone-200 border, accent-tinted thumbnail area, unique SVG illustration
- Status badges: neutral gray for Active, amber-tinted for In Progress
- Accent colors are -700/-800 variants (muted, professional — not bright)

## To Add a Project
1. Add an entry to `src/data/projects.ts` (copy an existing one as template)
2. Use full Tailwind class names in the `accent` object (no dynamic string assembly — Tailwind scans statically)
3. Add a thumbnail function to `src/components/ProjectThumbnail.tsx` and register it in the `thumbnails` map
4. `generateStaticParams` picks up new slugs automatically

## To Add Screenshots
Place images in `public/screenshots/` and set `screenshot` field in project data.
Update the hero section in `src/app/projects/[slug]/page.tsx` to render `<Image>` when `project.screenshot` is set (currently shows SVG placeholder).

## Pending Before Go-Live
- [ ] Update GitHub URL in `src/components/Footer.tsx` (search `YOUR_USERNAME`)
- [ ] Add real domain to Cloudflare Pages
- [ ] Review the "why" sections for the 5 professional projects — written from inferred context, may need editing
- [ ] Add real screenshots to `public/screenshots/` when available

## Deployment (Cloudflare Pages)
1. Push repo to GitHub
2. Cloudflare Dashboard → Pages → Create project → Connect GitHub repo
3. Build settings: build command `npm run build`, output directory `out`
4. Add custom domain: `projects.yourdomain.com`

## Commands
```bash
npm run dev      # dev server at localhost:3000
npm run build    # static export to out/
```

## Progress

### Done (session 2026-04-11 to 2026-04-14)
- Project scaffolded: Next.js 16, TypeScript, TailwindCSS 4, static export, DM Serif Display + Inter
- All 12 projects written with full content: tagline, "the why" (3 paragraphs), features, tech stack with reasons, skills, status
- `ProjectCard` component: white card, accent-tinted thumbnail, SVG illustration, status badge
- `ProjectThumbnail` component: unique SVG per slug (quiz cards, schedule timeline, speech bubbles, mood grid, bar chart, hierarchy tree, cycle diagram, contact cards, pipeline diagram, Slack UI, terminal, chat UI)
- Landing page: hero, 3-col responsive grid, skills cloud, footer
- Individual project pages: header, hero SVG, The Why, features, tech stack, skills, links, status
- Design direction: professional/business — dark muted accent colors (-700/-800), warm off-white bg, no bright colors
- Status system: Active (neutral) vs In Progress (amber-tinted badge)
- Git initialized, 4 commits on `main`
- Build verified: 16 static pages generated cleanly

### Pending
- GitHub URL in Footer.tsx (placeholder `YOUR_USERNAME`)
- Real domain + Cloudflare Pages setup
- Screenshots for each project (placeholders in place)
- Review "why" copy for professional projects (friend-crm, vsdx-processor, slack-kb-bot, todoist-ai, ai-chat-app)
