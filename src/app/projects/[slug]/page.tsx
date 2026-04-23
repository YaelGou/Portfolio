import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { projects, getProjectBySlug } from "@/data/projects";
import { SkillPill } from "@/components/SkillPill";
import { Footer } from "@/components/Footer";
import { ProjectThumbnail } from "@/components/ProjectThumbnail";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.name} — Yael`,
    description: project.tagline,
    openGraph: {
      title: `${project.name} — Yael`,
      description: project.tagline,
      type: "website",
    },
  };
}

const statusConfig: Record<string, { label: string; classes: string }> = {
  active: { label: "In Use", classes: "bg-zinc-800 text-zinc-400" },
  "early-stage": { label: "In Progress", classes: "bg-amber-950/60 text-amber-400 border border-amber-800/50" },
  utility: { label: "In Use", classes: "bg-zinc-800 text-zinc-400" },
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Back link */}
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-zinc-600 hover:text-zinc-300 transition-colors mb-12"
      >
        ← All projects
      </Link>

      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span
            className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusConfig[project.status].classes}`}
          >
            {statusConfig[project.status].label}
          </span>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4">
          {project.name}
        </h1>
        <p className={`text-xl leading-relaxed ${project.accent.text}`}>
          {project.tagline}
        </p>
      </header>

      {/* Hero thumbnail */}
      <div className="w-full h-56 rounded-xl mb-12 overflow-hidden bg-zinc-900 border border-zinc-800">
        {project.gif ? (
          <img
            src={project.gif}
            alt={project.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <ProjectThumbnail slug={project.slug} className="w-full h-full" />
        )}
      </div>

      {/* The Why */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl text-white mb-5">The Why</h2>
        <div className="space-y-4">
          {project.description.split("\n\n").map((para, i) => (
            <p key={i} className="text-zinc-400 leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className={`h-px w-16 mb-12 ${project.accent.dot}`} />

      {/* What It Does */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl text-white mb-5">What It Does</h2>
        <ul className="space-y-3">
          {project.features.map((feature, i) => (
            <li key={i} className="flex gap-3 text-zinc-400">
              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${project.accent.dot}`} />
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* How It's Built */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl text-white mb-5">How It&apos;s Built</h2>
        <div className="space-y-4">
          {project.techStack.map((item) => (
            <div key={item.name} className="flex gap-4">
              <div className="shrink-0 pt-0.5">
                <span
                  className={`inline-block text-sm font-semibold px-2.5 py-1 rounded-lg ${project.accent.bg} ${project.accent.text}`}
                >
                  {item.name}
                </span>
              </div>
              <p className="text-zinc-500 leading-relaxed text-sm pt-1">{item.reason}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Demonstrated */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl text-white mb-5">Skills Demonstrated</h2>
        <div className="flex flex-wrap gap-2">
          {project.skills.map((skill) => (
            <SkillPill
              key={skill}
              label={skill}
              className={`${project.accent.bg} ${project.accent.text}`}
            />
          ))}
        </div>
      </section>

      {/* Links */}
      {(project.links.live || project.links.github) && (
        <section className="mb-12">
          <h2 className="font-serif text-2xl text-white mb-5">Links</h2>
          <div className="flex gap-4">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-medium px-4 py-2 rounded-lg border ${project.accent.border} ${project.accent.text} hover:${project.accent.bg} transition-colors`}
              >
                Live Site →
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium px-4 py-2 rounded-lg border border-zinc-700 text-zinc-400 hover:bg-zinc-800 transition-colors"
              >
                GitHub →
              </a>
            )}
          </div>
        </section>
      )}

      {/* Progress */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl text-white mb-4">Status</h2>
        <p className="text-zinc-500 leading-relaxed">{project.progress}</p>
      </section>

      <Footer />
    </div>
  );
}
