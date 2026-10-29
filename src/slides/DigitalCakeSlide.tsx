import React from 'react';
import { Bot, Cpu, Users } from 'lucide-react';

export const DigitalCakeSlide: React.FC = () => {
  const capabilities = [
    {
      title: 'AI-Enabled Sales Workflows',
      desc: 'Automating customer inquiry routing, qualification scoring, and predictive lead distribution for real estate teams.',
      icon: Bot
    },
    {
      title: 'Lead & Customer Operations',
      desc: 'Centralising buyer lifecycle tracking, site-visit scheduling, and automated CRM follow-up cadences.',
      icon: Users
    },
    {
      title: 'Marketing Automation',
      desc: 'Orchestrating multi-tier trigger-based nurturing campaigns across WhatsApp, email, and digital touchpoints.',
      icon: Cpu
    }
  ];

  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white select-none">
      {/* Header */}
      <div>
        <div className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold tracking-widest uppercase text-[#0066CC] mb-2">
          Digital Cake Prop-Tech
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1D1D1F]">
          AI Solutions for Real Estate Sales and Operations
        </h2>
        <p className="mt-2 text-lg sm:text-xl text-[#4B5563] max-w-4xl">
          Digital Cake develops AI-enabled solutions designed to support real estate sales workflows, lead management, and business operations.
        </p>
      </div>

      {/* Dominant 3 Pillars Visual Layout (65% of slide) */}
      <div className="my-auto py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm hover:border-[#0066CC]/50 hover:bg-white transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0066CC] flex items-center justify-center mb-6 group-hover:bg-[#0066CC] group-hover:text-white transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1D1D1F]">
                    {cap.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-[#4B5563] leading-relaxed">
                    {cap.desc}
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
