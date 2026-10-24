import React, { useEffect, useState } from 'react';
import { ArrowDown, Trophy } from 'lucide-react';
import { EVENT_DATA } from '../data/event';

interface SportsHeroProps {
  onChooseGameClick: () => void;
}

export const SportsHero: React.FC<SportsHeroProps> = ({ onChooseGameClick }) => {
  const [countdownText, setCountdownText] = useState('');

  useEffect(() => {
    const startTime = new Date(EVENT_DATA.targetDateISO).getTime();
    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = Math.max(0, startTime - now);
      if (diff === 0) {
        setCountdownText('EVENT IS LIVE');
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      setCountdownText(`${days}D : ${String(hours).padStart(2, '0')}H : ${String(minutes).padStart(2, '0')}M`);
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full pt-8 pb-6 sm:pt-10 sm:pb-8 bg-[#08090A] bg-sports-diagonal border-b border-[#00E073]/20 overflow-hidden">
      {/* Athletic Speed Gradients & Lines */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#00E073]/10 to-transparent pointer-events-none" />
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-[#D4FF00]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-sports-grid opacity-30 pointer-events-none" />

      {/* Decorative Diagonal Sports Stripe */}
      <div className="absolute -right-8 -top-8 w-44 h-44 border-r-4 border-t-4 border-[#00E073]/30 transform rotate-12 pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          
          {/* Left Block: Bold Condensed Headline & Subhead */}
          <div className="space-y-2">
            {/* Tournament Series Tag */}
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#0E1113] border-l-2 border-[#D4FF00] text-[11px] font-sports font-black tracking-widest text-[#D4FF00] uppercase">
              <Trophy className="w-3 h-3 text-[#D4FF00]" />
              <span>FIT INDIA CLUB · FLAGSHIP SPORTS TOURNAMENT</span>
              {countdownText && (
                <>
                  <span className="text-white/30">•</span>
                  <span className="text-[#00E073] font-mono font-bold tracking-normal">{countdownText}</span>
                </>
              )}
            </div>

            {/* Giant Athletic Typography */}
            <h1 className="font-sports font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-[0.88] text-[#F3F4F6]">
              <span className="block text-white/90">EVE OF</span>
              <span className="block text-[#00E073] tracking-tight">CHILDHOOD 5.0</span>
            </h1>

            {/* Supporting Tagline & Short Pitch */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <span className="font-sports font-extrabold text-lg sm:text-xl md:text-2xl text-[#D4FF00] tracking-wide uppercase">
                YOUR PLAYGROUND. YOUR RULES.
              </span>
              <span className="hidden sm:inline text-white/30">/</span>
              <span className="text-xs sm:text-sm text-[#8A939E] font-medium">
                5 games. One squad. Pure competition.
              </span>
            </div>
          </div>

          {/* Right Block: Tournament Metadata Strip & Fast CTA */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-3.5 shrink-0">
            {/* Compact Information Strip */}
            <div className="flex items-center gap-2 sm:gap-3 px-3 py-2 bg-[#0E1113] border border-white/10 text-xs font-sports tracking-wider text-[#F3F4F6] uppercase">
              <span className="font-bold text-[#00E073]">SUN, 25 OCT 2026</span>
              <span className="text-white/25">|</span>
              <span className="text-[#8A939E]">9:00 AM – 1:00 PM</span>
              <span className="text-white/25">|</span>
              <span className="text-[#D4FF00] font-bold">FIT INDIA CLUB</span>
            </div>

            {/* Primary Action Button */}
            <button
              onClick={onChooseGameClick}
              className="w-full sm:w-auto px-6 py-3 bg-[#00E073] hover:bg-[#D4FF00] text-[#08090A] font-sports font-black text-base sm:text-lg tracking-wider uppercase transition-all duration-200 clip-chamfer-tr flex items-center justify-center gap-2 group shadow-lg shadow-[#00E073]/20 focus:outline-none focus:ring-2 focus:ring-[#D4FF00]"
            >
              <span>CHOOSE YOUR GAME</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
