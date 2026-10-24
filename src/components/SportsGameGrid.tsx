import React from 'react';
import { GAMES } from '../data/games';
import { SportsGameCard } from './SportsGameCard';
import { Trophy } from 'lucide-react';

export const SportsGameGrid: React.FC = () => {
  return (
    <section id="games" className="relative w-full py-8 sm:py-10 bg-[#08090A] bg-sports-diagonal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-4 border-b border-[#00E073]/20">
          <div>
            <div className="flex items-center gap-2 text-xs font-sports font-black tracking-widest text-[#D4FF00] uppercase mb-1">
              <Trophy className="w-3.5 h-3.5" />
              <span>OFFICIAL REGISTRATION PORTAL</span>
            </div>
            <h2 className="font-sports font-black text-3xl sm:text-4xl md:text-5xl text-[#F3F4F6] uppercase tracking-tight leading-none">
              PICK YOUR GAME. <span className="text-[#00E073]">REGISTER YOUR SQUAD.</span>
            </h2>
          </div>

          <div className="text-xs font-sports font-bold tracking-wider text-[#8A939E] uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00E073] animate-ping" />
            <span>5 DISCIPLINES · GOOGLE FORMS DIRECT ENTRY</span>
          </div>
        </div>

        {/* 5-Card Sports Tournament Grid */}
        {/* Desktop: 5 in a single row (lg:grid-cols-5). Tablet: 3+2 (md:grid-cols-3). Mobile: 2 cols (grid-cols-1 sm:grid-cols-2). */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {GAMES.map((game) => (
            <SportsGameCard key={game.id} game={game} />
          ))}
        </div>

        {/* Tournament Disclaimer Note */}
        <div className="mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-sports tracking-wider text-[#8A939E] uppercase">
          <span>FIT INDIA CLUB (FIC) · DIRECT OFFICIAL ENTRIES</span>
          <span>EACH REGISTRATION OPENS ITS DEDICATED GOOGLE FORM IN A NEW TAB</span>
        </div>

      </div>
    </section>
  );
};
