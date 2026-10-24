import React, { useState } from 'react';
import { GAMES } from '../data/games';
import type { Game } from '../types';
import { GameCard } from './GameCard';
import { GameSelectionPanel } from './GameSelectionPanel';
import { Trophy } from 'lucide-react';

interface GamesSectionProps {
  onSelectGame?: (game: Game) => void;
}

export const GamesSection: React.FC<GamesSectionProps> = () => {
  const [selectedGame, setSelectedGame] = useState<Game>(GAMES[0]);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterOptions = [
    { id: 'all', label: 'All 5 Games' },
    { id: 'chase', label: 'Kho Kho' },
    { id: 'kabaddi', label: 'Kabaddi' },
    { id: 'tug', label: 'Tug of War' },
    { id: 'dodge', label: 'Dodge Ball' },
    { id: 'stones', label: 'Seven Stones' },
  ];

  const filteredGames = GAMES.filter((game) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'chase') return game.id === 'kho-kho';
    if (activeFilter === 'kabaddi') return game.id === 'kabaddi';
    if (activeFilter === 'tug') return game.id === 'tug-of-war';
    if (activeFilter === 'dodge') return game.id === 'dodge-ball';
    if (activeFilter === 'stones') return game.id === 'seven-stones';
    return true;
  });

  return (
    <section id="games" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background Court Atmosphere */}
      <div className="absolute inset-0 bg-court-lines opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00D084]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#C6FF4D]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2D22] border border-[#00D084]/40 text-[#C6FF4D] text-xs font-bold uppercase tracking-widest mb-4">
            <Trophy className="w-3.5 h-3.5 text-[#C6FF4D]" />
            <span>OFFICIAL DISCIPLINE ROSTER</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-[#F7FAF8] tracking-tight uppercase mb-4">
            FIVE GAMES. <span className="text-gradient-lime">ONE PLAYGROUND.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#A8B8AF] font-normal leading-relaxed">
            Pick your game, gather your squad, and get ready to play.
          </p>
        </div>

        {/* Interactive Feature: Dynamic Game Selection Console */}
        <div className="mb-14">
          <GameSelectionPanel
            games={GAMES}
            selectedGame={selectedGame}
            onSelectGame={setSelectedGame}
          />
        </div>

        {/* Section Cards Grid Header & Quick View Filter */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="font-heading font-black text-xl sm:text-2xl text-[#F7FAF8]">
              EXPLORE ALL GAME ARENAS
            </h3>
            <p className="text-xs text-[#A8B8AF]">
              Review arena specifications, squad rules, and submit direct Google Form entries.
            </p>
          </div>

          {/* Quick Filter Bar */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#071A14]/90 p-1.5 rounded-2xl border border-[#00D084]/25">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setActiveFilter(opt.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                  activeFilter === opt.id
                    ? 'bg-[#C6FF4D] text-[#071A14] shadow'
                    : 'text-[#A8B8AF] hover:text-[#F7FAF8] hover:bg-[#0B2D22]'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Responsive Grid for 5 Games */}
        {/* Kho Kho (Game 01) featured wide on large screens, followed by balanced 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredGames.map((game, index) => {
            const isSelected = game.id === selectedGame.id;
            // Make Kho Kho span 2 columns on 2-col desktop layout if all are shown
            const isFeatured = activeFilter === 'all' && index === 0;

            return (
              <GameCard
                key={game.id}
                game={game}
                isSelected={isSelected}
                onSelect={(g) => setSelectedGame(g)}
                featured={isFeatured}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
};
