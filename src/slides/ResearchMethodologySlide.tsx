import React from 'react';
import { Search, FolderDown, FileSpreadsheet, CheckCheck, GitMerge, FileCheck, ShieldCheck } from 'lucide-react';

export const ResearchMethodologySlide: React.FC = () => {
  const stages = [
    {
      num: '01',
      title: 'Source Discovery',
      desc: 'Identify available official records (Form 20, gazettes), secondary datasets, published reports, and physical archival records.',
      icon: Search
    },
    {
      num: '02',
      title: 'Document Collection',
      desc: 'Acquire and catalogue source materials for 2016, 2021, and 2026 into a structured documentary repository.',
      icon: FolderDown
    },
    {
      num: '03',
      title: 'Structured Extraction',
      desc: 'Extract candidate vote totals, station identifiers, valid votes, and turnout metrics into a normalised digital database.',
      icon: FileSpreadsheet
    },
    {
      num: '04',
      title: 'Multi-Tier Verification',
      desc: 'Cross-check key vote totals against authoritative returns, verify arithmetic consistency, and log source citations.',
      icon: CheckCheck
    },
    {
      num: '05',
      title: 'Historical Mapping',
      desc: 'Map polling stations across election years, tracking continuity, name alterations, station splits, and mergers.',
      icon: GitMerge
    },
    {
      num: '06',
      title: 'Analysis & Reporting',
      desc: 'Produce cross-year comparative findings, discrepancy registers, analytical reports, and master handover deliverables.',
      icon: FileCheck
    }
  ];

  return (
    <div className="flex-1 w-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0066CC]">
            Workflow & Integrity
          </span>
          <span className="text-[#86868B] text-xs">/ Section 04</span>
        </div>
        <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1D1D1F]">
          A Traceable Research Process
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-[#6E6E73]">
          Six sequential, interconnected stages designed for institutional auditability
        </p>
      </div>

      {/* 6 Connected Stages Grid */}
      <div className="my-auto py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {stages.map((stage) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.num}
                className="p-4 sm:p-5 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA] hover:border-[#0066CC]/40 hover:bg-white transition-all shadow-sm flex flex-col justify-between group relative"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#0066CC] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      STAGE {stage.num}
                    </span>
                    <Icon className="w-4 h-4 text-[#86868B] group-hover:text-[#0066CC] transition-colors" />
                  </div>
                  <h3 className="mt-3 text-sm sm:text-base font-semibold text-[#1D1D1F]">
                    {stage.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-[#6E6E73] leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Core Principle Callout Banner */}
      <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="w-5 h-5 text-[#0066CC] shrink-0" />
          <p className="text-xs sm:text-sm font-medium text-[#1D1D1F]">
            <span className="font-bold text-[#0066CC]">Fundamental Research Principle:</span> No unavailable or unverified value will be silently represented as confirmed fact.
          </p>
        </div>
        <span className="text-[11px] font-mono text-[#0066CC] shrink-0 hidden md:inline">
          100% Traceability
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
