import React from 'react';
import { Search, FolderDown, FileSpreadsheet, CheckCheck, GitMerge, BarChart2, ShieldCheck } from 'lucide-react';

export const ResearchMethodologySlide: React.FC = () => {
  const steps = [
    { num: '1', title: 'Discover Sources', desc: 'Identify official gazettes, Form 20s & secondary archives', icon: Search },
    { num: '2', title: 'Collect Documents', desc: 'Acquire physical & digital election materials', icon: FolderDown },
    { num: '3', title: 'Extract Data', desc: 'Digitise station-level vote counts into structured schema', icon: FileSpreadsheet },
    { num: '4', title: 'Verify Records', desc: 'Independent blind cross-checks & arithmetic reconciliation', icon: CheckCheck },
    { num: '5', title: 'Map Stations', desc: 'Trace continuity, renumbering, splits & mergers', icon: GitMerge },
    { num: '6', title: 'Analyse Results', desc: 'Synthesise margins, turnout & historical performance', icon: BarChart2 }
  ];

  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0066CC]">
            Workflow & Rigour
          </span>
          <span className="text-[#86868B] text-xs">/ Section 04</span>
        </div>
        <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F]">
          Six Steps. One Traceable Process.
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#6E6E73]">
          A sequential, audit-ready research pipeline guaranteeing evidentiary integrity at every milestone.
        </p>
      </div>

      {/* Large Process Diagram (65% of slide) */}
      <div className="my-auto py-4 w-full">
        <div className="p-6 sm:p-8 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm">
          {/* 6 Connected Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3.5 relative">
            {steps.map((st) => {
              const Icon = st.icon;
              return (
                <div
                  key={st.num}
                  className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E5E5EA] shadow-sm hover:border-[#0066CC]/50 transition-all flex flex-col justify-between group relative"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="w-8 h-8 rounded-xl bg-blue-50 text-[#0066CC] font-mono font-bold text-sm flex items-center justify-center border border-blue-100 group-hover:bg-[#0066CC] group-hover:text-white transition-colors">
                        0{st.num}
                      </span>
                      <Icon className="w-4 h-4 text-[#86868B] group-hover:text-[#0066CC] transition-colors" />
                    </div>

                    <h3 className="mt-4 text-sm font-bold text-[#1D1D1F] leading-snug">
                      {st.title}
                    </h3>

                    <p className="mt-2 text-[11px] text-[#6E6E73] leading-relaxed">
                      {st.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-2.5 border-t border-[#F0F0F2] flex items-center justify-between text-[10px] text-[#86868B] font-mono">
                    <span>Stage {st.num}/6</span>
                    <span className="text-[#0066CC]">Verified</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Core Standard Banner */}
      <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="w-5 h-5 text-[#0066CC] shrink-0" />
          <p className="text-xs sm:text-sm font-medium text-[#1D1D1F]">
            <strong className="text-[#0066CC]">Fundamental Research Principle:</strong> No unavailable or unverified value will be silently represented as confirmed fact.
          </p>
        </div>
        <span className="text-[11px] font-mono text-[#0066CC] shrink-0 hidden md:inline font-bold">
          100% Audit-Ready
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
