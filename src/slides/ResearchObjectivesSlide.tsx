import React from 'react';
import { FolderDown, ShieldCheck, GitFork, BarChart3, AlertCircle } from 'lucide-react';

export const ResearchObjectivesSlide: React.FC = () => {
  const objectives = [
    {
      action: 'Collect',
      icon: FolderDown,
      badge: '01',
      sentence: 'Consolidate official Form 20 returns, gazette notifications, and secondary election archives.',
      visual: (
        <svg viewBox="0 0 160 85" className="w-full h-16 text-[#0066CC]" fill="none" stroke="currentColor">
          <rect x="25" y="15" width="110" height="55" rx="8" strokeWidth="2" fill="#F8FAFC" />
          <path d="M45 32h70M45 44h50M45 56h60" strokeWidth="2" strokeLinecap="round" stroke="#CBD5E1" />
          <circle cx="115" cy="54" r="10" fill="#0066CC" stroke="none" />
          <path d="M112 54l2 2 4-4" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      action: 'Verify',
      icon: ShieldCheck,
      badge: '02',
      sentence: 'Independently cross-check booth vote totals, arithmetic sums, and source definitions.',
      visual: (
        <svg viewBox="0 0 160 85" className="w-full h-16 text-[#0066CC]" fill="none" stroke="currentColor">
          <circle cx="50" cy="42" r="26" strokeWidth="2" stroke="#CBD5E1" strokeDasharray="3 3" />
          <circle cx="110" cy="42" r="26" strokeWidth="2" stroke="#CBD5E1" strokeDasharray="3 3" />
          <circle cx="80" cy="42" r="16" fill="#EFF6FF" stroke="#0066CC" strokeWidth="2" />
          <path d="M75 42l3 3 7-7" stroke="#0066CC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      action: 'Map',
      icon: GitFork,
      badge: '03',
      sentence: 'Reconcile polling stations across 2016, 2021, and 2026 to track continuity and name changes.',
      visual: (
        <svg viewBox="0 0 160 85" className="w-full h-16 text-[#0066CC]" fill="none" stroke="currentColor">
          <circle cx="30" cy="42" r="9" fill="#EFF6FF" stroke="#0066CC" strokeWidth="2" />
          <circle cx="80" cy="24" r="9" fill="#EFF6FF" stroke="#0066CC" strokeWidth="2" />
          <circle cx="80" cy="60" r="9" fill="#EFF6FF" stroke="#0066CC" strokeWidth="2" />
          <circle cx="130" cy="42" r="9" fill="#EFF6FF" stroke="#0066CC" strokeWidth="2" />
          <path d="M39 42 C 60 42, 60 24, 71 24" strokeWidth="2" stroke="#0066CC" />
          <path d="M39 42 C 60 42, 60 60, 71 60" strokeWidth="2" stroke="#0066CC" />
          <path d="M89 24 C 105 24, 110 42, 121 42" strokeWidth="2" stroke="#0066CC" strokeDasharray="2 3" />
          <path d="M89 60 C 105 60, 110 42, 121 42" strokeWidth="2" stroke="#0066CC" strokeDasharray="2 3" />
        </svg>
      )
    },
    {
      action: 'Analyse',
      icon: BarChart3,
      badge: '04',
      sentence: 'Synthesise candidate vote shares, victory margins, turnout trends, and historical patterns.',
      visual: (
        <svg viewBox="0 0 160 85" className="w-full h-16 text-[#0066CC]" fill="none" stroke="currentColor">
          <rect x="30" y="45" width="16" height="26" rx="3" fill="#E2E8F0" stroke="none" />
          <rect x="55" y="28" width="16" height="43" rx="3" fill="#93C5FD" stroke="none" />
          <rect x="80" y="14" width="16" height="57" rx="3" fill="#0066CC" stroke="none" />
          <rect x="105" y="38" width="16" height="33" rx="3" fill="#E2E8F0" stroke="none" />
          <path d="M30 71h100" stroke="#94A3B8" strokeWidth="1.5" />
        </svg>
      )
    }
  ];

  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white select-none">
      {/* Header */}
      <div>
        <div className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold tracking-widest uppercase text-[#0066CC] mb-2">
          Research Objectives
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1D1D1F]">
          Collect. Verify. Map. Analyse.
        </h2>
        <p className="mt-2 text-lg sm:text-xl text-[#4B5563]">
          Four core objectives establishing an audit-ready, evidence-backed historical dataset.
        </p>
      </div>

      {/* Dominant 4 Visual Cards (65% of slide) */}
      <div className="my-auto py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {objectives.map((obj) => {
            const Icon = obj.icon;
            return (
              <div
                key={obj.badge}
                className="p-7 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] hover:border-[#0066CC]/50 hover:bg-white shadow-sm transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#E5E5EA]">
                    <span className="font-mono text-sm font-bold text-[#0066CC]">
                      Phase {obj.badge}
                    </span>
                    <Icon className="w-5 h-5 text-[#86868B] group-hover:text-[#0066CC] transition-colors" />
                  </div>

                  <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight">
                    {obj.action}
                  </h3>

                  <div className="my-4 py-2 flex items-center justify-center">
                    {obj.visual}
                  </div>

                  <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                    {obj.sentence}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Short Statement Banner */}
      <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 flex items-center gap-3">
        <AlertCircle className="w-5 h-5 text-amber-700 shrink-0" />
        <p className="text-sm sm:text-base font-semibold text-amber-950">
          Unverified or unavailable values will be clearly documented in the missing-data register.
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
