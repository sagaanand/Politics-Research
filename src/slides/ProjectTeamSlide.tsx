import React from 'react';
import { User, Users, CheckCircle, Award } from 'lucide-react';
import { proposalMeta } from '../data/proposal';

export const ProjectTeamSlide: React.FC = () => {
  const teamMembers = [
    {
      role: 'Project Lead & Primary Analyst',
      name: proposalMeta.preparedBy,
      affiliation: proposalMeta.company,
      lead: true,
      responsibilities: [
        'Overall analytical direction and research methodology design',
        'Cross-year comparative analysis across 2016, 2021, and 2026',
        'Synthesising strategic findings and final report preparation',
        'Direct client liaison, milestone presentations, and review management'
      ]
    },
    {
      role: 'Senior Researcher',
      name: 'Senior Electoral Research Specialist',
      affiliation: 'Research & Verification Desk',
      lead: false,
      responsibilities: [
        'Research supervision and methodology compliance oversight',
        'Supervising secondary source collection and archival document audits',
        'Quality review of polling station mapping continuity',
        'Investigating complex anomalies and ambiguous booth records'
      ]
    },
    {
      role: 'Data Collection Executive 1',
      name: 'Primary Extraction Specialist',
      affiliation: 'Data Operations Desk',
      lead: false,
      responsibilities: [
        'Official source discovery and archival document procurement',
        'Structured digital data extraction from Form 20 and gazettes',
        'Initial booth-level data transcription and standardization',
        'Cataloguing source documents into the project repository'
      ]
    },
    {
      role: 'Data Collection Executive 2',
      name: 'Verification & Audit Specialist',
      affiliation: 'Quality Assurance Desk',
      lead: false,
      responsibilities: [
        'Independent blind cross-checking of all extracted figures',
        'Arithmetic validation across polling booth returns',
        'Tracking discrepancies between conflicting secondary sources',
        'Maintaining the active Discrepancy & Missing-Data Log'
      ]
    }
  ];

  return (
    <div className="flex-1 w-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0066CC]">
            Staffing & Structure
          </span>
          <span className="text-[#86868B] text-xs">/ Section 10</span>
        </div>
        <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1D1D1F]">
          A Dedicated Research Team
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-[#6E6E73]">
          Multi-disciplinary team allocated for the 4-week engagement with segregated collection and audit duties
        </p>
      </div>

      {/* Team Cards Grid */}
      <div className="my-auto py-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                member.lead
                  ? 'bg-[#FBFBFD] border-[#0066CC]/40 shadow-sm ring-1 ring-[#0066CC]/10'
                  : 'bg-[#FBFBFD] border-[#E5E5EA]'
              }`}
            >
              <div className="flex items-start justify-between pb-3 border-b border-[#E5E5EA]">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs ${
                      member.lead
                        ? 'bg-[#0066CC] text-white shadow-sm'
                        : 'bg-[#E5E5EA] text-[#1D1D1F]'
                    }`}
                  >
                    {member.lead ? <Award className="w-4 h-4" /> : <User className="w-4 h-4" />}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#1D1D1F] flex items-center gap-2">
                      {member.name}
                      {member.lead && (
                        <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-blue-50 text-[#0066CC] border border-blue-200">
                          Lead
                        </span>
                      )}
                    </h3>
                    <div className="text-xs font-medium text-[#0066CC]">{member.role}</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-[#86868B] hidden sm:inline">
                  {member.affiliation}
                </span>
              </div>

              <div className="mt-3 space-y-1.5">
                <div className="text-[10px] uppercase tracking-wider font-semibold text-[#86868B]">
                  Key Responsibilities
                </div>
                {member.responsibilities.map((resp, rIdx) => (
                  <div key={rIdx} className="text-xs text-[#6E6E73] flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#0066CC] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{resp}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Governance Callout */}
      <div className="p-3.5 rounded-xl bg-[#F5F5F7] border border-[#E5E5EA] flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-[#1D1D1F]">
          <Users className="w-4 h-4 text-[#0066CC] shrink-0" />
          <span>
            <strong>Segregation of Duties:</strong> Primary data extraction (Executive 1) and cross-verification (Executive 2) are conducted independently to prevent shared cognitive bias.
          </span>
        </div>
        <span className="text-[11px] font-mono text-[#86868B] shrink-0 hidden sm:inline">
          Full Engagement Allocation
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
