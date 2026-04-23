import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Footer } from "@/components/Footer";

const skills = [
  "Python", "TypeScript", "React", "Next.js", "Flask",
  "Supabase", "Claude API", "OpenAI", "Obsidian", "ChromaDB",
  "SQLite", "Expo", "React Native", "TailwindCSS", "Capacitor",
  "Vite", "Zustand", "Airtable",
];

export default function Home() {
  const inUse = projects.filter(p => p.status === "active" || p.status === "utility");
  const inProgress = projects.filter(p => p.status === "early-stage");

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
        <p className="text-lg text-zinc-400 leading-relaxed max-w-xl">
          Building structured tools for an intentional life — across learning,
          relationships, meditation, and personal growth.
        </p>
      </section>

      {/* In Use */}
      <section className="mb-20">
        <div className="flex items-baseline gap-4 mb-8 pb-4 border-b border-zinc-800">
          <h2 className="font-serif text-4xl text-white">In Use</h2>
          <span className="text-zinc-600 text-sm font-mono">{inUse.length} projects</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {inUse.map((project, i) => (
            <div
              key={project.slug}
              className={`animate-fade-up animate-fade-up-${i + 1}`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
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
            <div
              key={project.slug}
              className={`animate-fade-up animate-fade-up-${i + 1}`}
            >
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
