import type { Game } from '../types';

export const GAMES: Game[] = [
  {
    id: 'kho-kho',
    gameNumber: 'GAME 01',
    name: 'KHO KHO',
    tagline: 'Lightning speed, sudden zig-zags & relentless pursuit',
    teamSize: '9 players',
    playerCount: 9,
    specialRequirement: 'Minimum 1 female member',
    description:
      'Speed, strategy, agility, and lightning-fast chases. Bring your team and own the playground.',
    registrationButton: 'REGISTER FOR KHO KHO',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScg25wrprKUMCzvSlelCYXC56SwvczCxuQ0UaVouanVMdkkZA/viewform?usp=sharing&ouid=100305418463900605995',
    visualDirection:
      'Dynamic chase-inspired lines, ground markings, motion trails, and sports silhouette',
    category: 'Agility & Chase',
    vibe: 'High Speed',
    courtType: 'khokho',
    highlights: ['9 Active Players', 'Min. 1 Female Member', 'Chasing & Dodging', 'Fast Tactical Sprints'],
  },
  {
    id: 'kabaddi',
    gameNumber: 'GAME 02',
    name: 'KABADDI',
    tagline: 'Raw grit, fearless raids & unbreakable team tackles',
    teamSize: '7 players + 1 substitute',
    playerCount: 8,
    substitutes: 1,
    description:
      'Strength, strategy, teamwork, and fearless raids. Enter the court and make every move count.',
    registrationButton: 'REGISTER FOR KABADDI',
    formUrl: 'https://forms.gle/s2Zmu8jrHfu7LaaB8',
    visualDirection:
      'Bold geometric shapes, athletic movement, court markings, and powerful visual accents',
    category: 'Combat & Tactics',
    vibe: 'High Contact',
    courtType: 'kabaddi',
    highlights: ['7 Starters + 1 Sub', 'Bonus & Baulk Lines', 'Raid Strategy', 'Defensive Chain Tackles'],
  },
  {
    id: 'tug-of-war',
    gameNumber: 'GAME 03',
    name: 'TUG OF WAR',
    tagline: 'Pure collective grit, friction & unstoppable rope pulling',
    teamSize: '7 players',
    playerCount: 7,
    description:
      'Seven players. One rope. One team. Discover who has the strength and coordination to pull through.',
    registrationButton: 'REGISTER FOR TUG OF WAR',
    formUrl: 'https://forms.gle/EBcFuepQ9Xow6d587',
    visualDirection:
      'Rope-inspired graphics, tension lines, opposing directional elements, and central composition',
    category: 'Power & Grit',
    vibe: 'Pure Tension',
    courtType: 'tugofwar',
    highlights: ['7 Players Squad', 'Center Marker Duel', 'Grip & Ground Stance', 'Synced Team Pulls'],
  },
  {
    id: 'dodge-ball',
    gameNumber: 'GAME 04',
    name: 'DODGE BALL',
    tagline: 'Split-second ducking, laser throws & tactical survival',
    teamSize: '9 players',
    playerCount: 9,
    specialRequirement: 'Minimum 1 female member',
    description:
      'Quick reflexes, sharp dodges, and smart teamwork. Stay in the game and outplay your opponents.',
    registrationButton: 'REGISTER FOR DODGE BALL',
    formUrl: 'https://forms.gle/8Ro6V9TJhN4Xvswf9',
    visualDirection:
      'Dynamic ball-inspired circles, motion trails, diagonal lines, and kinetic graphics',
    category: 'Reflex & Evasion',
    vibe: 'Rapid Fire',
    courtType: 'dodgeball',
    highlights: ['9 Active Players', 'Min. 1 Female Member', 'Cross-Court Throws', 'Catch-to-Revive Dynamics'],
  },
  {
    id: 'seven-stones',
    gameNumber: 'GAME 05',
    name: 'SEVEN STONES',
    tagline: 'The timeless classic — strike the stack, dodge, and reconstruct',
    teamSize: '7 players',
    playerCount: 7,
    specialRequirement: 'Minimum 1 female member',
    description:
      'A childhood classic returns. Knock down the stack, rebuild it, and race against the opposition.',
    registrationButton: 'REGISTER FOR SEVEN STONES',
    formUrl: 'https://forms.gle/STQ5DCMPFBC1RRP6',
    visualDirection:
      'Stacked stone-inspired shapes, hand-drawn playground graphics, and layered compositions',
    category: 'Precision & Legend',
    vibe: 'Nostalgic Masterclass',
    courtType: 'sevenstones',
    highlights: ['7 Players Squad', 'Min. 1 Female Member', 'Lagori / Pitthu Stack', 'Guard & Rebuild Race'],
  },
];
