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
    },
    {
      title: 'Documentation & Reporting',
      desc: 'Compiling structured executive briefing summaries, daily field monitors, and discrepancy registers.'
    }
  ];

  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white select-none">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0066CC]">
            Case Study 02 · 2024 General Elections
          </span>
          <span className="text-[#86868B] text-xs">/ Section 09</span>
        </div>
        <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F]">
          Research Support Across Multiple States
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#6E6E73] max-w-3xl">
          Previous work during the 2024 Lok Sabha election period included pre-poll survey support and candidate-structure research in Odisha and Andhra Pradesh.
        </p>
      </div>

      {/* Dominant Visual Layout: Eastern / Coastal India Map + 5 Involvement Cards (65% of slide) */}
      <div className="my-auto py-3">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Geographic Focus Map (Odisha & Andhra Pradesh) */}
          <div className="lg:col-span-5 p-6 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#E5E5EA]">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#0066CC]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1D1D1F]">
                    Multi-State Parliamentary Scope
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-[#0066CC] border border-blue-200 font-semibold">
                  2024 Lok Sabha
                </span>
              </div>

              {/* Vector Representation of Odisha & Andhra Pradesh Map */}
              <div className="my-4 p-4 rounded-2xl bg-white border border-[#E5E5EA] flex flex-col items-center justify-center">
                <svg viewBox="0 0 200 140" className="w-full h-32" fill="none">
                  {/* Surrounding Bay of Bengal & States boundary */}
                  {/* Odisha */}
                  <path
                    d="M60 25 L140 20 L160 65 L100 80 L70 50 Z"
                    fill="#3B82F6"
                    stroke="#1D4ED8"
                    strokeWidth="1.5"
                  />
                  <text x="110" y="48" fontSize="10" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">
                    Odisha
                  </text>

                  {/* Andhra Pradesh */}
                  <path
                    d="M70 50 L100 80 L140 85 L120 135 L60 130 L50 80 Z"
                    fill="#0066CC"
                    stroke="#004C99"
                    strokeWidth="1.5"
                  />
                  <text x="95" y="105" fontSize="10" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">
                    Andhra Pradesh
                  </text>

                  {/* Coastline Indicator */}
                  <path d="M150 20 C 170 60, 150 100, 130 135" stroke="#93C5FD" strokeWidth="2" strokeDasharray="3 3" />
                  <text x="175" y="85" fontSize="7" fill="#64748B" textAnchor="middle">Bay of Bengal</text>
                </svg>
              </div>

              <div className="space-y-1.5 text-xs text-[#6E6E73]">
                <div className="flex items-center justify-between">
                  <span>States Highlighted:</span>
                  <span className="font-semibold text-[#1D1D1F]">Odisha & Andhra Pradesh</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Nature of Work:</span>
                  <span className="font-semibold text-[#1D1D1F]">Pre-Poll Research Support</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Cycle:</span>
                  <span className="font-mono text-[#0066CC] font-bold">2024 General Elections</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#E5E5EA] flex items-center justify-between text-[11px] text-[#86868B]">
              <span>Multi-State Research</span>
              <span className="font-mono text-[#0066CC]">Verified Track Record</span>
            </div>
          </div>

          {/* Right Column: 5 Areas of Involvement */}
          <div className="lg:col-span-7 space-y-2.5">
            {involvementAreas.map((area, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm hover:border-[#0066CC]/50 hover:bg-white transition-all flex items-start gap-3"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#0066CC] font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  0{idx + 1}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#1D1D1F] flex items-center gap-1.5">
                    {area.title}
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  </h4>
                  <p className="mt-1 text-[11px] text-[#6E6E73] leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mandatory Confidentiality Standard Banner */}
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
