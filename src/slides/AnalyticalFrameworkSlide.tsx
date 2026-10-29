import React from 'react';
import { UserCheck, Landmark, MapPin, BarChart2, ShieldCheck, AlertOctagon } from 'lucide-react';

export const AnalyticalFrameworkSlide: React.FC = () => {
  const frameworks = [
    {
      title: 'Candidate Performance',
      icon: UserCheck,
      desc: 'Vote totals, share of valid polled votes & victory/defeat margins.',
      visual: (
        <svg viewBox="0 0 100 45" className="w-full h-11 text-[#0066CC]" fill="none" stroke="currentColor">
          <path d="M5 40 C 30 35, 45 8, 95 12" strokeWidth="2.5" stroke="#0066CC" />
          <path d="M5 40 C 30 37, 55 25, 95 30" strokeWidth="1.5" stroke="#94A3B8" strokeDasharray="3 3" />
          <circle cx="95" cy="12" r="3.5" fill="#0066CC" />
        </svg>
      )
    },
    {
      title: 'Party Performance',
      icon: Landmark,
      desc: 'Comparative party performance shifts across 2016, 2021, and 2026.',
      visual: (
        <svg viewBox="0 0 100 45" className="w-full h-11" fill="none">
          <rect x="15" y="16" width="18" height="25" rx="3" fill="#0066CC" />
          <rect x="40" y="8" width="18" height="33" rx="3" fill="#3B82F6" />
          <rect x="65" y="12" width="18" height="29" rx="3" fill="#93C5FD" />
          <line x1="5" y1="41" x2="95" y2="41" stroke="#CBD5E1" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      title: 'Station Comparisons',
      icon: MapPin,
      desc: 'Identification of historically resilient vs volatile polling booths.',
      visual: (
        <svg viewBox="0 0 100 45" className="w-full h-11" fill="none">
          <circle cx="20" cy="26" r="4.5" fill="#0066CC" opacity="0.6" />
          <circle cx="35" cy="12" r="5.5" fill="#0066CC" opacity="0.9" />
          <circle cx="50" cy="30" r="4" fill="#0066CC" opacity="0.5" />
          <circle cx="65" cy="16" r="6" fill="#0066CC" opacity="0.8" />
          <circle cx="80" cy="24" r="4.5" fill="#0066CC" opacity="0.6" />
          <line x1="10" y1="41" x2="90" y2="41" stroke="#E2E8F0" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      title: 'Turnout & NOTA',
      icon: BarChart2,
      desc: 'Voter participation patterns and NOTA distribution where documented.',
      visual: (
        <svg viewBox="0 0 100 45" className="w-full h-11" fill="none">
          <rect x="15" y="10" width="70" height="11" rx="3" fill="#E2E8F0" />
          <rect x="15" y="10" width="52" height="11" rx="3" fill="#0066CC" />
          <rect x="15" y="26" width="70" height="8" rx="2.5" fill="#E2E8F0" />
          <rect x="15" y="26" width="14" height="8" rx="2.5" fill="#F59E0B" />
        </svg>
      )
    },
    {
      title: 'Data Quality & Rigour',
      icon: ShieldCheck,
      desc: 'Transparent variance tracking, audit logs, and mapping confidence scores.',
      visual: (
        <svg viewBox="0 0 100 45" className="w-full h-11" fill="none" stroke="currentColor">
          <circle cx="50" cy="22" r="16" stroke="#E2E8F0" strokeWidth="3" />
          <circle cx="50" cy="22" r="16" stroke="#0066CC" strokeWidth="3" strokeDasharray="70 100" strokeLinecap="round" />
          <path d="M44 22l4 4 8-8" stroke="#0066CC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white select-none">
      {/* Header */}
      <div>
        <div className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold tracking-widest uppercase text-[#0066CC] mb-2">
          Analytical Method
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1D1D1F]">
          From Historical Data to Defensible Findings
        </h2>
        <p className="mt-2 text-lg sm:text-xl text-[#4B5563] max-w-4xl">
          Five evidence-backed dimensions converting raw booth returns into defensible structural findings.
        </p>
      </div>

      {/* Dominant 5 Visual Cards Grid (65% of slide) */}
      <div className="my-auto py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {frameworks.map((fw, idx) => {
            const Icon = fw.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] hover:border-[#0066CC]/50 hover:bg-white shadow-sm transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#E5E5EA]">
                    <Icon className="w-5 h-5 text-[#0066CC]" />
                    <span className="font-mono text-xs font-bold text-[#86868B]">0{idx + 1}</span>
                  </div>

                  <h3 className="mt-2 text-base sm:text-lg font-bold text-[#1D1D1F] leading-snug">
                    {fw.title}
                  </h3>

                  <div className="my-3 py-1 flex items-center justify-center">
                    {fw.visual}
                  </div>

                  <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                    {fw.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Limitation Standard Banner */}
      <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 flex items-start gap-3">
        <AlertOctagon className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <p className="text-sm sm:text-base font-semibold text-amber-950 leading-relaxed">
          Historical aggregate results describe past outcomes; they do not establish individual voter preferences or guarantee future results.
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
