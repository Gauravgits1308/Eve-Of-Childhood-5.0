import React, { useEffect, useState } from 'react';
import { EVENT_DATA } from '../data/event';
import { Zap, Trophy } from 'lucide-react';

interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  status: 'upcoming' | 'live' | 'ended';
}

export const ScoreboardCountdown: React.FC = () => {
  // Target: 25 October 2026, 09:00:00 IST (+05:30)
  const startTime = new Date(EVENT_DATA.targetDateISO).getTime();
  const endTime = startTime + 4 * 60 * 60 * 1000; // 1:00 PM IST

  const calculateTime = (): CountdownState => {
    const now = new Date().getTime();

    if (now >= endTime) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, status: 'ended' };
    }
    if (now >= startTime && now < endTime) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, status: 'live' };
    }

    const diff = Math.max(0, startTime - now);
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      status: 'upcoming',
    };
  };

  const [state, setState] = useState<CountdownState>(calculateTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setState(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, [startTime, endTime]);

  if (state.status === 'live') {
    return (
      <div className="flex items-center gap-3 bg-[#101713] border-2 border-[#D2FF52] px-5 py-3 shadow-lg shadow-[#D2FF52]/20 clip-chamfer-tr">
        <span className="w-3 h-3 rounded-full bg-[#D2FF52] animate-ping" />
        <span className="font-sports font-black text-lg sm:text-xl text-[#D2FF52] tracking-wider uppercase">
          THE PLAYGROUND IS LIVE
        </span>
      </div>
    );
  }

  if (state.status === 'ended') {
    return (
      <div className="flex items-center gap-3 bg-[#101713] border border-white/20 px-5 py-3 clip-chamfer-tr">
        <Trophy className="w-4 h-4 text-[#00D68F]" />
        <span className="font-sports font-bold text-sm sm:text-base text-[#F6F8F5] tracking-wider uppercase">
          WHAT A GAME. SEE YOU NEXT TIME.
        </span>
      </div>
    );
  }

  const units = [
    { label: 'DAYS', value: state.days },
    { label: 'HOURS', value: state.hours },
    { label: 'MINUTES', value: state.minutes },
    { label: 'SECONDS', value: state.seconds },
  ];

  return (
    <div className="relative group bg-[#101713] border border-white/15 border-l-4 border-l-[#D2FF52] p-3 sm:p-4 clip-chamfer-tr shadow-2xl">
      {/* Scoreboard Header */}
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[10px] sm:text-xs font-sports tracking-widest uppercase">
        <div className="flex items-center gap-1.5 text-[#D2FF52] font-black">
          <Zap className="w-3.5 h-3.5 fill-[#D2FF52]" />
          <span>OFFICIAL MATCH CLOCK</span>
        </div>
        <div className="flex items-center gap-1.5 text-[#A2AEA5]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00D68F] animate-pulse" />
          <span>25 OCT 2026 · 09:00 IST</span>
        </div>
      </div>

      {/* Scoreboard Digits Grid */}
      <div className="grid grid-cols-4 gap-2 text-center">
        {units.map((unit, idx) => (
          <div key={unit.label} className="relative bg-[#070B09] border border-white/10 p-2 sm:p-2.5">
            <div className="font-mono font-black tabular-nums text-2xl sm:text-3xl md:text-4xl text-[#F6F8F5] leading-none tracking-tight">
              {String(unit.value).padStart(2, '0')}
            </div>
            <div className="text-[9px] sm:text-[10px] font-sports font-bold text-[#A2AEA5] tracking-widest uppercase mt-1">
              {unit.label}
            </div>
            {idx < 3 && (
              <span className="hidden sm:block absolute -right-1.5 top-1/2 -translate-y-1/2 text-white/20 font-mono text-xs">
                :
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
