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
- `src/app/page.tsx` — landing page (hero + grid + skills cloud)
- `src/app/projects/[slug]/page.tsx` — individual project pages

## Projects (7)
| Slug | Name | Accent |
|---|---|---|
| studyquiz | Studyquiz | amber |
| retreat-architect | Retreat Architect | emerald |
| conflict-soup | Conflict Soup | rose |
| karaoke-brain | Karaoke Brain | violet |
| mv-app | Retention Intelligence | teal |
| journaling | Lifebook Journaling System | amber-800/sienna |
| cyclic-life | Cyclic Life | pink |

## To Add a Project
1. Add an entry to `src/data/projects.ts` following the existing pattern
2. Use full Tailwind class names in the `accent` object (no dynamic assembly)
3. Add `generateStaticParams` will pick it up automatically

## To Add Screenshots
Place images in `public/screenshots/` and set `screenshot` field in the project data. The project page currently shows a styled placeholder — update the hero section in `[slug]/page.tsx` to render an `<Image>` when `project.screenshot` is set.

## GitHub Link
Update the GitHub URL in `src/components/Footer.tsx` — currently set to `YOUR_USERNAME` placeholder.

## Deployment (Cloudflare Pages)
1. Push repo to GitHub
2. Cloudflare Dashboard → Pages → Create project → Connect GitHub repo
3. Build settings:
   - Framework: None (or Next.js Static HTML Export)
   - Build command: `npm run build`
   - Output directory: `out`
4. Add custom domain: `projects.yourdomain.com`

## Commands
```bash
npm run dev      # dev server
npm run build    # static export to out/
```

## Progress

### Done
- Next.js 16 project scaffolded with TypeScript + TailwindCSS 4
- Static export configured (`output: 'export'`, `trailingSlash: true`, `images: unoptimized`)
- All 7 project data entries written with full descriptions, features, tech stack, skills, progress
- Components: ProjectCard, SkillPill, Footer
- Landing page: hero, project grid (3-col responsive), skills cloud, footer
- Individual project pages: header, hero placeholder, The Why, features, tech stack, skills, status
- `generateStaticParams` and `generateMetadata` implemented for all project slugs
- Fonts: DM Serif Display + Inter via next/font/google

### Pending
- Run `npm run build` to verify static export builds cleanly
- Update GitHub URL in Footer.tsx with real username
- Add domain to Cloudflare Pages when ready
- Add real screenshots to `public/screenshots/` (replace placeholders)
- Git initial commit
