import React from 'react';
import { GAMES } from '../data/games';
import { TournamentGameCard } from './TournamentGameCard';
import { Trophy, Flame } from 'lucide-react';

export const TournamentGrid: React.FC = () => {
  return (
    <section id="games" className="relative w-full py-12 sm:py-16 bg-[#070B09] bg-sports-diagonal border-t border-[#00D68F]/20">
      
      {/* Background Subtle Stadium Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#00D68F]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-5 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-sports font-black tracking-widest text-[#D2FF52] uppercase mb-1.5">
              <Trophy className="w-4 h-4 text-[#D2FF52]" />
              <span>OFFICIAL TOURNAMENT DISCIPLINES</span>
            </div>
            
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#F6F8F5] uppercase tracking-[-0.03em] leading-none">
              CHOOSE YOUR <span className="text-gradient-lime">BATTLE.</span>
            </h2>

            <p className="mt-2 text-sm sm:text-base text-[#A2AEA5] font-medium">
              Pick your game. Assemble your squad. Get in the game.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-sports font-bold tracking-widest text-[#00D68F] uppercase bg-[#101713] px-3.5 py-2 border border-[#00D68F]/30 shrink-0">
            <Flame className="w-4 h-4 fill-[#00D68F]" />
            <span>5 DISCIPLINES · INSTANT GOOGLE FORMS ENTRY</span>
          </div>
        </div>

        {/* 3 + 2 Balanced Tournament Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
          {/* Row 1: 3 Cards (Kho Kho, Kabaddi, Tug of War) */}
          <TournamentGameCard game={GAMES[0]} isWide={false} />
          <TournamentGameCard game={GAMES[1]} isWide={false} />
          <TournamentGameCard game={GAMES[2]} isWide={false} />

          {/* Row 2: 2 Cards (Dodge Ball, Seven Stones) */}
          <TournamentGameCard game={GAMES[3]} isWide={true} />
          <TournamentGameCard game={GAMES[4]} isWide={true} />
        </div>

        {/* Tournament Disclaimer Footer Banner */}
        <div className="mt-10 p-4 bg-[#101713] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-sports tracking-wider text-[#A2AEA5] uppercase">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00D68F]" />
            <span>POWERED BY FIT INDIA CLUB (FIC) · STRICT CODE OF CONDUCT & FAIR PLAY</span>
          </div>
          <span className="text-[#D2FF52] font-bold">
            ONE-CLICK REGISTRATION · FORM OPENS DIRECTLY IN NEW TAB
          </span>
        </div>

      </div>
    </section>
  );
};
