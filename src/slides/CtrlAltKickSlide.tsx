import React from 'react';
import { Sparkles, Megaphone, Workflow, Target } from 'lucide-react';

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
      desc: 'Targeted multi-channel digital campaigns designed for high audience engagement and reach.'
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
        <div className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold tracking-widest uppercase text-[#0066CC] mb-2">
          Ctrl Alt Kick Ad Tech Solutions
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1D1D1F]">
          Branding Meets Marketing Automation
        </h2>
        <p className="mt-2 text-lg sm:text-xl text-[#4B5563] max-w-4xl">
          Ctrl Alt Kick helps businesses strengthen their brand presence and improve marketing execution through digital solutions and automation.
        </p>
      </div>

      {/* Dominant Visual Layout (65% of slide) */}
      <div className="my-auto py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pil, idx) => {
            const Icon = pil.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm hover:border-[#0066CC]/50 hover:bg-white transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0066CC] flex items-center justify-center mb-6 group-hover:bg-[#0066CC] group-hover:text-white transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1D1D1F]">
                    {pil.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-[#4B5563] leading-relaxed">
                    {pil.desc}
                  </p>
                </div>
              </div>
            );
          })}
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
