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
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="mb-20">
        <p className="text-sm font-medium tracking-widest uppercase text-stone-400 mb-3">
          Yael
        </p>
        <h1 className="font-serif text-5xl md:text-6xl text-stone-800 leading-tight mb-6">
          Systems Designer
        </h1>
        <p className="text-xl text-stone-500 leading-relaxed max-w-xl">
          Building structured tools for an intentional life — across learning,
          relationships, meditation, and personal growth.
        </p>
      </section>

      {/* Project grid */}
      <section className="mb-20">
        <h2 className="text-xs font-semibold tracking-widest uppercase text-stone-400 mb-6">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
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
        <h2 className="text-xs font-semibold tracking-widest uppercase text-stone-400 mb-4">
          Tools &amp; Technologies
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="text-sm text-stone-500 bg-stone-100 px-3 py-1.5 rounded-full"
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
