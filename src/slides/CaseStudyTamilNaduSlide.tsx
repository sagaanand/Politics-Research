import React from 'react';
import { MapPin, Shield, CheckCircle2 } from 'lucide-react';

export const CaseStudyTamilNaduSlide: React.FC = () => {
  const involvementAreas = [
    { title: 'Booth-Level Data Organisation', desc: 'Structuring historical polling-station records, voter roll indexes, and Form 20 data.' },
    { title: 'Research & Analytical Support', desc: 'Comparative margin assessments, past turnout metrics, and demographic trends.' },
    { title: 'Candidate Analysis & Branding', desc: 'Strengths-weaknesses profiling, narrative positioning, and constituency communication.' },
    { title: 'Campaign Operations & Surveys', desc: 'Ground workflow logistics, war room reporting cadences, and survey field support.' }
  ];

  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white select-none">
      {/* Header */}
      <div>
        <div className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold tracking-widest uppercase text-[#0066CC] mb-2">
          Case Study 01 · 2021 Assembly Elections
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1D1D1F]">
          Constituency-Level Research & Campaign Operations
        </h2>
        <p className="mt-2 text-lg sm:text-xl text-[#4B5563] max-w-4xl">
          During the 2021 Tamil Nadu Assembly election period, work encompassed assignments across Coimbatore, Tiruppur, and the Nilgiris districts.
        </p>
      </div>

      {/* Dominant Visual Editorial Case Study Layout (65% of slide) */}
      <div className="my-auto py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Geographic District Map + Context */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#E5E5EA]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#0066CC]" />
                  <span className="text-sm font-bold uppercase tracking-wider text-[#1D1D1F]">
                    Western Tamil Nadu Focus
                  </span>
                </div>
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-blue-50 text-[#0066CC] border border-blue-200">
                  3 Districts
                </span>
              </div>

              {/* Vector Representation of Western Tamil Nadu Cluster */}
              <div className="my-6 p-4 rounded-2xl bg-white border border-[#E5E5EA] flex flex-col items-center justify-center">
                <svg viewBox="0 0 200 130" className="w-full h-36" fill="none">
                  {/* The Nilgiris */}
                  <rect x="25" y="20" width="55" height="35" rx="10" fill="#DBEAFE" stroke="#0066CC" strokeWidth="2" />
                  <text x="52" y="42" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1E3A8A">Nilgiris</text>

                  {/* Coimbatore */}
                  <rect x="50" y="60" width="65" height="50" rx="12" fill="#0066CC" stroke="#004C99" strokeWidth="2" />
                  <text x="82" y="90" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#FFFFFF">Coimbatore</text>

                  {/* Tiruppur */}
                  <rect x="120" y="55" width="60" height="55" rx="12" fill="#93C5FD" stroke="#0066CC" strokeWidth="2" />
                  <text x="150" y="87" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1E3A8A">Tiruppur</text>

                  <line x1="65" y1="55" x2="75" y2="60" stroke="#0066CC" strokeWidth="2" strokeDasharray="3 3" />
                  <line x1="115" y1="80" x2="120" y2="80" stroke="#0066CC" strokeWidth="2" strokeDasharray="3 3" />
                </svg>
              </div>

              <div className="space-y-2 text-sm text-[#4B5563]">
                <div className="flex items-center justify-between">
                  <span>Target Geography:</span>
                  <span className="font-bold text-[#1D1D1F]">Kongu & Nilgiris Belt</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Scope Level:</span>
                  <span className="font-bold text-[#1D1D1F]">Booth & Constituency Level</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Large Involvement Cards */}
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
          <strong>Confidentiality Notice:</strong> Anonymised historical experience. Specific political client details, internal strategy, and campaign identities are withheld for confidentiality.
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
