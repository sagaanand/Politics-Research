import React from 'react';
import { Search, Database, BarChart3, CheckSquare, ShieldCheck } from 'lucide-react';

export const ExperienceRelationSlide: React.FC = () => {
  const bridgeCapabilities = [
    {
      title: 'Research',
      icon: Search,
      badge: '01',
      application: 'Deep familiarity with Election Commission gazettes, Form 20 formats, and historical assembly election documentation.'
    },
    {
      title: 'Data Organisation',
      icon: Database,
      badge: '02',
      application: 'Proven ability to catalogue disparate paper and digital returns into an indexed, normalised, querying-ready master dataset.'
    },
    {
      title: 'Analysis',
      icon: BarChart3,
      badge: '03',
      application: 'Rigorous calculation of station-wise vote share shifts, victory margins, turnout denominators, and historical continuity.'
    },
    {
      title: 'Execution',
      icon: CheckSquare,
      badge: '04',
      application: 'Systematic coordination of research executives, independent blind cross-checks, and delivery within a structured 4-week window.'
    }
  ];

  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white select-none">
      {/* Header */}
      <div>
        <div className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold tracking-widest uppercase text-[#0066CC] mb-2">
          Capability Translation
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1D1D1F]">
          Relevant Experience. A Defined Research Scope.
        </h2>
        <p className="mt-2 text-lg sm:text-xl text-[#4B5563] max-w-4xl">
          Bridging demonstrated multi-election operational capability into an institutional-grade historical research framework for Viralimalai.
        </p>
      </div>

      {/* Dominant 4-Card Visual Translation Layout (65% of slide) */}
      <div className="my-auto py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {bridgeCapabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.badge}
                className="p-7 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm hover:border-[#0066CC]/50 hover:bg-white transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#E5E5EA]">
                    <span className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066CC] font-mono font-bold text-sm flex items-center justify-center">
                      {cap.badge}
                    </span>
                    <Icon className="w-6 h-6 text-[#86868B] group-hover:text-[#0066CC] transition-colors" />
                  </div>

                  <h3 className="mt-4 text-xl sm:text-2xl font-bold text-[#1D1D1F]">
                    {cap.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-[#4B5563] leading-relaxed">
                    {cap.application}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Closing Summary Banner */}
      <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200 flex items-center gap-3">
        <ShieldCheck className="w-6 h-6 text-[#0066CC] shrink-0" />
        <p className="text-sm sm:text-base font-semibold text-[#1D1D1F] leading-snug">
          The proposed Viralimalai engagement applies these capabilities to a clearly defined historical-data research and verification project.
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
