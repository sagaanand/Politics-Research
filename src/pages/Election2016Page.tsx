import React, { useState, useMemo } from 'react';
import { booths2016Data, Booth2016Record } from '../data/master3YData';
import { ConstituencyNav, NavPageId } from '../components/ConstituencyNav';
import {
  Search,
  ArrowUpDown,
  X,
  Award,
  TrendingUp,
  Building,
  CheckCircle2
} from 'lucide-react';

interface Election2016PageProps {
  onNavigate: (page: NavPageId) => void;
}

export const Election2016Page: React.FC<Election2016PageProps> = ({ onNavigate }) => {
  const [activeSection, setActiveSection] = useState<string>('glance');
  const [searchTerm, setSearchTerm] = useState('');
  const [winnerFilter, setWinnerFilter] = useState<'all' | 'AIADMK' | 'DMK' | 'Tied'>('all');
  const [sortBy, setSortBy] = useState<'boothNo' | 'margin' | 'aiadmkVotes' | 'dmkVotes' | 'aiadmkPct'>('boothNo');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [selectedBooth, setSelectedBooth] = useState<Booth2016Record | null>(null);

  // Filtered and sorted booths
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
    link.setAttribute('download', 'Viralimalai_2016_Form20_Station_Data.csv');
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
      {/* Global Universal Header */}
      <ConstituencyNav
        activePage="2016"
        onNavigate={onNavigate}
        onExportCSV={handleExportCSV}
        exportLabel="Export 2016 CSV"
        subtitle="251 Polling Stations · Form 20 Final Result Sheet"
      />

      {/* Sub Navigation Bar for Page Sections */}
      <div className="sticky top-16 z-30 bg-white/90 backdrop-blur-md border-b border-[#E5E5EA] shadow-xs no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none text-xs font-bold">
            <button
              type="button"
              onClick={() => scrollTo('section-glance')}
              className={`px-3 py-1 rounded-lg transition-all shrink-0 ${
                activeSection === 'glance' ? 'bg-[#1D1D1F] text-white' : 'text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7]'
              }`}
            >
              1. 2016 at a Glance
            </button>
            <button
              type="button"
              onClick={() => scrollTo('section-candidates')}
              className={`px-3 py-1 rounded-lg transition-all shrink-0 ${
                activeSection === 'candidates' ? 'bg-[#1D1D1F] text-white' : 'text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7]'
              }`}
            >
              2. Candidate Results
            </button>
            <button
              type="button"
              onClick={() => scrollTo('section-dominance')}
              className={`px-3 py-1 rounded-lg transition-all shrink-0 ${
                activeSection === 'dominance' ? 'bg-[#1D1D1F] text-white' : 'text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7]'
              }`}
            >
              3. Booth Dominance
            </button>
            <button
              type="button"
              onClick={() => scrollTo('section-strongholds')}
              className={`px-3 py-1 rounded-lg transition-all shrink-0 ${
                activeSection === 'strongholds' ? 'bg-[#1D1D1F] text-white' : 'text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7]'
              }`}
            >
              4. Key Strongholds
            </button>
            <button
              type="button"
              onClick={() => scrollTo('section-explorer')}
              className={`px-3 py-1 rounded-lg transition-all shrink-0 flex items-center gap-1.5 ${
                activeSection === 'explorer' ? 'bg-[#0066CC] text-white' : 'bg-blue-50 text-[#0066CC]'
              }`}
            >
              <Building className="w-3.5 h-3.5" />
              <span>5. Station Explorer (251 Booths)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Page Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        {/* HERO TITLE & SYNTHESIS */}
        <div className="bg-white rounded-3xl border border-[#E5E5EA] p-6 sm:p-10 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#E5E5EA]">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-[#0066CC] mb-3">
                Tamil Nadu Legislative Assembly Election 2016
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F]">
                179 Viralimalai — 2016 Electoral Overview
              </h2>
              <p className="text-lg sm:text-xl text-[#4B5563] mt-2">
                Certified Polling-Station-Level Analysis of the 2016 Bipolar Contest
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-[#86868B] font-mono">
                <span>Form 20 Certified</span>
                <span>•</span>
                <span>251 Polling Stations</span>
                <span>•</span>
                <span>2,02,448 Electors</span>
                <span>•</span>
                <span>1,70,608 Total Votes Polled</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA] text-right shrink-0">
              <span className="text-xs uppercase font-bold text-[#86868B]">2016 Victory Margin</span>
              <div className="text-3xl font-extrabold font-mono text-[#0066CC] mt-1">
                +8,447
              </div>
              <div className="text-xs text-[#6E6E73] mt-0.5">
                4.96% of Total Valid Votes
              </div>
              <div className="mt-2 text-xs font-mono font-bold text-[#0066CC] bg-blue-50 px-2 py-0.5 rounded border border-blue-200 inline-block">
                Winner: C. Vijayabaskar (AIADMK)
              </div>
            </div>
          </div>

          {/* Strategic Context Callout */}
          <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#0066CC] shrink-0 mt-0.5" />
            <div className="text-sm text-[#1D1D1F] leading-relaxed space-y-1">
              <p>
                <strong>2016 Context:</strong> The 2016 election in Viralimalai was a tightly fought, classic two-horse clash between incumbent <strong>C. Vijayabaskar (AIADMK)</strong> and <strong>M. Palaniappan (DMK)</strong>. Vijayabaskar secured victory with <strong>84,701 votes (49.69%)</strong> against Palaniappan’s <strong>76,254 votes (44.74%)</strong>, separated by <strong>8,447 votes</strong>.
              </p>
              <p className="text-xs text-[#4B5563]">
                DMK won 90 polling stations across the constituency (35.9% of all booths), giving them a strong geographic presence that AIADMK would progressively erode over the next two elections.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 1: 2016 AT A GLANCE */}
        <section id="section-glance" className="space-y-4 scroll-mt-24">
          <div className="border-b border-[#E5E5EA] pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0066CC]">Section 1</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight">
              Constituency Result at a Glance (2016)
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Valid Votes */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm flex flex-col justify-between">
              <span className="text-xs uppercase font-bold text-[#86868B] tracking-wider">Total Valid Votes</span>
              <div className="my-3">
                <div className="text-3xl font-extrabold font-mono text-[#1D1D1F]">1,70,448</div>
                <div className="text-xs text-[#6E6E73] mt-1 font-mono">1,69,961 EVM + 487 Postal</div>
              </div>
              <div className="pt-3 border-t border-[#F0F0F2] text-xs text-[#86868B] font-mono">
                Total Electors: 2,02,448
              </div>
            </div>

            {/* Voter Turnout */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm flex flex-col justify-between">
              <span className="text-xs uppercase font-bold text-[#86868B] tracking-wider">Voter Turnout</span>
              <div className="my-3">
                <div className="text-3xl font-extrabold font-mono text-emerald-700">84.27%</div>
                <div className="text-xs text-[#6E6E73] mt-1 font-mono">1,70,608 Total Polled Votes</div>
              </div>
              <div className="pt-3 border-t border-[#F0F0F2] text-xs text-emerald-700 font-bold flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" /> High Rural Participation
              </div>
            </div>

            {/* Winner's Votes */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm flex flex-col justify-between">
              <span className="text-xs uppercase font-bold text-[#86868B] tracking-wider">Winner (AIADMK)</span>
              <div className="my-3">
                <div className="text-3xl font-extrabold font-mono text-[#0066CC]">84,701</div>
                <div className="text-xs text-[#0066CC] mt-1 font-bold">49.69% Vote Share</div>
              </div>
              <div className="pt-3 border-t border-[#F0F0F2] text-xs text-[#6E6E73]">
                C. Vijayabaskar
              </div>
            </div>

            {/* Winning Margin */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm flex flex-col justify-between">
              <span className="text-xs uppercase font-bold text-[#86868B] tracking-wider">Winning Margin</span>
              <div className="my-3">
                <div className="text-3xl font-extrabold font-mono text-[#1D1D1F]">8,447</div>
                <div className="text-xs text-[#6E6E73] mt-1 font-mono">4.96% Lead over DMK</div>
              </div>
              <div className="pt-3 border-t border-[#F0F0F2] text-xs text-[#0066CC] font-bold">
                Competitive Bipolar Finish
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: CANDIDATE RESULTS */}
        <section id="section-candidates" className="space-y-6 scroll-mt-24">
          <div className="border-b border-[#E5E5EA] pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0066CC]">Section 2</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight">
              Candidate Performance & Vote Share (2016)
            </h3>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm space-y-6">
            {/* Visual Vote Share Bar */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-extrabold text-sm text-[#1D1D1F]">2016 Valid Votes Distribution</span>
                <span className="font-mono text-[#6E6E73]">Total: 1,70,448</span>
              </div>
              <div className="h-8 w-full rounded-full bg-slate-100 flex overflow-hidden shadow-inner">
                <div style={{ width: '49.69%' }} className="bg-[#0066CC] h-full flex items-center justify-center text-xs text-white font-bold" title="AIADMK: 49.69%">
                  AIADMK: 49.7%
                </div>
                <div style={{ width: '44.74%' }} className="bg-rose-600 h-full flex items-center justify-center text-xs text-white font-bold" title="DMK: 44.74%">
                  DMK: 44.7%
                </div>
                <div style={{ width: '1.75%' }} className="bg-amber-600 h-full" title="DMDK: 1.75%" />
                <div style={{ width: '0.48%' }} className="bg-emerald-600 h-full" title="NTK: 0.48%" />
                <div style={{ width: '3.34%' }} className="bg-slate-300 h-full" title="Others/NOTA: 3.34%" />
              </div>
              <div className="flex flex-wrap gap-4 text-xs font-mono pt-1 text-[#6E6E73]">
                <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-[#0066CC]" /> AIADMK (49.69%)</div>
                <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-rose-600" /> DMK (44.74%)</div>
                <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-amber-600" /> DMDK (1.75%)</div>
                <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-emerald-600" /> NTK (0.48%)</div>
                <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-slate-300" /> Others / NOTA (3.34%)</div>
              </div>
            </div>

            {/* Candidate Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200">
                <span className="text-xs font-bold uppercase text-[#0066CC]">AIADMK (Winner)</span>
                <div className="text-xl font-extrabold text-[#1D1D1F] mt-1">C. Vijayabaskar</div>
                <div className="mt-3 space-y-1 text-xs font-mono">
                  <div className="flex justify-between"><span>EVM Votes:</span> <strong>84,599</strong></div>
                  <div className="flex justify-between"><span>Postal:</span> <strong>102</strong></div>
                  <div className="flex justify-between border-t border-blue-200/60 pt-1 text-[#0066CC] font-bold">
                    <span>Total:</span> <span>84,701 (49.69%)</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200">
                <span className="text-xs font-bold uppercase text-rose-700">DMK (Runner-Up)</span>
                <div className="text-xl font-extrabold text-[#1D1D1F] mt-1">M. Palaniappan</div>
                <div className="mt-3 space-y-1 text-xs font-mono">
                  <div className="flex justify-between"><span>EVM Votes:</span> <strong>75,883</strong></div>
                  <div className="flex justify-between"><span>Postal:</span> <strong>371</strong></div>
                  <div className="flex justify-between border-t border-rose-200/60 pt-1 text-rose-700 font-bold">
                    <span>Total:</span> <span>76,254 (44.74%)</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
                <span className="text-xs font-bold uppercase text-amber-800">DMDK</span>
                <div className="text-xl font-extrabold text-[#1D1D1F] mt-1">Karthikeyan R</div>
                <div className="mt-3 space-y-1 text-xs font-mono">
                  <div className="flex justify-between"><span>EVM Votes:</span> <strong>2,975</strong></div>
                  <div className="flex justify-between"><span>Postal:</span> <strong>4</strong></div>
                  <div className="flex justify-between border-t border-amber-200/60 pt-1 text-amber-900 font-bold">
                    <span>Total:</span> <span>2,979 (1.75%)</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                <span className="text-xs font-bold uppercase text-emerald-800">NTK</span>
                <div className="text-xl font-extrabold text-[#1D1D1F] mt-1">Sridhar K</div>
                <div className="mt-3 space-y-1 text-xs font-mono">
                  <div className="flex justify-between"><span>EVM Votes:</span> <strong>813</strong></div>
                  <div className="flex justify-between"><span>Postal:</span> <strong>2</strong></div>
                  <div className="flex justify-between border-t border-emerald-200/60 pt-1 text-emerald-800 font-bold">
                    <span>Total:</span> <span>815 (0.48%)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: BOOTH DOMINANCE */}
        <section id="section-dominance" className="space-y-6 scroll-mt-24">
          <div className="border-b border-[#E5E5EA] pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0066CC]">Section 3</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight">
              2016 Booth-Level Dominance Breakdown
            </h3>
            <p className="text-sm text-[#6E6E73] mt-0.5">
              Out of 251 polling stations, AIADMK won 158 stations, DMK won 90 stations, and 3 stations were tied.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-blue-50/60 border border-blue-200 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-[#0066CC]">AIADMK Leads</span>
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-blue-100 text-[#0066CC]">62.9% Share</span>
              </div>
              <div className="text-4xl font-extrabold font-mono text-[#0066CC] mt-3">158</div>
              <div className="text-xs text-[#6E6E73] mt-1">Booths won across 251 stations</div>
              <div className="mt-4 pt-3 border-t border-blue-200/60 text-xs text-[#0066CC] font-bold">
                EVM Votes: 84,599 (50.0%)
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-rose-50/60 border border-rose-200 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-rose-700">DMK Leads</span>
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-rose-100 text-rose-700">35.9% Share</span>
              </div>
              <div className="text-4xl font-extrabold font-mono text-rose-700 mt-3">90</div>
              <div className="text-xs text-[#6E6E73] mt-1">Booths won across 251 stations</div>
              <div className="mt-4 pt-3 border-t border-rose-200/60 text-xs text-rose-700 font-bold">
                EVM Votes: 75,883 (44.6%)
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-slate-700">Dead Heats (Ties)</span>
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-700">1.2% Share</span>
              </div>
              <div className="text-4xl font-extrabold font-mono text-slate-700 mt-3">3</div>
              <div className="text-xs text-[#6E6E73] mt-1">Booths with exactly equal votes</div>
              <div className="mt-4 pt-3 border-t border-slate-200 text-xs text-slate-600 font-mono">
                Booths: 15, 60, 114
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: KEY STRONGHOLDS */}
        <section id="section-strongholds" className="space-y-6 scroll-mt-24">
          <div className="border-b border-[#E5E5EA] pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0066CC]">Section 4</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight">
              Top 2016 Strongholds (AIADMK vs DMK)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Top 5 AIADMK */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-[#0066CC]">Top 5 AIADMK Leads (2016)</span>
                <Award className="w-4 h-4 text-[#0066CC]" />
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

            {/* Top 5 DMK */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-rose-700">Top 5 DMK Leads (2016)</span>
                <Award className="w-4 h-4 text-rose-700" />
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

        {/* SECTION 5: INTERACTIVE 2016 STATION EXPLORER */}
        <section id="section-explorer" className="space-y-6 scroll-mt-24">
          <div className="border-b border-[#E5E5EA] pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0066CC]">Section 5</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight">
                2016 Form 20 Station Explorer (All 251 Polling Stations)
              </h3>
              <p className="text-sm text-[#6E6E73] mt-0.5">
                Exact certified vote totals from official Form 20. Click any station row for candidate breakdown modal.
              </p>
            </div>

            <div className="text-xs font-mono font-bold bg-[#F5F5F7] px-3 py-1.5 rounded-xl border border-[#E5E5EA] shrink-0">
              Showing {filteredBooths.length} of {booths2016Data.length} Stations
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
            179 Viralimalai Assembly Constituency · 2016 General Election Report
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

export default Election2016Page;
