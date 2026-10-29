import React from 'react';
import { User, Award, Calendar, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { proposalMeta } from '../data/proposal';

export const TeamAndTimelineSlide: React.FC = () => {
  const teamMembers = [
    {
      name: proposalMeta.preparedBy,
      role: 'Project Lead & Primary Analyst',
      lead: true,
      desc: 'Analytical architecture, comparative modeling, quality sign-off, and client presentation.'
    },
    {
      name: 'Senior Researcher',
      role: 'Methodology & Supervision',
      lead: false,
      desc: 'Research supervision, secondary source audits, and station continuity review.'
    },
    {
      name: 'Data Executive 1',
      role: 'Collection & Extraction',
      lead: false,
      desc: 'Form 20 discovery, archival document scanning, and structured data entry.'
    },
    {
      name: 'Data Executive 2',
      role: 'Cross-Check & Audit',
      lead: false,
      desc: 'Independent blind verification, arithmetic checks, and discrepancy log tracking.'
    }
  ];

  const timelineWeeks = [
    {
      week: 'Week 1',
      title: 'Source Audit & Setup',
      phase: 'Phase 1',
      tasks: 'Review archives, catalogue Form 20s, lock database schema, and launch extraction.'
    },
    {
      week: 'Week 2',
      title: 'Extraction & Verification',
      phase: 'Phase 2',
      tasks: 'Digitise booth returns, blind cross-checks, and arithmetic variance reconciliation.'
    },
    {
      week: 'Week 3',
      title: 'Mapping & Analysis',
      phase: 'Phase 3',
      tasks: 'Reconcile station IDs across 2016-2026, model vote shares, margins, and turnout.'
    },
    {
      week: 'Week 4',
      title: 'Handover & Review',
      phase: 'Phase 4',
      tasks: 'Deliver master dataset, PDF dossier, executive deck, and conduct 2 client review rounds.'
    }
  ];

  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white select-none">
      {/* Header */}
      <div>
        <div className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold tracking-widest uppercase text-[#0066CC] mb-2">
          Execution & Delivery
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1D1D1F]">
          A Dedicated Team. A Four-Week Target.
        </h2>
        <p className="mt-2 text-lg sm:text-xl text-[#4B5563] max-w-4xl">
          Multi-disciplinary manpower allocation synchronized with a disciplined four-week phased delivery roadmap.
        </p>
      </div>

      {/* Dominant Visual Layout: Team Grid + 4-Week Timeline (65% of slide) */}
      <div className="my-auto py-3 space-y-5">
        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-3xl border transition-all flex flex-col justify-between ${
                member.lead
                  ? 'bg-white border-[#0066CC]/60 shadow-md ring-2 ring-[#0066CC]/15'
                  : 'bg-[#FBFBFD] border-[#E5E5EA] shadow-sm hover:border-[#0066CC]/40 hover:bg-white'
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E5E5EA]">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${
                      member.lead ? 'bg-[#0066CC] text-white shadow-sm' : 'bg-blue-50 text-[#0066CC]'
                    }`}
                  >
                    {member.lead ? <Award className="w-5 h-5" /> : <User className="w-5 h-5 text-[#0066CC]" />}
                  </div>
                  <span className="text-xs font-mono font-bold text-[#6E6E73] uppercase tracking-wider">
                    {member.lead ? 'Project Lead' : `Team 0${idx}`}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#1D1D1F]">
                  {member.name}
                </h3>
                <div className="text-xs sm:text-sm font-semibold text-[#0066CC] mt-1">
                  {member.role}
                </div>
                <p className="mt-2.5 text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                  {member.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 4-Week Timeline Card */}
        <div className="p-6 sm:p-7 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E5E5EA]">
            <div className="flex items-center gap-2.5">
              <Calendar className="w-5 h-5 text-[#0066CC]" />
              <span className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#1D1D1F]">
                Four-Week Phased Execution Roadmap
              </span>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-50 text-[#0066CC] border border-blue-200 font-bold">
              4 Calendar Weeks Target
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {timelineWeeks.map((w, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-[#E5E5EA] shadow-sm flex flex-col justify-between hover:border-[#0066CC]/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-base sm:text-lg font-extrabold text-[#0066CC]">
                      {w.week}
                    </span>
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 text-[#4B5563]">
                      {w.phase}
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-[#1D1D1F] leading-snug">
                    {w.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                    {w.tasks}
                  </p>
                </div>

                <div className="mt-4 pt-2.5 border-t border-[#F0F0F2] flex items-center gap-1.5 text-xs text-[#0066CC] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#0066CC]" />
                  <span>Phase Milestone</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Schedule Qualification Banner (Clean, no internal note) */}
      <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 flex items-center gap-3 text-xs sm:text-sm text-amber-950 leading-relaxed">
        <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0" />
        <p>
          <strong>Schedule Qualification:</strong> Target schedule is subject to primary source availability and archival document accessibility.
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
