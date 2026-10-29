import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Printer,
  Grid,
  HelpCircle,
  X
} from 'lucide-react';
import { SlideCounter } from './SlideCounter';

interface NavigationControlsProps {
  currentIndex: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onToggleOverview: () => void;
  onToggleFullscreen: () => void;
  isFullscreen: boolean;
  onPrint: () => void;
}

export const NavigationControls: React.FC<NavigationControlsProps> = ({
  currentIndex,
  totalSlides,
  onPrev,
  onNext,
  onToggleOverview,
  onToggleFullscreen,
  isFullscreen,
  onPrint
}) => {
  const [showKeyboardHelp, setShowKeyboardHelp] = useState(false);

  return (
    <>
      {/* Keyboard Shortcuts Help Modal */}
      {showKeyboardHelp && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="keyboard-shortcuts-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4 animate-in fade-in duration-150"
          onClick={() => setShowKeyboardHelp(false)}
        >
          <div
            className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl border border-[#E5E5EA] text-[#1D1D1F]"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#E5E5EA]">
              <h3 id="keyboard-shortcuts-title" className="text-sm font-semibold tracking-wide text-[#1D1D1F]">
                Keyboard Shortcuts
              </h3>
              <button
                type="button"
                onClick={() => setShowKeyboardHelp(false)}
                className="text-[#86868B] hover:text-[#1D1D1F] p-1 rounded-md"
                aria-label="Close shortcuts guide"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-4 space-y-2.5 text-xs text-[#6E6E73]">
              <div className="flex items-center justify-between">
                <span>Next Slide</span>
                <span className="font-mono bg-[#F5F5F7] px-2 py-0.5 rounded border border-[#E5E5EA] text-[#1D1D1F]">
                  Right / Space
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Previous Slide</span>
                <span className="font-mono bg-[#F5F5F7] px-2 py-0.5 rounded border border-[#E5E5EA] text-[#1D1D1F]">
                  Left
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>First / Last Slide</span>
                <span className="font-mono bg-[#F5F5F7] px-2 py-0.5 rounded border border-[#E5E5EA] text-[#1D1D1F]">
                  Home / End
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Toggle Slide Grid</span>
                <span className="font-mono bg-[#F5F5F7] px-2 py-0.5 rounded border border-[#E5E5EA] text-[#1D1D1F]">
                  O
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Toggle Fullscreen</span>
                <span className="font-mono bg-[#F5F5F7] px-2 py-0.5 rounded border border-[#E5E5EA] text-[#1D1D1F]">
                  F
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Print / Save as PDF</span>
                <span className="font-mono bg-[#F5F5F7] px-2 py-0.5 rounded border border-[#E5E5EA] text-[#1D1D1F]">
                  ⌘P / Print Button
                </span>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-[#E5E5EA] text-center">
              <button
                type="button"
                onClick={() => setShowKeyboardHelp(false)}
                className="w-full text-xs font-medium py-1.5 bg-[#0066CC] text-white rounded-lg hover:bg-[#0077ED] transition-colors"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Bottom Navigation Pill */}
      <nav aria-label="Slide presentation navigation" className="presentation-nav fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-3 py-2 rounded-full border border-[#E5E5EA] shadow-keynote">
        {/* Previous Button */}
        <button
          type="button"
          onClick={onPrev}
          disabled={currentIndex === 0}
          className="p-1.5 rounded-full text-[#1D1D1F] hover:bg-[#F5F5F7] disabled:opacity-30 disabled:hover:bg-transparent transition-all"
          aria-label="Previous Slide"
          title="Previous slide (Left Arrow)"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Slide Counter */}
        <div className="px-1">
          <SlideCounter currentIndex={currentIndex} totalSlides={totalSlides} />
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={onNext}
          disabled={currentIndex === totalSlides - 1}
          className="p-1.5 rounded-full text-[#1D1D1F] hover:bg-[#F5F5F7] disabled:opacity-30 disabled:hover:bg-transparent transition-all"
          aria-label="Next Slide"
          title="Next slide (Right Arrow / Space)"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="h-4 w-[1px] bg-[#E5E5EA] mx-1" />

        {/* Slide Overview Grid */}
        <button
          type="button"
          onClick={onToggleOverview}
          className="p-1.5 rounded-full text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7] transition-all"
          aria-label="Slide Overview"
          title="Slide Overview (O)"
        >
          <Grid className="w-4 h-4" />
        </button>

        {/* Fullscreen Toggle */}
        <button
          type="button"
          onClick={onToggleFullscreen}
          className="p-1.5 rounded-full text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7] transition-all"
          aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
          title={isFullscreen ? 'Exit Fullscreen (F / Esc)' : 'Enter Fullscreen (F)'}
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>

        {/* Print / PDF Button */}
        <button
          type="button"
          onClick={onPrint}
          className="p-1.5 rounded-full text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7] transition-all"
          aria-label="Print or Save PDF"
          title="Print or Save as PDF (⌘P)"
        >
          <Printer className="w-4 h-4" />
        </button>

        {/* Keyboard Help */}
        <button
          type="button"
          onClick={() => setShowKeyboardHelp(true)}
          className="p-1.5 rounded-full text-[#86868B] hover:text-[#1D1D1F] hover:bg-[#F5F5F7] transition-all"
          aria-label="Shortcuts Help"
          title="Shortcuts Help"
        >
          <HelpCircle className="w-4 h-4" />
        </button>
      </nav>
    </>
  );
};
