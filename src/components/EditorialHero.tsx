import React from 'react';
import { ScoreboardCountdown } from './ScoreboardCountdown';
import { ArrowDown, Flame, Trophy, Calendar, Clock } from 'lucide-react';

interface EditorialHeroProps {
  onExploreGames: () => void;
}

export const EditorialHero: React.FC<EditorialHeroProps> = ({ onExploreGames }) => {
  return (
    <section className="relative w-full pt-6 pb-10 sm:pt-10 sm:pb-14 bg-[#070B09] bg-sports-diagonal border-b border-[#00D68F]/20 overflow-hidden">
      {/* Background Stadium Glow & Arena Grid */}
      <div className="absolute inset-0 bg-sports-grid opacity-25 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-b from-[#00D68F]/15 via-[#D2FF52]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-24 bottom-0 w-80 h-80 bg-[#00D68F]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Asymmetrical Editorial Typography & Metadata (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
            
            {/* Small Event Identifier */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#101713] border-l-2 border-[#D2FF52] text-xs font-sports font-black tracking-widest text-[#D2FF52] uppercase">
                <Trophy className="w-3.5 h-3.5 text-[#D2FF52]" />
                <span>FIT INDIA CLUB · FLAGSHIP EVENT</span>
              </div>
              <span className="text-xs font-sports tracking-wider text-[#A2AEA5] uppercase px-2 py-0.5 bg-[#070B09] border border-white/10 hidden sm:inline-block">
                OFFICIAL TOURNAMENT EDITION
              </span>
            </div>

            {/* Oversized Athletic Headline */}
            <div className="space-y-1">
              <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] uppercase tracking-[-0.035em] leading-[0.92] text-[#F6F8F5]">
                <span className="block text-white/90">EVE OF</span>
                <span className="block text-gradient-green drop-shadow-sm">
                  CHILDHOOD 5.0
                </span>
              </h1>
            </div>

            {/* Supporting Tagline & Description */}
            <div className="space-y-2">
              <div className="font-sports font-black text-2xl sm:text-3xl text-[#D2FF52] tracking-wide uppercase flex items-center gap-2">
                <span className="w-6 h-[2px] bg-[#D2FF52]" />
                <span>GROW UP. SHOW UP. PLAY AGAIN.</span>
              </div>
              <p className="text-sm sm:text-base text-[#A2AEA5] max-w-xl font-normal leading-relaxed">
                Five iconic games. One unforgettable morning. It's time to reclaim the playground.
              </p>
            </div>

            {/* Event Metadata Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sports tracking-wider uppercase">
              <div className="flex items-center gap-2.5 p-2.5 bg-[#101713] border border-white/10 text-[#F6F8F5]">
                <Calendar className="w-4 h-4 text-[#00D68F] shrink-0" />
                <div>
                  <span className="text-[10px] text-[#A2AEA5] block font-bold">DATE</span>
                  <span className="font-extrabold text-white text-sm">SUNDAY, 25 OCTOBER 2026</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 bg-[#101713] border border-white/10 text-[#F6F8F5]">
                <Clock className="w-4 h-4 text-[#D2FF52] shrink-0" />
                <div>
                  <span className="text-[10px] text-[#A2AEA5] block font-bold">TIMING</span>
                  <span className="font-extrabold text-white text-sm">09:00 AM – 01:00 PM IST</span>
                </div>
              </div>
            </div>

            {/* Integrated Scoreboard Countdown Clock */}
            <div className="w-full">
              <ScoreboardCountdown />
            </div>

            {/* Primary Hero CTA */}
            <div className="pt-1">
              <button
                onClick={onExploreGames}
                className="w-full sm:w-auto px-8 py-4 bg-[#00D68F] hover:bg-[#D2FF52] text-[#070B09] font-sports font-black text-base sm:text-lg tracking-wider uppercase transition-all duration-200 clip-chamfer-tr flex items-center justify-center gap-3 group shadow-xl shadow-[#00D68F]/20 focus:outline-none focus:ring-2 focus:ring-[#D2FF52]"
              >
                <Flame className="w-4 h-4 fill-[#070B09]" />
                <span>EXPLORE THE GAMES ↓</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>

          </div>

          {/* Right Column: Dynamic Cinematic Sports Campaign Art (5 cols on lg) */}
          <div className="lg:col-span-5 relative">
            <div className="relative group">
              
              {/* Backing Graphic Accent & Angles */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#00D68F]/40 via-[#D2FF52]/30 to-transparent clip-chamfer-tr opacity-75 group-hover:opacity-100 transition duration-500 blur-sm pointer-events-none" />
              <div className="absolute -right-4 -bottom-4 w-32 h-32 border-r-4 border-b-4 border-[#D2FF52]/50 pointer-events-none z-20" />

              {/* Main Visual Container */}
              <div className="relative overflow-hidden bg-[#101713] border border-white/20 clip-chamfer-tr shadow-2xl">
                
                {/* Hero Image */}
                <div className="relative h-72 sm:h-96 lg:h-[460px] w-full overflow-hidden">
                  <img
                    src="/hero_sports.jpg"
                    alt="Eve of Childhood Athletes in Action"
                    className="w-full h-full object-cover object-center transform transition duration-700 group-hover:scale-105"
                  />
                  
                  {/* Cinematic Dark Vignette & Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B09] via-transparent to-transparent opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#070B09]/80 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-[#00D68F]/10 mix-blend-overlay" />

                  {/* Corner Tournament Tag */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-[#070B09]/90 border-l-2 border-[#D2FF52] px-3 py-1 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-[#D2FF52] animate-ping" />
                    <span className="font-sports font-black text-xs tracking-wider text-[#F6F8F5] uppercase">
                      CAMPUS ARENA SERIES
                    </span>
                  </div>

                  {/* Bottom Image Overlay Badge */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 p-4 bg-[#101713]/90 border border-white/10 backdrop-blur-md clip-chamfer-tr">
                    <div className="font-sports font-bold text-xs text-[#00D68F] uppercase tracking-widest mb-1">
                      THE ATHLETIC COMEBACK
                    </div>
                    <div className="font-sports font-black text-lg sm:text-xl text-[#F6F8F5] uppercase leading-none">
                      5 LEGENDARY DISCIPLINES. 1 ARENA.
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
