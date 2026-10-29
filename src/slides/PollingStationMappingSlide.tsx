import React from 'react';
import { GitCommit, ArrowRight, AlertTriangle, ShieldCheck } from 'lucide-react';

export const PollingStationMappingSlide: React.FC = () => {
  const legendItems = [
    { label: 'Matched', badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200', desc: 'Identical physical site' },
    { label: 'Changed', badgeClass: 'bg-blue-50 text-blue-700 border-blue-200', desc: 'Renumbered or renamed' },
    { label: 'Unmatched', badgeClass: 'bg-purple-50 text-purple-700 border-purple-200', desc: 'Newly created booth' },
    { label: 'Requires Verification', badgeClass: 'bg-amber-50 text-amber-800 border-amber-200', desc: 'Evidence under review' }
  ];

  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0066CC]">
            Longitudinal Mapping
          </span>
          <span className="text-[#86868B] text-xs">/ Section 06</span>
        </div>
        <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F]">
          Track Station Changes Across Elections
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#6E6E73]">
          Tracing polling booths across three cycles to account for renumbering, school reconstructions, and auxiliary splits.
        </p>
      </div>

      {/* Dominant Visual: 3-Column Mapping Visual Flow (65% of slide) */}
      <div className="my-auto py-4 w-full">
        <div className="p-6 sm:p-8 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm">
          {/* Top Column Labels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
            <div className="flex items-center justify-between pb-2 border-b-2 border-[#1D1D1F]">
              <span className="font-mono text-sm font-bold text-[#1D1D1F]">2016 Station Baseline</span>
              <span className="text-[10px] font-mono text-[#86868B]">Cycle 1</span>
            </div>
            <div className="flex items-center justify-between pb-2 border-b-2 border-[#0066CC]">
              <span className="font-mono text-sm font-bold text-[#0066CC]">2021 Station Concordance</span>
              <span className="text-[10px] font-mono text-[#0066CC]">Cycle 2</span>
            </div>
            <div className="flex items-center justify-between pb-2 border-b-2 border-[#E5E5EA]">
              <span className="font-mono text-sm font-bold text-[#1D1D1F]">2026 Target Roll</span>
              <span className="text-[10px] font-mono text-[#86868B]">Cycle 3</span>
            </div>
          </div>

          {/* 3-Column Connected Mapping Rows */}
          <div className="space-y-3.5">
            {/* Case 1: Matched continuity */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center p-3 rounded-2xl bg-white border border-[#E5E5EA] shadow-sm">
              <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E5E5EA] text-xs">
                <span className="font-mono text-[10px] font-bold text-[#0066CC]">PS-042 [2016]</span>
                <div className="font-semibold text-[#1D1D1F] truncate">Panchayat Primary School, North</div>
              </div>
              <div className="p-2.5 rounded-xl bg-emerald-50/50 border border-emerald-200 text-xs flex items-center justify-between">
                <div>
                  <span className="font-mono text-[10px] font-bold text-emerald-800">PS-042 [2021]</span>
                  <div className="font-semibold text-[#1D1D1F] truncate">Panchayat Primary School, North</div>
                </div>
                <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-white text-emerald-700 border border-emerald-200 shrink-0 ml-1">
                  Matched
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-dashed border-[#CBD5E1] text-xs flex items-center justify-between">
                <div>
                  <span className="font-mono text-[10px] font-bold text-[#64748B]">PS-[Target 2026]</span>
                  <div className="text-[#64748B] italic truncate">Cross-check against final roll</div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-[#94A3B8] shrink-0" />
              </div>
            </div>

            {/* Case 2: Renumbered / Changed */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center p-3 rounded-2xl bg-white border border-[#E5E5EA] shadow-sm">
              <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E5E5EA] text-xs">
                <span className="font-mono text-[10px] font-bold text-[#0066CC]">PS-088 [2016]</span>
                <div className="font-semibold text-[#1D1D1F] truncate">Govt Hr Sec School, Main Hall</div>
              </div>
              <div className="p-2.5 rounded-xl bg-blue-50/50 border border-blue-200 text-xs flex items-center justify-between">
                <div>
                  <span className="font-mono text-[10px] font-bold text-[#0066CC]">PS-092 [2021]</span>
                  <div className="font-semibold text-[#1D1D1F] truncate">Govt Hr Sec School, Block A</div>
                </div>
                <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-white text-[#0066CC] border border-blue-200 shrink-0 ml-1">
                  Changed
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-dashed border-[#CBD5E1] text-xs flex items-center justify-between">
                <div>
                  <span className="font-mono text-[10px] font-bold text-[#64748B]">PS-[Target 2026]</span>
                  <div className="text-[#64748B] italic truncate">Trace renumbered block ID</div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-[#94A3B8] shrink-0" />
              </div>
            </div>

            {/* Case 3: Auxiliary Split */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center p-3 rounded-2xl bg-white border border-[#E5E5EA] shadow-sm">
              <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E5E5EA] text-xs">
                <span className="font-mono text-[10px] font-bold text-[#0066CC]">PS-114 [2016]</span>
                <div className="font-semibold text-[#1D1D1F] truncate">Community Hall, Central</div>
              </div>
              <div className="p-2.5 rounded-xl bg-amber-50/50 border border-amber-200 text-xs flex items-center justify-between">
                <div>
                  <span className="font-mono text-[10px] font-bold text-amber-800">PS-114 & 114(A)</span>
                  <div className="font-semibold text-[#1D1D1F] truncate">Hall Room 1 & Room 2</div>
                </div>
                <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-white text-amber-800 border border-amber-200 shrink-0 ml-1">
                  Split
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-dashed border-[#CBD5E1] text-xs flex items-center justify-between">
                <div>
                  <span className="font-mono text-[10px] font-bold text-[#64748B]">PS-[Target 2026]</span>
                  <div className="text-[#64748B] italic truncate">Confirm auxiliary status</div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-[#94A3B8] shrink-0" />
              </div>
            </div>
          </div>

          {/* Compact Legend Bar */}
          <div className="mt-5 pt-4 border-t border-[#E5E5EA] flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1D1D1F]">
              Mapping Status Legend:
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {legendItems.map((leg, idx) => (
                <div key={idx} className={`px-2.5 py-1 rounded-full border text-[11px] font-bold flex items-center gap-1.5 ${leg.badgeClass}`}>
                  <GitCommit className="w-3 h-3" />
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
          <strong>Illustrative Visual Demonstration:</strong> Polling station connections shown above are illustrative examples explaining our mapping methodology. Stations will only be linked in deliverables when gazetted voter roll documentation is verified.
        </p>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-[#E5E5EA] flex items-center justify-between text-xs text-[#86868B]">
        <span>Viralimalai Constituency Electoral Research Proposal</span>
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-[#0066CC]" /> Verified Concordance
        </span>
      </div>
    </div>
  );
};
