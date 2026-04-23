interface SkillPillProps {
  label: string;
  className?: string;
}

export function SkillPill({ label, className = "bg-zinc-800 text-zinc-400" }: SkillPillProps) {
  return (
    <span
      className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium ${className}`}
    >
      {label}
    </span>
  );
}
