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
    { num: '01', title: 'Scope Approval', desc: 'Confirm research boundaries & deliverables' },
    { num: '02', title: 'Calendar Alignment', desc: 'Confirm project start date' },
    { num: '03', title: 'Kickoff Advance', desc: 'Disburse 40% (₹48,300) milestone' },
    { num: '04', title: 'Fieldwork Launch', desc: 'Mobilise team for archival audits' }
  ];

  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white select-none">
      {/* Header */}
      <div>
        <div className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold tracking-widest uppercase text-[#0066CC] mb-2">
          Execution Authorization
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1D1D1F]">
          Ready to Begin With a Clear Scope
        </h2>
        <p className="mt-2 text-lg sm:text-xl text-[#4B5563] max-w-4xl">
          Formal authorization schedule and onboarding sequence for Viralimalai Constituency Electoral Research.
        </p>
      </div>

      {/* Dominant Visual Layout: 4 Steps + Fillable Approval Form (65% of slide) */}
      <div className="my-auto py-2 space-y-4">
        {/* 4-Step Visual Sequence */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {steps.map((st) => (
            <div key={st.num} className="p-4 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066CC] font-mono font-bold text-sm flex items-center justify-center shrink-0">
                {st.num}
              </span>
              <div>
                <div className="text-sm sm:text-base font-bold text-[#1D1D1F] leading-tight">{st.title}</div>
                <div className="text-xs text-[#6E6E73] mt-1">{st.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Approval Schedule Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Column: Project Summary */}
            <div className="lg:col-span-5 space-y-4 border-b lg:border-b-0 lg:border-r border-[#E5E5EA] pb-4 lg:pb-0 lg:pr-6">
              <div>
                <div className="text-xs uppercase font-bold text-[#86868B] tracking-wider">Project Proposal</div>
                <div className="font-extrabold text-[#1D1D1F] text-lg sm:text-xl mt-1">{proposalMeta.projectTitle}</div>
                <div className="text-[#0066CC] font-bold text-sm mt-0.5">{proposalMeta.projectSubtitle} (2016 · 2021 · 2026)</div>
              </div>

              <div className="pt-3 border-t border-[#F0F0F2] grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs uppercase font-bold text-[#86868B]">Preliminary Quotation</div>
                  <div className="font-mono font-extrabold text-xl text-[#1D1D1F] mt-1">₹{preliminaryProjectFee.toLocaleString('en-IN')}</div>
                  <div className="text-xs text-[#86868B] mt-0.5">Excl. statutory taxes</div>
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-[#86868B]">Target Duration</div>
                  <div className="font-bold text-base text-[#1D1D1F] mt-1">{proposalMeta.targetDuration}</div>
                  <div className="text-xs text-[#86868B] mt-0.5">Subject to source access</div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#F0F0F2]">
                <div className="text-xs uppercase font-bold text-[#86868B]">Service Provider</div>
                <div className="font-bold text-[#1D1D1F] text-base mt-1">{proposalMeta.preparedBy}</div>
                <div className="text-[#4B5563] text-sm">{proposalMeta.company}</div>
              </div>

              {onPrint && (
                <div className="pt-3">
                  <button
                    type="button"
                    onClick={onPrint}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-white border border-[#E5E5EA] hover:border-[#0066CC] hover:text-[#0066CC] text-sm font-bold text-[#1D1D1F] shadow-sm transition-all"
                  >
                    <Printer className="w-4 h-4 text-[#0066CC]" />
                    Print / Save Formal Approval PDF
                  </button>
                </div>
              )}
            </div>

            {/* Right Column: Interactive Approval Inputs */}
            <div className="lg:col-span-7 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div>
                  <label htmlFor="app-client-org" className="block text-xs font-bold text-[#1D1D1F] mb-1.5">
                    Client Organisation
                  </label>
                  <input
                    id="app-client-org"
                    type="text"
                    value={clientOrg}
                    onChange={e => setClientOrg(e.target.value)}
                    placeholder="Organisation Name"
                    className="w-full px-3 py-2 rounded-xl border border-[#E5E5EA] bg-white text-sm focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC] outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="app-rep-name" className="block text-xs font-bold text-[#1D1D1F] mb-1.5">
                    Authorised Signatory
                  </label>
                  <input
                    id="app-rep-name"
                    type="text"
                    value={repName}
                    onChange={e => setRepName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full px-3 py-2 rounded-xl border border-[#E5E5EA] bg-white text-sm focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC] outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="app-designation" className="block text-xs font-bold text-[#1D1D1F] mb-1.5">
                    Designation
                  </label>
                  <input
                    id="app-designation"
                    type="text"
                    value={designation}
                    onChange={e => setDesignation(e.target.value)}
                    placeholder="Role / Title"
                    className="w-full px-3 py-2 rounded-xl border border-[#E5E5EA] bg-white text-sm focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC] outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="app-start-date" className="block text-xs font-bold text-[#1D1D1F] mb-1.5">
                    Agreed Start Date
                  </label>
                  <input
                    id="app-start-date"
                    type="date"
                    value={startDate}
                    onChange={e => setStartDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-[#E5E5EA] bg-white text-sm focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC] outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="app-confirmed-fee" className="block text-xs font-bold text-[#1D1D1F] mb-1.5">
                    Confirmed Fee
                  </label>
                  <input
                    id="app-confirmed-fee"
                    type="text"
                    value={confirmedFee}
                    onChange={e => setConfirmedFee(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-[#E5E5EA] bg-white text-sm font-mono focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC] outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="app-sign-date" className="block text-xs font-bold text-[#1D1D1F] mb-1.5">
                    Date of Sign-Off
                  </label>
                  <input
                    id="app-sign-date"
                    type="date"
                    value={signDate}
                    onChange={e => setSignDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-[#E5E5EA] bg-white text-sm focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC] outline-none"
                  />
                </div>
              </div>

              {/* Confirmation Checkboxes */}
              <div className="space-y-2.5 pt-2 border-t border-[#E5E5EA]">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={scopeAccepted}
                    onChange={e => setScopeAccepted(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded text-[#0066CC]"
                  />
                  <span className="text-xs sm:text-sm text-[#1D1D1F]">
                    <strong>Scope & Deliverables:</strong> We approve the proposed 4-week research scope, deliverables suite, and quotation of ₹{preliminaryProjectFee.toLocaleString('en-IN')}.
                  </span>
                </label>
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={e => setTermsAccepted(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded text-[#0066CC]"
                  />
                  <span className="text-xs sm:text-sm text-[#1D1D1F]">
                    <strong>Milestone Schedule:</strong> We accept the 40% Kickoff / 30% Interim / 30% Final Delivery milestone terms.
                  </span>
                </label>
              </div>

              {/* Signature */}
              <div className="pt-2 border-t border-[#E5E5EA]">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-[#1D1D1F]">Authorized Signature Placeholder</span>
                  <span className="text-xs text-[#86868B] italic">Sign physically upon printing or enter name below</span>
                </div>
                <div className="h-14 rounded-2xl border border-dashed border-[#CBD5E1] bg-white px-3.5 py-2 flex flex-col justify-center">
                  <input
                    type="text"
                    placeholder="Type name here for preview or sign physically on printed document"
                    value={signatureName}
                    onChange={e => setSignatureName(e.target.value)}
                    className="w-full text-sm text-[#1D1D1F] bg-transparent border-none focus:outline-none italic"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Execution Callout */}
      <div className="p-3.5 rounded-2xl bg-[#F5F5F7] border border-[#E5E5EA] flex items-center gap-3 text-xs sm:text-sm text-[#4B5563]">
        <Info className="w-4 h-4 text-[#0066CC] shrink-0" />
        <p>
          <strong>Formal Execution:</strong> This proposal document can be printed or saved to PDF for physical execution and records.
        </p>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-[#E5E5EA] flex items-center justify-between text-xs text-[#86868B]">
        <span>Viralimalai Constituency Electoral Research Proposal</span>
        <span className="flex items-center gap-1.5 text-[#0066CC] font-bold">
          <CheckCircle2 className="w-4 h-4" /> Ready for Kickoff
        </span>
      </div>
    </div>
  );
};
