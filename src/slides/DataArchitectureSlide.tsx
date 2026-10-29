import React from 'react';
import { Database, AlertCircle } from 'lucide-react';

export const DataArchitectureSlide: React.FC = () => {
  const schemaGroups = [
    {
      category: 'Electoral Geography & Time',
      badge: 'Dimensions',
      fields: [
        { name: 'election_year', type: 'Integer', desc: 'Election cycle (2016, 2021, 2026)' },
        { name: 'constituency_name', type: 'String', desc: 'Viralimalai (AC-179)' },
        { name: 'station_number', type: 'Integer / String', desc: 'Assigned booth number for that election' },
        { name: 'station_name', type: 'String', desc: 'Full official booth name & location description' }
      ]
    },
    {
      category: 'Candidate & Result Metrics',
      badge: 'Measures',
      fields: [
        { name: 'candidate_name', type: 'String', desc: 'Official contestant name' },
        { name: 'party_affiliation', type: 'String', desc: 'Recognised party or Independent' },
        { name: 'candidate_votes', type: 'Integer', desc: 'Station-level EVM / postal vote total' },
        { name: 'total_votes_polled', type: 'Integer', desc: 'Total valid votes polled at station' },
        { name: 'vote_share_pct', type: 'Percentage', desc: 'Computed candidate share of valid votes' },
        { name: 'winning_indicator', type: 'Boolean', desc: 'Lead / 1st position flag at station' },
        { name: 'margin_votes', type: 'Integer', desc: 'Victory or deficit margin where calculable' }
      ]
    },
    {
      category: 'Turnout & Station Indicators',
      badge: 'Statistics',
      fields: [
        { name: 'turnout_percentage', type: 'Percentage', desc: 'Station turnout (where electors registered)' },
        { name: 'nota_votes', type: 'Integer', desc: 'NOTA recorded votes (where documented)' }
      ]
    },
    {
      category: 'Audit, Lineage & Confidence',
      badge: 'Governance',
      fields: [
        { name: 'source_reference', type: 'Citation ID', desc: 'Form 20 gazette, table ID, or page citation' },
        { name: 'verification_status', type: 'Enum', desc: 'Verified / Cross-Checked / Pending' },
        { name: 'mapping_confidence', type: 'Score / Tier', desc: 'High (Matched) / Medium / Unmatched' },
        { name: 'discrepancy_notes', type: 'Text', desc: 'Recorded arithmetic variations or caveats' }
      ]
    }
  ];

  return (
    <div className="flex-1 w-full flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 bg-white">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#0066CC]">
            Data Modelling & Schema
          </span>
          <span className="text-[#86868B] text-xs">/ Section 05</span>
        </div>
        <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1D1D1F]">
          One Structured Dataset Across Three Election Years
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-[#6E6E73]">
          Proposed schema architecture harmonising 2016, 2021, and 2026 into a consistent analytical matrix
        </p>
      </div>

      {/* Schema Columns Grid */}
      <div className="my-auto py-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {schemaGroups.map((group, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#E5E5EA]">
                  <span className="text-xs font-bold text-[#1D1D1F] tracking-tight">
                    {group.category}
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white border border-[#E5E5EA] text-[#6E6E73]">
                    {group.badge}
                  </span>
                </div>

                <div className="space-y-2 mt-2">
                  {group.fields.map((f, fIdx) => (
                    <div
                      key={fIdx}
                      className="p-2 rounded-lg bg-white border border-[#E5E5EA]/80 hover:border-[#0066CC]/30 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <code className="text-[11px] font-mono font-semibold text-[#0066CC]">
                          {f.name}
                        </code>
                        <span className="text-[9px] font-mono text-[#86868B]">{f.type}</span>
                      </div>
                      <p className="mt-1 text-[10px] text-[#6E6E73] leading-tight">
                        {f.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Strict Schema Availability Disclaimer */}
      <div className="p-3.5 rounded-xl bg-[#F5F5F7] border border-[#E5E5EA] flex items-start gap-2.5 text-xs text-[#6E6E73]">
        <AlertCircle className="w-4 h-4 text-[#0066CC] shrink-0 mt-0.5" />
        <p>
          <strong className="text-[#1D1D1F]">Schema Governance Notice:</strong> These represent <em>proposed</em> conceptual schema fields. Actual field availability depends strictly on the official and secondary source records retrieved during execution. No fabricated or simulated statistics are used.
        </p>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-[#E5E5EA] flex items-center justify-between text-xs text-[#86868B]">
        <span>Viralimalai Constituency Electoral Research Proposal</span>
        <span className="flex items-center gap-1.5">
          <Database className="w-3.5 h-3.5 text-[#0066CC]" /> Master Dataset Specification
        </span>
      </div>
    </div>
  );
};
