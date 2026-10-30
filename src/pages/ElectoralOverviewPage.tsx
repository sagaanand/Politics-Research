import React, { useState, useMemo } from 'react';
import {
  all276Booths,
  tierSummaries,
  roundSummaries,
  top8Strongholds,
  localityCoverage,
  mathurClusterBooths,
  mukkannamalaipattiClusterBooths,
  BoothRecord
} from '../data/boothAnalysisData';
import {
  Search,
  ArrowUpDown,
  Award,
  X,
  FileSpreadsheet,
  CheckCircle2
} from 'lucide-react';
import { ConstituencyNav, NavPageId } from '../components/ConstituencyNav';

interface ElectoralOverviewPageProps {
  onNavigate?: (page: NavPageId) => void;
}

export const ElectoralOverviewPage: React.FC<ElectoralOverviewPageProps> = ({
  onNavigate
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArea, setSelectedArea] = useState<string>('all');
  const [selectedWinner, setSelectedWinner] = useState<string>('all');
  const [selectedTier, setSelectedTier] = useState<string>('all');
  const [selectedBooth, setSelectedBooth] = useState<BoothRecord | null>(null);
  const [activeSection, setActiveSection] = useState<string>('glance');
  const [isMathurExpanded, setIsMathurExpanded] = useState(true);
  const [isMukExpanded, setIsMukExpanded] = useState(true);

  // Sorting state for master table
  const [sortBy, setSortBy] = useState<'boothNo' | 'leadMargin' | 'turnoutPct' | 'vijayabaskarPct' | 'relativeDiffPct'>('boothNo');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  // Mathur cluster booths
  const mathurBooths = useMemo(() => {
    return all276Booths.filter(b => mathurClusterBooths.includes(b.boothNo));
  }, []);

  // Mukkannamalaipatti cluster booths
  const mukBooths = useMemo(() => {
    return all276Booths.filter(b => mukkannamalaipattiClusterBooths.includes(b.boothNo));
  }, []);

  // Filtered booths logic
  const filteredBooths = useMemo(() => {
    return all276Booths.filter(b => {
      const matchesSearch =
        searchTerm === '' ||
        b.boothNo.toString().includes(searchTerm) ||
        b.stationName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.winner.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.topOpponentName.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesWinner =
        selectedWinner === 'all' ||
        (selectedWinner === 'VIJAYABASKAR' && b.winner.includes('VIJAYABASKAR')) ||
        (selectedWinner === 'MURUGESAN' && b.winner.includes('MURUGESAN')) ||
        (selectedWinner === 'CHELLAPANDIYAN' && b.winner.includes('CHELLAPANDIYAN')) ||
        (selectedWinner === 'TIE' && b.winner.includes('TIE'));

      const matchesTier = selectedTier === 'all' || b.tierCode === selectedTier;

      let matchesArea = true;
      if (selectedArea !== 'all') {
        const foundLocality = localityCoverage.find(l => l.area === selectedArea);
        if (foundLocality) {
          matchesArea = foundLocality.booths.includes(b.boothNo);
        } else if (selectedArea === 'Mathur') {
          matchesArea = mathurClusterBooths.includes(b.boothNo);
        } else if (selectedArea === 'Mukkannamalaipatti') {
          matchesArea = mukkannamalaipattiClusterBooths.includes(b.boothNo);
        }
      }

      return matchesSearch && matchesWinner && matchesTier && matchesArea;
    }).sort((a, b) => {
      const aVal = a[sortBy];
      const bVal = b[sortBy];
      if (aVal < bVal) return sortOrder === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }, [searchTerm, selectedWinner, selectedTier, selectedArea, sortBy, sortOrder]);

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
    link.setAttribute('download', 'Viralimalai_2026_Complete_Electoral_Data.csv');
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

  const toggleSort = (field: 'boothNo' | 'leadMargin' | 'turnoutPct' | 'vijayabaskarPct' | 'relativeDiffPct') => {
    if (sortBy === field) {
      setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('desc');
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBFD] text-[#1D1D1F] flex flex-col font-sans print:bg-white print:text-black">
      {/* Global Universal Header */}
      <ConstituencyNav
        activePage="2026"
        onNavigate={onNavigate || (() => {})}
        onExportCSV={handleExportCSV}
        exportLabel="Download CSV"
        subtitle="276 Polling Stations · 20 Counting Rounds · Form 20 Reconciled"
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
              1. At a Glance
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
              onClick={() => scrollTo('section-geography')}
              className={`px-3 py-1 rounded-lg transition-all shrink-0 ${
                activeSection === 'geography' ? 'bg-[#1D1D1F] text-white' : 'text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7]'
              }`}
            >
              4. Geographic Pockets
            </button>
            <button
              type="button"
              onClick={() => scrollTo('section-tiers')}
              className={`px-3 py-1 rounded-lg transition-all shrink-0 ${
                activeSection === 'tiers' ? 'bg-[#1D1D1F] text-white' : 'text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7]'
              }`}
            >
              5. Relative Tiers
            </button>
            <button
              type="button"
              onClick={() => scrollTo('section-rounds')}
              className={`px-3 py-1 rounded-lg transition-all shrink-0 ${
                activeSection === 'rounds' ? 'bg-[#1D1D1F] text-white' : 'text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7]'
              }`}
            >
              6. Counting Rounds
            </button>
            <button
              type="button"
              onClick={() => scrollTo('section-data-quality')}
              className={`px-3 py-1 rounded-lg transition-all shrink-0 ${
                activeSection === 'data-quality' ? 'bg-[#1D1D1F] text-white' : 'text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7]'
              }`}
            >
              7. Data Checks
            </button>
            <button
              type="button"
              onClick={() => scrollTo('section-strategy')}
              className={`px-3 py-1 rounded-lg transition-all shrink-0 ${
                activeSection === 'strategy' ? 'bg-[#1D1D1F] text-white' : 'text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7]'
              }`}
            >
              8. Strategic Reading
            </button>
            <button
              type="button"
              onClick={() => scrollTo('section-explorer')}
              className={`px-3 py-1 rounded-lg transition-all shrink-0 flex items-center gap-1.5 ${
                activeSection === 'explorer' ? 'bg-[#0066CC] text-white' : 'bg-blue-50 text-[#0066CC]'
              }`}
            >
              <span>276 Booth Explorer</span>
              <span className="font-mono text-[10px] bg-white text-[#0066CC] px-1.5 py-0.2 rounded-full">276</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <main className="max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-12">
        {/* Document Header Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#E5E5EA]">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold uppercase tracking-wider text-[#0066CC] mb-3">
                Comprehensive Research Report
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1D1D1F]">
                Viralimalai Constituency 2026
              </h2>
              <p className="text-lg sm:text-xl text-[#4B5563] mt-2">
                Complete Electoral Overview & Booth-Level Performance Intelligence
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-[#86868B] font-mono">
                <span>Based on uploaded <code>Viralimalai_Const_2026.xlsx</code></span>
                <span>•</span>
                <span>276 Polling Stations</span>
                <span>•</span>
                <span>20 EVM Counting Rounds</span>
                <span>•</span>
                <span>Postal Ballots Included</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA] text-right shrink-0">
              <span className="text-xs uppercase font-bold text-[#86868B]">Winner Declared</span>
              <div className="text-2xl font-extrabold text-[#0066CC] mt-0.5">
                C. VIJAYABASKAR
              </div>
              <div className="text-xs font-semibold text-[#1D1D1F]">AIADMK · 51.87% Share</div>
              <div className="mt-2 text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 inline-block">
                +62,073 Net Win Margin
              </div>
            </div>
          </div>

          {/* Key Executive Takeaway Banner */}
          <div className="mt-6 p-4 rounded-2xl bg-blue-50/70 border border-blue-200 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#0066CC] shrink-0 mt-0.5" />
            <p className="text-sm text-[#1D1D1F] leading-relaxed">
              <strong>Executive Summary:</strong> C. Vijayabaskar crossed the absolute majority mark with <strong>51.87%</strong> of the total votes polled, winning <strong>259 out of 276 polling stations (93.8%)</strong>. The runner-up contest between TVK (43,700) and DMK (40,397) was separated by only <strong>3,303 votes</strong>, making the 2nd place fight substantially tighter than the overall victory margin.
            </p>
          </div>
        </div>

        {/* SECTION 1: CONSTITUENCY RESULT AT A GLANCE */}
        <section id="section-glance" className="space-y-4 scroll-mt-24">
          <div className="border-b border-[#E5E5EA] pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0066CC]">Section 1</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight">
              Constituency Result at a Glance
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* 1. Total Valid Votes */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold text-[#86868B] tracking-wider">
                  Total Valid Votes
                </span>
                <div className="text-4xl sm:text-5xl font-extrabold font-mono text-[#1D1D1F] mt-3">
                  2,03,921
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#F0F0F2] text-xs text-[#6E6E73]">
                2,02,151 EVM + 1,770 Valid Postal Ballots
              </div>
            </div>

            {/* 2. Voter Turnout */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold text-[#86868B] tracking-wider">
                  Voter Turnout
                </span>
                <div className="text-4xl sm:text-5xl font-extrabold font-mono text-emerald-700 mt-3">
                  90.60%
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#F0F0F2] text-xs text-[#6E6E73]">
                89.81% EVM turnout on 2,25,090 electors
              </div>
            </div>

            {/* 3. Winner's Votes */}
            <div className="p-6 rounded-3xl bg-blue-50/70 border border-blue-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold text-[#0066CC] tracking-wider">
                  Winner's Votes
                </span>
                <div className="text-4xl sm:text-5xl font-extrabold font-mono text-[#0066CC] mt-3">
                  1,05,773
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-blue-200/60 text-xs font-bold text-[#0066CC]">
                51.87% vote share (Absolute Majority)
              </div>
            </div>

            {/* 4. Winning Margin */}
            <div className="p-6 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold text-[#86868B] tracking-wider">
                  Winning Margin
                </span>
                <div className="text-4xl sm:text-5xl font-extrabold font-mono text-emerald-700 mt-3">
                  62,073
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#F0F0F2] text-xs text-[#6E6E73]">
                Votes over runner-up (P. Murugesan / TVK)
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: CANDIDATE-WISE RESULT */}
        <section id="section-candidates" className="space-y-6 scroll-mt-24">
          <div className="border-b border-[#E5E5EA] pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0066CC]">Section 2</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight">
              Candidate-Wise Result
            </h3>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm space-y-6">
            {/* Result Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#FBFBFD] border-b border-[#E5E5EA] text-[#6E6E73] font-bold uppercase text-xs tracking-wider">
                  <tr>
                    <th className="py-3 px-4">Candidate</th>
                    <th className="py-3 px-4">Party</th>
                    <th className="py-3 px-4 text-right font-mono">Total Votes</th>
                    <th className="py-3 px-4 text-right font-mono">Vote Share</th>
                    <th className="py-3 px-4 text-center">Booths Led</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E5EA]">
                  <tr className="bg-blue-50/40 font-bold">
                    <td className="py-3.5 px-4 text-[#0066CC] flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#0066CC]" />
                      <span>C. Vijayabaskar</span>
                    </td>
                    <td className="py-3.5 px-4 text-[#1D1D1F]">AIADMK</td>
                    <td className="py-3.5 px-4 text-right font-mono text-base text-[#0066CC]">1,05,773</td>
                    <td className="py-3.5 px-4 text-right font-mono text-[#0066CC]">51.87%</td>
                    <td className="py-3.5 px-4 text-center">
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-[#0066CC] font-mono">259</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FBFBFD]">
                    <td className="py-3 px-4 font-semibold text-[#1D1D1F]">P. Murugesan</td>
                    <td className="py-3 px-4 text-[#4B5563]">TVK</td>
                    <td className="py-3 px-4 text-right font-mono text-amber-900 font-bold">43,700</td>
                    <td className="py-3 px-4 text-right font-mono text-amber-900 font-bold">21.43%</td>
                    <td className="py-3 px-4 text-center">
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 font-mono font-bold">6</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FBFBFD]">
                    <td className="py-3 px-4 font-semibold text-[#1D1D1F]">K.K. Chellapandiyan</td>
                    <td className="py-3 px-4 text-[#4B5563]">DMK</td>
                    <td className="py-3 px-4 text-right font-mono text-rose-900 font-bold">40,397</td>
                    <td className="py-3 px-4 text-right font-mono text-rose-900 font-bold">19.81%</td>
                    <td className="py-3 px-4 text-center">
                      <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-900 font-mono font-bold">10</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-[#FBFBFD]">
                    <td className="py-3 px-4 text-[#4B5563]">K. Sathyalakshmi</td>
                    <td className="py-3 px-4 text-[#6E6E73]">NTK</td>
                    <td className="py-3 px-4 text-right font-mono text-emerald-900 font-semibold">9,467</td>
                    <td className="py-3 px-4 text-right font-mono text-emerald-900">4.64%</td>
                    <td className="py-3 px-4 text-center font-mono text-[#86868B]">0</td>
                  </tr>
                  <tr className="hover:bg-[#FBFBFD]">
                    <td className="py-3 px-4 text-[#6E6E73]">All Other 22 Candidates</td>
                    <td className="py-3 px-4 text-[#86868B]">Independents / Others</td>
                    <td className="py-3 px-4 text-right font-mono text-[#4B5563]">4,209</td>
                    <td className="py-3 px-4 text-right font-mono text-[#4B5563]">2.06%</td>
                    <td className="py-3 px-4 text-center font-mono text-[#86868B]">0</td>
                  </tr>
                  <tr className="hover:bg-[#FBFBFD]">
                    <td className="py-3 px-4 text-[#86868B]">NOTA</td>
                    <td className="py-3 px-4 text-[#86868B]">—</td>
                    <td className="py-3 px-4 text-right font-mono text-[#86868B]">375</td>
                    <td className="py-3 px-4 text-right font-mono text-[#86868B]">0.18%</td>
                    <td className="py-3 px-4 text-center font-mono text-[#86868B]">0</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Candidate Vote Share Visual Progress Bars */}
            <div className="pt-4 border-t border-[#E5E5EA] space-y-3">
              <div className="flex justify-between items-center text-xs font-bold text-[#86868B]">
                <span>Candidate Vote Share Visual Distribution</span>
                <span>Final valid votes, including postal ballots</span>
              </div>

              <div className="h-6 w-full rounded-full bg-slate-100 flex overflow-hidden shadow-inner">
                <div style={{ width: '51.87%' }} className="bg-[#0066CC] h-full flex items-center justify-center text-[10px] text-white font-bold" title="AIADMK: 51.87%">
                  51.9%
                </div>
                <div style={{ width: '21.43%' }} className="bg-amber-500 h-full flex items-center justify-center text-[10px] text-white font-bold" title="TVK: 21.43%">
                  21.4%
                </div>
                <div style={{ width: '19.81%' }} className="bg-rose-500 h-full flex items-center justify-center text-[10px] text-white font-bold" title="DMK: 19.81%">
                  19.8%
                </div>
                <div style={{ width: '4.64%' }} className="bg-emerald-500 h-full" title="NTK: 4.64%" />
                <div style={{ width: '2.06%' }} className="bg-slate-400 h-full" title="Others: 2.06%" />
                <div style={{ width: '0.19%' }} className="bg-slate-300 h-full" title="NOTA: 0.18%" />
              </div>

              <div className="flex flex-wrap items-center justify-between text-xs gap-3 pt-1">
                <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-[#0066CC]" /><span className="font-bold">AIADMK:</span> 51.87%</div>
                <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-amber-500" /><span className="font-bold">TVK:</span> 21.43%</div>
                <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-rose-500" /><span className="font-bold">DMK:</span> 19.81%</div>
                <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-emerald-500" /><span className="font-bold">NTK:</span> 4.64%</div>
                <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-slate-400" /><span className="font-bold">Others:</span> 2.06%</div>
                <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-slate-300" /><span className="font-bold">NOTA:</span> 0.18%</div>
              </div>
            </div>

            {/* Key Finding Callout */}
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs sm:text-sm text-amber-950 leading-relaxed">
              <strong>Key Finding:</strong> Vijayabaskar crossed the 50% vote-share mark. The TVK–DMK difference was only <strong>3,303 votes</strong> (43,700 vs 40,397), making the runner-up contest substantially closer than the winner's margin.
            </div>
          </div>
        </section>

        {/* SECTION 3: BOOTH-LEVEL DOMINANCE */}
        <section id="section-dominance" className="space-y-6 scroll-mt-24">
          <div className="border-b border-[#E5E5EA] pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0066CC]">Section 3</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight">
              Booth-Level Dominance
            </h3>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm space-y-6">
            <div>
              <h4 className="text-base font-bold text-[#1D1D1F]">
                Booth-Level Leaders by Candidate
              </h4>
              <p className="text-xs text-[#6E6E73] mt-0.5">
                Highest vote-getter among the four individually tracked candidates across 276 booths.
              </p>
            </div>

            {/* Dominance Bars */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200">
                <span className="text-xs font-bold uppercase text-[#0066CC]">C. Vijayabaskar (AIADMK)</span>
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-[#0066CC] mt-2">
                  259 <span className="text-base font-normal text-[#0066CC]/80">/ 276</span>
                </div>
                <div className="text-xs font-bold text-[#0066CC] mt-1">
                  93.84% of all booths
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-rose-50/70 border border-rose-200">
                <span className="text-xs font-bold uppercase text-rose-700">K.K. Chellapandiyan (DMK)</span>
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-rose-700 mt-2">
                  10 <span className="text-base font-normal text-rose-700/80">booths</span>
                </div>
                <div className="text-xs font-semibold text-rose-700 mt-1">
                  3.62% of all booths
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200">
                <span className="text-xs font-bold uppercase text-amber-800">P. Murugesan (TVK)</span>
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-amber-800 mt-2">
                  6 <span className="text-base font-normal text-amber-800/80">booths</span>
                </div>
                <div className="text-xs font-semibold text-amber-800 mt-1">
                  2.17% of all booths
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-purple-50/70 border border-purple-200">
                <span className="text-xs font-bold uppercase text-purple-800">Deadlock Tie</span>
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-purple-800 mt-2">
                  1 <span className="text-base font-normal text-purple-800/80">booth</span>
                </div>
                <div className="text-xs font-semibold text-purple-800 mt-1">
                  Booth #193 (356 - 356)
                </div>
              </div>
            </div>

            {/* Dominance Statement */}
            <div className="p-5 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA] space-y-2">
              <div className="text-lg font-extrabold text-[#1D1D1F]">
                259 out of 276 booths
              </div>
              <p className="text-sm text-[#4B5563] leading-relaxed">
                Vijayabaskar led in approximately <strong>93.8%</strong> of polling stations. The other 17 booths comprise <strong>10 Chellapandiyan leads</strong>, <strong>6 Murugesan leads</strong>, and <strong>1 tie</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: WHERE EACH CANDIDATE IS STRONG (GEOGRAPHICAL ANALYSIS) */}
        <section id="section-geography" className="space-y-8 scroll-mt-24">
          <div className="border-b border-[#E5E5EA] pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0066CC]">Section 4</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight">
              Where Each Candidate is Strong
            </h3>
            <p className="text-sm text-[#6E6E73] mt-0.5">
              This is the most important geographical part of the analysis.
            </p>
          </div>

          {/* 4.1 C. Vijayabaskar — Widespread Support */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#0066CC]" />
              <h4 className="text-xl font-bold text-[#1D1D1F]">
                C. Vijayabaskar — Widespread Support
              </h4>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Locality Coverage Table */}
              <div className="lg:col-span-6 space-y-3">
                <span className="text-xs font-bold uppercase text-[#86868B] tracking-wider">
                  Broad Constituency-Level Strength
                </span>
                <div className="overflow-x-auto rounded-2xl border border-[#E5E5EA]">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#FBFBFD] border-b border-[#E5E5EA] font-bold text-[#6E6E73]">
                      <tr>
                        <th className="py-2.5 px-3">Area</th>
                        <th className="py-2.5 px-3 text-right">Booths Led</th>
                        <th className="py-2.5 px-3 text-right">Coverage</th>
                        <th className="py-2.5 px-3 text-right">Lead %</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5E5EA]">
                      {localityCoverage.map((loc, idx) => (
                        <tr key={idx} className="hover:bg-blue-50/20">
                          <td className="py-2 px-3 font-semibold text-[#1D1D1F]">{loc.area}</td>
                          <td className="py-2 px-3 text-right font-mono font-bold text-[#0066CC]">{loc.boothsLed}</td>
                          <td className="py-2 px-3 text-right font-mono text-[#6E6E73]">{loc.totalBooths}</td>
                          <td className="py-2 px-3 text-right font-mono text-emerald-700 font-bold">
                            {Math.round((loc.boothsLed / loc.totalBooths) * 100)}%
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-[11px] text-[#86868B] italic">
                  Other notable areas with strong support include Rajalipatti, Rajagiri, Kodumbalur, Velur, and Avoor.
                </p>
              </div>

              {/* Strongest Individual Polling Stations */}
              <div className="lg:col-span-6 space-y-3">
                <span className="text-xs font-bold uppercase text-[#86868B] tracking-wider">
                  Strongest Individual Polling Stations
                </span>
                <div className="overflow-x-auto rounded-2xl border border-[#E5E5EA]">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#FBFBFD] border-b border-[#E5E5EA] font-bold text-[#6E6E73]">
                      <tr>
                        <th className="py-2.5 px-3">Booth</th>
                        <th className="py-2.5 px-3">Locality</th>
                        <th className="py-2.5 px-3 text-right font-mono">Votes</th>
                        <th className="py-2.5 px-3 text-right font-mono">Lead</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5E5EA]">
                      {top8Strongholds.map((st, idx) => (
                        <tr key={idx} className="hover:bg-blue-50/20">
                          <td className="py-2 px-3 font-mono font-bold text-[#0066CC]">#{st.boothNo}</td>
                          <td className="py-2 px-3 font-medium text-[#1D1D1F]">{st.locality}</td>
                          <td className="py-2 px-3 text-right font-mono font-bold text-[#1D1D1F]">{st.votes}</td>
                          <td className="py-2 px-3 text-right font-mono font-bold text-emerald-700">+{st.lead}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-[11px] text-[#86868B] italic">
                  These are strong individual polling-station margins, rather than estimates of support across entire villages.
                </p>
              </div>
            </div>
          </div>

          {/* 4.2 P. Murugesan (TVK) — Concentrated Pockets */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-500" />
              <h4 className="text-xl font-bold text-[#1D1D1F]">
                P. Murugesan (TVK) — Concentrated Pockets
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 text-xs">
                <span className="font-bold text-amber-900">Mathur</span>
                <div className="text-2xl font-extrabold font-mono text-amber-900 mt-1">4 Won <span className="text-xs font-normal">/ 6 Booths</span></div>
                <div className="text-[11px] text-amber-800 mt-0.5">Booths 26, 27, 28, 29</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
                <span className="font-bold text-[#1D1D1F]">Kumaramangalam</span>
                <div className="text-2xl font-extrabold font-mono text-[#1D1D1F] mt-1">1 Won <span className="text-xs font-normal">/ 3 Booths</span></div>
                <div className="text-[11px] text-[#6E6E73] mt-0.5">Booth #25 (305 vs 251)</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
                <span className="font-bold text-[#1D1D1F]">Vadugapatti</span>
                <div className="text-2xl font-extrabold font-mono text-[#1D1D1F] mt-1">1 Won <span className="text-xs font-normal">/ 3 Booths</span></div>
                <div className="text-[11px] text-[#6E6E73] mt-0.5">Booth #75 (179 vs 155)</div>
              </div>
            </div>

            {/* Important Observation: Mathur Cluster Deep Dive */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA] space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="text-base font-extrabold text-[#1D1D1F]">
                    Important Observation: The Mathur Paradox (Booths 26–31)
                  </h5>
                  <p className="text-xs text-[#6E6E73] mt-0.5">
                    Across booths 26 to 31 in Mathur Panchayat Union Elementary School:
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMathurExpanded(!isMathurExpanded)}
                  className="text-xs font-bold text-[#0066CC] hover:underline"
                >
                  {isMathurExpanded ? 'Hide Booth Table' : 'Show 6 Booths'}
                </button>
              </div>

              <div className="grid grid-cols-3 gap-3 max-w-lg">
                <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-center">
                  <div className="text-[11px] text-[#0066CC] font-bold">C. Vijayabaskar</div>
                  <div className="text-xl font-extrabold font-mono text-[#0066CC] mt-0.5">1,560</div>
                </div>
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-center">
                  <div className="text-[11px] text-amber-900 font-bold">P. Murugesan</div>
                  <div className="text-xl font-extrabold font-mono text-amber-900 mt-0.5">1,533</div>
                </div>
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-center">
                  <div className="text-[11px] text-rose-900 font-bold">Chellapandiyan</div>
                  <div className="text-xl font-extrabold font-mono text-rose-900 mt-0.5">885</div>
                </div>
              </div>

              {isMathurExpanded && (
                <div className="overflow-x-auto rounded-xl border border-[#E5E5EA]">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-white border-b border-[#E5E5EA] font-bold text-[#6E6E73]">
                      <tr>
                        <th className="py-2 px-3">Booth #</th>
                        <th className="py-2 px-3">Location</th>
                        <th className="py-2 px-3 text-right text-[#0066CC]">Vijayabaskar</th>
                        <th className="py-2 px-3 text-right text-amber-900">Murugesan</th>
                        <th className="py-2 px-3 text-right text-rose-900">Chellapandiyan</th>
                        <th className="py-2 px-3 text-right">Booth Winner</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5E5EA] bg-[#FBFBFD]">
                      {mathurBooths.map(b => (
                        <tr key={b.boothNo}>
                          <td className="py-2 px-3 font-mono font-bold text-[#0066CC]">#{b.boothNo}</td>
                          <td className="py-2 px-3 truncate max-w-xs">{b.stationName}</td>
                          <td className="py-2 px-3 text-right font-mono font-bold text-[#0066CC]">{b.vijayabaskarVotes}</td>
                          <td className="py-2 px-3 text-right font-mono font-bold text-amber-900">{b.murugesanVotes}</td>
                          <td className="py-2 px-3 text-right font-mono text-rose-900">{b.chellapandiyanVotes}</td>
                          <td className="py-2 px-3 text-right font-bold">
                            <span className={`px-2 py-0.5 rounded text-[10px] ${
                              b.winner.includes('MURUGESAN') ? 'bg-amber-100 text-amber-900' : 'bg-blue-100 text-[#0066CC]'
                            }`}>
                              {b.winner.split('.')[0]}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              <p className="text-xs text-[#4B5563] leading-relaxed">
                <strong>Analysis:</strong> Although Murugesan won four of the six booths (Booths 26, 27, 28, 29), Vijayabaskar had a <strong>27-vote aggregate advantage</strong> across the six booths (thanks to solid margins in Booths 30 and 31). This is a particularly interesting competitive pocket.
              </p>
            </div>
          </div>

          {/* 4.3 K.K. Chellapandiyan (DMK) — Concentrated Stronghold */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-600" />
              <h4 className="text-xl font-bold text-[#1D1D1F]">
                K.K. Chellapandiyan (DMK) — Concentrated Stronghold
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200 text-xs">
                <span className="font-bold text-rose-900">Mukkannamalaipatti</span>
                <div className="text-2xl font-extrabold font-mono text-rose-900 mt-1">4 Won <span className="text-xs font-normal">/ 4 Booths</span></div>
                <div className="text-[11px] text-rose-800 mt-0.5">Clean Sweep (Booths 233–236)</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
                <span className="font-bold text-[#1D1D1F]">Illuppur</span>
                <div className="text-2xl font-extrabold font-mono text-[#1D1D1F] mt-1">3 Won <span className="text-xs font-normal">/ 14 Booths</span></div>
                <div className="text-[11px] text-[#6E6E73] mt-0.5">Booths 199, 200, 202</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
                <span className="font-bold text-[#1D1D1F]">Annavasal</span>
                <div className="text-2xl font-extrabold font-mono text-[#1D1D1F] mt-1">2 Won <span className="text-xs font-normal">/ 8 Booths</span></div>
                <div className="text-[11px] text-[#6E6E73] mt-0.5">Booths 208, 213</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
                <span className="font-bold text-[#1D1D1F]">Viralimalai</span>
                <div className="text-2xl font-extrabold font-mono text-[#1D1D1F] mt-1">1 Won <span className="text-xs font-normal">/ 11 Booths</span></div>
                <div className="text-[11px] text-[#6E6E73] mt-0.5">Booth #67 (116 vs 104)</div>
              </div>
            </div>

            {/* Mukkannamalaipatti Deep Dive */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA] space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="text-base font-extrabold text-[#1D1D1F]">
                    Mukkannamalaipatti DMK Fortress (Booths 233, 234, 235, 236)
                  </h5>
                  <p className="text-xs text-[#6E6E73] mt-0.5">
                    Mukkannamalaipatti is the clearest DMK stronghold in the data:
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMukExpanded(!isMukExpanded)}
                  className="text-xs font-bold text-[#0066CC] hover:underline"
                >
                  {isMukExpanded ? 'Hide Booth Table' : 'Show 4 Booths'}
                </button>
              </div>

              <div className="grid grid-cols-3 gap-3 max-w-lg">
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-center">
                  <div className="text-[11px] text-rose-900 font-bold">K.K. Chellapandiyan</div>
                  <div className="text-xl font-extrabold font-mono text-rose-900 mt-0.5">1,377</div>
                </div>
                <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-center">
                  <div className="text-[11px] text-[#0066CC] font-bold">C. Vijayabaskar</div>
                  <div className="text-xl font-extrabold font-mono text-[#0066CC] mt-0.5">674</div>
                </div>
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-center">
                  <div className="text-[11px] text-amber-900 font-bold">P. Murugesan</div>
                  <div className="text-xl font-extrabold font-mono text-amber-900 mt-0.5">394</div>
                </div>
              </div>

              {isMukExpanded && (
                <div className="overflow-x-auto rounded-xl border border-[#E5E5EA]">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-white border-b border-[#E5E5EA] font-bold text-[#6E6E73]">
                      <tr>
                        <th className="py-2 px-3">Booth #</th>
                        <th className="py-2 px-3">Location</th>
                        <th className="py-2 px-3 text-right text-rose-900">Chellapandiyan</th>
                        <th className="py-2 px-3 text-right text-[#0066CC]">Vijayabaskar</th>
                        <th className="py-2 px-3 text-right text-amber-900">Murugesan</th>
                        <th className="py-2 px-3 text-right">DMK Margin</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5E5EA] bg-[#FBFBFD]">
                      {mukBooths.map(b => (
                        <tr key={b.boothNo}>
                          <td className="py-2 px-3 font-mono font-bold text-[#0066CC]">#{b.boothNo}</td>
                          <td className="py-2 px-3 truncate max-w-xs">{b.stationName}</td>
                          <td className="py-2 px-3 text-right font-mono font-bold text-rose-900">{b.chellapandiyanVotes}</td>
                          <td className="py-2 px-3 text-right font-mono text-[#0066CC]">{b.vijayabaskarVotes}</td>
                          <td className="py-2 px-3 text-right font-mono text-amber-900">{b.murugesanVotes}</td>
                          <td className="py-2 px-3 text-right font-mono font-bold text-rose-700">
                            +{b.chellapandiyanVotes - b.vijayabaskarVotes}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              <p className="text-xs text-[#4B5563] leading-relaxed">
                <strong>Analysis:</strong> DMK won all four booths here: 233, 234, 235, and 236. The largest individual margin in the entire constituency was at <strong>Booth 235</strong>, where Chellapandiyan led by <strong>408 votes</strong>. However, Illuppur and Annavasal have a different picture: DMK won individual booths there, but Vijayabaskar remained ahead in the combined locality totals.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: RELATIVE STRENGTH ACROSS ALL 276 BOOTHS (8 TIERS) */}
        <section id="section-tiers" className="space-y-6 scroll-mt-24">
          <div className="border-b border-[#E5E5EA] pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0066CC]">Section 5</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight">
              Relative Strength Across All 276 Booths
            </h3>
            <p className="text-sm text-[#6E6E73] mt-0.5">
              Vijayabaskar's booth strength distribution · Relative difference between Vijayabaskar and the leading opposing candidate in each booth.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm space-y-6">
            {/* Visual Bar Chart for 8 Tiers */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase text-[#86868B] tracking-wider">
                Distribution of 276 Polling Stations by Strength Tier
              </span>
              <div className="space-y-2.5">
                {tierSummaries.map((t) => (
                  <div key={t.tierCode} className="space-y-1">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-[#1D1D1F]">{t.tierCode} — {t.classification}</span>
                      <span className="font-mono font-extrabold text-[#1D1D1F]">
                        {t.boothsCount} booths ({t.boothsPct}%)
                      </span>
                    </div>
                    <div className="w-full bg-[#E5E5EA] h-3.5 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${(t.boothsCount / 276) * 100}%`,
                          backgroundColor: t.color
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Observations List */}
            <div className="p-5 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA] space-y-3">
              <h5 className="text-sm font-bold uppercase tracking-wider text-[#1D1D1F]">
                The Most Important Observations:
              </h5>
              <ul className="space-y-2 text-xs sm:text-sm text-[#4B5563]">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>183 booths</strong> have more than twice the votes of the strongest opponent (Tier 1 Ultra-Strongholds).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0066CC] font-bold">•</span>
                  <span><strong>243 booths</strong> fall within the first five strength tiers (40%+ relative lead).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>11 booths</strong> have a competitive but positive relative lead (10% to 40%).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span><strong>6 booths</strong> are narrowly won or tied (0% to 10%).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold">•</span>
                  <span><strong>16 booths</strong> are trailing (&lt; 0% deficit).</span>
                </li>
              </ul>
              <div className="pt-2 border-t border-[#E5E5EA] text-xs font-semibold text-[#1D1D1F]">
                This establishes that the overall result was not dependent on just a handful of high-margin booths.
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: COUNTING-ROUND PERFORMANCE */}
        <section id="section-rounds" className="space-y-6 scroll-mt-24">
          <div className="border-b border-[#E5E5EA] pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0066CC]">Section 6</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight">
              Counting-Round Performance
            </h3>
            <p className="text-sm text-[#6E6E73] mt-0.5">
              Vijayabaskar's lead by counting round · Difference between Vijayabaskar and the highest-scoring opposition candidate in each round.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm space-y-6">
            {/* Visual Round Net Margin Graph */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase text-[#86868B] tracking-wider">
                Round-by-Round Net Margin Progression (Rounds 1–20)
              </span>
              <div className="h-44 flex items-end gap-1.5 pt-4 pb-2 border-b border-[#E5E5EA]">
                {roundSummaries.slice(0, 20).map((r, idx) => {
                  const maxMargin = 4424;
                  const heightPct = Math.round((r.roundNetMargin / maxMargin) * 100);
                  return (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-1 group">
                      <span className="text-[9px] font-mono font-bold text-[#6E6E73] group-hover:text-[#0066CC]">
                        +{r.roundNetMargin}
                      </span>
                      <div
                        className="w-full bg-[#0066CC] rounded-t-md hover:bg-[#0052A3] transition-colors"
                        style={{ height: `${heightPct}%` }}
                        title={`${r.roundNo}: +${r.roundNetMargin} lead vs ${r.roundRunnerUp}`}
                      />
                      <span className="text-[10px] font-mono text-[#86868B] group-hover:text-[#1D1D1F]">
                        R{idx + 1}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Round Observations List */}
            <div className="p-5 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA] space-y-2.5">
              <h5 className="text-sm font-bold uppercase tracking-wider text-[#1D1D1F]">
                Counting-Round Observations:
              </h5>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#4B5563]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0066CC] shrink-0 mt-0.5" />
                  <span><strong>Vijayabaskar led in all 20 counting rounds</strong> without exception.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Highest round lead:</strong> Round 7, with <strong>4,424 votes</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Lowest round lead:</strong> Round 2, with <strong>1,250 votes</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span><strong>Round 15</strong> had the strongest DMK opposition performance among the counting rounds, but Vijayabaskar still led by <strong>1,613 votes</strong>.</span>
                </li>
              </ul>
              <div className="pt-2 text-[11px] text-[#86868B] italic">
                Note: Round numbers are counting sequences, not necessarily contiguous geographic regions.
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: IMPORTANT DATA-QUALITY OBSERVATIONS */}
        <section id="section-data-quality" className="space-y-6 scroll-mt-24">
          <div className="border-b border-[#E5E5EA] pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0066CC]">Section 7</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight">
              Important Data-Quality Observations
            </h3>
            <p className="text-sm text-[#6E6E73] mt-0.5">
              Three critical verification points worth keeping in mind before using this as a political presentation.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm space-y-6">
            <div className="overflow-x-auto rounded-2xl border border-[#E5E5EA]">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#FBFBFD] border-b border-[#E5E5EA] text-[#6E6E73] font-bold text-xs uppercase tracking-wider">
                  <tr>
                    <th className="py-3 px-4 w-1/4">Check</th>
                    <th className="py-3 px-4">Finding & Reconciliation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E5EA]">
                  <tr>
                    <td className="py-3 px-4 font-bold text-[#1D1D1F]">Booth mapping</td>
                    <td className="py-3 px-4 text-[#4B5563]">All 276 booth descriptions matched against Form 20 gazetted return sheets.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-[#1D1D1F]">Candidate EVM totals</td>
                    <td className="py-3 px-4 text-[#4B5563]">Reconciled with the official workbook summary and counting round sheets.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-[#1D1D1F]">Postal ballots</td>
                    <td className="py-3 px-4 text-[#4B5563]">1,770 valid postal ballots; 78 rejected postal ballots properly accounted.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-[#1D1D1F]">Turnout nuance</td>
                    <td className="py-3 px-4 text-[#4B5563]">
                      <strong>Booth/EVM turnout is 89.81%</strong> (2,02,151 / 2,25,090 electors). The <strong>90.60% figure</strong> includes valid postal ballots (1,770) added to EVM votes. Keep EVM turnout and postal ballots separate when reporting.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-[#1D1D1F]">Area spelling</td>
                    <td className="py-3 px-4 text-[#4B5563]">Illuppur (12 booths) and Illupur (2 booths) need to be combined into 14 total booths.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-[#1D1D1F]">Alternative margin slabs</td>
                    <td className="py-3 px-4 text-[#4B5563]">Dashboard shows 44/206 booths; mathematical recalculation yields 45/205 at the 40% threshold.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-[#6E6E73] leading-relaxed">
              <strong>Reporting Notice:</strong> The official workbook combines 22 other candidates into one <code>Others</code> column (4,209 votes). Booth-leader counts and dominance metrics are therefore established across the four individually tracked candidates.
            </div>
          </div>
        </section>

        {/* SECTION 8: FINAL STRATEGIC READING OF THE CONSTITUENCY */}
        <section id="section-strategy" className="space-y-6 scroll-mt-24">
          <div className="border-b border-[#E5E5EA] pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0066CC]">Section 8</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight">
              Final Strategic Reading of the Constituency
            </h3>
            <p className="text-sm text-[#6E6E73] mt-0.5">
              Three distinct electoral patterns emerge from the 276-booth dataset.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold text-[#0066CC] tracking-wider">Candidate 01</span>
                <h4 className="text-xl font-bold text-[#1D1D1F] mt-1">C. Vijayabaskar (AIADMK)</h4>
                <div className="inline-block mt-2 px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0066CC] font-bold text-xs">
                  Widespread Strength
                </div>
                <p className="text-xs sm:text-sm text-[#4B5563] mt-3 leading-relaxed">
                  Demonstrated hegemonic strength across almost the entire constituency, sweeping Viralimalai town (10/11), Illuppur (10/14), Annavasal (6/8), and winning 100% of booths in Kalkudi, Nambanpatti, Mandaiyur, Parambur, and Mangudi.
                </p>
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold text-amber-800 tracking-wider">Candidate 02</span>
                <h4 className="text-xl font-bold text-[#1D1D1F] mt-1">P. Murugesan (TVK)</h4>
                <div className="inline-block mt-2 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-900 font-bold text-xs">
                  Concentrated Pockets
                </div>
                <p className="text-xs sm:text-sm text-[#4B5563] mt-3 leading-relaxed">
                  Strongest booth-level performance in Mathur (winning 4 of 6 booths), with competitive aggregate totals in Kumaramangalam and Vadugapatti. Showed ability to contest locally but lacked broad geographic depth.
                </p>
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold text-rose-700 tracking-wider">Candidate 03</span>
                <h4 className="text-xl font-bold text-[#1D1D1F] mt-1">K.K. Chellapandiyan (DMK)</h4>
                <div className="inline-block mt-2 px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-800 font-bold text-xs">
                  Local Stronghold
                </div>
                <p className="text-xs sm:text-sm text-[#4B5563] mt-3 leading-relaxed">
                  Strongest concentrated area is Mukkannamalaipatti, sweeping all 4 booths with a 703-vote lead over Vijayabaskar. Scored additional isolated booth wins in Illuppur and Annavasal, but lagged behind in wider village totals.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-7 rounded-3xl bg-blue-50/70 border border-blue-200 text-sm text-[#1D1D1F] leading-relaxed space-y-2">
            <h5 className="font-extrabold text-base text-[#0066CC]">Overall Analytical Assessment:</h5>
            <p>
              Vijayabaskar's victory was based on broad booth-level dominance (259/276 booths), while the opposition's strongest performances were concentrated in specific polling-station clusters: <strong>Mukkannamalaipatti</strong> stands out for DMK, and <strong>Mathur</strong> stands out for TVK.
            </p>
            <p>
              The distinction between a candidate winning individual booths and having the largest combined vote total across a locality is particularly important here.
            </p>
          </div>
        </section>

        {/* SECTION 9: INTERACTIVE 276 BOOTH MASTER DATA EXPLORER */}
        <section id="section-explorer" className="space-y-6 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5E5EA] pb-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0066CC]">Section 9</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight">
                276 Polling Station Data Explorer
              </h3>
              <p className="text-xs sm:text-sm text-[#6E6E73] mt-0.5">
                Complete searchable, filterable, and sortable database of all 276 booths in 179 Viralimalai.
              </p>
            </div>
            <button
              type="button"
              onClick={handleExportCSV}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#1D1D1F] text-white text-xs font-bold hover:bg-black transition-colors self-start sm:self-auto"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Export All 276 Rows</span>
            </button>
          </div>

          {/* Filter & Controls Panel */}
          <div className="p-5 rounded-3xl bg-white border border-[#E5E5EA] shadow-sm space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {/* Search input */}
              <div className="relative">
                <Search className="w-4 h-4 text-[#86868B] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search booth #, school, village..."
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA] text-xs font-medium focus:border-[#0066CC] outline-none"
                />
              </div>

              {/* Locality select */}
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="px-3 py-2 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA] text-xs font-semibold text-[#1D1D1F] outline-none"
              >
                <option value="all">All Localities / Clusters</option>
                <option value="Viralimalai">Viralimalai (11 Booths)</option>
                <option value="Illuppur / Illupur">Illuppur / Illupur (14 Booths)</option>
                <option value="Annavasal">Annavasal (8 Booths)</option>
                <option value="Mathur">Mathur (6 Booths)</option>
                <option value="Mukkannamalaipatti">Mukkannamalaipatti (4 Booths)</option>
                <option value="Kalkudi">Kalkudi (4 Booths)</option>
                <option value="Mandaiyur">Mandaiyur (4 Booths)</option>
                <option value="Nambanpatti">Nambanpatti (4 Booths)</option>
                <option value="Parambur">Parambur (4 Booths)</option>
                <option value="Mangudi">Mangudi (4 Booths)</option>
                <option value="Kulathur">Kulathur (4 Booths)</option>
              </select>

              {/* Winner select */}
              <select
                value={selectedWinner}
                onChange={(e) => setSelectedWinner(e.target.value)}
                className="px-3 py-2 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA] text-xs font-semibold text-[#1D1D1F] outline-none"
              >
                <option value="all">All Booth Winners</option>
                <option value="VIJAYABASKAR">Vijayabaskar Won (259)</option>
                <option value="MURUGESAN">TVK Murugesan Won (6)</option>
                <option value="CHELLAPANDIYAN">DMK Chellapandiyan Won (10)</option>
                <option value="TIE">Deadlock Tie (1)</option>
              </select>

              {/* Tier select */}
              <select
                value={selectedTier}
                onChange={(e) => setSelectedTier(e.target.value)}
                className="px-3 py-2 rounded-xl bg-[#FBFBFD] border border-[#E5E5EA] text-xs font-semibold text-[#1D1D1F] outline-none"
              >
                <option value="all">All Strength Tiers (1 to 8)</option>
                {tierSummaries.map(t => (
                  <option key={t.tierCode} value={t.tierCode}>{t.tierCode} ({t.boothsCount} booths)</option>
                ))}
              </select>
            </div>

            <div className="flex items-center justify-between text-xs text-[#6E6E73] pt-2 border-t border-[#F0F0F2]">
              <span>Showing <strong>{filteredBooths.length}</strong> of 276 polling stations</span>
              {(searchTerm || selectedArea !== 'all' || selectedWinner !== 'all' || selectedTier !== 'all') && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedArea('all');
                    setSelectedWinner('all');
                    setSelectedTier('all');
                  }}
                  className="text-[#0066CC] font-bold hover:underline"
                >
                  Clear all filters
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
                    <th onClick={() => toggleSort('boothNo')} className="py-3 px-4 cursor-pointer hover:text-[#1D1D1F]">
                      <div className="flex items-center gap-1">
                        <span>Booth</span>
                        <ArrowUpDown className="w-3 h-3" />
                      </div>
                    </th>
                    <th className="py-3 px-3">Location & Building Name</th>
                    <th onClick={() => toggleSort('turnoutPct')} className="py-3 px-3 text-right cursor-pointer hover:text-[#1D1D1F]">
                      <div className="flex items-center justify-end gap-1">
                        <span>Turnout</span>
                        <ArrowUpDown className="w-3 h-3" />
                      </div>
                    </th>
                    <th onClick={() => toggleSort('vijayabaskarPct')} className="py-3 px-3 text-right text-[#0066CC] cursor-pointer hover:text-[#1D1D1F]">
                      <div className="flex items-center justify-end gap-1">
                        <span>Vijayabaskar</span>
                        <ArrowUpDown className="w-3 h-3" />
                      </div>
                    </th>
                    <th className="py-3 px-3 text-right text-amber-800">Murugesan</th>
                    <th className="py-3 px-3 text-right text-rose-800">Chellapandiyan</th>
                    <th className="py-3 px-3 text-right text-emerald-800">NTK</th>
                    <th onClick={() => toggleSort('leadMargin')} className="py-3 px-3 text-right cursor-pointer hover:text-[#1D1D1F]">
                      <div className="flex items-center justify-end gap-1">
                        <span>Lead / Deficit</span>
                        <ArrowUpDown className="w-3 h-3" />
                      </div>
                    </th>
                    <th onClick={() => toggleSort('relativeDiffPct')} className="py-3 px-3 text-right cursor-pointer hover:text-[#1D1D1F]">
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
        </section>
      </main>

      {/* Booth Detail Popup Modal */}
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

            {/* Candidate Breakdown */}
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

              <div className="grid grid-cols-2 gap-3 pt-1">
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
                <span className="text-[#86868B]">Lead Margin:</span>
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

      {/* Footer */}
      <footer className="mt-12 py-6 border-t border-[#E5E5EA] bg-white text-xs text-[#86868B] text-center no-print">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>179 Viralimalai Assembly Constituency — Historical Electoral Data Research & Analysis</span>
          <span>Prepared by Ananda Krishnan · Ctrl Alt Kick Ad Tech Solutions Pvt Ltd</span>
        </div>
      </footer>
    </div>
  );
};
