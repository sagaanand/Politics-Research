import React from 'react';
import { MapPin, Shield, CheckCircle2 } from 'lucide-react';

export const CaseStudyLokSabhaSlide: React.FC = () => {
  const involvementAreas = [
    {
      title: 'Pre-Poll Research Support',
      desc: 'Assisting structured field research methodologies, sample distribution frameworks, and field team alignment.'
    },
    {
      title: 'Candidate-Related Analysis',
      desc: 'Profiling candidate track records, local constituency dynamics, and historical electoral competitiveness.'
    },
    {
      title: 'Research Organisation',
      desc: 'Structuring multi-constituency data streams into standardised databases for rapid comparative queries.'
    },
    {
      title: 'Structured Analytical Work',
      desc: 'Analysing historical turnout variations, margin distributions, and demographic assembly segments.'
    }
  ];

  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white select-none">
      {/* Header */}
      <div>
        <div className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold tracking-widest uppercase text-[#0066CC] mb-2">
          Case Study 02 · 2024 General Elections
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1D1D1F]">
          Research Support Across Multiple States
        </h2>
        <p className="mt-2 text-lg sm:text-xl text-[#4B5563] max-w-4xl">
          Previous work during the 2024 Lok Sabha election period included pre-poll survey support and candidate-structure research in Odisha and Andhra Pradesh.
        </p>
      </div>

      {/* Dominant Visual Layout (65% of slide) */}
      <div className="my-auto py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Geographic Focus Map */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#E5E5EA]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#0066CC]" />
                  <span className="text-sm font-bold uppercase tracking-wider text-[#1D1D1F]">
                    Multi-State Parliamentary Scope
                  </span>
                </div>
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-blue-50 text-[#0066CC] border border-blue-200">
                  2024 Lok Sabha
                </span>
              </div>

              {/* Vector Representation of Odisha & Andhra Pradesh Map */}
              <div className="my-6 p-4 rounded-2xl bg-white border border-[#E5E5EA] flex flex-col items-center justify-center">
                <svg viewBox="0 0 200 140" className="w-full h-36" fill="none">
                  {/* Odisha */}
                  <path
                    d="M60 25 L140 20 L160 65 L100 80 L70 50 Z"
                    fill="#3B82F6"
                    stroke="#1D4ED8"
                    strokeWidth="2"
                  />
                  <text x="110" y="48" fontSize="11" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">
                    Odisha
                  </text>

                  {/* Andhra Pradesh */}
                  <path
                    d="M70 50 L100 80 L140 85 L120 135 L60 130 L50 80 Z"
                    fill="#0066CC"
                    stroke="#004C99"
                    strokeWidth="2"
                  />
                  <text x="95" y="105" fontSize="11" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">
                    Andhra Pradesh
                  </text>

                  <path d="M150 20 C 170 60, 150 100, 130 135" stroke="#93C5FD" strokeWidth="2" strokeDasharray="3 3" />
                  <text x="175" y="85" fontSize="8" fill="#64748B" textAnchor="middle">Bay of Bengal</text>
                </svg>
              </div>

              <div className="space-y-2 text-sm text-[#4B5563]">
                <div className="flex items-center justify-between">
                  <span>States Highlighted:</span>
                  <span className="font-bold text-[#1D1D1F]">Odisha & Andhra Pradesh</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Nature of Work:</span>
                  <span className="font-bold text-[#1D1D1F]">Pre-Poll Research Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Areas of Involvement */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {involvementAreas.map((area, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm hover:border-[#0066CC]/50 hover:bg-white transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#E5E5EA]">
                    <span className="font-mono text-sm font-extrabold text-[#0066CC]">
                      0{idx + 1}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-[#1D1D1F]">
                    {area.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mandatory Confidentiality Banner */}
      <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 flex items-center gap-2 text-xs text-amber-900">
        <Shield className="w-4 h-4 text-amber-700 shrink-0" />
        <p>
          <strong>Confidentiality Notice:</strong> Anonymised historical experience. Client identities, proprietary datasets, and confidential survey materials are not disclosed.
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
