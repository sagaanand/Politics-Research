import React from 'react';
import { ArrowRight, UserCheck, CheckCircle2 } from 'lucide-react';

interface ClientResponsibilitiesSlideProps {
  onGoToApproval?: () => void;
}

export const ClientResponsibilitiesSlide: React.FC<ClientResponsibilitiesSlideProps> = ({ onGoToApproval }) => {
  const steps = [
    { num: '01', title: 'Approve Scope', desc: 'Confirm research boundaries, deliverables & commercials' },
    { num: '02', title: 'Confirm Start Date', desc: 'Agree upon the target kickoff calendar date' },
    { num: '03', title: 'Pay 40% Advance', desc: 'Disburse ₹48,300 kickoff milestone to mobilise team' },
    { num: '04', title: 'Begin Source Audit', desc: 'Deploy team to audit documents and commence extraction' }
  ];

  const clientResponsibilities = [
    {
      title: 'Document Sharing',
      desc: 'Provide any existing Form 20s, candidate lists, or past election files in client possession.'
    },
    {
      title: 'Record Access',
      desc: 'Facilitate administrative access or introductions to district election offices where necessary.'
    },
    {
      title: 'Timely Feedback',
      desc: 'Provide consolidated feedback within agreed review windows for both formal review rounds.'
    }
  ];

  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0066CC]">
            Engagement Kickoff
          </span>
          <span className="text-[#86868B] text-xs">/ Section 16</span>
        </div>
        <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F]">
          From Approval to Research Kickoff
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#6E6E73]">
          A clear, frictionless four-step mobilization sequence from agreement sign-off to active data audit.
        </p>
      </div>

      {/* Dominant Visual: 4-Step Kickoff Sequence + Compact Responsibilities (65% of slide) */}
      <div className="my-auto py-4 space-y-5">
        {/* 4-Step Process Grid */}
        <div className="p-6 sm:p-7 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm">
          <div className="flex items-center justify-between pb-3 border-b border-[#E5E5EA] mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1D1D1F]">
              Four-Step Mobilization Sequence
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-[#0066CC] border border-blue-200 font-semibold">
              Immediate Action
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((st) => (
              <div
                key={st.num}
                className="p-5 rounded-2xl bg-white border border-[#E5E5EA] shadow-sm hover:border-[#0066CC]/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="w-8 h-8 rounded-xl bg-blue-50 text-[#0066CC] font-mono font-bold text-sm flex items-center justify-center border border-blue-100 group-hover:bg-[#0066CC] group-hover:text-white transition-colors">
                    {st.num}
                  </span>
                  <h4 className="mt-3 text-base font-bold text-[#1D1D1F]">
                    {st.title}
                  </h4>
                  <p className="mt-1 text-xs text-[#6E6E73] leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                <div className="mt-4 pt-2.5 border-t border-[#F0F0F2] flex items-center gap-1 text-[11px] font-medium text-[#0066CC]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Kickoff Phase</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compact Client Responsibilities Section */}
        <div className="p-5 rounded-2xl bg-white border border-[#E5E5EA] shadow-sm">
          <div className="flex items-center gap-2 pb-2 mb-3 border-b border-[#E5E5EA]">
            <UserCheck className="w-4 h-4 text-[#0066CC]" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#1D1D1F]">
              Client Responsibilities for Smooth Execution
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {clientResponsibilities.map((resp, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA]/70">
                <div className="text-xs font-bold text-[#1D1D1F] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0066CC]" />
                  <span>{resp.title}</span>
                </div>
                <p className="mt-1 text-[11px] text-[#6E6E73] leading-relaxed">
                  {resp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer & Action to Approval */}
      <div className="pt-4 border-t border-[#E5E5EA] flex items-center justify-between text-xs text-[#86868B]">
        <span>Viralimalai Constituency Electoral Research Proposal</span>
        {onGoToApproval && (
          <button
            type="button"
            onClick={onGoToApproval}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0066CC] text-white hover:bg-[#0077ED] text-xs font-semibold transition-all shadow-sm hover:shadow"
          >
            <span>Proceed to Approval</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};
