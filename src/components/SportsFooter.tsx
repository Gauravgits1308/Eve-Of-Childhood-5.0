import React from 'react';

export const SportsFooter: React.FC = () => {
  return (
    <footer className="w-full bg-[#050806] border-t border-white/10 py-6 text-center text-xs font-sports tracking-wider text-[#A2AEA5] uppercase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="font-bold text-[#F6F8F5]">
          EVE OF CHILDHOOD 5.0 <span className="text-[#00D68F]">· FIT INDIA CLUB</span>
        </div>
        <div className="text-xs text-[#A2AEA5]">
          25 OCTOBER 2026 · 9 AM – 1 PM IST
        </div>
      </div>
    </footer>
  );
};
