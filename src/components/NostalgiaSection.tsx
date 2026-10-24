import React from 'react';
import { Sparkles, HeartHandshake, Zap, Flame, Award } from 'lucide-react';

export const NostalgiaSection: React.FC = () => {
  const nostalgiaCards = [
    {
      icon: Flame,
      title: 'Scraped Knees & Golden Hours',
      description:
        'When the only deadline was the streetlights turning on, and winning meant bragging rights until next recess.',
      tag: 'Untamed Energy',
    },
    {
      icon: Zap,
      title: 'Zero Screens. 100% Adrenaline.',
      description:
        'No notifications, no algorithms. Just the sound of rubber shoes skidding on red dirt and teammates shouting your name.',
      tag: 'Raw Play',
    },
    {
      icon: HeartHandshake,
      title: 'Unbreakable Squad Camaraderie',
      description:
        'Huddling up for that desperate final raid or holding the tug rope with your entire team breathing as one.',
      tag: 'True Teamwork',
    },
    {
      icon: Award,
      title: 'The Great Playground Comeback',
      description:
        'College routines have kept you at desks and laptops. Now step onto the field and claim your playground back.',
      tag: 'Your Turn',
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#061711] overflow-hidden">
      {/* Playful Chalk Doodles / Grid Background */}
      <div className="absolute inset-0 bg-sports-grid opacity-25 pointer-events-none" />
      
      {/* Warm Ambient Glows */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#FFD166]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#00D084]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Nostalgia Narrative Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B2D22] border border-[#00D084]/30 text-[#C6FF4D] text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#C6FF4D]" />
            <span>THE SPIRIT OF EVE OF CHILDHOOD</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-[#F7FAF8] tracking-tight uppercase leading-[1.05] mb-8">
            REMEMBER WHEN THE PLAYGROUND WAS <span className="text-gradient-lime">EVERYTHING?</span>
          </h2>

          {/* Nostalgia Prose from Specifications */}
          <div className="space-y-4 text-base sm:text-lg md:text-xl text-[#A8B8AF] font-normal leading-relaxed max-w-3xl mx-auto bg-[#071A14]/70 p-6 sm:p-8 rounded-3xl border border-[#00D084]/20 shadow-xl">
            <p>
              Before notifications, deadlines, and endless scrolling, there were dusty playgrounds, loud cheers, friendly rivalries, and memories that lasted forever.
            </p>
            <p className="text-[#F7FAF8] font-bold text-lg sm:text-2xl font-heading text-gradient-green">
              This October, we're bringing that feeling back.
            </p>
            <p className="font-medium text-[#C6FF4D]">
              Five games. One morning. Countless memories.
            </p>
          </div>
        </div>

        {/* Nostalgia Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {nostalgiaCards.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative glass-panel rounded-3xl p-6 sm:p-7 border border-[#00D084]/20 hover:border-[#C6FF4D]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#00D084]/10 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#0B2D22] border border-[#00D084]/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#C6FF4D] group-hover:text-[#071A14] text-[#C6FF4D] transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-widest text-[#00D084] mb-2">
                    {item.tag}
                  </span>

                  <h3 className="font-heading font-black text-xl text-[#F7FAF8] mb-3 group-hover:text-[#C6FF4D] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A8B8AF] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Chalk underline doodle */}
                <div className="mt-6 pt-4 border-t border-[#00D084]/15 flex items-center justify-between text-[11px] font-mono text-[#A8B8AF]">
                  <span>MEMORIES #0{index + 1}</span>
                  <span className="w-2 h-2 rounded-full bg-[#00D084]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Nostalgic Fest Quote Banner */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-[#0B2D22] via-[#0E3A2C] to-[#0B2D22] border border-[#00D084]/30 p-8 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-3">
            <div className="font-mono text-xs uppercase tracking-widest text-[#C6FF4D] font-bold">
              THE COMEBACK PHILOSOPHY
            </div>
            <div className="font-heading font-black text-2xl sm:text-3xl text-[#F7FAF8]">
              "You don't stop playing because you grow old. You grow old because you stop playing."
            </div>
            <div className="text-xs text-[#A8B8AF]">
              Eve of Childhood 5.0 · Fit India Club Flagship Celebration
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
