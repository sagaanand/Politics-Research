import React, { useState, useMemo } from 'react';
import {
  all276Booths,
  candidateSummaries,
  tierSummaries,
  slabSummaries,
  roundSummaries,
  actionableBoothIds,
  constituencyMeta,
  BoothRecord
} from '../data/boothAnalysisData';
import {
  Search,
  Download,
  ArrowUpDown,
  Printer,
  ChevronRight,
  Award,
  ArrowLeft,
  X,
  FileSpreadsheet
} from 'lucide-react';

interface BoothAnalysisPageProps {
  onBackToProposal?: () => void;
}

type TabType = 'overview' | 'tiers' | 'vulnerable' | 'rounds' | 'all-booths';

export const BoothAnalysisPage: React.FC<BoothAnalysisPageProps> = ({ onBackToProposal }) => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTier, setSelectedTier] = useState<string>('all');
  const [selectedWinner, setSelectedWinner] = useState<string>('all');
  const [selectedSlab, setSelectedSlab] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'boothNo' | 'leadMargin' | 'turnoutPct' | 'vijayabaskarPct' | 'relativeDiffPct'>('boothNo');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [selectedBooth, setSelectedBooth] = useState<BoothRecord | null>(null);
  const [vulnerableSubTab, setVulnerableSubTab] = useState<'all' | 'trailing' | 'narrow' | 'competitive'>('all');

  // Filtered booths logic
  const filteredBooths = useMemo(() => {
    return all276Booths.filter(b => {
      // Search filter
      const matchesSearch =
        searchTerm === '' ||
        b.boothNo.toString().includes(searchTerm) ||
        b.stationName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.winner.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.topOpponentName.toLowerCase().includes(searchTerm.toLowerCase());

      // Tier filter
      const matchesTier = selectedTier === 'all' || b.tierCode === selectedTier;

      // Winner filter
      const matchesWinner =
        selectedWinner === 'all' ||
        (selectedWinner === 'VIJAYABASKAR' && b.winner.includes('VIJAYABASKAR')) ||
        (selectedWinner === 'MURUGESAN' && b.winner.includes('MURUGESAN')) ||
        (selectedWinner === 'CHELLAPANDIYAN' && b.winner.includes('CHELLAPANDIYAN')) ||
        (selectedWinner === 'TIE' && b.winner.includes('TIE'));

      // Slab filter
      const matchesSlab = selectedSlab === 'all' || b.slabName.includes(selectedSlab);

      return matchesSearch && matchesTier && matchesWinner && matchesSlab;
    }).sort((a, b) => {
      const aVal = a[sortBy];
      const bVal = b[sortBy];
      if (aVal < bVal) return sortOrder === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }, [searchTerm, selectedTier, selectedWinner, selectedSlab, sortBy, sortOrder]);

  // Priority vulnerable booths
  const vulnerableBooths = useMemo(() => {
    const list = all276Booths.filter(b => actionableBoothIds.includes(b.boothNo));
    if (vulnerableSubTab === 'trailing') return list.filter(b => b.leadMargin < 0);
    if (vulnerableSubTab === 'narrow') return list.filter(b => b.relativeDiffPct >= 0 && b.relativeDiffPct <= 10);
    if (vulnerableSubTab === 'competitive') return list.filter(b => b.relativeDiffPct > 10 && b.relativeDiffPct <= 40);
    return list;
  }, [vulnerableSubTab]);

  // CSV export handler
  const handleExportCSV = () => {
    const headers = [
      'Booth No',
      'Round No',
      'Polling Station Name',
      'Electors Assigned',
      'Total Votes Polled',
      'Turnout %',
      'C. Vijayabaskar (Votes)',
      'C. Vijayabaskar (%)',
      'P. Murugesan (Votes)',
      'P. Murugesan (%)',
      'K.K. Chellapandiyan (Votes)',
      'K.K. Chellapandiyan (%)',
      'K. Sathyalakshmi (Votes)',
      'K. Sathyalakshmi (%)',
      'NOTA',
      'Others',
      'Winner',
      'Top Opponent',
      'Top Opponent Votes',
      'Lead Margin',
      'Margin % of Total',
      'Relative Diff %',
      'Tier',
      'Slab'
    ];

    const rows = all276Booths.map(b => [
      b.boothNo,
      b.roundNo,
      `"${b.stationName.replace(/"/g, '""')}"`,
      b.electors,
      b.polled,
      b.turnoutPct,
      b.vijayabaskarVotes,
      b.vijayabaskarPct,
      b.murugesanVotes,
      b.murugesanPct,
      b.chellapandiyanVotes,
      b.chellapandiyanPct,
      b.sathyalakshmiVotes,
      b.sathyalakshmiPct,
      b.notaVotes,
      b.othersVotes,
      `"${b.winner}"`,
      `"${b.topOpponentName}"`,
      b.topOpponentVotes,
      b.leadMargin,
      b.marginPct,
      b.relativeDiffPct,
      `"${b.tierName}"`,
      `"${b.slabName}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'Viralimalai_179_Polling_Station_Comparison.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  const toggleSort = (field: 'boothNo' | 'leadMargin' | 'turnoutPct' | 'vijayabaskarPct' | 'relativeDiffPct') => {
    if (sortBy === field) {
      setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('desc');
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBFD] text-[#1D1D1F] flex flex-col font-sans select-none print:bg-white print:text-black">
      {/* Top Header Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E5E5EA] shadow-sm no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Branding & Back Button */}
            <div className="flex items-center gap-3">
              {onBackToProposal && (
                <button
                  type="button"
                  onClick={onBackToProposal}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#0066CC] hover:bg-blue-50 border border-blue-200 transition-all"
                  title="Return to Proposal Presentation Deck"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Proposal Deck</span>
                </button>
              )}
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-base sm:text-lg text-[#1D1D1F] tracking-tight">
                    179 Viralimalai
                  </span>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Form 20 Certified
                  </span>
                </div>
                <div className="text-[11px] text-[#6E6E73] truncate hidden sm:block">
                  Polling Station Comparison & Candidate Dominance Analysis (All 276 Booths)
                </div>
              </div>
            </div>

            {/* Right: Quick Actions */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleExportCSV}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#E5E5EA] hover:border-[#1D1D1F] text-xs font-bold text-[#1D1D1F] shadow-sm transition-all"
                title="Download complete 276-booth CSV dataset"
              >
                <Download className="w-3.5 h-3.5 text-[#0066CC]" />
                <span className="hidden md:inline">Export CSV</span>
              </button>
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#E5E5EA] hover:border-[#1D1D1F] text-xs font-bold text-[#1D1D1F] shadow-sm transition-all"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5 text-[#0066CC]" />
                <span className="hidden md:inline">Print / PDF</span>
              </button>
            </div>
          </div>

          {/* Sub Navigation Tabs */}
          <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto pb-2 scrollbar-none text-xs font-bold">
            <button
              type="button"
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-1.5 rounded-lg transition-all shrink-0 ${
                activeTab === 'overview'
                  ? 'bg-[#1D1D1F] text-white shadow-sm'
                  : 'text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7]'
              }`}
            >
              Executive Overview
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('tiers')}
              className={`px-3 py-1.5 rounded-lg transition-all shrink-0 ${
                activeTab === 'tiers'
                  ? 'bg-[#1D1D1F] text-white shadow-sm'
                  : 'text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7]'
              }`}
            >
              Strength & Weakness Tiers (8)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('vulnerable')}
              className={`px-3 py-1.5 rounded-lg transition-all shrink-0 flex items-center gap-1.5 ${
                activeTab === 'vulnerable'
                  ? 'bg-[#1D1D1F] text-white shadow-sm'
                  : 'text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7]'
              }`}
            >
              <span>Priority Pockets</span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-rose-100 text-rose-700">33</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('rounds')}
              className={`px-3 py-1.5 rounded-lg transition-all shrink-0 ${
                activeTab === 'rounds'
                  ? 'bg-[#1D1D1F] text-white shadow-sm'
                  : 'text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7]'
              }`}
            >
              Round-by-Round (R1–R20)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('all-booths')}
              className={`px-3 py-1.5 rounded-lg transition-all shrink-0 flex items-center gap-1.5 ${
                activeTab === 'all-booths'
                  ? 'bg-[#1D1D1F] text-white shadow-sm'
                  : 'text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7]'
              }`}
            >
              <span>All 276 Booths Table</span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-blue-100 text-[#0066CC]">276</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
        {/* TAB 1: EXECUTIVE OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Hero Summary Cards (6 Dominant KPIs) */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
              <div className="p-4 rounded-2xl bg-white border border-[#E5E5EA] shadow-sm flex flex-col justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#86868B]">Total Valid Votes</span>
                <div className="my-2">
                  <div className="text-2xl font-extrabold font-mono text-[#1D1D1F]">
                    {constituencyMeta.totalValidVotes.toLocaleString('en-IN')}
                  </div>
                  <div className="text-xs text-emerald-600 font-semibold mt-0.5">
                    {constituencyMeta.overallTurnoutPct}% Turnout
                  </div>
                </div>
                <div className="text-[10px] text-[#86868B] border-t border-[#F0F0F2] pt-1.5">
                  202,151 EVM + 1,770 Postal
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 shadow-sm flex flex-col justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0066CC]">Winner Total</span>
                <div className="my-2">
                  <div className="text-2xl font-extrabold font-mono text-[#0066CC]">
                    {constituencyMeta.winnerTotalVotes.toLocaleString('en-IN')}
                  </div>
                  <div className="text-xs text-[#0066CC] font-bold mt-0.5">
                    {constituencyMeta.winnerVoteSharePct}% Vote Share
                  </div>
                </div>
                <div className="text-[10px] text-[#0066CC] font-semibold border-t border-blue-200/60 pt-1.5">
                  C. Vijayabaskar (AIADMK)
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E5E5EA] shadow-sm flex flex-col justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#86868B]">Net Win Margin</span>
                <div className="my-2">
                  <div className="text-2xl font-extrabold font-mono text-emerald-700">
                    +{constituencyMeta.overallWinMargin.toLocaleString('en-IN')}
                  </div>
                  <div className="text-xs text-[#6E6E73] font-semibold mt-0.5">
                    Over Runner-Up (TVK)
                  </div>
                </div>
                <div className="text-[10px] text-[#86868B] border-t border-[#F0F0F2] pt-1.5">
                  51.87% vs 21.43% (+30.4%)
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E5E5EA] shadow-sm flex flex-col justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#86868B]">Booths Won</span>
                <div className="my-2">
                  <div className="text-2xl font-extrabold font-mono text-[#1D1D1F]">
                    {constituencyMeta.winnerBoothsWon} <span className="text-sm font-normal text-[#86868B]">/ 276</span>
                  </div>
                  <div className="text-xs text-emerald-600 font-bold mt-0.5">
                    93.84% Dominance
                  </div>
                </div>
                <div className="text-[10px] text-[#86868B] border-t border-[#F0F0F2] pt-1.5">
                  Won 259 out of 276 booths
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E5E5EA] shadow-sm flex flex-col justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#86868B]">Ultra-Strongholds</span>
                <div className="my-2">
                  <div className="text-2xl font-extrabold font-mono text-emerald-700">
                    {constituencyMeta.ultraStrongholdBoothsCount}
                  </div>
                  <div className="text-xs text-[#6E6E73] font-semibold mt-0.5">
                    66.3% of all booths
                  </div>
                </div>
                <div className="text-[10px] text-[#86868B] border-t border-[#F0F0F2] pt-1.5">
                  More than 2x Opponent Votes
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200 shadow-sm flex flex-col justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700">Opponent Pockets</span>
                <div className="my-2">
                  <div className="text-2xl font-extrabold font-mono text-rose-700">
                    {constituencyMeta.opponentBoothsCount} <span className="text-xs font-normal text-rose-600">+ 1 Tie</span>
                  </div>
                  <div className="text-xs text-rose-600 font-semibold mt-0.5">
                    5.8% of all booths
                  </div>
                </div>
                <div className="text-[10px] text-rose-700 border-t border-rose-200/60 pt-1.5">
                  10 DMK · 6 TVK · 1 Tied (#193)
                </div>
              </div>
            </div>

            {/* Candidate Performance Leaderboard */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-[#E5E5EA] gap-2">
                <div>
                  <h3 className="text-xl font-extrabold text-[#1D1D1F]">
                    Candidate Performance & Vote Share Distribution
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6E6E73] mt-0.5">
                    Verified Form 20 EVM counts across all 276 Polling Stations plus validated Postal Ballot Returns.
                  </p>
                </div>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-[#4B5563] self-start sm:self-auto">
                  Total Valid: 203,921 Votes
                </span>
              </div>

              <div className="space-y-5">
                {candidateSummaries.map((c) => (
                  <div key={c.rank} className="p-4 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA] hover:border-[#0066CC]/40 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2.5">
                      <div className="flex items-center gap-3">
                        <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm ${
                          c.rank === 1 ? 'bg-[#0066CC] text-white shadow-sm' : 'bg-slate-200 text-[#1D1D1F]'
                        }`}>
                          {c.rank}
                        </span>
                        <div>
                          <div className="text-base font-bold text-[#1D1D1F] flex items-center gap-2">
                            <span>{c.name}</span>
                            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-white border border-[#E5E5EA] text-[#6E6E73]">
                              {c.party}
                            </span>
                          </div>
                          <div className="text-xs text-[#86868B] mt-0.5">
                            {c.evmVotes.toLocaleString('en-IN')} EVM · {c.postalVotes.toLocaleString('en-IN')} Postal
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 sm:text-right">
                        <div>
                          <div className="text-xl font-extrabold font-mono text-[#1D1D1F]">
                            {c.totalVotes.toLocaleString('en-IN')}
                          </div>
                          <div className="text-xs font-bold text-[#0066CC]">
                            {c.voteSharePct}% of total
                          </div>
                        </div>
                        <div className="pl-4 border-l border-[#E5E5EA]">
                          <div className="text-sm font-extrabold text-[#1D1D1F]">
                            {c.boothsWon} Booths
                          </div>
                          <div className="text-xs text-[#86868B]">
                            {c.rank === 1 ? 'Winner' : `${c.netLeadVsWinner.toLocaleString('en-IN')} vs Winner`}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-[#E5E5EA] h-3 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${c.voteSharePct}%`,
                          backgroundColor: c.color
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Strength Tiers & Margin Slabs Side-by-Side */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left: 8 Strength Tiers Summary */}
              <div className="lg:col-span-7 p-6 sm:p-7 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E5E5EA]">
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-[#1D1D1F]">
                        Vijayabaskar Strength & Weakness Tiers
                      </h4>
                      <p className="text-xs text-[#6E6E73] mt-0.5">
                        Relative advantage over top opponent across all 276 polling booths
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveTab('tiers')}
                      className="text-xs font-bold text-[#0066CC] hover:underline"
                    >
                      View All 8 Tiers →
                    </button>
                  </div>

                  <div className="space-y-2.5">
                    {tierSummaries.map((t) => (
                      <div
                        key={t.tierCode}
                        onClick={() => {
                          setSelectedTier(t.tierCode);
                          setActiveTab('tiers');
                        }}
                        className="p-3 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA] hover:border-[#0066CC] hover:bg-white cursor-pointer transition-all flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className="w-3 h-3 rounded-full shrink-0"
                            style={{ backgroundColor: t.color }}
                          />
                          <div>
                            <span className="font-mono text-xs font-bold text-[#1D1D1F]">
                              {t.tierCode}: {t.classification}
                            </span>
                            <div className="text-[11px] text-[#6E6E73]">{t.category}</div>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="font-mono text-sm font-extrabold text-[#1D1D1F]">
                            {t.boothsCount} Booths <span className="text-xs text-[#86868B] font-normal">({t.boothsPct}%)</span>
                          </div>
                          <div className="text-[11px] font-semibold text-[#0066CC]">
                            {t.netLead >= 0 ? `+${t.netLead.toLocaleString('en-IN')}` : t.netLead.toLocaleString('en-IN')} net
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Margin Slabs Summary */}
              <div className="lg:col-span-5 p-6 sm:p-7 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="pb-3 mb-4 border-b border-[#E5E5EA]">
                    <h4 className="text-base sm:text-lg font-bold text-[#1D1D1F]">
                      Alternative View: Margin as % of Total
                    </h4>
                    <p className="text-xs text-[#6E6E73] mt-0.5">
                      Net lead over opponent divided by total polled votes in that booth
                    </p>
                  </div>

                  <div className="space-y-3.5">
                    {slabSummaries.map((s, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA]">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-sm text-[#1D1D1F]">{s.slabCode}: {s.marginRange}</span>
                          <span className="font-mono text-sm font-bold text-[#0066CC]">{s.boothsCount} Booths ({s.boothsPct}%)</span>
                        </div>
                        <p className="text-xs text-[#6E6E73]">{s.description}</p>
                        <div className="mt-2 pt-2 border-t border-[#E5E5EA] flex justify-between text-xs">
                          <span className="text-[#86868B]">Net Margin: <strong className="text-[#1D1D1F] font-mono">{s.netMargin.toLocaleString('en-IN')}</strong></span>
                          <span className="text-[#86868B]">Avg / Booth: <strong className="text-[#1D1D1F] font-mono">{s.avgMarginPerBooth}</strong></span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E5E5EA] text-xs text-[#86868B] flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#0066CC] shrink-0" />
                  <span>Highest single-booth margin % is 59.1% in Booth #113 (Rajagiri).</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: STRENGTH & WEAKNESS TIERS */}
        {activeTab === 'tiers' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-extrabold text-[#1D1D1F] tracking-tight">
                C. Vijayabaskar 8-Tier Strength & Weakness Classification
              </h3>
              <p className="text-sm text-[#6E6E73] mt-1">
                Booths segmented strictly by relative vote advantage formula: <code className="font-mono text-xs bg-slate-100 px-1.5 py-0.5 rounded text-[#0066CC]">(Vijayabaskar − Top Opponent) / Top Opponent</code>
              </p>
            </div>

            {/* 8 Tier Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {tierSummaries.map((t) => (
                <div
                  key={t.tierCode}
                  onClick={() => setSelectedTier(selectedTier === t.tierCode ? 'all' : t.tierCode)}
                  className={`p-5 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between ${
                    selectedTier === t.tierCode
                      ? 'bg-white border-[#0066CC] shadow-md ring-2 ring-[#0066CC]/20'
                      : 'bg-white border-[#E5E5EA] shadow-sm hover:border-[#0066CC]/40 hover:bg-[#FBFBFD]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#E5E5EA]">
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: t.color }}>
                        {t.tierCode}
                      </span>
                      <span className="text-xs font-mono font-bold text-[#86868B]">
                        {t.boothsPct}% of Total
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-[#1D1D1F] leading-snug">
                      {t.classification}
                    </h4>
                    <p className="text-xs text-[#6E6E73] mt-1">
                      {t.category}
                    </p>

                    <div className="mt-4 pt-3 border-t border-[#F0F0F2] space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#6E6E73]">Booths Count:</span>
                        <span className="font-bold font-mono text-[#1D1D1F] text-sm">{t.boothsCount}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#6E6E73]">Vijayabaskar Votes:</span>
                        <span className="font-bold font-mono text-[#1D1D1F]">{t.vijayabaskarVotes.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#6E6E73]">Top Opponent Votes:</span>
                        <span className="font-bold font-mono text-[#1D1D1F]">{t.opponentVotes.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#6E6E73]">Net Lead / Deficit:</span>
                        <span className={`font-bold font-mono ${t.netLead >= 0 ? 'text-emerald-700' : 'text-rose-700'}`}>
                          {t.netLead >= 0 ? `+${t.netLead.toLocaleString('en-IN')}` : t.netLead.toLocaleString('en-IN')}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#6E6E73]">Avg Margin / Booth:</span>
                        <span className="font-bold font-mono text-[#1D1D1F]">{t.avgMarginPerBooth}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-2 border-t border-[#F0F0F2] text-[11px] font-semibold text-[#0066CC] flex items-center justify-between">
                    <span>{selectedTier === t.tierCode ? 'Filtering active (Click to reset)' : 'Click to filter booths'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>

            {/* Filtered Booths in this Tier */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E5E5EA]">
                <div>
                  <h4 className="text-base font-bold text-[#1D1D1F]">
                    {selectedTier === 'all' ? 'All 276 Polling Stations' : `Booths in ${selectedTier}`}
                  </h4>
                  <p className="text-xs text-[#6E6E73]">
                    Showing {filteredBooths.length} stations
                  </p>
                </div>
                {selectedTier !== 'all' && (
                  <button
                    type="button"
                    onClick={() => setSelectedTier('all')}
                    className="text-xs font-semibold text-[#0066CC] hover:underline"
                  >
                    Clear Filter
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {filteredBooths.slice(0, 30).map((b) => (
                  <div
                    key={b.boothNo}
                    onClick={() => setSelectedBooth(b)}
                    className="p-3.5 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA] hover:border-[#0066CC] hover:bg-white cursor-pointer transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-[#E5E5EA]">
                        <span className="font-mono text-xs font-bold text-[#0066CC]">Booth #{b.boothNo}</span>
                        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                          b.leadMargin > 0 ? 'bg-emerald-50 text-emerald-800' : b.leadMargin === 0 ? 'bg-purple-50 text-purple-800' : 'bg-rose-50 text-rose-800'
                        }`}>
                          {b.leadMargin > 0 ? `+${b.leadMargin}` : b.leadMargin}
                        </span>
                      </div>
                      <div className="text-xs font-bold text-[#1D1D1F] line-clamp-2">
                        {b.stationName}
                      </div>
                      <div className="mt-2 text-[11px] text-[#6E6E73] flex justify-between">
                        <span>Turnout: <strong>{b.turnoutPct}%</strong></span>
                        <span>Vijayabaskar: <strong>{b.vijayabaskarVotes} ({b.vijayabaskarPct}%)</strong></span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredBooths.length > 30 && (
                <div className="mt-4 text-center">
                  <button
                    type="button"
                    onClick={() => setActiveTab('all-booths')}
                    className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-[#1D1D1F] transition-colors"
                  >
                    View Remaining {filteredBooths.length - 30} Booths in Table Tab →
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 3: VULNERABLE & PRIORITY POCKETS (33 BOOTHS) */}
        {activeTab === 'vulnerable' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-2xl font-extrabold text-[#1D1D1F] tracking-tight">
                  Priority Actionable Pockets (33 Booths)
                </h3>
                <p className="text-sm text-[#6E6E73] mt-0.5">
                  16 Trailing Booths (&lt; 0%) + 6 Narrow/Tied Booths (0%–10%) + 11 Competitive Booths (10%–40%)
                </p>
              </div>

              {/* Sub tab filter */}
              <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setVulnerableSubTab('all')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    vulnerableSubTab === 'all' ? 'bg-white shadow text-[#1D1D1F]' : 'text-[#6E6E73]'
                  }`}
                >
                  All 33
                </button>
                <button
                  type="button"
                  onClick={() => setVulnerableSubTab('trailing')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    vulnerableSubTab === 'trailing' ? 'bg-white shadow text-rose-700' : 'text-[#6E6E73]'
                  }`}
                >
                  16 Trailing
                </button>
                <button
                  type="button"
                  onClick={() => setVulnerableSubTab('narrow')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    vulnerableSubTab === 'narrow' ? 'bg-white shadow text-amber-700' : 'text-[#6E6E73]'
                  }`}
                >
                  6 Narrow / Tie
                </button>
                <button
                  type="button"
                  onClick={() => setVulnerableSubTab('competitive')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    vulnerableSubTab === 'competitive' ? 'bg-white shadow text-blue-700' : 'text-[#6E6E73]'
                  }`}
                >
                  11 Competitive
                </button>
              </div>
            </div>

            {/* List of Actionable Booths */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {vulnerableBooths.map((b) => (
                <div
                  key={b.boothNo}
                  onClick={() => setSelectedBooth(b)}
                  className="p-5 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm hover:border-[#0066CC] cursor-pointer transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#E5E5EA]">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded-full bg-slate-100 text-[#1D1D1F]">
                          Booth #{b.boothNo}
                        </span>
                        <span className="text-[10px] font-mono text-[#86868B]">
                          Round {b.roundNo}
                        </span>
                      </div>
                      <span className={`text-xs font-mono font-extrabold px-2.5 py-0.5 rounded-full ${
                        b.leadMargin < 0
                          ? 'bg-rose-50 text-rose-700 border border-rose-200'
                          : b.leadMargin === 0
                          ? 'bg-purple-50 text-purple-700 border border-purple-200'
                          : 'bg-amber-50 text-amber-800 border border-amber-200'
                      }`}>
                        {b.leadMargin < 0 ? `${b.leadMargin} Deficit` : b.leadMargin === 0 ? 'DEADLOCK TIE' : `+${b.leadMargin} Lead`}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-[#1D1D1F] line-clamp-2 leading-snug">
                      {b.stationName}
                    </h4>

                    <div className="mt-4 pt-3 border-t border-[#F0F0F2] space-y-1.5 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-[#6E6E73]">C. Vijayabaskar:</span>
                        <span className="font-mono font-bold text-[#1D1D1F]">{b.vijayabaskarVotes} ({b.vijayabaskarPct}%)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#6E6E73]">Top Opponent ({b.topOpponentName.split('.')[0]}):</span>
                        <span className="font-mono font-bold text-[#1D1D1F]">{b.topOpponentVotes}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#6E6E73]">Turnout:</span>
                        <span className="font-mono font-semibold text-[#1D1D1F]">{b.turnoutPct}% ({b.polled}/{b.electors})</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#6E6E73]">Classification:</span>
                        <span className="font-semibold text-[#0066CC]">{b.tierCode} ({b.relativeDiffPct}% diff)</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-2.5 border-t border-[#F0F0F2] text-[11px] font-semibold text-[#0066CC] flex items-center justify-between">
                    <span>View full booth drilldown</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: ROUND-BY-ROUND PROGRESSION (ROUNDS 1 TO 20) */}
        {activeTab === 'rounds' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-extrabold text-[#1D1D1F] tracking-tight">
                Round-by-Round Tabulation Summary (Rounds 1 to 20 + Postal)
              </h3>
              <p className="text-sm text-[#6E6E73] mt-0.5">
                Each round covers 14 consecutive polling stations (Round 20 covers 10 booths). Verified EVM counting sequence.
              </p>
            </div>

            {/* Rounds Table */}
            <div className="bg-white rounded-3xl border border-[#E5E5EA] shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#FBFBFD] border-b border-[#E5E5EA] text-[#6E6E73] font-bold uppercase text-[10px] tracking-wider">
                    <tr>
                      <th className="py-3 px-4">Round</th>
                      <th className="py-3 px-3">Booths</th>
                      <th className="py-3 px-3 text-right">Polled</th>
                      <th className="py-3 px-3 text-right">Turnout</th>
                      <th className="py-3 px-3 text-right text-[#0066CC]">Vijayabaskar</th>
                      <th className="py-3 px-3 text-right text-amber-700">Murugesan</th>
                      <th className="py-3 px-3 text-right text-rose-700">Chellapandiyan</th>
                      <th className="py-3 px-3 text-right text-emerald-700">Sathyalakshmi</th>
                      <th className="py-3 px-3 text-center">Runner-Up</th>
                      <th className="py-3 px-3 text-right text-emerald-700">Round Net</th>
                      <th className="py-3 px-4 text-right font-bold text-[#1D1D1F]">Cumulative Lead</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5E5EA]">
                    {roundSummaries.map((r, idx) => (
                      <tr key={idx} className="hover:bg-blue-50/30 transition-colors">
                        <td className="py-3 px-4 font-bold text-[#1D1D1F] font-mono">{r.roundNo}</td>
                        <td className="py-3 px-3 text-[#6E6E73]">{r.boothsCovered}</td>
                        <td className="py-3 px-3 text-right font-mono">{r.polled.toLocaleString('en-IN')}</td>
                        <td className="py-3 px-3 text-right font-mono">{r.turnoutPct}%</td>
                        <td className="py-3 px-3 text-right font-mono font-bold text-[#0066CC]">
                          {r.vijayabaskarVotes.toLocaleString('en-IN')} <span className="text-[10px] font-normal text-[#86868B]">({r.vijayabaskarPct}%)</span>
                        </td>
                        <td className="py-3 px-3 text-right font-mono text-amber-700">
                          {r.murugesanVotes.toLocaleString('en-IN')}
                        </td>
                        <td className="py-3 px-3 text-right font-mono text-rose-700">
                          {r.chellapandiyanVotes.toLocaleString('en-IN')}
                        </td>
                        <td className="py-3 px-3 text-right font-mono text-emerald-700">
                          {r.sathyalakshmiVotes.toLocaleString('en-IN')}
                        </td>
                        <td className="py-3 px-3 text-center">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            r.roundRunnerUp.includes('MURUGESAN')
                              ? 'bg-amber-50 text-amber-800 border border-amber-200'
                              : 'bg-rose-50 text-rose-800 border border-rose-200'
                          }`}>
                            {r.roundRunnerUp.includes('MURUGESAN') ? 'TVK Murugesan' : 'DMK Chellapandiyan'}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-right font-mono font-bold text-emerald-700">
                          +{r.roundNetMargin.toLocaleString('en-IN')}
                        </td>
                        <td className="py-3 px-4 text-right font-mono font-bold text-[#1D1D1F]">
                          {r.cumulativeVotes.toLocaleString('en-IN')}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: ALL 276 BOOTHS MASTER TABLE & DATA EXPLORER */}
        {activeTab === 'all-booths' && (
          <div className="space-y-6">
            {/* Filter & Search Bar */}
            <div className="p-5 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                {/* Search */}
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-[#86868B] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by booth number, school name, village, or winner..."
                    className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA] text-sm focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC] outline-none"
                  />
                  {searchTerm && (
                    <button
                      type="button"
                      onClick={() => setSearchTerm('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#86868B] hover:text-[#1D1D1F]"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Filter selects */}
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <select
                    value={selectedTier}
                    onChange={(e) => setSelectedTier(e.target.value)}
                    className="px-3 py-2 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA] font-semibold text-[#1D1D1F] outline-none"
                  >
                    <option value="all">All Tiers (1 to 8)</option>
                    {tierSummaries.map(t => (
                      <option key={t.tierCode} value={t.tierCode}>{t.tierCode}: {t.classification}</option>
                    ))}
                  </select>

                  <select
                    value={selectedWinner}
                    onChange={(e) => setSelectedWinner(e.target.value)}
                    className="px-3 py-2 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA] font-semibold text-[#1D1D1F] outline-none"
                  >
                    <option value="all">All Booth Winners</option>
                    <option value="VIJAYABASKAR">Vijayabaskar Won (259)</option>
                    <option value="MURUGESAN">TVK Murugesan Won (6)</option>
                    <option value="CHELLAPANDIYAN">DMK Chellapandiyan Won (10)</option>
                    <option value="TIE">Tied Booth (1)</option>
                  </select>

                  <button
                    type="button"
                    onClick={handleExportCSV}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#1D1D1F] text-white font-bold hover:bg-black transition-colors"
                  >
                    <FileSpreadsheet className="w-3.5 h-3.5" />
                    <span>CSV</span>
                  </button>
                </div>
              </div>

              {/* Status info */}
              <div className="flex items-center justify-between text-xs text-[#6E6E73] pt-2 border-t border-[#F0F0F2]">
                <span>Showing <strong>{filteredBooths.length}</strong> of 276 Polling Stations</span>
                {(searchTerm || selectedTier !== 'all' || selectedWinner !== 'all') && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedTier('all');
                      setSelectedWinner('all');
                      setSelectedSlab('all');
                    }}
                    className="text-[#0066CC] font-bold hover:underline"
                  >
                    Reset all filters
                  </button>
                )}
              </div>
            </div>

            {/* Master Table */}
            <div className="bg-white rounded-3xl border border-[#E5E5EA] shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#FBFBFD] border-b border-[#E5E5EA] text-[#6E6E73] font-bold uppercase text-[10px] tracking-wider">
                    <tr>
                      <th
                        onClick={() => toggleSort('boothNo')}
                        className="py-3 px-4 cursor-pointer hover:text-[#1D1D1F]"
                      >
                        <div className="flex items-center gap-1">
                          <span>Booth</span>
                          <ArrowUpDown className="w-3 h-3" />
                        </div>
                      </th>
                      <th className="py-3 px-3">Location & Polling Station</th>
                      <th
                        onClick={() => toggleSort('turnoutPct')}
                        className="py-3 px-3 text-right cursor-pointer hover:text-[#1D1D1F]"
                      >
                        <div className="flex items-center justify-end gap-1">
                          <span>Turnout</span>
                          <ArrowUpDown className="w-3 h-3" />
                        </div>
                      </th>
                      <th
                        onClick={() => toggleSort('vijayabaskarPct')}
                        className="py-3 px-3 text-right text-[#0066CC] cursor-pointer hover:text-[#1D1D1F]"
                      >
                        <div className="flex items-center justify-end gap-1">
                          <span>Vijayabaskar</span>
                          <ArrowUpDown className="w-3 h-3" />
                        </div>
                      </th>
                      <th className="py-3 px-3 text-right text-amber-700">Murugesan</th>
                      <th className="py-3 px-3 text-right text-rose-700">Chellapandiyan</th>
                      <th className="py-3 px-3 text-right text-emerald-700">NTK</th>
                      <th
                        onClick={() => toggleSort('leadMargin')}
                        className="py-3 px-3 text-right cursor-pointer hover:text-[#1D1D1F]"
                      >
                        <div className="flex items-center justify-end gap-1">
                          <span>Margin</span>
                          <ArrowUpDown className="w-3 h-3" />
                        </div>
                      </th>
                      <th
                        onClick={() => toggleSort('relativeDiffPct')}
                        className="py-3 px-3 text-right cursor-pointer hover:text-[#1D1D1F]"
                      >
                        <div className="flex items-center justify-end gap-1">
                          <span>Advantage %</span>
                          <ArrowUpDown className="w-3 h-3" />
                        </div>
                      </th>
                      <th className="py-3 px-4 text-center">Tier</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5E5EA]">
                    {filteredBooths.map((b) => (
                      <tr
                        key={b.boothNo}
                        onClick={() => setSelectedBooth(b)}
                        className="hover:bg-blue-50/30 cursor-pointer transition-colors"
                      >
                        <td className="py-3 px-4 font-mono font-bold text-[#1D1D1F]">
                          #{b.boothNo}
                        </td>
                        <td className="py-3 px-3 max-w-xs">
                          <div className="font-semibold text-[#1D1D1F] line-clamp-1">{b.stationName}</div>
                          <div className="text-[10px] text-[#86868B] font-mono">Round {b.roundNo} · {b.electors} Electors</div>
                        </td>
                        <td className="py-3 px-3 text-right font-mono font-semibold">
                          {b.turnoutPct}%
                        </td>
                        <td className="py-3 px-3 text-right font-mono font-bold text-[#0066CC]">
                          {b.vijayabaskarVotes} <span className="text-[10px] font-normal text-[#86868B]">({b.vijayabaskarPct}%)</span>
                        </td>
                        <td className="py-3 px-3 text-right font-mono text-amber-800">
                          {b.murugesanVotes}
                        </td>
                        <td className="py-3 px-3 text-right font-mono text-rose-800">
                          {b.chellapandiyanVotes}
                        </td>
                        <td className="py-3 px-3 text-right font-mono text-emerald-800">
                          {b.sathyalakshmiVotes}
                        </td>
                        <td className="py-3 px-3 text-right font-mono font-bold">
                          <span className={`px-2 py-0.5 rounded ${
                            b.leadMargin > 0
                              ? 'bg-emerald-50 text-emerald-700'
                              : b.leadMargin === 0
                              ? 'bg-purple-50 text-purple-700'
                              : 'bg-rose-50 text-rose-700'
                          }`}>
                            {b.leadMargin > 0 ? `+${b.leadMargin}` : b.leadMargin}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-right font-mono font-semibold">
                          {b.relativeDiffPct}%
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-[#4B5563]">
                            {b.tierCode}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Booth Detail Modal */}
      {selectedBooth && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#E5E5EA] space-y-6">
            <div className="flex items-start justify-between pb-4 border-b border-[#E5E5EA]">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm font-extrabold px-3 py-1 rounded-full bg-blue-50 text-[#0066CC] border border-blue-200">
                    Booth #{selectedBooth.boothNo}
                  </span>
                  <span className="text-xs font-mono text-[#86868B]">Round {selectedBooth.roundNo}</span>
                </div>
                <h3 className="text-lg font-bold text-[#1D1D1F] mt-2 leading-snug">
                  {selectedBooth.stationName}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedBooth(null)}
                className="w-8 h-8 rounded-full bg-[#F5F5F7] hover:bg-[#E5E5EA] flex items-center justify-center text-[#6E6E73]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Candidate Votes in this Booth */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#86868B]">
                Polling Station Vote Breakdown
              </span>

              <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-200 flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-[#0066CC]">C. VIJAYABASKAR (AIADMK)</div>
                  <div className="text-xs text-[#6E6E73]">{selectedBooth.vijayabaskarPct}% of total polled</div>
                </div>
                <div className="text-right font-mono font-extrabold text-xl text-[#0066CC]">
                  {selectedBooth.vijayabaskarVotes}
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-200 flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-amber-900">P. MURUGESAN (TVK)</div>
                  <div className="text-xs text-[#6E6E73]">{selectedBooth.murugesanPct}% of total polled</div>
                </div>
                <div className="text-right font-mono font-bold text-lg text-amber-900">
                  {selectedBooth.murugesanVotes}
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-rose-50/60 border border-rose-200 flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-rose-900">K.K. CHELLAPANDIYAN (DMK)</div>
                  <div className="text-xs text-[#6E6E73]">{selectedBooth.chellapandiyanPct}% of total polled</div>
                </div>
                <div className="text-right font-mono font-bold text-lg text-rose-900">
                  {selectedBooth.chellapandiyanVotes}
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-200 flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-emerald-900">K. SATHYALAKSHMI (NTK)</div>
                  <div className="text-xs text-[#6E6E73]">{selectedBooth.sathyalakshmiPct}% of total polled</div>
                </div>
                <div className="text-right font-mono font-bold text-lg text-emerald-900">
                  {selectedBooth.sathyalakshmiVotes}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs flex justify-between">
                  <span className="text-[#6E6E73]">NOTA:</span>
                  <span className="font-mono font-bold text-[#1D1D1F]">{selectedBooth.notaVotes}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs flex justify-between">
                  <span className="text-[#6E6E73]">Other Candidates:</span>
                  <span className="font-mono font-bold text-[#1D1D1F]">{selectedBooth.othersVotes}</span>
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="p-4 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA] grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-[#86868B]">Assigned Electors:</span>
                <div className="font-bold font-mono text-sm text-[#1D1D1F]">{selectedBooth.electors}</div>
              </div>
              <div>
                <span className="text-[#86868B]">Total Votes Polled:</span>
                <div className="font-bold font-mono text-sm text-[#1D1D1F]">{selectedBooth.polled} ({selectedBooth.turnoutPct}%)</div>
              </div>
              <div>
                <span className="text-[#86868B]">Net Margin:</span>
                <div className={`font-bold font-mono text-sm ${selectedBooth.leadMargin >= 0 ? 'text-emerald-700' : 'text-rose-700'}`}>
                  {selectedBooth.leadMargin >= 0 ? `+${selectedBooth.leadMargin}` : selectedBooth.leadMargin}
                </div>
              </div>
              <div>
                <span className="text-[#86868B]">Strength Tier:</span>
                <div className="font-bold text-[#0066CC]">{selectedBooth.tierName}</div>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={() => setSelectedBooth(null)}
                className="px-5 py-2 rounded-xl bg-[#1D1D1F] text-white text-xs font-bold hover:bg-black transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
