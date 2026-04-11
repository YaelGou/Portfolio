interface SkillPillProps {
  label: string;
  className?: string;
}

export function SkillPill({ label, className = "bg-stone-100 text-stone-600" }: SkillPillProps) {
  return (
    <span
      className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium ${className}`}
    >
      {label}
    </span>
  );
}
