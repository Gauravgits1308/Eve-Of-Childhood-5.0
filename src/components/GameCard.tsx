import React from 'react';
import type { Game } from '../types';
import { GameVisual } from './GameVisuals';
import { Users, CheckCircle2, ExternalLink, Sparkles } from 'lucide-react';
import { triggerRegistrationCelebration, triggerSelectCelebration } from '../utils/confetti';

interface GameCardProps {
  game: Game;
  isSelected: boolean;
  onSelect: (game: Game) => void;
  featured?: boolean;
}

export const GameCard: React.FC<GameCardProps> = ({
  game,
  isSelected,
  onSelect,
  featured = false,
}) => {
  const handleRegisterClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    triggerRegistrationCelebration();
  };

  const handleCardClick = () => {
    onSelect(game);
    triggerSelectCelebration();
  };

  return (
    <div
      onClick={handleCardClick}
      className={`group relative rounded-3xl transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden border ${
        isSelected
          ? 'bg-[#0E3528] border-[#C6FF4D] shadow-2xl shadow-[#C6FF4D]/20 -translate-y-1 ring-2 ring-[#C6FF4D]/40'
          : 'glass-panel border-[#00D084]/25 hover:border-[#00D084]/60 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60'
      } ${featured ? 'lg:col-span-2' : ''}`}
      tabIndex={0}
      role="button"
      aria-label={`Select ${game.name}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleCardClick();
        }
      }}
    >
      {/* Top Ambient Glow on Selected */}
      {isSelected && (
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#00D084] via-[#C6FF4D] to-[#00D084]" />
      )}

      {/* Card Header & Badges */}
      <div className="p-6 pb-2">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-black tracking-widest text-[#C6FF4D] bg-[#071A14]/80 px-2.5 py-1 rounded-md border border-[#00D084]/30">
              {game.gameNumber}
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#A8B8AF] bg-[#0B2D22] px-2.5 py-1 rounded-md border border-[#00D084]/20">
              {game.category}
            </span>
          </div>

          {/* Active selection indicator */}
          {isSelected ? (
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#C6FF4D] bg-[#C6FF4D]/10 px-2.5 py-0.5 rounded-full border border-[#C6FF4D]/30 animate-pulse">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>ACTIVE</span>
            </span>
          ) : (
            <span className="text-[11px] font-medium text-[#A8B8AF] group-hover:text-[#00D084] transition-colors">
              Click to preview
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#F7FAF8] tracking-tight group-hover:text-[#C6FF4D] transition-colors flex items-center justify-between">
          <span>{game.name}</span>
          <span className="text-xs font-mono font-normal text-[#A8B8AF]">
            {game.vibe}
          </span>
        </h3>
      </div>

      {/* Interactive Bespoke Visual Court Container */}
      <div className="px-6 py-2">
        <div className="relative rounded-2xl bg-[#071A14]/90 p-4 border border-[#00D084]/20 group-hover:border-[#00D084]/50 transition-all duration-300 overflow-hidden shadow-inner">
          <div className="absolute inset-0 bg-sports-grid opacity-15" />
          <GameVisual courtType={game.courtType} className="h-44 sm:h-48 transition-transform duration-500 group-hover:scale-[1.02]" />
          
          {/* Subtle Tag Overlay */}
          <div className="absolute bottom-2 right-3 text-[10px] font-mono uppercase text-[#A8B8AF]/60 tracking-widest">
            OFFICIAL ARENA SPECS
          </div>
        </div>
      </div>

      {/* Card Content & Requirements */}
      <div className="p-6 pt-3 flex flex-col flex-grow justify-between gap-5">
        <div>
          {/* Description */}
          <p className="text-sm text-[#A8B8AF] leading-relaxed mb-4">
            {game.description}
          </p>

          {/* Requirement Chips: Team size & Female member requirement */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#071A14]/80 border border-[#00D084]/30 text-xs font-bold text-[#F7FAF8]">
              <Users className="w-3.5 h-3.5 text-[#C6FF4D]" />
              <span>{game.teamSize}</span>
            </div>

            {game.specialRequirement && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#C6FF4D]/10 border border-[#C6FF4D]/30 text-xs font-bold text-[#C6FF4D]">
                <Sparkles className="w-3.5 h-3.5 text-[#C6FF4D]" />
                <span>{game.specialRequirement}</span>
              </div>
            )}
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-1.5 text-[11px] text-[#A8B8AF]">
            {game.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D084]" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Controls */}
        <div className="pt-4 border-t border-[#00D084]/20 flex flex-col sm:flex-row items-center gap-2">
          {/* Direct Google Form Registration Button */}
          <a
            href={game.formUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleRegisterClick}
            className="w-full py-3.5 px-4 rounded-xl font-heading font-black text-xs tracking-wider uppercase text-[#071A14] bg-[#C6FF4D] hover:bg-[#00D084] transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#C6FF4D]/25 flex items-center justify-center gap-2 text-center group/btn focus:outline-none focus:ring-2 focus:ring-[#C6FF4D]"
            aria-label={`${game.registrationButton} (opens Google Form in new tab)`}
          >
            <span>{game.registrationButton}</span>
            <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};
