import React, { useState, useEffect } from 'react';
import { PresentationShell } from './components/PresentationShell';
import { ElectoralOverviewPage } from './pages/ElectoralOverviewPage';
import { Comparison2021vs2026Page } from './pages/Comparison2021vs2026Page';
import { Master3YReportPage } from './pages/Master3YReportPage';
import { Election2016Page } from './pages/Election2016Page';
import { Election2021Page } from './pages/Election2021Page';
import { NavPageId } from './components/ConstituencyNav';

export type PageType = NavPageId;

export const App: React.FC = () => {
  const getInitialPage = (): PageType => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('proposal')) return 'proposal';
      if (hash.includes('2016')) return '2016';
      if (hash.includes('2021-vs-2026') || hash.includes('comparison')) return 'comparison';
      if (hash.includes('2021')) return '2021';
      if (hash.includes('2026') || hash.includes('overview')) return '2026';
      if (hash.includes('master') || hash.includes('longitudinal') || hash.includes('3y')) return 'master';
    }
    return '2026';
  };

  const [currentPage, setCurrentPage] = useState<PageType>(getInitialPage);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getInitialPage());
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageType) => {
    switch (page) {
      case 'proposal':
        window.location.hash = '#proposal';
        break;
      case '2016':
        window.location.hash = '#2016';
        break;
      case '2021':
        window.location.hash = '#2021';
        break;
      case '2026':
        window.location.hash = '#2026';
        break;
      case 'comparison':
        window.location.hash = '#comparison';
        break;
      case 'master':
        window.location.hash = '#master';
        break;
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentPage === 'proposal') {
    return <PresentationShell onNavigate={handleNavigate} />;
  }

  if (currentPage === '2016') {
    return <Election2016Page onNavigate={handleNavigate} />;
  }

  if (currentPage === '2021') {
    return <Election2021Page onNavigate={handleNavigate} />;
  }

  if (currentPage === 'comparison') {
    return <Comparison2021vs2026Page onNavigate={handleNavigate} />;
  }

  if (currentPage === 'master') {
    return <Master3YReportPage onNavigate={handleNavigate} />;
  }

  return <ElectoralOverviewPage onNavigate={handleNavigate} />;
};

export default App;
