import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';
import { EVENT_DATA } from '../data/event';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#040e0b] border-t border-[#00D084]/20 pt-16 pb-12 overflow-hidden text-[#A8B8AF]">
      {/* Background radial accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-[#00D084]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#00D084]/15">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 p-1 border border-[#00D084]/40 flex items-center justify-center">
                <img
                  src="/fic_logo.png"
                  alt="Fit India Club"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <div>
                <div className="font-heading font-black text-xl text-[#F7FAF8] tracking-wider">
                  EVE OF CHILDHOOD 5.0
                </div>
                <div className="text-xs font-bold text-[#C6FF4D] tracking-widest uppercase">
                  A FIT INDIA CLUB (FIC) FLAGSHIP EVENT
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A8B8AF] max-w-md leading-relaxed">
              Your Childhood. Your Playground. Your Comeback. Reliving timeless childhood sports with energy, teamwork, and fair play.
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#F7FAF8] bg-[#071A14] px-3.5 py-1.5 rounded-xl border border-[#00D084]/30">
              <span className="w-2 h-2 rounded-full bg-[#00D084]" />
              <span>25 OCTOBER 2026 · 9 AM – 1 PM</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-heading font-black text-sm text-[#F7FAF8] tracking-wider uppercase">
              QUICK NAVIGATION
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-[#C6FF4D] transition-colors">
                  Home Overview
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#C6FF4D] transition-colors">
                  Playground Spirit
                </a>
              </li>
              <li>
                <a href="#games" className="hover:text-[#C6FF4D] transition-colors">
                  All 5 Disciplines
                </a>
              </li>
              <li>
                <a href="#register" className="hover:text-[#C6FF4D] transition-colors">
                  Google Forms Registration
                </a>
              </li>
            </ul>
          </div>

          {/* Official Disciplines */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-heading font-black text-sm text-[#F7FAF8] tracking-wider uppercase">
              DISCIPLINES
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#games" className="hover:text-[#C6FF4D] transition-colors">
                  Kho Kho (9 Players)
                </a>
              </li>
              <li>
                <a href="#games" className="hover:text-[#C6FF4D] transition-colors">
                  Kabaddi (7 + 1 Players)
                </a>
              </li>
              <li>
                <a href="#games" className="hover:text-[#C6FF4D] transition-colors">
                  Tug of War (7 Players)
                </a>
              </li>
              <li>
                <a href="#games" className="hover:text-[#C6FF4D] transition-colors">
                  Dodge Ball (9 Players)
                </a>
              </li>
              <li>
                <a href="#games" className="hover:text-[#C6FF4D] transition-colors">
                  Seven Stones (7 Players)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Tagline & Scroll To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="font-heading font-bold text-sm tracking-widest uppercase text-[#C6FF4D] flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#C6FF4D]" />
            <span>"{EVENT_DATA.tagline}"</span>
          </div>

          <div className="text-[11px] text-[#A8B8AF]">
            Powered by Fit India Club (FIC) · Eve of Childhood 5.0
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#A8B8AF] hover:text-[#C6FF4D] transition-colors p-2 rounded-xl bg-[#071A14] border border-[#00D084]/20 hover:border-[#C6FF4D]/40"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
