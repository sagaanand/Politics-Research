import React from 'react';
import { X, Layers } from 'lucide-react';
import { slideList, SlideMetadata } from '../data/proposal';

interface SlideOverviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentIndex: number;
  onSelectSlide: (index: number) => void;
}

export const SlideOverviewModal: React.FC<SlideOverviewModalProps> = ({
  isOpen,
  onClose,
  currentIndex,
  onSelectSlide
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="slide-navigator-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md p-4 sm:p-6 md:p-8 slide-overview-modal"
      onClick={onClose}
    >
      <div
        className="bg-white/95 rounded-2xl w-full max-w-5xl max-h-[85vh] flex flex-col shadow-2xl border border-[#E5E5EA] overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E5EA]">
          <div className="flex items-center gap-2.5">
            <Layers className="w-5 h-5 text-[#0066CC]" />
            <h2 id="slide-navigator-title" className="text-base font-semibold text-[#1D1D1F]">
              Slide Navigator
            </h2>
            <span className="text-xs text-[#86868B] font-mono">18 Slides</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7] transition-colors"
            aria-label="Close Slide Navigator"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Grid of Slides */}
        <div className="flex-1 overflow-y-auto p-6 keynote-scroll">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {slideList.map((slide: SlideMetadata, idx: number) => {
              const isCurrent = idx === currentIndex;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => {
                    onSelectSlide(idx);
                    onClose();
                  }}
                  className={`group text-left p-3.5 rounded-xl border transition-all duration-150 flex flex-col justify-between aspect-[16/10] relative ${
                    isCurrent
                      ? 'border-[#0066CC] ring-2 ring-[#0066CC]/20 bg-blue-50/30'
                      : 'border-[#E5E5EA] bg-white hover:border-[#C7C7CC] hover:bg-[#F5F5F7]/50 shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span
                      className={`font-mono text-xs font-semibold ${
                        isCurrent ? 'text-[#0066CC]' : 'text-[#86868B]'
                      }`}
                    >
                      {String(slide.id).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider font-medium px-1.5 py-0.5 rounded bg-[#F5F5F7] text-[#6E6E73] border border-[#E5E5EA]/60">
                      {slide.category}
                    </span>
                  </div>

                  <div className="mt-2">
                    <h3 className="text-xs font-medium text-[#1D1D1F] leading-snug line-clamp-2 group-hover:text-[#0066CC] transition-colors">
                      {slide.title}
                    </h3>
                  </div>

                  <div className="w-full mt-2 pt-2 border-t border-[#F0F0F2] flex items-center justify-between text-[10px] text-[#86868B]">
                    <span>Slide {slide.id}</span>
                    {isCurrent && (
                      <span className="text-[#0066CC] font-medium flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0066CC]" /> Active
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-[#E5E5EA] bg-[#FBFBFD] flex items-center justify-between text-xs text-[#86868B]">
          <span>Tip: Press <kbd className="font-mono bg-white px-1.5 py-0.5 rounded border border-[#E5E5EA] text-[#1D1D1F]">O</kbd> anywhere to toggle this view</span>
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-medium text-[#1D1D1F] hover:text-[#0066CC]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
