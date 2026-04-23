export interface TechItem {
  name: string;
  reason: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  status: "active" | "early-stage" | "utility";
  gif?: string;
  accent: {
    border: string;
    bg: string;
    text: string;
    badge: string;
    dot: string;
    cardBg: string;
  };
  description: string; // markdown-friendly, first person "The Why"
  features: string[];
  techStack: TechItem[];
  skills: string[];
  links: {
    live?: string;
    github?: string;
  };
  screenshot?: string;
  progress: string;
  cardSkills: string[]; // 2-3 pills shown on landing card
}
