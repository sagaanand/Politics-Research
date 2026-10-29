import React from 'react';
import { ShieldAlert, FileSearch } from 'lucide-react';

export const DataAvailabilitySlide: React.FC = () => {
  const assumptions = [
    {
      title: 'Baseline Document Availability',
      desc: 'Certain high-level election summaries and Form 20 records are currently identified, but exhaustive booth-level data across all three cycles requires focused collection.'
    },
    {
      title: 'Official Records Priority',
      desc: 'Official records (ECI gazettes, CEO Tamil Nadu returns, Form 20) are prioritized as primary authoritative truth over secondary aggregators.'
    },
    {
      title: 'Credible Secondary Recovery',
      desc: 'Where official gazetted scans are illegible or missing, credible published media archives and academic datasets will be used to reconstruct missing data.'
    },
    {
      title: 'Strict Non-Fabrication Rule',
      desc: 'Unverified, interpolated, or estimated figures will never be silently presented as confirmed historical fact. All estimates are explicitly tagged.'
    },
    {
      title: 'Evidence-Based Mapping',
      desc: 'Cross-cycle station mapping classifications (matched, split, merged, renumbered) rely strictly on documented address and voter roll continuity.'
    },
    {
      title: 'Physical Retrieval & Expenses',
      desc: 'Physical archival visits are contingent on local administrative accessibility and bounded by the approved ₹10,000 research & travel allowance.'
    },
    {
      title: 'Timeline Dependency',
      desc: 'The four-week delivery target is dependent on timely document accessibility and the volume of conflicting entries encountered during audit.'
    }
  ];

  return (
    <div className="flex-1 w-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0066CC]">
            Ground Realities
          </span>
          <span className="text-[#86868B] text-xs">/ Section 15</span>
        </div>
        <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1D1D1F]">
          Evidence First. Transparency Always.
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-[#6E6E73]">
          Core operational assumptions and realistic data constraints governing the Viralimalai research
        </p>
      </div>

      {/* Assumptions Cards Grid */}
      <div className="my-auto py-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {assumptions.slice(0, 6).map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA] flex flex-col justify-between hover:border-[#0066CC]/30 transition-colors"
            >
              <div>
                <div className="flex items-center gap-2 pb-2 mb-2 border-b border-[#E5E5EA]">
                  <span className="w-5 h-5 rounded-full bg-blue-50 text-[#0066CC] flex items-center justify-center font-mono text-[10px] font-bold">
                    0{idx + 1}
                  </span>
                  <h3 className="text-xs font-bold text-[#1D1D1F] leading-snug">{item.title}</h3>
                </div>
                <p className="text-[11px] text-[#6E6E73] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 7th item + Summary banner */}
        <div className="mt-3 p-3.5 rounded-xl bg-blue-50/50 border border-blue-100 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-xs text-[#1D1D1F]">
            <FileSearch className="w-4 h-4 text-[#0066CC] shrink-0" />
            <span>
              <strong>Operational Realism:</strong> {assumptions[6].title} — {assumptions[6].desc}
            </span>
          </div>
          <span className="text-[10px] font-mono text-[#0066CC] shrink-0 hidden sm:inline">
            Risk-Managed Timeline
          </span>
        </div>
      </div>

      {/* Recovery Disclaimer */}
      <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 flex items-start gap-2.5 text-xs text-amber-900 leading-relaxed">
        <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <p>
          <strong>No Universal Guarantee of Missing Records:</strong> The research team will make every commercially reasonable effort to recover missing or damaged historical booth records using alternative archives. However, this does not guarantee that every single historical record from earlier cycles will be recoverable if official government repositories lack the physical document.
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
