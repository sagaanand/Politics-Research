import React from 'react';
import { User, Award, Calendar, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { proposalMeta } from '../data/proposal';

export const TeamAndTimelineSlide: React.FC = () => {
  const teamMembers = [
    {
      name: proposalMeta.preparedBy,
      role: 'Project Lead & Primary Analyst',
      lead: true,
      desc: 'Analytical architecture, comparative modeling, quality sign-off & client presentation.'
    },
    {
      name: 'Senior Researcher',
      role: 'Methodology & Supervision',
      lead: false,
      desc: 'Research supervision, secondary source audits & station continuity review.'
    },
    {
      name: 'Data Executive 1',
      role: 'Collection & Extraction',
      lead: false,
      desc: 'Official Form 20 discovery, archival document scanning & structured entry.'
    },
    {
      name: 'Data Executive 2',
      role: 'Cross-Check & Audit',
      lead: false,
      desc: 'Independent blind verification, arithmetic checks & discrepancy log tracking.'
    }
  ];

  const timelineWeeks = [
    {
      week: 'Week 1',
      title: 'Source Audit & Collection',
      tag: 'Phase 1',
      tasks: 'Review archives, identify Form 20s, lock schema, launch collection'
    },
    {
      week: 'Week 2',
      title: 'Extraction & Verification',
      tag: 'Phase 2',
      tasks: 'Digitise booth returns, blind cross-checks, variance reconciliation'
    },
    {
      week: 'Week 3',
      title: 'Mapping & Analysis',
      tag: 'Phase 3',
      tasks: 'Reconcile station IDs across cycles, model vote shares & margins'
    },
    {
      week: 'Week 4',
      title: 'Reporting & Handover',
      tag: 'Phase 4',
      tasks: 'Finalise Excel dataset, PDF report, deck & conduct 2 review rounds'
    }
  ];

  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white select-none">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0066CC]">
            Execution & Delivery
          </span>
          <span className="text-[#86868B] text-xs">/ Section 19</span>
        </div>
        <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F]">
          A Dedicated Team. A Four-Week Target.
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#6E6E73] max-w-3xl">
          Multi-disciplinary manpower allocation synchronized with a disciplined four-week phased delivery roadmap.
        </p>
      </div>

      {/* Dominant Visual Layout: Team Grid (Top) + 4-Week Timeline (Bottom) (65% of slide) */}
      <div className="my-auto py-3 space-y-4">
        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                member.lead
                  ? 'bg-white border-[#0066CC]/50 shadow-md ring-1 ring-[#0066CC]/15'
                  : 'bg-[#FBFBFD] border-[#E5E5EA] shadow-sm hover:border-[#0066CC]/40'
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#E5E5EA]">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs ${
                    member.lead ? 'bg-[#0066CC] text-white' : 'bg-blue-50 text-[#0066CC]'
                  }`}>
                    {member.lead ? <Award className="w-4 h-4" /> : <User className="w-4 h-4" />}
                  </div>
                  <span className="text-[9px] font-mono font-bold text-[#6E6E73] uppercase">
                    {member.lead ? 'Lead' : `Role 0${idx}`}
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-[#1D1D1F]">
                  {member.name}
                </h4>
                <div className="text-[11px] font-semibold text-[#0066CC] mt-0.5">
                  {member.role}
                </div>
                <p className="mt-1.5 text-[11px] text-[#6E6E73] leading-relaxed">
                  {member.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 4-Week Timeline Card */}
        <div className="p-5 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm">
          <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#E5E5EA]">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#0066CC]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#1D1D1F]">
                Four-Week Target Execution Schedule
              </span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-[#0066CC] border border-blue-200 font-semibold">
              4 Weeks Target
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {timelineWeeks.map((w, idx) => (
              <div key={idx} className="p-3.5 rounded-2xl bg-white border border-[#E5E5EA] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-mono font-bold text-[#0066CC]">{w.week}</span>
                    <span className="text-[10px] font-mono text-[#86868B]">{w.tag}</span>
                  </div>
                  <h5 className="text-xs font-bold text-[#1D1D1F] leading-tight">{w.title}</h5>
                  <p className="mt-1 text-[11px] text-[#6E6E73] leading-snug">{w.tasks}</p>
                </div>
                <div className="mt-2.5 pt-2 border-t border-[#F0F0F2] flex items-center gap-1 text-[10px] text-[#0066CC] font-semibold">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Phase Gate</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Schedule Qualification Banner */}
      <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 flex items-start gap-2.5 text-xs text-amber-900 leading-relaxed">
        <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <p>
          <strong>Schedule Qualification:</strong> Target schedule subject to source availability and document accessibility. If required physical archives are delayed, timeline impact will be communicated promptly. No internal salaries are displayed.
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
