import React from 'react';
import { X, Sparkles, ExternalLink } from 'lucide-react';

interface PosterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PosterModal: React.FC<PosterModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative max-w-lg w-full bg-[#071A14] rounded-3xl border border-[#00D084]/40 shadow-2xl p-6 overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#00D084]/20">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#C6FF4D]" />
            <h3 className="font-heading font-black text-lg text-[#F7FAF8]">
              OFFICIAL EVENT ARTWORK
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-[#0B2D22] text-[#A8B8AF] hover:text-[#F7FAF8] hover:bg-[#134B3A] transition-colors"
            aria-label="Close poster view"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Poster Image */}
        <div className="my-4 rounded-2xl overflow-hidden border border-[#00D084]/30 max-h-[70vh] flex items-center justify-center bg-black/40">
          <img
            src="/eoc_links_image.png"
            alt="Eve of Childhood 5.0 Official Artwork"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Footer info */}
        <div className="pt-2 flex items-center justify-between text-xs text-[#A8B8AF]">
          <span>Sunday, 25 October 2026 · FIC</span>
          <a
            href="/eoc_links_image.png"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[#C6FF4D] font-bold hover:underline"
          >
            <span>Open High-Res</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
