import React from 'react';
import {
  FileSpreadsheet,
  FileText,
  Presentation,
  BookOpen,
  GitFork,
  AlertTriangle,
  FileCheck2,
  XCircle
} from 'lucide-react';

export const DeliverablesSlide: React.FC = () => {
  const deliverables = [
    {
      num: '01',
      title: 'Master Excel Dataset',
      format: '.XLSX / CSV',
      desc: 'Structured polling-station-level dataset with multi-year filter tabs, data dictionary, source references, and verification status flags.',
      icon: FileSpreadsheet
    },
    {
      num: '02',
      title: 'Analytical PDF Report',
      format: 'Formal Document',
      desc: 'Comprehensive historical comparison, methodology documentation, cross-cycle aggregate performance charts, and evidence-backed findings.',
      icon: FileText
    },
    {
      num: '03',
      title: 'Executive Slide Presentation',
      format: 'Deck (.KEY / .PDF)',
      desc: 'A concise, high-impact presentation deck summarizing core station patterns, key aggregate trends, research limitations, and strategic conclusions.',
      icon: Presentation
    },
    {
      num: '04',
      title: 'Source Register',
      format: 'Audit Dossier',
      desc: 'A source-by-source catalog of all official Form 20s, gazettes, physical archives, and secondary datasets utilized throughout the research.',
      icon: BookOpen
    },
    {
      num: '05',
      title: 'Polling Station Mapping Matrix',
      format: 'Mapping Table',
      desc: 'Cross-year concordance matrix linking 2016, 2021, and 2026 polling stations with identified splits, mergers, renumbering, and confidence ratings.',
      icon: GitFork
    },
    {
      num: '06',
      title: 'Discrepancy & Missing-Data Report',
      format: 'Exception Log',
      desc: 'A transparent register documenting arithmetic variances between sources, unavailable station records, and unresolved mapping cases.',
      icon: AlertTriangle
    },
    {
      num: '07',
      title: 'Executive Summary Briefing',
      format: 'Briefing Memo',
      desc: 'A high-level synthesis of historical electoral patterns across Viralimalai, documented limitations, and recommendations for downstream research.',
      icon: FileCheck2
    }
  ];

  return (
    <div className="flex-1 w-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0066CC]">
            Handover Scope
          </span>
          <span className="text-[#86868B] text-xs">/ Section 08</span>
        </div>
        <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1D1D1F]">
          A Complete Research Handover
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-[#6E6E73]">
          Seven formal deliverables providing structured data, audit documentation, and analytical synthesis
        </p>
      </div>

      {/* 7 Deliverables Grid */}
      <div className="my-auto py-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {deliverables.slice(0, 4).map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.num}
                className="p-3.5 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA] flex flex-col justify-between hover:border-[#0066CC]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#E5E5EA]">
                    <span className="font-mono text-xs font-bold text-[#0066CC]">
                      DELIVERABLE {d.num}
                    </span>
                    <span className="text-[10px] font-mono text-[#86868B] bg-white px-1.5 py-0.5 rounded border border-[#E5E5EA]">
                      {d.format}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-[#1D1D1F] shrink-0" />
                    <h3 className="text-xs font-bold text-[#1D1D1F]">{d.title}</h3>
                  </div>
                  <p className="mt-2 text-[11px] text-[#6E6E73] leading-relaxed">
                    {d.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {deliverables.slice(4).map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.num}
                className="p-3.5 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA] flex flex-col justify-between hover:border-[#0066CC]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#E5E5EA]">
                    <span className="font-mono text-xs font-bold text-[#0066CC]">
                      DELIVERABLE {d.num}
                    </span>
                    <span className="text-[10px] font-mono text-[#86868B] bg-white px-1.5 py-0.5 rounded border border-[#E5E5EA]">
                      {d.format}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-[#1D1D1F] shrink-0" />
                    <h3 className="text-xs font-bold text-[#1D1D1F]">{d.title}</h3>
                  </div>
                  <p className="mt-2 text-[11px] text-[#6E6E73] leading-relaxed">
                    {d.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Explicit Scope Boundary Callout */}
      <div className="p-3.5 rounded-xl bg-[#F5F5F7] border border-[#E5E5EA] flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 text-xs text-[#1D1D1F]">
          <XCircle className="w-4 h-4 text-[#86868B] shrink-0" />
          <span>
            <strong>Engagement Clarification:</strong> This proposal is strictly for historical electoral research & documentation. It does <em>not</em> include software application development, SaaS dashboards, or live electoral analytics tools.
          </span>
        </div>
        <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white border border-[#E5E5EA] text-[#6E6E73] shrink-0 hidden sm:inline">
          Research Deliverables Only
        </span>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-[#E5E5EA] flex items-center justify-between text-xs text-[#86868B]">
        <span>Viralimalai Constituency Electoral Research Proposal</span>
        <span>Ctrl Alt Kick Ad Tech Solutions Pvt Ltd</span>
      </div>
    </div>
  );
};
