import React from 'react';
import { CalendarDays, AlertTriangle, CheckCircle2 } from 'lucide-react';

export const TimelineSlide: React.FC = () => {
  const weeks = [
    {
      weekNum: 'Week 1',
      title: 'Source Audit & Collection',
      tag: 'Initiation',
      items: [
        'Review existing records and available archives',
        'Identify official gazettes and credible secondary sources',
        'Establish master dataset structure & schema definitions',
        'Commence primary document collection and cataloguing'
      ]
    },
    {
      weekNum: 'Week 2',
      title: 'Extraction & Verification',
      tag: 'Digitisation',
      items: [
        'Continue document acquisition and secondary scanning',
        'Extract candidate and station-level returns into schema',
        'Perform independent blind cross-checks on critical totals',
        'Initiate discrepancy tracking and missing-record log'
      ]
    },
    {
      weekNum: 'Week 3',
      title: 'Mapping & Analysis',
      tag: 'Synthesis',
      items: [
        'Compare station lists across 2016, 2021, and 2026',
        'Execute candidate and party aggregate performance analysis',
        'Prepare turnout comparisons and voting statistics',
        'Draft interim findings and longitudinal patterns'
      ]
    },
    {
      weekNum: 'Week 4',
      title: 'Reporting & Handover',
      tag: 'Delivery',
      items: [
        'Finalise master Excel dataset and data dictionary',
        'Compile comprehensive analytical PDF report & presentation',
        'Finalise Source Register & Discrepancy Register',
        'Conduct final lead review and begin 2 review rounds'
      ]
    }
  ];

  return (
    <div className="flex-1 w-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0066CC]">
            Roadmap & Milestones
          </span>
          <span className="text-[#86868B] text-xs">/ Section 11</span>
        </div>
        <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1D1D1F]">
          A Four-Week Research Plan
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-[#6E6E73]">
          Structured four-week execution schedule balancing rapid extraction with rigorous verification
        </p>
      </div>

      {/* 4 Weeks Timeline Grid */}
      <div className="my-auto py-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {weeks.map((w, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA] flex flex-col justify-between relative group hover:border-[#0066CC]/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#E5E5EA]">
                  <span className="font-mono text-xs font-bold text-[#0066CC] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                    {w.weekNum}
                  </span>
                  <span className="text-[10px] font-mono text-[#86868B] bg-white px-1.5 py-0.5 rounded border border-[#E5E5EA]">
                    {w.tag}
                  </span>
                </div>

                <h3 className="text-xs sm:text-sm font-bold text-[#1D1D1F]">
                  {w.title}
                </h3>

                <ul className="mt-3 space-y-2">
                  {w.items.map((item, iIdx) => (
                    <li key={iIdx} className="text-[11px] text-[#6E6E73] flex items-start gap-1.5 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0066CC] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 pt-2.5 border-t border-[#F0F0F2] flex items-center justify-between text-[10px] text-[#86868B]">
                <span>Progress Phase</span>
                <span className="font-mono font-medium text-[#1D1D1F]">{(idx + 1) * 25}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Schedule Qualification Banner */}
      <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 flex items-start gap-2.5 text-xs text-amber-900 leading-relaxed">
        <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <p>
          <strong>Schedule Qualification:</strong> Four weeks is the target timeframe, subject to source availability, document accessibility at physical archives, and the volume of unresolved discrepancies. If required historical records are unavailable or delayed, the impact and revised plan will be communicated proactively. Recovery of every historical record is not unconditionally guaranteed within four weeks.
        </p>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-[#E5E5EA] flex items-center justify-between text-xs text-[#86868B]">
        <span>Viralimalai Constituency Electoral Research Proposal</span>
        <span className="flex items-center gap-1.5 text-xs">
          <CalendarDays className="w-3.5 h-3.5 text-[#0066CC]" /> Target Duration: 4 Calendar Weeks
        </span>
      </div>
    </div>
  );
};
