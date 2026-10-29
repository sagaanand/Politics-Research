import React, { useState } from 'react';
import { Printer, Info, CheckCircle2 } from 'lucide-react';
import { proposalMeta, preliminaryProjectFee } from '../data/proposal';

interface ApprovalAndNextStepsSlideProps {
  onPrint?: () => void;
}

export const ApprovalAndNextStepsSlide: React.FC<ApprovalAndNextStepsSlideProps> = ({ onPrint }) => {
  const [clientOrg, setClientOrg] = useState('');
  const [repName, setRepName] = useState('');
  const [designation, setDesignation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [confirmedFee, setConfirmedFee] = useState(proposalMeta.preliminaryFeeFormatted);
  const [signDate, setSignDate] = useState('');
  const [scopeAccepted, setScopeAccepted] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [signatureName, setSignatureName] = useState('');

  const steps = [
    { num: '01', title: 'Approve Scope', desc: 'Confirm research boundaries & deliverables' },
    { num: '02', title: 'Confirm Date', desc: 'Agree upon target start calendar date' },
    { num: '03', title: '40% Advance', desc: 'Disburse ₹48,300 kickoff milestone' },
    { num: '04', title: 'Source Audit', desc: 'Mobilise team to audit archives & extract' }
  ];

  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white select-none">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0066CC]">
            Execution Authorization
          </span>
          <span className="text-[#86868B] text-xs">/ Section 21</span>
        </div>
        <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F]">
          Ready to Begin With a Clear Scope
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#6E6E73] max-w-3xl">
          Formal authorization schedule and onboarding sequence for Viralimalai Constituency Electoral Research.
        </p>
      </div>

      {/* Dominant Visual Layout: 4 Steps (Top) + Fillable Approval Form (Bottom) (65% of slide) */}
      <div className="my-auto py-2 space-y-3.5">
        {/* 4-Step Visual Sequence */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {steps.map((st) => (
            <div key={st.num} className="p-3 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#0066CC] font-mono font-bold text-xs flex items-center justify-center shrink-0">
                {st.num}
              </span>
              <div>
                <div className="text-xs font-bold text-[#1D1D1F] leading-tight">{st.title}</div>
                <div className="text-[10px] text-[#6E6E73] mt-0.5">{st.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Approval Schedule Card */}
        <div className="p-5 sm:p-6 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
            {/* Left Column: Project Summary */}
            <div className="lg:col-span-5 space-y-3 text-xs border-b lg:border-b-0 lg:border-r border-[#E5E5EA] pb-3 lg:pb-0 lg:pr-5">
              <div>
                <div className="text-[10px] uppercase font-bold text-[#86868B]">Project</div>
                <div className="font-bold text-[#1D1D1F] text-sm mt-0.5">{proposalMeta.projectSubtitle}</div>
                <div className="text-[#0066CC] font-semibold">{proposalMeta.projectTitle} (2016 · 2021 · 2026)</div>
              </div>

              <div className="pt-2 border-t border-[#F0F0F2] grid grid-cols-2 gap-2">
                <div>
                  <div className="text-[10px] uppercase font-bold text-[#86868B]">Preliminary Fee</div>
                  <div className="font-mono font-bold text-base text-[#1D1D1F] mt-0.5">₹{preliminaryProjectFee.toLocaleString('en-IN')}</div>
                  <div className="text-[9px] text-[#86868B]">Excl. statutory taxes</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-[#86868B]">Target Duration</div>
                  <div className="font-bold text-sm text-[#1D1D1F] mt-0.5">{proposalMeta.targetDuration}</div>
                  <div className="text-[9px] text-[#86868B]">Subject to access</div>
                </div>
              </div>

              <div className="pt-2 border-t border-[#F0F0F2]">
                <div className="text-[10px] uppercase font-bold text-[#86868B]">Prepared By</div>
                <div className="font-bold text-[#1D1D1F] mt-0.5">{proposalMeta.preparedBy}</div>
                <div className="text-[#6E6E73] text-[11px]">{proposalMeta.company}</div>
              </div>

              {onPrint && (
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={onPrint}
                    className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white border border-[#E5E5EA] hover:border-[#1D1D1F] text-xs font-bold text-[#1D1D1F] shadow-sm transition-all"
                  >
                    <Printer className="w-3.5 h-3.5 text-[#0066CC]" />
                    Print / Save Formal Approval PDF
                  </button>
                </div>
              )}
            </div>

            {/* Right Column: Interactive Approval Inputs */}
            <div className="lg:col-span-7 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                <div>
                  <label htmlFor="app-client-org" className="block text-[10px] font-bold text-[#1D1D1F] mb-1">
                    Client Organisation
                  </label>
                  <input
                    id="app-client-org"
                    type="text"
                    value={clientOrg}
                    onChange={e => setClientOrg(e.target.value)}
                    placeholder="Organisation Name"
                    className="w-full px-2.5 py-1.5 rounded-lg border border-[#E5E5EA] bg-white text-xs"
                  />
                </div>

                <div>
                  <label htmlFor="app-rep-name" className="block text-[10px] font-bold text-[#1D1D1F] mb-1">
                    Authorised Signatory
                  </label>
                  <input
                    id="app-rep-name"
                    type="text"
                    value={repName}
                    onChange={e => setRepName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full px-2.5 py-1.5 rounded-lg border border-[#E5E5EA] bg-white text-xs"
                  />
                </div>

                <div>
                  <label htmlFor="app-designation" className="block text-[10px] font-bold text-[#1D1D1F] mb-1">
                    Designation
                  </label>
                  <input
                    id="app-designation"
                    type="text"
                    value={designation}
                    onChange={e => setDesignation(e.target.value)}
                    placeholder="Role / Title"
                    className="w-full px-2.5 py-1.5 rounded-lg border border-[#E5E5EA] bg-white text-xs"
                  />
                </div>

                <div>
                  <label htmlFor="app-start-date" className="block text-[10px] font-bold text-[#1D1D1F] mb-1">
                    Confirmed Start Date
                  </label>
                  <input
                    id="app-start-date"
                    type="date"
                    value={startDate}
                    onChange={e => setStartDate(e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-lg border border-[#E5E5EA] bg-white text-xs"
                  />
                </div>

                <div>
                  <label htmlFor="app-confirmed-fee" className="block text-[10px] font-bold text-[#1D1D1F] mb-1">
                    Confirmed Fee
                  </label>
                  <input
                    id="app-confirmed-fee"
                    type="text"
                    value={confirmedFee}
                    onChange={e => setConfirmedFee(e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-lg border border-[#E5E5EA] bg-white text-xs font-mono"
                  />
                </div>

                <div>
                  <label htmlFor="app-sign-date" className="block text-[10px] font-bold text-[#1D1D1F] mb-1">
                    Date of Authorization
                  </label>
                  <input
                    id="app-sign-date"
                    type="date"
                    value={signDate}
                    onChange={e => setSignDate(e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-lg border border-[#E5E5EA] bg-white text-xs"
                  />
                </div>
              </div>

              {/* Confirmation Checkboxes */}
              <div className="space-y-1.5 pt-1.5 border-t border-[#E5E5EA] text-[11px]">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={scopeAccepted}
                    onChange={e => setScopeAccepted(e.target.checked)}
                    className="mt-0.5 rounded text-[#0066CC]"
                  />
                  <span className="text-[#1D1D1F]">
                    <strong>Scope & Terms Confirmation:</strong> We approve the proposed preliminary fee of ₹{preliminaryProjectFee.toLocaleString('en-IN')} and 4-week scope.
                  </span>
                </label>
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={e => setTermsAccepted(e.target.checked)}
                    className="mt-0.5 rounded text-[#0066CC]"
                  />
                  <span className="text-[#1D1D1F]">
                    We accept the 40% Kickoff / 30% Interim / 30% Final Delivery milestone payment terms.
                  </span>
                </label>
              </div>

              {/* Signature */}
              <div className="pt-1.5 border-t border-[#E5E5EA]">
                <div className="flex items-center justify-between mb-1 text-[10px]">
                  <span className="font-bold text-[#1D1D1F]">Signature Placeholder</span>
                  <span className="text-[#86868B] italic">Physical signature upon printing</span>
                </div>
                <div className="h-12 rounded-xl border border-dashed border-[#CBD5E1] bg-white p-2 flex flex-col justify-end">
                  <input
                    type="text"
                    placeholder="Type name for draft preview or sign physically on printed document"
                    value={signatureName}
                    onChange={e => setSignatureName(e.target.value)}
                    className="w-full text-xs text-[#1D1D1F] bg-transparent border-none focus:outline-none italic"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legal & Digital Sign Notice */}
      <div className="p-3 rounded-2xl bg-[#F5F5F7] border border-[#E5E5EA] flex items-center gap-2 text-[11px] text-[#6E6E73]">
        <Info className="w-3.5 h-3.5 text-[#0066CC] shrink-0" />
        <p>
          <strong>Legal Standard:</strong> Formatted for formal manual/PDF signing. In accordance with Indian IT Law, digital names typed here serve as draft placeholders without accredited cryptographic authority.
        </p>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-[#E5E5EA] flex items-center justify-between text-xs text-[#86868B]">
        <span>Viralimalai Constituency Electoral Research Proposal</span>
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#0066CC]" /> Ready for Kickoff
        </span>
      </div>
    </div>
  );
};
