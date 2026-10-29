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
      title: 'Excel Dataset',
      format: '.XLSX',
      icon: FileSpreadsheet,
      mockup: (
        <div className="w-full h-12 rounded bg-emerald-50/70 border border-emerald-200 p-1 flex flex-col justify-between font-mono text-[8px] text-emerald-800">
          <div className="flex justify-between border-b border-emerald-200 pb-0.5 font-bold">
            <span>BOOTH</span><span>2016</span><span>2021</span><span>MARGIN</span>
          </div>
          <div className="flex justify-between text-emerald-600">
            <span>PS-001</span><span>452</span><span>512</span><span className="text-emerald-700 font-bold">+60</span>
          </div>
        </div>
      )
    },
    {
      num: '02',
      title: 'Analytical PDF Report',
      format: 'PDF Dossier',
      icon: FileText,
      mockup: (
        <div className="w-full h-12 rounded bg-blue-50/70 border border-blue-200 p-1.5 flex flex-col justify-between text-[8px] text-blue-900">
          <div className="font-bold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066CC]" /> Research Report
          </div>
          <div className="space-y-0.5">
            <div className="h-1 w-full bg-blue-200 rounded" />
            <div className="h-1 w-3/4 bg-blue-200 rounded" />
          </div>
        </div>
      )
    },
    {
      num: '03',
      title: 'Executive Presentation',
      format: 'Slide Deck',
      icon: Presentation,
      mockup: (
        <div className="w-full h-12 rounded bg-slate-900 p-1.5 flex flex-col justify-between text-[8px] text-white">
          <div className="flex justify-between items-center text-[7px] text-slate-400">
            <span>KEYNOTE DECK</span><span>04/18</span>
          </div>
          <div className="font-bold text-blue-300">Viralimalai Findings</div>
        </div>
      )
    },
    {
      num: '04',
      title: 'Source Register',
      format: 'Audit Dossier',
      icon: BookOpen,
      mockup: (
        <div className="w-full h-12 rounded bg-purple-50/70 border border-purple-200 p-1.5 flex flex-col justify-between text-[8px] text-purple-900">
          <div className="font-bold">Form 20 Catalog</div>
          <div className="text-[7px] text-purple-700 font-mono">100% Gazetted Citations</div>
        </div>
      )
    },
    {
      num: '05',
      title: 'Station Mapping Matrix',
      format: 'Concordance',
      icon: GitFork,
      mockup: (
        <div className="w-full h-12 rounded bg-amber-50/70 border border-amber-200 p-1 flex items-center justify-center font-mono text-[9px] text-amber-900 gap-1.5">
          <span>2016</span><span className="text-amber-500">→</span><span>2021</span><span className="text-amber-500">→</span><span>2026</span>
        </div>
      )
    },
    {
      num: '06',
      title: 'Discrepancy Report',
      format: 'Exception Log',
      icon: AlertTriangle,
      mockup: (
        <div className="w-full h-12 rounded bg-rose-50/70 border border-rose-200 p-1.5 flex flex-col justify-between text-[8px] text-rose-900">
          <div className="font-bold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" /> Variance Log
          </div>
          <div className="text-[7px] text-rose-700">Audit Reconciliation</div>
        </div>
      )
    },
    {
      num: '07',
      title: 'Executive Summary',
      format: 'Briefing Memo',
      icon: FileCheck2,
      mockup: (
        <div className="w-full h-12 rounded bg-slate-50 border border-slate-200 p-1.5 flex flex-col justify-between text-[8px] text-slate-800">
          <div className="font-bold">Strategic Brief</div>
          <div className="text-[7px] text-slate-500">Historical Synthesis</div>
        </div>
      )
    }
  ];

  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0066CC]">
            Handover Scope
          </span>
          <span className="text-[#86868B] text-xs">/ Section 08</span>
        </div>
        <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F]">
          Seven Deliverables. One Complete Handover.
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#6E6E73]">
          A comprehensive suite of structured datasets, audit logs, and executive presentation materials.
        </p>
      </div>

      {/* Dominant Visual: 7 Deliverables Mockup Tiles (65% of slide) */}
      <div className="my-auto py-3">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {deliverables.map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.num}
                className="p-3.5 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm hover:border-[#0066CC]/50 hover:bg-white transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#E5E5EA]">
                    <span className="font-mono text-xs font-bold text-[#0066CC]">
                      {d.num}
                    </span>
                    <Icon className="w-3.5 h-3.5 text-[#86868B] group-hover:text-[#0066CC] transition-colors" />
                  </div>

                  <h3 className="text-xs font-bold text-[#1D1D1F] leading-tight">
                    {d.title}
                  </h3>

                  <div className="my-2.5">
                    {d.mockup}
                  </div>
                </div>

                <div className="pt-2 border-t border-[#F0F0F2] text-[10px] font-mono text-[#86868B]">
                  {d.format}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scope Exclusion Callout */}
      <div className="p-3.5 rounded-2xl bg-[#F5F5F7] border border-[#E5E5EA] flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-[#1D1D1F]">
          <XCircle className="w-4 h-4 text-[#86868B] shrink-0" />
          <span>
            <strong>Engagement Clarification:</strong> Deliverables strictly comprise analytical research documents and data files. No software development or live web dashboards are included.
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
