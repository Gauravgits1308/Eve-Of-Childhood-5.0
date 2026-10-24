import React from 'react';
import { Flame } from 'lucide-react';

interface SportsNavbarProps {
  onRegisterClick: () => void;
}

export const SportsNavbar: React.FC<SportsNavbarProps> = ({ onRegisterClick }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#070B09]/95 backdrop-blur-md border-b border-[#00D68F]/25 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        
        {/* Left: FIC / FIT INDIA CLUB */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 border border-[#00D68F]/40 bg-[#101713] p-1 flex items-center justify-center shrink-0">
            <img
              src="/fic_logo.png"
              alt="FIC"
              className="w-full h-full object-contain"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>
          <span className="font-sports font-black tracking-wider text-sm sm:text-base text-[#F6F8F5] uppercase">
            FIT INDIA CLUB <span className="text-[#A2AEA5] font-normal">(FIC)</span>
          </span>
        </div>

        {/* Center: EVE OF CHILDHOOD 5.0 */}
        <div className="hidden md:flex items-center gap-1.5">
          <span className="font-sports font-black tracking-widest text-base lg:text-lg text-[#00D68F] uppercase">
            EVE OF CHILDHOOD
          </span>
          <span className="font-sports font-black text-xs px-2 py-0.5 bg-[#D2FF52] text-[#070B09] leading-none">
            5.0
          </span>
        </div>

        {/* Right: 25 OCT 2026 and Compact REGISTER Button */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 text-xs font-sports font-bold tracking-widest text-[#A2AEA5] uppercase border border-white/10 px-3 py-1 bg-[#101713]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D68F] animate-pulse" />
            <span>25 OCT 2026</span>
          </div>

          <button
            onClick={onRegisterClick}
            className="flex items-center gap-1.5 px-4 py-1.5 bg-[#00D68F] hover:bg-[#D2FF52] text-[#070B09] font-sports font-black text-xs sm:text-sm tracking-wider uppercase transition-colors clip-chamfer-tr focus:outline-none focus:ring-2 focus:ring-[#D2FF52] shadow-md shadow-[#00D68F]/20"
          >
            <Flame className="w-3.5 h-3.5 fill-[#070B09]" />
            <span>REGISTER</span>
          </button>
        </div>

      </div>
    </header>
  );
};
