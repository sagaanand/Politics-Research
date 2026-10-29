import React from 'react';
import { MapPin, Shield, CheckCircle2 } from 'lucide-react';

export const CaseStudyTamilNaduSlide: React.FC = () => {
  const involvementAreas = [
    { title: 'Booth-Level Data Organisation', desc: 'Structuring historical polling-station records, voter roll indexes, and Form 20 data' },
    { title: 'Research & Analytical Support', desc: 'Comparative margin assessments, past turnout metrics, and demographic trends' },
    { title: 'Candidate Analysis & Branding', desc: 'Strengths-weaknesses profiling, narrative positioning, and constituency communication' },
    { title: 'Digital Campaign Execution', desc: 'Social and targeted digital campaign execution across key constituency clusters' },
    { title: 'Survey & Field-Research Support', desc: 'Questionnaire structuring, ground surveyor coordination, and data intake audit' },
    { title: 'Campaign Operations', desc: 'Ground workflow logistics, war room reporting cadences, and rapid intelligence triage' }
  ];

  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white select-none">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0066CC]">
            Case Study 01 · 2021 Assembly Elections
          </span>
          <span className="text-[#86868B] text-xs">/ Section 08</span>
        </div>
        <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F]">
          Constituency-Level Research & Campaign Operations
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#6E6E73] max-w-3xl">
          During the 2021 Tamil Nadu Assembly election period, work encompassed rigorous constituency-level assignments across Coimbatore, Tiruppur, and the Nilgiris districts.
        </p>
      </div>

      {/* Dominant Visual Editorial Case Study Layout (65% of slide) */}
      <div className="my-auto py-3">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Geographic District Map + Context */}
          <div className="lg:col-span-5 p-6 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#E5E5EA]">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#0066CC]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1D1D1F]">
                    Western Tamil Nadu Focus
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-[#0066CC] border border-blue-200 font-semibold">
                  3 Districts
                </span>
              </div>

              {/* Vector Representation of Western Tamil Nadu Cluster */}
              <div className="my-4 p-4 rounded-2xl bg-white border border-[#E5E5EA] flex flex-col items-center justify-center">
                <svg viewBox="0 0 200 130" className="w-full h-28" fill="none">
                  {/* The Nilgiris (North-West) */}
                  <rect x="25" y="20" width="55" height="35" rx="10" fill="#DBEAFE" stroke="#0066CC" strokeWidth="1.5" />
                  <text x="52" y="42" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1E3A8A">Nilgiris</text>

                  {/* Coimbatore (West / Central) */}
                  <rect x="50" y="60" width="65" height="50" rx="12" fill="#0066CC" stroke="#004C99" strokeWidth="1.5" />
                  <text x="82" y="88" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FFFFFF">Coimbatore</text>

                  {/* Tiruppur (East of Coimbatore) */}
                  <rect x="120" y="55" width="60" height="55" rx="12" fill="#93C5FD" stroke="#0066CC" strokeWidth="1.5" />
                  <text x="150" y="85" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1E3A8A">Tiruppur</text>

                  {/* Connecting cluster links */}
                  <line x1="65" y1="55" x2="75" y2="60" stroke="#0066CC" strokeWidth="2" strokeDasharray="3 3" />
                  <line x1="115" y1="80" x2="120" y2="80" stroke="#0066CC" strokeWidth="2" strokeDasharray="3 3" />
                </svg>
              </div>

              <div className="space-y-1.5 text-xs text-[#6E6E73]">
                <div className="flex items-center justify-between">
                  <span>Target Geography:</span>
                  <span className="font-semibold text-[#1D1D1F]">Kongu & Nilgiris Belt</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Scope Level:</span>
                  <span className="font-semibold text-[#1D1D1F]">Booth & Constituency Level</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Cycle:</span>
                  <span className="font-mono text-[#0066CC] font-bold">2021 Assembly Election</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#E5E5EA] flex items-center justify-between text-[11px] text-[#86868B]">
              <span>Tamil Nadu Experience</span>
              <span className="font-mono text-[#0066CC]">Verified Capability</span>
            </div>
          </div>

          {/* Right Column: 6 Involvement Areas */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {involvementAreas.map((area, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm hover:border-[#0066CC]/50 hover:bg-white transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#E5E5EA]">
                    <span className="font-mono text-xs font-bold text-[#0066CC]">
                      0{idx + 1}
                    </span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#1D1D1F]">
                    {area.title}
                  </h4>
                  <p className="mt-1.5 text-[11px] text-[#6E6E73] leading-relaxed">
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
