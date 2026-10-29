import React from 'react';
import { Database, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ExecutiveSummarySlide: React.FC = () => {
  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0066CC]">
            Executive Summary
          </span>
          <span className="text-[#86868B] text-xs">/ Section 01</span>
        </div>
        <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F]">
          Three Elections. One Research Framework.
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#6E6E73] max-w-3xl">
          Consolidate, verify, map, and analyse historical polling-station-level electoral data for Viralimalai Constituency.
        </p>
      </div>

      {/* Dominant Visual: 3-Year Flow into Unified Dataset Diagram (65% of slide) */}
      <div className="my-auto py-4 w-full">
        <div className="p-6 sm:p-8 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left 3 Election Cards (converging inputs) */}
            <div className="lg:col-span-5 space-y-3.5">
              {/* 2016 Card */}
              <div className="p-4 rounded-2xl bg-white border border-[#E5E5EA] shadow-sm hover:border-[#0066CC]/40 transition-all flex items-center justify-between group">
                <div className="flex items-center gap-3.5">
                  <span className="font-mono text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight group-hover:text-[#0066CC] transition-colors">
                    2016
                  </span>
                  <div>
                    <div className="text-xs font-bold text-[#1D1D1F]">General Election</div>
                    <div className="text-[11px] text-[#6E6E73]">Baseline station records & Form 20s</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F5F5F7] text-[#6E6E73] border border-[#E5E5EA]">
                  Cycle 1
                </span>
              </div>

              {/* 2021 Card */}
              <div className="p-4 rounded-2xl bg-white border border-[#E5E5EA] shadow-sm hover:border-[#0066CC]/40 transition-all flex items-center justify-between group">
                <div className="flex items-center gap-3.5">
                  <span className="font-mono text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight group-hover:text-[#0066CC] transition-colors">
                    2021
                  </span>
                  <div>
                    <div className="text-xs font-bold text-[#1D1D1F]">General Election</div>
                    <div className="text-[11px] text-[#6E6E73]">Renumbered booths & auxiliary stations</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F5F5F7] text-[#6E6E73] border border-[#E5E5EA]">
                  Cycle 2
                </span>
              </div>

              {/* 2026 Card */}
              <div className="p-4 rounded-2xl bg-white border border-[#0066CC]/30 bg-blue-50/20 shadow-sm flex items-center justify-between group">
                <div className="flex items-center gap-3.5">
                  <span className="font-mono text-2xl sm:text-3xl font-extrabold text-[#0066CC] tracking-tight">
                    2026
                  </span>
                  <div>
                    <div className="text-xs font-bold text-[#1D1D1F]">Upcoming Election</div>
                    <div className="text-[11px] text-[#6E6E73]">Reconciled station gazettes & final rolls</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-[#0066CC] border border-blue-200 font-semibold">
                  Target
                </span>
              </div>
            </div>

            {/* Middle Connecting Arrow Column */}
            <div className="hidden lg:flex lg:col-span-2 flex-col items-center justify-center gap-2">
              <div className="h-10 w-[2px] bg-gradient-to-b from-transparent via-[#0066CC]/40 to-[#0066CC]" />
              <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0066CC] shadow-sm">
                <ArrowRight className="w-5 h-5" />
              </div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#0066CC] font-bold">
                Harmonise
              </span>
              <div className="h-10 w-[2px] bg-gradient-to-b from-[#0066CC] via-[#0066CC]/40 to-transparent" />
            </div>

            {/* Right Destination: Unified Master Dataset Visual (Cylinder / Hub) */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-white border border-[#E5E5EA] shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#E5E5EA]">
                  <div className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-[#0066CC]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1D1D1F]">
                      Unified Master Dataset
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                    1 Source of Truth
                  </span>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#1D1D1F]">
                    <CheckCircle2 className="w-4 h-4 text-[#0066CC] shrink-0" />
                    <span>Station-level concordance across all 3 election years</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#1D1D1F]">
                    <CheckCircle2 className="w-4 h-4 text-[#0066CC] shrink-0" />
                    <span>Candidate vote shares, margins, NOTA, and turnout</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#1D1D1F]">
                    <CheckCircle2 className="w-4 h-4 text-[#0066CC] shrink-0" />
                    <span>Transparent source citations and verification logs</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#1D1D1F]">
                    <CheckCircle2 className="w-4 h-4 text-[#0066CC] shrink-0" />
                    <span>Documented discrepancy and missing-record register</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#F0F0F2] flex items-center justify-between text-[11px] text-[#86868B]">
                <span>Viralimalai Assembly Constituency</span>
                <span className="font-mono text-[#0066CC] font-semibold">Booth-Level Research</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-[#E5E5EA] flex items-center justify-between text-xs text-[#86868B]">
        <span>Viralimalai Constituency Electoral Research Proposal</span>
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-[#0066CC]" /> Research Scope Framework
        </span>
      </div>
    </div>
  );
};
