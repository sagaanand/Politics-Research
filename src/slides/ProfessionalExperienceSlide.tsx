import React from 'react';
import { BarChart3, Compass, Cpu } from 'lucide-react';

export const ProfessionalExperienceSlide: React.FC = () => {
  const domains = [
    {
      title: 'Research & Analysis',
      icon: BarChart3,
      items: [
        'Historical electoral data research and archival consolidation',
        'Structured analytical work and booth-level concordance',
        'Constituency surveys and voter sentiment study support',
        'Candidate profile analysis and relative margin assessments',
        'Evidence-backed documentation and executive reporting'
      ],
      visual: (
        <svg viewBox="0 0 200 70" className="w-full h-14 text-[#0066CC]" fill="none">
          <path d="M10 55 L 50 35 L 90 45 L 140 18 L 190 28" stroke="#0066CC" strokeWidth="3" />
          <circle cx="50" cy="35" r="4.5" fill="#0066CC" />
          <circle cx="90" cy="45" r="4.5" fill="#0066CC" />
          <circle cx="140" cy="18" r="4.5" fill="#0066CC" />
          <circle cx="190" cy="28" r="4.5" fill="#0066CC" />
        </svg>
      )
    },
    {
      title: 'Campaign Operations',
      icon: Compass,
      items: [
        'Multi-constituency campaign operational coordination',
        'Digital campaign deployment and tactical narrative testing',
        'On-ground field research support and survey logistics',
        'Rapid data triage and reporting during election windows',
        'Strict operational workflows across field teams'
      ],
      visual: (
        <svg viewBox="0 0 200 70" className="w-full h-14" fill="none">
          <rect x="20" y="15" width="42" height="42" rx="10" fill="#EFF6FF" stroke="#0066CC" strokeWidth="2" />
          <rect x="80" y="15" width="42" height="42" rx="10" fill="#EFF6FF" stroke="#0066CC" strokeWidth="2" />
          <rect x="140" y="15" width="42" height="42" rx="10" fill="#EFF6FF" stroke="#0066CC" strokeWidth="2" />
          <path d="M62 36h18M122 36h18" stroke="#0066CC" strokeWidth="2.5" strokeDasharray="3 3" />
        </svg>
      )
    },
    {
      title: 'Digital Growth & Automation',
      icon: Cpu,
      items: [
        'Strategic branding, identity architecture & market positioning',
        'Marketing automation, CRM integration & lifecycle funnels',
        'AI-enabled business tools for lead operations and sales',
        'Modern technology solutions supporting real estate & services',
        'Scalable digital infrastructure engineered for accuracy'
      ],
      visual: (
        <svg viewBox="0 0 200 70" className="w-full h-14" fill="none">
          <circle cx="100" cy="35" r="26" stroke="#0066CC" strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="100" cy="35" r="14" fill="#0066CC" />
          <circle cx="40" cy="35" r="7" fill="#3B82F6" />
          <circle cx="160" cy="35" r="7" fill="#3B82F6" />
          <line x1="47" y1="35" x2="86" y2="35" stroke="#93C5FD" strokeWidth="2" />
          <line x1="114" y1="35" x2="153" y2="35" stroke="#93C5FD" strokeWidth="2" />
        </svg>
      )
    }
  ];

  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white select-none">
      {/* Header */}
      <div>
        <div className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold tracking-widest uppercase text-[#0066CC] mb-2">
          Track Record
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1D1D1F]">
          Experience Across Research and Digital Execution
        </h2>
        <p className="mt-2 text-lg sm:text-xl text-[#4B5563]">
          Three core domains delivering analytical rigour, campaign discipline, and technology execution.
        </p>
      </div>

      {/* Dominant 3-Panel Visual Layout (65% of slide) */}
      <div className="my-auto py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {domains.map((dom, idx) => {
            const Icon = dom.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm hover:border-[#0066CC]/50 hover:bg-white transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3 pb-3 mb-3 border-b border-[#E5E5EA]">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0066CC] flex items-center justify-center group-hover:bg-[#0066CC] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#1D1D1F]">
                      {dom.title}
                    </h3>
                  </div>

                  {/* Visual */}
                  <div className="my-3 py-1 flex items-center justify-center">
                    {dom.visual}
                  </div>

                  <ul className="space-y-2.5 mt-3">
                    {dom.items.map((it, iIdx) => (
                      <li key={iIdx} className="text-xs sm:text-sm text-[#4B5563] flex items-start gap-2 leading-relaxed">
                        <span className="text-[#0066CC] font-extrabold mt-0.5">•</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
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
