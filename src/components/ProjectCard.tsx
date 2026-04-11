import Link from "next/link";
import type { Project } from "@/lib/types";
import { SkillPill } from "./SkillPill";
import { ProjectThumbnail } from "./ProjectThumbnail";

interface ProjectCardProps {
  project: Project;
}

const statusConfig: Record<Project["status"], { label: string; classes: string }> = {
  active: {
    label: "Active",
    classes: "bg-stone-100 text-stone-500",
  },
  "early-stage": {
    label: "In Progress",
    classes: "bg-amber-50 text-amber-700 border border-amber-200",
  },
  utility: {
    label: "Active",
    classes: "bg-stone-100 text-stone-500",
  },
};

export function ProjectCard({ project }: ProjectCardProps) {
  const status = statusConfig[project.status];

  return (
    <Link
      href={`/projects/${project.slug}/`}
      className="group block rounded-xl overflow-hidden border border-stone-200 bg-white hover:border-stone-300 hover:shadow-sm transition-all duration-200"
    >
      {/* Thumbnail */}
      <div className={`h-40 w-full ${project.accent.cardBg} overflow-hidden`}>
        <ProjectThumbnail slug={project.slug} className="w-full h-full" />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-serif text-lg font-semibold text-stone-800 leading-snug group-hover:text-stone-600 transition-colors">
            {project.name}
          </h3>
          <span className={`shrink-0 text-xs px-2 py-0.5 rounded-full font-medium ${status.classes}`}>
            {status.label}
          </span>
        </div>
        <p className="text-sm text-stone-500 leading-relaxed mb-4 line-clamp-2">
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
