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
    description: `I love karaoke, and have so many songs in my list — but while listening to others it's so hard to figure out what to sing that would fit the mood. It's not just me, I checked. I tried Spotify, tried simple notes, but could never find the right song in the right moment.

I built Karaoke Brain as a mood-organized song management system. You define your own moods, curate your songs into each, and at karaoke night you pick the vibe you're in and get your options instantly. No scrolling through hundreds of songs. And when inspiration fails, you can ask an AI to suggest something based on your mood — using your own API key so there's no shared cost or privacy concern.

One more problem this solves: you don't need to read the songbook anymore. The app checks whether the song is in the venue's database before you go up.`,
    features: [
      "Mood-organized library: define moods, curate songs into each, see your options the moment you need them",
      "Venue database check: confirms the song is in the bar's catalog before you walk up to request it",
      "AI suggestions on demand — Claude, OpenAI, or Gemini — using your own key, no shared cost",
      "Spotify import: pull songs directly from your playlists rather than building from scratch",
      "Fully local: your library stays on-device, no account or sign-in required",
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
    links: { live: "https://karaoke-brain.vercel.app/" },
    progress: "Active. Planned additions: integration of other sources beyond Spotify, collaborative list sharing for group karaoke nights.",
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
    description: `A subscription platform invests most of its energy in acquisition. But retention matters too — a churning subscriber is expensive, and the signals are already in the data: engagement patterns, email behavior, usage drops.

This platform had an internal AI generating rich behavioral data on subscribers. The missing piece was turning that data into something a person could act on — not another dashboard to log into, but a brief that surfaces what's changing and what to do about it, delivered to whoever needs it.

I built the tool to close that loop: it synthesizes subscriber signals, clusters them into themes, scores churn risk, and generates a weekly brief with plain-language intervention recommendations. Zero infrastructure — a single HTML file that opens in any browser.`,
    features: [
      "Weekly brief generation: subscriber signals turned into a narrative summary ready to act on",
      "Theme clustering: groups related behavioral patterns across hundreds of subscribers automatically",
      "Churn risk scoring with plain-language explanations — no data interpretation required",
      "Intervention recommendations with multiple tone options",
      "Zero infrastructure: a single HTML file, opens in any browser, no installation needed",
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
    links: { live: "https://5twto.github.io/mv_application/index.html" },
    progress: "Complete. Delivered weekly briefs within an edtech program. Currently on the shelf — available to reactivate.",
    cardSkills: ["Claude API", "Airtable", "Vanilla JS"],
  },

  {
    slug: "conflict-soup",
    name: "Conflict Soup",
    tagline: "A structured space for processing conflict in close relationships.",
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
    description: `Any relationship has recurring conflicts — arguments that come back in slightly different shapes. The hard part isn't dealing with them one by one; it's noticing the pattern. Is this a one-off, or is it the third time this month? NVC (Nonviolent Communication) is a framework I find genuinely useful for this, but in the heat of conflict it's hard to hold the structure in mind while also feeling the feelings.

Conflict Soup creates a space for processing outside the moment. You log incidents as they happen — messy, raw — and the system immediately offers an NVC rewrite: the same situation in terms of observations, feelings, needs, and requests. Over time, themes cluster. You can see what keeps coming up.

When it's time to address something, the app facilitates a structured resolution session that ends with a concrete, mutual agreement on record.`,
    features: [
      "Relationship units: create dyads, triads, or multi-person groups with named members",
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
    progress: "Active and in regular use. Planned next: mobile-responsive improvements and recurring pattern visualization.",
    cardSkills: ["Next.js", "Supabase", "OpenAI"],
  },

  {
    slug: "journaling",
    name: "Journaling System",
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
    description: `I built my journaling system on Obsidian because I wanted full ownership of my data and full control over the structure. The system works in five levels: daily notes pull their priorities from the weekly note, which was seeded from the monthly, which came from the quarterly, which came from the yearly vision. Each level aggregates information upward via DataviewJS — weekly reflections roll into monthly summaries, monthly into quarterly, automatically surfacing patterns without manual compilation.

The result is a journaling practice that feels coherent: every day connects to every week, every week to a monthly intention, every month to a larger vision for the year. The system also includes an archival companion (Obsidian Archive) that keeps the vault clean over time, moving old notes into dated folders without disrupting the structure or losing anything.`,
    features: [
      "Five-level hierarchy: daily → weekly → monthly → quarterly → yearly, each level seeded from the one above",
      "Ten life categories tracked consistently across all levels (health, relationships, career, spirituality, and more)",
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
      "Life categories framework implementation across five time horizons",
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
    description: `I care about maintaining friendships, but the busyness of daily life means weeks become months before I reach out to people I genuinely want to stay close with. Most CRM tools are built for sales pipelines — they're overkill for friendship and miss the point entirely.

I wanted something minimal: a CLI I could run from the terminal, see who I'm overdue to contact, and come away with a message I'd actually want to send. Not a template — a real message, grounded in what's currently happening in my life and what I know about each friend.`,
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
    slug: "vsdx-transformer",
    name: "Diagram Digitizer",
    tagline: "Converts workshop whiteboard photos into editable .vsdx diagrams using AI vision.",
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
    description: `After facilitating a workshop, I often end up with boards full of cards and hand-written notes that all need to live digitally — in my case in Lucidchart. Recreating them manually is the kind of job that shouldn't need to exist.

The tool converts workshop photos into actual editable .vsdx files. GPT-4o's vision processes the image — detecting shapes, reading text, finding connections — and assembles a structured file using your template shapes, positioned correctly. No redrawing, no manual reconstruction.`,
    features: [
      "Convert workshop photos directly to editable .vsdx files — skip the manual reconstruction entirely",
      "AI vision reads shapes, text, and connections from the image",
      "Positions shapes using your actual template catalog, not generic placeholders",
      "Operates on VSDX internals directly — no Visio license required",
    ],
    techStack: [
      { name: "JavaScript (Node.js)", reason: "Fast scripting environment for file I/O pipelines, ZIP manipulation, and XML processing" },
      { name: "OpenAI GPT-4o", reason: "Three-pass vision pipeline: shape detection, text extraction, and connector mapping from images" },
      { name: "JSZip + xml2js", reason: "VSDX files are ZIP archives with XML inside — these libraries handle parsing and reassembly" },
      { name: "sharp", reason: "Image preprocessing to normalize input before the vision pipeline" },
    ],
    skills: [
      "Multi-pass AI vision pipeline design (detect → extract → map)",
      "Binary file format engineering (VSDX ZIP/XML internals)",
      "Coordinate mapping between percentage space and VSDX coordinate space",
      "XML document processing and targeted node manipulation",
    ],
    links: {},
    progress: "Complete. Used to process an existing diagram library.",
    cardSkills: ["GPT-4o Vision", "Node.js", "VSDX/XML"],
  },

  {
    slug: "vsdx-translator",
    name: "Diagram Translator",
    tagline: "Batch-translates entire Visio diagram libraries into 6+ languages without the monkey work.",
    status: "active",
    gif: "https://media.giphy.com/media/3o6vXLMQP2SQluZHgs/giphy.gif",
    accent: {
      border: "border-purple-500",
      bg: "bg-purple-900/30",
      text: "text-purple-300",
      badge: "bg-purple-900/40 text-purple-300",
      dot: "bg-purple-500",
      cardBg: "bg-purple-950",
    },
    description: `Translating a large diagram library into a different language is the monkey job no-one wants to do: open each file, find every text shape, copy-paste, translate it, repeat. The work is entirely mechanical, and the cost adds up fast.

The tool batch-translates existing .vsdx files by grouping all text per page and sending it in a single call, then writing the translations back into the correct XML nodes in the VSDX structure. That reduces API calls by 85–95% compared to shape-by-shape translation and leaves not only your brain but also your hands free for other work.`,
    features: [
      "Translate entire diagram libraries in one run — no file-by-file work",
      "Batch translation: all text per page in a single API call, 85–95% fewer calls than shape-by-shape",
      "Writes translations back into the correct positions in the VSDX structure",
      "No Visio license required — operates on the file internals directly",
    ],
    techStack: [
      { name: "JavaScript (Node.js)", reason: "Fast scripting environment for file I/O pipelines, ZIP manipulation, and XML processing" },
      { name: "GPT-4o-mini", reason: "Batch translation of grouped text blocks — high throughput at lower cost" },
      { name: "OpenAI GPT-4o", reason: "Full-model translation for quality-critical diagrams" },
      { name: "JSZip + xml2js", reason: "VSDX files are ZIP archives with XML inside — these libraries handle parsing and reassembly" },
    ],
    skills: [
      "Batch API optimization — grouping requests to minimize calls",
      "Binary file format engineering (VSDX ZIP/XML internals)",
      "XML document processing and targeted node manipulation",
      "Multilingual AI processing across 6+ languages",
      "Cost optimization through model selection and request batching",
    ],
    links: {},
    progress: "Complete. Used to process an existing diagram library at scale.",
    cardSkills: ["GPT-4o-mini", "Node.js", "VSDX/XML"],
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
    description: `Working on AI meant constant discovery — new tools, new prompting techniques, workflows that worked, patterns worth repeating. The problem was that knowledge lived in whoever's head found it. By the time someone asked a question, the person who knew the answer might not be around, or the thread was buried three months back in Slack.

I built the bot specifically to capture AI knowledge as it was being built, not after the fact. The framing of "cases" — discrete, queryable units of knowledge — came from the nature of AI work: each tool, each prompt pattern, each workflow is a distinct thing you want to be able to retrieve later.

The bot is deployed and running on Fly.io in production. Team members add cases via slash commands, no separate UI needed. When anyone @mentions the bot with a question, it embeds the query, runs cosine similarity search against the knowledge base, and feeds the top matches to GPT-4o to compose a grounded answer. The model only uses retrieved context, so answers are backed by what the team has actually documented.`,
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
    description: `I use Todoist heavily, but the friction of opening the app, navigating to the right project, setting priorities, and scheduling correctly adds up. I'd rather just type what I mean and have the system handle the details.

I built a conversational CLI that wraps the Todoist API with a Gemini-powered natural language layer. You type what you want — "add a call with Yoav next Thursday morning, high priority" — and it creates the task with the right properties.

Two features stand out: event templates and calendar photo input. Type "I have an Adboard on 15.04" and the tool breaks it into standard milestones and deadlines, asks for confirmation, and adds everything at once. The photo input is unexpected: photograph your physical planner or calendar and the tool reads it and creates Todoist tasks for everything scheduled there, into the right dates.`,
    features: [
      "Full task management in natural language — create, search, update, complete, schedule",
      "Event templates: describe an event and get a full set of milestones and deadlines in one shot",
      "Calendar photo input: photograph your physical planner and the tool populates Todoist from the image",
      "Recurring task scheduling in natural language ('every weekday', 'first Monday of the month')",
      "Conversational context: follow-up commands work within the same session",
    ],
    techStack: [
      { name: "JavaScript (Node.js)", reason: "Fast CLI scripting — no build step, runs immediately from the terminal" },
      { name: "Google Gemini API", reason: "Handles both text conversation and vision — a single model for chat and image analysis" },
      { name: "Todoist REST API", reason: "Full task CRUD — create, read, update, complete, schedule via the official API" },
    ],
    skills: [
      "Natural language interface design for task management",
      "Conversational AI UX — stateful session, follow-up commands",
      "Event template system: entity recognition → milestone decomposition → confirmation flow",
      "AI vision for calendar and planner photo parsing",
      "Custom priority system design and workflow mapping",
      "REST API integration with structured output parsing",
    ],
    links: {},
    progress: "No longer actively used — Todoist released a native voice/ramble feature that covers the core use case. The tool is built and working; the architecture pattern (natural language → API actions) is reusable.",
    cardSkills: ["Google Gemini", "Todoist API", "Node.js"],
  },

  {
    slug: "finance-dashboard",
    name: "Finance Dashboard",
    tagline: "A fully local personal finance dashboard — bank CSVs in, spending intelligence out.",
    status: "active",
    gif: "https://media.giphy.com/media/xTiTnqUxyWbsAXq7Ju/giphy.gif",
    accent: {
      border: "border-green-500",
      bg: "bg-green-900/30",
      text: "text-green-300",
      badge: "bg-green-900/40 text-green-300",
      dot: "bg-green-500",
      cardBg: "bg-green-950",
    },
    description: `The existing personal finance apps have two problems: they share your complete financial history with third parties you don't know, and they expect you to remember to log every expense as it happens. Neither works.

The approach here is different: your expenses already live in your bank statements. Import the CSV, and the dashboard categorizes everything automatically. No manual logging, no sensitive data leaving your machine.

The whole thing runs locally on SQLite, stored in iCloud Drive — which means it syncs to iPhone without any server or account. Open the PWA on your phone and your full spending analysis is there.`,
    features: [
      "Bank CSV import with automatic categorization — no manual entry, no syncing with your bank",
      "Recurring charge detection: identifies subscriptions and regular payments across months",
      "Weekly summary with an honest plain-language verdict on your spending patterns",
      "Monthly breakdown with vs-last-month comparisons and savings goal tracking",
      "Syncs to iPhone via iCloud Drive — no server, no account, no app store",
      "Zero cloud dependency: nothing leaves your machine",
    ],
    techStack: [
      { name: "Python + FastAPI", reason: "Lightweight local server with clean REST endpoints — no deployment complexity, runs instantly" },
      { name: "SQLAlchemy + SQLite", reason: "Relational schema for transactions, categories, and goals; database lives in iCloud Drive for automatic sync" },
      { name: "Vanilla JS/CSS", reason: "Single HTML file, no build step, no CDN dependencies — opens in any browser instantly" },
      { name: "PWA (service worker)", reason: "Cache-first shell, network-first API — installable on iPhone and works over local WiFi" },
    ],
    skills: [
      "Multi-format CSV parsing with automatic format detection",
      "Rule-based transaction categorization engine",
      "Recurring charge detection algorithm across time series data",
      "Local-first architecture with iCloud Drive as the sync layer",
      "PWA design for mobile access without app store distribution",
      "Personal finance data modeling (accounts, categories, goals, recurrences)",
    ],
    links: {},
    progress: "Complete and in personal use. Known gaps: no multi-currency conversion, goal currency defaults to EUR.",
    cardSkills: ["Python", "FastAPI", "SQLite"],
  },

  // ── In Progress (featured first) ──────────────────────────────────────────

  {
    slug: "cyclic-life",
    name: "Cyclic Life",
    tagline: "A private, beautifully customizable cycle tracking app built for nuance.",
    status: "active",
    gif: "https://media.giphy.com/media/3oEjHNHGf0i6OIhJII/giphy.gif",
    accent: {
      border: "border-pink-500",
      bg: "bg-pink-900/30",
      text: "text-pink-300",
      badge: "bg-pink-900/40 text-pink-300",
      dot: "bg-pink-500",
      cardBg: "bg-pink-950",
    },
    description: `I wanted a tool that lets me see patterns I might have missed. I know well enough when my head will hurt — what I want to understand is why on some weeks talking to people is so much harder, or why the same task feels light one day and impossible the next.

Cyclic Life is a fully customizable daily logging tool. You define what you track and how — the app stays out of the way and just collects. Over time, patterns surface across your cycle that a calendar simply can't show you.

All data lives on-device by default. No account, no cloud, nothing leaves your phone.`,
    features: [
      "Fully customizable tracking: you define the categories, items, and input types — not locked to someone else's idea of what matters",
      "Pattern analytics across your cycle — surfaces correlations you wouldn't have noticed otherwise",
      "Period tracking with cycle phase estimates and confidence labels",
      "Offline-first: all data on-device, no account or cloud required",
      "Optional AI observations using your own key — your health data stays yours",
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
    progress: "Complete and in personal use.",
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
    description: `I have four degrees and have completed roughly 150 university courses — economics, history of art, psychology, philosophy, mathematics, you name it. That's a lot of knowledge to accumulate. The problem is that without active retrieval, it fades. A year after finishing a course, I can recall the broad strokes but lose the detail that made it interesting.

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
    description: `I like to meditate and enjoy mixing and matching different styles according to my needs. Running a personal retreat — even just for a few days — means managing an exact sequence of audio cues, guided sessions, and practice instructions that has to work flawlessly without supervision.

The apps I found were either too general or too rigid. I wanted to design my own retreat schedule — choosing which practices to include, how to proportion sitting time — and then lock it in for live mode, where everything runs on autopilot. The design principle came first: act as the architect, then become the retreatant.

The result is a cross-platform tool that runs on iOS and Android. You configure the retreat with a setup wizard, tweak the schedule with a drag-and-drop editor, generate all the spoken announcements with TTS, and then enter live mode — which is fully offline, fully automatic, and impossible to accidentally break.`,
    features: [
      "6-step setup wizard: duration, wake time, practices, proportions, constraints, and Spotify integration",
      "Drag-and-drop schedule editor with hard and soft constraint validation",
      "Pre-generates all spoken announcements via OpenAI TTS at lock time — live mode runs fully offline",
      "Guided session library with content organized by practice style, duration, and theme",
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
