import React from 'react';
import { Database, ArrowRight, CheckCircle2 } from 'lucide-react';

export const ProjectOverviewSlide: React.FC = () => {
  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white select-none">
      {/* Header */}
      <div>
        <div className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold tracking-widest uppercase text-[#0066CC] mb-2">
          Research Framework
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1D1D1F]">
          Three Elections. One Research Framework.
        </h2>
        <p className="mt-2 text-lg sm:text-xl text-[#4B5563] max-w-4xl">
          Consolidate, verify, map, and analyse historical polling-station-level electoral data for Viralimalai Constituency.
        </p>
      </div>

      {/* Dominant Visual: 3-Year Flow into Unified Dataset Diagram (65% of slide) */}
      <div className="my-auto py-4 w-full">
        <div className="p-8 sm:p-10 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left 3 Election Cards (converging inputs) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-5 rounded-2xl bg-white border border-[#E5E5EA] shadow-sm flex items-center justify-between group hover:border-[#0066CC]/40 transition-all">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-3xl sm:text-4xl font-extrabold text-[#1D1D1F] tracking-tight group-hover:text-[#0066CC] transition-colors">
                    2016
                  </span>
                  <div>
                    <div className="text-base font-bold text-[#1D1D1F]">General Election</div>
                    <div className="text-xs sm:text-sm text-[#6E6E73]">Baseline station records & Form 20 returns</div>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#E5E5EA] shadow-sm flex items-center justify-between group hover:border-[#0066CC]/40 transition-all">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-3xl sm:text-4xl font-extrabold text-[#1D1D1F] tracking-tight group-hover:text-[#0066CC] transition-colors">
                    2021
                  </span>
                  <div>
                    <div className="text-base font-bold text-[#1D1D1F]">General Election</div>
                    <div className="text-xs sm:text-sm text-[#6E6E73]">Renumbered booths & auxiliary stations</div>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border-2 border-[#0066CC]/40 bg-blue-50/20 shadow-sm flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-3xl sm:text-4xl font-extrabold text-[#0066CC] tracking-tight">
                    2026
                  </span>
                  <div>
                    <div className="text-base font-bold text-[#1D1D1F]">Target Election</div>
                    <div className="text-xs sm:text-sm text-[#6E6E73]">Reconciled station gazettes & final rolls</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Connecting Arrow Column */}
            <div className="hidden lg:flex lg:col-span-2 flex-col items-center justify-center gap-2">
              <div className="h-12 w-[2px] bg-gradient-to-b from-transparent via-[#0066CC]/40 to-[#0066CC]" />
              <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0066CC] shadow-md">
                <ArrowRight className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase font-mono tracking-wider text-[#0066CC] font-bold">
                Harmonise
              </span>
              <div className="h-12 w-[2px] bg-gradient-to-b from-[#0066CC] via-[#0066CC]/40 to-transparent" />
            </div>

            {/* Right Destination: Unified Master Dataset Visual */}
            <div className="lg:col-span-5 p-7 rounded-3xl bg-white border border-[#E5E5EA] shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#E5E5EA]">
                  <div className="flex items-center gap-2.5">
                    <Database className="w-6 h-6 text-[#0066CC]" />
                    <span className="text-base font-bold text-[#1D1D1F]">
                      Unified Master Dataset
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Single Truth
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#1D1D1F]">
                    <CheckCircle2 className="w-4 h-4 text-[#0066CC] shrink-0" />
                    <span>Station-level concordance across all 3 election years</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#1D1D1F]">
                    <CheckCircle2 className="w-4 h-4 text-[#0066CC] shrink-0" />
                    <span>Candidate vote shares, margins, NOTA, and turnout</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#1D1D1F]">
                    <CheckCircle2 className="w-4 h-4 text-[#0066CC] shrink-0" />
                    <span>Transparent source citations and verification logs</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#1D1D1F]">
                    <CheckCircle2 className="w-4 h-4 text-[#0066CC] shrink-0" />
                    <span>Documented discrepancy and missing-record register</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0F0F2] flex items-center justify-between text-xs text-[#86868B]">
                <span>Viralimalai Assembly Constituency</span>
                <span className="font-mono text-[#0066CC] font-bold">Booth-Level Granularity</span>
              </div>
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
