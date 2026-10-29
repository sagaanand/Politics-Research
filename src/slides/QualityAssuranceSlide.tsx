import React from 'react';
import { ShieldCheck, CheckCheck, FileText, AlertTriangle } from 'lucide-react';

export const QualityAssuranceSlide: React.FC = () => {
  const chainSteps = [
    { num: '01', title: 'Data Collection', role: 'Primary Extraction', note: 'Form 20 digitization' },
    { num: '02', title: 'Cross-Check', role: 'Independent Audit', note: 'Double-entry validation' },
    { num: '03', title: 'Senior Review', role: 'Methodology Check', note: 'Anomaly investigation' },
    { num: '04', title: "Anand's Final Review", role: 'Lead Sign-Off', note: 'Analytical synthesis' }
  ];

  const principles = [
    {
      title: 'Source-Backed',
      desc: 'Every recorded figure is tethered to an authoritative gazette, Form 20, or verified archival return.',
      icon: FileText
    },
    {
      title: 'Cross-Checked',
      desc: 'Segregated team members independently verify arithmetic consistency and booth margin calculations.',
      icon: CheckCheck
    },
    {
      title: 'Transparent Gaps',
      desc: 'Unresolved variances, missing documents, or damaged records are logged openly rather than guessed.',
      icon: ShieldCheck
    }
  ];

  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0066CC]">
            Data Quality & Integrity
          </span>
          <span className="text-[#86868B] text-xs">/ Section 09</span>
        </div>
        <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F]">
          Verified Before It Is Reported
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#6E6E73]">
          A four-tier verification chain eliminating compounding transcription errors before client presentation.
        </p>
      </div>

      {/* Dominant Visual Review Chain (65% of slide) */}
      <div className="my-auto py-4 space-y-5">
        {/* Review Chain Flow */}
        <div className="p-6 sm:p-7 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm">
          <div className="flex items-center justify-between pb-3 border-b border-[#E5E5EA] mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1D1D1F]">
              Four-Tier Review Chain
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-[#0066CC] border border-blue-200 font-semibold">
              Sequential Gates
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-center">
            {chainSteps.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="p-4 rounded-2xl bg-white border border-[#E5E5EA] shadow-sm flex flex-col justify-between h-full group hover:border-[#0066CC]/50 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#0066CC] font-mono font-bold text-xs flex items-center justify-center">
                      {step.num}
                    </span>
                    <span className="text-[10px] font-mono text-[#86868B]">Gate {idx + 1}</span>
                  </div>
                  <div className="mt-3">
                    <h4 className="text-xs sm:text-sm font-bold text-[#1D1D1F]">{step.title}</h4>
                    <div className="text-[11px] font-semibold text-[#0066CC] mt-0.5">{step.role}</div>
                    <div className="text-[10px] text-[#6E6E73] mt-1">{step.note}</div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Three Core Principles Visual Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {principles.map((pr, idx) => {
            const Icon = pr.icon;
            return (
              <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E5E5EA] shadow-sm flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066CC] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#1D1D1F]">{pr.title}</h4>
                  <p className="mt-1 text-[11px] text-[#6E6E73] leading-relaxed">{pr.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Audit Disclaimer Banner */}
      <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 flex items-start gap-2.5 text-xs text-amber-900">
        <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <p>
          <strong>Quality Protocol Notice:</strong> Independent verification is performed during active project execution. No claim is made that historical verification has already concluded prior to engagement kickoff.
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
