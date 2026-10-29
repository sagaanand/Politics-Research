import React from 'react';
import { MapPin, Calendar, Target, Layers, AlertCircle } from 'lucide-react';

export const ScopeSlide: React.FC = () => {
  const mainCategories = ['Votes', 'Candidates', 'Parties', 'Margins', 'Turnout', 'NOTA'];

  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0066CC]">
            Parameters & Boundary
          </span>
          <span className="text-[#86868B] text-xs">/ Section 03</span>
        </div>
        <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F]">
          A Focused Research Scope
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#6E6E73]">
          Definitive boundaries established across geography, time, and analytical granularity.
        </p>
      </div>

      {/* Dominant Visual Layout (65% of slide) */}
      <div className="my-auto py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Column: 3 Scope Pillars */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="p-4 sm:p-5 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA] flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0066CC] flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-[#86868B]">
                  Geographic Boundary
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#1D1D1F]">
                  One Constituency
                </h3>
                <p className="text-xs text-[#6E6E73]">
                  Viralimalai (AC-179) · Exclusively
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA] flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0066CC] flex items-center justify-center shrink-0">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-[#86868B]">
                  Temporal Span
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#1D1D1F]">
                  Three Election Cycles
                </h3>
                <p className="text-xs text-[#6E6E73]">
                  2016 · 2021 · 2026 Assembly Elections
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA] flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0066CC] flex items-center justify-center shrink-0">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-[#86868B]">
                  Unit of Analysis
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#1D1D1F]">
                  Polling-Station Level
                </h3>
                <p className="text-xs text-[#6E6E73]">
                  Booth-by-booth aggregate returns
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Research Scope Diagram Visual */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between pb-3 border-b border-[#E5E5EA]">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#0066CC]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#1D1D1F]">
                  Core Electoral Research Categories
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-[#0066CC] border border-blue-200 font-semibold">
                6 Primary Categories
              </span>
            </div>

            {/* Central Visual Matrix with Pills */}
            <div className="my-6 py-4 flex flex-col items-center justify-center">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
                {mainCategories.map((cat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-[#E5E5EA] shadow-sm flex flex-col items-center justify-center text-center hover:border-[#0066CC]/50 transition-all group"
                  >
                    <span className="font-mono text-xs text-[#0066CC] font-bold">0{idx + 1}</span>
                    <span className="mt-1 text-sm font-bold text-[#1D1D1F] group-hover:text-[#0066CC] transition-colors">
                      {cat}
                    </span>
                    <span className="mt-0.5 text-[10px] text-[#86868B]">Station Level</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Limitation & Integrity Callout */}
            <div className="p-3 rounded-xl bg-white border border-[#E5E5EA] flex items-start gap-2.5 text-xs text-[#6E6E73]">
              <AlertCircle className="w-4 h-4 text-[#0066CC] shrink-0 mt-0.5" />
              <p>
                <strong>Integrity Standard:</strong> Scope covers aggregate official returns. Field availability depends on physical and digital gazettes retrieved during audit. No simulated data is used.
              </p>
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
