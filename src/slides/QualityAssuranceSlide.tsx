import React from 'react';
import { ShieldCheck, CheckCheck, FileText, AlertTriangle } from 'lucide-react';

export const QualityAssuranceSlide: React.FC = () => {
  const chainSteps = [
    { num: '01', title: 'Data Collection Exec 1', role: 'Primary Extraction', note: 'Form 20 digitization' },
    { num: '02', title: 'Data Collection Exec 2', role: 'Independent Audit', note: 'Blind cross-verification' },
    { num: '03', title: 'Senior Researcher', role: 'Methodology Review', note: 'Anomaly investigation' },
    { num: '04', title: 'Ananda Krishnan', role: 'Lead Sign-Off', note: 'Analytical synthesis' }
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
      title: 'Transparent Limitations',
      desc: 'Unresolved variances, missing documents, or damaged records are logged openly rather than guessed.',
      icon: ShieldCheck
    }
  ];

  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white select-none">
      {/* Header */}
      <div>
        <div className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold tracking-widest uppercase text-[#0066CC] mb-2">
          Quality Control
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1D1D1F]">
          Verified Before It Is Reported
        </h2>
        <p className="mt-2 text-lg sm:text-xl text-[#4B5563] max-w-4xl">
          A four-tier verification chain eliminating compounding transcription errors before client presentation.
        </p>
      </div>

      {/* Dominant Visual Review Chain (65% of slide) */}
      <div className="my-auto py-4 space-y-6">
        {/* Review Chain Flow */}
        <div className="p-8 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm">
          <div className="flex items-center justify-between pb-3 border-b border-[#E5E5EA] mb-5">
            <span className="text-sm font-bold uppercase tracking-wider text-[#1D1D1F]">
              Four-Tier Review Chain
            </span>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-50 text-[#0066CC] border border-blue-200 font-bold">
              Sequential Gates
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-center">
            {chainSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-[#E5E5EA] shadow-sm flex flex-col justify-between h-full group hover:border-[#0066CC]/50 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-xl bg-blue-50 text-[#0066CC] font-mono font-bold text-sm flex items-center justify-center">
                      {step.num}
                    </span>
                    <span className="text-xs font-mono text-[#86868B]">Gate {idx + 1}</span>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-sm sm:text-base font-bold text-[#1D1D1F]">{step.title}</h4>
                    <div className="text-xs font-semibold text-[#0066CC] mt-1">{step.role}</div>
                    <div className="text-xs text-[#6E6E73] mt-1">{step.note}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Three Core Principles Visual Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {principles.map((pr, idx) => {
            const Icon = pr.icon;
            return (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0066CC] flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#1D1D1F]">{pr.title}</h4>
                  <p className="mt-2 text-xs sm:text-sm text-[#4B5563] leading-relaxed">{pr.desc}</p>
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
