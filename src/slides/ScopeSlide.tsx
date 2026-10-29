import React from 'react';
import { Calendar, MapPin, Target, FileText, AlertTriangle } from 'lucide-react';

export const ScopeSlide: React.FC = () => {
  const researchCategories = [
    'Polling-station identifiers and names',
    'Candidate names and party affiliations',
    'Candidate-wise votes polled',
    'Total votes polled (where supported by source definitions)',
    'Candidate vote share percentage',
    'Winning and losing margin performance',
    'Polling-station-level victory margins',
    'Party performance comparisons across years',
    'Electoral turnout metrics',
    'NOTA and other recorded voting statistics',
    'Polling-station cross-year mapping & changes',
    'Data completeness & source verification audit'
  ];

  return (
    <div className="flex-1 w-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0066CC]">
            Parameters & Boundary
          </span>
          <span className="text-[#86868B] text-xs">/ Section 03</span>
        </div>
        <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1D1D1F]">
          A Defined Three-Election Research Scope
        </h2>
      </div>

      {/* Main Grid: Left Scope Pillars, Right Research Categories */}
      <div className="my-auto py-4 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Scope Bounds */}
        <div className="lg:col-span-4 space-y-3">
          <div className="p-4 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA]">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase text-[#0066CC]">
              <Calendar className="w-4 h-4" />
              <span>Election Cycles</span>
            </div>
            <div className="mt-2 flex gap-2">
              <span className="px-2.5 py-1 rounded-md bg-white border border-[#E5E5EA] font-mono text-xs font-semibold text-[#1D1D1F]">
                2016
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white border border-[#E5E5EA] font-mono text-xs font-semibold text-[#1D1D1F]">
                2021
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white border border-[#E5E5EA] font-mono text-xs font-semibold text-[#1D1D1F]">
                2026
              </span>
            </div>
            <p className="mt-2 text-[11px] text-[#6E6E73]">
              Three general election cycles for Tamil Nadu Legislative Assembly.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA]">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase text-[#1D1D1F]">
              <MapPin className="w-4 h-4 text-[#0066CC]" />
              <span>Geographic Boundary</span>
            </div>
            <div className="mt-1 text-sm font-semibold text-[#1D1D1F]">
              Viralimalai Assembly Constituency Only
            </div>
            <p className="mt-1 text-[11px] text-[#6E6E73]">
              Strictly confined to AC-179. No adjacent constituencies or external jurisdictions.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA]">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase text-[#1D1D1F]">
              <Target className="w-4 h-4 text-[#0066CC]" />
              <span>Unit of Analysis</span>
            </div>
            <div className="mt-1 text-sm font-semibold text-[#1D1D1F]">
              Polling Station (Booth Level)
            </div>
            <p className="mt-1 text-[11px] text-[#6E6E73]">
              Aggregate polling-station records. Excludes individual voter profiling.
            </p>
          </div>
        </div>

        {/* Right Column: 12 Research Categories */}
        <div className="lg:col-span-8 bg-[#FBFBFD] rounded-2xl p-5 border border-[#E5E5EA]">
          <div className="flex items-center justify-between pb-3 border-b border-[#E5E5EA]">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#0066CC]" />
              <h3 className="text-xs font-semibold tracking-wider uppercase text-[#1D1D1F]">
                Electoral Research Fields & Categories
              </h3>
            </div>
            <span className="text-[10px] font-mono text-[#86868B]">12 Core Categories</span>
          </div>

          <div className="mt-3.5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#1D1D1F]">
            {researchCategories.map((cat, i) => (
              <div
                key={i}
                className="flex items-center gap-2 p-2 rounded-lg bg-white border border-[#E5E5EA]/70 hover:border-[#0066CC]/30 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066CC] shrink-0" />
                <span className="text-xs font-medium text-[#1D1D1F] leading-snug">{cat}</span>
              </div>
            ))}
          </div>

          {/* Limitation Note */}
          <div className="mt-4 p-3 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-2.5 text-[11px] text-amber-900 leading-relaxed">
            <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <span>
              <strong>Source-Dependent Availability Note:</strong> Actual field availability, completeness, and source formats will determine which fields can be verified for each election year. This proposal does not represent that every historical data field is already in hand.
            </span>
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
