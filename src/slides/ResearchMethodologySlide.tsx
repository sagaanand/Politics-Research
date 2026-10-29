import React from 'react';
import { Search, FolderDown, FileSpreadsheet, CheckCheck, GitMerge, BarChart2, ShieldCheck } from 'lucide-react';

export const ResearchMethodologySlide: React.FC = () => {
  const steps = [
    { num: '01', title: 'Source Discovery', desc: 'Identify official gazettes, Form 20s & secondary archives.', icon: Search },
    { num: '02', title: 'Document Collection', desc: 'Acquire physical & digital election materials.', icon: FolderDown },
    { num: '03', title: 'Structured Extraction', desc: 'Digitise station vote counts into standard schema.', icon: FileSpreadsheet },
    { num: '04', title: 'Verification', desc: 'Independent blind cross-checks & arithmetic reconciliation.', icon: CheckCheck },
    { num: '05', title: 'Station Mapping', desc: 'Trace continuity, renumbering, splits & mergers.', icon: GitMerge },
    { num: '06', title: 'Analysis & Reporting', desc: 'Synthesise margins, turnout & historical performance.', icon: BarChart2 }
  ];

  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white select-none">
      {/* Header */}
      <div>
        <div className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold tracking-widest uppercase text-[#0066CC] mb-2">
          Methodology Pipeline
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1D1D1F]">
          Six Steps. One Traceable Process.
        </h2>
        <p className="mt-2 text-lg sm:text-xl text-[#4B5563] max-w-4xl">
          A sequential, audit-ready research pipeline guaranteeing evidentiary integrity at every milestone.
        </p>
      </div>

      {/* Dominant Process Diagram (65% of slide) */}
      <div className="my-auto py-4 w-full">
        <div className="p-8 sm:p-10 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {steps.map((st) => {
              const Icon = st.icon;
              return (
                <div
                  key={st.num}
                  className="p-5 rounded-2xl bg-white border border-[#E5E5EA] shadow-sm hover:border-[#0066CC]/50 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#E5E5EA]">
                      <span className="w-9 h-9 rounded-xl bg-blue-50 text-[#0066CC] font-mono font-bold text-sm flex items-center justify-center group-hover:bg-[#0066CC] group-hover:text-white transition-colors">
                        {st.num}
                      </span>
                      <Icon className="w-4 h-4 text-[#86868B] group-hover:text-[#0066CC] transition-colors" />
                    </div>

                    <h3 className="text-base font-bold text-[#1D1D1F] leading-snug">
                      {st.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Core Standard Banner */}
      <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-center gap-3">
        <ShieldCheck className="w-5 h-5 text-[#0066CC] shrink-0" />
        <p className="text-sm sm:text-base font-semibold text-[#1D1D1F]">
          No unavailable or unverified value will be silently represented as confirmed fact.
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
