import React from 'react';
import { CreditCard, CheckCircle2, ArrowRight } from 'lucide-react';
import { paymentMilestones, projectCommercials, preliminaryProjectFee } from '../data/proposal';

export const PaymentTermsSlide: React.FC = () => {
  const milestones = [
    {
      pct: projectCommercials.advancePercentage,
      amount: paymentMilestones.advance,
      title: 'Project Kickoff',
      badge: 'Milestone 01',
      trigger: 'Payable prior to commencement of data audit and fieldwork.',
      note: 'Mobilisation & infrastructure setup'
    },
    {
      pct: projectCommercials.interimPercentage,
      amount: paymentMilestones.interim,
      title: 'Interim Milestone',
      badge: 'Milestone 02',
      trigger: 'Triggered when dataset, polling-station mapping, and source verification are substantially complete.',
      note: 'Draft mapping & verified tables delivery'
    },
    {
      pct: projectCommercials.finalPercentage,
      amount: paymentMilestones.final,
      title: 'Final Delivery',
      badge: 'Milestone 03',
      trigger: 'Payable upon delivery of agreed final deliverables and closure of 2 review rounds.',
      note: 'Master dataset, analytical report & presentation handover'
    }
  ];

  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0066CC]">
            Cashflow & Invoicing
          </span>
          <span className="text-[#86868B] text-xs">/ Section 13</span>
        </div>
        <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F]">
          Three Clear Payment Milestones
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#6E6E73]">
          Predictable, milestone-linked disbursements tethered to transparent research deliverables.
        </p>
      </div>

      {/* Dominant Horizontal Payment Progress Visual (65% of slide) */}
      <div className="my-auto py-4 w-full">
        <div className="p-6 sm:p-8 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm">
          {/* Top Progress Track */}
          <div className="hidden md:flex items-center gap-2 mb-6">
            <div className="h-2 flex-[40] bg-[#0066CC] rounded-l-full" />
            <div className="h-2 flex-[30] bg-[#3B82F6]" />
            <div className="h-2 flex-[30] bg-[#93C5FD] rounded-r-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border transition-all flex flex-col justify-between ${
                  idx === 0
                    ? 'bg-white border-[#0066CC]/50 shadow-md ring-1 ring-[#0066CC]/15'
                    : 'bg-white border-[#E5E5EA] shadow-sm hover:border-[#0066CC]/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#E5E5EA]">
                    <span className="font-mono text-xs font-bold text-[#0066CC] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      {m.badge}
                    </span>
                    <span className="font-mono text-lg font-extrabold text-[#1D1D1F]">
                      {m.pct}%
                    </span>
                  </div>

                  <div className="mt-4">
                    <div className="text-3xl sm:text-4xl font-extrabold font-mono text-[#1D1D1F]">
                      ₹{m.amount.toLocaleString('en-IN')}
                    </div>
                    <h3 className="mt-2 text-base font-bold text-[#1D1D1F]">
                      {m.title}
                    </h3>
                  </div>

                  <p className="mt-3 text-xs text-[#6E6E73] leading-relaxed">
                    {m.trigger}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#F0F0F2] flex items-center justify-between text-[11px] text-[#86868B]">
                  <span>Deliverable Stage</span>
                  <span className="font-semibold text-[#0066CC] flex items-center gap-0.5">
                    {m.note} <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Programmatic Pricing Standard Banner */}
      <div className="p-3.5 rounded-2xl bg-[#F5F5F7] border border-[#E5E5EA] flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-[#1D1D1F]">
          <CheckCircle2 className="w-4 h-4 text-[#0066CC] shrink-0" />
          <span>
            <strong>Centralized Calculation:</strong> All milestones are dynamically derived from the central preliminary fee of <strong>₹{preliminaryProjectFee.toLocaleString('en-IN')}</strong> (100% total).
          </span>
        </div>
        <span className="text-[11px] font-mono text-[#86868B] shrink-0 hidden sm:inline">
          Verified Financial Formula
        </span>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-[#E5E5EA] flex items-center justify-between text-xs text-[#86868B]">
        <span>Viralimalai Constituency Electoral Research Proposal</span>
        <span className="flex items-center gap-1.5">
          <CreditCard className="w-3.5 h-3.5 text-[#0066CC]" /> 40% / 30% / 30% Milestone Structure
        </span>
      </div>
    </div>
  );
};
