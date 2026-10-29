import React from 'react';
import { Sparkles, Megaphone, Workflow, Target, CheckCircle2 } from 'lucide-react';

export const CtrlAltKickSlide: React.FC = () => {
  const pillars = [
    {
      title: 'Brand Identity & Narrative',
      icon: Sparkles,
      desc: 'Developing distinctive brand positioning, visual identities, and strategic messaging frameworks.'
    },
    {
      title: 'Digital Campaign Execution',
      icon: Megaphone,
      desc: 'Targeted multi-channel digital campaigns designed for measurable audience engagement.'
    },
    {
      title: 'Marketing Automation',
      icon: Workflow,
      desc: 'Systematising lead capture, automated nurturing sequences, and performance tracking.'
    },
    {
      title: 'Data-Driven Optimization',
      icon: Target,
      desc: 'Continuous analytical tracking of campaign metrics, conversion signals, and audience response.'
    }
  ];

  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white select-none">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0066CC]">
            Lead Operating Entity
          </span>
          <span className="text-[#86868B] text-xs">/ Section 04</span>
        </div>
        <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F]">
          Branding Meets Marketing Automation
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#6E6E73] max-w-3xl">
          Ctrl Alt Kick helps businesses strengthen their brand presence and improve marketing execution through digital solutions and automation.
        </p>
      </div>

      {/* Dominant Visual Showcase (65% of slide) */}
      <div className="my-auto py-3">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Visual: Stylised Creative / Brand Mockup Frame */}
          <div className="lg:col-span-5 p-6 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#E5E5EA]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1D1D1F]">
                  Creative & Automation Architecture
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-[#0066CC] border border-blue-200 font-semibold">
                  Illustrative Concepts
                </span>
              </div>

              {/* Stylised Creative Cards */}
              <div className="my-5 space-y-3">
                <div className="p-3.5 rounded-2xl bg-white border border-[#E5E5EA] shadow-sm">
                  <div className="flex items-center justify-between text-xs font-bold text-[#1D1D1F]">
                    <span>Multi-Channel Campaign Funnel</span>
                    <span className="text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">Active</span>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="h-1.5 flex-1 bg-blue-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#0066CC] w-3/4" />
                    </div>
                    <span className="font-mono text-[10px] text-[#6E6E73]">75% Flow</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-[#E5E5EA] shadow-sm">
                  <div className="flex items-center justify-between text-xs font-bold text-[#1D1D1F]">
                    <span>Brand Messaging Framework</span>
                    <span className="text-[10px] text-[#0066CC] bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">Systematised</span>
                  </div>
                  <div className="mt-1 text-[11px] text-[#6E6E73]">
                    Consistent identity across digital, print & field assets
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#E5E5EA] flex items-center justify-between text-xs text-[#86868B]">
              <span>Ctrl Alt Kick Solutions</span>
              <span className="font-mono text-[#0066CC] font-semibold">Est. Excellence</span>
            </div>
          </div>

          {/* Right Column: 4 Capability Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {pillars.map((pil, idx) => {
              const Icon = pil.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm hover:border-[#0066CC]/50 hover:bg-white transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0066CC] flex items-center justify-center mb-3 group-hover:bg-[#0066CC] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-[#1D1D1F]">
                      {pil.title}
                    </h4>
                    <p className="mt-1.5 text-xs text-[#6E6E73] leading-relaxed">
                      {pil.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-2.5 border-t border-[#F0F0F2] flex items-center gap-1.5 text-[11px] text-[#0066CC] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Core Discipline</span>
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
