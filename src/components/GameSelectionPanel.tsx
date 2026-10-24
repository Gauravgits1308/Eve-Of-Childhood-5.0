import React from 'react';
import type { Game } from '../types';
import { Users, ExternalLink, Flame, Sparkles, CheckCircle2 } from 'lucide-react';
import { triggerRegistrationCelebration } from '../utils/confetti';

interface GameSelectionPanelProps {
  games: Game[];
  selectedGame: Game;
  onSelectGame: (game: Game) => void;
}

export const GameSelectionPanel: React.FC<GameSelectionPanelProps> = ({
  games,
  selectedGame,
  onSelectGame,
}) => {
  const handleRegisterClick = () => {
    triggerRegistrationCelebration();
  };

  return (
    <div className="relative rounded-3xl glass-panel p-6 sm:p-8 border-2 border-[#00D084]/40 shadow-2xl overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#C6FF4D]/10 via-[#00D084]/10 to-transparent rounded-full blur-2xl pointer-events-none" />

      {/* Top Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#00D084]/20">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C6FF4D] mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE GAME SELECTOR</span>
          </div>
          <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#F7FAF8]">
            CHOOSE YOUR DISCIPLINE
          </h3>
          <p className="text-xs sm:text-sm text-[#A8B8AF]">
            Select a game tab below to verify squad size, roster rules, and access the official registration form.
          </p>
        </div>

        {/* Quick Game Switcher Pills */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {games.map((game) => {
            const isCurrent = game.id === selectedGame.id;
            return (
              <button
                key={game.id}
                onClick={() => onSelectGame(game)}
                className={`px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#C6FF4D] ${
                  isCurrent
                    ? 'bg-[#C6FF4D] text-[#071A14] shadow-md shadow-[#C6FF4D]/30 scale-105'
                    : 'bg-[#071A14]/70 text-[#A8B8AF] hover:text-[#F7FAF8] hover:bg-[#0B2D22] border border-[#00D084]/20'
                }`}
                aria-pressed={isCurrent}
              >
                <span>{game.name}</span>
                {isCurrent && <CheckCircle2 className="w-3.5 h-3.5 text-[#071A14]" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Game Details Display */}
      <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left Side: Dynamic Info */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#C6FF4D] bg-[#071A14] px-2.5 py-1 rounded border border-[#00D084]/30">
              {selectedGame.gameNumber}
            </span>
            <span className="text-xs uppercase tracking-widest text-[#A8B8AF] font-bold">
              YOUR SELECTED GAME
            </span>
          </div>

          <h4 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-[#F7FAF8] tracking-tight">
            {selectedGame.name}
          </h4>

          <p className="text-sm sm:text-base text-[#A8B8AF] leading-relaxed">
            {selectedGame.description}
          </p>

          {/* Dynamic Requirements Row */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#071A14] border border-[#00D084]/30 text-xs sm:text-sm font-bold text-[#F7FAF8]">
              <Users className="w-4 h-4 text-[#C6FF4D]" />
              <span>TEAM SIZE: {selectedGame.teamSize.toUpperCase()}</span>
            </div>

            {selectedGame.specialRequirement ? (
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#C6FF4D]/15 border border-[#C6FF4D]/40 text-xs sm:text-sm font-bold text-[#C6FF4D]">
                <Sparkles className="w-4 h-4 text-[#C6FF4D]" />
                <span>REQUIREMENT: {selectedGame.specialRequirement.toUpperCase()}</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#071A14] border border-[#00D084]/20 text-xs sm:text-sm text-[#A8B8AF]">
                <CheckCircle2 className="w-4 h-4 text-[#00D084]" />
                <span>OPEN ROSTER SQUAD</span>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: High-Impact Registration Console */}
        <div className="lg:col-span-5 bg-[#071A14]/90 p-6 rounded-2xl border border-[#00D084]/30 shadow-xl flex flex-col justify-between">
          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-between text-xs font-semibold text-[#A8B8AF]">
              <span>REGISTRATION STATUS</span>
              <span className="text-[#C6FF4D] font-mono flex items-center gap-1.5 font-bold">
                <span className="w-2 h-2 rounded-full bg-[#C6FF4D] animate-ping" />
                FORMS LIVE NOW
              </span>
            </div>
            
            <div className="text-xl font-heading font-black text-[#F7FAF8]">
              READY TO PLAY?
            </div>
            
            <p className="text-xs text-[#A8B8AF] leading-relaxed">
              Clicking below opens the official Google Form for <span className="text-[#F7FAF8] font-bold">{selectedGame.name}</span> in a secure new tab. No login required on this page.
            </p>
          </div>

          <a
            href={selectedGame.formUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleRegisterClick}
            className="w-full py-4 px-6 rounded-xl font-heading font-black text-sm tracking-wider uppercase text-[#071A14] bg-[#C6FF4D] hover:bg-[#00D084] transition-all duration-300 shadow-xl shadow-[#C6FF4D]/25 flex items-center justify-center gap-2 group transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#C6FF4D]/50"
            aria-label={`Register your team for ${selectedGame.name} on Google Forms`}
          >
            <Flame className="w-4 h-4" />
            <span>REGISTER YOUR TEAM</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="mt-3 text-center text-[10px] text-[#A8B8AF]/80 uppercase tracking-wider">
            OFFICIAL GOOGLE FORMS REGISTRATION · FIT INDIA CLUB
          </div>
        </div>
      </div>
    </div>
  );
};
