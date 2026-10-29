import React from 'react';
import { MapPin, Shield, CheckCircle2 } from 'lucide-react';

export const PoliticalExperienceSlide: React.FC = () => {
  const portfolioEngagements = [
    {
      year: '2021',
      title: 'Tamil Nadu Legislative Assembly Election',
      geography: 'Coimbatore · Tiruppur · Nilgiris',
      highlights: [
        'Booth-level data organisation and historical record structuring',
        'Candidate profile analysis, margin assessments & survey support',
        'Multi-channel digital campaign execution & narrative coordination'
      ]
    },
    {
      year: '2024',
      title: 'Lok Sabha General Elections',
      geography: 'Odisha & Andhra Pradesh',
      highlights: [
        'Pre-poll research support and candidate analytical work',
        'Research organisation, multi-state data synthesis & tracking',
        'Structured analytical documentation and high-level briefing support'
      ]
    }
  ];

  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white select-none">
      {/* Header */}
      <div>
        <div className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold tracking-widest uppercase text-[#0066CC] mb-2">
          Electoral Track Record
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1D1D1F]">
          Experience Supporting Election-Related Research and Operations
        </h2>
        <p className="mt-2 text-lg sm:text-xl text-[#4B5563] max-w-4xl">
          Previous election-related engagements have involved research and analytical support, campaign operations, candidate analysis, surveys, and digital campaign execution.
        </p>
      </div>

      {/* Dominant Visual Layout: Map on Left + 2 Large Cards on Right (65% of slide) */}
      <div className="my-auto py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Stylised Map Graphic */}
          <div className="lg:col-span-4 p-8 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#E5E5EA]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#0066CC]" />
                  <span className="text-sm font-bold uppercase tracking-wider text-[#1D1D1F]">
                    Geographic Footprint
                  </span>
                </div>
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-blue-50 text-[#0066CC] border border-blue-200">
                  3 States
                </span>
              </div>

              {/* Vector Representation of South / East India States */}
              <div className="my-6 p-4 rounded-2xl bg-white border border-[#E5E5EA] flex flex-col items-center justify-center">
                <svg viewBox="0 0 160 200" className="w-full h-44" fill="none">
                  <path
                    d="M30 30 L90 20 L130 50 L140 100 L110 160 L80 190 L60 170 L40 120 L25 80 Z"
                    fill="#F1F5F9"
                    stroke="#CBD5E1"
                    strokeWidth="1.5"
                  />
                  {/* Odisha */}
                  <path d="M100 65 L130 60 L135 90 L110 100 Z" fill="#93C5FD" stroke="#0066CC" strokeWidth="2" />
                  {/* Andhra Pradesh */}
                  <path d="M90 100 L125 95 L115 140 L85 145 Z" fill="#60A5FA" stroke="#0066CC" strokeWidth="2" />
                  {/* Tamil Nadu */}
                  <path d="M75 145 L105 142 L80 190 L65 170 Z" fill="#0066CC" stroke="#004C99" strokeWidth="2" />
                  <text x="125" y="75" fontSize="8" fill="#1E3A8A" fontWeight="bold">Odisha</text>
                  <text x="110" y="120" fontSize="8" fill="#1E3A8A" fontWeight="bold">Andhra Pradesh</text>
                  <text x="75" y="165" fontSize="8" fill="#FFFFFF" fontWeight="bold">Tamil Nadu</text>
                </svg>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-[#4B5563]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0066CC]" />
                  <span className="font-bold text-[#1D1D1F]">Tamil Nadu:</span> Assembly cycle (2021)
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#60A5FA]" />
                  <span className="font-bold text-[#1D1D1F]">Odisha & AP:</span> General elections (2024)
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 2 Large Cards */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-5">
            {portfolioEngagements.map((eng, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm hover:border-[#0066CC]/50 hover:bg-white transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#E5E5EA]">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xl sm:text-2xl font-extrabold text-[#0066CC] bg-blue-50 px-3 py-1 rounded-xl border border-blue-100">
                        {eng.year}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#1D1D1F]">
                        {eng.title}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-3 text-sm font-semibold text-[#0066CC] flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    <span>Focus Geography: {eng.geography}</span>
                  </div>

                  <ul className="mt-4 space-y-2.5">
                    {eng.highlights.map((hl, hIdx) => (
                      <li key={hIdx} className="text-sm sm:text-base text-[#4B5563] flex items-start gap-2.5 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#0066CC] shrink-0 mt-1" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
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
