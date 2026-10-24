import React, { useEffect, useState } from 'react';
import { Calendar, Clock, Sparkles } from 'lucide-react';
import { EVENT_DATA } from '../data/event';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  status: 'upcoming' | 'live' | 'ended';
}

export const EventCountdown: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  // Target: Sunday, 25 October 2026 09:00:00 IST
  // Duration: ~4 hours (ends Sunday, 25 October 2026 13:00:00 IST)
  const startTime = new Date(EVENT_DATA.targetDateISO).getTime();
  const endTime = startTime + 4 * 60 * 60 * 1000;

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();

    if (now >= endTime) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, status: 'ended' };
    }

    if (now >= startTime && now < endTime) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, status: 'live' };
    }

    const difference = Math.max(0, startTime - now);
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      status: 'upcoming',
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [startTime, endTime]);

  if (timeLeft.status === 'live') {
    return (
      <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-emerald-950/80 border border-[#00D084]/50 shadow-lg glow-green animate-pulse">
        <span className="w-3 h-3 rounded-full bg-[#C6FF4D] animate-ping" />
        <span className="text-sm font-semibold tracking-wider text-[#C6FF4D] uppercase">
          EVENT IS LIVE NOW · 9:00 AM – 1:00 PM
        </span>
      </div>
    );
  }

  if (timeLeft.status === 'ended') {
    return (
      <div className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-zinc-900/80 border border-zinc-700 text-zinc-300">
        <Sparkles className="w-4 h-4 text-emerald-400" />
        <span className="text-sm font-medium">Eve of Childhood 5.0 Has Concluded. Thank You!</span>
      </div>
    );
  }

  const units = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds },
  ];

  if (compact) {
    return (
      <div className="flex items-center gap-2 sm:gap-3 text-xs tracking-wider text-[#F7FAF8]">
        {units.map((unit) => (
          <div key={unit.label} className="flex items-center gap-1 bg-[#0B2D22]/80 border border-[#00D084]/20 px-2.5 py-1.5 rounded-lg">
            <span className="font-bold text-[#C6FF4D] font-mono">{String(unit.value).padStart(2, '0')}</span>
            <span className="text-[10px] text-[#A8B8AF]">{unit.label[0]}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative group">
      {/* Background ambient glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#00D084]/20 to-[#C6FF4D]/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-700 pointer-events-none" />

      <div className="relative glass-panel rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-[#00D084]/30">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 pb-3 border-b border-[#00D084]/15">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C6FF4D]">
            <Clock className="w-4 h-4 text-[#C6FF4D] animate-spin-slow" />
            <span>COUNTDOWN TO KICKOFF</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#A8B8AF]">
            <Calendar className="w-3.5 h-3.5 text-[#00D084]" />
            <span>25 OCT 2026 · 9:00 AM IST</span>
          </div>
        </div>

        {/* Counter Units */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4">
          {units.map((unit) => (
            <div
              key={unit.label}
              className="flex flex-col items-center justify-center p-2.5 sm:p-4 rounded-xl bg-[#071A14]/70 border border-[#00D084]/25 shadow-inner"
            >
              <div className="text-2xl sm:text-4xl md:text-5xl font-black text-[#F7FAF8] font-mono tracking-tight text-gradient-green">
                {String(unit.value).padStart(2, '0')}
              </div>
              <div className="mt-1 text-[10px] sm:text-xs font-bold tracking-widest text-[#A8B8AF] uppercase">
                {unit.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
