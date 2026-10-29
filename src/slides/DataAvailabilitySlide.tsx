import React from 'react';
import { ShieldAlert, CheckCircle2, HelpCircle, FileCheck } from 'lucide-react';

export const DataAvailabilitySlide: React.FC = () => {
  const tiers = [
    {
      title: 'Official Records',
      priority: 'Primary Source (Preferred)',
      badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      icon: CheckCircle2,
      desc: 'Form 20 final result sheets, Election Commission gazettes, and official CEO Tamil Nadu returns.'
    },
    {
      title: 'Alternative Sources',
      priority: 'Secondary Recovery',
      badgeClass: 'bg-blue-50 text-blue-700 border-blue-200',
      icon: FileCheck,
      desc: 'Credible media archives, academic election datasets, and published analytical compilations.'
    },
    {
      title: 'Unresolved Gaps',
      priority: 'Transparent Exception Log',
      badgeClass: 'bg-amber-50 text-amber-800 border-amber-200',
      icon: HelpCircle,
      desc: 'Physically missing or illegible archival returns openly documented in the Discrepancy Register.'
    }
  ];

  const supportingRules = [
    'Official records preferred as primary evidentiary truth',
    'Alternative sources used where appropriate to recover missing data',
    'Conflicting values between documents recorded and reconciled',
    'Unverified values clearly identified and never assumed',
    'Missing records reported transparently in exception dossiers'
  ];

  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0066CC]">
            Ground Realities & Integrity
          </span>
          <span className="text-[#86868B] text-xs">/ Section 15</span>
        </div>
        <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F]">
          Evidence First. Transparency Always.
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#6E6E73]">
          How our research methodology prioritises authentic gazetted sources while maintaining absolute transparency regarding gaps.
        </p>
      </div>

      {/* Dominant Visual Tri-Fold Diagram (65% of slide) */}
      <div className="my-auto py-4 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {tiers.map((t, idx) => {
            const Icon = t.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm hover:border-[#0066CC]/40 hover:bg-white transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#E5E5EA]">
                    <Icon className="w-5 h-5 text-[#0066CC]" />
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border font-bold ${t.badgeClass}`}>
                      {t.priority}
                    </span>
                  </div>

                  <h3 className="mt-4 text-base sm:text-lg font-bold text-[#1D1D1F]">
                    {t.title}
                  </h3>

                  <p className="mt-2 text-xs text-[#6E6E73] leading-relaxed">
                    {t.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F0F0F2] text-[10px] font-mono text-[#86868B]">
                  Tier 0{idx + 1} Protocol
                </div>
              </div>
            );
          })}
        </div>

        {/* 5 Clean Governance Rules Pills */}
        <div className="p-4 rounded-2xl bg-white border border-[#E5E5EA] shadow-sm">
          <div className="text-[11px] font-bold uppercase tracking-wider text-[#1D1D1F] mb-2.5">
            Core Operating Rules:
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            {supportingRules.map((rule, idx) => (
              <div key={idx} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FBFBFD] border border-[#E5E5EA] text-[#1D1D1F]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0066CC] shrink-0" />
                <span className="text-[11px] font-medium leading-snug">{rule}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Real-World Recovery Disclaimer */}
      <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 flex items-start gap-2.5 text-xs text-amber-900 leading-relaxed">
        <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <p>
          <strong>No Absolute Recovery Guarantee:</strong> While every diligent effort will be made to retrieve historical records, recovery of every single damaged or missing historical page from earlier election cycles cannot be unconditionally guaranteed.
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
