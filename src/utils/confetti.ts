import confetti from 'canvas-confetti';

export const triggerRegistrationCelebration = () => {
  try {
    // Left burst
    confetti({
      particleCount: 40,
      angle: 60,
      spread: 55,
      origin: { x: 0.1, y: 0.8 },
      colors: ['#00D084', '#C6FF4D', '#F7FAF8', '#FFD166'],
      disableForReducedMotion: true,
    });
    // Right burst
    confetti({
      particleCount: 40,
      angle: 120,
      spread: 55,
      origin: { x: 0.9, y: 0.8 },
      colors: ['#00D084', '#C6FF4D', '#F7FAF8', '#FFD166'],
      disableForReducedMotion: true,
    });
  } catch {
    // gracefully ignore if canvas or environment unsupported
  }
};

export const triggerSelectCelebration = () => {
  try {
    confetti({
      particleCount: 25,
      spread: 45,
      origin: { y: 0.7 },
      colors: ['#00D084', '#C6FF4D', '#FFFFFF'],
      disableForReducedMotion: true,
    });
  } catch {
    // gracefully ignore
  }
};
