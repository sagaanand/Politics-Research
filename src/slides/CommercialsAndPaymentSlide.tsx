import React from 'react';
import { CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { paymentMilestones, proposalMeta } from '../data/proposal';

export const CommercialsAndPaymentSlide: React.FC = () => {
  const milestones = [
    {
      pct: 40,
      amount: paymentMilestones.advance,
      title: 'Project Kickoff',
      badge: 'Milestone 01',
      trigger: 'Payable prior to commencement of data audit, document retrieval, and fieldwork setup.',
      note: 'Mobilisation & Schema Setup'
    },
    {
      pct: 30,
      amount: paymentMilestones.interim,
      title: 'Interim Review',
      badge: 'Milestone 02',
      trigger: 'Triggered when extraction, polling-station concordance, and cross-checks are substantially complete.',
      note: 'Draft Dataset & Concordance'
    },
    {
      pct: 30,
      amount: paymentMilestones.final,
      title: 'Final Handover',
      badge: 'Milestone 03',
      trigger: 'Payable upon delivery of agreed final deliverables and closure of two formal client review rounds.',
      note: 'Master Dataset & Final Report'
    }
  ];

  const commercialNotes = [
    'Fixed quotation based on agreed 4-week scope and dedicated research allocation.',
    'Includes two (2) formal consolidated client review and presentation rounds.',
    'Additional research requests or extra constituencies quoted separately on request.',
    'GST and applicable statutory taxes will be applied at prevailing standard rates.'
  ];

  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white select-none">
      {/* Header */}
      <div>
        <div className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold tracking-widest uppercase text-[#0066CC] mb-2">
          Commercial Terms & Schedule
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1D1D1F]">
          A Defined Research Engagement
        </h2>
        <p className="mt-2 text-lg sm:text-xl text-[#4B5563] max-w-4xl">
          Transparent, milestone-based quotation structured for accountability and verified delivery.
        </p>
      </div>

      {/* Dominant Visual Layout: Fee Hero + 3 Milestones + Commercial Terms (65% of slide) */}
      <div className="my-auto py-3">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Dominant Fee Card */}
          <div className="lg:col-span-4 p-8 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6E6E73]">
                  Preliminary Project Quotation
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-50 text-[#0066CC] border border-blue-200 font-bold">
                  Fixed Fee
                </span>
              </div>

              {/* Dominant Visual Typography: ₹1,20,750 */}
              <div className="mt-6">
                <div className="text-5xl sm:text-6xl md:text-7xl font-extrabold font-mono tracking-tight text-[#1D1D1F]">
                  {proposalMeta.preliminaryFeeFormatted}
                </div>
                <div className="mt-2 text-sm text-[#86868B] font-medium">
                  Indian Rupees · Exclusive of statutory taxes
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E5E5EA] space-y-3.5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#6E6E73]">Target Duration:</span>
                  <span className="font-bold text-[#1D1D1F]">4 Calendar Weeks</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#6E6E73]">Field Allowance:</span>
                  <span className="font-bold text-[#1D1D1F]">{proposalMeta.expenseAllowanceFormatted} Included</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#6E6E73]">Review Rounds:</span>
                  <span className="font-bold text-[#1D1D1F]">{proposalMeta.reviewRounds} Included</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E5E5EA] flex items-center gap-2 text-xs text-[#86868B]">
              <CheckCircle2 className="w-4 h-4 text-[#0066CC] shrink-0" />
              <span>Full deliverable suite included upon project completion</span>
            </div>
          </div>

          {/* Right Column: 3 Horizontal Milestone Cards + Terms */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-5">
            {/* 3 Milestones */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {milestones.map((m, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-3xl border transition-all flex flex-col justify-between ${
                    idx === 0
                      ? 'bg-white border-[#0066CC]/60 shadow-md ring-2 ring-[#0066CC]/15'
                      : 'bg-white border-[#E5E5EA] shadow-sm hover:border-[#0066CC]/40'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E5E5EA]">
                      <span className="font-mono text-xs font-bold text-[#0066CC]">
                        {m.badge}
                      </span>
                      <span className="font-mono text-base font-extrabold text-[#1D1D1F] px-2 py-0.5 rounded bg-slate-100">
                        {m.pct}%
                      </span>
                    </div>

                    <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#1D1D1F]">
                      ₹{m.amount.toLocaleString('en-IN')}
                    </div>
                    <h3 className="mt-1.5 text-base font-bold text-[#1D1D1F]">{m.title}</h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-[#4B5563] leading-relaxed">{m.trigger}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#F0F0F2] text-xs text-[#0066CC] font-semibold flex items-center justify-between">
                    <span>{m.note}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>

            {/* Commercial Notes Card */}
            <div className="p-6 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm">
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1D1D1F] mb-3 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-[#0066CC]" /> Key Commercial Terms & Inclusions
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#4B5563]">
                {commercialNotes.map((note, nIdx) => (
                  <div key={nIdx} className="flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#0066CC] shrink-0 mt-0.5" />
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
        <span>Ctrl Alt Kick Ad Tech Solutions Pvt Ltd</span>
      </div>
    </div>
  );
};
