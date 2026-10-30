import React from 'react';
import {
  Download,
  Printer,
  BarChart3,
  GitCompare,
  Building,
  Calendar,
  Layers,
  ArrowLeft
} from 'lucide-react';

export type NavPageId = 'proposal' | '2016' | '2021' | '2026' | 'comparison' | 'master';

interface ConstituencyNavProps {
  activePage: NavPageId;
  onNavigate: (page: NavPageId) => void;
  onExportCSV?: () => void;
  exportLabel?: string;
  subtitle?: string;
}

export const ConstituencyNav: React.FC<ConstituencyNavProps> = ({
  activePage,
  onNavigate,
  onExportCSV,
  exportLabel = 'Export CSV',
  subtitle
}) => {
  const getBadgeText = () => {
    switch (activePage) {
      case '2016':
        return '2016 Election';
      case '2021':
        return '2021 Election';
      case '2026':
        return '2026 Election';
      case 'comparison':
        return '2021 vs 2026 Comparison';
      case 'master':
        return '2016–2026 Master Study';
      case 'proposal':
        return 'Research Proposal Deck';
      default:
        return '';
    }
  };

  const navItems: { id: NavPageId; label: string; icon: React.ReactNode; shortLabel: string }[] = [
    {
      id: 'proposal',
      label: 'Proposal Deck',
      shortLabel: 'Proposal',
      icon: <ArrowLeft className="w-3.5 h-3.5" />
    },
    {
      id: '2016',
      label: '2016 Election',
      shortLabel: '2016',
      icon: <Calendar className="w-3.5 h-3.5" />
    },
    {
      id: '2021',
      label: '2021 Election',
      shortLabel: '2021',
      icon: <Layers className="w-3.5 h-3.5" />
    },
    {
      id: '2026',
      label: '2026 Election',
      shortLabel: '2026',
      icon: <BarChart3 className="w-3.5 h-3.5" />
    },
    {
      id: 'comparison',
      label: '2021 vs 2026',
      shortLabel: '21 vs 26',
      icon: <GitCompare className="w-3.5 h-3.5" />
    },
    {
      id: 'master',
      label: '10Y Master Study',
      shortLabel: 'Master',
      icon: <Building className="w-3.5 h-3.5" />
    }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E5E5EA] shadow-sm no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          {/* Left Title & Status */}
          <div className="flex items-center gap-3 min-w-0">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base sm:text-lg text-[#1D1D1F] tracking-tight whitespace-nowrap">
                  179 Viralimalai AC
                </span>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#0066CC] border border-blue-200 hidden md:inline">
                  {getBadgeText()}
                </span>
              </div>
              {subtitle && (
                <div className="text-[11px] text-[#6E6E73] truncate hidden lg:block">
                  {subtitle}
                </div>
              )}
            </div>
          </div>

          {/* Quick Year & Page Navigation Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-none py-1">
            {navItems.map(item => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onNavigate(item.id)}
                  className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                    isActive
                      ? 'bg-[#1D1D1F] text-white shadow-sm'
                      : 'text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7] border border-transparent'
                  }`}
                  title={`Switch to ${item.label}`}
                >
                  {item.icon}
                  <span className="hidden sm:inline">{item.label}</span>
                  <span className="sm:hidden">{item.shortLabel}</span>
                </button>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            {onExportCSV && (
              <button
                type="button"
                onClick={onExportCSV}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#E5E5EA] hover:border-[#1D1D1F] text-xs font-bold text-[#1D1D1F] shadow-sm transition-all"
                title="Download CSV dataset"
              >
                <Download className="w-3.5 h-3.5 text-[#0066CC]" />
                <span className="hidden xl:inline">{exportLabel}</span>
              </button>
            )}
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#E5E5EA] hover:border-[#1D1D1F] text-xs font-bold text-[#1D1D1F] shadow-sm transition-all"
              title="Print page or save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-[#0066CC]" />
              <span className="hidden md:inline">Print / PDF</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
