import React from 'react';
import { GAMES } from '../data/games';
import { EVENT_DATA } from '../data/event';
import { ExternalLink, Calendar, Clock, Trophy, Flame } from 'lucide-react';
import { triggerRegistrationCelebration } from '../utils/confetti';

export const RegistrationCTA: React.FC = () => {
  return (
    <section id="register" className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-[#061711] via-[#071A14] to-[#040e0b]">
      {/* Background High Energy Radial Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#00D084]/20 via-[#C6FF4D]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-sports-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main High-Impact CTA Box */}
        <div className="relative rounded-3xl glass-panel p-8 sm:p-14 lg:p-16 border-2 border-[#00D084]/40 shadow-2xl text-center max-w-5xl mx-auto overflow-hidden">
          
          {/* Top Decorative Banner */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#071A14] border border-[#C6FF4D]/40 text-[#C6FF4D] text-xs font-bold uppercase tracking-widest mb-6 shadow-inner">
            <Flame className="w-4 h-4 text-[#C6FF4D] animate-bounce" />
            <span>FINAL CALL FOR REGISTRATIONS</span>
          </div>

          {/* Heading */}
          <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-[#F7FAF8] tracking-tight uppercase leading-[1.05] mb-6">
            YOUR CHILDHOOD CALLED. <br className="hidden sm:inline" />
            <span className="text-gradient-lime">IT WANTS A REMATCH.</span>
          </h2>

          {/* Supporting Copy */}
          <p className="text-base sm:text-xl text-[#A8B8AF] max-w-2xl mx-auto leading-relaxed mb-12">
            {EVENT_DATA.finalCtaCopy}
          </p>

          {/* Five Compact Game Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 mb-12">
            {GAMES.map((game) => (
              <a
                key={game.id}
                href={game.formUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => triggerRegistrationCelebration()}
                className="group relative flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-[#071A14]/90 border border-[#00D084]/30 hover:border-[#C6FF4D] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#C6FF4D]/20 focus:outline-none focus:ring-2 focus:ring-[#C6FF4D]"
                aria-label={`Register for ${game.name} on Google Forms`}
              >
                <div className="flex items-center justify-between gap-1 mb-2">
                  <span className="font-mono text-[10px] font-bold text-[#A8B8AF] group-hover:text-[#C6FF4D]">
                    {game.gameNumber}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#A8B8AF] group-hover:text-[#C6FF4D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

                <div className="font-heading font-black text-base sm:text-lg text-[#F7FAF8] group-hover:text-[#C6FF4D] transition-colors mb-2">
                  {game.name}
                </div>

                <div className="text-[11px] font-medium text-[#A8B8AF] mb-3">
                  {game.teamSize}
                </div>

                <div className="w-full py-2 px-3 rounded-xl bg-[#0B2D22] group-hover:bg-[#C6FF4D] text-[11px] font-bold uppercase tracking-wider text-[#C6FF4D] group-hover:text-[#071A14] transition-all duration-200 text-center flex items-center justify-center gap-1.5">
                  <span>REGISTER</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </a>
            ))}
          </div>

          {/* Event Metadata Bar */}
          <div className="pt-8 border-t border-[#00D084]/20 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-heading font-bold text-[#F7FAF8]">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#C6FF4D]" />
              <span>EVENT DATE: 25 OCTOBER 2026</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C6FF4D]" />
              <span>TIME: 9:00 AM – 1:00 PM</span>
            </div>

            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-[#C6FF4D]" />
              <span>ORGANIZED BY: FIT INDIA CLUB (FIC)</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
