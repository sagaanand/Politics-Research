import React from 'react';
import { ArrowRight, FileSpreadsheet, GitMerge, ShieldCheck } from 'lucide-react';
import { proposalMeta } from '../data/proposal';

interface CoverSlideProps {
  onNext?: () => void;
}

export const CoverSlide: React.FC<CoverSlideProps> = ({ onNext }) => {
  return (
    <div className="flex-1 w-full flex flex-col justify-between p-8 sm:p-12 md:p-16 lg:p-20 relative overflow-hidden bg-white">
      {/* Restrained abstract data-grid motif in background */}
      <div className="absolute top-0 right-0 w-2/5 h-full opacity-[0.035] pointer-events-none flex items-center justify-center">
        <svg viewBox="0 0 400 400" className="w-full h-full text-[#0066CC]" fill="currentColor">
          <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect width="39" height="39" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="20" cy="20" r="1.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* Top Header */}
      <div className="flex items-center justify-between z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F5F7] border border-[#E5E5EA]">
          <span className="w-2 h-2 rounded-full bg-[#0066CC]" />
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0066CC]">
            Research Proposal
          </span>
        </div>
        <div className="text-xs font-mono text-[#86868B] tracking-wide">
          Ref: CK-RES-2026-VRM
        </div>
      </div>

      {/* Central Content with generous whitespace and Apple Keynote typography */}
      <div className="my-auto py-8 z-10 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#1D1D1F] leading-[1.08]">
          Viralimalai Constituency
        </h1>
        <p className="mt-4 sm:mt-5 text-xl sm:text-2xl md:text-3xl font-light text-[#6E6E73] tracking-tight">
          Historical Electoral Data Research & Analysis
        </p>

        <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 text-sm sm:text-base font-medium text-[#1D1D1F]">
          <span className="text-[#0066CC]">Polling Station Mapping & Performance Analysis</span>
          <span className="text-[#C7C7CC]">•</span>
          <span className="font-mono text-[#6E6E73] bg-[#F5F5F7] px-2.5 py-0.5 rounded border border-[#E5E5EA]">
            {proposalMeta.coverageYearsFormatted}
          </span>
          <span className="text-[#C7C7CC]">•</span>
          <span className="text-[#6E6E73]">Tamil Nadu Legislative Assembly</span>
        </div>

        {/* 3 Core Scope Badges */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
          <div className="p-4 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA] flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-50 text-[#0066CC]">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-[#86868B] uppercase tracking-wider font-medium">Dataset Scope</div>
              <div className="text-sm font-semibold text-[#1D1D1F]">3 General Elections</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA] flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-50 text-[#0066CC]">
              <GitMerge className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-[#86868B] uppercase tracking-wider font-medium">Granularity</div>
              <div className="text-sm font-semibold text-[#1D1D1F]">Polling-Station Level</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA] flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-50 text-[#0066CC]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-[#86868B] uppercase tracking-wider font-medium">Methodology</div>
              <div className="text-sm font-semibold text-[#1D1D1F]">Multi-Source Verification</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer / Prepared By */}
      <div className="pt-6 sm:pt-8 border-t border-[#E5E5EA] flex flex-col sm:flex-row sm:items-end justify-between gap-4 z-10">
        <div>
          <div className="text-xs uppercase tracking-widest text-[#86868B] font-medium">
            Prepared By
          </div>
          <div className="mt-1 text-base font-semibold text-[#1D1D1F]">
            {proposalMeta.preparedBy}
          </div>
          <div className="text-xs text-[#6E6E73] font-medium">
            {proposalMeta.company}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <div className="text-xs text-[#86868B]">Presentation Deck</div>
            <div className="text-xs font-mono text-[#6E6E73]">18 Slides · Confidential</div>
          </div>
          {onNext && (
            <button
              type="button"
              onClick={onNext}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1D1D1F] text-white hover:bg-[#0066CC] transition-colors text-xs font-medium"
            >
              Begin Presentation
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
