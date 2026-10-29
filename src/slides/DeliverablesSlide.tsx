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
      format: '.XLSX Master',
      icon: FileSpreadsheet,
      mockup: (
        <div className="w-full h-14 rounded-xl bg-emerald-50 border border-emerald-200 p-1.5 flex flex-col justify-between font-mono text-[10px] text-emerald-900">
          <div className="flex justify-between border-b border-emerald-200 pb-0.5 font-bold">
            <span>BOOTH</span><span>2016</span><span>2021</span><span>MARGIN</span>
          </div>
          <div className="flex justify-between text-emerald-700">
            <span>PS-001</span><span>452</span><span>512</span><span className="text-emerald-800 font-bold">+60</span>
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
        <div className="w-full h-14 rounded-xl bg-blue-50 border border-blue-200 p-2 flex flex-col justify-between text-[10px] text-blue-900">
          <div className="font-bold flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#0066CC]" /> Research Report
          </div>
          <div className="space-y-1">
            <div className="h-1.5 w-full bg-blue-200 rounded" />
            <div className="h-1.5 w-3/4 bg-blue-200 rounded" />
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
        <div className="w-full h-14 rounded-xl bg-slate-900 p-2 flex flex-col justify-between text-[10px] text-white">
          <div className="flex justify-between items-center text-[9px] text-slate-400">
            <span>KEYNOTE DECK</span><span>04/22</span>
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
        <div className="w-full h-14 rounded-xl bg-purple-50 border border-purple-200 p-2 flex flex-col justify-between text-[10px] text-purple-900">
          <div className="font-bold">Form 20 Catalog</div>
          <div className="text-[9px] text-purple-700 font-mono">100% Gazetted Citations</div>
        </div>
      )
    },
    {
      num: '05',
      title: 'Station Mapping Matrix',
      format: 'Concordance',
      icon: GitFork,
      mockup: (
        <div className="w-full h-14 rounded-xl bg-amber-50 border border-amber-200 p-1 flex items-center justify-center font-mono text-[11px] text-amber-900 gap-1.5 font-bold">
          <span>2016</span><span className="text-amber-600">→</span><span>2021</span><span className="text-amber-600">→</span><span>2026</span>
        </div>
      )
    },
    {
      num: '06',
      title: 'Discrepancy Report',
      format: 'Exception Log',
      icon: AlertTriangle,
      mockup: (
        <div className="w-full h-14 rounded-xl bg-rose-50 border border-rose-200 p-2 flex flex-col justify-between text-[10px] text-rose-900">
          <div className="font-bold flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-rose-500" /> Variance Log
          </div>
          <div className="text-[9px] text-rose-700 font-medium">Audit Reconciliation</div>
        </div>
      )
    },
    {
      num: '07',
      title: 'Executive Summary',
      format: 'Briefing Memo',
      icon: FileCheck2,
      mockup: (
        <div className="w-full h-14 rounded-xl bg-slate-50 border border-slate-200 p-2 flex flex-col justify-between text-[10px] text-slate-800">
          <div className="font-bold">Strategic Brief</div>
          <div className="text-[9px] text-slate-500">Historical Synthesis</div>
        </div>
      )
    }
  ];

  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white select-none">
      {/* Header */}
      <div>
        <div className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold tracking-widest uppercase text-[#0066CC] mb-2">
          Handover Scope
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1D1D1F]">
          Seven Deliverables. One Complete Handover.
        </h2>
        <p className="mt-2 text-lg sm:text-xl text-[#4B5563] max-w-4xl">
          A comprehensive suite of structured datasets, audit logs, and executive presentation materials.
        </p>
      </div>

      {/* Dominant Visual: 7 Deliverables Mockup Tiles (65% of slide) */}
      <div className="my-auto py-3">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3.5">
          {deliverables.map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.num}
                className="p-5 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm hover:border-[#0066CC]/50 hover:bg-white transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#E5E5EA]">
                    <span className="font-mono text-sm font-extrabold text-[#0066CC]">
                      {d.num}
                    </span>
                    <Icon className="w-4 h-4 text-[#86868B] group-hover:text-[#0066CC] transition-colors" />
                  </div>

                  <h3 className="text-sm font-bold text-[#1D1D1F] leading-snug">
                    {d.title}
                  </h3>

                  <div className="my-3">
                    {d.mockup}
                  </div>
                </div>

                <div className="pt-2 border-t border-[#F0F0F2] text-xs font-mono font-semibold text-[#6E6E73]">
                  {d.format}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scope Exclusion Callout */}
      <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-[#E5E5EA] flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#1D1D1F]">
          <XCircle className="w-5 h-5 text-[#86868B] shrink-0" />
          <span>
            <strong>Engagement Clarification:</strong> Deliverables strictly comprise analytical research documents and data files. No software development or live web dashboards are included.
          </span>
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
