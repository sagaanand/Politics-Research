import React from 'react';
import { UserCheck, Landmark, MapPin, BarChart2, ShieldCheck, AlertOctagon } from 'lucide-react';

export const AnalyticalFrameworkSlide: React.FC = () => {
  const frameworks = [
    {
      title: 'Candidate Performance',
      icon: UserCheck,
      items: [
        'Candidate-wise vote totals at constituency & station levels',
        'Vote share percentage of valid polled votes',
        'Winning and losing margin calculations across cycles'
      ]
    },
    {
      title: 'Party Performance',
      icon: Landmark,
      items: [
        'Party-wise aggregate results and seat competitiveness',
        'Comparative performance across 2016, 2021, and 2026',
        'Shifts in relative electoral standing across cycles'
      ]
    },
    {
      title: 'Polling Station Analysis',
      icon: MapPin,
      items: [
        'Historical aggregate performance booth-by-booth',
        'Identification of historically resilient vs volatile stations',
        'Cross-year aggregate shifts at mapped stations'
      ]
    },
    {
      title: 'Turnout & Statistics',
      icon: BarChart2,
      items: [
        'Turnout comparisons where reliable denominators exist',
        'NOTA vote distribution patterns where recorded',
        'Rigorous documentation of formulas and source definitions'
      ]
    },
    {
      title: 'Data Quality & Rigour',
      icon: ShieldCheck,
      items: [
        'Quantified tracking of missing or incomplete records',
        'Reconciliation of conflicting source values',
        'Mapping confidence indicators and audit logs'
      ]
    }
  ];

  return (
    <div className="flex-1 w-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0066CC]">
            Analytical Method
          </span>
          <span className="text-[#86868B] text-xs">/ Section 07</span>
        </div>
        <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1D1D1F]">
          From Historical Records to Defensible Findings
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-[#6E6E73]">
          Five analytical dimensions translating raw electoral returns into structured institutional intelligence
        </p>
      </div>

      {/* 5 Analytical Categories Grid */}
      <div className="my-auto py-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3.5">
        {frameworks.map((fw, idx) => {
          const Icon = fw.icon;
          return (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA] flex flex-col justify-between hover:border-[#0066CC]/40 transition-colors"
            >
              <div>
                <div className="flex items-center gap-2 pb-2.5 mb-2.5 border-b border-[#E5E5EA]">
                  <div className="p-1.5 rounded-lg bg-blue-50 text-[#0066CC]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-bold text-[#1D1D1F] leading-snug">
                    {fw.title}
                  </h3>
                </div>

                <ul className="space-y-2">
                  {fw.items.map((item, iIdx) => (
                    <li key={iIdx} className="text-[11px] text-[#6E6E73] leading-relaxed flex items-start gap-1.5">
                      <span className="text-[#0066CC] font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mandatory Analytical Boundary Callout */}
      <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/90 flex items-start gap-3">
        <AlertOctagon className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
          <strong>Mandatory Analytical Limitation:</strong> Historical polling-station results describe aggregate past outcomes. They do not establish individual voter preferences, provide voter-level profiling, or predict future results with certainty.
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
