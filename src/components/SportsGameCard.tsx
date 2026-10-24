import React from 'react';
import type { Game } from '../types';
import { SportsGameIcon } from './SportsGameIcons';
import { Users, ExternalLink, ShieldCheck } from 'lucide-react';
import { triggerRegistrationCelebration } from '../utils/confetti';

interface SportsGameCardProps {
  game: Game;
}

export const SportsGameCard: React.FC<SportsGameCardProps> = ({ game }) => {
  const handleRegisterClick = () => {
    triggerRegistrationCelebration();
  };

  return (
    <div className="group relative flex flex-col justify-between bg-[#0E1113] hover:bg-[#13171A] border border-[#00E073]/25 hover:border-[#D4FF00] transition-all duration-200 clip-chamfer-tr p-4 sm:p-5 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#00E073]/10">
      
      {/* Top Header: Game Number & Sport Tag */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-white/10">
          <span className="font-sports font-black text-xs tracking-widest text-[#D4FF00] uppercase bg-[#161B1E] px-2 py-0.5 border border-white/5">
            {game.gameNumber}
          </span>
          <span className="text-[10px] font-sports font-bold tracking-wider text-[#8A939E] uppercase">
            {game.category}
          </span>
        </div>

        {/* Game Title */}
        <h3 className="font-sports font-black text-2xl sm:text-3xl text-[#F3F4F6] tracking-tight group-hover:text-[#00E073] transition-colors leading-none mb-3">
          {game.name}
        </h3>

        {/* Small Distinctive Sports Graphic */}
        <div className="relative w-full h-20 bg-[#08090A] border border-white/5 mb-4 p-2 flex items-center justify-center overflow-hidden group-hover:border-[#00E073]/40 transition-colors">
          <div className="absolute inset-0 bg-sports-diagonal opacity-40" />
          <SportsGameIcon type={game.courtType} className="w-full h-full relative z-10 transition-transform duration-300 group-hover:scale-105" />
        </div>

        {/* Team Size & Requirements (Crisp & Scannable) */}
        <div className="space-y-1.5 mb-5">
          <div className="flex items-center gap-1.5 text-xs text-[#F3F4F6] font-semibold">
            <Users className="w-3.5 h-3.5 text-[#00E073] shrink-0" />
            <span className="font-sports text-sm tracking-wide uppercase text-white">
              {game.teamSize}
            </span>
          </div>

          {game.specialRequirement ? (
            <div className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#D4FF00] bg-[#D4FF00]/10 border border-[#D4FF00]/20 px-2 py-0.5 w-full">
              <ShieldCheck className="w-3 h-3 text-[#D4FF00] shrink-0" />
              <span className="truncate">{game.specialRequirement}</span>
            </div>
          ) : (
            <div className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#8A939E] bg-white/5 px-2 py-0.5 w-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E073]" />
              <span>Standard Roster</span>
            </div>
          )}
        </div>
      </div>

      {/* Prominent REGISTER Button */}
      <a
        href={game.formUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleRegisterClick}
        className="w-full py-3 px-4 bg-[#00E073] hover:bg-[#D4FF00] text-[#08090A] font-sports font-black text-sm sm:text-base tracking-wider uppercase transition-colors flex items-center justify-center gap-2 group/btn clip-chamfer-tr focus:outline-none focus:ring-2 focus:ring-[#D4FF00] shadow-md"
        aria-label={`Register for ${game.name}`}
      >
        <span>REGISTER NOW</span>
        <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
      </a>

    </div>
  );
};
