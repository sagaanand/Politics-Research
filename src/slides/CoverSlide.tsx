import React from 'react';
import { ArrowRight, Layers, Database, ShieldCheck } from 'lucide-react';
import { proposalMeta } from '../data/proposal';

interface CoverSlideProps {
  onNext?: () => void;
}

export const CoverSlide: React.FC<CoverSlideProps> = ({ onNext }) => {
  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-8 sm:p-12 md:p-16 lg:p-20 relative overflow-hidden bg-white select-none">
      {/* Background Graphic */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.045] overflow-hidden flex items-center justify-center">
        <svg viewBox="0 0 1200 800" className="w-full h-full text-[#0066CC]" fill="none" stroke="currentColor">
          {Array.from({ length: 20 }).map((_, i) => (
            <line key={`h-${i}`} x1="0" y1={i * 40} x2="1200" y2={i * 40} strokeWidth="1" strokeDasharray="4 8" />
          ))}
          {Array.from({ length: 30 }).map((_, i) => (
            <line key={`v-${i}`} x1={i * 40} y1="0" x2={i * 40} y2="800" strokeWidth="1" strokeDasharray="4 8" />
          ))}
          <circle cx="850" cy="400" r="220" strokeWidth="2" />
          <circle cx="850" cy="400" r="140" strokeWidth="1.5" strokeDasharray="6 6" />
        </svg>
      </div>

      {/* Top Tag */}
      <div className="flex items-center justify-between z-10">
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#F5F5F7] border border-[#E5E5EA]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#0066CC] animate-pulse" />
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#0066CC]">
            Research Proposal
          </span>
        </div>
        <div className="font-mono text-xs sm:text-sm text-[#86868B] font-semibold">
          AC-179 · Tamil Nadu
        </div>
      </div>

      {/* Hero Typography */}
      <div className="my-auto py-6 z-10 max-w-5xl">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#1D1D1F] leading-[1.02]">
          Viralimalai<br />
          <span className="text-[#0066CC]">Constituency</span>
        </h1>

        <p className="mt-6 text-2xl sm:text-3xl md:text-4xl font-normal text-[#6E6E73] tracking-tight">
          Historical Electoral Data Research & Analysis
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3 text-base sm:text-lg font-medium text-[#1D1D1F]">
          <span>Polling Station Mapping & Performance Analysis</span>
          <span className="text-[#C7C7CC]">•</span>
          <span className="font-mono font-bold text-[#0066CC] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            {proposalMeta.coverageYearsFormatted}
          </span>
        </div>

        {/* 3 Large Highlight Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl">
          <div className="p-5 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0066CC] flex items-center justify-center shrink-0">
              <Database className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold text-[#1D1D1F]">3 Elections</div>
              <div className="text-xs sm:text-sm text-[#6E6E73]">2016 · 2021 · 2026</div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0066CC] flex items-center justify-center shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold text-[#1D1D1F]">Station Level</div>
              <div className="text-xs sm:text-sm text-[#6E6E73]">Booth-by-booth mapping</div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0066CC] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold text-[#1D1D1F]">Verified Data</div>
              <div className="text-xs sm:text-sm text-[#6E6E73]">Document-backed sources</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-6 border-t border-[#E5E5EA] flex flex-col sm:flex-row sm:items-end justify-between gap-4 z-10">
        <div>
          <div className="text-xs uppercase tracking-widest text-[#86868B] font-bold">
            Prepared By
          </div>
          <div className="mt-1 text-xl sm:text-2xl font-extrabold text-[#1D1D1F]">
            {proposalMeta.preparedBy}
          </div>
          <div className="text-sm font-medium text-[#6E6E73]">
            {proposalMeta.company}
          </div>
        </div>

        {onNext && (
          <button
            type="button"
            onClick={onNext}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#1D1D1F] text-white hover:bg-[#0066CC] transition-all text-sm font-bold shadow-md hover:shadow-lg"
          >
            <span>Begin Presentation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
