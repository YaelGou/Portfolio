import type { Project } from "@/lib/types";

export const projects: Project[] = [
  // ── In Use (featured first) ────────────────────────────────────────────────

  {
    slug: "karaoke-brain",
    name: "Karaoke Brain",
    tagline: "A mood-organized song manager so you always know what to sing next.",
    status: "active",
    gif: "https://media.giphy.com/media/lqqecfmnq2ldOtZEES/giphy.gif",
    accent: {
      border: "border-violet-500",
      bg: "bg-violet-900/30",
      text: "text-violet-300",
      badge: "bg-violet-900/40 text-violet-300",
      dot: "bg-violet-500",
      cardBg: "bg-violet-950",
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
    gif: "https://media.giphy.com/media/xUA7aSvAOa9GpY18hG/giphy.gif",
    accent: {
      border: "border-teal-500",
      bg: "bg-teal-900/30",
      text: "text-teal-300",
      badge: "bg-teal-900/40 text-teal-300",
      dot: "bg-teal-500",
      cardBg: "bg-teal-950",
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
    progress: "Active within the edtech program context. Delivers weekly briefs on a regular cadence.",
    cardSkills: ["Claude API", "Airtable", "Vanilla JS"],
  },

  {
    slug: "conflict-soup",
    name: "Conflict Soup",
    tagline: "A structured space for processing conflict in polyamorous relationships.",
    status: "active",
    gif: "https://media.giphy.com/media/ecd4TvE96YkIQuP5XI/giphy.gif",
    accent: {
      border: "border-rose-500",
      bg: "bg-rose-900/30",
      text: "text-rose-300",
      badge: "bg-rose-900/40 text-rose-300",
      dot: "bg-rose-500",
      cardBg: "bg-rose-950",
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
    slug: "journaling",
    name: "Lifebook Journaling System",
    tagline: "A five-level journaling hierarchy that connects every day to a larger intention.",
    status: "utility",
    gif: "https://media.giphy.com/media/lHQP1QlRMru2Qz6uye/giphy.gif",
    accent: {
      border: "border-amber-500",
      bg: "bg-amber-900/30",
      text: "text-amber-300",
      badge: "bg-amber-900/40 text-amber-300",
      dot: "bg-amber-500",
      cardBg: "bg-amber-950",
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
    slug: "friend-crm",
    name: "Friend Reconnection CRM",
    tagline: "A personal CLI that keeps your most important friendships from quietly fading.",
    status: "active",
    gif: "https://media.giphy.com/media/309gFKfRr2o52spjHO/giphy.gif",
    accent: {
      border: "border-slate-500",
      bg: "bg-slate-800/50",
      text: "text-slate-300",
      badge: "bg-slate-800 text-slate-400",
      dot: "bg-slate-500",
      cardBg: "bg-slate-900",
    },
    description: `I noticed a pattern: I care about maintaining friendships, but the busyness of daily life means weeks become months before I reach out to people I genuinely want to stay close with. Most CRM tools are built for sales pipelines — they're overkill for friendship and miss the point entirely.

I wanted something minimal: a lightweight CLI I could run from the terminal, see who I'm overdue to contact, and come away with a message I'd actually want to send. Not a template, not a notification — a real message, grounded in what's currently happening in my life and what I know about each friend.

The tool stores data in Excel so I can open and edit it directly without the CLI, and the AI generates messages that are warm and specific rather than generic check-ins.`,
    features: [
      "Track friends with custom contact frequencies (weekly, monthly, quarterly, and more)",
      "Shows who you're overdue to contact and by how long",
      "Prompts you for what's new in your life before generating each message",
      "OpenAI generates personalized, non-generic message drafts grounded in your context",
      "Data stored in Excel files — portable and editable outside the tool",
      "Scheduling logic handles irregular contact patterns without false alarms",
    ],
    techStack: [
      { name: "TypeScript + Node.js", reason: "Type-safe CLI — strong typing catches scheduling logic errors before they cause missed contacts" },
      { name: "OpenAI GPT-4", reason: "Generates personalized messages based on friend context and what's new in your life" },
      { name: "Excel (xlsx)", reason: "Portable, human-readable storage — editable directly without needing the tool" },
    ],
    skills: [
      "CLI UX design — conversational prompts that feel natural, not robotic",
      "AI-assisted personalization at the individual level",
      "Scheduling algorithm design for irregular contact frequencies",
      "Data portability design (Excel-first, tool-agnostic storage)",
    ],
    links: {},
    progress: "Active and in personal use. Potential future additions: email/WhatsApp integration, contact notes history.",
    cardSkills: ["TypeScript", "OpenAI GPT-4", "Node.js"],
  },

  {
    slug: "vsdx-processor",
    name: "VSDX AI Diagram Processor",
    tagline: "Converts images to editable Visio diagrams and translates existing ones — 85% fewer API calls.",
    status: "active",
    gif: "https://media.giphy.com/media/p9WGfmQMEENR9zRmCO/giphy.gif",
    accent: {
      border: "border-indigo-500",
      bg: "bg-indigo-900/30",
      text: "text-indigo-300",
      badge: "bg-indigo-900/40 text-indigo-300",
      dot: "bg-indigo-500",
      cardBg: "bg-indigo-950",
    },
    description: `Teams that maintain large libraries of process diagrams face a painful problem when going multilingual: translating every diagram means opening each file, editing every text shape, and repeating across 6+ languages. With dozens of diagrams, the scope is enormous and the work is entirely mechanical.

I built a two-mode toolkit. The first mode converts image-based diagrams (JPEG/PNG) into actual editable .vsdx files: GPT-4o runs a three-pass vision pipeline — detecting shapes, extracting text, finding connectors — then maps percentage-based positions to VSDX coordinate space and assembles a final file using your actual template shapes.

The second mode batch-translates existing .vsdx files. Instead of translating shape by shape (one API call each), it groups all text per page, reduces calls by 85–95%, and writes the translated text back into the correct XML nodes in the VSDX structure. Both modes work directly on the ZIP/XML internals of the VSDX format.`,
    features: [
      "Convert JPEG/PNG diagrams to editable .vsdx files — no manual redrawing",
      "Three-pass AI vision pipeline: shape detection → text extraction → connector mapping",
      "Matches detected shapes to a user-provided template catalog with position mapping",
      "Translate existing .vsdx diagrams into 6+ languages",
      "Batch translation groups all text per page — 85–95% fewer API calls than shape-by-shape",
      "Operates directly on VSDX internals (ZIP + XML) — no GUI or Visio license required",
    ],
    techStack: [
      { name: "JavaScript (Node.js)", reason: "Fast scripting environment for file I/O pipelines, ZIP manipulation, and XML processing" },
      { name: "OpenAI GPT-4o", reason: "Vision pipeline for shape detection and text extraction; full-model translation for quality" },
      { name: "GPT-4o-mini", reason: "Batch translation of grouped text blocks — high throughput at lower cost" },
      { name: "JSZip + xml2js", reason: "VSDX files are ZIP archives with XML inside — these libraries handle parsing and reassembly" },
      { name: "sharp", reason: "Image preprocessing to normalize input before the vision pipeline" },
    ],
    skills: [
      "Multi-pass AI vision pipeline design (detect → extract → map)",
      "Binary file format engineering (VSDX ZIP/XML internals)",
      "Coordinate mapping between percentage space and VSDX coordinate space",
      "Batch API optimization — grouping requests to minimize calls",
      "XML document processing and targeted node manipulation",
      "Multilingual AI processing across 6+ languages",
    ],
    links: {},
    progress: "Complete. Both modes (image→VSDX and translate) are working in production. Used to process an existing diagram library.",
    cardSkills: ["GPT-4o Vision", "Node.js", "VSDX/XML"],
  },

  {
    slug: "slack-kb-bot",
    name: "Slack AI Knowledge Base",
    tagline: "A production RAG bot that turns your team's collective knowledge into an answerable database.",
    status: "active",
    gif: "https://media.giphy.com/media/S60CrN9iMxFlyp7uM8/giphy.gif",
    accent: {
      border: "border-sky-500",
      bg: "bg-sky-900/30",
      text: "text-sky-300",
      badge: "bg-sky-900/40 text-sky-300",
      dot: "bg-sky-500",
      cardBg: "bg-sky-950",
    },
    description: `Teams accumulate knowledge in people's heads, in Slack threads, and in documents nobody can find when they need them. When someone new joins, or when a question comes up that was answered three months ago, that knowledge is effectively gone. I wanted to give teams a dead-simple way to capture what they know and query it conversationally — without leaving Slack.

The bot is deployed and running on Fly.io in production. Team members add "cases" — tools, processes, workflows, recurring situations — via slash commands, no separate UI needed. When anyone @mentions the bot with a question, it embeds the query, runs cosine similarity search against the knowledge base, and feeds the top matches to GPT-4o to compose a grounded answer. The model only uses retrieved context, so answers are backed by what the team has actually documented.`,
    features: [
      "Add knowledge cases via Slack slash commands — no external UI or admin panel",
      "Semantic search: embeds questions and finds relevant cases by cosine similarity",
      "Grounded answers: GPT-4o responds only from retrieved context, reducing hallucination",
      "pgvector in Supabase — vector similarity search inside PostgreSQL, no separate vector DB",
      "Socket Mode: works locally without a public URL during development",
      "Deployed on Fly.io — always-on, containerized, production-ready",
    ],
    techStack: [
      { name: "Node.js + Bolt SDK", reason: "Bolt is Slack's official framework — handles event routing, slash commands, and @mention parsing cleanly" },
      { name: "OpenAI text-embedding-3-small", reason: "Embeds case descriptions and incoming questions into the same vector space for semantic comparison" },
      { name: "OpenAI GPT-4o", reason: "Generates answers grounded in the retrieved cases — not from general knowledge" },
      { name: "Supabase + pgvector", reason: "Vector similarity search directly in PostgreSQL — no separate vector database to manage" },
      { name: "Fly.io (Docker)", reason: "Always-on deployment — the bot needs to be running persistently, not serverless" },
    ],
    skills: [
      "RAG (Retrieval-Augmented Generation) architecture end-to-end",
      "Vector embeddings and cosine similarity search",
      "Slack app development (Bolt SDK, Socket Mode, slash commands)",
      "Grounding AI outputs in retrieved context to reduce hallucination",
      "Containerized production deployment (Docker + Fly.io)",
    ],
    links: {},
    progress: "Deployed and in active use. Potential extensions: case editing via Slack, usage analytics, multi-workspace support.",
    cardSkills: ["RAG", "pgvector", "Slack Bolt"],
  },

  {
    slug: "todoist-ai",
    name: "Todoist AI Assistant",
    tagline: "Manage your tasks in natural language — Gemini translates your words into Todoist actions.",
    status: "active",
    gif: "https://media.giphy.com/media/kLOkqcrdC5mrCE7k7G/giphy.gif",
    accent: {
      border: "border-red-500",
      bg: "bg-red-900/30",
      text: "text-red-300",
      badge: "bg-red-900/40 text-red-300",
      dot: "bg-red-500",
      cardBg: "bg-red-950",
    },
    description: `I use Todoist heavily, but the friction of opening the app, navigating to the right project, setting priorities, and scheduling correctly adds up throughout the day. I'd rather just say what I mean and have the system handle the details.

I built a conversational CLI that wraps the Todoist API with a Gemini-powered natural language layer. You type what you want — "add a call with Yoav next Thursday morning, high priority" — and it creates the task with the right properties. I added a custom priority shorthand that maps to my own workflow: 'i:' for internal work, 's:' for self-development, no prefix for client work (always highest priority). The tool also reads images: upload a photo of a whiteboard, a handwritten note, or a schedule and it extracts and creates the tasks automatically.`,
    features: [
      "Create, search, update, and complete tasks in natural language",
      "Custom priority shorthand: 'i:' internal, 's:' self-work, no prefix = client (highest)",
      "Image input: upload a photo of a schedule or handwritten list and get Todoist tasks",
      "Recurring task scheduling in natural language ('every weekday', 'first Monday of the month')",
      "Conversational context: remembers what you've discussed in a session for follow-ups",
    ],
    techStack: [
      { name: "JavaScript (Node.js)", reason: "Fast CLI scripting — no build step, runs immediately from the terminal" },
      { name: "Google Gemini API", reason: "Handles both text conversation and vision — a single model for chat and image analysis" },
      { name: "Todoist REST API", reason: "Full task CRUD — create, read, update, complete, schedule via the official API" },
    ],
    skills: [
      "Natural language interface design for task management",
      "Conversational AI UX — stateful session, follow-up commands",
      "AI vision for document and handwriting parsing",
      "Custom priority system design and workflow mapping",
      "REST API integration with structured output parsing",
    ],
    links: {},
    progress: "Active and in daily use. The image input feature is particularly useful for converting handwritten planning sessions into Todoist tasks.",
    cardSkills: ["Google Gemini", "Todoist API", "Node.js"],
  },

  // ── In Progress (featured first) ──────────────────────────────────────────

  {
    slug: "cyclic-life",
    name: "Cyclic Life",
    tagline: "A private, beautifully customizable cycle tracking app built for nuance.",
    status: "early-stage",
    gif: "https://media.giphy.com/media/3oEjHNHGf0i6OIhJII/giphy.gif",
    accent: {
      border: "border-pink-500",
      bg: "bg-pink-900/30",
      text: "text-pink-300",
      badge: "bg-pink-900/40 text-pink-300",
      dot: "bg-pink-500",
      cardBg: "bg-pink-950",
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

  {
    slug: "studyquiz",
    name: "Studyquiz",
    tagline: "Keeping four degrees worth of knowledge alive through adaptive AI quizzing.",
    status: "early-stage",
    gif: "https://media.giphy.com/media/39xFsr7AByj3errFsw/giphy.gif",
    accent: {
      border: "border-amber-500",
      bg: "bg-amber-900/30",
      text: "text-amber-300",
      badge: "bg-amber-900/40 text-amber-300",
      dot: "bg-amber-500",
      cardBg: "bg-amber-950",
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
    progress: "In progress — core ingestion and quiz engine are working. Currently improving subject classification accuracy and adding spaced repetition scheduling.",
    cardSkills: ["Claude API", "ChromaDB", "Python"],
  },

  {
    slug: "retreat-architect",
    name: "Retreat Architect",
    tagline: "Design your own meditation retreat, then surrender to it completely.",
    status: "early-stage",
    gif: "https://media.giphy.com/media/H7kfFDvD9HSYGRbvid/giphy.gif",
    accent: {
      border: "border-emerald-500",
      bg: "bg-emerald-900/30",
      text: "text-emerald-300",
      badge: "bg-emerald-900/40 text-emerald-300",
      dot: "bg-emerald-500",
      cardBg: "bg-emerald-950",
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
    progress: "In progress — core scheduling and live mode are working. Currently redesigning the UI and improving Spotify integration.",
    cardSkills: ["React", "Capacitor", "OpenAI TTS"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
