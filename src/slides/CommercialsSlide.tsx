import React from 'react';
import { Check, AlertCircle, ShieldCheck } from 'lucide-react';
import { proposalMeta } from '../data/proposal';

interface CommercialsSlideProps {
  onOpenInternalCosting?: () => void;
}

export const CommercialsSlide: React.FC<CommercialsSlideProps> = ({ onOpenInternalCosting }) => {
  const inclusions = [
    'One month of planned dedicated multi-disciplinary team manpower',
    'Project lead and primary analyst allocation (Ananda Krishnan)',
    'Research and fieldwork expense allowance of ₹10,000',
    'Historical dataset compilation and multi-tier verification',
    'Cross-year polling-station continuity mapping (2016, 2021, 2026)',
    'Comprehensive analytical PDF report and executive presentation deck',
    'Full source register and transparent discrepancy documentation',
    'Two (2) consolidated client review and feedback rounds'
  ];

  return (
    <div className="flex-1 w-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0066CC]">
            Investment & Commercials
          </span>
          <span className="text-[#86868B] text-xs">/ Section 12</span>
        </div>
        <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1D1D1F]">
          Research Engagement — Preliminary Commercial Estimate
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-[#6E6E73]">
          Fixed-fee engagement framework for comprehensive electoral research across Viralimalai Constituency
        </p>
      </div>

      {/* Main Content Layout */}
      <div className="my-auto py-3 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Card: High-Impact Fee Card */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA] flex flex-col justify-between shadow-sm relative">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#6E6E73]">
                Preliminary Project Fee
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-[#0066CC] border border-blue-200 font-semibold">
                Preliminary Estimate
              </span>
            </div>

            <div className="mt-6">
              <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1D1D1F] font-mono">
                {proposalMeta.preliminaryFeeFormatted}
              </div>
              <div className="mt-2 text-xs text-[#86868B]">
                Exclusive of applicable statutory taxes (e.g. GST)
              </div>
            </div>

            <p className="mt-6 text-xs sm:text-sm text-[#6E6E73] leading-relaxed">
              Preliminary fixed-fee estimate for the agreed research scope, subject to final scope confirmation and document availability audit.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-[#E5E5EA] space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#6E6E73]">Execution Period:</span>
              <span className="font-semibold text-[#1D1D1F]">4 Calendar Weeks</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#6E6E73]">Fieldwork Allowance:</span>
              <span className="font-semibold text-[#1D1D1F]">{proposalMeta.expenseAllowanceFormatted} Included</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#6E6E73]">Review Iterations:</span>
              <span className="font-semibold text-[#1D1D1F]">{proposalMeta.reviewRounds}</span>
            </div>
          </div>
        </div>

        {/* Right Card: Included Scope & Terms */}
        <div className="lg:col-span-7 bg-[#FBFBFD] rounded-2xl p-6 border border-[#E5E5EA] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#E5E5EA]">
              <h3 className="text-xs font-semibold tracking-wider uppercase text-[#1D1D1F] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0066CC]" /> Included in the Commercial Framework
              </h3>
              <span className="text-[10px] font-mono text-[#86868B]">8 Commitments</span>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {inclusions.map((inc, i) => (
                <div key={i} className="flex items-start gap-2 p-2 rounded-lg bg-white border border-[#E5E5EA]/70">
                  <div className="w-4 h-4 rounded-full bg-blue-50 text-[#0066CC] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-xs text-[#1D1D1F] leading-snug">{inc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Assumption Governance Note */}
          <div className="mt-4 p-3 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-2 text-xs text-amber-900 leading-relaxed">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <p>
                <strong>Commercial Notes:</strong> This estimate assumes one month of allocated manpower and stated fieldwork allowance. No contingency reserve is built-in; additional approved requests will be quoted separately. GST treatment will be confirmed prior to formal commercial invoice issuance.
              </p>
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
