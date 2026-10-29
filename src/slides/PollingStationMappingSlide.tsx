import React from 'react';
import { GitCommit, ArrowRight, AlertTriangle } from 'lucide-react';

export const PollingStationMappingSlide: React.FC = () => {
  const legendItems = [
    { label: 'Matched', badgeClass: 'bg-emerald-50 text-emerald-800 border-emerald-300' },
    { label: 'Changed Identifiers / Names', badgeClass: 'bg-blue-50 text-blue-800 border-blue-300' },
    { label: 'Unmatched Stations', badgeClass: 'bg-purple-50 text-purple-800 border-purple-300' },
    { label: 'Requires Verification', badgeClass: 'bg-amber-50 text-amber-900 border-amber-300' }
  ];

  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white select-none">
      {/* Header */}
      <div>
        <div className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold tracking-widest uppercase text-[#0066CC] mb-2">
          Station Continuity
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1D1D1F]">
          Track Station Changes Across Elections
        </h2>
        <p className="mt-2 text-lg sm:text-xl text-[#4B5563] max-w-4xl">
          Tracing polling booths across three election cycles to account for renumbering, school reconstructions, and auxiliary splits.
        </p>
      </div>

      {/* Dominant Visual: 3-Column Mapping Visual Flow (65% of slide) */}
      <div className="my-auto py-4 w-full">
        <div className="p-8 sm:p-10 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm">
          {/* Top Column Labels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5">
            <div className="pb-3 border-b-2 border-[#1D1D1F]">
              <span className="font-mono text-base font-extrabold text-[#1D1D1F]">2016 Station Baseline</span>
            </div>
            <div className="pb-3 border-b-2 border-[#0066CC]">
              <span className="font-mono text-base font-extrabold text-[#0066CC]">2021 Station Concordance</span>
            </div>
            <div className="pb-3 border-b-2 border-[#E5E5EA]">
              <span className="font-mono text-base font-extrabold text-[#6E6E73]">2026 Target Roll</span>
            </div>
          </div>

          {/* 3-Column Connected Mapping Rows */}
          <div className="space-y-4">
            {/* Case 1: Matched continuity */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center p-4 rounded-2xl bg-white border border-[#E5E5EA] shadow-sm">
              <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E5E5EA] text-sm">
                <span className="font-mono text-xs font-bold text-[#0066CC]">PS-042 [2016]</span>
                <div className="font-bold text-[#1D1D1F] mt-0.5">Panchayat Primary School, North</div>
              </div>
              <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 text-sm flex items-center justify-between">
                <div>
                  <span className="font-mono text-xs font-bold text-emerald-800">PS-042 [2021]</span>
                  <div className="font-bold text-[#1D1D1F] mt-0.5">Panchayat Primary School, North</div>
                </div>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-white text-emerald-700 border border-emerald-200 shrink-0">
                  Matched
                </span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-dashed border-[#CBD5E1] text-sm flex items-center justify-between">
                <div>
                  <span className="font-mono text-xs font-bold text-[#64748B]">PS-[Target 2026]</span>
                  <div className="text-[#64748B] italic mt-0.5">Cross-check against final roll</div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#94A3B8] shrink-0" />
              </div>
            </div>

            {/* Case 2: Renumbered / Changed */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center p-4 rounded-2xl bg-white border border-[#E5E5EA] shadow-sm">
              <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E5E5EA] text-sm">
                <span className="font-mono text-xs font-bold text-[#0066CC]">PS-088 [2016]</span>
                <div className="font-bold text-[#1D1D1F] mt-0.5">Govt Hr Sec School, Main Hall</div>
              </div>
              <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200 text-sm flex items-center justify-between">
                <div>
                  <span className="font-mono text-xs font-bold text-[#0066CC]">PS-092 [2021]</span>
                  <div className="font-bold text-[#1D1D1F] mt-0.5">Govt Hr Sec School, Block A</div>
                </div>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-white text-[#0066CC] border border-blue-200 shrink-0">
                  Changed
                </span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-dashed border-[#CBD5E1] text-sm flex items-center justify-between">
                <div>
                  <span className="font-mono text-xs font-bold text-[#64748B]">PS-[Target 2026]</span>
                  <div className="text-[#64748B] italic mt-0.5">Trace renumbered block ID</div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#94A3B8] shrink-0" />
              </div>
            </div>
          </div>

          {/* Compact Legend Bar */}
          <div className="mt-6 pt-5 border-t border-[#E5E5EA] flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1D1D1F]">
              Mapping Status:
            </span>
            <div className="flex flex-wrap items-center gap-3">
              {legendItems.map((leg, idx) => (
                <div key={idx} className={`px-3 py-1.5 rounded-full border text-xs font-bold flex items-center gap-1.5 ${leg.badgeClass}`}>
                  <GitCommit className="w-3.5 h-3.5" />
                  <span>{leg.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Illustrative Notice */}
      <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 flex items-start gap-2.5 text-xs text-amber-900">
        <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <p>
          <strong>Illustrative Visual:</strong> Polling station connections shown above are illustrative examples. Stations will only be formally linked when gazetted voter roll documentation is verified.
        </p>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-[#E5E5EA] flex items-center justify-between text-xs text-[#86868B]">
        <span>Viralimalai Constituency Electoral Research Proposal</span>
        <span>Ctrl Alt Kick Ad Tech Solutions Pvt Ltd</span>
      </div>
    </div>
  );
};
