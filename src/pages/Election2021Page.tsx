import React, { useState, useMemo } from 'react';
import { booths2021Data, Booth2021Record } from '../data/election2021Data';
import { ConstituencyNav, NavPageId } from '../components/ConstituencyNav';
import {
  Search,
  ArrowUpDown,
  X,
  Award,
  TrendingUp,
  Building,
  CheckCircle2,
  Info
} from 'lucide-react';

interface Election2021PageProps {
  onNavigate: (page: NavPageId) => void;
}

export const Election2021Page: React.FC<Election2021PageProps> = ({ onNavigate }) => {
  const [activeSection, setActiveSection] = useState<string>('glance');
  const [searchTerm, setSearchTerm] = useState('');
  const [winnerFilter, setWinnerFilter] = useState<'all' | 'AIADMK' | 'DMK'>('all');
  const [typeFilter, setTypeFilter] = useState<'all' | 'parent' | 'auxiliary'>('all');
  const [sortBy, setSortBy] = useState<'boothNo' | 'margin' | 'aiadmkVotes' | 'dmkVotes' | 'aiadmkPct'>('boothNo');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [selectedBooth, setSelectedBooth] = useState<Booth2021Record | null>(null);

  // Filtered and sorted booths
  const filteredBooths = useMemo(() => {
    return booths2021Data.filter(b => {
      const matchesSearch =
        searchTerm === '' ||
        b.boothNo.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesWinner =
        winnerFilter === 'all' || b.winner === winnerFilter;
      const matchesType =
        typeFilter === 'all' ||
        (typeFilter === 'auxiliary' && b.isAuxiliary) ||
        (typeFilter === 'parent' && !b.isAuxiliary);

      return matchesSearch && matchesWinner && matchesType;
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
  }, [searchTerm, winnerFilter, typeFilter, sortBy, sortOrder]);

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
      '2021 Booth No',
      'Is Auxiliary COVID Booth',
      'AIADMK Votes (C. Vijaya Basker)',
      'AIADMK %',
      'DMK Votes (Palaniappan)',
      'DMK %',
      'NTK Votes (Azhagu Meena P)',
      'NTK %',
      'AMMK Votes',
      'MNM Votes',
      'BSP Votes',
      'PT Votes',
      'Other Candidates',
      'NOTA',
      'Total Valid Votes',
      'Total Polled Votes',
      'Winner',
      'Winning Margin'
    ];

    const rows = booths2021Data.map(b => [
      b.serialNo,
      `"${b.boothNo}"`,
      b.isAuxiliary ? 'Yes' : 'No',
      b.aiadmkVotes,
      b.aiadmkPct,
      b.dmkVotes,
      b.dmkPct,
      b.ntkVotes,
      b.ntkPct,
      b.ammkVotes,
      b.mnmVotes,
      b.bspVotes,
      b.ptVotes,
      b.otherVotes,
      b.notaVotes,
      b.validVotes,
      b.polledVotes,
      `"${b.winner}"`,
      b.margin
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'Viralimalai_2021_Form20_Station_Data.csv');
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
        activePage="2021"
        onNavigate={onNavigate}
        onExportCSV={handleExportCSV}
        exportLabel="Export 2021 CSV"
        subtitle="308 Form 20 Polling Stations (253 Parent + 55 COVID Auxiliaries)"
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
              1. 2021 at a Glance
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
              onClick={() => scrollTo('section-covid')}
              className={`px-3 py-1 rounded-lg transition-all shrink-0 ${
                activeSection === 'covid' ? 'bg-[#1D1D1F] text-white' : 'text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7]'
              }`}
            >
              3. COVID-19 Aux Stations
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
              <span>5. Station Explorer (308 Booths)</span>
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
              <div className="inline-block px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-bold uppercase tracking-wider text-purple-700 mb-3">
                Tamil Nadu Legislative Assembly Election 2021
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F]">
                179 Viralimalai — 2021 Electoral Overview
              </h2>
              <p className="text-lg sm:text-xl text-[#4B5563] mt-2">
                Certified Polling-Station-Level Analysis of AIADMK’s Incumbency Consolidation
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-[#86868B] font-mono">
                <span>Form 20 Certified</span>
                <span>•</span>
                <span>308 Polling Stations</span>
                <span>•</span>
                <span>2,25,189 Electors</span>
                <span>•</span>
                <span>1,90,870 Total Votes Polled</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA] text-right shrink-0">
              <span className="text-xs uppercase font-bold text-[#86868B]">2021 Victory Margin</span>
              <div className="text-3xl font-extrabold font-mono text-[#0066CC] mt-1">
                +23,281
              </div>
              <div className="text-xs text-[#6E6E73] mt-0.5">
                12.23% of Total Valid Votes
              </div>
              <div className="mt-2 text-xs font-mono font-bold text-[#0066CC] bg-blue-50 px-2 py-0.5 rounded border border-blue-200 inline-block">
                Winner: C. Vijaya Basker (AIADMK)
              </div>
            </div>
          </div>

          {/* Strategic Context Callout */}
          <div className="p-5 rounded-2xl bg-purple-50/70 border border-purple-200 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-purple-700 shrink-0 mt-0.5" />
            <div className="text-sm text-[#1D1D1F] leading-relaxed space-y-1">
              <p>
                <strong>2021 Context:</strong> Even as Tamil Nadu witnessed a statewide change in government in May 2021, <strong>C. Vijaya Basker (AIADMK)</strong> significantly expanded his margin in Viralimalai. He captured <strong>1,00,817 votes (52.93%)</strong>, crossing the absolute 50% majority threshold for the first time.
              </p>
              <p className="text-xs text-[#4B5563]">
                While DMK’s Palaniappan retained a substantial raw vote base of <strong>77,536 votes (40.70%)</strong>, AIADMK won <strong>241 out of 308 Form 20 stations (78.2%)</strong>, expanding the victory margin from 8,447 to <strong>23,281 votes</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 1: 2021 AT A GLANCE */}
        <section id="section-glance" className="space-y-4 scroll-mt-24">
          <div className="border-b border-[#E5E5EA] pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0066CC]">Section 1</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight">
              Constituency Result at a Glance (2021)
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Valid Votes */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm flex flex-col justify-between">
              <span className="text-xs uppercase font-bold text-[#86868B] tracking-wider">Total Valid Votes</span>
              <div className="my-3">
                <div className="text-3xl font-extrabold font-mono text-[#1D1D1F]">1,90,486</div>
                <div className="text-xs text-[#6E6E73] mt-1 font-mono">1,90,870 Polled (incl NOTA)</div>
              </div>
              <div className="pt-3 border-t border-[#F0F0F2] text-xs text-[#86868B] font-mono">
                Total Electors: 2,25,189
              </div>
            </div>

            {/* Voter Turnout */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm flex flex-col justify-between">
              <span className="text-xs uppercase font-bold text-[#86868B] tracking-wider">Voter Turnout</span>
              <div className="my-3">
                <div className="text-3xl font-extrabold font-mono text-emerald-700">84.76%</div>
                <div className="text-xs text-[#6E6E73] mt-1 font-mono">+0.49% over 2016 (84.27%)</div>
              </div>
              <div className="pt-3 border-t border-[#F0F0F2] text-xs text-emerald-700 font-bold flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" /> ECI Pandemic Turnout
              </div>
            </div>

            {/* Winner's Votes */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm flex flex-col justify-between">
              <span className="text-xs uppercase font-bold text-[#86868B] tracking-wider">Winner (AIADMK)</span>
              <div className="my-3">
                <div className="text-3xl font-extrabold font-mono text-[#0066CC]">1,00,817</div>
                <div className="text-xs text-[#0066CC] mt-1 font-bold">52.93% Absolute Majority</div>
              </div>
              <div className="pt-3 border-t border-[#F0F0F2] text-xs text-[#6E6E73]">
                C. Vijaya Basker
              </div>
            </div>

            {/* Winning Margin */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm flex flex-col justify-between">
              <span className="text-xs uppercase font-bold text-[#86868B] tracking-wider">Winning Margin</span>
              <div className="my-3">
                <div className="text-3xl font-extrabold font-mono text-[#1D1D1F]">23,281</div>
                <div className="text-xs text-[#6E6E73] mt-1 font-mono">12.23% Lead over DMK</div>
              </div>
              <div className="pt-3 border-t border-[#F0F0F2] text-xs text-purple-700 font-bold">
                Margin Expanded by 2.75×
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: CANDIDATE RESULTS */}
        <section id="section-candidates" className="space-y-6 scroll-mt-24">
          <div className="border-b border-[#E5E5EA] pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0066CC]">Section 2</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight">
              Candidate Performance & Vote Share (2021)
            </h3>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm space-y-6">
            {/* Visual Vote Share Bar */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-extrabold text-sm text-[#1D1D1F]">2021 Valid Votes Distribution</span>
                <span className="font-mono text-[#6E6E73]">Total: 1,90,486</span>
              </div>
              <div className="h-8 w-full rounded-full bg-slate-100 flex overflow-hidden shadow-inner">
                <div style={{ width: '52.93%' }} className="bg-[#0066CC] h-full flex items-center justify-center text-xs text-white font-bold" title="AIADMK: 52.93%">
                  AIADMK: 52.9%
                </div>
                <div style={{ width: '40.70%' }} className="bg-rose-600 h-full flex items-center justify-center text-xs text-white font-bold" title="DMK: 40.70%">
                  DMK: 40.7%
                </div>
                <div style={{ width: '3.64%' }} className="bg-emerald-600 h-full" title="NTK: 3.64%" />
                <div style={{ width: '2.73%' }} className="bg-slate-300 h-full" title="Others/NOTA: 2.73%" />
              </div>
              <div className="flex flex-wrap gap-4 text-xs font-mono pt-1 text-[#6E6E73]">
                <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-[#0066CC]" /> AIADMK (52.93%)</div>
                <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-rose-600" /> DMK (40.70%)</div>
                <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-emerald-600" /> NTK (3.64%)</div>
                <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-slate-300" /> Others / NOTA (2.73%)</div>
              </div>
            </div>

            {/* Candidate Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200">
                <span className="text-xs font-bold uppercase text-[#0066CC]">AIADMK (Winner)</span>
                <div className="text-xl font-extrabold text-[#1D1D1F] mt-1">C. Vijaya Basker</div>
                <div className="mt-3 space-y-1 text-xs font-mono">
                  <div className="flex justify-between"><span>Total Votes:</span> <strong>1,00,817</strong></div>
                  <div className="flex justify-between"><span>Vote Share:</span> <strong>52.93%</strong></div>
                  <div className="flex justify-between border-t border-blue-200/60 pt-1 text-[#0066CC] font-bold">
                    <span>Net Gain:</span> <span>+16,116 vs 2016</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200">
                <span className="text-xs font-bold uppercase text-rose-700">DMK (Runner-Up)</span>
                <div className="text-xl font-extrabold text-[#1D1D1F] mt-1">Palaniappan</div>
                <div className="mt-3 space-y-1 text-xs font-mono">
                  <div className="flex justify-between"><span>Total Votes:</span> <strong>77,536</strong></div>
                  <div className="flex justify-between"><span>Vote Share:</span> <strong>40.70%</strong></div>
                  <div className="flex justify-between border-t border-rose-200/60 pt-1 text-rose-700 font-bold">
                    <span>Vote Gain:</span> <span>+1,282 votes</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                <span className="text-xs font-bold uppercase text-emerald-800">NTK</span>
                <div className="text-xl font-extrabold text-[#1D1D1F] mt-1">Azhagu Meena P</div>
                <div className="mt-3 space-y-1 text-xs font-mono">
                  <div className="flex justify-between"><span>Total Votes:</span> <strong>6,942</strong></div>
                  <div className="flex justify-between"><span>Vote Share:</span> <strong>3.64%</strong></div>
                  <div className="flex justify-between border-t border-emerald-200/60 pt-1 text-emerald-800 font-bold">
                    <span>Growth:</span> <span>8.5× over 2016 (815)</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold uppercase text-slate-700">NOTA / Other</span>
                <div className="text-xl font-extrabold text-[#1D1D1F] mt-1">NOTA + Ind</div>
                <div className="mt-3 space-y-1 text-xs font-mono">
                  <div className="flex justify-between"><span>NOTA:</span> <strong>384 (0.20%)</strong></div>
                  <div className="flex justify-between"><span>BSP (Alaguraja):</span> <strong>263 (0.14%)</strong></div>
                  <div className="flex justify-between border-t border-slate-200 pt-1 text-slate-700 font-bold">
                    <span>Others:</span> <span>4,544 (2.39%)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: COVID-19 AUX STATIONS ARCHITECTURE */}
        <section id="section-covid" className="space-y-6 scroll-mt-24">
          <div className="border-b border-[#E5E5EA] pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0066CC]">Section 3</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight">
              COVID-19 Auxiliary Polling Stations Architecture
            </h3>
            <p className="text-sm text-[#6E6E73] mt-0.5">
              Why the 2021 Form 20 recorded 308 polling station lines across 253 physical parent locations.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200">
                <span className="text-xs font-bold uppercase text-[#0066CC]">Total Form 20 Entries</span>
                <div className="text-3xl font-extrabold font-mono text-[#0066CC] mt-2">308</div>
                <p className="text-xs text-[#6E6E73] mt-1">
                  Individual counting sheets in 2021 Form 20
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200">
                <span className="text-xs font-bold uppercase text-emerald-800">Physical Parent Locations</span>
                <div className="text-3xl font-extrabold font-mono text-emerald-800 mt-2">253</div>
                <p className="text-xs text-[#6E6E73] mt-1">
                  Unique geographic school/station premises
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200">
                <span className="text-xs font-bold uppercase text-amber-800">Auxiliary Rooms (M/W)</span>
                <div className="text-3xl font-extrabold font-mono text-amber-800 mt-2">55</div>
                <p className="text-xs text-[#6E6E73] mt-1">
                  Split auxiliary booths created for social distancing
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA] flex items-start gap-3">
              <Info className="w-5 h-5 text-[#0066CC] shrink-0 mt-0.5" />
              <p className="text-xs text-[#4B5563] leading-relaxed">
                <strong>Methodological Guidance:</strong> During the May 2021 election conducted during the COVID-19 pandemic, the Election Commission of India capped electors at approximately 1,000 per polling station. This required creating 55 auxiliary booths designated with suffixes such as <strong>6(M) / 6A(W)</strong> or <strong>13(M) / 13A(W)</strong> within the same physical school campus. In the 2026 election, these temporary auxiliary bifurcations were consolidated into 276 standardized stations.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: KEY STRONGHOLDS */}
        <section id="section-strongholds" className="space-y-6 scroll-mt-24">
          <div className="border-b border-[#E5E5EA] pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0066CC]">Section 4</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight">
              Top 2021 Strongholds (AIADMK vs DMK)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Top 5 AIADMK */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-[#0066CC]">Top 5 AIADMK Leads (2021)</span>
                <Award className="w-4 h-4 text-[#0066CC]" />
              </div>
              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA] flex justify-between items-center">
                  <div>
                    <span className="font-extrabold text-sm text-[#1D1D1F]">Booth 245</span>
                    <div className="text-[11px] text-[#6E6E73]">AIADMK: 730 • DMK: 184</div>
                  </div>
                  <div className="text-right font-mono">
                    <span className="text-sm font-extrabold text-[#0066CC]">+546</span>
                    <div className="text-[10px] text-[#6E6E73]">77.7% Share</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA] flex justify-between items-center">
                  <div>
                    <span className="font-extrabold text-sm text-[#1D1D1F]">Booth 247</span>
                    <div className="text-[11px] text-[#6E6E73]">AIADMK: 686 • DMK: 151</div>
                  </div>
                  <div className="text-right font-mono">
                    <span className="text-sm font-extrabold text-[#0066CC]">+535</span>
                    <div className="text-[10px] text-[#6E6E73]">80.1% Share</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA] flex justify-between items-center">
                  <div>
                    <span className="font-extrabold text-sm text-[#1D1D1F]">Booth 246</span>
                    <div className="text-[11px] text-[#6E6E73]">AIADMK: 662 • DMK: 169</div>
                  </div>
                  <div className="text-right font-mono">
                    <span className="text-sm font-extrabold text-[#0066CC]">+493</span>
                    <div className="text-[10px] text-[#6E6E73]">77.9% Share</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA] flex justify-between items-center">
                  <div>
                    <span className="font-extrabold text-sm text-[#1D1D1F]">Booth 68</span>
                    <div className="text-[11px] text-[#6E6E73]">AIADMK: 647 • DMK: 201</div>
                  </div>
                  <div className="text-right font-mono">
                    <span className="text-sm font-extrabold text-[#0066CC]">+446</span>
                    <div className="text-[10px] text-[#6E6E73]">73.9% Share</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA] flex justify-between items-center">
                  <div>
                    <span className="font-extrabold text-sm text-[#1D1D1F]">Booth 127</span>
                    <div className="text-[11px] text-[#6E6E73]">AIADMK: 593 • DMK: 177</div>
                  </div>
                  <div className="text-right font-mono">
                    <span className="text-sm font-extrabold text-[#0066CC]">+416</span>
                    <div className="text-[10px] text-[#6E6E73]">75.3% Share</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Top 5 DMK */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-rose-700">Top 5 DMK Leads (2021)</span>
                <Award className="w-4 h-4 text-rose-700" />
              </div>
              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA] flex justify-between items-center">
                  <div>
                    <span className="font-extrabold text-sm text-[#1D1D1F]">Booth 170</span>
                    <div className="text-[11px] text-[#6E6E73]">DMK: 531 • AIADMK: 236</div>
                  </div>
                  <div className="text-right font-mono">
                    <span className="text-sm font-extrabold text-rose-700">+295</span>
                    <div className="text-[10px] text-[#6E6E73]">67.4% Share</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA] flex justify-between items-center">
                  <div>
                    <span className="font-extrabold text-sm text-[#1D1D1F]">Booth 146</span>
                    <div className="text-[11px] text-[#6E6E73]">DMK: 489 • AIADMK: 211</div>
                  </div>
                  <div className="text-right font-mono">
                    <span className="text-sm font-extrabold text-rose-700">+278</span>
                    <div className="text-[10px] text-[#6E6E73]">68.1% Share</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA] flex justify-between items-center">
                  <div>
                    <span className="font-extrabold text-sm text-[#1D1D1F]">Booth 102</span>
                    <div className="text-[11px] text-[#6E6E73]">DMK: 418 • AIADMK: 147</div>
                  </div>
                  <div className="text-right font-mono">
                    <span className="text-sm font-extrabold text-rose-700">+271</span>
                    <div className="text-[10px] text-[#6E6E73]">72.3% Share</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA] flex justify-between items-center">
                  <div>
                    <span className="font-extrabold text-sm text-[#1D1D1F]">Booth 54</span>
                    <div className="text-[11px] text-[#6E6E73]">DMK: 462 • AIADMK: 228</div>
                  </div>
                  <div className="text-right font-mono">
                    <span className="text-sm font-extrabold text-rose-700">+234</span>
                    <div className="text-[10px] text-[#6E6E73]">65.1% Share</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA] flex justify-between items-center">
                  <div>
                    <span className="font-extrabold text-sm text-[#1D1D1F]">Booth 187</span>
                    <div className="text-[11px] text-[#6E6E73]">DMK: 450 • AIADMK: 221</div>
                  </div>
                  <div className="text-right font-mono">
                    <span className="text-sm font-extrabold text-rose-700">+229</span>
                    <div className="text-[10px] text-[#6E6E73]">65.4% Share</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: INTERACTIVE 2021 STATION EXPLORER */}
        <section id="section-explorer" className="space-y-6 scroll-mt-24">
          <div className="border-b border-[#E5E5EA] pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0066CC]">Section 5</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight">
                2021 Form 20 Station Explorer (All 308 Polling Stations)
              </h3>
              <p className="text-sm text-[#6E6E73] mt-0.5">
                Exact certified vote totals from official Form 20. Click any station row for candidate breakdown modal.
              </p>
            </div>

            <div className="text-xs font-mono font-bold bg-[#F5F5F7] px-3 py-1.5 rounded-xl border border-[#E5E5EA] shrink-0">
              Showing {filteredBooths.length} of {booths2021Data.length} Stations
            </div>
          </div>

          {/* Search & Filter Controls */}
          <div className="p-5 rounded-2xl bg-white border border-[#E5E5EA] shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-[#86868B] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search booth no (e.g. 1, 6(M), 6A(W))..."
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
                All (308)
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
                AIADMK Won (241)
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
                DMK Won (67)
              </button>

              <span className="text-[#86868B] text-xs font-medium ml-3 mr-1">Type:</span>
              <button
                type="button"
                onClick={() => setTypeFilter('all')}
                className={`px-2.5 py-1.5 rounded-lg font-bold transition-all ${
                  typeFilter === 'all'
                    ? 'bg-slate-800 text-white'
                    : 'bg-[#F5F5F7] text-[#6E6E73] hover:text-[#1D1D1F]'
                }`}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setTypeFilter('parent')}
                className={`px-2.5 py-1.5 rounded-lg font-bold transition-all ${
                  typeFilter === 'parent'
                    ? 'bg-slate-800 text-white'
                    : 'bg-[#F5F5F7] text-[#6E6E73] hover:text-[#1D1D1F]'
                }`}
              >
                Parent (253)
              </button>
              <button
                type="button"
                onClick={() => setTypeFilter('auxiliary')}
                className={`px-2.5 py-1.5 rounded-lg font-bold transition-all ${
                  typeFilter === 'auxiliary'
                    ? 'bg-amber-600 text-white'
                    : 'bg-amber-50 text-amber-800 hover:bg-amber-100'
                }`}
              >
                Aux M/W (55)
              </button>
            </div>
          </div>

          {/* 2021 Master Table */}
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
                    <th className="py-3 px-3 text-center">Type</th>
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
                      <td className="py-2.5 px-3 text-center">
                        {b.isAuxiliary ? (
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-amber-100 text-amber-800 font-bold">
                            COVID Aux
                          </span>
                        ) : (
                          <span className="text-[10px] font-mono text-[#86868B]">
                            Parent
                          </span>
                        )}
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
                              : 'bg-rose-100 text-rose-700'
                          }`}
                        >
                          {b.winner}
                        </span>
                      </td>
                      <td className="py-2.5 px-3 text-right font-mono font-bold">
                        <span className={b.winner === 'AIADMK' ? 'text-[#0066CC]' : 'text-rose-700'}>
                          +{b.margin.toLocaleString('en-IN')}
                        </span>
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
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-[#0066CC]">
                    2021 Polling Station #{selectedBooth.boothNo}
                  </span>
                  {selectedBooth.isAuxiliary && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold">
                      COVID Auxiliary
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-extrabold text-[#1D1D1F] mt-1">
                  Form 20 Certified Station Record
                </h3>
                <div className="text-xs text-[#6E6E73]">
                  Serial No: {selectedBooth.serialNo} in official 2021 Form 20
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
                : 'bg-rose-50/70 border-rose-200'
            }`}>
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold uppercase tracking-wider text-[#6E6E73]">Station Outcome</span>
                <span className="font-mono font-bold text-xs">
                  Margin: +{selectedBooth.margin.toLocaleString('en-IN')} votes
                </span>
              </div>
              <div className="text-xl font-extrabold text-[#1D1D1F] mt-1">
                {selectedBooth.winner === 'AIADMK' ? 'C. Vijaya Basker (AIADMK) Led' : 'Palaniappan (DMK) Led'}
              </div>
              <div className="mt-2 text-xs flex justify-between font-mono">
                <span>AIADMK: {selectedBooth.aiadmkVotes} ({selectedBooth.aiadmkPct}%)</span>
                <span>DMK: {selectedBooth.dmkVotes} ({selectedBooth.dmkPct}%)</span>
              </div>
            </div>

            {/* Candidate Breakdown */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase text-[#86868B] tracking-wider">
                Full 2021 Candidate Vote Distribution
              </span>
              <div className="p-4 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA] space-y-2 text-xs font-mono">
                <div className="flex justify-between items-center">
                  <span className="font-sans font-bold text-[#1D1D1F]">C. Vijaya Basker (AIADMK):</span>
                  <strong className="text-[#0066CC]">{selectedBooth.aiadmkVotes} votes</strong>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-sans font-bold text-[#1D1D1F]">Palaniappan (DMK):</span>
                  <strong className="text-rose-700">{selectedBooth.dmkVotes} votes</strong>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-sans text-[#4B5563]">Azhagu Meena P (NTK):</span>
                  <span className="text-emerald-800">{selectedBooth.ntkVotes} votes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-sans text-[#4B5563]">Karthi Prabhakaran (AMMK):</span>
                  <span>{selectedBooth.ammkVotes} votes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-sans text-[#4B5563]">O Saravanan (MNM):</span>
                  <span>{selectedBooth.mnmVotes} votes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-sans text-[#4B5563]">Alaguraja V (BSP):</span>
                  <span>{selectedBooth.bspVotes} votes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-sans text-[#4B5563]">Arumugam P (PT):</span>
                  <span>{selectedBooth.ptVotes} votes</span>
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
            179 Viralimalai Assembly Constituency · 2021 General Election Report
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

export default Election2021Page;
