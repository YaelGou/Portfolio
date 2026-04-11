import React from "react";

interface ThumbProps {
  className?: string;
}

function StudyquizThumb({ className }: ThumbProps) {
  return (
    <svg viewBox="0 0 280 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Stacked quiz cards */}
      <rect x="68" y="26" width="148" height="90" rx="6" fill="white" stroke="#B45309" strokeWidth="1.2" opacity="0.3"/>
      <rect x="58" y="18" width="148" height="90" rx="6" fill="white" stroke="#B45309" strokeWidth="1.2" opacity="0.55"/>
      <rect x="48" y="10" width="148" height="90" rx="6" fill="white" stroke="#B45309" strokeWidth="1.5"/>
      {/* Question */}
      <rect x="66" y="28" width="88" height="3" rx="1.5" fill="#92400E" opacity="0.55"/>
      <rect x="66" y="37" width="108" height="2.5" rx="1.25" fill="#92400E" opacity="0.25"/>
      <line x1="48" y1="51" x2="196" y2="51" stroke="#B45309" strokeWidth="0.75" opacity="0.35"/>
      {/* Options */}
      <circle cx="65" cy="62" r="4" stroke="#B45309" strokeWidth="1.5" fill="none"/>
      <rect x="76" y="59.5" width="60" height="2.5" rx="1.25" fill="#92400E" opacity="0.28"/>
      <circle cx="65" cy="76" r="4" fill="#B45309"/>
      <rect x="76" y="73.5" width="76" height="2.5" rx="1.25" fill="#92400E" opacity="0.45"/>
      <circle cx="65" cy="90" r="4" stroke="#B45309" strokeWidth="1.5" fill="none"/>
      <rect x="76" y="87.5" width="52" height="2.5" rx="1.25" fill="#92400E" opacity="0.28"/>
      {/* Difficulty meter */}
      <rect x="162" y="75" width="5" height="7" rx="1" fill="#B45309" opacity="0.7"/>
      <rect x="169" y="71" width="5" height="11" rx="1" fill="#B45309" opacity="0.45"/>
      <rect x="176" y="66" width="5" height="16" rx="1" fill="#B45309" opacity="0.3"/>
      <rect x="183" y="60" width="5" height="22" rx="1" fill="#B45309" opacity="0.18"/>
    </svg>
  );
}

function RetreatArchitectThumb({ className }: ThumbProps) {
  return (
    <svg viewBox="0 0 280 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Day timeline */}
      <line x1="40" y1="26" x2="40" y2="118" stroke="#15803D" strokeWidth="1" opacity="0.4"/>
      {/* Time blocks */}
      <rect x="52" y="22" width="180" height="16" rx="3" fill="#15803D" opacity="0.12"/>
      <rect x="52" y="22" width="4" height="16" rx="1" fill="#15803D" opacity="0.8"/>
      <rect x="64" y="25.5" width="60" height="2.5" rx="1.25" fill="#14532D" opacity="0.5"/>
      <rect x="52" y="44" width="180" height="22" rx="3" fill="#15803D" opacity="0.18"/>
      <rect x="52" y="44" width="4" height="22" rx="1" fill="#15803D" opacity="0.9"/>
      <rect x="64" y="48" width="80" height="2.5" rx="1.25" fill="#14532D" opacity="0.55"/>
      <rect x="64" y="55" width="50" height="2" rx="1" fill="#14532D" opacity="0.28"/>
      <rect x="52" y="72" width="180" height="14" rx="3" fill="#15803D" opacity="0.08"/>
      <rect x="52" y="72" width="4" height="14" rx="1" fill="#15803D" opacity="0.5"/>
      <rect x="64" y="75.5" width="44" height="2.5" rx="1.25" fill="#14532D" opacity="0.35"/>
      <rect x="52" y="92" width="180" height="22" rx="3" fill="#15803D" opacity="0.18"/>
      <rect x="52" y="92" width="4" height="22" rx="1" fill="#15803D" opacity="0.9"/>
      <rect x="64" y="96" width="72" height="2.5" rx="1.25" fill="#14532D" opacity="0.55"/>
      <rect x="64" y="103" width="44" height="2" rx="1" fill="#14532D" opacity="0.28"/>
      {/* Bell icon */}
      <path d="M236 32 C236 28 242 28 242 32 L244 42 H234 L236 32Z" stroke="#15803D" strokeWidth="1.5" fill="none" opacity="0.6"/>
      <line x1="239" y1="44" x2="239" y2="46" stroke="#15803D" strokeWidth="1.5" opacity="0.6" strokeLinecap="round"/>
    </svg>
  );
}

function ConflictSoupThumb({ className }: ThumbProps) {
  return (
    <svg viewBox="0 0 280 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Left bubble */}
      <rect x="24" y="18" width="110" height="58" rx="10" fill="white" stroke="#BE123C" strokeWidth="1.5" opacity="0.7"/>
      <path d="M34 76 L24 88 L46 76" fill="white" stroke="#BE123C" strokeWidth="1.5" strokeLinejoin="round"/>
      {/* Left bubble NVC labels */}
      <rect x="38" y="32" width="16" height="7" rx="2" fill="#BE123C" opacity="0.15"/>
      <rect x="39" y="34" width="14" height="2.5" rx="1.25" fill="#BE123C" opacity="0.5"/>
      <rect x="58" y="32" width="16" height="7" rx="2" fill="#BE123C" opacity="0.15"/>
      <rect x="59" y="34" width="14" height="2.5" rx="1.25" fill="#BE123C" opacity="0.5"/>
      <rect x="38" y="44" width="16" height="7" rx="2" fill="#BE123C" opacity="0.15"/>
      <rect x="39" y="46" width="14" height="2.5" rx="1.25" fill="#BE123C" opacity="0.5"/>
      <rect x="58" y="44" width="16" height="7" rx="2" fill="#BE123C" opacity="0.35"/>
      <rect x="59" y="46" width="14" height="2.5" rx="1.25" fill="#BE123C" opacity="0.7"/>
      {/* Right bubble */}
      <rect x="146" y="44" width="110" height="58" rx="10" fill="white" stroke="#BE123C" strokeWidth="1.5" opacity="0.5"/>
      <path d="M246 102 L256 114 L234 102" fill="white" stroke="#BE123C" strokeWidth="1.5" strokeLinejoin="round"/>
      <rect x="160" y="58" width="82" height="2.5" rx="1.25" fill="#9F1239" opacity="0.3"/>
      <rect x="160" y="67" width="66" height="2.5" rx="1.25" fill="#9F1239" opacity="0.3"/>
      <rect x="160" y="76" width="74" height="2.5" rx="1.25" fill="#9F1239" opacity="0.3"/>
      <rect x="160" y="85" width="50" height="2.5" rx="1.25" fill="#9F1239" opacity="0.5"/>
      {/* NVC = marker */}
      <rect x="122" y="62" width="32" height="16" rx="4" fill="#FECDD3" opacity="0.6"/>
      <rect x="128" y="67.5" width="20" height="2.5" rx="1.25" fill="#BE123C" opacity="0.6"/>
    </svg>
  );
}

function KaraokeBrainThumb({ className }: ThumbProps) {
  return (
    <svg viewBox="0 0 280 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Mood grid — 3×3 circles */}
      {[0,1,2].map(col => [0,1,2].map(row => {
        const cx = 60 + col * 54;
        const cy = 28 + row * 38;
        const fills = [0.7, 0.15, 0.4, 0.55, 0.9, 0.2, 0.35, 0.65, 0.1];
        const opacity = fills[col * 3 + row];
        return (
          <circle key={`${col}-${row}`} cx={cx} cy={cy} r="18"
            fill={opacity > 0.5 ? "#6D28D9" : "white"}
            stroke="#6D28D9" strokeWidth="1.5"
            opacity={opacity > 0.5 ? opacity : 0.6}
          />
        );
      }))}
      {/* Text under some circles */}
      <rect x="44" y="50" width="32" height="2.5" rx="1.25" fill="#4C1D95" opacity="0.3"/>
      <rect x="98" y="50" width="32" height="2.5" rx="1.25" fill="#4C1D95" opacity="0.3"/>
      <rect x="152" y="50" width="32" height="2.5" rx="1.25" fill="#4C1D95" opacity="0.3"/>
      {/* Microphone on right */}
      <rect x="220" y="38" width="22" height="36" rx="11" stroke="#6D28D9" strokeWidth="1.5" fill="none" opacity="0.6"/>
      <path d="M220 74 C220 86 242 86 242 74" stroke="#6D28D9" strokeWidth="1.5" fill="none" opacity="0.6" strokeLinecap="round"/>
      <line x1="231" y1="86" x2="231" y2="102" stroke="#6D28D9" strokeWidth="1.5" opacity="0.6" strokeLinecap="round"/>
      <line x1="224" y1="102" x2="238" y2="102" stroke="#6D28D9" strokeWidth="1.5" opacity="0.6" strokeLinecap="round"/>
    </svg>
  );
}

function MvAppThumb({ className }: ThumbProps) {
  return (
    <svg viewBox="0 0 280 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Dashboard card outlines */}
      <rect x="24" y="16" width="100" height="44" rx="5" fill="white" stroke="#0F766E" strokeWidth="1.2" opacity="0.5"/>
      <rect x="24" y="20" width="40" height="2.5" rx="1.25" fill="#0F766E" opacity="0.3"/>
      <rect x="24" y="28" width="60" height="10" rx="2" fill="#0F766E" opacity="0.08"/>
      <rect x="28" y="32" width="30" height="3" rx="1.5" fill="#0F766E" opacity="0.55"/>
      <rect x="136" y="16" width="120" height="44" rx="5" fill="white" stroke="#0F766E" strokeWidth="1.2" opacity="0.5"/>
      {/* Bar chart */}
      <rect x="148" y="24" width="12" height="28" rx="2" fill="#0F766E" opacity="0.25"/>
      <rect x="164" y="30" width="12" height="22" rx="2" fill="#0F766E" opacity="0.4"/>
      <rect x="180" y="20" width="12" height="32" rx="2" fill="#0F766E" opacity="0.7"/>
      <rect x="196" y="34" width="12" height="18" rx="2" fill="#0F766E" opacity="0.35"/>
      <rect x="212" y="26" width="12" height="26" rx="2" fill="#0F766E" opacity="0.55"/>
      {/* Trend line */}
      <path d="M154 48 L170 40 L186 34 L202 43 L218 36" stroke="#0F766E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
      {/* Bottom section */}
      <rect x="24" y="72" width="232" height="52" rx="5" fill="white" stroke="#0F766E" strokeWidth="1.2" opacity="0.4"/>
      {/* Archetype bars */}
      {[0,1,2,3].map(i => (
        <g key={i}>
          <rect x="36" y={82 + i * 10} width="200" height="4" rx="2" fill="#CCFBF1" opacity="0.8"/>
          <rect x="36" y={82 + i * 10} width={[140, 90, 170, 60][i]} height="4" rx="2" fill="#0F766E" opacity={[0.7, 0.4, 0.85, 0.3][i]}/>
        </g>
      ))}
    </svg>
  );
}

function JournalingThumb({ className }: ThumbProps) {
  return (
    <svg viewBox="0 0 280 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Hierarchy tree */}
      {/* Root - Yearly */}
      <rect x="112" y="10" width="56" height="18" rx="4" fill="#92400E" opacity="0.15" stroke="#92400E" strokeWidth="1.2"/>
      <rect x="120" y="15.5" width="40" height="2.5" rx="1.25" fill="#92400E" opacity="0.55"/>
      {/* Connector line down */}
      <line x1="140" y1="28" x2="140" y2="38" stroke="#92400E" strokeWidth="1" opacity="0.4"/>
      {/* Level 2 - Quarterly */}
      <rect x="86" y="38" width="108" height="16" rx="3" fill="#92400E" opacity="0.1" stroke="#92400E" strokeWidth="1"/>
      <rect x="94" y="43" width="60" height="2.5" rx="1.25" fill="#92400E" opacity="0.45"/>
      {/* Connector */}
      <line x1="140" y1="54" x2="140" y2="62" stroke="#92400E" strokeWidth="1" opacity="0.4"/>
      <line x1="60" y1="62" x2="220" y2="62" stroke="#92400E" strokeWidth="1" opacity="0.3"/>
      {/* Level 3 - Monthly x2 */}
      <line x1="100" y1="62" x2="100" y2="70" stroke="#92400E" strokeWidth="1" opacity="0.35"/>
      <rect x="62" y="70" width="76" height="14" rx="3" fill="#92400E" opacity="0.08" stroke="#92400E" strokeWidth="1"/>
      <rect x="70" y="74.5" width="44" height="2" rx="1" fill="#92400E" opacity="0.38"/>
      <line x1="180" y1="62" x2="180" y2="70" stroke="#92400E" strokeWidth="1" opacity="0.35"/>
      <rect x="142" y="70" width="76" height="14" rx="3" fill="#92400E" opacity="0.08" stroke="#92400E" strokeWidth="1"/>
      <rect x="150" y="74.5" width="44" height="2" rx="1" fill="#92400E" opacity="0.38"/>
      {/* Level 4 - Weekly dots */}
      <line x1="80" y1="84" x2="80" y2="92" stroke="#92400E" strokeWidth="1" opacity="0.28"/>
      <line x1="68" y1="92" x2="92" y2="92" stroke="#92400E" strokeWidth="1" opacity="0.28"/>
      <circle cx="72" cy="98" r="4" fill="#92400E" opacity="0.25"/>
      <circle cx="84" cy="98" r="4" fill="#92400E" opacity="0.35"/>
      <line x1="160" y1="84" x2="160" y2="92" stroke="#92400E" strokeWidth="1" opacity="0.28"/>
      <line x1="148" y1="92" x2="172" y2="92" stroke="#92400E" strokeWidth="1" opacity="0.28"/>
      <circle cx="152" cy="98" r="4" fill="#92400E" opacity="0.25"/>
      <circle cx="164" cy="98" r="4" fill="#92400E" opacity="0.35"/>
      <circle cx="176" cy="98" r="4" fill="#92400E" opacity="0.15"/>
      {/* Level 5 - Daily dots */}
      <rect x="40" y="112" width="200" height="2" rx="1" fill="#92400E" opacity="0.12"/>
      {[0,1,2,3,4,5,6].map(i => (
        <circle key={i} cx={54 + i * 28} cy={118} r="3" fill="#92400E" opacity={0.15 + i * 0.04}/>
      ))}
    </svg>
  );
}

function CyclicLifeThumb({ className }: ThumbProps) {
  return (
    <svg viewBox="0 0 280 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Main cycle circle */}
      <circle cx="140" cy="70" r="52" stroke="#BE185D" strokeWidth="1.5" opacity="0.3"/>
      {/* Phase arcs */}
      <path d="M140 18 A52 52 0 0 1 192 70" stroke="#BE185D" strokeWidth="6" strokeLinecap="round" opacity="0.7"/>
      <path d="M192 70 A52 52 0 0 1 140 122" stroke="#BE185D" strokeWidth="6" strokeLinecap="round" opacity="0.35"/>
      <path d="M140 122 A52 52 0 0 1 88 70" stroke="#BE185D" strokeWidth="6" strokeLinecap="round" opacity="0.2"/>
      <path d="M88 70 A52 52 0 0 1 140 18" stroke="#BE185D" strokeWidth="6" strokeLinecap="round" opacity="0.5"/>
      {/* Phase labels */}
      <circle cx="170" cy="32" r="3" fill="#BE185D" opacity="0.7"/>
      <circle cx="200" cy="100" r="3" fill="#BE185D" opacity="0.35"/>
      <circle cx="110" cy="118" r="3" fill="#BE185D" opacity="0.2"/>
      <circle cx="80" cy="44" r="3" fill="#BE185D" opacity="0.5"/>
      {/* Center dot */}
      <circle cx="140" cy="70" r="6" fill="#BE185D" opacity="0.2"/>
      <circle cx="140" cy="70" r="3" fill="#BE185D" opacity="0.6"/>
      {/* Log items on right */}
      <rect x="210" y="30" width="46" height="8" rx="3" fill="#BE185D" opacity="0.1" stroke="#BE185D" strokeWidth="0.8"/>
      <circle cx="217" cy="34" r="2.5" fill="#BE185D" opacity="0.5"/>
      <rect x="222" y="32.5" width="26" height="2" rx="1" fill="#BE185D" opacity="0.35"/>
      <rect x="210" y="44" width="46" height="8" rx="3" fill="#BE185D" opacity="0.08" stroke="#BE185D" strokeWidth="0.8"/>
      <circle cx="217" cy="48" r="2.5" fill="#BE185D" opacity="0.3"/>
      <rect x="222" y="46.5" width="18" height="2" rx="1" fill="#BE185D" opacity="0.25"/>
      <rect x="210" y="58" width="46" height="8" rx="3" fill="#BE185D" opacity="0.15" stroke="#BE185D" strokeWidth="0.8"/>
      <circle cx="217" cy="62" r="2.5" fill="#BE185D" opacity="0.7"/>
      <rect x="222" y="60.5" width="22" height="2" rx="1" fill="#BE185D" opacity="0.4"/>
    </svg>
  );
}

// Placeholder for projects not yet added
function DefaultThumb({ className }: ThumbProps) {
  return (
    <svg viewBox="0 0 280 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="60" y="40" width="160" height="60" rx="8" stroke="#78716C" strokeWidth="1.5" opacity="0.3"/>
      <rect x="76" y="56" width="96" height="3" rx="1.5" fill="#78716C" opacity="0.3"/>
      <rect x="76" y="66" width="128" height="3" rx="1.5" fill="#78716C" opacity="0.2"/>
      <rect x="76" y="76" width="80" height="3" rx="1.5" fill="#78716C" opacity="0.2"/>
    </svg>
  );
}

const thumbnails: Record<string, (props: ThumbProps) => React.ReactElement> = {
  studyquiz: StudyquizThumb,
  "retreat-architect": RetreatArchitectThumb,
  "conflict-soup": ConflictSoupThumb,
  "karaoke-brain": KaraokeBrainThumb,
  "mv-app": MvAppThumb,
  journaling: JournalingThumb,
  "cyclic-life": CyclicLifeThumb,
};

interface ProjectThumbnailProps {
  slug: string;
  className?: string;
}

export function ProjectThumbnail({ slug, className }: ProjectThumbnailProps) {
  const Thumb = thumbnails[slug] ?? DefaultThumb;
  return <Thumb className={className} />;
}
