import React from 'react';
import { Users, Award, Compass, FileCheck, AlertCircle } from 'lucide-react';
import { proposalMeta } from '../data/proposal';

export const CommercialsSlide: React.FC = () => {
  const breakdownComponents = [
    {
      title: 'Research Team',
      desc: 'Three dedicated data collection and verification specialists for one month.',
      icon: Users
    },
    {
      title: 'Project Leadership',
      desc: 'Primary analyst direction, cross-year comparative modelling, and reporting by Anand.',
      icon: Award
    },
    {
      title: 'Research Expenses',
      desc: 'Document procurement, archival records access, and field allowances.',
      icon: Compass
    },
    {
      title: 'Final Deliverables',
      desc: 'Excel dataset, analytical report, slide deck, source register, and 2 review rounds.',
      icon: FileCheck
    }
  ];

  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0066CC]">
            Commercial Proposal
          </span>
          <span className="text-[#86868B] text-xs">/ Section 12</span>
        </div>
        <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F]">
          A Defined Research Engagement
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#6E6E73]">
          Clear, fixed-cost preliminary estimate aligned with defined project scope and resource commitments.
        </p>
      </div>

      {/* Dominant Visual Layout: Large Fee Hero + Minimal 4-Part Breakdown (65% of slide) */}
      <div className="my-auto py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Column: Dominant Fee Card */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6E6E73]">
                  Preliminary Project Estimate
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-50 text-[#0066CC] border border-blue-200 font-bold">
                  Fixed Fee
                </span>
              </div>

              {/* Dominant Visual Typography: ₹1,20,750 */}
              <div className="mt-6">
                <div className="text-5xl sm:text-6xl md:text-7xl font-extrabold font-mono tracking-tight text-[#1D1D1F]">
                  {proposalMeta.preliminaryFeeFormatted}
                </div>
                <div className="mt-2 text-xs text-[#86868B]">
                  Indian Rupees · Exclusive of statutory taxes
                </div>
              </div>

              <p className="mt-6 text-xs sm:text-sm text-[#6E6E73] leading-relaxed">
                Based on the current one-month manpower allocation and agreed research expense allowance.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#E5E5EA] flex items-center justify-between text-xs">
              <span className="text-[#6E6E73]">Target Engagement Period:</span>
              <span className="font-mono font-bold text-[#1D1D1F]">4 Calendar Weeks</span>
            </div>
          </div>

          {/* Right Column: 4 Component Visual Breakdown */}
          <div className="lg:col-span-7 space-y-3.5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {breakdownComponents.map((comp, idx) => {
                const Icon = comp.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm hover:border-[#0066CC]/40 hover:bg-white transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0066CC] flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-bold text-[#1D1D1F]">{comp.title}</h4>
                      <p className="mt-1.5 text-xs text-[#6E6E73] leading-relaxed">{comp.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pricing Caveat Note */}
            <div className="p-3.5 rounded-2xl bg-white border border-[#E5E5EA] flex items-start gap-2.5 text-xs text-[#6E6E73]">
              <AlertCircle className="w-4 h-4 text-[#0066CC] shrink-0 mt-0.5" />
              <p>
                <strong>Commercial Note:</strong> Final pricing subject to scope and source-availability confirmation. GST treatment to be confirmed before formal invoicing.
              </p>
            </div>
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
