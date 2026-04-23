import Link from "next/link";
import type { Project } from "@/lib/types";
import { SkillPill } from "./SkillPill";

interface ProjectCardProps {
  project: Project;
}

const statusConfig: Record<Project["status"], { label: string; classes: string }> = {
  active: {
    label: "In Use",
    classes: "bg-zinc-800 text-zinc-400",
  },
  "early-stage": {
    label: "In Progress",
    classes: "bg-amber-950/60 text-amber-400 border border-amber-800/50",
  },
  utility: {
    label: "In Use",
    classes: "bg-zinc-800 text-zinc-400",
  },
};

export function ProjectCard({ project }: ProjectCardProps) {
  const status = statusConfig[project.status];

  return (
    <Link
      href={`/projects/${project.slug}/`}
      className="group block rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 hover:border-zinc-700 hover:bg-zinc-800/60 transition-all duration-200"
    >
      {/* GIF Thumbnail */}
      <div className="relative h-44 w-full overflow-hidden bg-zinc-950">
        {project.gif ? (
          <img
            src={project.gif}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-zinc-700 text-sm">
            {project.name}
          </div>
        )}
        {/* Accent line at bottom of thumbnail */}
        <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${project.accent.dot}`} />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-serif text-lg font-semibold text-white leading-snug group-hover:text-zinc-200 transition-colors">
            {project.name}
          </h3>
          <span className={`shrink-0 text-xs px-2 py-0.5 rounded-full font-medium ${status.classes}`}>
            {status.label}
          </span>
        </div>
        <p className="text-sm text-zinc-400 leading-relaxed mb-4 line-clamp-2">
          {project.tagline}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.cardSkills.map((skill) => (
            <SkillPill key={skill} label={skill} />
          ))}
        </div>
      </div>
    </Link>
  );
}
