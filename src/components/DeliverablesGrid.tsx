import React from 'react';
import {
  FileSpreadsheet,
  FileText,
  Presentation,
  BookOpen,
  GitFork,
  AlertTriangle,
  FileCheck2
} from 'lucide-react';

export interface DeliverableItem {
  num: string;
  title: string;
  format: string;
  desc: string;
}

export const defaultDeliverables: DeliverableItem[] = [
  {
    num: '01',
    title: 'Master Excel Dataset',
    format: '.XLSX / CSV',
    desc: 'Structured polling-station-level dataset with multi-year filter tabs, source references, and verification status.'
  },
  {
    num: '02',
    title: 'Analytical PDF Report',
    format: 'PDF Report',
    desc: 'Comprehensive historical comparison, methodology documentation, and evidence-backed findings.'
  },
  {
    num: '03',
    title: 'Executive Slide Presentation',
    format: 'Deck',
    desc: 'A concise presentation deck summarizing core station patterns, key aggregate trends, and limitations.'
  },
  {
    num: '04',
    title: 'Source Register',
    format: 'Audit Log',
    desc: 'A source-by-source record of all official Form 20s, gazettes, and secondary datasets utilized.'
  },
  {
    num: '05',
    title: 'Polling Station Mapping Matrix',
    format: 'Concordance',
    desc: 'Cross-year concordance linking 2016, 2021, and 2026 stations where evidence permits.'
  },
  {
    num: '06',
    title: 'Discrepancy & Missing-Data Report',
    format: 'Exception Log',
    desc: 'A transparent record of conflicting figures, unavailable information, and unresolved cases.'
  },
  {
    num: '07',
    title: 'Executive Summary Briefing',
    format: 'Briefing Memo',
    desc: 'High-level synthesis of findings, historical patterns, data limitations, and recommendations.'
  }
];

export const DeliverablesGrid: React.FC<{ items?: DeliverableItem[] }> = ({
  items = defaultDeliverables
}) => {
  const icons = [
    FileSpreadsheet,
    FileText,
    Presentation,
    BookOpen,
    GitFork,
    AlertTriangle,
    FileCheck2
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full">
      {items.map((item, idx) => {
        const Icon = icons[idx % icons.length];
        return (
          <div
            key={item.num}
            className="p-3.5 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#E5E5EA]">
                <span className="font-mono text-xs font-bold text-[#0066CC]">
                  DELIVERABLE {item.num}
                </span>
                <span className="text-[10px] font-mono text-[#86868B] bg-white px-1.5 py-0.5 rounded border border-[#E5E5EA]">
                  {item.format}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-[#1D1D1F] shrink-0" />
                <h4 className="text-xs font-bold text-[#1D1D1F]">{item.title}</h4>
              </div>
              <p className="mt-2 text-[11px] text-[#6E6E73] leading-relaxed">{item.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

