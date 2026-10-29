import React from 'react';
import { Building2, Network, Bot, CheckCircle2, ArrowRight } from 'lucide-react';

export const NamNilamInfraSlide: React.FC = () => {
  const pillars = [
    {
      title: 'Real Estate Sales Execution',
      desc: 'End-to-end sales advisory, project mandate marketing, inventory management, and transaction closure acceleration.',
      icon: Building2,
      tag: 'Sales Advisory'
    },
    {
      title: 'Channel-Partner Enablement',
      desc: 'Structured broker portals, automated commission tracking, collateral distribution, and partner network scaling.',
      icon: Network,
      tag: 'Partner Network'
    },
    {
      title: 'AI Sales Bots',
      desc: 'Conversational AI assistants handling 24/7 buyer inquiries, pre-qualification chats, and instant appointment bookings.',
      icon: Bot,
      tag: '24/7 AI Sales'
    }
  ];

  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white select-none">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0066CC]">
            Sales & Partner Network
          </span>
          <span className="text-[#86868B] text-xs">/ Section 06</span>
        </div>
        <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F]">
          Real Estate Sales. Channel Partnerships. Automation.
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#6E6E73] max-w-3xl">
          Nam Nilam Infra focuses on real estate sales support, channel-partner solutions, and AI-powered sales automation.
        </p>
      </div>

      {/* Dominant 3 Pillars Visual Layout (65% of slide) */}
      <div className="my-auto py-3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((pil, idx) => {
            const Icon = pil.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm hover:border-[#0066CC]/50 hover:bg-white transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#E5E5EA]">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066CC] flex items-center justify-center group-hover:bg-[#0066CC] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white border border-[#E5E5EA] text-[#6E6E73] font-bold">
                      {pil.tag}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-[#1D1D1F]">
                    {pil.title}
                  </h3>

                  <p className="mt-2 text-xs text-[#6E6E73] leading-relaxed">
                    {pil.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#F0F0F2] flex items-center justify-between text-[11px] text-[#86868B]">
                  <span>Pillar 0{idx + 1}</span>
                  <span className="text-[#0066CC] font-semibold flex items-center gap-1">
                    Integrated Flow <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Corporate Summary Pill Banner */}
      <div className="p-3.5 rounded-2xl bg-[#F5F5F7] border border-[#E5E5EA] flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-[#1D1D1F]">
          <CheckCircle2 className="w-4 h-4 text-[#0066CC] shrink-0" />
          <span>
            <strong>Ecosystem Synergy:</strong> Nam Nilam Infra connects market ground reality with automated technology developed across the founder's companies.
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#86868B] shrink-0 hidden sm:inline">
          Sales & Tech Execution
        </span>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-[#E5E5EA] flex items-center justify-between text-xs text-[#86868B]">
        <span>Viralimalai Constituency Electoral Research Proposal</span>
        <span>Ctrl Alt Kick Ad Tech Solutions Pvt Ltd</span>
      </div>
    </div>
  );
};
