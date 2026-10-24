import React from 'react';
import type { Game } from '../types';
import { SportsGameIcon } from './SportsGameIcons';
import { Users, ExternalLink, ShieldCheck, Flame } from 'lucide-react';
import { triggerRegistrationCelebration } from '../utils/confetti';

interface TournamentGameCardProps {
  game: Game;
  isWide?: boolean;
}

export const TournamentGameCard: React.FC<TournamentGameCardProps> = ({ game, isWide = false }) => {
  const handleRegister = () => {
    triggerRegistrationCelebration();
  };

  return (
    <div
      className={`group relative flex flex-col justify-between bg-[#101713] hover:bg-[#17221B] border border-white/15 hover:border-[#00D68F] transition-all duration-300 clip-chamfer-tr p-5 sm:p-6 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#00D68F]/15 ${
        isWide ? 'lg:col-span-6' : 'lg:col-span-4'
      }`}
    >
      {/* Top Accent Line on Hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00D68F] via-[#D2FF52] to-[#00D68F] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Top Header: Game Number & Tag */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-white/10">
          <div className="flex items-center gap-2 min-w-0">
            <span className="font-sports font-extrabold text-xs tracking-wider text-[#D2FF52] bg-[#070B09] px-2.5 py-1 border border-white/10 whitespace-nowrap shrink-0">
              {game.gameNumber}
            </span>
            <span className="text-[11px] font-sports font-semibold tracking-wider text-[#A2AEA5] uppercase truncate">
              {game.category}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] font-sports font-bold tracking-wider text-[#00D68F] uppercase bg-[#00D68F]/10 px-2 py-0.5 border border-[#00D68F]/30 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D68F] animate-ping" />
            <span>OFFICIAL ARENA</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#F6F8F5] tracking-[-0.025em] group-hover:text-[#D2FF52] transition-colors leading-none mb-4">
          {game.name}
        </h3>

        {/* Dynamic Sports Field Vector Illustration */}
        <div className="relative w-full h-28 sm:h-32 bg-[#070B09] border border-white/10 p-3 mb-5 flex items-center justify-center overflow-hidden group-hover:border-[#00D68F]/50 transition-colors shadow-inner">
          <div className="absolute inset-0 bg-sports-diagonal opacity-30" />
          <SportsGameIcon
            type={game.courtType}
            className="w-full h-full relative z-10 transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Squad Specifications & Requirements */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-sm text-[#F6F8F5] font-semibold bg-[#070B09] p-2.5 border border-white/5">
            <Users className="w-4 h-4 text-[#00D68F] shrink-0" />
            <span className="font-sports text-base tracking-wide uppercase text-white">
              {game.teamSize}
            </span>
          </div>

          {game.specialRequirement ? (
            <div className="flex items-center gap-2 text-xs font-medium text-[#D2FF52] bg-[#D2FF52]/10 border border-[#D2FF52]/25 p-2">
              <ShieldCheck className="w-4 h-4 text-[#D2FF52] shrink-0" />
              <span className="font-sports tracking-wide uppercase font-bold">
                {game.specialRequirement}
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-xs font-medium text-[#A2AEA5] bg-[#070B09] border border-white/5 p-2">
              <span className="w-2 h-2 rounded-full bg-[#00D68F] shrink-0" />
              <span className="font-sports tracking-wide uppercase">
                OPEN ROSTER SQUAD
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Prominent REGISTER Action */}
      <a
        href={game.formUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleRegister}
        className="w-full py-3.5 px-3 sm:px-4 bg-[#00D68F] hover:bg-[#D2FF52] text-[#070B09] font-sports font-black text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 group/btn clip-chamfer-tr focus:outline-none focus:ring-2 focus:ring-[#D2FF52] shadow-lg shadow-[#00D68F]/20 whitespace-nowrap"
        aria-label={`Register for ${game.name} on Google Forms`}
      >
        <Flame className="w-3.5 h-3.5 fill-[#070B09] shrink-0" />
        <span>REGISTER FOR {game.name}</span>
        <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform shrink-0" />
      </a>

    </div>
  );
};
