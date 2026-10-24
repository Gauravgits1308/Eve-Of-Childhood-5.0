import React from 'react';
import { Calendar, Clock, Trophy, Sparkles, ChevronRight, Play } from 'lucide-react';
import { EVENT_DATA } from '../data/event';

interface HeroSectionProps {
  onExploreGames: () => void;
  onRegisterNow: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreGames, onRegisterNow }) => {
  return (
    <section id="home" className="relative min-h-[92vh] sm:min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden">
      {/* Background Court Markings & Glows */}
      <div className="absolute inset-0 bg-sports-grid opacity-30 pointer-events-none" />
      
      {/* Ambient Radial Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[850px] h-[550px] sm:h-[850px] bg-gradient-to-b from-[#00D084]/15 via-[#0B2D22]/40 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#C6FF4D]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-[#00D084]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Top Pill: Organizing Club Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B2D22]/80 border border-[#00D084]/40 text-[#C6FF4D] text-xs font-semibold uppercase tracking-widest mb-6 shadow-md shadow-emerald-950/50">
            <span className="w-2 h-2 rounded-full bg-[#C6FF4D] animate-ping" />
            <Sparkles className="w-3.5 h-3.5 text-[#C6FF4D]" />
            <span>FIT INDIA CLUB (FIC) PRESENTS</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading font-black tracking-tighter text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase leading-[0.95] mb-4">
            <span className="block text-[#F7FAF8] drop-shadow-sm">
              EVE OF
            </span>
            <span className="block text-gradient-green">
              CHILDHOOD 5.0
            </span>
          </h1>

          {/* Supporting Headline */}
          <div className="font-heading font-extrabold text-lg sm:text-2xl md:text-3xl text-[#C6FF4D] tracking-wider uppercase mb-6 flex items-center justify-center gap-3">
            <span className="hidden sm:inline-block w-8 sm:w-16 h-[2px] bg-gradient-to-r from-transparent to-[#C6FF4D]" />
            <span>GROW UP. SHOW UP. PLAY AGAIN.</span>
            <span className="hidden sm:inline-block w-8 sm:w-16 h-[2px] bg-gradient-to-l from-transparent to-[#C6FF4D]" />
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-[#A8B8AF] max-w-2xl font-normal leading-relaxed mb-8">
            {EVENT_DATA.heroDescription}
          </p>

          {/* Three Attractive Event Information Elements */}
          <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
            {/* Element 1: Date */}
            <div className="glass-panel rounded-2xl p-4 flex items-center gap-3 border border-[#00D084]/25 hover:border-[#C6FF4D]/50 transition-colors shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-[#00D084]/15 border border-[#00D084]/30 flex items-center justify-center shrink-0">
                <Calendar className="w-5 h-5 text-[#C6FF4D]" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] uppercase tracking-wider text-[#A8B8AF] font-bold">EVENT DATE</span>
                <span className="block text-sm sm:text-base font-extrabold text-[#F7FAF8] font-heading">
                  SUNDAY, 25 OCTOBER 2026
                </span>
              </div>
            </div>

            {/* Element 2: Time */}
            <div className="glass-panel rounded-2xl p-4 flex items-center gap-3 border border-[#00D084]/25 hover:border-[#C6FF4D]/50 transition-colors shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-[#00D084]/15 border border-[#00D084]/30 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-[#C6FF4D]" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] uppercase tracking-wider text-[#A8B8AF] font-bold">TIMING (IST)</span>
                <span className="block text-sm sm:text-base font-extrabold text-[#F7FAF8] font-heading">
                  9:00 AM – 1:00 PM
                </span>
              </div>
            </div>

            {/* Element 3: Organizing Club */}
            <div className="glass-panel rounded-2xl p-4 flex items-center gap-3 border border-[#00D084]/25 hover:border-[#C6FF4D]/50 transition-colors shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-[#00D084]/15 border border-[#00D084]/30 flex items-center justify-center shrink-0">
                <Trophy className="w-5 h-5 text-[#C6FF4D]" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] uppercase tracking-wider text-[#A8B8AF] font-bold">ORGANIZER</span>
                <span className="block text-sm sm:text-base font-extrabold text-[#F7FAF8] font-heading">
                  POWERED BY FIT INDIA CLUB (FIC)
                </span>
              </div>
            </div>
          </div>

          {/* Hero Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            {/* Primary CTA: Explore the Games */}
            <button
              onClick={onExploreGames}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-heading font-black text-sm tracking-wider uppercase text-[#071A14] bg-[#C6FF4D] hover:bg-[#00D084] transition-all duration-300 shadow-xl shadow-[#C6FF4D]/20 hover:shadow-[#00D084]/40 flex items-center justify-center gap-3 group transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#C6FF4D]/50"
            >
              <span>EXPLORE THE GAMES</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary CTA: Register Now */}
            <button
              onClick={onRegisterNow}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-heading font-bold text-sm tracking-wider uppercase text-[#F7FAF8] bg-[#0B2D22]/80 hover:bg-[#134B3A] border-2 border-[#00D084]/50 hover:border-[#C6FF4D] transition-all duration-300 shadow-lg flex items-center justify-center gap-3 group focus:outline-none focus:ring-4 focus:ring-[#00D084]/40"
            >
              <span>REGISTER NOW</span>
              <Play className="w-4 h-4 text-[#C6FF4D] group-hover:scale-110 transition-transform fill-[#C6FF4D]" />
            </button>
          </div>

          {/* Floating Nostalgic Playground Elements / Chips */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs text-[#A8B8AF]">
            <span className="px-3 py-1 rounded-full bg-[#0B2D22]/60 border border-[#00D084]/20 flex items-center gap-1.5 animate-float">
              🏃 Kho Kho
            </span>
            <span className="px-3 py-1 rounded-full bg-[#0B2D22]/60 border border-[#00D084]/20 flex items-center gap-1.5 animate-float-reverse">
              💪 Kabaddi
            </span>
            <span className="px-3 py-1 rounded-full bg-[#0B2D22]/60 border border-[#00D084]/20 flex items-center gap-1.5 animate-float">
              🪢 Tug of War
            </span>
            <span className="px-3 py-1 rounded-full bg-[#0B2D22]/60 border border-[#00D084]/20 flex items-center gap-1.5 animate-float-reverse">
              🏐 Dodge Ball
            </span>
            <span className="px-3 py-1 rounded-full bg-[#0B2D22]/60 border border-[#00D084]/20 flex items-center gap-1.5 animate-float">
              🧱 Seven Stones
            </span>
          </div>

          {/* Subtle Scroll Down Indicator */}
          <div className="mt-10 flex flex-col items-center">
            <button
              onClick={onExploreGames}
              className="group flex flex-col items-center text-[11px] uppercase tracking-widest text-[#A8B8AF] hover:text-[#C6FF4D] transition-colors focus:outline-none"
              aria-label="Scroll down to explore games"
            >
              <span className="mb-2">Scroll To Play</span>
              <div className="w-6 h-10 rounded-full border-2 border-[#00D084]/40 flex items-start justify-center p-1.5 group-hover:border-[#C6FF4D] transition-colors">
                <span className="w-1.5 h-2 bg-[#C6FF4D] rounded-full animate-bounce" />
              </div>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
