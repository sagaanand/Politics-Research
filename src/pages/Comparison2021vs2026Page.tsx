import React, { useState, useMemo } from 'react';
import {
  comparisonOverviewMeta,
  turnoutComparisonData,
  candidateComparisonData,
  parentBoothComparisons,
  provisionalBoothRecords,
  ParentBoothComparison,
  ProvisionalBoothRecord
} from '../data/comparisonData';
import {
  Search,
  Download,
  ArrowUpDown,
  Printer,
  ArrowLeft,
  X,
  CheckCircle2,
  TrendingUp,
  GitCompare,
  Info
} from 'lucide-react';

interface Comparison2021vs2026PageProps {
  onBackToProposal?: () => void;
  onGoToOverview?: () => void;
}

export const Comparison2021vs2026Page: React.FC<Comparison2021vs2026PageProps> = ({
  onBackToProposal,
  onGoToOverview
}) => {
  const [activeTab, setActiveTab] = useState<'parent' | 'raw308'>('parent');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [activeSection, setActiveSection] = useState<string>('glance');
  const [selectedParentBooth, setSelectedParentBooth] = useState<ParentBoothComparison | null>(null);
  const [selectedRawBooth, setSelectedRawBooth] = useState<ProvisionalBoothRecord | null>(null);

  // Sorting for parent booths
  const [sortBy, setSortBy] = useState<'boothNo' | 'aiadmkShift' | 'dmkShift' | 'leadMargin2026' | 'margin2021'>('boothNo');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  // Filtered parent booths
  const filteredParentBooths = useMemo(() => {
    return parentBoothComparisons.filter(b => {
      const matchesSearch =
        searchTerm === '' ||
        b.boothNo.toString().includes(searchTerm) ||
        b.stationName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.status.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === 'all' ||
        (statusFilter === 'flipped-aiadmk' && b.status.includes('Flipped to AIADMK')) ||
        (statusFilter === 'retained-aiadmk' && b.status.includes('AIADMK Retained')) ||
        (statusFilter === 'dmk-won' && (b.status.includes('DMK Retained') || b.status.includes('Flipped to DMK'))) ||
        (statusFilter === 'tvk-gain' && b.status.includes('TVK Gain')) ||
        (statusFilter === 'new-booths' && b.status.includes('New 2026 Booth'));

      return matchesSearch && matchesStatus;
    }).sort((a, b) => {
      let aVal = a[sortBy];
      let bVal = b[sortBy];
      if (aVal === null || aVal === undefined) aVal = -999999;
      if (bVal === null || bVal === undefined) bVal = -999999;
      if (aVal < bVal) return sortOrder === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }, [searchTerm, statusFilter, sortBy, sortOrder]);

  // Filtered raw 308 booths
  const filteredRawBooths = useMemo(() => {
    return provisionalBoothRecords.filter(b => {
      return (
        searchTerm === '' ||
        b.booth2021.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (b.booth2026 && b.booth2026.toString().includes(searchTerm)) ||
        b.stationName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  }, [searchTerm]);

  const handleExportCSV = () => {
    const headers = [
      'Booth No (2026)',
      'Polling Station Name',
      '2021 Sub-Booths Mapped',
      '2021 Winner',
      '2021 AIADMK Votes',
      '2021 DMK Votes',
      '2021 NTK Votes',
      '2021 Polled Votes',
      '2026 Winner',
      '2026 AIADMK Votes',
      '2026 TVK Votes',
      '2026 DMK Votes',
      '2026 NTK Votes',
      '2026 Polled Votes',
      '2026 Win Margin',
      'AIADMK Vote Shift',
      'DMK Vote Shift',
      'Status / Outcome'
    ];

    const rows = parentBoothComparisons.map(b => [
      b.boothNo,
      `"${b.stationName.replace(/"/g, '""')}"`,
      `"${b.subBooths2021.join(', ')}"`,
      b.winner2021,
      b.aiadmk2021 !== null ? b.aiadmk2021 : 'N/A',
      b.dmk2021 !== null ? b.dmk2021 : 'N/A',
      b.ntk2021 !== null ? b.ntk2021 : 'N/A',
      b.polled2021 !== null ? b.polled2021 : 'N/A',
      `"${b.winner2026}"`,
      b.aiadmk2026,
      b.tvk2026,
      b.dmk2026,
      b.ntk2026,
      b.polled2026,
      b.leadMargin2026,
      b.aiadmkShift !== null ? b.aiadmkShift : 'N/A',
      b.dmkShift !== null ? b.dmkShift : 'N/A',
      `"${b.status}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'Viralimalai_2021_vs_2026_Comparative_Polling_Data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleSort = (field: 'boothNo' | 'aiadmkShift' | 'dmkShift' | 'leadMargin2026' | 'margin2021') => {
    if (sortBy === field) {
      setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('desc');
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBFD] text-[#1D1D1F] flex flex-col font-sans print:bg-white print:text-black">
      {/* Top Header Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E5E5EA] shadow-sm no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              {onGoToOverview && (
                <button
                  type="button"
                  onClick={onGoToOverview}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#0066CC] hover:bg-blue-50 border border-blue-200 transition-all"
                  title="Return to 2026 Electoral Overview Page"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">2026 Overview</span>
                </button>
              )}
              {onBackToProposal && (
                <button
                  type="button"
                  onClick={onBackToProposal}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#6E6E73] hover:bg-[#F5F5F7] border border-[#E5E5EA] transition-all"
                  title="View Proposal Presentation Deck"
                >
                  <span>Proposal Deck</span>
                </button>
              )}
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="font-extrabold text-base sm:text-lg text-[#1D1D1F] tracking-tight">
                    179 Viralimalai
                  </h1>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#0066CC] border border-blue-200">
                    2021 vs 2026 Comparison
                  </span>
                </div>
                <div className="text-[11px] text-[#6E6E73] truncate hidden sm:block">
                  Comparative Polling Station Analysis & Electoral Shift Modeling
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleExportCSV}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#E5E5EA] hover:border-[#1D1D1F] text-xs font-bold text-[#1D1D1F] shadow-sm transition-all"
              >
                <Download className="w-3.5 h-3.5 text-[#0066CC]" />
                <span className="hidden md:inline">Export Comparison CSV</span>
              </button>
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#E5E5EA] hover:border-[#1D1D1F] text-xs font-bold text-[#1D1D1F] shadow-sm transition-all"
              >
                <Printer className="w-3.5 h-3.5 text-[#0066CC]" />
                <span className="hidden md:inline">Print / PDF</span>
              </button>
            </div>
          </div>

          {/* Table of Contents Navigation Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none text-xs font-bold">
            <button
              type="button"
              onClick={() => scrollTo('section-glance')}
              className={`px-3 py-1 rounded-lg transition-all shrink-0 ${
                activeSection === 'glance' ? 'bg-[#1D1D1F] text-white' : 'text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7]'
              }`}
            >
              1. Comparative Glance
            </button>
            <button
              type="button"
              onClick={() => scrollTo('section-turnout')}
              className={`px-3 py-1 rounded-lg transition-all shrink-0 ${
                activeSection === 'turnout' ? 'bg-[#1D1D1F] text-white' : 'text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7]'
              }`}
            >
              2. Turnout Shifts
            </button>
            <button
              type="button"
              onClick={() => scrollTo('section-parties')}
              className={`px-3 py-1 rounded-lg transition-all shrink-0 ${
                activeSection === 'parties' ? 'bg-[#1D1D1F] text-white' : 'text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7]'
              }`}
            >
              3. Vote Share Dynamics
            </button>
            <button
              type="button"
              onClick={() => scrollTo('section-tripling')}
              className={`px-3 py-1 rounded-lg transition-all shrink-0 ${
                activeSection === 'tripling' ? 'bg-[#1D1D1F] text-white' : 'text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7]'
              }`}
            >
              4. Margin Tripling Factor
            </button>
            <button
              type="button"
              onClick={() => scrollTo('section-flips')}
              className={`px-3 py-1 rounded-lg transition-all shrink-0 ${
                activeSection === 'flips' ? 'bg-[#1D1D1F] text-white' : 'text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7]'
              }`}
            >
              5. Booth Flips & Retentions
            </button>
            <button
              type="button"
              onClick={() => scrollTo('section-covid')}
              className={`px-3 py-1 rounded-lg transition-all shrink-0 ${
                activeSection === 'covid' ? 'bg-[#1D1D1F] text-white' : 'text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7]'
              }`}
            >
              6. COVID Aux Booth Notes
            </button>
            <button
              type="button"
              onClick={() => scrollTo('section-explorer')}
              className={`px-3 py-1 rounded-lg transition-all shrink-0 flex items-center gap-1.5 ${
                activeSection === 'explorer' ? 'bg-[#0066CC] text-white' : 'bg-blue-50 text-[#0066CC]'
              }`}
            >
              <GitCompare className="w-3.5 h-3.5" />
              <span>Comparative Station Explorer</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-12">
        {/* Document Header Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#E5E5EA]">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-[#0066CC] mb-3">
                Longitudinal Election Study · 2021 vs 2026
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F]">
                Viralimalai: 2021 vs 2026 Comparative Analysis
              </h2>
              <p className="text-lg sm:text-xl text-[#4B5563] mt-2">
                Examining the Impact of Higher Turnout (+5.84%), Opposition Vote Division, and Station-by-Station Concordance
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-[#86868B] font-mono">
                <span>Form 20 Certified Data</span>
                <span>•</span>
                <span>308 Booths (2021) vs 276 Booths (2026)</span>
                <span>•</span>
                <span>Includes Postal Ballots & Turnout Shifts</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA] text-right shrink-0">
              <span className="text-xs uppercase font-bold text-[#86868B]">Win Margin Comparison</span>
              <div className="text-xl sm:text-2xl font-extrabold font-mono text-[#0066CC] mt-1">
                +{comparisonOverviewMeta.year2021.winMargin.toLocaleString('en-IN')} <span className="text-xs font-normal text-[#6E6E73]">(2021)</span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-700 mt-0.5">
                +{comparisonOverviewMeta.year2026.winMargin.toLocaleString('en-IN')} <span className="text-xs font-normal text-emerald-700/80">(2026)</span>
              </div>
              <div className="mt-2 text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 inline-block">
                +{comparisonOverviewMeta.netShifts.marginExpansion.toLocaleString('en-IN')} Votes (+{comparisonOverviewMeta.netShifts.marginExpansionPct}% Margin Expansion)
              </div>
            </div>
          </div>

          {/* Strategic Synthesis Callout */}
          <div className="mt-6 p-5 rounded-2xl bg-blue-50/70 border border-blue-200 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#0066CC] shrink-0 mt-0.5" />
            <p className="text-sm text-[#1D1D1F] leading-relaxed">
              <strong>Core Comparative Finding:</strong> C. Vijayabaskar (AIADMK) successfully defended his absolute majority (<strong>52.93% in 2021 → 51.87% in 2026</strong>), while total votes cast grew by <strong>13,129</strong> due to turnout surging from <strong>84.76% to 90.60%</strong>. The entry of TVK (P. Murugesan with <strong>43,700 votes / 21.43%</strong>) fragmented the anti-incumbency vote pool, causing DMK’s share to collapse from <strong>40.70% (77,536 votes) to 19.81% (40,397 votes)</strong> and allowing AIADMK’s victory margin to nearly triple from <strong>23,281 to 62,073 votes</strong>.
            </p>
          </div>
        </div>

        {/* SECTION 1: COMPARATIVE GLANCE */}
        <section id="section-glance" className="space-y-4 scroll-mt-24">
          <div className="border-b border-[#E5E5EA] pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0066CC]">Section 1</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight">
              Constituency Metrics Comparison: 2021 vs 2026
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Card 1: Turnout */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold text-[#86868B] tracking-wider">
                  Voter Turnout Rate
                </span>
                <div className="mt-3 flex items-baseline justify-between">
                  <div>
                    <div className="text-xs text-[#86868B] font-semibold">2021</div>
                    <div className="text-2xl font-extrabold font-mono text-[#1D1D1F]">84.76%</div>
                  </div>
                  <div className="text-base text-[#86868B]">→</div>
                  <div className="text-right">
                    <div className="text-xs text-emerald-700 font-bold">2026</div>
                    <div className="text-3xl font-extrabold font-mono text-emerald-700">90.60%</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#F0F0F2] flex items-center justify-between text-xs text-emerald-700 font-bold">
                <span className="flex items-center gap-1"><TrendingUp className="w-3.5 h-3.5" /> Turnout Gain:</span>
                <span>+5.84 percentage points</span>
              </div>
            </div>

            {/* Card 2: Total Polled Votes */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold text-[#86868B] tracking-wider">
                  Total Votes Polled
                </span>
                <div className="mt-3 flex items-baseline justify-between">
                  <div>
                    <div className="text-xs text-[#86868B] font-semibold">2021</div>
                    <div className="text-2xl font-extrabold font-mono text-[#1D1D1F]">1,90,870</div>
                  </div>
                  <div className="text-base text-[#86868B]">→</div>
                  <div className="text-right">
                    <div className="text-xs text-[#0066CC] font-bold">2026</div>
                    <div className="text-3xl font-extrabold font-mono text-[#0066CC]">2,03,999</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#F0F0F2] flex items-center justify-between text-xs text-[#0066CC] font-bold">
                <span className="flex items-center gap-1"><TrendingUp className="w-3.5 h-3.5" /> Polled Vote Growth:</span>
                <span>+13,129 votes (+6.88%)</span>
              </div>
            </div>

            {/* Card 3: AIADMK Win Margin */}
            <div className="p-6 rounded-3xl bg-blue-50/70 border border-blue-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold text-[#0066CC] tracking-wider">
                  AIADMK Winning Margin
                </span>
                <div className="mt-3 flex items-baseline justify-between">
                  <div>
                    <div className="text-xs text-[#0066CC] font-semibold">2021</div>
                    <div className="text-2xl font-extrabold font-mono text-[#0066CC]">23,281</div>
                  </div>
                  <div className="text-base text-[#0066CC]">→</div>
                  <div className="text-right">
                    <div className="text-xs text-emerald-700 font-bold">2026</div>
                    <div className="text-3xl font-extrabold font-mono text-emerald-700">62,073</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-blue-200/60 flex items-center justify-between text-xs text-emerald-800 font-bold">
                <span>Margin Growth:</span>
                <span>+38,792 votes (+166.6%)</span>
              </div>
            </div>

            {/* Card 4: Booths Won */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold text-[#86868B] tracking-wider">
                  AIADMK Booth Dominance
                </span>
                <div className="mt-3 flex items-baseline justify-between">
                  <div>
                    <div className="text-xs text-[#86868B] font-semibold">2021</div>
                    <div className="text-2xl font-extrabold font-mono text-[#1D1D1F]">202 <span className="text-xs font-normal">/ 253</span></div>
                  </div>
                  <div className="text-base text-[#86868B]">→</div>
                  <div className="text-right">
                    <div className="text-xs text-[#0066CC] font-bold">2026</div>
                    <div className="text-3xl font-extrabold font-mono text-[#0066CC]">259 <span className="text-xs font-normal">/ 276</span></div>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#F0F0F2] flex items-center justify-between text-xs text-[#0066CC] font-bold">
                <span>Dominance Share:</span>
                <span>79.8% → 93.8% (+14.0%)</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: TURNOUT & ELECTOR COMPARISON TABLE */}
        <section id="section-turnout" className="space-y-6 scroll-mt-24">
          <div className="border-b border-[#E5E5EA] pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0066CC]">Section 2</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight">
              Constituency Elector & Turnout Ledger
            </h3>
            <p className="text-sm text-[#6E6E73] mt-0.5">
              Form 20 gazetted return totals for 2021 compared with 2026 final validated counting records.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm space-y-4">
            <div className="overflow-x-auto rounded-2xl border border-[#E5E5EA]">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#FBFBFD] border-b border-[#E5E5EA] text-[#6E6E73] font-bold uppercase text-xs tracking-wider">
                  <tr>
                    <th className="py-3 px-4">Metric</th>
                    <th className="py-3 px-4 text-right font-mono">2021 Total</th>
                    <th className="py-3 px-4 text-right font-mono">2026 Total</th>
                    <th className="py-3 px-4 text-right font-mono">Net Change</th>
                    <th className="py-3 px-4">Reconciliation & Analytical Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E5EA]">
                  {turnoutComparisonData.map((row, idx) => {
                    const isTurnout = row.metric.toLowerCase().includes('turnout');
                    const isNegative = typeof row.change === 'number' ? row.change < 0 : String(row.change).startsWith('-');
                    return (
                      <tr key={idx} className="hover:bg-blue-50/20">
                        <td className="py-3.5 px-4 font-bold text-[#1D1D1F]">{row.metric}</td>
                        <td className="py-3.5 px-4 text-right font-mono font-semibold text-[#6E6E73]">
                          {isTurnout ? `${(Number(row.val2021) * 100).toFixed(2)}%` : Number(row.val2021).toLocaleString('en-IN')}
                        </td>
                        <td className="py-3.5 px-4 text-right font-mono font-bold text-[#1D1D1F]">
                          {isTurnout ? `${(Number(row.val2026) * 100).toFixed(2)}%` : Number(row.val2026).toLocaleString('en-IN')}
                        </td>
                        <td className={`py-3.5 px-4 text-right font-mono font-bold ${
                          isNegative ? 'text-rose-700' : 'text-emerald-700'
                        }`}>
                          {isTurnout
                            ? `+${(Number(row.change) * 100).toFixed(2)}%`
                            : (Number(row.change) > 0 ? `+${Number(row.change).toLocaleString('en-IN')}` : Number(row.change).toLocaleString('en-IN'))}
                        </td>
                        <td className="py-3.5 px-4 text-xs text-[#6E6E73]">{row.notes}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION 3: PARTY VOTE SHIFTS & THE TVK FACTOR */}
        <section id="section-parties" className="space-y-6 scroll-mt-24">
          <div className="border-b border-[#E5E5EA] pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0066CC]">Section 3</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight">
              Party Vote Shifts & The TVK Factor
            </h3>
            <p className="text-sm text-[#6E6E73] mt-0.5">
              Tracking candidate-wise performance from 2021 bi-polar contest to 2026 tri-cornered field.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm space-y-6">
            {/* Visual Vote Share Comparisons: 2021 vs 2026 */}
            <div className="space-y-6">
              {/* 2021 Bar */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-extrabold text-sm text-[#1D1D1F]">2021 Election Vote Share (Bi-Polar Contest)</span>
                  <span className="font-mono text-[#6E6E73]">Valid Votes: 1,90,486</span>
                </div>
                <div className="h-7 w-full rounded-full bg-slate-100 flex overflow-hidden shadow-inner">
                  <div style={{ width: '52.93%' }} className="bg-[#0066CC] h-full flex items-center justify-center text-[10px] text-white font-bold" title="AIADMK: 52.93%">
                    AIADMK: 52.9%
                  </div>
                  <div style={{ width: '40.70%' }} className="bg-rose-600 h-full flex items-center justify-center text-[10px] text-white font-bold" title="DMK: 40.70%">
                    DMK: 40.7%
                  </div>
                  <div style={{ width: '3.64%' }} className="bg-emerald-600 h-full" title="NTK: 3.64%" />
                  <div style={{ width: '2.73%' }} className="bg-slate-300 h-full" title="Others/NOTA: 2.73%" />
                </div>
              </div>

              {/* 2026 Bar */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-extrabold text-sm text-[#1D1D1F]">2026 Election Vote Share (Tri-Cornered Field)</span>
                  <span className="font-mono text-[#0066CC] font-bold">Valid Votes: 2,03,921</span>
                </div>
                <div className="h-7 w-full rounded-full bg-slate-100 flex overflow-hidden shadow-inner">
                  <div style={{ width: '51.87%' }} className="bg-[#0066CC] h-full flex items-center justify-center text-[10px] text-white font-bold" title="AIADMK: 51.87%">
                    AIADMK: 51.9%
                  </div>
                  <div style={{ width: '21.43%' }} className="bg-amber-500 h-full flex items-center justify-center text-[10px] text-white font-bold" title="TVK: 21.43%">
                    TVK: 21.4%
                  </div>
                  <div style={{ width: '19.81%' }} className="bg-rose-500 h-full flex items-center justify-center text-[10px] text-white font-bold" title="DMK: 19.81%">
                    DMK: 19.8%
                  </div>
                  <div style={{ width: '4.64%' }} className="bg-emerald-500 h-full" title="NTK: 4.64%" />
                  <div style={{ width: '2.25%' }} className="bg-slate-300 h-full" title="Others/NOTA: 2.25%" />
                </div>
              </div>
            </div>

            {/* Candidate Breakdown Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200">
                <span className="text-xs font-bold uppercase text-[#0066CC]">AIADMK</span>
                <div className="text-xl font-extrabold text-[#1D1D1F] mt-1">C. Vijayabaskar</div>
                <div className="mt-3 space-y-1 text-xs">
                  <div className="flex justify-between"><span>2021:</span> <strong className="font-mono">1,00,817 (52.93%)</strong></div>
                  <div className="flex justify-between"><span>2026:</span> <strong className="font-mono">1,05,773 (51.87%)</strong></div>
                  <div className="flex justify-between border-t border-blue-200/60 pt-1 text-emerald-700 font-bold">
                    <span>Vote Gain:</span> <span>+4,956 votes</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200">
                <span className="text-xs font-bold uppercase text-rose-700">DMK</span>
                <div className="text-xl font-extrabold text-[#1D1D1F] mt-1">Palaniappan → Chellapandiyan</div>
                <div className="mt-3 space-y-1 text-xs">
                  <div className="flex justify-between"><span>2021:</span> <strong className="font-mono">77,536 (40.70%)</strong></div>
                  <div className="flex justify-between"><span>2026:</span> <strong className="font-mono">40,397 (19.81%)</strong></div>
                  <div className="flex justify-between border-t border-rose-200/60 pt-1 text-rose-700 font-bold">
                    <span>Vote Loss:</span> <span>-37,139 votes</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
                <span className="text-xs font-bold uppercase text-amber-800">TVK (New Entrant)</span>
                <div className="text-xl font-extrabold text-[#1D1D1F] mt-1">P. Murugesan</div>
                <div className="mt-3 space-y-1 text-xs">
                  <div className="flex justify-between"><span>2021:</span> <strong className="font-mono">Did Not Contest</strong></div>
                  <div className="flex justify-between"><span>2026:</span> <strong className="font-mono">43,700 (21.43%)</strong></div>
                  <div className="flex justify-between border-t border-amber-200/60 pt-1 text-amber-900 font-bold">
                    <span>Status:</span> <span>Runner-Up Spot (+3,303 vs DMK)</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                <span className="text-xs font-bold uppercase text-emerald-800">NTK</span>
                <div className="text-xl font-extrabold text-[#1D1D1F] mt-1">Azhagu Meena → Sathyalakshmi</div>
                <div className="mt-3 space-y-1 text-xs">
                  <div className="flex justify-between"><span>2021:</span> <strong className="font-mono">6,942 (3.64%)</strong></div>
                  <div className="flex justify-between"><span>2026:</span> <strong className="font-mono">9,467 (4.64%)</strong></div>
                  <div className="flex justify-between border-t border-emerald-200/60 pt-1 text-emerald-800 font-bold">
                    <span>Growth:</span> <span>+2,525 votes (+36.4%)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Candidate Comparison Ledger */}
            <div className="pt-2">
              <h4 className="text-sm font-extrabold text-[#1D1D1F] mb-3">
                Official ECI Form 20 Candidate Ledger (2021 vs 2026)
              </h4>
              <div className="overflow-x-auto rounded-2xl border border-[#E5E5EA]">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[#FBFBFD] border-b border-[#E5E5EA] text-[#6E6E73] font-bold uppercase text-xs tracking-wider">
                    <tr>
                      <th className="py-3 px-4">Cycle</th>
                      <th className="py-3 px-4">Candidate & Party Affiliation</th>
                      <th className="py-3 px-4 text-right font-mono">Total Valid Votes</th>
                      <th className="py-3 px-4 text-right font-mono">Vote Share %</th>
                      <th className="py-3 px-4">ECI Comparative Context</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5E5EA]">
                    {candidateComparisonData.map((cand, idx) => (
                      <tr key={idx} className="hover:bg-blue-50/20">
                        <td className="py-3 px-4 font-mono font-bold">
                          <span className={`px-2 py-0.5 rounded text-xs ${cand.year === 2026 ? 'bg-blue-100 text-[#0066CC] font-bold' : 'bg-slate-100 text-slate-700'}`}>
                            {cand.year}
                          </span>
                        </td>
                        <td className="py-3 px-4 font-bold text-[#1D1D1F]">{cand.candidateParty}</td>
                        <td className="py-3 px-4 text-right font-mono font-bold text-[#1D1D1F]">
                          {cand.votes.toLocaleString('en-IN')}
                        </td>
                        <td className="py-3 px-4 text-right font-mono font-bold text-[#0066CC]">
                          {cand.sharePct.toFixed(2)}%
                        </td>
                        <td className="py-3 px-4 text-xs text-[#6E6E73]">{cand.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: THE MARGIN TRIPLING MECHANICS */}
        <section id="section-tripling" className="space-y-6 scroll-mt-24">
          <div className="border-b border-[#E5E5EA] pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0066CC]">Section 4</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight">
              Why the Winning Margin Nearly Tripled (+166.6%)
            </h3>
            <p className="text-sm text-[#6E6E73] mt-0.5">
              The mathematical mechanics of opposition fragmentation under First-Past-The-Post (FPTP).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-7 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm space-y-4">
              <span className="text-xs font-bold uppercase text-[#86868B]">2021 Bi-Polar Equilibrium</span>
              <div className="text-3xl font-extrabold font-mono text-[#1D1D1F]">
                +23,281 Margin
              </div>
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                In 2021, the non-AIADMK votes consolidated heavily behind DMK’s Palaniappan (40.70%), while minor parties and independents collectively accounted for just ~6.37%. AIADMK’s win margin was a respectable <strong>12.23 percentage points</strong> (1,00,817 vs 77,536).
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm space-y-4">
              <span className="text-xs font-bold uppercase text-emerald-700">2026 Tri-Cornered Split</span>
              <div className="text-3xl font-extrabold font-mono text-emerald-700">
                +62,073 Margin
              </div>
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                In 2026, Vijayabaskar held his core vote bank virtually intact (gaining +4,956 votes and finishing with 51.87%). Meanwhile, the opposition pool (41.24%) divided between TVK (21.43%) and DMK (19.81%). Because the runner-up bar plummeted to 43,700, the net victory margin surged to <strong>62,073 votes</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: BOOTH FLIPS & RETENTIONS (1 TO 253 PARENT CONCORDANCE) */}
        <section id="section-flips" className="space-y-6 scroll-mt-24">
          <div className="border-b border-[#E5E5EA] pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0066CC]">Section 5</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight">
              Polling Station Concordance: Retentions & Flips
            </h3>
            <p className="text-sm text-[#6E6E73] mt-0.5">
              Aggregated across the 253 parent polling stations that existed in both 2021 and 2026.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200">
              <span className="text-xs font-bold uppercase text-emerald-800">Flipped to AIADMK</span>
              <div className="text-3xl font-extrabold font-mono text-emerald-700 mt-2">
                47 <span className="text-sm font-normal">Booths</span>
              </div>
              <div className="text-xs text-[#6E6E73] mt-1">
                Won by DMK in 2021, captured by AIADMK in 2026
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200">
              <span className="text-xs font-bold uppercase text-[#0066CC]">AIADMK Retained</span>
              <div className="text-3xl font-extrabold font-mono text-[#0066CC] mt-2">
                190 <span className="text-sm font-normal">Booths</span>
              </div>
              <div className="text-xs text-[#6E6E73] mt-1">
                Won by AIADMK in both 2021 and 2026
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200">
              <span className="text-xs font-bold uppercase text-amber-900">TVK Captured</span>
              <div className="text-3xl font-extrabold font-mono text-amber-900 mt-2">
                6 <span className="text-sm font-normal">Booths</span>
              </div>
              <div className="text-xs text-[#6E6E73] mt-1">
                Mathur (4), Kumaramangalam (1), Vadugapatti (1)
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-rose-50/70 border border-rose-200">
              <span className="text-xs font-bold uppercase text-rose-800">DMK Retained / Won</span>
              <div className="text-3xl font-extrabold font-mono text-rose-800 mt-2">
                10 <span className="text-sm font-normal">Booths</span>
              </div>
              <div className="text-xs text-[#6E6E73] mt-1">
                Retained fortress in Mukkannamalaipatti
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: COVID-19 AUXILIARY BOOTHS EXPLANATION */}
        <section id="section-covid" className="space-y-6 scroll-mt-24">
          <div className="border-b border-[#E5E5EA] pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0066CC]">Section 6</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight">
              Data Quality Note: COVID-19 Auxiliary Polling Stations
            </h3>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm space-y-4">
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 flex items-start gap-3">
              <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-amber-950 leading-relaxed space-y-2">
                <p>
                  <strong>Why does the 2021 Form 20 have 308 booths, while 2026 has 276 booths?</strong>
                </p>
                <p>
                  During the April 2021 Tamil Nadu Legislative Assembly elections, the Election Commission of India implemented COVID-19 social-distancing protocols, mandating that any polling station with over 1,000 electors be bifurcated into auxiliary booths. In Viralimalai, <strong>55 parent stations were split into auxiliary Male (M) and Female (W) rooms</strong> (e.g., 6(M) and 6A(W), 13(M) and 13A(W)), resulting in <strong>308 individual return rows</strong> across 253 parent locations.
                </p>
                <p>
                  For the 2026 elections, the ECI conducted a comprehensive constituency re-delimitation, creating <strong>276 standardized, standalone polling stations</strong> (Booths 1 to 276).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: INTERACTIVE COMPARATIVE STATION EXPLORER */}
        <section id="section-explorer" className="space-y-6 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5E5EA] pb-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0066CC]">Section 7</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight">
                Station-by-Station Comparative Explorer
              </h3>
              <p className="text-xs sm:text-sm text-[#6E6E73] mt-0.5">
                Explore individual station vote totals, party shifts, and status classifications.
              </p>
            </div>

            {/* Toggle view: Aggregated Parent Booths vs Raw 308 Form 20 Records */}
            <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl text-xs font-bold self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setActiveTab('parent')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'parent' ? 'bg-white shadow text-[#1D1D1F]' : 'text-[#6E6E73]'
                }`}
              >
                Parent Concordance (276)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('raw308')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'raw308' ? 'bg-white shadow text-[#1D1D1F]' : 'text-[#6E6E73]'
                }`}
              >
                2021 Raw Form 20 (308)
              </button>
            </div>
          </div>

          {/* Search & Filters */}
          <div className="p-5 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="relative col-span-2">
                <Search className="w-4 h-4 text-[#86868B] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by booth number, school name, village, or status..."
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA] text-xs font-medium focus:border-[#0066CC] outline-none"
                />
              </div>

              {activeTab === 'parent' && (
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA] text-xs font-semibold text-[#1D1D1F] outline-none"
                >
                  <option value="all">All Statuses</option>
                  <option value="flipped-aiadmk">Flipped to AIADMK (47)</option>
                  <option value="retained-aiadmk">AIADMK Retained (190)</option>
                  <option value="dmk-won">DMK Retained / Won (10)</option>
                  <option value="tvk-gain">TVK Gain (6)</option>
                  <option value="new-booths">New 2026 Booths (23)</option>
                </select>
              )}
            </div>

            <div className="flex items-center justify-between text-xs text-[#6E6E73] pt-2 border-t border-[#F0F0F2]">
              <span>
                Showing <strong>{activeTab === 'parent' ? filteredParentBooths.length : filteredRawBooths.length}</strong> stations
              </span>
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="text-[#0066CC] font-bold hover:underline"
                >
                  Clear search
                </button>
              )}
            </div>
          </div>

          {/* VIEW A: PARENT CONCORDANCE TABLE (276 BOOTHS) */}
          {activeTab === 'parent' && (
            <div className="bg-white rounded-3xl border border-[#E5E5EA] shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#FBFBFD] border-b border-[#E5E5EA] text-[#6E6E73] font-bold uppercase text-[10px] tracking-wider">
                    <tr>
                      <th onClick={() => toggleSort('boothNo')} className="py-3 px-4 cursor-pointer hover:text-[#1D1D1F]">
                        <div className="flex items-center gap-1">
                          <span>Booth</span>
                          <ArrowUpDown className="w-3 h-3" />
                        </div>
                      </th>
                      <th className="py-3 px-3">Location & Polling Station</th>
                      <th className="py-3 px-3 text-right">2021 Winner</th>
                      <th className="py-3 px-3 text-right">2026 Winner</th>
                      <th onClick={() => toggleSort('aiadmkShift')} className="py-3 px-3 text-right text-[#0066CC] cursor-pointer hover:text-[#1D1D1F]">
                        <div className="flex items-center justify-end gap-1">
                          <span>AIADMK Shift</span>
                          <ArrowUpDown className="w-3 h-3" />
                        </div>
                      </th>
                      <th onClick={() => toggleSort('dmkShift')} className="py-3 px-3 text-right text-rose-700 cursor-pointer hover:text-[#1D1D1F]">
                        <div className="flex items-center justify-end gap-1">
                          <span>DMK Shift</span>
                          <ArrowUpDown className="w-3 h-3" />
                        </div>
                      </th>
                      <th className="py-3 px-3 text-right text-amber-800">2026 TVK</th>
                      <th onClick={() => toggleSort('leadMargin2026')} className="py-3 px-3 text-right cursor-pointer hover:text-[#1D1D1F]">
                        <div className="flex items-center justify-end gap-1">
                          <span>2026 Margin</span>
                          <ArrowUpDown className="w-3 h-3" />
                        </div>
                      </th>
                      <th className="py-3 px-4 text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5E5EA]">
                    {filteredParentBooths.map((b) => (
                      <tr
                        key={b.boothNo}
                        onClick={() => setSelectedParentBooth(b)}
                        className="hover:bg-blue-50/30 cursor-pointer transition-colors"
                      >
                        <td className="py-3 px-4 font-mono font-bold text-[#1D1D1F]">
                          #{b.boothNo}
                        </td>
                        <td className="py-3 px-3 max-w-xs">
                          <div className="font-semibold text-[#1D1D1F] line-clamp-1">{b.stationName}</div>
                          <div className="text-[10px] text-[#86868B]">
                            {b.subBooths2021.length > 0 ? `2021: ${b.subBooths2021.join(', ')}` : 'New 2026 Booth'}
                          </div>
                        </td>
                        <td className="py-3 px-3 text-right font-mono font-bold">
                          {b.winner2021 !== 'N/A' ? (
                            <span className={b.winner2021 === 'AIADMK' ? 'text-[#0066CC]' : 'text-rose-700'}>
                              {b.winner2021} (+{b.margin2021})
                            </span>
                          ) : (
                            <span className="text-[#86868B] italic">N/A</span>
                          )}
                        </td>
                        <td className="py-3 px-3 text-right font-mono font-bold">
                          <span className={
                            b.winner2026.includes('VIJAYABASKAR') ? 'text-[#0066CC]' :
                            b.winner2026.includes('MURUGESAN') ? 'text-amber-800' :
                            b.winner2026.includes('CHELLAPANDIYAN') ? 'text-rose-700' : 'text-purple-800'
                          }>
                            {b.winner2026.split('.')[0]}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-right font-mono font-bold">
                          {b.aiadmkShift !== null ? (
                            <span className={b.aiadmkShift >= 0 ? 'text-emerald-700' : 'text-rose-700'}>
                              {b.aiadmkShift >= 0 ? `+${b.aiadmkShift}` : b.aiadmkShift}
                            </span>
                          ) : (
                            <span className="text-[#86868B]">—</span>
                          )}
                        </td>
                        <td className="py-3 px-3 text-right font-mono font-bold">
                          {b.dmkShift !== null ? (
                            <span className={b.dmkShift >= 0 ? 'text-emerald-700' : 'text-rose-700'}>
                              {b.dmkShift >= 0 ? `+${b.dmkShift}` : b.dmkShift}
                            </span>
                          ) : (
                            <span className="text-[#86868B]">—</span>
                          )}
                        </td>
                        <td className="py-3 px-3 text-right font-mono font-bold text-amber-800">
                          {b.tvk2026}
                        </td>
                        <td className="py-3 px-3 text-right font-mono font-bold">
                          <span className={b.leadMargin2026 >= 0 ? 'text-emerald-700' : 'text-rose-700'}>
                            {b.leadMargin2026 >= 0 ? `+${b.leadMargin2026}` : b.leadMargin2026}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            b.status.includes('Flipped to AIADMK') ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' :
                            b.status.includes('TVK Gain') ? 'bg-amber-50 text-amber-800 border border-amber-200' :
                            b.status.includes('DMK') ? 'bg-rose-50 text-rose-800 border border-rose-200' :
                            b.status.includes('New') ? 'bg-slate-100 text-[#6E6E73]' :
                            'bg-blue-50 text-[#0066CC] border border-blue-200'
                          }`}>
                            {b.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* VIEW B: RAW 308 FORM 20 BOOTHS TABLE */}
          {activeTab === 'raw308' && (
            <div className="bg-white rounded-3xl border border-[#E5E5EA] shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#FBFBFD] border-b border-[#E5E5EA] text-[#6E6E73] font-bold uppercase text-[10px] tracking-wider">
                    <tr>
                      <th className="py-3 px-4">2021 Booth</th>
                      <th className="py-3 px-3">2026 Booth #</th>
                      <th className="py-3 px-3">Station Name</th>
                      <th className="py-3 px-3 text-right text-[#0066CC]">2021 AIADMK</th>
                      <th className="py-3 px-3 text-right text-rose-700">2021 DMK</th>
                      <th className="py-3 px-3 text-right font-mono">2021 Polled</th>
                      <th className="py-3 px-3 text-right text-[#0066CC]">2026 AIADMK</th>
                      <th className="py-3 px-3 text-right text-amber-800">2026 TVK</th>
                      <th className="py-3 px-3 text-right text-rose-700">2026 DMK</th>
                      <th className="py-3 px-4 text-right">Mapping Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5E5EA]">
                    {filteredRawBooths.map((b) => (
                      <tr
                        key={b.serialNo}
                        onClick={() => setSelectedRawBooth(b)}
                        className="hover:bg-blue-50/30 cursor-pointer transition-colors"
                      >
                        <td className="py-3 px-4 font-mono font-bold text-[#1D1D1F]">
                          Booth {b.booth2021}
                        </td>
                        <td className="py-3 px-3 font-mono font-bold text-[#0066CC]">
                          {b.booth2026 ? `#${b.booth2026}` : '—'}
                        </td>
                        <td className="py-3 px-3 max-w-xs truncate">{b.stationName || 'Station name in 2021 roll'}</td>
                        <td className="py-3 px-3 text-right font-mono font-bold text-[#0066CC]">{b.aiadmk2021}</td>
                        <td className="py-3 px-3 text-right font-mono font-bold text-rose-700">{b.dmk2021}</td>
                        <td className="py-3 px-3 text-right font-mono">{b.polled2021}</td>
                        <td className="py-3 px-3 text-right font-mono font-bold text-[#0066CC]">{b.aiadmk2026 ?? '—'}</td>
                        <td className="py-3 px-3 text-right font-mono font-bold text-amber-800">{b.tvk2026 ?? '—'}</td>
                        <td className="py-3 px-3 text-right font-mono font-bold text-rose-700">{b.dmk2026 ?? '—'}</td>
                        <td className="py-3 px-4 text-right text-[10px] text-[#6E6E73]">{b.mappingStatus}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </section>
      </main>

      {/* Detail Modal for Parent Booth */}
      {selectedParentBooth && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#E5E5EA] space-y-6">
            <div className="flex items-start justify-between pb-4 border-b border-[#E5E5EA]">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm font-extrabold px-3 py-1 rounded-full bg-blue-50 text-[#0066CC] border border-blue-200">
                    Booth #{selectedParentBooth.boothNo}
                  </span>
                  <span className="text-xs font-mono text-[#86868B]">{selectedParentBooth.status}</span>
                </div>
                <h3 className="text-lg font-bold text-[#1D1D1F] mt-2 leading-snug">
                  {selectedParentBooth.stationName}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedParentBooth(null)}
                className="w-8 h-8 rounded-full bg-[#F5F5F7] hover:bg-[#E5E5EA] flex items-center justify-center text-[#6E6E73]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Comparison Cards: 2021 vs 2026 */}
            <div className="grid grid-cols-2 gap-4">
              {/* 2021 Block */}
              <div className="p-4 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA] space-y-2">
                <span className="text-xs font-bold uppercase text-[#86868B]">2021 Return (Form 20)</span>
                {selectedParentBooth.has2021Data ? (
                  <>
                    <div className="text-xs text-[#6E6E73]">Booths: {selectedParentBooth.subBooths2021.join(', ')}</div>
                    <div className="flex justify-between text-xs pt-1">
                      <span>AIADMK:</span> <strong className="font-mono text-[#0066CC]">{selectedParentBooth.aiadmk2021}</strong>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>DMK:</span> <strong className="font-mono text-rose-700">{selectedParentBooth.dmk2021}</strong>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>NTK:</span> <strong className="font-mono text-emerald-700">{selectedParentBooth.ntk2021}</strong>
                    </div>
                    <div className="flex justify-between text-xs border-t border-[#E5E5EA] pt-1">
                      <span>Polled:</span> <strong className="font-mono">{selectedParentBooth.polled2021}</strong>
                    </div>
                    <div className="text-xs font-bold pt-1">
                      Winner: <span className={selectedParentBooth.winner2021 === 'AIADMK' ? 'text-[#0066CC]' : 'text-rose-700'}>{selectedParentBooth.winner2021}</span> (+{selectedParentBooth.margin2021})
                    </div>
                  </>
                ) : (
                  <div className="text-xs text-[#86868B] italic pt-2">Newly created in 2026 re-delimitation</div>
                )}
              </div>

              {/* 2026 Block */}
              <div className="p-4 rounded-2xl bg-blue-50/40 border border-blue-200 space-y-2">
                <span className="text-xs font-bold uppercase text-[#0066CC]">2026 Election Result</span>
                <div className="flex justify-between text-xs pt-1">
                  <span>AIADMK:</span> <strong className="font-mono text-[#0066CC]">{selectedParentBooth.aiadmk2026}</strong>
                </div>
                <div className="flex justify-between text-xs">
                  <span>TVK:</span> <strong className="font-mono text-amber-800">{selectedParentBooth.tvk2026}</strong>
                </div>
                <div className="flex justify-between text-xs">
                  <span>DMK:</span> <strong className="font-mono text-rose-700">{selectedParentBooth.dmk2026}</strong>
                </div>
                <div className="flex justify-between text-xs">
                  <span>NTK:</span> <strong className="font-mono text-emerald-700">{selectedParentBooth.ntk2026}</strong>
                </div>
                <div className="flex justify-between text-xs border-t border-blue-200/60 pt-1">
                  <span>Polled:</span> <strong className="font-mono">{selectedParentBooth.polled2026} ({selectedParentBooth.turnoutPct2026}%)</strong>
                </div>
                <div className="text-xs font-bold pt-1 text-emerald-800">
                  Lead: +{selectedParentBooth.leadMargin2026}
                </div>
              </div>
            </div>

            {/* Shift Metrics */}
            {selectedParentBooth.has2021Data && (
              <div className="p-4 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA] space-y-2 text-xs">
                <span className="font-bold text-[#1D1D1F]">Vote Shift (2026 minus 2021):</span>
                <div className="grid grid-cols-3 gap-2 pt-1 font-mono">
                  <div className="p-2 rounded-xl bg-white border border-[#E5E5EA]">
                    <div className="text-[10px] text-[#6E6E73]">AIADMK Shift</div>
                    <div className={`text-base font-bold ${selectedParentBooth.aiadmkShift! >= 0 ? 'text-emerald-700' : 'text-rose-700'}`}>
                      {selectedParentBooth.aiadmkShift! >= 0 ? `+${selectedParentBooth.aiadmkShift}` : selectedParentBooth.aiadmkShift}
                    </div>
                  </div>
                  <div className="p-2 rounded-xl bg-white border border-[#E5E5EA]">
                    <div className="text-[10px] text-[#6E6E73]">DMK Shift</div>
                    <div className={`text-base font-bold ${selectedParentBooth.dmkShift! >= 0 ? 'text-emerald-700' : 'text-rose-700'}`}>
                      {selectedParentBooth.dmkShift! >= 0 ? `+${selectedParentBooth.dmkShift}` : selectedParentBooth.dmkShift}
                    </div>
                  </div>
                  <div className="p-2 rounded-xl bg-white border border-[#E5E5EA]">
                    <div className="text-[10px] text-[#6E6E73]">TVK Emergence</div>
                    <div className="text-base font-bold text-amber-800">
                      +{selectedParentBooth.tvk2026}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={() => setSelectedParentBooth(null)}
                className="px-5 py-2 rounded-xl bg-[#1D1D1F] text-white text-xs font-bold hover:bg-black transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Detail Modal for Raw 308 Booth */}
      {selectedRawBooth && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#E5E5EA] space-y-5">
            <div className="flex items-start justify-between pb-3 border-b border-[#E5E5EA]">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm font-extrabold px-3 py-1 rounded-full bg-slate-100 text-[#1D1D1F]">
                    2021 Booth {selectedRawBooth.booth2021}
                  </span>
                  {selectedRawBooth.booth2026 && (
                    <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0066CC] font-bold">
                      2026 Booth #{selectedRawBooth.booth2026}
                    </span>
                  )}
                </div>
                <h3 className="text-base font-bold text-[#1D1D1F] mt-2">
                  {selectedRawBooth.stationName || '2021 Form 20 Record'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedRawBooth(null)}
                className="w-8 h-8 rounded-full bg-[#F5F5F7] hover:bg-[#E5E5EA] flex items-center justify-center text-[#6E6E73]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 flex justify-between font-mono">
                <span>AIADMK (2021): <strong>{selectedRawBooth.aiadmk2021}</strong></span>
                <span>AIADMK (2026): <strong>{selectedRawBooth.aiadmk2026 ?? '—'}</strong></span>
              </div>
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 flex justify-between font-mono">
                <span>DMK (2021): <strong>{selectedRawBooth.dmk2021}</strong></span>
                <span>DMK (2026): <strong>{selectedRawBooth.dmk2026 ?? '—'}</strong></span>
              </div>
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 flex justify-between font-mono">
                <span>TVK (2021): <strong>0 (Did not contest)</strong></span>
                <span>TVK (2026): <strong>{selectedRawBooth.tvk2026 ?? '—'}</strong></span>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={() => setSelectedRawBooth(null)}
                className="px-5 py-2 rounded-xl bg-[#1D1D1F] text-white text-xs font-bold hover:bg-black transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-12 py-6 border-t border-[#E5E5EA] bg-white text-xs text-[#86868B] text-center no-print">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>179 Viralimalai Assembly Constituency — 2021 vs 2026 Longitudinal Polling Analysis</span>
          <span>Prepared by Ananda Krishnan · Ctrl Alt Kick Ad Tech Solutions Pvt Ltd</span>
        </div>
      </footer>
    </div>
  );
};
