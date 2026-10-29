import React from 'react';
import { Bot, Cpu, Users, GitBranch, ArrowRight, ShieldCheck } from 'lucide-react';

export const DigitalCakeSlide: React.FC = () => {
  const capabilities = [
    {
      title: 'AI-Enabled Sales Workflows',
      desc: 'Automating customer inquiry routing, qualification scoring, and predictive lead distribution for real estate teams.',
      icon: Bot,
      metric: 'Intelligent Routing'
    },
    {
      title: 'Lead & Customer Operations',
      desc: 'Centralising buyer lifecycle tracking, site-visit scheduling, and automated CRM follow-up cadences.',
      icon: Users,
      metric: 'Lifecycle CRM'
    },
    {
      title: 'Marketing Automation',
      desc: 'Orchestrating multi-tier trigger-based nurturing campaigns across WhatsApp, email, and digital touchpoints.',
      icon: Cpu,
      metric: 'Multi-Channel'
    }
  ];

  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white select-none">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0066CC]">
            Prop-Tech & AI Venture
          </span>
          <span className="text-[#86868B] text-xs">/ Section 05</span>
        </div>
        <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F]">
          AI Solutions for Real Estate Sales and Operations
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#6E6E73] max-w-3xl">
          Digital Cake develops AI-enabled solutions designed to support real estate sales workflows, lead management, and business operations.
        </p>
      </div>

      {/* Dominant Visual Showcase: Interface Mockup + 3 Pillars (65% of slide) */}
      <div className="my-auto py-3">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Stylised Product Interface Mockup */}
          <div className="lg:col-span-5 p-6 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#E5E5EA]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="font-mono text-xs font-bold text-[#1D1D1F]">
                    Digital Cake · Ops Console
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-[#0066CC] border border-blue-200 font-semibold">
                  UI Mockup
                </span>
              </div>

              {/* Interface Visual Cards */}
              <div className="my-4 space-y-2.5">
                <div className="p-3 rounded-2xl bg-white border border-[#E5E5EA] text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#1D1D1F]">AI Lead Qualification Engine</span>
                    <span className="text-[10px] font-mono text-[#0066CC]">Active</span>
                  </div>
                  <div className="mt-2 text-[11px] text-[#6E6E73]">
                    Automated intent scoring: High-Value Buyer (Confidence 94%)
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-white border border-[#E5E5EA] text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#1D1D1F]">Site Visit Dispatch Workflow</span>
                    <span className="text-[10px] font-mono text-emerald-700">Scheduled</span>
                  </div>
                  <div className="mt-2 flex items-center gap-1.5 text-[11px] text-[#6E6E73]">
                    <GitBranch className="w-3.5 h-3.5 text-[#0066CC]" /> Auto-assigned to Field Executive
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#E5E5EA] flex items-center justify-between text-xs text-[#86868B]">
              <span>Real Estate Technology</span>
              <span className="text-[#0066CC] font-semibold flex items-center gap-1">
                Prop-Tech Systems <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>

          {/* Right Column: 3 Core Capabilities */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-3.5">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm hover:border-[#0066CC]/50 hover:bg-white transition-all flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066CC] flex items-center justify-center shrink-0 group-hover:bg-[#0066CC] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-[#1D1D1F]">{cap.title}</h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-[#E5E5EA] text-[#6E6E73]">
                        {cap.metric}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-[#6E6E73] leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scope Disclaimer */}
      <div className="p-3.5 rounded-2xl bg-[#F5F5F7] border border-[#E5E5EA] flex items-center justify-between text-xs text-[#6E6E73]">
        <span>
          <strong>Scope Clarity:</strong> Digital Cake specialises exclusively in real estate sales and customer operations technology.
        </span>
        <span className="flex items-center gap-1 font-mono text-[10px] text-[#0066CC]">
          <ShieldCheck className="w-3.5 h-3.5" /> Accurate Domain
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
