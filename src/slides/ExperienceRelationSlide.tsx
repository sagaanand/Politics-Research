import React from 'react';
import { Search, Database, BarChart3, CheckSquare, ShieldCheck, ArrowRight } from 'lucide-react';

export const ExperienceRelationSlide: React.FC = () => {
  const bridgeCapabilities = [
    {
      title: 'Research',
      icon: Search,
      badge: '01',
      proven: 'Demonstrated in 2021 & 2024 cycles',
      application: 'Deep familiarity with Election Commission gazettes, Form 20 formats, and historical assembly election documentation.'
    },
    {
      title: 'Data Organisation',
      icon: Database,
      badge: '02',
      proven: 'Booth-level structuring track record',
      application: 'Proven ability to catalogue disparate paper and digital returns into an indexed, normalised, querying-ready master dataset.'
    },
    {
      title: 'Analysis',
      icon: BarChart3,
      badge: '03',
      proven: 'Candidate & margin assessments',
      application: 'Rigorous calculation of station-wise vote share shifts, victory margins, turnout denominators, and historical continuity.'
    },
    {
      title: 'Execution',
      icon: CheckSquare,
      badge: '04',
      proven: 'Disciplined multi-member coordination',
      application: 'Systematic coordination of research executives, independent blind cross-checks, and delivery within a structured 4-week window.'
    }
  ];

  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white select-none">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0066CC]">
            Capability Translation
          </span>
          <span className="text-[#86868B] text-xs">/ Section 10</span>
        </div>
        <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F]">
          Relevant Experience. A Defined Research Scope.
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#6E6E73] max-w-3xl">
          Bridging demonstrated multi-election operational capability into an institutional-grade historical research framework for Viralimalai.
        </p>
      </div>

      {/* Dominant 4-Card Visual Translation Layout (65% of slide) */}
      <div className="my-auto py-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {bridgeCapabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.badge}
                className="p-5 sm:p-6 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm hover:border-[#0066CC]/50 hover:bg-white transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#E5E5EA]">
                    <span className="w-8 h-8 rounded-xl bg-blue-50 text-[#0066CC] font-mono font-bold text-xs flex items-center justify-center">
                      {cap.badge}
                    </span>
                    <Icon className="w-5 h-5 text-[#86868B] group-hover:text-[#0066CC] transition-colors" />
                  </div>

                  <h3 className="mt-3 text-lg font-bold text-[#1D1D1F]">
                    {cap.title}
                  </h3>

                  <div className="mt-1 text-[10px] font-mono font-semibold text-[#0066CC]">
                    {cap.proven}
                  </div>

                  <p className="mt-3 text-xs text-[#6E6E73] leading-relaxed">
                    {cap.application}
                  </p>
                </div>

                <div className="mt-4 pt-2.5 border-t border-[#F0F0F2] flex items-center justify-between text-[10px] text-[#86868B] font-mono">
                  <span>Viralimalai Scope</span>
                  <span className="text-[#0066CC] font-semibold flex items-center gap-0.5">
                    Applied <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Closing Summary Banner */}
      <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="w-5 h-5 text-[#0066CC] shrink-0" />
          <p className="text-xs sm:text-sm font-medium text-[#1D1D1F]">
            The proposed Viralimalai engagement applies these capabilities to a clearly defined historical-data research and verification project.
          </p>
        </div>
        <span className="text-[11px] font-mono text-[#0066CC] shrink-0 hidden md:inline font-bold">
          Historical Research Focus
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
