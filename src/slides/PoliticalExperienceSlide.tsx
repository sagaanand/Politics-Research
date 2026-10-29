import React from 'react';
import { MapPin, Shield, CheckCircle2, ArrowRight } from 'lucide-react';

export const PoliticalExperienceSlide: React.FC = () => {
  const portfolioEngagements = [
    {
      year: '2021',
      title: 'Tamil Nadu Legislative Assembly Election',
      scope: 'State Assembly Election Period',
      geography: 'Coimbatore · Tiruppur · Nilgiris',
      highlights: [
        'Booth-level data organisation and historical electoral record structuring',
        'Candidate profile analysis, margin assessments & survey support',
        'Multi-channel digital campaign execution & narrative coordination'
      ],
      tag: 'Constituency Operations'
    },
    {
      year: '2024',
      title: 'Lok Sabha General Elections',
      scope: 'Parliamentary Election Period',
      geography: 'Odisha & Andhra Pradesh',
      highlights: [
        'Pre-poll research support and candidate-structure analytical work',
        'Research organisation, multi-state data synthesis & tracking',
        'Structured analytical documentation and high-level briefing support'
      ],
      tag: 'Multi-State Research'
    }
  ];

  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white select-none">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0066CC]">
            Electoral Track Record
          </span>
          <span className="text-[#86868B] text-xs">/ Section 07</span>
        </div>
        <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F]">
          Experience Supporting Election-Related Research and Operations
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#6E6E73] max-w-3xl">
          Previous election-related engagements have involved research and analytical support, campaign operations, candidate analysis, surveys, and digital campaign execution.
        </p>
      </div>

      {/* Dominant Visual Layout: Accurate India Geographic Highlight + 2 Portfolio Cards (65% of slide) */}
      <div className="my-auto py-3">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Stylised Geographic Map Visual (Tamil Nadu, Andhra Pradesh, Odisha) */}
          <div className="lg:col-span-4 p-5 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#E5E5EA]">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#0066CC]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1D1D1F]">
                    Geographic Footprint
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-[#0066CC] border border-blue-200 font-semibold">
                  3 States
                </span>
              </div>

              {/* Vector Representation of South / East India States */}
              <div className="my-4 p-3 rounded-2xl bg-white border border-[#E5E5EA] flex flex-col items-center justify-center">
                <svg viewBox="0 0 160 200" className="w-full h-36" fill="none">
                  {/* Stylized schematic map of Peninsular & Eastern India */}
                  {/* Base subcontinent contour */}
                  <path
                    d="M30 30 L90 20 L130 50 L140 100 L110 160 L80 190 L60 170 L40 120 L25 80 Z"
                    fill="#F1F5F9"
                    stroke="#CBD5E1"
                    strokeWidth="1.5"
                  />
                  {/* Odisha Highlight (East) */}
                  <path
                    d="M100 65 L130 60 L135 90 L110 100 Z"
                    fill="#93C5FD"
                    stroke="#0066CC"
                    strokeWidth="1.5"
                  />
                  {/* Andhra Pradesh Highlight (Southeast Coast) */}
                  <path
                    d="M90 100 L125 95 L115 140 L85 145 Z"
                    fill="#60A5FA"
                    stroke="#0066CC"
                    strokeWidth="1.5"
                  />
                  {/* Tamil Nadu Highlight (South) */}
                  <path
                    d="M75 145 L105 142 L80 190 L65 170 Z"
                    fill="#0066CC"
                    stroke="#004C99"
                    strokeWidth="1.5"
                  />
                  {/* Labels */}
                  <text x="125" y="75" fontSize="7" fill="#1E3A8A" fontWeight="bold">Odisha [2024]</text>
                  <text x="110" y="120" fontSize="7" fill="#1E3A8A" fontWeight="bold">Andhra Pradesh [2024]</text>
                  <text x="75" y="165" fontSize="7" fill="#FFFFFF" fontWeight="bold">Tamil Nadu [2021]</text>
                </svg>
              </div>

              <div className="space-y-1.5 text-xs text-[#6E6E73]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#0066CC]" />
                  <span className="font-semibold text-[#1D1D1F]">Tamil Nadu:</span> Assembly cycle (2021)
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#60A5FA]" />
                  <span className="font-semibold text-[#1D1D1F]">Odisha & AP:</span> General elections (2024)
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#E5E5EA] text-[10px] text-[#86868B] font-mono">
              Anonymised Portfolio History
            </div>
          </div>

          {/* Right Column: 2 Engagement Cards */}
          <div className="lg:col-span-8 space-y-4">
            {portfolioEngagements.map((eng, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm hover:border-[#0066CC]/50 hover:bg-white transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#E5E5EA]">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-base font-extrabold text-[#0066CC] bg-blue-50 px-2.5 py-0.5 rounded-lg border border-blue-100">
                        {eng.year}
                      </span>
                      <h3 className="text-base font-bold text-[#1D1D1F]">
                        {eng.title}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white border border-[#E5E5EA] text-[#6E6E73] font-bold">
                      {eng.tag}
                    </span>
                  </div>

                  <div className="mt-3 text-xs font-semibold text-[#0066CC] flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Focus Geography: {eng.geography}</span>
                  </div>

                  <ul className="mt-3 space-y-2">
                    {eng.highlights.map((hl, hIdx) => (
                      <li key={hIdx} className="text-xs text-[#6E6E73] flex items-start gap-2 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0066CC] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F0F0F2] flex items-center justify-between text-[11px] text-[#86868B]">
                  <span>Scope: {eng.scope}</span>
                  <span className="text-[#0066CC] font-semibold flex items-center gap-1">
                    Case Study Follows <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Confidentiality Standard Banner */}
      <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 flex items-center gap-2 text-xs text-amber-900">
        <Shield className="w-4 h-4 text-amber-700 shrink-0" />
        <p>
          <strong>Confidentiality Standard:</strong> In compliance with strict professional NDAs, all client identities, party logos, candidate names, and proprietary strategies are withheld.
        </p>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-[#E5E5EA] flex items-center justify-between text-xs text-[#86868B]">
        <span>Viralimalai Constituency Electoral Research Proposal</span>
        <span>Ctrl Alt Kick Ad Tech Solutions Pvt Ltd</span>
      </div>
    </div>
  );
};
