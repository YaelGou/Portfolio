import Link from "next/link";
import type { Project } from "@/lib/types";
import { SkillPill } from "./SkillPill";

interface ProjectCardProps {
  project: Project;
}

const statusLabel: Record<Project["status"], string> = {
  active: "Active",
  "early-stage": "In Development",
  utility: "Active",
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}/`}
      className="group block rounded-2xl overflow-hidden border border-stone-200 bg-white hover:shadow-md transition-shadow duration-200"
    >
      {/* Accent top strip */}
      <div className={`h-1.5 w-full ${project.accent.dot}`} />

      {/* Placeholder visual */}
      <div className={`h-36 w-full ${project.accent.cardBg} flex items-center justify-center`}>
        <span className={`text-4xl font-serif font-bold ${project.accent.text} opacity-30 select-none`}>
          {project.name[0]}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-serif text-lg font-semibold text-stone-800 leading-snug group-hover:text-stone-600 transition-colors">
            {project.name}
          </h3>
          <span className={`shrink-0 text-xs px-2 py-0.5 rounded-full font-medium ${project.accent.badge}`}>
            {statusLabel[project.status]}
          </span>
        </div>
        <p className="text-sm text-stone-500 leading-relaxed mb-4">{project.tagline}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.cardSkills.map((skill) => (
            <SkillPill key={skill} label={skill} />
          ))}
        </div>
      </div>
    </Link>
  );
}
