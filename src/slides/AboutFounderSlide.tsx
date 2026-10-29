import React from 'react';
import { Compass, Cpu, BarChart2, Megaphone, Bot, Building2 } from 'lucide-react';
import { proposalMeta } from '../data/proposal';

export const AboutFounderSlide: React.FC = () => {
  const capabilities = [
    { label: 'Research & Analysis', icon: BarChart2, desc: 'Historical electoral data, surveys, candidate profiling & reporting.' },
    { label: 'Campaign Operations', icon: Compass, desc: 'Field coordination, ground workflows & data-backed execution.' },
    { label: 'Digital Marketing', icon: Megaphone, desc: 'Strategic branding, narrative development & high-impact outreach.' },
    { label: 'Marketing Automation', icon: Cpu, desc: 'Scalable funnels, CRM workflows & lifecycle automation.' },
    { label: 'AI Business Solutions', icon: Bot, desc: 'AI-driven operational tooling, lead triage & smart assistants.' },
    { label: 'Real Estate Sales Tech', icon: Building2, desc: 'Prop-tech workflows, channel-partner portals & sales tech.' }
  ];

  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white select-none">
      {/* Header */}
      <div>
        <div className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold tracking-widest uppercase text-[#0066CC] mb-2">
          Founder Profile
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1D1D1F]">
          Research. Technology. Execution.
        </h2>
        <p className="mt-3 text-lg sm:text-xl text-[#4B5563] font-normal max-w-4xl leading-relaxed">
          Ananda Krishnan combines research, analytical thinking, digital execution, and technology-led problem solving across business and campaign-related projects.
        </p>
      </div>

      {/* Dominant Visual Layout (65% of slide) */}
      <div className="my-auto py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Founder Identity Card */}
          <div className="lg:col-span-4 p-8 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-20 h-20 rounded-2xl bg-[#0066CC] text-white flex items-center justify-center font-extrabold text-3xl shadow-md mb-6">
                AK
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F]">
                {proposalMeta.preparedBy}
              </h3>
              <p className="text-base font-semibold text-[#0066CC] mt-1">
                Founder & Lead Analyst
              </p>
              <div className="text-sm text-[#6E6E73] mt-1 font-medium">
                {proposalMeta.company}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E5E5EA]">
              <span className="text-xs uppercase font-bold tracking-wider text-[#86868B]">
                Operating Principle
              </span>
              <p className="text-sm font-semibold text-[#1D1D1F] mt-1 leading-snug">
                Data-driven rigor meets scalable modern execution.
              </p>
            </div>
          </div>

          {/* Right Column: 6 Core Capability Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm hover:border-[#0066CC]/50 hover:bg-white transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#0066CC] flex items-center justify-center mb-4 group-hover:bg-[#0066CC] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-[#1D1D1F]">
                      {cap.label}
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-[#6E6E73] leading-relaxed">
                      {cap.desc}
                    </p>
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
