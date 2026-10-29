import React from 'react';
import { Calendar, AlertTriangle, ArrowRight, CheckCircle2 } from 'lucide-react';

export const TimelineSlide: React.FC = () => {
  const weeks = [
    {
      weekNum: 'Week 1',
      title: 'Source Audit & Collection',
      tag: 'Phase 1',
      progress: '25%',
      points: [
        'Review existing archives & records',
        'Identify official gazettes & Form 20s',
        'Lock master schema specifications',
        'Launch primary document collection'
      ]
    },
    {
      weekNum: 'Week 2',
      title: 'Extraction & Verification',
      tag: 'Phase 2',
      progress: '50%',
      points: [
        'Digitise candidate & booth returns',
        'Execute blind double-entry checks',
        'Reconcile arithmetic variances',
        'Track missing document instances'
      ]
    },
    {
      weekNum: 'Week 3',
      title: 'Mapping & Analysis',
      tag: 'Phase 3',
      progress: '75%',
      points: [
        'Reconcile booth IDs across cycles',
        'Model candidate & party vote shares',
        'Calculate station victory margins',
        'Draft longitudinal trends'
      ]
    },
    {
      weekNum: 'Week 4',
      title: 'Reporting & Handover',
      tag: 'Phase 4',
      progress: '100%',
      points: [
        'Finalise master Excel database',
        'Compile analytical PDF report',
        'Deliver presentation deck & logs',
        'Facilitate 2 client review rounds'
      ]
    }
  ];

  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0066CC]">
            Roadmap & Milestones
          </span>
          <span className="text-[#86868B] text-xs">/ Section 11</span>
        </div>
        <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F]">
          A Four-Week Target Plan
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#6E6E73]">
          A disciplined four-week target execution roadmap balancing speed of collection with rigorous cross-verification.
        </p>
      </div>

      {/* Dominant Full-Width Visual Timeline (65% of slide) */}
      <div className="my-auto py-4 w-full">
        <div className="p-6 sm:p-8 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm">
          {/* Top connecting progress bar */}
          <div className="hidden lg:grid grid-cols-4 gap-4 mb-4">
            {weeks.map((w, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="h-1.5 flex-1 bg-blue-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#0066CC] rounded-full" style={{ width: w.progress }} />
                </div>
                {idx < 3 && <ArrowRight className="w-3.5 h-3.5 text-[#94A3B8]" />}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {weeks.map((w, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-[#E5E5EA] shadow-sm hover:border-[#0066CC]/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#E5E5EA]">
                    <span className="font-mono text-xs font-bold text-[#0066CC] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      {w.weekNum}
                    </span>
                    <span className="text-[10px] font-mono font-semibold text-[#86868B]">
                      {w.tag}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-[#1D1D1F] leading-snug">
                    {w.title}
                  </h3>

                  <ul className="mt-3 space-y-2">
                    {w.points.map((pt, pIdx) => (
                      <li key={pIdx} className="text-[11px] text-[#6E6E73] flex items-start gap-1.5 leading-snug">
                        <CheckCircle2 className="w-3 h-3 text-[#0066CC] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 pt-2.5 border-t border-[#F0F0F2] flex items-center justify-between text-[10px] font-mono text-[#86868B]">
                  <span>Progress Target</span>
                  <span className="font-bold text-[#1D1D1F]">{w.progress}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Qualification Banner */}
      <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 flex items-start gap-2.5 text-xs text-amber-900 leading-relaxed">
        <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <p>
          <strong>Schedule Qualification:</strong> Target schedule subject to source availability and document accessibility. If required physical archives are delayed, timeline impact will be communicated promptly.
        </p>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-[#E5E5EA] flex items-center justify-between text-xs text-[#86868B]">
        <span>Viralimalai Constituency Electoral Research Proposal</span>
        <span className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5 text-[#0066CC]" /> 4 Weeks Target
        </span>
      </div>
    </div>
  );
};
