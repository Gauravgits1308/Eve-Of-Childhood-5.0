import React from 'react';

interface GameVisualProps {
  courtType: 'khokho' | 'kabaddi' | 'tugofwar' | 'dodgeball' | 'sevenstones';
  className?: string;
}

export const GameVisual: React.FC<GameVisualProps> = ({ courtType, className = '' }) => {
  switch (courtType) {
    case 'khokho':
      return (
        <div className={`relative overflow-hidden flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Field Boundary */}
            <rect x="20" y="20" width="360" height="200" rx="8" stroke="#00D084" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="4 4" />
            <rect x="35" y="35" width="330" height="170" rx="4" stroke="#00D084" strokeWidth="2" strokeOpacity="0.8" />
            
            {/* Central Lane */}
            <line x1="35" y1="120" x2="365" y2="120" stroke="#C6FF4D" strokeWidth="3" strokeOpacity="0.9" />
            
            {/* Cross Lanes & Chaser Boxes (8 boxes) */}
            {[75, 110, 145, 180, 220, 255, 290, 325].map((x, i) => (
              <g key={i}>
                <line x1={x} y1="35" x2={x} y2="205" stroke="#00D084" strokeWidth="1.2" strokeOpacity="0.45" />
                <rect 
                  x={x - 12} 
                  y="108" 
                  width="24" 
                  height="24" 
                  rx="3" 
                  fill={i % 2 === 0 ? "rgba(0, 208, 132, 0.25)" : "rgba(198, 255, 77, 0.2)"}
                  stroke={i % 2 === 0 ? "#00D084" : "#C6FF4D"} 
                  strokeWidth="1.5" 
                />
                {/* Sitting Chaser directional indicator */}
                <path 
                  d={i % 2 === 0 ? `M${x} 113 L${x} 127 M${x-4} 121 L${x} 127 L${x+4} 121` : `M${x} 127 L${x} 113 M${x-4} 119 L${x} 113 L${x+4} 119`} 
                  stroke={i % 2 === 0 ? "#00D084" : "#C6FF4D"} 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                />
              </g>
            ))}

            {/* Turning Poles */}
            <circle cx="50" cy="120" r="7" fill="#C6FF4D" stroke="#071A14" strokeWidth="2" />
            <circle cx="350" cy="120" r="7" fill="#C6FF4D" stroke="#071A14" strokeWidth="2" />

            {/* Dynamic Chase Motion Trail */}
            <path
              d="M 50 120 Q 110 50 180 120 T 310 170 T 350 120"
              stroke="url(#kho-trail-gradient)"
              strokeWidth="3.5"
              strokeDasharray="6 4"
              strokeLinecap="round"
              className="animate-pulse"
            />

            {/* Glow / Energy Rings */}
            <circle cx="200" cy="120" r="45" stroke="#C6FF4D" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 3" />

            <defs>
              <linearGradient id="kho-trail-gradient" x1="50" y1="120" x2="350" y2="120" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00D084" />
                <stop offset="0.5" stopColor="#C6FF4D" />
                <stop offset="1" stopColor="#FFD166" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      );

    case 'kabaddi':
      return (
        <div className={`relative overflow-hidden flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Main Court */}
            <rect x="25" y="25" width="350" height="190" rx="4" stroke="#00D084" strokeWidth="2" strokeOpacity="0.75" />
            
            {/* Lobbies on Left & Right */}
            <rect x="25" y="25" width="35" height="190" fill="rgba(0, 208, 132, 0.08)" stroke="#00D084" strokeWidth="1.2" strokeOpacity="0.5" />
            <rect x="340" y="25" width="35" height="190" fill="rgba(0, 208, 132, 0.08)" stroke="#00D084" strokeWidth="1.2" strokeOpacity="0.5" />
            
            {/* Midline (Center) */}
            <line x1="200" y1="25" x2="200" y2="215" stroke="#C6FF4D" strokeWidth="3" />

            {/* Baulk Lines */}
            <line x1="140" y1="25" x2="140" y2="215" stroke="#00D084" strokeWidth="1.8" strokeDasharray="5 3" />
            <line x1="260" y1="25" x2="260" y2="215" stroke="#00D084" strokeWidth="1.8" strokeDasharray="5 3" />

            {/* Bonus Lines */}
            <line x1="105" y1="25" x2="105" y2="215" stroke="#FFD166" strokeWidth="1.8" strokeDasharray="4 2" />
            <line x1="295" y1="25" x2="295" y2="215" stroke="#FFD166" strokeWidth="1.8" strokeDasharray="4 2" />

            {/* Raid Attack Vector */}
            <path 
              d="M 215 120 L 285 75 M 215 120 L 285 165" 
              stroke="#C6FF4D" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeOpacity="0.7" 
            />
            <path 
              d="M 205 120 Q 250 120 285 120" 
              stroke="#C6FF4D" 
              strokeWidth="4" 
              strokeLinecap="round" 
            />
            <polygon points="295,120 282,113 282,127" fill="#C6FF4D" />

            {/* Defender Arc Formation */}
            <path 
              d="M 315 50 Q 285 120 315 190" 
              stroke="#00D084" 
              strokeWidth="2" 
              strokeDasharray="6 4" 
            />
            <circle cx="315" cy="50" r="5" fill="#00D084" />
            <circle cx="300" cy="85" r="5" fill="#00D084" />
            <circle cx="290" cy="120" r="5" fill="#00D084" />
            <circle cx="300" cy="155" r="5" fill="#00D084" />
            <circle cx="315" cy="190" r="5" fill="#00D084" />

            {/* Subtle center clash aura */}
            <circle cx="200" cy="120" r="30" stroke="rgba(198, 255, 77, 0.3)" strokeWidth="1.5" />
          </svg>
        </div>
      );

    case 'tugofwar':
      return (
        <div className={`relative overflow-hidden flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Center Ground Marker / Pit */}
            <line x1="200" y1="20" x2="200" y2="220" stroke="#00D084" strokeWidth="2" strokeDasharray="6 4" />
            <line x1="140" y1="35" x2="140" y2="205" stroke="#A8B8AF" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3 3" />
            <line x1="260" y1="35" x2="260" y2="205" stroke="#A8B8AF" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3 3" />

            {/* Pull Direction Tension Arrows */}
            {/* Left pulling */}
            <g opacity="0.85">
              <path d="M 120 70 L 60 70 M 75 60 L 60 70 L 75 80" stroke="#C6FF4D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 120 170 L 60 170 M 75 160 L 60 170 L 75 180" stroke="#C6FF4D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            {/* Right pulling */}
            <g opacity="0.85">
              <path d="M 280 70 L 340 70 M 325 60 L 340 70 L 325 80" stroke="#00D084" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 280 170 L 340 170 M 325 160 L 340 170 L 325 180" stroke="#00D084" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>

            {/* The Mighty Heavy Rope (Stranded aesthetic) */}
            <path
              d="M 20 120 Q 90 115 160 120 T 240 120 T 380 120"
              stroke="#D89E62"
              strokeWidth="9"
              strokeLinecap="round"
            />
            {/* Rope braided highlights */}
            <path
              d="M 20 120 Q 90 115 160 120 T 240 120 T 380 120"
              stroke="#FFD166"
              strokeWidth="3"
              strokeDasharray="8 6"
              strokeLinecap="round"
            />

            {/* Central Red/Lime Victory Marker Ribbon */}
            <rect x="194" y="98" width="12" height="44" rx="2" fill="#FF5252" stroke="#FFFFFF" strokeWidth="1.5" />
            <polygon points="194,142 200,136 206,142" fill="#071A14" />
            <circle cx="200" cy="120" r="3" fill="#C6FF4D" />

            {/* Ground Friction / Chalk Lines */}
            {[60, 90, 120, 280, 310, 340].map((x, idx) => (
              <line key={idx} x1={x} y1="135" x2={x + 12} y2="155" stroke="rgba(0, 208, 132, 0.4)" strokeWidth="2" strokeLinecap="round" />
            ))}
          </svg>
        </div>
      );

    case 'dodgeball':
      return (
        <div className={`relative overflow-hidden flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Court boundary */}
            <rect x="25" y="25" width="350" height="190" rx="8" stroke="#00D084" strokeWidth="2" strokeOpacity="0.7" />
            
            {/* Center Dividing Line & Neutral Zone */}
            <line x1="200" y1="25" x2="200" y2="215" stroke="#C6FF4D" strokeWidth="2.5" />
            <line x1="170" y1="25" x2="170" y2="215" stroke="#00D084" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.6" />
            <line x1="230" y1="25" x2="230" y2="215" stroke="#00D084" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.6" />

            {/* Dodgeball in Flight (Speed & Trajectory) */}
            <path
              d="M 90 170 Q 180 60 290 110"
              stroke="url(#dodge-arc)"
              strokeWidth="3"
              strokeDasharray="6 3"
              strokeLinecap="round"
            />

            {/* Glowing Dodgeball with Motion Rings */}
            <circle cx="285" cy="108" r="16" fill="url(#dodgeball-sphere)" stroke="#FFFFFF" strokeWidth="1.5" />
            {/* Seams on ball */}
            <path d="M 273 108 Q 285 98 297 108" stroke="#071A14" strokeWidth="1.5" strokeOpacity="0.7" />
            <path d="M 285 94 Q 285 108 285 122" stroke="#071A14" strokeWidth="1.5" strokeOpacity="0.7" />

            {/* Kinetic Throw Vectors & Dodging Player Targets */}
            <circle cx="100" cy="160" r="12" fill="rgba(198, 255, 77, 0.15)" stroke="#C6FF4D" strokeWidth="1.5" />
            <circle cx="310" cy="70" r="12" fill="rgba(0, 208, 132, 0.15)" stroke="#00D084" strokeWidth="1.5" />

            {/* Motion blast ripples */}
            <circle cx="285" cy="108" r="28" stroke="#FF5252" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="2 4" />

            <defs>
              <linearGradient id="dodge-arc" x1="90" y1="170" x2="290" y2="110" gradientUnits="userSpaceOnUse">
                <stop stopColor="#C6FF4D" stopOpacity="0.2" />
                <stop offset="0.6" stopColor="#00D084" stopOpacity="0.8" />
                <stop offset="1" stopColor="#FF5252" />
              </linearGradient>
              <radialGradient id="dodgeball-sphere" cx="40%" cy="35%" r="65%">
                <stop stopColor="#FF7675" />
                <stop offset="0.7" stopColor="#D63031" />
                <stop offset="1" stopColor="#9B1D20" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      );

    case 'sevenstones':
      return (
        <div className={`relative overflow-hidden flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Circular Ground Chalk Ring */}
            <ellipse cx="200" cy="170" rx="100" ry="32" stroke="#C6FF4D" strokeWidth="2" strokeDasharray="5 3" strokeOpacity="0.8" />
            <ellipse cx="200" cy="170" rx="140" ry="46" stroke="#00D084" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.4" />

            {/* Outer thrower line */}
            <line x1="50" y1="210" x2="350" y2="210" stroke="#00D084" strokeWidth="1.5" strokeDasharray="6 4" strokeOpacity="0.5" />

            {/* Seven Stacked Flat Stones (Pitthu Tower) */}
            {/* Stone 1 (Bottom - Largest) */}
            <ellipse cx="200" cy="175" rx="42" ry="10" fill="#4B6584" stroke="#778CA3" strokeWidth="1.5" />
            <path d="M 158 175 C 158 182 242 182 242 175" stroke="#2C3A47" strokeWidth="2" fill="none" />

            {/* Stone 2 */}
            <ellipse cx="199" cy="162" rx="36" ry="9" fill="#00D084" stroke="#C6FF4D" strokeWidth="1.5" />
            {/* Stone 3 */}
            <ellipse cx="201" cy="149" rx="31" ry="8" fill="#F39C12" stroke="#F1C40F" strokeWidth="1.5" />
            {/* Stone 4 */}
            <ellipse cx="198" cy="137" rx="26" ry="7.5" fill="#E74C3C" stroke="#FF7675" strokeWidth="1.5" />
            {/* Stone 5 */}
            <ellipse cx="202" cy="126" rx="22" ry="7" fill="#1ABC9C" stroke="#2ECC71" strokeWidth="1.5" />
            {/* Stone 6 */}
            <ellipse cx="199" cy="116" rx="17" ry="6" fill="#9B59B6" stroke="#A55EEA" strokeWidth="1.5" />
            {/* Stone 7 (Top - Smallest) */}
            <ellipse cx="200" cy="106" rx="12" ry="5.5" fill="#C6FF4D" stroke="#FFFFFF" strokeWidth="1.5" />

            {/* The Striker Ball Arriving */}
            <circle cx="100" cy="95" r="11" fill="#FF4757" stroke="#FFFFFF" strokeWidth="1.5" />
            <path
              d="M 50 120 Q 75 105 100 95"
              stroke="#FF4757"
              strokeWidth="2.5"
              strokeDasharray="4 2"
            />
            {/* Rebuild Countdown Aura */}
            <circle cx="200" cy="138" r="55" stroke="rgba(198, 255, 77, 0.2)" strokeWidth="1" strokeDasharray="3 3" />
          </svg>
        </div>
      );

    default:
      return null;
  }
};
