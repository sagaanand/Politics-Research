import React from 'react';
import { MapPin, Calendar, Target } from 'lucide-react';

export const ScopeSlide: React.FC = () => {
  const mainCategories = ['Votes', 'Candidates', 'Parties', 'Margins', 'Turnout', 'NOTA'];

  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white select-none">
      {/* Header */}
      <div>
        <div className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold tracking-widest uppercase text-[#0066CC] mb-2">
          Project Parameters
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1D1D1F]">
          A Focused Historical Research Scope
        </h2>
        <p className="mt-2 text-lg sm:text-xl text-[#4B5563] max-w-4xl">
          Definitive research boundary established strictly across geography, time, and polling-station granularity.
        </p>
      </div>

      {/* Dominant Visual Layout: 3 Scope Pillars + 6 Large Category Pills (65% of slide) */}
      <div className="my-auto py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: 3 Scope Bounds */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] flex items-center gap-5 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0066CC] flex items-center justify-center shrink-0">
                <MapPin className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#86868B]">
                  Constituency
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#1D1D1F]">
                  One Constituency
                </h3>
                <p className="text-sm text-[#6E6E73]">
                  Viralimalai (AC-179) strictly
                </p>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] flex items-center gap-5 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0066CC] flex items-center justify-center shrink-0">
                <Calendar className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#86868B]">
                  Elections Covered
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#1D1D1F]">
                  Three Election Years
                </h3>
                <p className="text-sm text-[#6E6E73]">
                  2016 · 2021 · 2026 Assembly cycles
                </p>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] flex items-center gap-5 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0066CC] flex items-center justify-center shrink-0">
                <Target className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#86868B]">
                  Unit of Analysis
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#1D1D1F]">
                  Polling-Station Level
                </h3>
                <p className="text-sm text-[#6E6E73]">
                  Booth-by-booth aggregate returns
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 6 Large Data Category Cards */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm flex flex-col justify-between">
            <div>
              <div className="pb-3 border-b border-[#E5E5EA] mb-6">
                <h3 className="text-base sm:text-lg font-bold text-[#1D1D1F]">
                  Core Electoral Research Categories
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {mainCategories.map((cat, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-[#E5E5EA] shadow-sm flex flex-col items-center justify-center text-center hover:border-[#0066CC]/50 transition-all group"
                  >
                    <span className="font-mono text-sm text-[#0066CC] font-bold">0{idx + 1}</span>
                    <span className="mt-2 text-lg sm:text-xl font-extrabold text-[#1D1D1F] group-hover:text-[#0066CC] transition-colors">
                      {cat}
                    </span>
                    <span className="mt-1 text-xs text-[#86868B]">Station Metric</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E5E5EA] text-xs text-[#86868B]">
              Aggregate polling-station research. Excludes voter-level profiling.
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
