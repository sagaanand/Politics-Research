import React, { useState } from 'react';
import { proposalMeta } from '../data/proposal';
import { Printer, FileCheck } from 'lucide-react';

interface ApprovalPanelProps {
  onPrint?: () => void;
}

export const ApprovalPanel: React.FC<ApprovalPanelProps> = ({ onPrint }) => {
  const [clientOrg, setClientOrg] = useState('');
  const [repName, setRepName] = useState('');
  const [designation, setDesignation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [signature, setSignature] = useState('');
  const [scopeAccepted, setScopeAccepted] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  return (
    <div className="w-full bg-[#FBFBFD] rounded-2xl p-5 border border-[#E5E5EA] space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-[#E5E5EA]">
        <h3 className="text-xs font-semibold tracking-wider uppercase text-[#1D1D1F] flex items-center gap-2">
          <FileCheck className="w-4 h-4 text-[#0066CC]" /> Client Authorization Form
        </h3>
        {onPrint && (
          <button
            type="button"
            onClick={onPrint}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-[#E5E5EA] text-[11px] font-semibold text-[#1D1D1F] hover:border-[#1D1D1F] transition-all no-print"
          >
            <Printer className="w-3.5 h-3.5 text-[#0066CC]" /> Print Sheet
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        <div>
          <label htmlFor="client-panel-org-input" className="block text-[11px] font-semibold text-[#1D1D1F] mb-1">Client Organisation</label>
          <input
            id="client-panel-org-input"
            type="text"
            value={clientOrg}
            onChange={e => setClientOrg(e.target.value)}
            placeholder="Official Organisation Name"
            className="w-full px-3 py-1.5 rounded-lg border border-[#E5E5EA] bg-white text-xs text-[#1D1D1F]"
          />
        </div>

        <div>
          <label htmlFor="client-panel-rep-input" className="block text-[11px] font-semibold text-[#1D1D1F] mb-1">Authorised Signatory</label>
          <input
            id="client-panel-rep-input"
            type="text"
            value={repName}
            onChange={e => setRepName(e.target.value)}
            placeholder="Representative Name"
            className="w-full px-3 py-1.5 rounded-lg border border-[#E5E5EA] bg-white text-xs text-[#1D1D1F]"
          />
        </div>

        <div>
          <label htmlFor="client-panel-designation-input" className="block text-[11px] font-semibold text-[#1D1D1F] mb-1">Designation</label>
          <input
            id="client-panel-designation-input"
            type="text"
            value={designation}
            onChange={e => setDesignation(e.target.value)}
            placeholder="Designation / Role"
            className="w-full px-3 py-1.5 rounded-lg border border-[#E5E5EA] bg-white text-xs text-[#1D1D1F]"
          />
        </div>

        <div>
          <label htmlFor="client-panel-start-input" className="block text-[11px] font-semibold text-[#1D1D1F] mb-1">Confirmed Start Date</label>
          <input
            id="client-panel-start-input"
            type="date"
            value={startDate}
            onChange={e => setStartDate(e.target.value)}
            className="w-full px-3 py-1.5 rounded-lg border border-[#E5E5EA] bg-white text-xs text-[#1D1D1F]"
          />
        </div>
      </div>

      <div className="pt-2 border-t border-[#E5E5EA] space-y-2 text-xs">
        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={scopeAccepted}
            onChange={e => setScopeAccepted(e.target.checked)}
            className="mt-0.5 rounded text-[#0066CC]"
          />
          <span className="text-[11px] text-[#1D1D1F]">
            We accept the proposed preliminary fee of <strong>{proposalMeta.preliminaryFeeFormatted}</strong> and 4-week scope.
          </span>
        </label>
        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={e => setTermsAccepted(e.target.checked)}
            className="mt-0.5 rounded text-[#0066CC]"
          />
          <span className="text-[11px] text-[#1D1D1F]">
            We accept the 40% Kickoff / 30% Interim / 30% Final Handover payment milestone terms.
          </span>
        </label>
      </div>

      <div className="pt-2 border-t border-[#E5E5EA]">
        <label htmlFor="client-panel-sign-input" className="block text-[11px] font-semibold text-[#1D1D1F] mb-1">Signature Placeholder</label>
        <div className="h-14 rounded-xl border border-dashed border-[#C7C7CC] bg-white p-2">
          <input
            id="client-panel-sign-input"
            type="text"
            placeholder="Physical signature or draft placeholder name"
            value={signature}
            onChange={e => setSignature(e.target.value)}
            className="w-full text-xs text-[#1D1D1F] bg-transparent border-none italic focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};
