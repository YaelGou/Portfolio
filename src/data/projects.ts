import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "studyquiz",
    name: "Studyquiz",
    tagline: "Keeping four degrees worth of knowledge alive through adaptive AI quizzing.",
    status: "active",
    accent: {
      border: "border-amber-400",
      bg: "bg-amber-50",
      text: "text-amber-700",
      badge: "bg-amber-100 text-amber-800",
      dot: "bg-amber-400",
      cardBg: "bg-amber-50",
    },
    description: `I have four degrees and have completed roughly 150 university courses — economics, history of art, psychology, philosophy, mathematics. That's a lot of knowledge to accumulate. The problem is that without active retrieval, it fades. A year after finishing a course, I can recall the broad strokes but lose the detail that made it interesting.

I built Studyquiz to fight the forgetting curve. It ingests my actual course materials — PDFs, lecture notes, images — and generates quizzes at exactly the right difficulty level based on how I've been performing. The system knows which subjects I'm weak on and weights its questions accordingly. For my art history courses, it pulls up actual images and asks me to identify the work, the artist, the period.

This is knowledge I paid for with years of study. I want it to stay with me.`,
    features: [
      "Ingests PDFs, documents, and images — parses, chunks, and stores them by subject automatically",
      "Generates quizzes across 7 difficulty levels from pure recall to synthesis and edge cases",
      "Art history mode: shows images for visual identification using Claude Vision",
      "Tracks per-subject performance in SQLite and weights future questions toward weaker areas",
      "Session continuity — progress survives server restarts and returns to where you left off",
      "Semantic retrieval via ChromaDB — finds relevant material by meaning, not just keyword match",
    ],
    techStack: [
      { name: "Python + Flask", reason: "Lightweight local server, no build step — runs on any machine without deployment complexity" },
      { name: "ChromaDB", reason: "Local vector database for semantic search — finds relevant content chunks by meaning, not just keywords" },
      { name: "SQLite", reason: "Zero-config local database for tracking per-subject progress and quiz sessions across restarts" },
      { name: "Claude API", reason: "Quiz generation across 7 difficulty levels, plus Vision API for identifying art images by sight" },
    ],
    skills: [
      "AI prompt engineering for adaptive difficulty scaling",
      "Semantic search with vector embeddings (ChromaDB)",
      "Multi-modal AI integration (text + image analysis)",
      "Progress tracking data modeling across hundreds of subjects",
      "Local-first architecture — no cloud dependency, fully offline",
      "Document ingestion pipeline (PDF, DOCX, images)",
    ],
    links: {},
    progress: "Active — used regularly for study sessions. Working on improving subject classification accuracy and adding spaced repetition scheduling for optimal review intervals.",
    cardSkills: ["Claude API", "ChromaDB", "Python"],
  },

  {
    slug: "retreat-architect",
    name: "Retreat Architect",
    tagline: "Design your own meditation retreat, then surrender to it completely.",
    status: "active",
    accent: {
      border: "border-emerald-500",
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      badge: "bg-emerald-100 text-emerald-800",
      dot: "bg-emerald-500",
      cardBg: "bg-emerald-50",
    },
    description: `I practice Vipassana meditation in the Goenka tradition, which involves silent retreats with a very specific daily structure: early morning wake bells, sitting meditation sessions, walking periods, rest, and a dhamma discourse in the evening. Running a personal retreat — even just for a few days — means managing an exact sequence of audio cues, announcements, and practice instructions that has to work flawlessly without supervision.

The apps I found were either too general or too rigid. I wanted to design my own retreat schedule — choosing which practices to include, how to proportion sitting time, which dhamma content to draw from — and then lock it in for live mode, where everything runs on autopilot. The design principle came first: act as the architect, then become the retreatant.

The result is a cross-platform tool that runs on iOS and Android. You configure the retreat with a setup wizard, tweak the schedule with a drag-and-drop editor, generate all the spoken announcements with TTS, and then enter live mode — which is fully offline, fully automatic, and impossible to accidentally break.`,
    features: [
      "6-step setup wizard: duration, wake time, practices, proportions, constraints, and Spotify integration",
      "Drag-and-drop schedule editor with hard and soft constraint validation",
      "Pre-generates all spoken announcements via OpenAI TTS at lock time — live mode runs fully offline",
      "Dharma content library with teachings organized by day, topic, and tradition source",
      "Web Audio API bell synthesis — no audio files needed, works offline",
      "Cross-platform iOS/Android via Capacitor; Progressive Web App on desktop",
    ],
    techStack: [
      { name: "React + Vite + TypeScript", reason: "Fast iteration; TypeScript enforces constraint logic correctness at compile time" },
      { name: "Capacitor", reason: "Wraps the web app as a native iOS/Android app — one codebase, cross-platform" },
      { name: "OpenAI TTS", reason: "Pre-generates all spoken announcements before the retreat begins so live mode is 100% offline" },
      { name: "Zustand", reason: "Minimal state management for retreat config and live mode sequence state" },
      { name: "Web Audio API", reason: "Synthesizes meditation bells directly in the browser — no audio files needed, works offline" },
    ],
    skills: [
      "Constraint-based scheduling system design (hard vs soft constraints)",
      "Cross-platform mobile deployment (iOS/Android via Capacitor)",
      "Offline-first architecture with audio pre-generation and IndexedDB caching",
      "Real-time sequence state machines for live retreat execution",
      "Audio synthesis with Web Audio API",
      "UX design for contemplative and focused contexts",
    ],
    links: {},
    progress: "Active — core scheduling and live mode are complete. Next: UI redesign for a cleaner aesthetic, improved Spotify integration, and sharable retreat templates.",
    cardSkills: ["React", "Capacitor", "OpenAI TTS"],
  },

  {
    slug: "conflict-soup",
    name: "Conflict Soup",
    tagline: "A structured space for processing conflict in polyamorous relationships.",
    status: "active",
    accent: {
      border: "border-rose-400",
      bg: "bg-rose-50",
      text: "text-rose-600",
      badge: "bg-rose-100 text-rose-700",
      dot: "bg-rose-400",
      cardBg: "bg-rose-50",
    },
    description: `I'm in polyamorous relationships, which means more people, more complexity, and more potential for recurring patterns of conflict to go unaddressed. I've studied Nonviolent Communication (NVC) and find it genuinely useful — but in the heat of conflict, it's hard to hold the framework in mind while also feeling the feelings.

I built Conflict Soup to create a space for structured conflict processing outside the moment of conflict itself. The idea is that you log incidents when they happen — messy and emotionally raw — and the system immediately offers an NVC rewrite: the same situation described in terms of observations, feelings, needs, and requests. Over time, patterns emerge across incidents. Issues cluster. The tool helps you see which themes keep appearing.

When it's time to actually address something, the app facilitates a structured resolution session: a focused conversation about a specific issue that ends with a concrete, mutual agreement on record. The goal isn't to eliminate conflict — it's to make conflict a place where relationships can grow instead of erode.`,
    features: [
      "Relationship units: create dyads, triads, or poly networks with consent-based membership",
      "Incident tracking with immutable original text — the raw account is always preserved",
      "AI-powered NVC rewrites using the OFNR framework (Observations, Feelings, Needs, Requests)",
      "Issue clustering: link incidents to recurring themes with AI-assisted suggestions",
      "Resolution sessions: structured conversations that end in concrete, stored agreements",
      "'Pick for us' mode: weighted issue selection based on incident count and time since last discussion",
    ],
    techStack: [
      { name: "Next.js + TypeScript", reason: "App Router for clean server rendering; strong typing for complex relational data structures" },
      { name: "Supabase", reason: "Managed PostgreSQL with Row Level Security — each relationship unit's data is strictly private to its members" },
      { name: "OpenAI API", reason: "Powers both NVC rewrites and issue clustering — two distinct AI tasks with carefully different prompting strategies" },
    ],
    skills: [
      "Multi-user data modeling with complex relational structures (dyads, triads, networks)",
      "Privacy-first architecture with Row Level Security",
      "AI-assisted NVC communication transformation",
      "Pattern recognition and clustering across relationship data over time",
      "UX design for emotionally sensitive, high-stakes interactions",
      "Audit logging for data integrity in personal records",
    ],
    links: {},
    progress: "Active and in regular use. Planned next: mobile-responsive improvements, recurring pattern visualization, and notifications for unresolved issues.",
    cardSkills: ["Next.js", "Supabase", "OpenAI"],
  },

  {
    slug: "karaoke-brain",
    name: "Karaoke Brain",
    tagline: "A mood-organized song manager so you always know what to sing next.",
    status: "active",
    accent: {
      border: "border-violet-500",
      bg: "bg-violet-50",
      text: "text-violet-700",
      badge: "bg-violet-100 text-violet-800",
      dot: "bg-violet-500",
      cardBg: "bg-violet-50",
    },
    description: `I love karaoke, but my song list was a mess — a flat note in my phone with hundreds of songs I could never find in the right moment. What I actually needed was organization by mood, not alphabetical order. "I'm feeling playful and high energy" should surface completely different songs than "I'm feeling nostalgic and want to belt something emotional."

I built Karaoke Brain as a mood-organized song management system. You define your own moods with custom names and accent colors, curate your songs into each, and at karaoke night you pick the vibe you're in and get your options instantly. No scrolling through hundreds of songs looking for the one that fits.

The app also solves a practical karaoke problem: before you go up and request a song, it checks whether it's actually in the venue's database. And when inspiration fails, you can ask an AI to suggest something based on your mood — using your own API key so there's no shared cost or privacy concern.`,
    features: [
      "Mood grid: define custom moods with names and accent colors, organize songs into each",
      "Karaoke database check: verifies song availability before you request it at the bar",
      "AI song suggestions from Claude, OpenAI, or Gemini — you provide the API key",
      "Spotify OAuth import: pull songs directly from your playlists instead of adding manually",
      "Local data persistence: your songs and moods are stored on-device, no account required",
      "Responsive PWA with mood-based glowing color themes",
    ],
    techStack: [
      { name: "Next.js 15 + TypeScript", reason: "App Router with fast page transitions; TypeScript for type-safe mood and song data structures" },
      { name: "TailwindCSS 4", reason: "Mood-based dynamic theming system — each mood has its own color that propagates through the UI" },
      { name: "Spotify API", reason: "PKCE OAuth to import playlists rather than requiring manual song entry" },
      { name: "Multi-provider AI", reason: "Claude, OpenAI, or Gemini — user-supplied keys keep it private and cost-free for the app" },
    ],
    skills: [
      "Mood-based information architecture and UX design",
      "Spotify PKCE OAuth integration",
      "Multi-provider AI abstraction layer",
      "Privacy-first local storage design",
      "Progressive Web App configuration",
      "Dynamic UI theming based on user-defined categories",
    ],
    links: {},
    progress: "Active. Planned additions: song performance rating (track which ones landed at the bar), collaborative list sharing for group karaoke nights.",
    cardSkills: ["Next.js", "Spotify API", "TailwindCSS 4"],
  },

  {
    slug: "mv-app",
    name: "Retention Intelligence",
    tagline: "AI-powered subscriber analytics that turns churn signals into founder briefs.",
    status: "active",
    accent: {
      border: "border-teal-500",
      bg: "bg-teal-50",
      text: "text-teal-700",
      badge: "bg-teal-100 text-teal-800",
      dot: "bg-teal-500",
      cardBg: "bg-teal-50",
    },
    description: `Working on retention analytics for an edtech program, I needed a way to synthesize subscriber engagement signals — behavioral data, usage patterns, churn indicators — into something actionable for program founders. The challenge wasn't data collection; it was sense-making at scale. Founders needed to see not just metrics, but narratives about what was happening with their subscribers, and clear guidance on what to do about it.

I built this as a single-file, browser-based tool that can receive retention data and immediately produce structured insights. No backend, no deployment pipeline, no onboarding friction. A founder opens the file, the AI agent drops in the data, and within seconds they have a weekly brief with clustered themes, behavioral archetypes, churn risk scores, and intervention recommendations in their own voice — not generic dashboard language.

The design constraint that shaped everything: it had to work for non-technical founders who wouldn't install anything. A single HTML file they could open in any browser.`,
    features: [
      "Subscriber archetype filtering: segments users by behavioral profile for targeted analysis",
      "Churn risk scoring with AI-generated explanations in plain language",
      "Theme clustering: groups related signals into actionable patterns across hundreds of subscribers",
      "Intervention recommendations in multiple tone styles (direct, empathetic, strategic)",
      "Weekly founder brief generation: a narrative summary ready to act on",
      "Zero infrastructure: runs entirely in the browser, no backend or deployment needed",
    ],
    techStack: [
      { name: "Vanilla HTML/CSS/JS", reason: "No build step — the tool opens in any browser without Node.js, npm, or technical setup" },
      { name: "Claude API", reason: "Handles theme clustering across engagement data and generates personalized, tone-matched founder briefs" },
      { name: "Airtable", reason: "Acts as the data layer without requiring a backend — the retention agent writes there, this tool reads from it" },
      { name: "Chart.js", reason: "Lightweight visualization for engagement trends and churn risk distributions" },
    ],
    skills: [
      "AI-powered data synthesis and pattern recognition at scale",
      "Prompt engineering for tone-matched business writing",
      "Zero-infrastructure deployment design (single-file apps)",
      "Human-centered analytics dashboard design",
      "Behavioral segmentation and archetype modeling",
    ],
    links: {},
    progress: "Active within the edtech program context. Specific to its use case — delivers weekly briefs on a regular cadence.",
    cardSkills: ["Claude API", "Airtable", "Vanilla JS"],
  },

  {
    slug: "journaling",
    name: "Lifebook Journaling System",
    tagline: "A five-level journaling hierarchy that connects every day to a larger intention.",
    status: "utility",
    accent: {
      border: "border-amber-700",
      bg: "bg-orange-50",
      text: "text-amber-800",
      badge: "bg-amber-100 text-amber-900",
      dot: "bg-amber-700",
      cardBg: "bg-orange-50",
    },
    description: `I follow the Lifebook methodology, which organizes life into ten categories — health, emotional life, relationships, spirituality, career, and more — each with a vision, a purpose, and a strategy. Maintaining that kind of structured intentionality across daily life requires a system that's both flexible and consistent. Most journaling apps are neither.

I built my journaling system on Obsidian because I wanted full ownership of my data and full control over the structure. The system works in five levels: daily notes pull their priorities from the weekly note, which was seeded from the monthly, which came from the quarterly, which came from the yearly vision. Each level aggregates information upward via DataviewJS — weekly reflections roll into monthly summaries, monthly into quarterly, automatically surfacing patterns without manual compilation.

The result is a journaling practice that feels coherent: every day connects to every week, every week to a monthly intention, every month to a larger vision for the year. The system also includes an archival companion (Obsidian Archive) that keeps the vault clean over time, moving old notes into dated folders without disrupting the structure or losing anything.`,
    features: [
      "Five-level hierarchy: daily → weekly → monthly → quarterly → yearly, each level seeded from the one above",
      "Ten Lifebook categories tracked consistently across all levels (health, relationships, career, spirituality, and more)",
      "Automated template generation via Templater: new notes pull context from parent-level notes at creation time",
      "DataviewJS aggregations push data upward: events, achievements, insights, and #improve tags surface automatically",
      "Mood, sleep, and energy sparklines at monthly level — visual trends without manual data entry",
      "Obsidian Archive companion: automated archival scripts move old notes to dated folders, preserving structure",
    ],
    techStack: [
      { name: "Obsidian", reason: "Local-first Markdown vault — data never leaves the machine, works fully offline, portable forever" },
      { name: "Templater", reason: "JavaScript scripting within Obsidian — generates each note's structure by pulling from parent-level notes at creation time" },
      { name: "DataviewJS", reason: "Aggregates data upward through the hierarchy — weekly reflections roll into monthly summaries automatically" },
      { name: "Node.js", reason: "Archive utility scripts that move old notes into dated folders without disrupting the vault structure" },
    ],
    skills: [
      "Hierarchical data architecture with bidirectional information flow",
      "Automation scripting within knowledge management systems",
      "Lifebook methodology implementation across five time horizons",
      "DataviewJS query design for complex aggregation across hundreds of notes",
      "Archival system design for long-term knowledge preservation",
      "Personal data integrity — zero cloud dependency, full local ownership",
    ],
    links: {},
    progress: "Core system complete and in daily use. Templates evolve alongside the practice. The archival utility runs periodically to keep the vault clean and navigable.",
    cardSkills: ["Obsidian", "Templater", "DataviewJS"],
  },

  {
    slug: "cyclic-life",
    name: "Cyclic Life",
    tagline: "A private, beautifully customizable cycle tracking app built for nuance.",
    status: "early-stage",
    accent: {
      border: "border-pink-400",
      bg: "bg-pink-50",
      text: "text-pink-700",
      badge: "bg-pink-100 text-pink-800",
      dot: "bg-pink-400",
      cardBg: "bg-pink-50",
    },
    description: `Cycle tracking apps tend to fall into two camps: the ones designed around fertility and medical outcomes, and the ones so minimal they're just a period calendar. I wanted something different — a highly customizable daily logging tool built around the idea that every cycle is unique and worth understanding in detail.

The app is inspired by Clue's icon-based UX: big, satisfying icons to tap, no free-text walls, clean structured input. But unlike Clue, everything is customizable. You define the categories, the tracking items, and what kind of input each uses — binary yes/no, intensity 1-5, single choice, multi-select, numeric, count, or duration. Sleep quality, mood shifts, energy patterns, specific habits — whatever matters in your cycle, you can track it.

Privacy comes first by design. All data lives on-device in SQLite by default. No account required, no cloud, nothing leaves your phone unless you choose to sync. When you want a second lens on your patterns, optional AI observations are available — using your own API key or a custom-compatible endpoint.`,
    features: [
      "Fully customizable tracking items: define categories, items, and input types to match your life",
      "Six input types: binary, intensity 1–5, single choice, multi-select, numeric, count, duration",
      "Period tracking with cycle phase estimates (follicular, ovulatory, luteal) with confidence labels",
      "Offline-first SQLite storage — data stays on-device, no account or cloud required",
      "Deterministic analytics first: pattern detection before any AI layer",
      "AI observations with user-provided API key or custom OpenAI-compatible endpoint",
    ],
    techStack: [
      { name: "Expo + React Native + TypeScript", reason: "Single codebase for iOS and Android; TypeScript ensures correctness in cycle phase calculations" },
      { name: "SQLite (local)", reason: "All data stays on-device by default — no account required, no cloud dependency" },
      { name: "Supabase (optional)", reason: "Available for users who want to sync across devices or keep an encrypted backup" },
      { name: "AI provider abstraction", reason: "Supports built-in cloud mode, user API key, or custom OpenAI-compatible endpoint — privacy-preserving by design" },
    ],
    skills: [
      "Offline-first mobile architecture with local SQLite",
      "Custom input type system for flexible, structured data capture",
      "Cycle phase estimation and deterministic analytics",
      "AI provider abstraction layer (multi-endpoint support)",
      "Cross-platform mobile development with Expo",
      "Privacy-first data architecture (local-first, optional sync)",
    ],
    links: {},
    progress: "In development. Architecture and data model are complete. Building out the core tracking UI screens; first release planned for personal use.",
    cardSkills: ["Expo", "React Native", "SQLite"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
