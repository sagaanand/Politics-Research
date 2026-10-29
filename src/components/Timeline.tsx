import React from 'react';
import { Calendar, CheckCircle2 } from 'lucide-react';

export interface TimelineWeek {
  weekNum: string;
  title: string;
  tag: string;
  items: string[];
}

interface TimelineProps {
  weeks?: TimelineWeek[];
}

export const defaultWeeks: TimelineWeek[] = [
  {
    weekNum: 'Week 1',
    title: 'Source Audit & Collection',
    tag: 'Initiation',
    items: [
      'Review existing records and archives',
      'Identify official and secondary sources',
      'Establish master dataset structure',
      'Begin data collection'
    ]
  },
  {
    weekNum: 'Week 2',
    title: 'Extraction & Verification',
    tag: 'Digitisation',
    items: [
      'Continue document collection',
      'Extract candidate and station-level data',
      'Cross-check important values',
      'Track missing records and discrepancies'
    ]
  },
  {
    weekNum: 'Week 3',
    title: 'Mapping & Analysis',
    tag: 'Synthesis',
    items: [
      'Compare station records across years',
      'Analyse candidate and party performance',
      'Prepare turnout & voting statistics',
      'Draft analytical findings'
    ]
  },
  {
    weekNum: 'Week 4',
    title: 'Reporting & Handover',
    tag: 'Delivery',
    items: [
      'Complete master Excel dataset',
      'Finalise source and discrepancy registers',
      'Prepare PDF report and presentation',
      'Submit deliverables for review rounds'
    ]
  }
];

export const Timeline: React.FC<TimelineProps> = ({ weeks = defaultWeeks }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      {weeks.map((w, idx) => (
        <div
          key={idx}
          className="p-4 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA] flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#E5E5EA]">
              <span className="font-mono text-xs font-bold text-[#0066CC]">{w.weekNum}</span>
              <span className="text-[10px] font-mono text-[#86868B] px-1.5 py-0.5 rounded bg-white border border-[#E5E5EA]">
                {w.tag}
              </span>
            </div>
            <h4 className="text-xs font-bold text-[#1D1D1F]">{w.title}</h4>
            <ul className="mt-2.5 space-y-1.5">
              {w.items.map((item, iIdx) => (
                <li key={iIdx} className="text-[11px] text-[#6E6E73] flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0066CC] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-3 pt-2 border-t border-[#F0F0F2] text-[10px] text-[#86868B] flex items-center justify-between">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-[#0066CC]" /> Phase {idx + 1}
            </span>
            <span className="font-mono font-medium text-[#1D1D1F]">{(idx + 1) * 25}%</span>
          </div>
        </div>
      ))}
    </div>
  );
};

