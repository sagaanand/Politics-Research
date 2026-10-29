import React from 'react';
import { Compass, Cpu, BarChart2, Megaphone, Bot, Building2, CheckCircle2 } from 'lucide-react';
import { proposalMeta } from '../data/proposal';

export const AboutFounderSlide: React.FC = () => {
  const capabilities = [
    { label: 'Research & Analysis', icon: BarChart2, desc: 'Historical electoral analysis, survey structuring, candidate profiling & reporting' },
    { label: 'Campaign Operations', icon: Compass, desc: 'Field coordination, data workflows, operational logistics & execution tracking' },
    { label: 'Digital Marketing', icon: Megaphone, desc: 'Targeted brand communication, narrative design & high-impact outreach' },
    { label: 'Marketing Automation', icon: Cpu, desc: 'Scalable digital funnels, CRM orchestration & workflow systematisation' },
    { label: 'AI Business Solutions', icon: Bot, desc: 'AI-enabled operational tooling, automated triage & data intelligence' },
    { label: 'Real Estate Sales Tech', icon: Building2, desc: 'Prop-tech workflows, channel-partner enablement & lead management' }
  ];

  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white select-none">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0066CC]">
            Founder Profile
          </span>
          <span className="text-[#86868B] text-xs">/ Section 01</span>
        </div>
        <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F]">
          Research. Technology. Execution.
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#6E6E73] max-w-3xl">
          Ananda Krishnan combines research, analytical thinking, digital execution, and technology-led problem solving across business and campaign-related projects.
        </p>
      </div>

      {/* Dominant Visual Layout: Founder Monogram Emblem + 6 Capability Cards (65% of slide) */}
      <div className="my-auto py-3">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Stylised Professional Emblem / Identity Card */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0A2540] to-[#0066CC] text-white flex items-center justify-center font-bold text-2xl tracking-tight shadow-md mb-5">
                AK
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1D1D1F]">
                {proposalMeta.preparedBy}
              </h3>
              <p className="text-xs font-semibold text-[#0066CC] mt-0.5">
                Founder · Project Lead & Primary Analyst
              </p>
              <div className="text-xs text-[#6E6E73] mt-1 font-medium">
                {proposalMeta.company}
              </div>

              <div className="mt-6 pt-5 border-t border-[#E5E5EA] space-y-2 text-xs text-[#6E6E73]">
                <div className="flex items-center gap-2 text-[#1D1D1F] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0066CC]" />
                  <span>Multidisciplinary Problem Solver</span>
                </div>
                <div className="flex items-center gap-2 text-[#1D1D1F] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0066CC]" />
                  <span>Electoral Research & Operations Lead</span>
                </div>
                <div className="flex items-center gap-2 text-[#1D1D1F] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0066CC]" />
                  <span>Technology & Automation Architect</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E5E5EA] text-[11px] font-mono text-[#86868B]">
              Primary Engagement Lead
            </div>
          </div>

          {/* Right Column: 6 Core Capability Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm hover:border-[#0066CC]/50 hover:bg-white transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0066CC] flex items-center justify-center mb-3 group-hover:bg-[#0066CC] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#1D1D1F]">
                      {cap.label}
                    </h4>
                    <p className="mt-1 text-[11px] text-[#6E6E73] leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-[#F0F0F2] text-[10px] font-mono text-[#86868B]">
                    Competency 0{idx + 1}
                  </div>
                </div>
              );
            })}
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
