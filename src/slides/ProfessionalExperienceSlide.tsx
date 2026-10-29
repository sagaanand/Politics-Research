import React from 'react';
import { BarChart3, Compass, Cpu, Layers } from 'lucide-react';

export const ProfessionalExperienceSlide: React.FC = () => {
  const domains = [
    {
      title: 'Research & Analysis',
      subtitle: 'Data Architecture & Rigorous Analysis',
      icon: BarChart3,
      items: [
        'Historical electoral data research and archival consolidation',
        'Structured analytical work and booth-level concordance',
        'Constituency surveys and voter sentiment study support',
        'Candidate profile analysis and relative electoral margin review',
        'Defensible, evidence-backed documentation and executive reporting'
      ],
      visual: (
        <svg viewBox="0 0 200 80" className="w-full h-16 text-[#0066CC]" fill="none">
          <path d="M10 65 L 50 45 L 90 55 L 140 25 L 190 35" stroke="#0066CC" strokeWidth="2.5" />
          <circle cx="50" cy="45" r="4" fill="#0066CC" />
          <circle cx="90" cy="55" r="4" fill="#0066CC" />
          <circle cx="140" cy="25" r="4" fill="#0066CC" />
          <circle cx="190" cy="35" r="4" fill="#0066CC" />
          <line x1="10" y1="75" x2="190" y2="75" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3" />
        </svg>
      )
    },
    {
      title: 'Campaign Operations',
      subtitle: 'Coordination & Fieldwork Workflows',
      icon: Compass,
      items: [
        'Multi-constituency campaign operational coordination',
        'Digital campaign deployment and tactical narrative testing',
        'On-ground field research support and survey logistics',
        'Rapid data triage and reporting during election windows',
        'Strict workflow discipline across ground teams and analysts'
      ],
      visual: (
        <svg viewBox="0 0 200 80" className="w-full h-16" fill="none">
          <rect x="20" y="20" width="40" height="40" rx="8" fill="#EFF6FF" stroke="#0066CC" strokeWidth="1.5" />
          <rect x="80" y="20" width="40" height="40" rx="8" fill="#EFF6FF" stroke="#0066CC" strokeWidth="1.5" />
          <rect x="140" y="20" width="40" height="40" rx="8" fill="#EFF6FF" stroke="#0066CC" strokeWidth="1.5" />
          <path d="M60 40h20M120 40h20" stroke="#0066CC" strokeWidth="2" strokeDasharray="2 2" />
        </svg>
      )
    },
    {
      title: 'Digital Growth & Automation',
      subtitle: 'Systems, Branding & Modern AI',
      icon: Cpu,
      items: [
        'Strategic branding, identity architecture, and market positioning',
        'Marketing automation, CRM integration, and lifecycle funnels',
        'AI-enabled business tools for lead operations and sales workflows',
        'Modern technology solutions supporting real estate and services',
        'Scalable digital infrastructure engineered for accuracy'
      ],
      visual: (
        <svg viewBox="0 0 200 80" className="w-full h-16" fill="none">
          <circle cx="100" cy="40" r="28" stroke="#0066CC" strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="100" cy="40" r="14" fill="#0066CC" />
          <circle cx="40" cy="40" r="6" fill="#3B82F6" />
          <circle cx="160" cy="40" r="6" fill="#3B82F6" />
          <line x1="46" y1="40" x2="86" y2="40" stroke="#93C5FD" strokeWidth="1.5" />
          <line x1="114" y1="40" x2="154" y2="40" stroke="#93C5FD" strokeWidth="1.5" />
        </svg>
      )
    }
  ];

  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white select-none">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0066CC]">
            Core Track Record
          </span>
          <span className="text-[#86868B] text-xs">/ Section 02</span>
        </div>
        <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F]">
          Experience Across Research and Digital Execution
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#6E6E73]">
          Three foundational domains converging to deliver institutional-grade analytical and operational rigour.
        </p>
      </div>

      {/* Dominant 3-Panel Visual Layout (65% of slide) */}
      <div className="my-auto py-3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {domains.map((dom, idx) => {
            const Icon = dom.icon;
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
                    <span className="font-mono text-xs font-bold text-[#86868B]">
                      Area 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg sm:text-xl font-bold text-[#1D1D1F]">
                    {dom.title}
                  </h3>
                  <div className="text-xs font-medium text-[#0066CC] mt-0.5">
                    {dom.subtitle}
                  </div>

                  {/* Clean SVG visual */}
                  <div className="my-3 py-1 flex items-center justify-center">
                    {dom.visual}
                  </div>

                  <ul className="space-y-2 mt-2">
                    {dom.items.map((it, iIdx) => (
                      <li key={iIdx} className="text-xs text-[#6E6E73] flex items-start gap-1.5 leading-relaxed">
                        <span className="text-[#0066CC] font-bold mt-0.5">•</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 pt-3 border-t border-[#F0F0F2] flex items-center justify-between text-[11px] text-[#86868B]">
                  <span>Operational Domain</span>
                  <span className="font-semibold text-[#0066CC]">Verified Focus</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-[#E5E5EA] flex items-center justify-between text-xs text-[#86868B]">
        <span>Viralimalai Constituency Electoral Research Proposal</span>
        <span className="flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-[#0066CC]" /> Multidisciplinary Execution
        </span>
      </div>
    </div>
  );
};
