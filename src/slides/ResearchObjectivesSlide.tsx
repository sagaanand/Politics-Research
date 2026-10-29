import React from 'react';
import { FolderDown, ShieldCheck, GitFork, BarChart3, CheckCircle2 } from 'lucide-react';

export const ResearchObjectivesSlide: React.FC = () => {
  const objectives = [
    {
      action: 'Collect',
      icon: FolderDown,
      badge: '01',
      sentence: 'Consolidate official Form 20 returns, gazette notifications, and secondary election archives.',
      visual: (
        <svg viewBox="0 0 160 100" className="w-full h-20 text-[#0066CC]" fill="none" stroke="currentColor">
          <rect x="25" y="20" width="110" height="65" rx="8" strokeWidth="2" fill="#F8FAFC" />
          <path d="M45 40h70M45 52h50M45 64h60" strokeWidth="2" strokeLinecap="round" stroke="#CBD5E1" />
          <circle cx="115" cy="62" r="12" fill="#0066CC" stroke="none" />
          <path d="M111 62l3 3 5-5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      action: 'Verify',
      icon: ShieldCheck,
      badge: '02',
      sentence: 'Independently cross-check booth vote totals, arithmetic sums, and source definitions.',
      visual: (
        <svg viewBox="0 0 160 100" className="w-full h-20 text-[#0066CC]" fill="none" stroke="currentColor">
          <circle cx="50" cy="50" r="30" strokeWidth="2" stroke="#CBD5E1" strokeDasharray="3 3" />
          <circle cx="110" cy="50" r="30" strokeWidth="2" stroke="#CBD5E1" strokeDasharray="3 3" />
          <circle cx="80" cy="50" r="18" fill="#EFF6FF" stroke="#0066CC" strokeWidth="2" />
          <path d="M74 50l4 4 8-8" stroke="#0066CC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      action: 'Map',
      icon: GitFork,
      badge: '03',
      sentence: 'Reconcile polling stations across 2016, 2021, and 2026 to track continuity and name changes.',
      visual: (
        <svg viewBox="0 0 160 100" className="w-full h-20 text-[#0066CC]" fill="none" stroke="currentColor">
          <circle cx="30" cy="50" r="10" fill="#EFF6FF" stroke="#0066CC" strokeWidth="2" />
          <circle cx="80" cy="30" r="10" fill="#EFF6FF" stroke="#0066CC" strokeWidth="2" />
          <circle cx="80" cy="70" r="10" fill="#EFF6FF" stroke="#0066CC" strokeWidth="2" />
          <circle cx="130" cy="50" r="10" fill="#EFF6FF" stroke="#0066CC" strokeWidth="2" />
          <path d="M40 50 C 60 50, 60 30, 70 30" strokeWidth="2" stroke="#0066CC" />
          <path d="M40 50 C 60 50, 60 70, 70 70" strokeWidth="2" stroke="#0066CC" />
          <path d="M90 30 C 105 30, 110 50, 120 50" strokeWidth="2" stroke="#0066CC" strokeDasharray="2 3" />
          <path d="M90 70 C 105 70, 110 50, 120 50" strokeWidth="2" stroke="#0066CC" strokeDasharray="2 3" />
        </svg>
      )
    },
    {
      action: 'Analyse',
      icon: BarChart3,
      badge: '04',
      sentence: 'Synthesise candidate vote shares, victory margins, turnout trends, and historical patterns.',
      visual: (
        <svg viewBox="0 0 160 100" className="w-full h-20 text-[#0066CC]" fill="none" stroke="currentColor">
          <rect x="30" y="55" width="16" height="30" rx="3" fill="#E2E8F0" stroke="none" />
          <rect x="55" y="35" width="16" height="50" rx="3" fill="#93C5FD" stroke="none" />
          <rect x="80" y="20" width="16" height="65" rx="3" fill="#0066CC" stroke="none" />
          <rect x="105" y="45" width="16" height="40" rx="3" fill="#E2E8F0" stroke="none" />
          <path d="M30 85h100" stroke="#94A3B8" strokeWidth="1.5" />
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
            Strategic Focus
          </span>
          <span className="text-[#86868B] text-xs">/ Section 02</span>
        </div>
        <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F]">
          From Historical Records to Clear Findings
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#6E6E73]">
          Four interconnected research pillars turning disparate archival returns into defensible intelligence.
        </p>
      </div>

      {/* Dominant 4 Visual Cards (65% of slide) */}
      <div className="my-auto py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {objectives.map((obj) => {
            const Icon = obj.icon;
            return (
              <div
                key={obj.badge}
                className="p-5 sm:p-6 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] hover:border-[#0066CC]/50 hover:bg-white shadow-sm transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#E5E5EA]">
                    <span className="font-mono text-xs font-bold text-[#0066CC] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      Phase {obj.badge}
                    </span>
                    <Icon className="w-5 h-5 text-[#86868B] group-hover:text-[#0066CC] transition-colors" />
                  </div>

                  <h3 className="mt-4 text-xl sm:text-2xl font-bold text-[#1D1D1F] tracking-tight">
                    {obj.action}
                  </h3>

                  {/* Clean Visual Diagram */}
                  <div className="my-4 py-2 flex items-center justify-center">
                    {obj.visual}
                  </div>

                  <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed">
                    {obj.sentence}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F0F0F2] flex items-center gap-1.5 text-[11px] text-[#0066CC] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Standardised Process</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-[#E5E5EA] flex items-center justify-between text-xs text-[#86868B]">
        <span>Viralimalai Constituency Electoral Research Proposal</span>
        <span>Ctrl Alt Kick Ad Tech Solutions Pvt Ltd</span>
      </div>
    </div>
  );
};
