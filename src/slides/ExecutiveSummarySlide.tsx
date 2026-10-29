import React from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export const ExecutiveSummarySlide: React.FC = () => {
  return (
    <div className="flex-1 w-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0066CC]">
            Executive Summary
          </span>
          <span className="text-[#86868B] text-xs">/ Section 01</span>
        </div>
        <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1D1D1F]">
          Building a Reliable Historical Electoral Dataset
        </h2>
      </div>

      {/* Main Grid */}
      <div className="my-auto py-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Narrative & Scope */}
        <div className="lg:col-span-7 space-y-4">
          <p className="text-sm sm:text-base text-[#1D1D1F] leading-relaxed font-normal">
            The proposed engagement will consolidate, verify, map, and analyse historical electoral information for <strong>Viralimalai Assembly Constituency</strong> across the <strong>2016, 2021, and 2026</strong> election years.
          </p>
          <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed">
            The work will focus on polling-station-level records, candidate and party performance, turnout, electoral margins, station-level comparisons, and changes in polling-station identifiers or boundaries where supporting records are available.
          </p>
          <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed">
            The final engagement will deliver a structured dataset, documented research sources, verification records, historical comparisons, and a professional analytical report.
          </p>

          {/* 3 Visual Scope Metrics */}
          <div className="pt-4 grid grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA]">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-[#0066CC]">3</div>
              <div className="text-[11px] font-semibold text-[#1D1D1F] mt-1">Election Years</div>
              <div className="text-[10px] text-[#86868B]">2016 · 2021 · 2026</div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA]">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-[#1D1D1F]">1</div>
              <div className="text-[11px] font-semibold text-[#1D1D1F] mt-1">Constituency</div>
              <div className="text-[10px] text-[#86868B]">Viralimalai (AC-179)</div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA]">
              <div className="text-lg sm:text-xl font-bold text-[#1D1D1F] leading-tight">Station</div>
              <div className="text-[11px] font-semibold text-[#1D1D1F] mt-1">Level Research</div>
              <div className="text-[10px] text-[#86868B]">Booth-by-booth mapping</div>
            </div>
          </div>
          <div className="text-[11px] text-[#86868B] flex items-center gap-1.5 italic">
            <AlertCircle className="w-3.5 h-3.5 text-[#86868B]" />
            Metrics represent defined research scope parameters, not completed analytical results.
          </div>
        </div>

        {/* Key Objectives Checklist Card */}
        <div className="lg:col-span-5 bg-[#FBFBFD] rounded-2xl p-5 sm:p-6 border border-[#E5E5EA] space-y-3.5 shadow-sm">
          <h3 className="text-xs font-semibold tracking-wider uppercase text-[#6E6E73]">
            Key Engagement Objectives
          </h3>

          <div className="space-y-2.5 text-xs text-[#1D1D1F]">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#0066CC] shrink-0 mt-0.5" />
              <span>Consolidate available historical electoral records from official and gazetted sources.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#0066CC] shrink-0 mt-0.5" />
              <span>Recover missing information through credible alternative secondary sources.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#0066CC] shrink-0 mt-0.5" />
              <span>Verify important figures against authoritative records using multi-tier checks.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#0066CC] shrink-0 mt-0.5" />
              <span>Map polling stations across election years documenting renaming, splits, and mergers.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#0066CC] shrink-0 mt-0.5" />
              <span>Produce transparent, evidence-backed findings and comparative summaries.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#0066CC] shrink-0 mt-0.5" />
              <span>Document unresolved discrepancies and data availability limitations clearly.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-[#E5E5EA] flex items-center justify-between text-xs text-[#86868B]">
        <span>Viralimalai Constituency Electoral Research Proposal</span>
        <span>Ctrl Alt Kick Ad Tech Solutions Pvt Ltd</span>
      </div>
    </div>
  );
};
