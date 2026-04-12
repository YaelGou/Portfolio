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

function FriendCrmThumb({ className }: ThumbProps) {
  return (
    <svg viewBox="0 0 280 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Contact cards */}
      <rect x="28" y="20" width="100" height="64" rx="6" fill="white" stroke="#64748B" strokeWidth="1.2" opacity="0.5"/>
      <circle cx="56" cy="44" r="12" fill="#64748B" opacity="0.12"/>
      <rect x="76" y="38" width="40" height="2.5" rx="1.25" fill="#1E293B" opacity="0.45"/>
      <rect x="76" y="47" width="28" height="2" rx="1" fill="#64748B" opacity="0.3"/>
      <rect x="32" y="68" width="92" height="2" rx="1" fill="#64748B" opacity="0.18"/>
      <rect x="32" y="74" width="72" height="2" rx="1" fill="#64748B" opacity="0.18"/>
      {/* Overdue badge */}
      <rect x="92" y="18" width="38" height="14" rx="7" fill="#EF4444" opacity="0.15"/>
      <rect x="100" y="23" width="22" height="2" rx="1" fill="#DC2626" opacity="0.5"/>
      {/* Second card */}
      <rect x="88" y="30" width="100" height="64" rx="6" fill="white" stroke="#64748B" strokeWidth="1.2" opacity="0.35"/>
      <circle cx="116" cy="54" r="12" fill="#64748B" opacity="0.1"/>
      <rect x="136" y="48" width="40" height="2.5" rx="1.25" fill="#1E293B" opacity="0.38"/>
      <rect x="136" y="57" width="28" height="2" rx="1" fill="#64748B" opacity="0.25"/>
      {/* Message draft area */}
      <rect x="152" y="20" width="106" height="100" rx="6" fill="white" stroke="#64748B" strokeWidth="1.2" opacity="0.45"/>
      <rect x="160" y="30" width="72" height="2.5" rx="1.25" fill="#1E293B" opacity="0.4"/>
      <rect x="160" y="40" width="88" height="2" rx="1" fill="#64748B" opacity="0.25"/>
      <rect x="160" y="48" width="82" height="2" rx="1" fill="#64748B" opacity="0.25"/>
      <rect x="160" y="56" width="76" height="2" rx="1" fill="#64748B" opacity="0.25"/>
      <rect x="160" y="64" width="88" height="2" rx="1" fill="#64748B" opacity="0.25"/>
      <rect x="160" y="72" width="60" height="2" rx="1" fill="#64748B" opacity="0.25"/>
      {/* AI sparkle */}
      <path d="M234 88 L236 94 L242 96 L236 98 L234 104 L232 98 L226 96 L232 94 Z" fill="#64748B" opacity="0.4"/>
    </svg>
  );
}

function VsdxProcessorThumb({ className }: ThumbProps) {
  return (
    <svg viewBox="0 0 280 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Source image box */}
      <rect x="16" y="30" width="72" height="80" rx="5" fill="#EEF2FF" stroke="#4338CA" strokeWidth="1.2" opacity="0.7"/>
      <rect x="24" y="40" width="56" height="32" rx="3" fill="#4338CA" opacity="0.08"/>
      {/* Rough shapes inside (image) */}
      <rect x="28" y="44" width="20" height="14" rx="2" stroke="#4338CA" strokeWidth="1" fill="none" opacity="0.4"/>
      <line x1="48" y1="50" x2="66" y2="50" stroke="#4338CA" strokeWidth="1" opacity="0.3"/>
      <rect x="54" y="44" width="20" height="14" rx="2" stroke="#4338CA" strokeWidth="1" fill="none" opacity="0.4"/>
      <rect x="24" y="82" width="56" height="2" rx="1" fill="#4338CA" opacity="0.2"/>
      <rect x="24" y="88" width="40" height="2" rx="1" fill="#4338CA" opacity="0.2"/>
      {/* Arrow + AI */}
      <path d="M96 70 L118 70" stroke="#4338CA" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M114 66 L118 70 L114 74" stroke="#4338CA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="100" y="58" width="16" height="10" rx="3" fill="#EEF2FF" stroke="#4338CA" strokeWidth="1" opacity="0.7"/>
      <rect x="104" y="61.5" width="8" height="2" rx="1" fill="#4338CA" opacity="0.5"/>
      {/* VSDX output box */}
      <rect x="124" y="20" width="80" height="100" rx="5" fill="white" stroke="#4338CA" strokeWidth="1.5" opacity="0.8"/>
      <rect x="132" y="32" width="24" height="16" rx="3" fill="#EEF2FF" stroke="#4338CA" strokeWidth="1" opacity="0.7"/>
      <rect x="164" y="32" width="28" height="16" rx="3" fill="#EEF2FF" stroke="#4338CA" strokeWidth="1" opacity="0.7"/>
      <line x1="156" y1="40" x2="164" y2="40" stroke="#4338CA" strokeWidth="1.5" strokeLinecap="round"/>
      <rect x="138" y="60" width="52" height="16" rx="3" fill="#EEF2FF" stroke="#4338CA" strokeWidth="1" opacity="0.7"/>
      <rect x="144" y="87" width="64" height="8" rx="2" fill="#4338CA" opacity="0.06"/>
      <rect x="144" y="100" width="52" height="2" rx="1" fill="#4338CA" opacity="0.2"/>
      {/* Language arrows */}
      <path d="M212 60 L248 45" stroke="#4338CA" strokeWidth="1" strokeDasharray="3 2" opacity="0.4"/>
      <path d="M212 70 L248 70" stroke="#4338CA" strokeWidth="1" strokeDasharray="3 2" opacity="0.4"/>
      <path d="M212 80 L248 95" stroke="#4338CA" strokeWidth="1" strokeDasharray="3 2" opacity="0.4"/>
      <rect x="248" y="38" width="26" height="12" rx="3" fill="#EEF2FF" stroke="#4338CA" strokeWidth="0.8" opacity="0.6"/>
      <rect x="248" y="64" width="26" height="12" rx="3" fill="#EEF2FF" stroke="#4338CA" strokeWidth="0.8" opacity="0.6"/>
      <rect x="248" y="90" width="26" height="12" rx="3" fill="#EEF2FF" stroke="#4338CA" strokeWidth="0.8" opacity="0.6"/>
    </svg>
  );
}

function SlackKbBotThumb({ className }: ThumbProps) {
  return (
    <svg viewBox="0 0 280 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Slack sidebar */}
      <rect x="16" y="16" width="58" height="108" rx="5" fill="#0369A1" opacity="0.08" stroke="#0369A1" strokeWidth="1"/>
      <rect x="24" y="28" width="42" height="6" rx="3" fill="#0369A1" opacity="0.3"/>
      <rect x="24" y="40" width="34" height="4" rx="2" fill="#0369A1" opacity="0.2"/>
      <rect x="24" y="50" width="38" height="4" rx="2" fill="#0369A1" opacity="0.15"/>
      <rect x="24" y="60" width="30" height="4" rx="2" fill="#0369A1" opacity="0.15"/>
      <rect x="24" y="72" width="42" height="6" rx="3" fill="#0369A1" opacity="0.25"/>
      <rect x="24" y="84" width="36" height="4" rx="2" fill="#0369A1" opacity="0.18"/>
      {/* Main chat area */}
      <rect x="80" y="16" width="184" height="108" rx="5" fill="white" stroke="#0EA5E9" strokeWidth="1" opacity="0.4"/>
      {/* Question message */}
      <rect x="88" y="26" width="130" height="24" rx="5" fill="#F0F9FF" stroke="#0EA5E9" strokeWidth="0.8" opacity="0.7"/>
      <rect x="96" y="31" width="80" height="2.5" rx="1.25" fill="#0C4A6E" opacity="0.45"/>
      <rect x="96" y="38" width="100" height="2" rx="1" fill="#0C4A6E" opacity="0.25"/>
      {/* Bot avatar + answer */}
      <circle cx="97" cy="66" r="7" fill="#0EA5E9" opacity="0.2"/>
      <rect x="104" y="22" width="4" height="4" rx="2" fill="#0EA5E9" opacity="0.5"/>
      <rect x="112" y="57" width="148" height="48" rx="5" fill="#F0F9FF" stroke="#0EA5E9" strokeWidth="1" opacity="0.6"/>
      <rect x="120" y="65" width="120" height="2.5" rx="1.25" fill="#0C4A6E" opacity="0.4"/>
      <rect x="120" y="73" width="130" height="2" rx="1" fill="#0C4A6E" opacity="0.25"/>
      <rect x="120" y="81" width="110" height="2" rx="1" fill="#0C4A6E" opacity="0.25"/>
      <rect x="120" y="89" width="90" height="2" rx="1" fill="#0C4A6E" opacity="0.25"/>
      {/* Vector search indicator */}
      <circle cx="178" cy="30" r="8" stroke="#0EA5E9" strokeWidth="1.5" fill="none" opacity="0.5"/>
      <line x1="184" y1="36" x2="192" y2="44" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    </svg>
  );
}

function TodoistAiThumb({ className }: ThumbProps) {
  return (
    <svg viewBox="0 0 280 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* CLI terminal */}
      <rect x="24" y="16" width="232" height="108" rx="6" fill="#1C0303" opacity="0.04" stroke="#B91C1C" strokeWidth="1.2"/>
      <rect x="24" y="16" width="232" height="16" rx="6" fill="#B91C1C" opacity="0.08"/>
      <circle cx="36" cy="24" r="3" fill="#B91C1C" opacity="0.3"/>
      <circle cx="48" cy="24" r="3" fill="#B91C1C" opacity="0.2"/>
      <circle cx="60" cy="24" r="3" fill="#B91C1C" opacity="0.15"/>
      {/* Input line */}
      <rect x="32" y="40" width="6" height="12" rx="1" fill="#B91C1C" opacity="0.5"/>
      <rect x="42" y="44" width="160" height="2.5" rx="1.25" fill="#B91C1C" opacity="0.55"/>
      {/* Task output */}
      <rect x="32" y="62" width="8" height="8" rx="2" stroke="#B91C1C" strokeWidth="1.2" fill="none" opacity="0.5"/>
      <rect x="46" y="64" width="110" height="2.5" rx="1.25" fill="#450A0A" opacity="0.4"/>
      <rect x="46" y="70" width="60" height="2" rx="1" fill="#450A0A" opacity="0.2"/>
      <rect x="32" y="80" width="8" height="8" rx="2" fill="#B91C1C" opacity="0.7"/>
      <path d="M33 84 L36 87 L41 82" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="46" y="82" width="90" height="2.5" rx="1.25" fill="#450A0A" opacity="0.35"/>
      <rect x="32" y="98" width="8" height="8" rx="2" stroke="#B91C1C" strokeWidth="1.2" fill="none" opacity="0.5"/>
      <rect x="46" y="100" width="130" height="2.5" rx="1.25" fill="#450A0A" opacity="0.4"/>
      {/* AI sparkle */}
      <path d="M218 50 L220 56 L226 58 L220 60 L218 66 L216 60 L210 58 L216 56 Z" fill="#B91C1C" opacity="0.35"/>
      {/* Priority badge */}
      <rect x="160" y="62" width="24" height="8" rx="4" fill="#B91C1C" opacity="0.12"/>
      <rect x="164" y="65" width="16" height="2" rx="1" fill="#B91C1C" opacity="0.45"/>
    </svg>
  );
}

function AiChatAppThumb({ className }: ThumbProps) {
  return (
    <svg viewBox="0 0 280 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* App chrome */}
      <rect x="24" y="12" width="232" height="116" rx="8" fill="white" stroke="#65A30D" strokeWidth="1.2" opacity="0.5"/>
      {/* Header */}
      <rect x="24" y="12" width="232" height="24" rx="8" fill="#65A30D" opacity="0.08"/>
      <rect x="36" y="20" width="60" height="2.5" rx="1.25" fill="#365314" opacity="0.45"/>
      <circle cx="236" cy="24" r="5" fill="#65A30D" opacity="0.2"/>
      {/* User message */}
      <rect x="120" y="46" width="124" height="20" rx="10" fill="#65A30D" opacity="0.12" stroke="#65A30D" strokeWidth="1"/>
      <rect x="130" y="52" width="90" height="2.5" rx="1.25" fill="#365314" opacity="0.45"/>
      <rect x="130" y="59" width="60" height="2" rx="1" fill="#365314" opacity="0.28"/>
      {/* AI response streaming */}
      <rect x="36" y="76" width="148" height="36" rx="8" fill="#F7FEE7" stroke="#65A30D" strokeWidth="1"/>
      <rect x="46" y="84" width="128" height="2.5" rx="1.25" fill="#365314" opacity="0.4"/>
      <rect x="46" y="91" width="110" height="2" rx="1" fill="#365314" opacity="0.28"/>
      <rect x="46" y="98" width="92" height="2" rx="1" fill="#365314" opacity="0.28"/>
      {/* Streaming cursor */}
      <rect x="140" y="98" width="2" height="10" rx="1" fill="#65A30D" opacity="0.6"/>
      {/* Input box */}
      <rect x="36" y="118" width="196" height="0" rx="6"/>
      <rect x="36" y="116" width="184" height="6" rx="3" fill="#65A30D" opacity="0.06" stroke="#65A30D" strokeWidth="0.8"/>
      {/* Dots for streaming animation hint */}
      <circle cx="194" cy="93" r="2.5" fill="#65A30D" opacity="0.5"/>
      <circle cx="203" cy="93" r="2.5" fill="#65A30D" opacity="0.3"/>
      <circle cx="212" cy="93" r="2.5" fill="#65A30D" opacity="0.15"/>
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
  "friend-crm": FriendCrmThumb,
  "vsdx-processor": VsdxProcessorThumb,
  "slack-kb-bot": SlackKbBotThumb,
  "todoist-ai": TodoistAiThumb,
  "ai-chat-app": AiChatAppThumb,
};

interface ProjectThumbnailProps {
  slug: string;
  className?: string;
}

export function ProjectThumbnail({ slug, className }: ProjectThumbnailProps) {
  const Thumb = thumbnails[slug] ?? DefaultThumb;
  return <Thumb className={className} />;
}
