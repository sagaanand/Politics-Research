import React from 'react';
import { Layers, Bot, Building2, Megaphone, ArrowRight } from 'lucide-react';

export const CompanyEcosystemSlide: React.FC = () => {
  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white select-none">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0066CC]">
            Enterprise Ecosystem
          </span>
          <span className="text-[#86868B] text-xs">/ Section 03</span>
        </div>
        <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F]">
          One Founder. Three Complementary Capabilities.
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#6E6E73] max-w-3xl">
          A cohesive network of ventures delivering branding, AI-driven automation, and sales execution under unified technology leadership.
        </p>
      </div>

      {/* Dominant Visual Ecosystem Diagram (65% of slide) */}
      <div className="my-auto py-3">
        <div className="p-6 sm:p-8 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm relative overflow-hidden">
          {/* Subtle network lines in background */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
            {/* Left Node: Digital Cake */}
            <div className="lg:col-span-3 p-5 rounded-2xl bg-white border border-[#E5E5EA] shadow-sm hover:border-[#0066CC]/50 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#E5E5EA]">
                  <span className="text-[10px] uppercase font-mono font-bold text-[#0066CC]">
                    AI & Prop-Tech
                  </span>
                  <Bot className="w-4 h-4 text-[#0066CC]" />
                </div>
                <h3 className="text-base font-bold text-[#1D1D1F]">
                  Digital Cake
                </h3>
                <p className="mt-2 text-xs text-[#6E6E73] leading-relaxed">
                  AI-powered real estate solutions for sales workflows, lead lifecycle management, and operations.
                </p>
              </div>
              <div className="mt-4 pt-2.5 border-t border-[#F0F0F2] text-[10px] font-mono text-[#86868B]">
                AI-Driven Workflows
              </div>
            </div>

            {/* Middle Node: Central Hub — Ctrl Alt Kick */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white via-white to-blue-50/40 border-2 border-[#0066CC] shadow-md flex flex-col justify-between relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#0066CC] text-white text-[10px] uppercase font-mono font-bold tracking-wider">
                Ecosystem Hub & Lead Entity
              </div>

              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E5E5EA]">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066CC] flex items-center justify-center font-bold">
                    <Megaphone className="w-5 h-5 text-[#0066CC]" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[#0066CC]">
                    Lead Agency
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-[#1D1D1F]">
                  Ctrl Alt Kick Ad Tech Solutions Pvt Ltd
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#1D1D1F] font-medium leading-relaxed">
                  Branding solutions, data-driven campaign operations, and marketing automation systems.
                </p>
                <p className="mt-2 text-xs text-[#6E6E73] leading-relaxed">
                  The primary corporate contracting entity overseeing the Viralimalai historical electoral research proposal.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5E5EA] flex items-center justify-between text-xs text-[#86868B]">
                <span>Founder: Ananda Krishnan</span>
                <span className="text-[#0066CC] font-semibold flex items-center gap-1">
                  Contracting Entity <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Right Node: Nam Nilam Infra */}
            <div className="lg:col-span-3 p-5 rounded-2xl bg-white border border-[#E5E5EA] shadow-sm hover:border-[#0066CC]/50 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#E5E5EA]">
                  <span className="text-[10px] uppercase font-mono font-bold text-[#0066CC]">
                    Sales & Network
                  </span>
                  <Building2 className="w-4 h-4 text-[#0066CC]" />
                </div>
                <h3 className="text-base font-bold text-[#1D1D1F]">
                  Nam Nilam Infra
                </h3>
                <p className="mt-2 text-xs text-[#6E6E73] leading-relaxed">
                  Real estate sales execution, channel-partner enablement solutions, and conversational AI sales bots.
                </p>
              </div>
              <div className="mt-4 pt-2.5 border-t border-[#F0F0F2] text-[10px] font-mono text-[#86868B]">
                Partner Enablement
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accuracy Disclosure */}
      <div className="p-3.5 rounded-2xl bg-[#F5F5F7] border border-[#E5E5EA] flex items-center justify-between gap-4">
        <span className="text-xs text-[#6E6E73]">
          <strong>Capability Alignment:</strong> Each company operates in its respective technological domain. This electoral research engagement is executed strictly through Ctrl Alt Kick Ad Tech Solutions Pvt Ltd.
        </span>
        <span className="text-[10px] font-mono text-[#86868B] shrink-0 hidden sm:inline">
          Accurate Corporate Scope
        </span>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-[#E5E5EA] flex items-center justify-between text-xs text-[#86868B]">
        <span>Viralimalai Constituency Electoral Research Proposal</span>
        <span className="flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-[#0066CC]" /> Corporate Ecosystem
        </span>
      </div>
    </div>
  );
};
