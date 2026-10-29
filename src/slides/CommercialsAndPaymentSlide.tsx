import React from 'react';
import { CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { paymentMilestones, proposalMeta } from '../data/proposal';

interface CommercialsAndPaymentSlideProps {
  onOpenInternalCosting?: () => void;
}

export const CommercialsAndPaymentSlide: React.FC<CommercialsAndPaymentSlideProps> = ({ onOpenInternalCosting }) => {
  const milestones = [
    {
      pct: 40,
      amount: paymentMilestones.advance,
      title: 'Project Kickoff',
      badge: 'Milestone 01',
      trigger: 'Payable prior to commencement of data audit and fieldwork.',
      note: 'Mobilisation & setup'
    },
    {
      pct: 30,
      amount: paymentMilestones.interim,
      title: 'Interim Milestone',
      badge: 'Milestone 02',
      trigger: 'Triggered when dataset, polling-station mapping, and source verification are substantially complete.',
      note: 'Draft mapping & verified tables'
    },
    {
      pct: 30,
      amount: paymentMilestones.final,
      title: 'Final Delivery',
      badge: 'Milestone 03',
      trigger: 'Payable upon delivery of agreed final deliverables and closure of 2 review rounds.',
      note: 'Master dataset & report handover'
    }
  ];

  const commercialNotes = [
    'No contingency reserve is included; extra requests quoted separately',
    'Additional research or extra constituencies require separate approval',
    'Two (2) formal consolidated client review rounds included',
    'GST treatment must be confirmed before formal invoicing',
    'Estimate is preliminary until source availability is audited'
  ];

  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white select-none">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0066CC]">
            Commercial Proposal & Milestones
          </span>
          <span className="text-[#86868B] text-xs">/ Section 20</span>
        </div>
        <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F]">
          A Defined Research Engagement
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#6E6E73] max-w-3xl">
          Based on the current one-month manpower allocation and agreed research expense allowance.
        </p>
      </div>

      {/* Dominant Visual Layout: Fee Hero + 3 Milestones + Commercial Terms (65% of slide) */}
      <div className="my-auto py-3">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Dominant Fee Card */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6E6E73]">
                  Preliminary Project Estimate
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-50 text-[#0066CC] border border-blue-200 font-bold">
                  Fixed Fee
                </span>
              </div>

              {/* Dominant Visual Typography: ₹1,20,750 */}
              <div className="mt-5">
                <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-mono tracking-tight text-[#1D1D1F]">
                  {proposalMeta.preliminaryFeeFormatted}
                </div>
                <div className="mt-1 text-xs text-[#86868B]">
                  Indian Rupees · Exclusive of statutory taxes
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5E5EA] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#6E6E73]">Duration:</span>
                  <span className="font-semibold text-[#1D1D1F]">4 Calendar Weeks</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#6E6E73]">Field Allowance:</span>
                  <span className="font-semibold text-[#1D1D1F]">{proposalMeta.expenseAllowanceFormatted} Included</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#6E6E73]">Review Rounds:</span>
                  <span className="font-semibold text-[#1D1D1F]">{proposalMeta.reviewRounds}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-[#E5E5EA] text-[11px] text-[#86868B]">
              No internal salaries shown to client
            </div>
          </div>

          {/* Right Column: 3 Horizontal Milestone Cards + Terms */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-4">
            {/* 3 Milestones */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {milestones.map((m, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                    idx === 0
                      ? 'bg-white border-[#0066CC]/50 shadow-md ring-1 ring-[#0066CC]/15'
                      : 'bg-white border-[#E5E5EA] shadow-sm hover:border-[#0066CC]/40'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#E5E5EA]">
                      <span className="font-mono text-[11px] font-bold text-[#0066CC]">
                        {m.badge}
                      </span>
                      <span className="font-mono text-sm font-bold text-[#1D1D1F]">
                        {m.pct}%
                      </span>
                    </div>

                    <div className="text-xl sm:text-2xl font-extrabold font-mono text-[#1D1D1F]">
                      ₹{m.amount.toLocaleString('en-IN')}
                    </div>
                    <h4 className="mt-1 text-xs font-bold text-[#1D1D1F]">{m.title}</h4>
                    <p className="mt-2 text-[10px] text-[#6E6E73] leading-snug">{m.trigger}</p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-[#F0F0F2] text-[10px] text-[#0066CC] font-semibold flex items-center gap-0.5">
                    {m.note} <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              ))}
            </div>

            {/* Commercial Notes Card */}
            <div className="p-4 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-[#1D1D1F] mb-2 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-[#0066CC]" /> Key Commercial Terms:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#6E6E73]">
                {commercialNotes.map((note, nIdx) => (
                  <div key={nIdx} className="flex items-start gap-1.5 text-[11px] leading-snug">
                    <CheckCircle2 className="w-3 h-3 text-[#0066CC] shrink-0 mt-0.5" />
                    <span>{note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-[#E5E5EA] flex items-center justify-between text-xs text-[#86868B]">
        <span>Viralimalai Constituency Electoral Research Proposal</span>
        {onOpenInternalCosting && (
          <button
            type="button"
            onClick={onOpenInternalCosting}
            className="text-xs font-mono text-[#86868B] hover:text-[#0066CC] underline underline-offset-2 no-print"
          >
            Internal Reference Costing Model (Confidential)
          </button>
        )}
      </div>
    </div>
  );
};
