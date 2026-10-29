import React from 'react';
import { Bot, Building2, Megaphone } from 'lucide-react';

export const CompanyEcosystemSlide: React.FC = () => {
  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white select-none">
      {/* Header */}
      <div>
        <div className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold tracking-widest uppercase text-[#0066CC] mb-2">
          Company Ecosystem
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1D1D1F]">
          One Founder. Three Complementary Capabilities.
        </h2>
        <p className="mt-2 text-lg sm:text-xl text-[#4B5563] max-w-4xl">
          Three specialized businesses delivering branding, AI automation, and sales execution under unified technology leadership.
        </p>
      </div>

      {/* Dominant Visual Ecosystem Diagram (65% of slide) */}
      <div className="my-auto py-4">
        <div className="p-8 sm:p-10 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Node: Digital Cake */}
            <div className="lg:col-span-3 p-6 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm hover:border-[#0066CC]/50 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0066CC] flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1D1D1F]">
                  Digital Cake
                </h3>
                <p className="mt-3 text-sm text-[#4B5563] leading-relaxed">
                  AI-powered real estate solutions for sales workflows, lead management, and business operations.
                </p>
              </div>
            </div>

            {/* Middle Node: Central Hub — Ctrl Alt Kick */}
            <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-white border-2 border-[#0066CC] shadow-lg flex flex-col justify-between relative">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0066CC] flex items-center justify-center mb-5">
                  <Megaphone className="w-7 h-7 text-[#0066CC]" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F]">
                  Ctrl Alt Kick
                </h3>
                <div className="text-sm font-semibold text-[#0066CC] mt-1">
                  Ad Tech Solutions Pvt Ltd
                </div>

                <p className="mt-4 text-base sm:text-lg text-[#1D1D1F] font-medium leading-relaxed">
                  Branding solutions, campaign operations, and marketing automation.
                </p>
                <p className="mt-2 text-sm text-[#6E6E73] leading-relaxed">
                  The primary contracting entity overseeing the Viralimalai historical electoral research project.
                </p>
              </div>
            </div>

            {/* Right Node: Nam Nilam Infra */}
            <div className="lg:col-span-3 p-6 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm hover:border-[#0066CC]/50 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0066CC] flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1D1D1F]">
                  Nam Nilam Infra
                </h3>
                <p className="mt-3 text-sm text-[#4B5563] leading-relaxed">
                  Real estate sales execution, channel-partner enablement solutions, and AI sales bots.
                </p>
              </div>
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
