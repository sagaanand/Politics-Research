import React from 'react';
import { GitCompare, AlertTriangle, ArrowRight, CheckCircle2, HelpCircle, Split, FileQuestion } from 'lucide-react';

export const PollingStationMappingSlide: React.FC = () => {
  const outcomes = [
    {
      label: 'Matched Stations',
      badge: 'High Confidence',
      badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      icon: CheckCircle2,
      desc: 'Stations with identical or verified continuous physical location and naming across cycles.'
    },
    {
      label: 'Changed Names / Identifiers',
      badge: 'Re-Indexed',
      badgeClass: 'bg-blue-50 text-blue-700 border-blue-200',
      icon: GitCompare,
      desc: 'Booth numbers renumbered or building names updated (e.g. school renovation or new building wing).'
    },
    {
      label: 'Splits or Mergers',
      badge: 'Structural Change',
      badgeClass: 'bg-amber-50 text-amber-700 border-amber-200',
      icon: Split,
      desc: 'Single station split into main + auxiliary booths, or adjacent booths consolidated.'
    },
    {
      label: 'Unmatched / New Stations',
      badge: 'Electoral Expansion',
      badgeClass: 'bg-purple-50 text-purple-700 border-purple-200',
      icon: HelpCircle,
      desc: 'Newly created polling booths due to population growth without clear 1-to-1 historical predecessor.'
    },
    {
      label: 'Unresolved Cases',
      badge: 'Open Investigation',
      badgeClass: 'bg-rose-50 text-rose-700 border-rose-200',
      icon: FileQuestion,
      desc: 'Ambiguous locations with insufficient gazetted evidence, flagged for secondary review.'
    }
  ];

  return (
    <div className="flex-1 w-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0066CC]">
            Longitudinal Mapping
          </span>
          <span className="text-[#86868B] text-xs">/ Section 06</span>
        </div>
        <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1D1D1F]">
          Understanding Polling Station Changes Over Time
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-[#6E6E73] max-w-4xl">
          Polling-station names, identifiers, and boundaries frequently evolve between general elections. Our research cross-references official gazetted station lists and Form 20 records to establish rigorous historical continuity.
        </p>
      </div>

      {/* Illustrative 3-Column Conceptual Mapping Flow */}
      <div className="my-auto py-3 space-y-4">
        <div className="p-4 sm:p-5 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA]">
          <div className="flex items-center justify-between pb-3 border-b border-[#E5E5EA]">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1D1D1F]">
              Illustrative Cross-Election Mapping Architecture
            </span>
            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200 font-semibold">
              Conceptual Demonstration Only
            </span>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            {/* 2016 Column */}
            <div className="p-3.5 rounded-xl bg-white border border-[#E5E5EA] space-y-2">
              <div className="flex items-center justify-between pb-1.5 border-b border-[#F0F0F2]">
                <span className="font-mono text-xs font-bold text-[#1D1D1F]">2016 Station Records</span>
                <span className="text-[10px] font-mono text-[#86868B]">Cycle 1</span>
              </div>
              <div className="p-2 rounded bg-[#FBFBFD] border border-[#E5E5EA] text-[11px]">
                <div className="font-mono text-[10px] text-[#0066CC] font-bold">PS-042 [2016]</div>
                <div className="font-medium text-[#1D1D1F]">Panchayat Union Primary School, North Wing</div>
              </div>
              <div className="p-2 rounded bg-[#FBFBFD] border border-[#E5E5EA] text-[11px]">
                <div className="font-mono text-[10px] text-[#0066CC] font-bold">PS-043 [2016]</div>
                <div className="font-medium text-[#1D1D1F]">Govt Higher Secondary School, Main Hall</div>
              </div>
            </div>

            {/* 2021 Column */}
            <div className="p-3.5 rounded-xl bg-white border border-[#0066CC]/30 space-y-2 relative">
              <div className="flex items-center justify-between pb-1.5 border-b border-[#F0F0F2]">
                <span className="font-mono text-xs font-bold text-[#0066CC]">2021 Station Records</span>
                <span className="text-[10px] font-mono text-[#0066CC]">Cycle 2</span>
              </div>
              <div className="p-2 rounded bg-blue-50/40 border border-blue-200/60 text-[11px]">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#0066CC] font-bold">PS-045 [2021]</span>
                  <span className="text-[9px] text-emerald-700 font-semibold flex items-center gap-0.5">
                    <ArrowRight className="w-2.5 h-2.5" /> Matched (Renumbered)
                  </span>
                </div>
                <div className="font-medium text-[#1D1D1F]">Panchayat Union Primary School, North Wing</div>
              </div>
              <div className="p-2 rounded bg-amber-50/40 border border-amber-200/60 text-[11px]">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-amber-800 font-bold">PS-046 & 046A [2021]</span>
                  <span className="text-[9px] text-amber-800 font-semibold flex items-center gap-0.5">
                    <Split className="w-2.5 h-2.5" /> Auxiliary Split
                  </span>
                </div>
                <div className="font-medium text-[#1D1D1F]">Govt Hr Sec School (Room 1 & Room 2)</div>
              </div>
            </div>

            {/* 2026 Column */}
            <div className="p-3.5 rounded-xl bg-white border border-[#E5E5EA] space-y-2">
              <div className="flex items-center justify-between pb-1.5 border-b border-[#F0F0F2]">
                <span className="font-mono text-xs font-bold text-[#1D1D1F]">2026 Station Records</span>
                <span className="text-[10px] font-mono text-[#86868B]">Cycle 3 (Target)</span>
              </div>
              <div className="p-2 rounded bg-[#FBFBFD] border border-dashed border-[#C7C7CC] text-[11px]">
                <div className="font-mono text-[10px] text-[#86868B] font-bold">PS-[Pending Final Roll]</div>
                <div className="font-medium text-[#6E6E73] italic">To be reconciled against 2026 gazette</div>
              </div>
              <div className="p-2 rounded bg-[#FBFBFD] border border-dashed border-[#C7C7CC] text-[11px]">
                <div className="font-mono text-[10px] text-[#86868B] font-bold">PS-[Pending Final Roll]</div>
                <div className="font-medium text-[#6E6E73] italic">Cross-referenced against verified 2021 chain</div>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Rigorous Mapping Outcome Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
          {outcomes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="p-3 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <Icon className="w-4 h-4 text-[#6E6E73]" />
                    <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded border font-semibold ${item.badgeClass}`}>
                      {item.badge}
                    </span>
                  </div>
                  <h4 className="mt-2 text-xs font-bold text-[#1D1D1F]">{item.label}</h4>
                  <p className="mt-1 text-[10px] text-[#6E6E73] leading-snug">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Verification Caveat */}
      <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200 flex items-start gap-2.5 text-xs text-amber-900">
        <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <p>
          <strong>Methodological Requirement:</strong> Stations will only be classified as matched, split, or merged when supporting gazetted evidence is adequate. Ambiguities will remain flagged as unresolved rather than assumed.
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
