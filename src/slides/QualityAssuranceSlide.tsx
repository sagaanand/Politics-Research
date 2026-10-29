import React from 'react';
import { ShieldCheck, ArrowRight, CheckCircle2, AlertTriangle, FileSpreadsheet } from 'lucide-react';

export const QualityAssuranceSlide: React.FC = () => {
  const chainSteps = [
    { role: 'Data Collection Exec 1', action: 'Primary Extraction & Input', icon: '01' },
    { role: 'Data Collection Exec 2', action: 'Independent Blind Cross-Check', icon: '02' },
    { role: 'Senior Researcher', action: 'Methodology & Anomaly Review', icon: '03' },
    { role: 'Audit Register', action: 'Discrepancy & Variance Logging', icon: '04' },
    { role: 'Ananda Krishnan', action: 'Final Analytical Review & Sign-Off', icon: '05' }
  ];

  const controls = [
    'Cross-checking important candidate and booth vote totals against gazetted Form 20s',
    'Checking internal arithmetic consistency (booth totals summing accurately to round and AC totals)',
    'Strictly distinguishing between total votes polled, valid votes, and rejected/tendered votes',
    'Recording explicit source citations, definitions, and denominators for every percentage metric',
    'Reviewing polling-station identifiers, building descriptions, and historical mapping continuity',
    'Maintaining a formal multi-field verification status log across all dataset records',
    'Transparently documenting disagreements or variances observed between differing secondary sources',
    'Strictly separating confirmed, verified data points from provisional or unresolved data'
  ];

  return (
    <div className="flex-1 w-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0066CC]">
            Data Integrity & Controls
          </span>
          <span className="text-[#86868B] text-xs">/ Section 09</span>
        </div>
        <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1D1D1F]">
          Verification Before Interpretation
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-[#6E6E73]">
          A five-stage review chain preventing compounding transcription and analytical errors
        </p>
      </div>

      {/* Main Section */}
      <div className="my-auto py-3 space-y-4">
        {/* Quality-Control Chain Diagram */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA]">
          <div className="flex items-center justify-between pb-3 border-b border-[#E5E5EA]">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1D1D1F]">
              Quality-Control Review Chain
            </span>
            <span className="text-[10px] font-mono text-[#0066CC] font-semibold">
              Multi-Tier Safeguards
            </span>
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-5 gap-2.5 items-center">
            {chainSteps.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="p-3 rounded-xl bg-white border border-[#E5E5EA] shadow-sm flex flex-col justify-between h-full">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold text-[#0066CC] bg-blue-50 px-1.5 py-0.5 rounded">
                      Step {step.icon}
                    </span>
                    {idx === 4 && <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />}
                  </div>
                  <div className="mt-2">
                    <div className="text-xs font-bold text-[#1D1D1F] leading-tight">{step.role}</div>
                    <div className="text-[10px] text-[#6E6E73] mt-1">{step.action}</div>
                  </div>
                </div>
                {idx < chainSteps.length - 1 && (
                  <div className="hidden sm:flex justify-center -mx-2 text-[#C7C7CC] pointer-events-none">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 8 Controls Checklist */}
        <div className="p-4 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA]">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-[#6E6E73] mb-3 flex items-center gap-1.5">
            <FileSpreadsheet className="w-4 h-4 text-[#0066CC]" /> Core Verification & Audit Protocols
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-[#1D1D1F]">
            {controls.map((ctrl, cIdx) => (
              <div key={cIdx} className="flex items-start gap-2 p-1.5 rounded-lg bg-white border border-[#E5E5EA]/70">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0066CC] shrink-0 mt-0.5" />
                <span className="text-[11px] leading-relaxed text-[#1D1D1F]">{ctrl}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Audit Standard Disclaimer */}
      <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200 flex items-start gap-2 text-xs text-amber-900">
        <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <p>
          <strong>Audit Principle:</strong> The project does not claim independent verification of every historic record until extraction and reconciliation against authoritative gazettes is formally completed and signed off in the Source Register.
        </p>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-[#E5E5EA] flex items-center justify-between text-xs text-[#86868B]">
        <span>Viralimalai Constituency Electoral Research Proposal</span>
        <span>Ctrl Alt Kick Ad Tech Solutions Pvt Ltd</span>
      </div>
    </div>
  );
};
