import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Footer } from "@/components/Footer";

const skills = [
  "Python", "TypeScript", "React", "Next.js", "Flask",
  "Supabase", "Claude API", "OpenAI", "Obsidian", "ChromaDB",
  "SQLite", "Expo", "React Native", "TailwindCSS", "Capacitor",
  "Vite", "Zustand", "Airtable",
];

const professionalSlugs = [
  "mv-app",
  "vsdx-transformer",
  "vsdx-translator",
  "slack-kb-bot",
  "todoist-ai",
  "finance-dashboard",
];

const personalSlugs = [
  "karaoke-brain",
  "conflict-soup",
  "journaling",
  "friend-crm",
  "cyclic-life",
];

export default function Home() {
  const professional = professionalSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  const personal = personalSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  const inProgress = projects.filter((p) => p.status === "early-stage");

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="mb-24">
        <p className="text-xs font-mono tracking-widest uppercase text-zinc-500 mb-5">
          Yael
        </p>
        <h1 className="font-serif text-6xl md:text-7xl text-white leading-none mb-6">
          Systems Designer
        </h1>
        <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
          Consultant and AI tool builder working at the intersection of pharma, neuroscience, and applied AI. I can&apos;t walk past a broken process without designing something to fix it — whether that&apos;s turning churn data into founder briefs or making sure I don&apos;t waste brain cycles choosing what to sing next at karaoke.
        </p>
      </section>

      {/* Professional + Personal columns */}
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Professional */}
          <div>
            <div className="flex items-baseline gap-4 mb-8 pb-4 border-b border-zinc-800">
              <h2 className="font-serif text-4xl text-white">Professional</h2>
              <span className="text-zinc-600 text-sm font-mono">{professional.length} projects</span>
            </div>
            <div className="flex flex-col gap-5">
              {professional.map((project, i) => (
                <div key={project.slug} className={`animate-fade-up animate-fade-up-${i + 1}`}>
                  <ProjectCard project={project} hideBadge />
                </div>
              ))}
            </div>
          </div>

          {/* Personal */}
          <div>
            <div className="flex items-baseline gap-4 mb-8 pb-4 border-b border-zinc-800">
              <h2 className="font-serif text-4xl text-white">Personal</h2>
              <span className="text-zinc-600 text-sm font-mono">{personal.length} projects</span>
            </div>
            <div className="flex flex-col gap-5">
              {personal.map((project, i) => (
                <div key={project.slug} className={`animate-fade-up animate-fade-up-${i + 1}`}>
                  <ProjectCard project={project} hideBadge />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* In Progress */}
      <section className="mb-20">
        <div className="flex items-baseline gap-4 mb-8 pb-4 border-b border-zinc-800">
          <h2 className="font-serif text-4xl text-white">In Progress</h2>
          <span className="text-zinc-600 text-sm font-mono">{inProgress.length} projects</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {inProgress.map((project, i) => (
            <div key={project.slug} className={`animate-fade-up animate-fade-up-${i + 1}`}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>

      {/* Skills cloud */}
      <section className="mb-8">
        <h2 className="text-xs font-mono tracking-widest uppercase text-zinc-600 mb-4">
          Tools &amp; Technologies
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="text-sm text-zinc-500 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
