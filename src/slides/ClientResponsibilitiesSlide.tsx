import React from 'react';
import { UserCheck, ArrowRight, ClipboardCheck } from 'lucide-react';

interface ClientResponsibilitiesSlideProps {
  onGoToApproval?: () => void;
}

export const ClientResponsibilitiesSlide: React.FC<ClientResponsibilitiesSlideProps> = ({ onGoToApproval }) => {
  const responsibilities = [
    'Formally approve and confirm the agreed research scope & boundary',
    'Share any existing internal electoral documents, scans, or historic datasets in possession',
    'Facilitate access or official introduction to relevant regional administrative archives where feasible',
    'Designate an authorised point of contact (POC) for routine methodology and data queries',
    'Review interim outputs at agreed milestones (Interim Dataset & Mapping Handover)',
    'Consolidate feedback into structured batches during the two agreed review rounds',
    'Approve any supplementary research requests or scope extensions formally in writing'
  ];

  const steps = [
    { num: '01', title: 'Scope & Commercial Approval', desc: 'Sign approval schedule and confirm engagement scope' },
    { num: '02', title: 'Project Start Date Confirmation', desc: 'Mutually agree upon formal Week 1 kickoff date' },
    { num: '03', title: '40% Advance Payment', desc: 'Mobilise dedicated research team (₹69,000 disbursement)' },
    { num: '04', title: 'Source & Document Audit', desc: 'Inventory existing files and launch primary document collection' },
    { num: '05', title: 'Baseline Plan Sign-Off', desc: 'Lock master schema definitions and extraction templates' },
    { num: '06', title: 'Launch 4-Week Schedule', desc: 'Commence active extraction, mapping, verification, and analysis' }
  ];

  return (
    <div className="flex-1 w-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0066CC]">
            Collaboration Protocol
          </span>
          <span className="text-[#86868B] text-xs">/ Section 16</span>
        </div>
        <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1D1D1F]">
          Ready to Begin With a Clear Scope
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-[#6E6E73]">
          Clear client expectations and sequential onboarding steps to ensure on-time delivery
        </p>
      </div>

      {/* Main Grid: Left Responsibilities, Right Next Steps */}
      <div className="my-auto py-3 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Client Responsibilities */}
        <div className="lg:col-span-5 bg-[#FBFBFD] rounded-2xl p-5 sm:p-6 border border-[#E5E5EA] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#E5E5EA]">
              <h3 className="text-xs font-semibold tracking-wider uppercase text-[#1D1D1F] flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-[#0066CC]" /> Client Responsibilities
              </h3>
              <span className="text-[10px] font-mono text-[#86868B]">7 Essentials</span>
            </div>

            <div className="mt-3.5 space-y-2.5">
              {responsibilities.map((resp, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#1D1D1F]">
                  <span className="w-4 h-4 rounded-full bg-blue-50 text-[#0066CC] font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="leading-relaxed">{resp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Next Steps: 6-Step Kickoff Sequence */}
        <div className="lg:col-span-7 bg-[#FBFBFD] rounded-2xl p-5 sm:p-6 border border-[#E5E5EA] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#E5E5EA]">
              <h3 className="text-xs font-semibold tracking-wider uppercase text-[#1D1D1F] flex items-center gap-2">
                <ClipboardCheck className="w-4 h-4 text-[#0066CC]" /> Kickoff Sequence & Next Steps
              </h3>
              <span className="text-[10px] font-mono text-[#0066CC] font-semibold">Immediate Action</span>
            </div>

            <div className="mt-3.5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {steps.map((st) => (
                <div key={st.num} className="p-3 rounded-xl bg-white border border-[#E5E5EA] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] font-bold text-[#0066CC] bg-blue-50 px-2 py-0.5 rounded">
                        Step {st.num}
                      </span>
                    </div>
                    <h4 className="mt-2 text-xs font-bold text-[#1D1D1F]">{st.title}</h4>
                    <p className="mt-1 text-[11px] text-[#6E6E73] leading-snug">{st.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#E5E5EA] flex items-center justify-between">
            <span className="text-xs text-[#6E6E73]">Proceed to execution sign-off</span>
            {onGoToApproval && (
              <button
                type="button"
                onClick={onGoToApproval}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0066CC] text-white hover:bg-[#0077ED] text-xs font-medium transition-colors"
              >
                Go to Approval Slide
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
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
