import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Only run on desktop devices with hover support
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') !== null ||
          target.closest('a') !== null ||
          target.getAttribute('role') === 'button';
        setIsPointer(isClickable);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer ambient glow ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        <div
          className={`rounded-full transition-all duration-300 ${
            isPointer
              ? 'w-12 h-12 bg-[#C6FF4D]/15 border border-[#C6FF4D]/60 scale-125'
              : 'w-8 h-8 bg-[#00D084]/10 border border-[#00D084]/30'
          }`}
        />
      </div>

      {/* Tiny sharp center sports dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        <div
          className={`rounded-full transition-all duration-150 ${
            isPointer ? 'w-2 h-2 bg-[#C6FF4D]' : 'w-1.5 h-1.5 bg-[#00D084]'
          }`}
        />
      </div>
    </>
  );
};
