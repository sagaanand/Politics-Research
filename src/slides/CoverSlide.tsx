import React from 'react';
import { ArrowRight, Layers, Sparkles } from 'lucide-react';
import { proposalMeta } from '../data/proposal';

interface CoverSlideProps {
  onNext?: () => void;
}

export const CoverSlide: React.FC<CoverSlideProps> = ({ onNext }) => {
  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-8 sm:p-12 md:p-16 lg:p-20 relative overflow-hidden bg-white select-none">
      {/* Visual Canvas Background: Abstract Electoral Coordinate Grid & Contour Field */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] overflow-hidden flex items-center justify-center">
        <svg viewBox="0 0 1200 800" className="w-full h-full text-[#0066CC]" fill="none" stroke="currentColor">
          <defs>
            <radialGradient id="radialGlow" cx="60%" cy="40%" r="50%">
              <stop offset="0%" stopColor="#0066CC" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0066CC" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* Coordinate grid lines */}
          {Array.from({ length: 25 }).map((_, i) => (
            <line key={`h-${i}`} x1="0" y1={i * 35} x2="1200" y2={i * 35} strokeWidth="1" strokeDasharray="3 6" />
          ))}
          {Array.from({ length: 35 }).map((_, i) => (
            <line key={`v-${i}`} x1={i * 35} y1="0" x2={i * 35} y2="800" strokeWidth="1" strokeDasharray="3 6" />
          ))}
          {/* Abstract constituency topological contours */}
          <path
            d="M200 400 C 400 200, 600 600, 800 350 S 1100 500, 1150 300"
            strokeWidth="2.5"
            stroke="currentColor"
            fill="none"
          />
          <path
            d="M150 480 C 350 280, 650 680, 850 420 S 1050 560, 1180 380"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
          />
          <circle cx="750" cy="380" r="160" fill="url(#radialGlow)" />
          {/* Key polling coordinate beacons */}
          <circle cx="320" cy="310" r="6" fill="#0066CC" />
          <circle cx="580" cy="480" r="5" fill="#0066CC" />
          <circle cx="820" cy="360" r="7" fill="#0066CC" />
          <circle cx="940" cy="440" r="5" fill="#0066CC" />
        </svg>
      </div>

      {/* Top Bar Metadata */}
      <div className="flex items-center justify-between z-10">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#F5F5F7] border border-[#E5E5EA]">
          <span className="w-2 h-2 rounded-full bg-[#0066CC] animate-pulse" />
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0066CC]">
            Research Proposal
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-[#86868B]">
          <Sparkles className="w-3.5 h-3.5 text-[#0066CC]" />
          <span>Institutional Research Series · 2026</span>
        </div>
      </div>

      {/* Central Hero Block (Visual + Typography) */}
      <div className="my-auto py-6 z-10 max-w-4xl">
        <div className="inline-block mb-3">
          <span className="text-sm font-semibold tracking-wider uppercase text-[#0066CC]">
            Assembly Constituency 179 · Tamil Nadu
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#1D1D1F] leading-[1.02]">
          Viralimalai<br />
          <span className="text-[#0066CC]">Constituency</span>
        </h1>

        <p className="mt-5 text-xl sm:text-2xl md:text-3xl font-light text-[#6E6E73] tracking-tight max-w-3xl">
          Historical Electoral Data Research & Analysis
        </p>

        {/* Minimal pill banner */}
        <div className="mt-8 flex flex-wrap items-center gap-3 text-sm font-medium">
          <div className="px-4 py-1.5 rounded-full bg-[#F5F5F7] border border-[#E5E5EA] text-[#1D1D1F]">
            Polling Station Mapping & Performance Analysis
          </div>
          <div className="px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0066CC] border border-blue-200 font-mono font-bold">
            {proposalMeta.coverageYearsFormatted}
          </div>
        </div>

        {/* Visual Highlights: 3 Clean Keynote Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
          <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#E5E5EA] shadow-sm flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066CC] flex items-center justify-center shrink-0 font-mono font-bold text-base">
              03
            </div>
            <div>
              <div className="text-xs font-bold text-[#1D1D1F]">Election Cycles</div>
              <div className="text-[11px] text-[#86868B]">2016 · 2021 · 2026</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#E5E5EA] shadow-sm flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066CC] flex items-center justify-center shrink-0">
              <Layers className="w-5 h-5 text-[#0066CC]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#1D1D1F]">Booth Granularity</div>
              <div className="text-[11px] text-[#86868B]">Station-level mapping</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#E5E5EA] shadow-sm flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066CC] flex items-center justify-center shrink-0 font-mono font-bold text-xs text-[#0066CC]">
              100%
            </div>
            <div>
              <div className="text-xs font-bold text-[#1D1D1F]">Source Traceability</div>
              <div className="text-[11px] text-[#86868B]">Document-backed verification</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer / Prepared By */}
      <div className="pt-6 border-t border-[#E5E5EA] flex flex-col sm:flex-row sm:items-end justify-between gap-4 z-10">
        <div>
          <div className="text-[11px] uppercase tracking-widest text-[#86868B] font-semibold">
            Prepared By
          </div>
          <div className="mt-1 text-base font-bold text-[#1D1D1F]">
            {proposalMeta.preparedBy}
          </div>
          <div className="text-xs text-[#6E6E73]">
            {proposalMeta.company}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <div className="text-xs text-[#86868B]">Presentation Format</div>
            <div className="text-xs font-mono text-[#6E6E73]">18 Slides · Visual First</div>
          </div>
          {onNext && (
            <button
              type="button"
              onClick={onNext}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1D1D1F] text-white hover:bg-[#0066CC] transition-all text-xs font-medium shadow-sm hover:shadow"
            >
              <span>Begin Presentation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
