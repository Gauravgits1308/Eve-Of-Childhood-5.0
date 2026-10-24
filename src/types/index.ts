export interface Game {
  id: string;
  gameNumber: string;
  name: string;
  tagline: string;
  teamSize: string;
  playerCount: number;
  substitutes?: number;
  specialRequirement?: string;
  description: string;
  registrationButton: string;
  formUrl: string;
  visualDirection: string;
  category: string;
  vibe: string;
  highlights: string[];
  courtType: 'khokho' | 'kabaddi' | 'tugofwar' | 'dodgeball' | 'sevenstones';
}

export interface EventInfo {
  name: string;
  edition: string;
  organizer: string;
  organizerFull: string;
  dateFormatted: string;
  timeFormatted: string;
  duration: string;
  venueDisplay?: string;
  targetDateISO: string; // '2026-10-25T09:00:00+05:30'
  primaryHeadline: string;
  supportingHeadline: string;
  heroDescription: string;
  coreConcept: string;
  nostalgiaHeading: string;
  nostalgiaText: string;
  finalCtaHeading: string;
  finalCtaCopy: string;
  tagline: string;
}
