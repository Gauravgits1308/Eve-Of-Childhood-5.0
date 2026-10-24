import React from 'react';
import { MARQUEE_ITEMS } from '../data/event';
import { Sparkles } from 'lucide-react';

export const ExperienceMarquee: React.FC = () => {
  // Repeat items to ensure seamless endless marquee loop
  const repeatedItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="relative w-full py-4 bg-gradient-to-r from-[#071A14] via-[#0B2D22] to-[#071A14] border-y border-[#00D084]/25 overflow-hidden">
      {/* Decorative side fades */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#071A14] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#071A14] to-transparent z-10 pointer-events-none" />

      {/* Scrolling Track */}
      <div className="animate-marquee flex items-center">
        {repeatedItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 sm:gap-8 mx-4 sm:mx-6 shrink-0">
            <span className="font-heading font-black tracking-widest text-xs sm:text-sm text-[#F7FAF8] uppercase whitespace-nowrap hover:text-[#C6FF4D] transition-colors">
              {item}
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#C6FF4D] shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};
