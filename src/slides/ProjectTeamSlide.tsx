import React from 'react';
import { User, Award, Users, CheckCircle2 } from 'lucide-react';
import { proposalMeta } from '../data/proposal';

export const ProjectTeamSlide: React.FC = () => {
  const team = [
    {
      name: proposalMeta.preparedBy,
      role: 'Project Lead & Primary Analyst',
      lead: true,
      desc: 'Analytical architecture, longitudinal performance modelling, report synthesis, and client presentation.',
      tag: 'Lead Analyst'
    },
    {
      name: 'Senior Researcher',
      role: 'Methodology & Quality Supervision',
      lead: false,
      desc: 'Research supervision, methodology compliance, discrepancy investigation, and mapping review.',
      tag: 'Supervision'
    },
    {
      name: 'Data Executive 1',
      role: 'Source Collection & Extraction',
      lead: false,
      desc: 'Archival document acquisition, primary Form 20 scanning, and structured data transcription.',
      tag: 'Operations'
    },
    {
      name: 'Data Executive 2',
      role: 'Cross-Checking & Verification',
      lead: false,
      desc: 'Independent blind cross-verification, arithmetic checks, and active discrepancy log tracking.',
      tag: 'Audit'
    }
  ];

  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0066CC]">
            Staffing & Structure
          </span>
          <span className="text-[#86868B] text-xs">/ Section 10</span>
        </div>
        <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F]">
          A Dedicated Research Team
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#6E6E73]">
          Multi-disciplinary allocation for the 4-week engagement with segregated collection and independent verification.
        </p>
      </div>

      {/* Dominant Visual 4-Card Team Grid (65% of slide) */}
      <div className="my-auto py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {team.map((member, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-3xl border transition-all flex flex-col justify-between ${
                member.lead
                  ? 'bg-white border-[#0066CC]/50 shadow-md ring-1 ring-[#0066CC]/15'
                  : 'bg-[#FBFBFD] border-[#E5E5EA] shadow-sm hover:border-[#0066CC]/40 hover:bg-white'
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#E5E5EA]">
                  <span className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm ${
                    member.lead ? 'bg-[#0066CC] text-white shadow-sm' : 'bg-blue-50 text-[#0066CC]'
                  }`}>
                    {member.lead ? <Award className="w-5 h-5" /> : <User className="w-5 h-5" />}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#F5F5F7] text-[#6E6E73] border border-[#E5E5EA]">
                    {member.tag}
                  </span>
                </div>

                <div className="mt-4">
                  <h3 className="text-base sm:text-lg font-bold text-[#1D1D1F]">
                    {member.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#0066CC] mt-0.5">
                    {member.role}
                  </div>
                </div>

                <p className="mt-3 text-xs text-[#6E6E73] leading-relaxed">
                  {member.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#F0F0F2] flex items-center gap-1.5 text-[11px] text-[#1D1D1F] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0066CC]" />
                <span>Dedicated Allocation</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Segregation of Duties Governance Banner */}
      <div className="p-3.5 rounded-2xl bg-[#F5F5F7] border border-[#E5E5EA] flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-[#1D1D1F]">
          <Users className="w-4 h-4 text-[#0066CC] shrink-0" />
          <span>
            <strong>Segregation of Duties:</strong> Primary extraction (Data Executive 1) and audit cross-verification (Data Executive 2) are conducted independently.
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#86868B] shrink-0 hidden sm:inline">
          No Internal Salaries Displayed
        </span>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-[#E5E5EA] flex items-center justify-between text-xs text-[#86868B]">
        <span>Viralimalai Constituency Electoral Research Proposal</span>
        <span>Ctrl Alt Kick Ad Tech Solutions Pvt Ltd</span>
      </div>
    </div>
  );
};
