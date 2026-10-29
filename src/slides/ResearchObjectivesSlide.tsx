import React from 'react';
import { Database, GitFork, BarChart3, ShieldAlert } from 'lucide-react';

export const ResearchObjectivesSlide: React.FC = () => {
  const objectives = [
    {
      num: '01',
      title: 'Historical Data Consolidation',
      desc: 'Build a consolidated, standardised dataset covering the 2016, 2021, and 2026 election cycles, harmonising disparate formats and documentation into a single querying structure.',
      icon: Database
    },
    {
      num: '02',
      title: 'Polling Station Mapping',
      desc: 'Identify polling stations and map name or identifier changes across years where reliable evidence is available, capturing historical continuity, boundary changes, splits, and mergers.',
      icon: GitFork
    },
    {
      num: '03',
      title: 'Comparative Analysis',
      desc: 'Analyse candidate votes, party performance, margins, turnout, NOTA, and station-level changes across the three elections to reveal aggregate electoral trends.',
      icon: BarChart3
    },
    {
      num: '04',
      title: 'Evidence and Verification',
      desc: 'Maintain transparent source references, verification status, conflicting values, and missing-data records, ensuring an audit-ready chain of evidence.',
      icon: ShieldAlert
    }
  ];

  return (
    <div className="flex-1 w-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0066CC]">
            Strategic Focus
          </span>
          <span className="text-[#86868B] text-xs">/ Section 02</span>
        </div>
        <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1D1D1F]">
          What the Research Will Establish
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-[#6E6E73]">
          Four core pillars providing institutional-grade analytical clarity
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="my-auto py-6 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
        {objectives.map(obj => {
          const Icon = obj.icon;
          return (
            <div
              key={obj.num}
              className="p-5 sm:p-6 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA] hover:border-[#0066CC]/40 hover:bg-white transition-all shadow-sm flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-[#0066CC] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                    {obj.num}
                  </span>
                  <Icon className="w-5 h-5 text-[#86868B] group-hover:text-[#0066CC] transition-colors" />
                </div>
                <h3 className="mt-3 text-base sm:text-lg font-semibold text-[#1D1D1F]">
                  {obj.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#6E6E73] leading-relaxed">
                  {obj.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Core Principle Callout */}
      <div className="p-4 rounded-xl bg-[#F5F5F7] border border-[#E5E5EA] flex items-center justify-between gap-4">
        <p className="text-xs sm:text-sm font-medium text-[#1D1D1F]">
          <span className="text-[#0066CC] font-semibold">Core Verification Standard:</span> The research will distinguish verified findings from estimates, unresolved discrepancies, and unavailable information.
        </p>
        <span className="text-[11px] font-mono text-[#86868B] shrink-0 hidden sm:inline">
          Evidence-First Methodology
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
