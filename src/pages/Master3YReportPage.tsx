import React, { useState, useMemo } from 'react';
import {
  masterSummary3Y,
  candidateResults3Y,
  dataNotes3Y,
  booths2016Data,
  Booth2016Record
} from '../data/master3YData';
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
  BarChart3,
  Building
} from 'lucide-react';

interface Master3YReportPageProps {
  onBackToProposal?: () => void;
  onGoToOverview?: () => void;
  onGoToComparison?: () => void;
}

export const Master3YReportPage: React.FC<Master3YReportPageProps> = ({
  onBackToProposal,
  onGoToOverview,
  onGoToComparison
}) => {
  const [activeSection, setActiveSection] = useState<string>('glance');
  const [searchTerm, setSearchTerm] = useState('');
  const [winnerFilter, setWinnerFilter] = useState<'all' | 'AIADMK' | 'DMK' | 'Tied'>('all');
  const [sortBy, setSortBy] = useState<'boothNo' | 'margin' | 'aiadmkVotes' | 'dmkVotes' | 'aiadmkPct'>('boothNo');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [selectedBooth, setSelectedBooth] = useState<Booth2016Record | null>(null);

  // Filtered and sorted 2016 booths
  const filteredBooths = useMemo(() => {
    return booths2016Data.filter(b => {
      const matchesSearch =
        searchTerm === '' ||
        b.boothNo.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesWinner =
        winnerFilter === 'all' || b.winner === winnerFilter;
      return matchesSearch && matchesWinner;
    }).sort((a, b) => {
      let aVal: number;
      let bVal: number;

      if (sortBy === 'boothNo') {
        aVal = parseInt(a.boothNo.replace(/\D/g, ''), 10) || 0;
        bVal = parseInt(b.boothNo.replace(/\D/g, ''), 10) || 0;
      } else {
        aVal = a[sortBy];
        bVal = b[sortBy];
      }

      if (aVal < bVal) return sortOrder === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }, [searchTerm, winnerFilter, sortBy, sortOrder]);

  const toggleSort = (field: 'boothNo' | 'margin' | 'aiadmkVotes' | 'dmkVotes' | 'aiadmkPct') => {
    if (sortBy === field) {
      setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('desc');
    }
  };

  const handleExportCSV = () => {
    const headers = [
      'Serial No',
      '2016 Booth No',
      'AIADMK Votes (C. Vijayabaskar)',
      'AIADMK %',
      'DMK Votes (M. Palaniappan)',
      'DMK %',
      'DMDK Votes (Karthikeyan R)',
      'NTK Votes (Sridhar K)',
      'BSP Votes (Azhaguraja V)',
      'Other Candidates',
      'NOTA',
      'Total Valid Votes',
      'Total Polled Votes',
      'Winner',
      'Winning Margin',
      'Source Page'
    ];

    const rows = booths2016Data.map(b => [
      b.serialNo,
      `"${b.boothNo}"`,
      b.aiadmkVotes,
      b.aiadmkPct,
      b.dmkVotes,
      b.dmkPct,
      b.dmdkVotes,
      b.ntkVotes,
      b.bspVotes,
      b.otherVotes,
      b.notaVotes,
      b.validVotes,
      b.polledVotes,
      `"${b.winner}"`,
      b.margin,
      b.sourcePage
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'Viralimalai_2016_Booth_Master_Form20.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollTo = (id: string) => {
    setActiveSection(id.replace('section-', ''));
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBFD] text-[#1D1D1F] flex flex-col font-sans print:bg-white print:text-black">
      {/* Top Header Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E5E5EA] shadow-sm no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2 sm:gap-3">
              {onBackToProposal && (
                <button
                  type="button"
                  onClick={onBackToProposal}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#6E6E73] hover:bg-[#F5F5F7] border border-[#E5E5EA] transition-all"
                  title="Return to Proposal Presentation Deck"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Proposal Deck</span>
                </button>
              )}
              {onGoToOverview && (
                <button
                  type="button"
                  onClick={onGoToOverview}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#0066CC] hover:bg-blue-50 border border-blue-200 transition-all"
                  title="View 2026 Electoral Overview Page"
                >
                  <BarChart3 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">2026 Overview</span>
                </button>
              )}
              {onGoToComparison && (
                <button
                  type="button"
                  onClick={onGoToComparison}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-purple-700 hover:bg-purple-50 border border-purple-200 transition-all"
                  title="View 2021 vs 2026 Comparison Page"
                >
                  <GitCompare className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">2021 vs 2026</span>
                </button>
              )}

              <div>
                <div className="flex items-center gap-2">
                  <h1 className="font-extrabold text-base sm:text-lg text-[#1D1D1F] tracking-tight">
                    179 Viralimalai
                  </h1>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                    2016 • 2021 • 2026 Master
                  </span>
                </div>
                <div className="text-[11px] text-[#6E6E73] truncate hidden sm:block">
                  Decade-Long Longitudinal Electoral Master Study (3 Election Cycles)
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
                <span className="hidden md:inline">Export Master CSV</span>
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
              1. Decade Glance
            </button>
            <button
              type="button"
              onClick={() => scrollTo('section-master-ledger')}
              className={`px-3 py-1 rounded-lg transition-all shrink-0 ${
                activeSection === 'master-ledger' ? 'bg-[#1D1D1F] text-white' : 'text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7]'
              }`}
            >
              2. 3-Year Master Ledger
            </button>
            <button
              type="button"
              onClick={() => scrollTo('section-trajectories')}
              className={`px-3 py-1 rounded-lg transition-all shrink-0 ${
                activeSection === 'trajectories' ? 'bg-[#1D1D1F] text-white' : 'text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7]'
              }`}
            >
              3. Candidate Trajectories
            </button>
            <button
              type="button"
              onClick={() => scrollTo('section-evolution')}
              className={`px-3 py-1 rounded-lg transition-all shrink-0 ${
                activeSection === 'evolution' ? 'bg-[#1D1D1F] text-white' : 'text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7]'
              }`}
            >
              4. 3-Phase Political Evolution
            </button>
            <button
              type="button"
              onClick={() => scrollTo('section-baseline-2016')}
              className={`px-3 py-1 rounded-lg transition-all shrink-0 ${
                activeSection === 'baseline-2016' ? 'bg-[#1D1D1F] text-white' : 'text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7]'
              }`}
            >
              5. 2016 Station Baseline
            </button>
            <button
              type="button"
              onClick={() => scrollTo('section-explorer-2016')}
              className={`px-3 py-1 rounded-lg transition-all shrink-0 flex items-center gap-1.5 ${
                activeSection === 'explorer-2016' ? 'bg-[#0066CC] text-white' : 'bg-blue-50 text-[#0066CC]'
              }`}
            >
              <Building className="w-3.5 h-3.5" />
              <span>2016 Form 20 Explorer (251 Booths)</span>
            </button>
            <button
              type="button"
              onClick={() => scrollTo('section-methodology')}
              className={`px-3 py-1 rounded-lg transition-all shrink-0 ${
                activeSection === 'methodology' ? 'bg-[#1D1D1F] text-white' : 'text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7]'
              }`}
            >
              7. Official ECI Notes
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        {/* HERO TITLE & SYNTHESIS */}
        <div className="bg-white rounded-3xl border border-[#E5E5EA] p-6 sm:p-10 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#E5E5EA]">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-3">
                Decade Longitudinal Analysis · 2016 • 2021 • 2026
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F]">
                Viralimalai: 10-Year Electoral Master Study
              </h2>
              <p className="text-lg sm:text-xl text-[#4B5563] mt-2">
                Tracing 3 Election Cycles, the Solidification of AIADMK’s Fortress, and the 2026 Opposition Split
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-[#86868B] font-mono">
                <span>ECI Form 20 Reconciled</span>
                <span>•</span>
                <span>2016 (251 Booths)</span>
                <span>•</span>
                <span>2021 (308/253 Booths)</span>
                <span>•</span>
                <span>2026 (276 Booths)</span>
                <span>•</span>
                <span>Total 10Y Votes Growth: +33,391</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA] text-right shrink-0">
              <span className="text-xs uppercase font-bold text-[#86868B]">10-Year Margin Expansion</span>
              <div className="text-lg font-mono font-bold text-slate-600 mt-1">
                2016: <span className="font-extrabold text-[#1D1D1F]">+8,447</span>
              </div>
              <div className="text-xl font-mono font-bold text-[#0066CC] mt-0.5">
                2021: <span className="font-extrabold">+23,281</span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-700 mt-0.5">
                2026: +62,073
              </div>
              <div className="mt-2 text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 inline-block">
                +53,626 Votes (7.35× Multiplier)
              </div>
            </div>
          </div>

          {/* Strategic Executive Takeaway Callout */}
          <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <div className="text-sm text-[#1D1D1F] leading-relaxed space-y-1">
              <p>
                <strong>The 10-Year Master Finding:</strong> Across three consecutive general elections (2016, 2021, and 2026), <strong>C. Vijayabaskar (AIADMK)</strong> has maintained an impregnable electoral base in Viralimalai, growing his personal vote count from <strong>84,701 (49.69%)</strong> in 2016 to <strong>1,00,817 (52.93%)</strong> in 2021, and reaching <strong>1,05,773 (51.87%)</strong> in 2026.
              </p>
              <p className="text-xs text-[#4B5563]">
                Simultaneously, the opposition landscape underwent a structural transformation: the 2016 direct bipolar clash (where DMK polled 44.74% and won 90 booths) consolidated in 2021, and then completely fragmented in 2026 with the entry of <strong>TVK (P. Murugesan)</strong> who garnered 43,700 votes (21.43%), cutting DMK down to 19.81% (10 booths won) and propelling AIADMK’s victory margin to an unprecedented <strong>62,073 votes</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 1: 10-YEAR MACRO PICTURE */}
        <section id="section-glance" className="space-y-4 scroll-mt-24">
          <div className="border-b border-[#E5E5EA] pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0066CC]">Section 1</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight">
              Constituency Metrics Across 3 Elections (2016 • 2021 • 2026)
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Card 1: Turnout Rate */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold text-[#86868B] tracking-wider">
                  Voter Turnout Rate
                </span>
                <div className="mt-3 space-y-1.5 font-mono">
                  <div className="flex justify-between items-center text-xs text-[#6E6E73]">
                    <span>2016:</span> <strong className="text-sm text-[#1D1D1F]">84.27%</strong>
                  </div>
                  <div className="flex justify-between items-center text-xs text-[#6E6E73]">
                    <span>2021:</span> <strong className="text-sm text-[#1D1D1F]">84.76%</strong>
                  </div>
                  <div className="flex justify-between items-center text-xs text-emerald-700 font-bold">
                    <span>2026:</span> <strong className="text-lg text-emerald-700">90.60%</strong>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#F0F0F2] flex items-center justify-between text-xs text-emerald-700 font-bold">
                <span className="flex items-center gap-1"><TrendingUp className="w-3.5 h-3.5" /> 10Y Gain:</span>
                <span>+6.33 percentage pts</span>
              </div>
            </div>

            {/* Card 2: Total Polled Votes */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold text-[#86868B] tracking-wider">
                  Total Votes Polled
                </span>
                <div className="mt-3 space-y-1.5 font-mono">
                  <div className="flex justify-between items-center text-xs text-[#6E6E73]">
                    <span>2016:</span> <strong className="text-sm text-[#1D1D1F]">1,70,608</strong>
                  </div>
                  <div className="flex justify-between items-center text-xs text-[#6E6E73]">
                    <span>2021:</span> <strong className="text-sm text-[#1D1D1F]">1,90,870</strong>
                  </div>
                  <div className="flex justify-between items-center text-xs text-[#0066CC] font-bold">
                    <span>2026:</span> <strong className="text-lg text-[#0066CC]">2,03,999</strong>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#F0F0F2] flex items-center justify-between text-xs text-[#0066CC] font-bold">
                <span>Electorate Participation:</span>
                <span>+33,391 votes</span>
              </div>
            </div>

            {/* Card 3: AIADMK Votes & Share */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold text-[#86868B] tracking-wider">
                  C. Vijayabaskar (AIADMK)
                </span>
                <div className="mt-3 space-y-1.5 font-mono">
                  <div className="flex justify-between items-center text-xs text-[#6E6E73]">
                    <span>2016:</span> <strong className="text-sm text-[#1D1D1F]">84,701 (49.7%)</strong>
                  </div>
                  <div className="flex justify-between items-center text-xs text-[#6E6E73]">
                    <span>2021:</span> <strong className="text-sm text-[#1D1D1F]">1,00,817 (52.9%)</strong>
                  </div>
                  <div className="flex justify-between items-center text-xs text-[#0066CC] font-bold">
                    <span>2026:</span> <strong className="text-lg text-[#0066CC]">1,05,773 (51.9%)</strong>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#F0F0F2] flex items-center justify-between text-xs text-[#0066CC] font-bold">
                <span>Vote Addition:</span>
                <span>+21,072 net votes</span>
              </div>
            </div>

            {/* Card 4: Booths Won */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold text-[#86868B] tracking-wider">
                  AIADMK Booths Won
                </span>
                <div className="mt-3 space-y-1.5 font-mono">
                  <div className="flex justify-between items-center text-xs text-[#6E6E73]">
                    <span>2016:</span> <strong className="text-sm text-[#1D1D1F]">158 / 251 (62.9%)</strong>
                  </div>
                  <div className="flex justify-between items-center text-xs text-[#6E6E73]">
                    <span>2021:</span> <strong className="text-sm text-[#1D1D1F]">202 / 253 (79.8%)</strong>
                  </div>
                  <div className="flex justify-between items-center text-xs text-emerald-700 font-bold">
                    <span>2026:</span> <strong className="text-lg text-emerald-700">259 / 276 (93.8%)</strong>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#F0F0F2] flex items-center justify-between text-xs text-emerald-700 font-bold">
                <span>Booth Expansion:</span>
                <span>+101 booths (+30.9%)</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: 10-YEAR MASTER CONSTITUENCY LEDGER */}
        <section id="section-master-ledger" className="space-y-6 scroll-mt-24">
          <div className="border-b border-[#E5E5EA] pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0066CC]">Section 2</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight">
              Official 3-Year Master Constituency Ledger
            </h3>
            <p className="text-sm text-[#6E6E73] mt-0.5">
              Comprehensive reconciliation of official ECI Form 20 parameters across 2016, 2021, and 2026 elections.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm space-y-4">
            <div className="overflow-x-auto rounded-2xl border border-[#E5E5EA]">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#FBFBFD] border-b border-[#E5E5EA] text-[#6E6E73] font-bold uppercase text-xs tracking-wider">
                  <tr>
                    <th className="py-3 px-4">Constituency Metric</th>
                    <th className="py-3 px-4 text-right font-mono">2016 Cycle</th>
                    <th className="py-3 px-4 text-right font-mono">2021 Cycle</th>
                    <th className="py-3 px-4 text-right font-mono">2026 Cycle</th>
                    <th className="py-3 px-4 text-right font-mono">10Y Net Shift (2016→2026)</th>
                    <th className="py-3 px-4">ECI Source Verification & Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E5EA]">
                  {masterSummary3Y.map((row, idx) => {
                    const isTurnout = row.metric.toLowerCase().includes('turnout');
                    const isNumberVal = typeof row.val2016 === 'number';

                    return (
                      <tr key={idx} className="hover:bg-blue-50/20">
                        <td className="py-3.5 px-4 font-bold text-[#1D1D1F]">{row.metric}</td>
                        
                        {/* 2016 Value */}
                        <td className="py-3.5 px-4 text-right font-mono font-semibold text-[#6E6E73]">
                          {isTurnout
                            ? `${(Number(row.val2016) * 100).toFixed(2)}%`
                            : isNumberVal
                            ? Number(row.val2016).toLocaleString('en-IN')
                            : row.val2016}
                        </td>

                        {/* 2021 Value */}
                        <td className="py-3.5 px-4 text-right font-mono font-semibold text-[#6E6E73]">
                          {isTurnout
                            ? `${(Number(row.val2021) * 100).toFixed(2)}%`
                            : isNumberVal
                            ? Number(row.val2021).toLocaleString('en-IN')
                            : row.val2021}
                        </td>

                        {/* 2026 Value */}
                        <td className="py-3.5 px-4 text-right font-mono font-bold text-[#1D1D1F]">
                          {isTurnout
                            ? `${(Number(row.val2026) * 100).toFixed(2)}%`
                            : isNumberVal
                            ? Number(row.val2026).toLocaleString('en-IN')
                            : row.val2026}
                        </td>

                        {/* 10Y Net Shift */}
                        <td className="py-3.5 px-4 text-right font-mono font-bold">
                          {isTurnout ? (
                            <span className="text-emerald-700">
                              +{(Number(row.change10Y) * 100).toFixed(2)}%
                            </span>
                          ) : typeof row.change10Y === 'number' ? (
                            <span className={Number(row.change10Y) >= 0 ? 'text-emerald-700' : 'text-rose-700'}>
                              {Number(row.change10Y) > 0 ? `+${Number(row.change10Y).toLocaleString('en-IN')}` : Number(row.change10Y).toLocaleString('en-IN')}
                            </span>
                          ) : (
                            <span className="text-[#6E6E73]">{row.change10Y}</span>
                          )}
                        </td>

                        {/* Notes */}
                        <td className="py-3.5 px-4 text-xs text-[#6E6E73]">{row.notes}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION 3: PARTY & CANDIDATE TRAJECTORIES */}
        <section id="section-trajectories" className="space-y-6 scroll-mt-24">
          <div className="border-b border-[#E5E5EA] pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0066CC]">Section 3</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight">
              Party & Candidate Trajectories Across 3 Elections
            </h3>
            <p className="text-sm text-[#6E6E73] mt-0.5">
              Tracking the evolution of vote shares from the 2016 bipolar contest to the 2026 multiparty dispersion.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm space-y-8">
            {/* 3-Election Vote Share Progress Bars */}
            <div className="space-y-6">
              {/* 2016 Bar */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-extrabold text-sm text-[#1D1D1F]">2016 Election (Direct Bipolar Contest)</span>
                  <span className="font-mono text-[#6E6E73]">Valid Votes: 1,70,448</span>
                </div>
                <div className="h-7 w-full rounded-full bg-slate-100 flex overflow-hidden shadow-inner">
                  <div style={{ width: '49.69%' }} className="bg-[#0066CC] h-full flex items-center justify-center text-[10px] text-white font-bold" title="AIADMK: 49.69%">
                    AIADMK: 49.7%
                  </div>
                  <div style={{ width: '44.74%' }} className="bg-rose-600 h-full flex items-center justify-center text-[10px] text-white font-bold" title="DMK: 44.74%">
                    DMK: 44.7%
                  </div>
                  <div style={{ width: '1.75%' }} className="bg-amber-600 h-full" title="DMDK: 1.75%" />
                  <div style={{ width: '3.82%' }} className="bg-slate-300 h-full" title="Others/NOTA: 3.82%" />
                </div>
              </div>

              {/* 2021 Bar */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-extrabold text-sm text-[#1D1D1F]">2021 Election (AIADMK Crosses 50%)</span>
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
                  <span className="font-extrabold text-sm text-[#1D1D1F]">2026 Election (Tri-Cornered Field & Split Opposition)</span>
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

            {/* 4 Candidate Trajectory Spotlight Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
              {/* AIADMK */}
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200">
                <span className="text-xs font-bold uppercase text-[#0066CC]">AIADMK Fortress</span>
                <div className="text-xl font-extrabold text-[#1D1D1F] mt-1">C. Vijayabaskar</div>
                <div className="mt-3 space-y-1 text-xs">
                  <div className="flex justify-between"><span>2016:</span> <strong className="font-mono">84,701 (49.69%)</strong></div>
                  <div className="flex justify-between"><span>2021:</span> <strong className="font-mono">1,00,817 (52.93%)</strong></div>
                  <div className="flex justify-between"><span>2026:</span> <strong className="font-mono">1,05,773 (51.87%)</strong></div>
                  <div className="flex justify-between border-t border-blue-200/60 pt-1 text-emerald-700 font-bold">
                    <span>10Y Growth:</span> <span>+21,072 votes</span>
                  </div>
                </div>
              </div>

              {/* DMK */}
              <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200">
                <span className="text-xs font-bold uppercase text-rose-700">DMK Trajectory</span>
                <div className="text-xl font-extrabold text-[#1D1D1F] mt-1">Palaniappan → Chellapandiyan</div>
                <div className="mt-3 space-y-1 text-xs">
                  <div className="flex justify-between"><span>2016:</span> <strong className="font-mono">76,254 (44.74%)</strong></div>
                  <div className="flex justify-between"><span>2021:</span> <strong className="font-mono">77,536 (40.70%)</strong></div>
                  <div className="flex justify-between"><span>2026:</span> <strong className="font-mono">40,397 (19.81%)</strong></div>
                  <div className="flex justify-between border-t border-rose-200/60 pt-1 text-rose-700 font-bold">
                    <span>10Y Decline:</span> <span>-35,857 votes</span>
                  </div>
                </div>
              </div>

              {/* TVK */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
                <span className="text-xs font-bold uppercase text-amber-800">TVK (2026 Entrant)</span>
                <div className="text-xl font-extrabold text-[#1D1D1F] mt-1">P. Murugesan</div>
                <div className="mt-3 space-y-1 text-xs">
                  <div className="flex justify-between"><span>2016:</span> <strong className="font-mono">Did Not Exist</strong></div>
                  <div className="flex justify-between"><span>2021:</span> <strong className="font-mono">Did Not Contest</strong></div>
                  <div className="flex justify-between"><span>2026:</span> <strong className="font-mono">43,700 (21.43%)</strong></div>
                  <div className="flex justify-between border-t border-amber-200/60 pt-1 text-amber-900 font-bold">
                    <span>Impact:</span> <span>Took Runner-Up Spot</span>
                  </div>
                </div>
              </div>

              {/* NTK */}
              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                <span className="text-xs font-bold uppercase text-emerald-800">NTK Expansion</span>
                <div className="text-xl font-extrabold text-[#1D1D1F] mt-1">Sridhar → Azhagu → Sathyalakshmi</div>
                <div className="mt-3 space-y-1 text-xs">
                  <div className="flex justify-between"><span>2016:</span> <strong className="font-mono">815 (0.48%)</strong></div>
                  <div className="flex justify-between"><span>2021:</span> <strong className="font-mono">6,942 (3.64%)</strong></div>
                  <div className="flex justify-between"><span>2026:</span> <strong className="font-mono">9,467 (4.64%)</strong></div>
                  <div className="flex justify-between border-t border-emerald-200/60 pt-1 text-emerald-800 font-bold">
                    <span>10Y Multiplier:</span> <span>11.6× growth</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Complete Candidate Ledger Across 3 Elections */}
            <div className="pt-2">
              <h4 className="text-sm font-extrabold text-[#1D1D1F] mb-3">
                Official ECI Form 20 Candidate Ledger Across 3 Election Cycles
              </h4>
              <div className="overflow-x-auto rounded-2xl border border-[#E5E5EA]">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[#FBFBFD] border-b border-[#E5E5EA] text-[#6E6E73] font-bold uppercase text-xs tracking-wider">
                    <tr>
                      <th className="py-3 px-4">Cycle</th>
                      <th className="py-3 px-4">Candidate Name</th>
                      <th className="py-3 px-4">Party Affiliation</th>
                      <th className="py-3 px-4 text-right font-mono">Total Votes</th>
                      <th className="py-3 px-4 text-right font-mono">Vote Share %</th>
                      <th className="py-3 px-4">Election Outcome & Context</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5E5EA]">
                    {candidateResults3Y.map((cand, idx) => (
                      <tr key={idx} className="hover:bg-blue-50/20">
                        <td className="py-3 px-4 font-mono font-bold">
                          <span className={`px-2 py-0.5 rounded text-xs ${
                            cand.year === 2026
                              ? 'bg-blue-100 text-[#0066CC] font-bold'
                              : cand.year === 2021
                              ? 'bg-purple-100 text-purple-700'
                              : 'bg-slate-100 text-slate-700'
                          }`}>
                            {cand.year}
                          </span>
                        </td>
                        <td className="py-3 px-4 font-bold text-[#1D1D1F]">{cand.candidate}</td>
                        <td className="py-3 px-4 font-semibold text-[#4B5563]">{cand.party}</td>
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

        {/* SECTION 4: 3-PHASE POLITICAL EVOLUTION */}
        <section id="section-evolution" className="space-y-6 scroll-mt-24">
          <div className="border-b border-[#E5E5EA] pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0066CC]">Section 4</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight">
              The 3-Phase Political Evolution of Viralimalai (2016–2026)
            </h3>
            <p className="text-sm text-[#6E6E73] mt-0.5">
              Deciphering how a tight 8.4k two-horse race evolved into a 62k margin landslide over 10 years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phase 1 */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm flex flex-col justify-between space-y-4">
              <div>
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-mono text-xs font-bold mb-2">
                  Phase 1 · 2016 Election
                </div>
                <h4 className="text-xl font-extrabold text-[#1D1D1F]">
                  The Direct Bipolar Clash
                </h4>
                <p className="text-xs text-[#6E6E73] mt-2 leading-relaxed">
                  In 2016, Viralimalai witnessed a pure two-horse contest between AIADMK (C. Vijayabaskar) and DMK (M. Palaniappan). The race was determined by narrow margins across the constituency, with Vijayabaskar leading by only <strong>8,447 votes (4.96%)</strong>. DMK established strong local fortresses, winning <strong>90 out of 251 booths (35.9%)</strong>.
                </p>
              </div>

              <div className="pt-3 border-t border-[#E5E5EA] space-y-1.5 text-xs font-mono">
                <div className="flex justify-between"><span>Winner Margin:</span> <strong>+8,447</strong></div>
                <div className="flex justify-between"><span>AIADMK Booths:</span> <strong>158 (62.9%)</strong></div>
                <div className="flex justify-between"><span>DMK Booths:</span> <strong>90 (35.9%)</strong></div>
                <div className="flex justify-between"><span>Turnout:</span> <strong>84.27%</strong></div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm flex flex-col justify-between space-y-4">
              <div>
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 font-mono text-xs font-bold mb-2">
                  Phase 2 · 2021 Election
                </div>
                <h4 className="text-xl font-extrabold text-[#1D1D1F]">
                  Incumbency Fortress Consolidation
                </h4>
                <p className="text-xs text-[#6E6E73] mt-2 leading-relaxed">
                  Despite a statewide anti-incumbency wave in Tamil Nadu in 2021, C. Vijayabaskar expanded his personal footprint. He broke past 50% vote share for the first time (<strong>52.93% / 1,00,817 votes</strong>). While DMK retained its raw vote count (77.5k), its geographical hold shrank from 90 booths down to <strong>51 booths</strong>, nearly tripling the margin to <strong>23,281 votes</strong>.
                </p>
              </div>

              <div className="pt-3 border-t border-[#E5E5EA] space-y-1.5 text-xs font-mono">
                <div className="flex justify-between"><span>Winner Margin:</span> <strong>+23,281</strong></div>
                <div className="flex justify-between"><span>AIADMK Booths:</span> <strong>202 (79.8%)</strong></div>
                <div className="flex justify-between"><span>DMK Booths:</span> <strong>51 (20.2%)</strong></div>
                <div className="flex justify-between"><span>Turnout:</span> <strong>84.76%</strong></div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm flex flex-col justify-between space-y-4">
              <div>
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-mono text-xs font-bold mb-2">
                  Phase 3 · 2026 Election
                </div>
                <h4 className="text-xl font-extrabold text-[#1D1D1F]">
                  Opposition Fracture & Super-Landslide
                </h4>
                <p className="text-xs text-[#6E6E73] mt-2 leading-relaxed">
                  Turnout surged to a record <strong>90.60%</strong>. TVK entered the fray, capturing <strong>43,700 votes (21.43%)</strong> and overtaking DMK for second place. With the opposition vote evenly fragmented (TVK 21.4% vs DMK 19.8%), AIADMK held its bedrock majority (51.87%), captured <strong>259 out of 276 booths (93.8%)</strong>, and surged to a record <strong>62,073-vote margin</strong>.
                </p>
              </div>

              <div className="pt-3 border-t border-[#E5E5EA] space-y-1.5 text-xs font-mono">
                <div className="flex justify-between"><span>Winner Margin:</span> <strong className="text-emerald-700">+62,073</strong></div>
                <div className="flex justify-between"><span>AIADMK Booths:</span> <strong className="text-emerald-700">259 (93.8%)</strong></div>
                <div className="flex justify-between"><span>DMK Booths:</span> <strong className="text-rose-700">10 (3.6%)</strong></div>
                <div className="flex justify-between"><span>Turnout:</span> <strong className="text-emerald-700">90.60%</strong></div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: 2016 STATION BASELINE AUDIT */}
        <section id="section-baseline-2016" className="space-y-6 scroll-mt-24">
          <div className="border-b border-[#E5E5EA] pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0066CC]">Section 5</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight">
              2016 Polling Station Baseline Audit (251 Form 20 Booths)
            </h3>
            <p className="text-sm text-[#6E6E73] mt-0.5">
              Analyzing the initial spatial distribution of votes and comparing top AIADMK vs DMK fortresses in 2016.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Top 5 AIADMK Strongholds 2016 */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-[#0066CC]">2016 Baseline Strongholds</span>
                <span className="text-xs font-mono bg-blue-50 text-[#0066CC] px-2 py-0.5 rounded font-bold">Top 5 AIADMK Leads</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA] flex justify-between items-center">
                  <div>
                    <span className="font-extrabold text-sm text-[#1D1D1F]">Booth 68</span>
                    <div className="text-[11px] text-[#6E6E73]">AIADMK: 663 • DMK: 219</div>
                  </div>
                  <div className="text-right font-mono">
                    <span className="text-sm font-extrabold text-[#0066CC]">+444</span>
                    <div className="text-[10px] text-[#6E6E73]">71.8% Share</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA] flex justify-between items-center">
                  <div>
                    <span className="font-extrabold text-sm text-[#1D1D1F]">Booth 81</span>
                    <div className="text-[11px] text-[#6E6E73]">AIADMK: 690 • DMK: 306</div>
                  </div>
                  <div className="text-right font-mono">
                    <span className="text-sm font-extrabold text-[#0066CC]">+384</span>
                    <div className="text-[10px] text-[#6E6E73]">66.0% Share</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA] flex justify-between items-center">
                  <div>
                    <span className="font-extrabold text-sm text-[#1D1D1F]">Booth 6</span>
                    <div className="text-[11px] text-[#6E6E73]">AIADMK: 624 • DMK: 281</div>
                  </div>
                  <div className="text-right font-mono">
                    <span className="text-sm font-extrabold text-[#0066CC]">+343</span>
                    <div className="text-[10px] text-[#6E6E73]">65.8% Share</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA] flex justify-between items-center">
                  <div>
                    <span className="font-extrabold text-sm text-[#1D1D1F]">Booth 8</span>
                    <div className="text-[11px] text-[#6E6E73]">AIADMK: 517 • DMK: 209</div>
                  </div>
                  <div className="text-right font-mono">
                    <span className="text-sm font-extrabold text-[#0066CC]">+308</span>
                    <div className="text-[10px] text-[#6E6E73]">66.8% Share</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA] flex justify-between items-center">
                  <div>
                    <span className="font-extrabold text-sm text-[#1D1D1F]">Booth 233</span>
                    <div className="text-[11px] text-[#6E6E73]">AIADMK: 430 • DMK: 146</div>
                  </div>
                  <div className="text-right font-mono">
                    <span className="text-sm font-extrabold text-[#0066CC]">+284</span>
                    <div className="text-[10px] text-[#6E6E73]">66.4% Share</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Top 5 DMK Strongholds 2016 */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-rose-700">2016 Baseline Strongholds</span>
                <span className="text-xs font-mono bg-rose-50 text-rose-700 px-2 py-0.5 rounded font-bold">Top 5 DMK Leads</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA] flex justify-between items-center">
                  <div>
                    <span className="font-extrabold text-sm text-[#1D1D1F]">Booth 146</span>
                    <div className="text-[11px] text-[#6E6E73]">DMK: 540 • AIADMK: 246</div>
                  </div>
                  <div className="text-right font-mono">
                    <span className="text-sm font-extrabold text-rose-700">+294</span>
                    <div className="text-[10px] text-[#6E6E73]">65.5% Share</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA] flex justify-between items-center">
                  <div>
                    <span className="font-extrabold text-sm text-[#1D1D1F]">Booth 102</span>
                    <div className="text-[11px] text-[#6E6E73]">DMK: 443 • AIADMK: 160</div>
                  </div>
                  <div className="text-right font-mono">
                    <span className="text-sm font-extrabold text-rose-700">+283</span>
                    <div className="text-[10px] text-[#6E6E73]">71.9% Share</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA] flex justify-between items-center">
                  <div>
                    <span className="font-extrabold text-sm text-[#1D1D1F]">Booth 170</span>
                    <div className="text-[11px] text-[#6E6E73]">DMK: 540 • AIADMK: 281</div>
                  </div>
                  <div className="text-right font-mono">
                    <span className="text-sm font-extrabold text-rose-700">+259</span>
                    <div className="text-[10px] text-[#6E6E73]">64.1% Share</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA] flex justify-between items-center">
                  <div>
                    <span className="font-extrabold text-sm text-[#1D1D1F]">Booth 187</span>
                    <div className="text-[11px] text-[#6E6E73]">DMK: 496 • AIADMK: 256</div>
                  </div>
                  <div className="text-right font-mono">
                    <span className="text-sm font-extrabold text-rose-700">+240</span>
                    <div className="text-[10px] text-[#6E6E73]">62.2% Share</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA] flex justify-between items-center">
                  <div>
                    <span className="font-extrabold text-sm text-[#1D1D1F]">Booth 54</span>
                    <div className="text-[11px] text-[#6E6E73]">DMK: 512 • AIADMK: 287</div>
                  </div>
                  <div className="text-right font-mono">
                    <span className="text-sm font-extrabold text-rose-700">+225</span>
                    <div className="text-[10px] text-[#6E6E73]">58.8% Share</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: INTERACTIVE 2016 FORM 20 STATION EXPLORER */}
        <section id="section-explorer-2016" className="space-y-6 scroll-mt-24">
          <div className="border-b border-[#E5E5EA] pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0066CC]">Section 6</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight">
                2016 Form 20 Station Explorer (All 251 Polling Stations)
              </h3>
              <p className="text-sm text-[#6E6E73] mt-0.5">
                Exact certified vote totals from official Form 20 for every individual polling station. Click any station for drilldown.
              </p>
            </div>

            <div className="text-xs font-mono font-bold bg-[#F5F5F7] px-3 py-1.5 rounded-xl border border-[#E5E5EA] shrink-0">
              Showing {filteredBooths.length} of {booths2016Data.length} Booths
            </div>
          </div>

          {/* Search & Filter Controls */}
          <div className="p-5 rounded-2xl bg-white border border-[#E5E5EA] shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-[#86868B] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search booth no (e.g. 1, 3A, 68)..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-[#F5F5F7] border border-transparent focus:border-[#0066CC] focus:bg-white outline-none transition-all"
              />
            </div>

            {/* Winner Filter */}
            <div className="flex items-center gap-1.5 w-full md:w-auto overflow-x-auto scrollbar-none text-xs">
              <span className="text-[#86868B] text-xs font-medium mr-1">Winner:</span>
              <button
                type="button"
                onClick={() => setWinnerFilter('all')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                  winnerFilter === 'all'
                    ? 'bg-[#1D1D1F] text-white'
                    : 'bg-[#F5F5F7] text-[#6E6E73] hover:text-[#1D1D1F]'
                }`}
              >
                All (251)
              </button>
              <button
                type="button"
                onClick={() => setWinnerFilter('AIADMK')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                  winnerFilter === 'AIADMK'
                    ? 'bg-[#0066CC] text-white'
                    : 'bg-blue-50 text-[#0066CC] hover:bg-blue-100'
                }`}
              >
                AIADMK Won (158)
              </button>
              <button
                type="button"
                onClick={() => setWinnerFilter('DMK')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                  winnerFilter === 'DMK'
                    ? 'bg-rose-700 text-white'
                    : 'bg-rose-50 text-rose-700 hover:bg-rose-100'
                }`}
              >
                DMK Won (90)
              </button>
              <button
                type="button"
                onClick={() => setWinnerFilter('Tied')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                  winnerFilter === 'Tied'
                    ? 'bg-slate-700 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Tied (3)
              </button>
            </div>
          </div>

          {/* 2016 Master Table */}
          <div className="rounded-3xl bg-white border border-[#E5E5EA] shadow-sm overflow-hidden">
            <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#FBFBFD] sticky top-0 z-10 border-b border-[#E5E5EA] text-[#6E6E73] font-bold uppercase tracking-wider">
                  <tr>
                    <th
                      className="py-3 px-3 cursor-pointer hover:text-[#1D1D1F]"
                      onClick={() => toggleSort('boothNo')}
                    >
                      <div className="flex items-center gap-1">
                        <span>Booth No</span>
                        <ArrowUpDown className="w-3 h-3" />
                      </div>
                    </th>
                    <th
                      className="py-3 px-3 text-right cursor-pointer hover:text-[#1D1D1F]"
                      onClick={() => toggleSort('aiadmkVotes')}
                    >
                      <div className="flex items-center justify-end gap-1">
                        <span>AIADMK Votes</span>
                        <ArrowUpDown className="w-3 h-3" />
                      </div>
                    </th>
                    <th
                      className="py-3 px-3 text-right cursor-pointer hover:text-[#1D1D1F]"
                      onClick={() => toggleSort('aiadmkPct')}
                    >
                      <div className="flex items-center justify-end gap-1">
                        <span>AIADMK %</span>
                        <ArrowUpDown className="w-3 h-3" />
                      </div>
                    </th>
                    <th
                      className="py-3 px-3 text-right cursor-pointer hover:text-[#1D1D1F]"
                      onClick={() => toggleSort('dmkVotes')}
                    >
                      <div className="flex items-center justify-end gap-1">
                        <span>DMK Votes</span>
                        <ArrowUpDown className="w-3 h-3" />
                      </div>
                    </th>
                    <th className="py-3 px-3 text-right">DMK %</th>
                    <th className="py-3 px-3 text-right">DMDK</th>
                    <th className="py-3 px-3 text-right">NTK</th>
                    <th className="py-3 px-3 text-right">Valid</th>
                    <th className="py-3 px-3 text-center">Winner</th>
                    <th
                      className="py-3 px-3 text-right cursor-pointer hover:text-[#1D1D1F]"
                      onClick={() => toggleSort('margin')}
                    >
                      <div className="flex items-center justify-end gap-1">
                        <span>Margin</span>
                        <ArrowUpDown className="w-3 h-3" />
                      </div>
                    </th>
                    <th className="py-3 px-3 text-center">Page</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E5EA]">
                  {filteredBooths.map(b => (
                    <tr
                      key={b.serialNo}
                      onClick={() => setSelectedBooth(b)}
                      className="hover:bg-blue-50/40 cursor-pointer transition-colors"
                      title="Click to view detailed station candidate breakdown"
                    >
                      <td className="py-2.5 px-3 font-mono font-bold text-[#1D1D1F]">
                        #{b.boothNo}
                      </td>
                      <td className="py-2.5 px-3 text-right font-mono font-bold text-[#0066CC]">
                        {b.aiadmkVotes.toLocaleString('en-IN')}
                      </td>
                      <td className="py-2.5 px-3 text-right font-mono font-semibold text-[#0066CC]">
                        {b.aiadmkPct.toFixed(1)}%
                      </td>
                      <td className="py-2.5 px-3 text-right font-mono font-bold text-rose-700">
                        {b.dmkVotes.toLocaleString('en-IN')}
                      </td>
                      <td className="py-2.5 px-3 text-right font-mono font-semibold text-rose-700">
                        {b.dmkPct.toFixed(1)}%
                      </td>
                      <td className="py-2.5 px-3 text-right font-mono text-[#6E6E73]">
                        {b.dmdkVotes || '—'}
                      </td>
                      <td className="py-2.5 px-3 text-right font-mono text-emerald-800">
                        {b.ntkVotes || '—'}
                      </td>
                      <td className="py-2.5 px-3 text-right font-mono text-[#1D1D1F]">
                        {b.validVotes.toLocaleString('en-IN')}
                      </td>
                      <td className="py-2.5 px-3 text-center">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono ${
                            b.winner === 'AIADMK'
                              ? 'bg-blue-100 text-[#0066CC]'
                              : b.winner === 'DMK'
                              ? 'bg-rose-100 text-rose-700'
                              : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {b.winner}
                        </span>
                      </td>
                      <td className="py-2.5 px-3 text-right font-mono font-bold">
                        <span className={b.winner === 'AIADMK' ? 'text-[#0066CC]' : b.winner === 'DMK' ? 'text-rose-700' : 'text-slate-700'}>
                          {b.margin > 0 ? `+${b.margin.toLocaleString('en-IN')}` : '0'}
                        </span>
                      </td>
                      <td className="py-2.5 px-3 text-center font-mono text-[10px] text-[#86868B]">
                        p.{b.sourcePage}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION 7: METHODOLOGICAL NOTES & ECI VERIFICATION */}
        <section id="section-methodology" className="space-y-6 scroll-mt-24">
          <div className="border-b border-[#E5E5EA] pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0066CC]">Section 7</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight">
              Official Data Notes & Longitudinal Verification Standards
            </h3>
            <p className="text-sm text-[#6E6E73] mt-0.5">
              Certified guidelines from ECI Form 20 records governing 2016, 2021, and 2026 data integrity.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {dataNotes3Y.map((note, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA] space-y-1">
                  <span className="text-xs font-bold uppercase text-[#0066CC] font-mono">
                    {note.topic}
                  </span>
                  <p className="text-xs text-[#4B5563] leading-relaxed">
                    {note.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Station Detail Drilldown Modal */}
      {selectedBooth && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E5E5EA] space-y-5 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-[#E5E5EA] pb-4">
              <div>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-[#0066CC]">
                  2016 Polling Station #{selectedBooth.boothNo}
                </span>
                <h3 className="text-xl font-extrabold text-[#1D1D1F] mt-1">
                  Form 20 Certified Station Record
                </h3>
                <div className="text-xs text-[#6E6E73]">
                  Serial No: {selectedBooth.serialNo} • Form 20 Source Page {selectedBooth.sourcePage}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedBooth(null)}
                className="p-2 rounded-full hover:bg-[#F5F5F7] text-[#6E6E73] hover:text-[#1D1D1F] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Winner Spotlight */}
            <div className={`p-4 rounded-2xl border ${
              selectedBooth.winner === 'AIADMK'
                ? 'bg-blue-50/70 border-blue-200'
                : selectedBooth.winner === 'DMK'
                ? 'bg-rose-50/70 border-rose-200'
                : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold uppercase tracking-wider text-[#6E6E73]">Station Outcome</span>
                <span className="font-mono font-bold text-xs">
                  Margin: +{selectedBooth.margin.toLocaleString('en-IN')} votes
                </span>
              </div>
              <div className="text-xl font-extrabold text-[#1D1D1F] mt-1">
                {selectedBooth.winner === 'AIADMK' ? 'C. Vijayabaskar (AIADMK) Led' : selectedBooth.winner === 'DMK' ? 'M. Palaniappan (DMK) Led' : 'Tied Station'}
              </div>
              <div className="mt-2 text-xs flex justify-between font-mono">
                <span>AIADMK: {selectedBooth.aiadmkVotes} ({selectedBooth.aiadmkPct}%)</span>
                <span>DMK: {selectedBooth.dmkVotes} ({selectedBooth.dmkPct}%)</span>
              </div>
            </div>

            {/* Candidate Breakdown */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase text-[#86868B] tracking-wider">
                Full 2016 Candidate Vote Distribution
              </span>
              <div className="p-4 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA] space-y-2 text-xs font-mono">
                <div className="flex justify-between items-center">
                  <span className="font-sans font-bold text-[#1D1D1F]">C. Vijayabaskar (AIADMK):</span>
                  <strong className="text-[#0066CC]">{selectedBooth.aiadmkVotes} votes</strong>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-sans font-bold text-[#1D1D1F]">M. Palaniappan (DMK):</span>
                  <strong className="text-rose-700">{selectedBooth.dmkVotes} votes</strong>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-sans text-[#4B5563]">Karthikeyan R (DMDK):</span>
                  <span>{selectedBooth.dmdkVotes} votes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-sans text-[#4B5563]">Sridhar K (NTK):</span>
                  <span>{selectedBooth.ntkVotes} votes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-sans text-[#4B5563]">Azhaguraja V (BSP):</span>
                  <span>{selectedBooth.bspVotes} votes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-sans text-[#4B5563]">Other Registered / Independents:</span>
                  <span>{selectedBooth.otherVotes} votes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-sans text-[#4B5563]">NOTA:</span>
                  <span>{selectedBooth.notaVotes} votes</span>
                </div>
                <div className="flex justify-between items-center border-t border-[#E5E5EA] pt-2 font-bold text-sm">
                  <span className="font-sans text-[#1D1D1F]">Total Valid Votes:</span>
                  <strong className="text-[#1D1D1F]">{selectedBooth.validVotes.toLocaleString('en-IN')}</strong>
                </div>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedBooth(null)}
                className="px-4 py-2 rounded-xl bg-[#1D1D1F] text-white font-bold text-xs hover:bg-[#333] transition-all"
              >
                Close Station Record
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white border-t border-[#E5E5EA] py-6 px-4 text-center text-xs text-[#86868B] no-print">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            179 Viralimalai Assembly Constituency · 10-Year Master Longitudinal Study (2016 • 2021 • 2026)
          </div>
          <div className="flex items-center gap-3">
            <span>Prepared by Ananda Krishnan</span>
            <span>•</span>
            <span>Ctrl Alt Kick Ad Tech Solutions Pvt Ltd</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Master3YReportPage;
