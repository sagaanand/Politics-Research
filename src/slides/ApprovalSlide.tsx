import React, { useState } from 'react';
import { Printer, FileCheck, Info, CheckCircle2 } from 'lucide-react';
import { proposalMeta, preliminaryProjectFee } from '../data/proposal';

interface ApprovalSlideProps {
  onPrint?: () => void;
}

export const ApprovalSlide: React.FC<ApprovalSlideProps> = ({ onPrint }) => {
  const [clientOrg, setClientOrg] = useState('');
  const [repName, setRepName] = useState('');
  const [designation, setDesignation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [confirmedFee, setConfirmedFee] = useState(proposalMeta.preliminaryFeeFormatted);
  const [scopeAccepted, setScopeAccepted] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [signatureName, setSignatureName] = useState('');
  const [signDate, setSignDate] = useState('');

  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0066CC]">
            Execution Authorization
          </span>
          <span className="text-[#86868B] text-xs">/ Section 17</span>
        </div>
        <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F]">
          Approval to Proceed
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#6E6E73]">
          Formal authorization and sign-off schedule for Viralimalai Constituency Electoral Research.
        </p>
      </div>

      {/* Main Content Layout (65% of slide) */}
      <div className="my-auto py-3 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Project Summary Card */}
        <div className="lg:col-span-5 bg-[#FBFBFD] rounded-3xl p-6 border border-[#E5E5EA] shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#E5E5EA]">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1D1D1F]">
              Engagement Summary
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-50 text-[#0066CC] border border-blue-200 font-bold">
              Formal Proposal
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <div className="text-[10px] uppercase font-bold text-[#86868B] tracking-wider">Project</div>
              <div className="font-bold text-[#1D1D1F] text-base mt-0.5">{proposalMeta.projectSubtitle}</div>
              <div className="text-[#0066CC] font-semibold">{proposalMeta.projectTitle} (2016 · 2021 · 2026)</div>
            </div>

            <div className="pt-2 border-t border-[#F0F0F2]">
              <div className="text-[10px] uppercase font-bold text-[#86868B] tracking-wider">Prepared By</div>
              <div className="font-bold text-[#1D1D1F] mt-0.5">{proposalMeta.preparedBy}</div>
              <div className="text-[#6E6E73]">{proposalMeta.company}</div>
            </div>

            <div className="pt-2 border-t border-[#F0F0F2] grid grid-cols-2 gap-3">
              <div>
                <div className="text-[10px] uppercase font-bold text-[#86868B] tracking-wider">Preliminary Fee</div>
                <div className="font-mono font-extrabold text-xl text-[#1D1D1F] mt-0.5">₹{preliminaryProjectFee.toLocaleString('en-IN')}</div>
                <div className="text-[10px] text-[#86868B]">Excl. statutory taxes</div>
              </div>

              <div>
                <div className="text-[10px] uppercase font-bold text-[#86868B] tracking-wider">Target Timeline</div>
                <div className="font-bold text-base text-[#1D1D1F] mt-0.5">{proposalMeta.targetDuration}</div>
                <div className="text-[10px] text-[#86868B]">Subject to source access</div>
              </div>
            </div>

            <div className="pt-2 border-t border-[#F0F0F2]">
              <div className="text-[10px] uppercase font-bold text-[#86868B] tracking-wider">Milestone Schedule</div>
              <div className="text-[#1D1D1F] font-mono text-[11px] mt-0.5">
                40% (₹48,300) · 30% (₹36,225) · 30% (₹36,225)
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-[#E5E5EA]">
            {onPrint && (
              <button
                type="button"
                onClick={onPrint}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-2xl bg-white border border-[#E5E5EA] hover:border-[#1D1D1F] text-xs font-bold text-[#1D1D1F] shadow-sm transition-all"
              >
                <Printer className="w-4 h-4 text-[#0066CC]" />
                Print / Save Formal Approval PDF
              </button>
            )}
          </div>
        </div>

        {/* Right Column: Fillable / Printable Approval Form */}
        <div className="lg:col-span-7 bg-[#FBFBFD] rounded-3xl p-6 border border-[#E5E5EA] shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#E5E5EA]">
            <h3 className="text-xs font-bold tracking-wider uppercase text-[#1D1D1F] flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-[#0066CC]" /> Client Authorization Schedule
            </h3>
            <span className="text-[10px] text-[#86868B] font-mono">Fillable Schedule</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div>
              <label htmlFor="client-org-input" className="block text-[11px] font-semibold text-[#1D1D1F] mb-1">
                Client Organisation
              </label>
              <input
                id="client-org-input"
                type="text"
                value={clientOrg}
                onChange={e => setClientOrg(e.target.value)}
                placeholder="Official Organisation Name"
                className="w-full px-3 py-2 rounded-xl border border-[#E5E5EA] bg-white text-xs text-[#1D1D1F] focus:outline-none focus:ring-1 focus:ring-[#0066CC]"
              />
            </div>

            <div>
              <label htmlFor="rep-name-input" className="block text-[11px] font-semibold text-[#1D1D1F] mb-1">
                Authorised Representative
              </label>
              <input
                id="rep-name-input"
                type="text"
                value={repName}
                onChange={e => setRepName(e.target.value)}
                placeholder="Full Name"
                className="w-full px-3 py-2 rounded-xl border border-[#E5E5EA] bg-white text-xs text-[#1D1D1F] focus:outline-none focus:ring-1 focus:ring-[#0066CC]"
              />
            </div>

            <div>
              <label htmlFor="designation-input" className="block text-[11px] font-semibold text-[#1D1D1F] mb-1">
                Designation / Title
              </label>
              <input
                id="designation-input"
                type="text"
                value={designation}
                onChange={e => setDesignation(e.target.value)}
                placeholder="Title / Designation"
                className="w-full px-3 py-2 rounded-xl border border-[#E5E5EA] bg-white text-xs text-[#1D1D1F] focus:outline-none focus:ring-1 focus:ring-[#0066CC]"
              />
            </div>

            <div>
              <label htmlFor="start-date-input" className="block text-[11px] font-semibold text-[#1D1D1F] mb-1">
                Confirmed Start Date
              </label>
              <input
                id="start-date-input"
                type="date"
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-[#E5E5EA] bg-white text-xs text-[#1D1D1F] focus:outline-none focus:ring-1 focus:ring-[#0066CC]"
              />
            </div>

            <div>
              <label htmlFor="fee-input" className="block text-[11px] font-semibold text-[#1D1D1F] mb-1">
                Confirmed Project Fee
              </label>
              <input
                id="fee-input"
                type="text"
                value={confirmedFee}
                onChange={e => setConfirmedFee(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-[#E5E5EA] bg-white text-xs text-[#1D1D1F] font-mono focus:outline-none focus:ring-1 focus:ring-[#0066CC]"
              />
            </div>

            <div>
              <label htmlFor="sign-date-input" className="block text-[11px] font-semibold text-[#1D1D1F] mb-1">
                Authorization Date
              </label>
              <input
                id="sign-date-input"
                type="date"
                value={signDate}
                onChange={e => setSignDate(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-[#E5E5EA] bg-white text-xs text-[#1D1D1F] focus:outline-none focus:ring-1 focus:ring-[#0066CC]"
              />
            </div>
          </div>

          {/* Acknowledgement Checkboxes */}
          <div className="space-y-2 pt-2 border-t border-[#E5E5EA] text-xs">
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={scopeAccepted}
                onChange={e => setScopeAccepted(e.target.checked)}
                className="mt-0.5 rounded text-[#0066CC] focus:ring-0"
              />
              <span className="text-[#1D1D1F] text-[11px]">
                <strong>Scope Confirmation:</strong> We accept the 4-week research scope, 7 deliverables, and explicit exclusions (no voter profiling or software development).
              </span>
            </label>

            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={e => setTermsAccepted(e.target.checked)}
                className="mt-0.5 rounded text-[#0066CC] focus:ring-0"
              />
              <span className="text-[#1D1D1F] text-[11px]">
                <strong>Payment Terms:</strong> We agree to the milestone terms (40% advance: ₹48,300 / 30% interim: ₹36,225 / 30% final: ₹36,225).
              </span>
            </label>
          </div>

          {/* Signature Box */}
          <div className="pt-2 border-t border-[#E5E5EA]">
            <div className="flex items-center justify-between mb-1">
              <label htmlFor="auth-sign-input" className="text-[11px] font-semibold text-[#1D1D1F]">
                Authorised Signatory
              </label>
              <span className="text-[10px] text-[#86868B] italic">Physical signature required upon printing</span>
            </div>
            <div className="h-16 rounded-2xl border border-dashed border-[#CBD5E1] bg-white p-2.5 flex flex-col justify-end">
              <input
                id="auth-sign-input"
                type="text"
                placeholder="Type name for preview or sign physically on printed document"
                value={signatureName}
                onChange={e => setSignatureName(e.target.value)}
                className="w-full text-xs text-[#1D1D1F] bg-transparent border-none focus:outline-none italic"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Legal & Digital Sign Notice */}
      <div className="p-3.5 rounded-2xl bg-[#F5F5F7] border border-[#E5E5EA] flex items-start gap-2.5 text-xs text-[#6E6E73] leading-relaxed">
        <Info className="w-4 h-4 text-[#0066CC] shrink-0 mt-0.5" />
        <p>
          <strong className="text-[#1D1D1F]">Legal Standard:</strong> This authorization schedule is formatted for physical or PDF execution. Under Indian IT law, typed names in web forms do not constitute a certified digital signature unless accompanied by an accredited cryptographic certificate.
        </p>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-[#E5E5EA] flex items-center justify-between text-xs text-[#86868B]">
        <span>Viralimalai Constituency Electoral Research Proposal</span>
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#0066CC]" /> Ready for Execution
        </span>
      </div>
    </div>
  );
};
