import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Flame } from 'lucide-react';
import { EVENT_DATA } from '../data/event';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Games', href: '#games' },
    { label: 'Countdown', href: '#countdown' },
    { label: 'Register', href: '#register' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#071A14]/90 backdrop-blur-md border-b border-[#00D084]/20 shadow-2xl shadow-black/50'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo / Treatment */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#C6FF4D] rounded-xl p-1"
            aria-label="Eve of Childhood 5.0 Home"
          >
            {/* Logo image if present, with stylish FIC emblem */}
            <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white/10 p-1 border border-[#00D084]/40 flex items-center justify-center group-hover:border-[#C6FF4D] transition-colors">
              <img
                src="/fic_logo.png"
                alt="Fit India Club Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  // graceful fallback if image fails
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="sr-only">Fit India Club</span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-black tracking-wider text-base sm:text-lg text-[#F7FAF8] group-hover:text-[#C6FF4D] transition-colors">
                  EVE OF CHILDHOOD
                </span>
                <span className="text-xs font-black px-1.5 py-0.5 rounded bg-[#C6FF4D] text-[#071A14] font-mono">
                  5.0
                </span>
              </div>
              <span className="text-[10px] tracking-widest text-[#A8B8AF] font-semibold uppercase group-hover:text-[#00D084] transition-colors">
                FIT INDIA CLUB (FIC)
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0B2D22]/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#00D084]/20 shadow-inner" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-1.5 text-xs font-medium text-[#A8B8AF] hover:text-[#F7FAF8] hover:bg-[#00D084]/15 rounded-full transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#C6FF4D]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#games"
              onClick={(e) => handleNavClick(e, '#games')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-[#071A14] bg-[#C6FF4D] hover:bg-[#00D084] transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#C6FF4D]/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C6FF4D] focus:ring-offset-[#071A14] transform hover:-translate-y-0.5"
            >
              <Flame className="w-3.5 h-3.5 text-[#071A14]" />
              <span>REGISTER NOW</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-[#0B2D22]/80 border border-[#00D084]/30 text-[#F7FAF8] hover:text-[#C6FF4D] focus:outline-none focus:ring-2 focus:ring-[#C6FF4D]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#071A14]/98 border-b border-[#00D084]/30 backdrop-blur-xl px-5 pt-3 pb-6 mt-3 shadow-2xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-3 rounded-xl text-sm font-semibold text-[#F7FAF8] hover:bg-[#0B2D22] hover:text-[#C6FF4D] border border-transparent hover:border-[#00D084]/20 transition-all flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#A8B8AF]" />
              </a>
            ))}
            <div className="pt-3">
              <a
                href="#games"
                onClick={(e) => handleNavClick(e, '#games')}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-[#071A14] bg-[#C6FF4D] hover:bg-[#00D084] shadow-lg transition-all"
              >
                <Flame className="w-4 h-4" />
                <span>CHOOSE YOUR GAME</span>
              </a>
            </div>
            <div className="pt-2 text-center text-[11px] text-[#A8B8AF]">
              {EVENT_DATA.dateFormatted} · {EVENT_DATA.organizer}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
