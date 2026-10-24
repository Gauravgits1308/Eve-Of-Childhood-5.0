import React from 'react';

interface GameIconProps {
  type: 'khokho' | 'kabaddi' | 'tugofwar' | 'dodgeball' | 'sevenstones';
  className?: string;
}

export const SportsGameIcon: React.FC<GameIconProps> = ({ type, className = 'w-full h-24' }) => {
  switch (type) {
    case 'khokho':
      return (
        <svg viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect x="5" y="8" width="150" height="64" rx="2" stroke="#00E073" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3 3" />
          <line x1="15" y1="40" x2="145" y2="40" stroke="#D4FF00" strokeWidth="2" strokeOpacity="0.8" />
          {/* Sitting Chaser Boxes */}
          {[35, 55, 75, 95, 115, 135].map((x, i) => (
            <rect
              key={i}
              x={x - 6}
              y="34"
              width="12"
              height="12"
              fill={i % 2 === 0 ? "rgba(0, 224, 115, 0.3)" : "rgba(212, 255, 0, 0.3)"}
              stroke={i % 2 === 0 ? "#00E073" : "#D4FF00"}
              strokeWidth="1"
            />
          ))}
          {/* Turning Poles */}
          <circle cx="20" cy="40" r="4" fill="#D4FF00" stroke="#08090A" strokeWidth="1.5" />
          <circle cx="145" cy="40" r="4" fill="#D4FF00" stroke="#08090A" strokeWidth="1.5" />
          {/* Chase Vector */}
          <path d="M 25 40 Q 75 18 100 40 T 140 40" stroke="#00E073" strokeWidth="2" strokeDasharray="4 2" />
        </svg>
      );

    case 'kabaddi':
      return (
        <svg viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect x="8" y="10" width="144" height="60" rx="2" stroke="#00E073" strokeWidth="1.2" strokeOpacity="0.5" />
          {/* Midline */}
          <line x1="80" y1="10" x2="80" y2="70" stroke="#D4FF00" strokeWidth="2.5" />
          {/* Baulk & Bonus Lines */}
          <line x1="55" y1="10" x2="55" y2="70" stroke="#00E073" strokeWidth="1" strokeDasharray="3 2" strokeOpacity="0.7" />
          <line x1="105" y1="10" x2="105" y2="70" stroke="#00E073" strokeWidth="1" strokeDasharray="3 2" strokeOpacity="0.7" />
          <line x1="42" y1="10" x2="42" y2="70" stroke="#FFAA00" strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.8" />
          <line x1="118" y1="10" x2="118" y2="70" stroke="#FFAA00" strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.8" />
          {/* Raid Arrow */}
          <path d="M 82 40 L 115 40 M 108 34 L 116 40 L 108 46" stroke="#D4FF00" strokeWidth="2.5" strokeLinecap="square" />
          {/* Defenders Arc */}
          <path d="M 128 20 Q 116 40 128 60" stroke="#00E073" strokeWidth="1.5" strokeDasharray="3 2" />
          <circle cx="128" cy="20" r="3" fill="#00E073" />
          <circle cx="120" cy="40" r="3" fill="#00E073" />
          <circle cx="128" cy="60" r="3" fill="#00E073" />
        </svg>
      );

    case 'tugofwar':
      return (
        <svg viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Ground Markings */}
          <line x1="80" y1="8" x2="80" y2="72" stroke="#00E073" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="55" y1="15" x2="55" y2="65" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="105" y1="15" x2="105" y2="65" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="2 2" />
          {/* Heavy Rope */}
          <line x1="10" y1="40" x2="150" y2="40" stroke="#D89E62" strokeWidth="6" strokeLinecap="round" />
          <line x1="10" y1="40" x2="150" y2="40" stroke="#FFD166" strokeWidth="2" strokeDasharray="6 4" strokeLinecap="round" />
          {/* Center Marker Ribbon */}
          <rect x="76" y="28" width="8" height="24" rx="1" fill="#FF4444" stroke="#FFFFFF" strokeWidth="1" />
          {/* Pull Vectors */}
          <path d="M 45 22 L 25 22 M 32 17 L 25 22 L 32 27" stroke="#00E073" strokeWidth="2" strokeLinecap="square" />
          <path d="M 115 22 L 135 22 M 128 17 L 135 22 L 128 27" stroke="#D4FF00" strokeWidth="2" strokeLinecap="square" />
        </svg>
      );

    case 'dodgeball':
      return (
        <svg viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect x="10" y="10" width="140" height="60" rx="3" stroke="#00E073" strokeWidth="1" strokeOpacity="0.5" />
          <line x1="80" y1="10" x2="80" y2="70" stroke="#D4FF00" strokeWidth="1.8" />
          {/* Attack Line */}
          <line x1="65" y1="10" x2="65" y2="70" stroke="#00E073" strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.5" />
          <line x1="95" y1="10" x2="95" y2="70" stroke="#00E073" strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.5" />
          {/* Ball Arc */}
          <path d="M 30 55 Q 75 15 120 38" stroke="#D4FF00" strokeWidth="1.8" strokeDasharray="3 2" />
          {/* Dodgeball */}
          <circle cx="120" cy="38" r="9" fill="#FF4757" stroke="#FFFFFF" strokeWidth="1.2" />
          <path d="M 114 38 Q 120 32 126 38" stroke="#08090A" strokeWidth="1" />
          <path d="M 120 30 Q 120 38 120 46" stroke="#08090A" strokeWidth="1" />
          {/* Target Evasion Aura */}
          <circle cx="35" cy="55" r="7" stroke="#00E073" strokeWidth="1.2" strokeDasharray="2 2" />
        </svg>
      );

    case 'sevenstones':
      return (
        <svg viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          {/* Chalk Ring */}
          <ellipse cx="80" cy="60" rx="42" ry="12" stroke="#D4FF00" strokeWidth="1.2" strokeDasharray="3 2" />
          {/* 7 Stones Stack */}
          <ellipse cx="80" cy="62" rx="22" ry="5.5" fill="#576574" stroke="#8395A7" strokeWidth="1" />
          <ellipse cx="80" cy="55" rx="19" ry="5" fill="#00E073" stroke="#D4FF00" strokeWidth="1" />
          <ellipse cx="80" cy="48" rx="16" ry="4.5" fill="#F39C12" stroke="#F1C40F" strokeWidth="1" />
          <ellipse cx="80" cy="42" rx="13" ry="4" fill="#E74C3C" stroke="#FF7675" strokeWidth="1" />
          <ellipse cx="80" cy="36" rx="10" ry="3.5" fill="#1ABC9C" stroke="#2ECC71" strokeWidth="1" />
          <ellipse cx="80" cy="31" rx="8" ry="3" fill="#9B59B6" stroke="#A55EEA" strokeWidth="1" />
          <ellipse cx="80" cy="26" rx="5.5" ry="2.5" fill="#D4FF00" stroke="#FFFFFF" strokeWidth="1" />
          {/* Ball Striker */}
          <circle cx="32" cy="24" r="6" fill="#FF4757" stroke="#FFFFFF" strokeWidth="1" />
          <path d="M 15 32 Q 25 26 32 24" stroke="#FF4757" strokeWidth="1.5" strokeDasharray="2 2" />
        </svg>
      );

    default:
      return null;
  }
};
