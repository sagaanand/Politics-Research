import React from 'react';
import { CheckCircle2, XCircle, ShieldCheck } from 'lucide-react';

export const AssumptionsSlide: React.FC = () => {
  const inclusions = [
    'Historical data collection for Viralimalai (2016, 2021, 2026)',
    'Polling-station verification & cross-cycle mapping',
    'Comparative candidate, party, and turnout analysis',
    'Excel dataset & comprehensive PDF report deliverables',
    'Transparent source register & discrepancy documentation',
    'Two (2) consolidated formal client review rounds'
  ];

  const exclusions = [
    'Software development, apps, or live SaaS dashboards',
    'Live electoral tracking or election-day software tools',
    'Individual voter profiling or demographic guessing',
    'Personal voter-preference or persuasion databases',
    'Unlimited revision rounds or ad-hoc redesigns',
    'Unapproved additional constituencies or field research'
  ];

  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0066CC]">
            Scope Governance
          </span>
          <span className="text-[#86868B] text-xs">/ Section 14</span>
        </div>
        <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F]">
          Clear Scope. Clear Expectations.
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#6E6E73]">
          Unambiguous boundaries established upfront to ensure mutual clarity and research focus.
        </p>
      </div>

      {/* Dominant 2-Column Visual Comparison Layout (65% of slide) */}
      <div className="my-auto py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {/* Included Column */}
          <div className="p-6 sm:p-7 rounded-3xl bg-[#FBFBFD] border border-emerald-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#E5E5EA]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                    Formally Included
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold">
                  In-Scope
                </span>
              </div>

              <div className="mt-4 space-y-2.5">
                {inclusions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#1D1D1F] p-2 rounded-xl bg-white border border-[#E5E5EA]/70">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-snug font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Excluded Column */}
          <div className="p-6 sm:p-7 rounded-3xl bg-[#FBFBFD] border border-rose-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#E5E5EA]">
                <div className="flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-rose-600" />
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-800">
                    Explicitly Excluded
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200 font-bold">
                  Out-of-Scope
                </span>
              </div>

              <div className="mt-4 space-y-2.5">
                {exclusions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#6E6E73] p-2 rounded-xl bg-white border border-[#E5E5EA]/70">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scope Alignment Banner */}
      <div className="p-3.5 rounded-2xl bg-[#F5F5F7] border border-[#E5E5EA] flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-[#1D1D1F]">
          <ShieldCheck className="w-4 h-4 text-[#0066CC] shrink-0" />
          <span>
            <strong>Research Boundary Standard:</strong> Any expansion beyond the agreed 3-election scope requires separate costing and written mutual agreement.
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#86868B] shrink-0 hidden sm:inline">
          Scope Locked
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
