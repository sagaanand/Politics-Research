import React from 'react';
import { CreditCard, Calculator, ArrowUpRight } from 'lucide-react';
import { getMilestones, projectCommercials } from '../data/proposal';

export const PaymentTermsSlide: React.FC = () => {
  const milestones = getMilestones(projectCommercials.preliminaryFee);

  return (
    <div className="flex-1 w-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0066CC]">
            Cashflow & Invoicing
          </span>
          <span className="text-[#86868B] text-xs">/ Section 13</span>
        </div>
        <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1D1D1F]">
          Clear Milestones, Predictable Payments
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-[#6E6E73]">
          Three-tier milestone payment structure directly aligned with verified deliverables and research progress
        </p>
      </div>

      {/* 3 Milestone Cards Grid */}
      <div className="my-auto py-3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {milestones.map((m, idx) => (
            <div
              key={idx}
              className={`p-5 sm:p-6 rounded-2xl border transition-all flex flex-col justify-between ${
                idx === 0
                  ? 'bg-[#FBFBFD] border-[#0066CC]/50 shadow-sm ring-1 ring-[#0066CC]/15'
                  : 'bg-[#FBFBFD] border-[#E5E5EA]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#E5E5EA]">
                  <span className="font-mono text-xs font-bold text-[#0066CC] bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    Milestone {idx + 1}
                  </span>
                  <span className="font-mono text-base font-extrabold text-[#1D1D1F]">
                    {m.percentage}%
                  </span>
                </div>

                <div className="mt-4">
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#1D1D1F]">
                    ₹{m.amount.toLocaleString('en-IN')}
                  </div>
                  <h3 className="mt-2 text-sm font-bold text-[#1D1D1F] flex items-center gap-1.5">
                    {m.title}
                  </h3>
                </div>

                <div className="mt-4 p-2.5 rounded-lg bg-white border border-[#E5E5EA] text-xs text-[#1D1D1F]">
                  <div className="text-[10px] uppercase font-bold text-[#86868B] tracking-wider mb-1">
                    Invoice Trigger
                  </div>
                  <p className="leading-snug text-[#1D1D1F] font-medium">{m.trigger}</p>
                </div>

                <p className="mt-3 text-[11px] text-[#6E6E73] leading-relaxed">
                  {m.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#F0F0F2] flex items-center justify-between text-[11px] text-[#86868B]">
                <span>Status</span>
                <span className="flex items-center gap-1 font-medium text-[#1D1D1F]">
                  {idx === 0 ? 'Prior to Kickoff' : `Milestone ${idx + 1}`}
                  <ArrowUpRight className="w-3 h-3 text-[#0066CC]" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Centralized Pricing Architecture Callout */}
      <div className="p-3.5 rounded-xl bg-[#F5F5F7] border border-[#E5E5EA] flex items-start gap-3 text-xs text-[#6E6E73]">
        <Calculator className="w-4 h-4 text-[#0066CC] shrink-0 mt-0.5" />
        <div>
          <p>
            <strong className="text-[#1D1D1F]">Dynamic Milestone Calculation:</strong> These amounts are programmatically derived from the central pricing configuration (₹1,72,500 base). If the final agreed scope or quotation changes, the milestone allocations update automatically to maintain exact 40% / 30% / 30% proportionality.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-[#E5E5EA] flex items-center justify-between text-xs text-[#86868B]">
        <span>Viralimalai Constituency Electoral Research Proposal</span>
        <span className="flex items-center gap-1.5 text-xs">
          <CreditCard className="w-3.5 h-3.5 text-[#0066CC]" /> Total Payment Commitment: ₹1,72,500 (100%)
        </span>
      </div>
    </div>
  );
};
