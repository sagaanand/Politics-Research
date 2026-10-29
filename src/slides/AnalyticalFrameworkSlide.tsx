import React from 'react';
import { UserCheck, Landmark, MapPin, BarChart2, ShieldCheck, AlertOctagon } from 'lucide-react';

export const AnalyticalFrameworkSlide: React.FC = () => {
  const frameworks = [
    {
      title: 'Candidate Performance',
      icon: UserCheck,
      desc: 'Vote totals, share of valid polled votes & victory/defeat margins.',
      visual: (
        <svg viewBox="0 0 100 50" className="w-full h-12 text-[#0066CC]" fill="none" stroke="currentColor">
          <path d="M5 45 C 30 40, 45 10, 95 15" strokeWidth="2.5" stroke="#0066CC" />
          <path d="M5 45 C 30 42, 55 30, 95 35" strokeWidth="1.5" stroke="#94A3B8" strokeDasharray="3 3" />
          <circle cx="95" cy="15" r="3" fill="#0066CC" />
        </svg>
      )
    },
    {
      title: 'Party Performance',
      icon: Landmark,
      desc: 'Comparative party performance shifts across 2016, 2021, and 2026.',
      visual: (
        <svg viewBox="0 0 100 50" className="w-full h-12" fill="none">
          <rect x="15" y="20" width="18" height="25" rx="3" fill="#0066CC" />
          <rect x="40" y="10" width="18" height="35" rx="3" fill="#3B82F6" />
          <rect x="65" y="15" width="18" height="30" rx="3" fill="#93C5FD" />
          <line x1="5" y1="45" x2="95" y2="45" stroke="#CBD5E1" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      title: 'Station Comparisons',
      icon: MapPin,
      desc: 'Identification of historically resilient vs volatile polling booths.',
      visual: (
        <svg viewBox="0 0 100 50" className="w-full h-12" fill="none">
          <circle cx="20" cy="30" r="4" fill="#0066CC" opacity="0.6" />
          <circle cx="35" cy="15" r="5" fill="#0066CC" opacity="0.9" />
          <circle cx="50" cy="35" r="3.5" fill="#0066CC" opacity="0.5" />
          <circle cx="65" cy="20" r="6" fill="#0066CC" opacity="0.8" />
          <circle cx="80" cy="28" r="4" fill="#0066CC" opacity="0.6" />
          <line x1="10" y1="45" x2="90" y2="45" stroke="#E2E8F0" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      title: 'Turnout & NOTA',
      icon: BarChart2,
      desc: 'Voter participation patterns and NOTA distribution where documented.',
      visual: (
        <svg viewBox="0 0 100 50" className="w-full h-12" fill="none">
          <rect x="15" y="12" width="70" height="12" rx="4" fill="#E2E8F0" />
          <rect x="15" y="12" width="52" height="12" rx="4" fill="#0066CC" />
          <rect x="15" y="30" width="70" height="8" rx="3" fill="#E2E8F0" />
          <rect x="15" y="30" width="12" height="8" rx="3" fill="#F59E0B" />
        </svg>
      )
    },
    {
      title: 'Data Quality & Rigour',
      icon: ShieldCheck,
      desc: 'Transparent variance tracking, audit logs, and mapping confidence scores.',
      visual: (
        <svg viewBox="0 0 100 50" className="w-full h-12" fill="none" stroke="currentColor">
          <circle cx="50" cy="25" r="18" stroke="#E2E8F0" strokeWidth="3" />
          <circle cx="50" cy="25" r="18" stroke="#0066CC" strokeWidth="3" strokeDasharray="80 113" strokeLinecap="round" />
          <path d="M44 25l4 4 8-8" stroke="#0066CC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0066CC]">
            Analytical Method
          </span>
          <span className="text-[#86868B] text-xs">/ Section 07</span>
        </div>
        <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F]">
          Measure What the Historical Data Shows
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#6E6E73]">
          Five evidence-backed dimensions converting raw booth returns into actionable structural findings.
        </p>
      </div>

      {/* Dominant 5 Visual Cards Grid (65% of slide) */}
      <div className="my-auto py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {frameworks.map((fw, idx) => {
            const Icon = fw.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] hover:border-[#0066CC]/50 hover:bg-white shadow-sm transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#E5E5EA]">
                    <Icon className="w-4 h-4 text-[#0066CC]" />
                    <span className="font-mono text-[10px] text-[#86868B]">Dim 0{idx + 1}</span>
                  </div>

                  <h3 className="mt-2 text-sm font-bold text-[#1D1D1F] leading-snug">
                    {fw.title}
                  </h3>

                  {/* Clean SVG visual */}
                  <div className="my-3 py-1 flex items-center justify-center">
                    {fw.visual}
                  </div>

                  <p className="text-[11px] text-[#6E6E73] leading-relaxed">
                    {fw.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Limitation Standard Banner */}
      <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 flex items-start gap-2.5 text-xs text-amber-900 leading-relaxed">
        <AlertOctagon className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <p>
          <strong>Analytical Limitation:</strong> Historical aggregate results describe past outcomes; they do not establish individual voter preferences or guarantee future results.
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
