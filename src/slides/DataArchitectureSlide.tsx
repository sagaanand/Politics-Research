import React from 'react';
import { Database, AlertCircle, Sparkles } from 'lucide-react';

export const DataArchitectureSlide: React.FC = () => {
  const schemaHeaders = [
    { label: 'Year', type: 'Int', note: '2016 · 2021 · 2026' },
    { label: 'Polling Station', type: 'ID / Name', note: 'Booth Number & Name' },
    { label: 'Candidate', type: 'String', note: 'Contestant Name' },
    { label: 'Party', type: 'String', note: 'Recognised Affiliation' },
    { label: 'Votes', type: 'Int', note: 'Station Vote Total' },
    { label: 'Margin', type: 'Int', note: 'Lead / Deficit' },
    { label: 'Turnout', type: '%', note: 'Polled vs Electors' },
    { label: 'Source', type: 'Ref', note: 'Gazette / Form 20 ID' },
    { label: 'Status', type: 'Enum', note: 'Verified / Pending' }
  ];

  return (
    <div className="flex-1 w-full h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0066CC]">
            Data Architecture & Modelling
          </span>
          <span className="text-[#86868B] text-xs">/ Section 05</span>
        </div>
        <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F]">
          One Structured Dataset
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#6E6E73]">
          A harmonised, cross-election schema linking candidate returns, booth geography, and audit lineage.
        </p>
      </div>

      {/* Dominant Visual: Stylised Spreadsheet / Database Mockup (65% of slide) */}
      <div className="my-auto py-4 w-full">
        <div className="p-5 sm:p-7 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] shadow-sm">
          {/* Mockup Window Header */}
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E5E5EA]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
              <span className="ml-2 font-mono text-xs font-bold text-[#1D1D1F] flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-[#0066CC]" /> master_electoral_dataset_viralimalai.xlsx
              </span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-[#0066CC] border border-blue-200 font-semibold">
              Proposed Schema Model
            </span>
          </div>

          {/* Stylised Spreadsheet Architecture */}
          <div className="overflow-x-auto rounded-2xl border border-[#E5E5EA] bg-white">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#F8FAFC] border-b border-[#E5E5EA]">
                <tr>
                  {schemaHeaders.map((col, idx) => (
                    <th key={idx} className="py-3 px-3.5 font-bold text-[#1D1D1F] tracking-tight whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs">{col.label}</span>
                        <span className="text-[9px] font-mono text-[#86868B] px-1 py-0.2 rounded bg-white border border-[#E5E5EA]">
                          {col.type}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1F5F9] font-mono text-[11px] text-[#64748B]">
                {/* Illustrative Row 1 */}
                <tr className="hover:bg-blue-50/20 transition-colors">
                  <td className="py-3 px-3.5 font-semibold text-[#0066CC]">2016</td>
                  <td className="py-3 px-3.5 text-[#1D1D1F]">PS-001 · PUPS South</td>
                  <td className="py-3 px-3.5">[Candidate Alpha]</td>
                  <td className="py-3 px-3.5 text-[#0066CC] font-semibold">[Party A]</td>
                  <td className="py-3 px-3.5 text-[#1D1D1F]">[Votes Polled]</td>
                  <td className="py-3 px-3.5 text-emerald-600 font-semibold">[+Margin]</td>
                  <td className="py-3 px-3.5">[Turnout %]</td>
                  <td className="py-3 px-3.5 text-[10px]">Form20-2016-p01</td>
                  <td className="py-3 px-3.5">
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Verified
                    </span>
                  </td>
                </tr>

                {/* Illustrative Row 2 */}
                <tr className="hover:bg-blue-50/20 transition-colors">
                  <td className="py-3 px-3.5 font-semibold text-[#0066CC]">2021</td>
                  <td className="py-3 px-3.5 text-[#1D1D1F]">PS-002 · PUPS South Wing</td>
                  <td className="py-3 px-3.5">[Candidate Beta]</td>
                  <td className="py-3 px-3.5 text-[#0066CC] font-semibold">[Party B]</td>
                  <td className="py-3 px-3.5 text-[#1D1D1F]">[Votes Polled]</td>
                  <td className="py-3 px-3.5 text-rose-600 font-semibold">[-Margin]</td>
                  <td className="py-3 px-3.5">[Turnout %]</td>
                  <td className="py-3 px-3.5 text-[10px]">Form20-2021-p02</td>
                  <td className="py-3 px-3.5">
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-50 text-[#0066CC] border border-blue-200">
                      Cross-Checked
                    </span>
                  </td>
                </tr>

                {/* Illustrative Row 3 */}
                <tr className="hover:bg-blue-50/20 transition-colors bg-blue-50/10">
                  <td className="py-3 px-3.5 font-semibold text-[#0066CC]">2026</td>
                  <td className="py-3 px-3.5 text-[#6E6E73] italic">PS-[Reconciled ID]</td>
                  <td className="py-3 px-3.5 text-[#94A3B8]">[Candidate Gamma]</td>
                  <td className="py-3 px-3.5 text-[#94A3B8]">[Party C]</td>
                  <td className="py-3 px-3.5 text-[#94A3B8]">[Pending Roll]</td>
                  <td className="py-3 px-3.5 text-[#94A3B8]">[Calculable]</td>
                  <td className="py-3 px-3.5 text-[#94A3B8]">[Calculable]</td>
                  <td className="py-3 px-3.5 text-[10px] text-[#94A3B8]">Gazette-2026-TBD</td>
                  <td className="py-3 px-3.5">
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200">
                      Audit Target
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-[#86868B]">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#0066CC]" /> Includes full audit metadata, formula definitions, and confidence tiers
            </span>
            <span className="font-mono text-[11px] text-[#1D1D1F] font-semibold">Multi-Year Relational Matrix</span>
          </div>
        </div>
      </div>

      {/* Limitation Standard Banner */}
      <div className="p-3.5 rounded-2xl bg-[#F5F5F7] border border-[#E5E5EA] flex items-center gap-2.5 text-xs text-[#6E6E73]">
        <AlertCircle className="w-4 h-4 text-[#0066CC] shrink-0" />
        <p>
          <strong>Illustrative Schema Standard:</strong> Data columns represent planned structural fields. Actual field availability depends on verified official gazettes. No simulated election statistics are used.
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
