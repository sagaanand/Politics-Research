import React from 'react';
import { CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';

export const AssumptionsSlide: React.FC = () => {
  const inclusions = [
    'Historical research strictly for Viralimalai Assembly Constituency (AC-179)',
    'Election years: 2016, 2021, and 2026 general election cycles',
    'Polling-station-level data extraction, aggregation, and verification',
    'Source verification register and transparent discrepancy tracking',
    'Cross-year station mapping matrix where supported by official evidence',
    'Full deliverables suite: Master Excel, PDF Report, Presentation, Source Register, Missing-Data Log',
    'Two (2) consolidated formal client review and feedback rounds'
  ];

  const exclusions = [
    'Software development, custom web applications, or live SaaS electoral dashboards',
    'Individual voter-level profiling, demographic guessing, or household tracking',
    'Personal voter-preference databases or psychographic modelling',
    'Voter-level micro-targeting or individual political persuasion strategies',
    'Guarantees or algorithmic predictions of future election outcomes',
    'Unapproved additional constituencies or supplementary deliverables',
    'Unlimited or un-consolidated revision and design cycles',
    'Unapproved research expenses exceeding the agreed ₹10,000 allowance'
  ];

  return (
    <div className="flex-1 w-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0066CC]">
            Scope Governance
          </span>
          <span className="text-[#86868B] text-xs">/ Section 14</span>
        </div>
        <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1D1D1F]">
          Clear Scope. No Hidden Assumptions.
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-[#6E6E73]">
          Definitive boundary setting protecting research integrity and client expectations
        </p>
      </div>

      {/* Inclusions vs Exclusions Grid */}
      <div className="my-auto py-3 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
        {/* Included */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#FBFBFD] border border-emerald-200/80 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#E5E5EA]">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Formally Included
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                In-Scope
              </span>
            </div>

            <div className="mt-3.5 space-y-2">
              {inclusions.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#1D1D1F]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Excluded */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#FBFBFD] border border-rose-200/80 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#E5E5EA]">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-800 flex items-center gap-1.5">
                <XCircle className="w-4 h-4 text-rose-600" /> Explicitly Excluded
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200 font-semibold">
                Out-of-Scope
              </span>
            </div>

            <div className="mt-3.5 space-y-2">
              {exclusions.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#6E6E73]">
                  <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Limitations Banner */}
      <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 flex items-start gap-2.5 text-xs text-amber-900 leading-relaxed">
        <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <p>
          <strong>Research Limitations:</strong> The completeness of the final dataset depends on the official and secondary records that can be located and verified. Missing or conflicting records will be transparently documented in the audit register. Any subsequent scope expansions, new constituencies, or deliverables require separate costing and written client approval.
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
