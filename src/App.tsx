import React, { useState, useEffect } from 'react';
import { PresentationShell } from './components/PresentationShell';
import { ElectoralOverviewPage } from './pages/ElectoralOverviewPage';
import { Comparison2021vs2026Page } from './pages/Comparison2021vs2026Page';
import { Master3YReportPage } from './pages/Master3YReportPage';

export type PageType = 'overview' | 'proposal' | 'comparison' | 'master';

export const App: React.FC = () => {
  const getInitialPage = (): PageType => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('proposal')) return 'proposal';
      if (hash.includes('comparison') || hash.includes('2021-vs-2026')) return 'comparison';
      if (hash.includes('master') || hash.includes('2016') || hash.includes('3y') || hash.includes('longitudinal')) return 'master';
      if (hash.includes('overview')) return 'overview';
    }
    return 'overview';
  };

  const [currentPage, setCurrentPage] = useState<PageType>(getInitialPage);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('proposal')) {
        setCurrentPage('proposal');
      } else if (hash.includes('comparison') || hash.includes('2021-vs-2026')) {
        setCurrentPage('comparison');
      } else if (hash.includes('master') || hash.includes('2016') || hash.includes('3y') || hash.includes('longitudinal')) {
        setCurrentPage('master');
      } else {
        setCurrentPage('overview');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenProposal = () => {
    window.location.hash = '#proposal';
    setCurrentPage('proposal');
  };

  const handleOpenOverview = () => {
    window.location.hash = '#overview';
    setCurrentPage('overview');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenComparison = () => {
    window.location.hash = '#comparison';
    setCurrentPage('comparison');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenMaster = () => {
    window.location.hash = '#master';
    setCurrentPage('master');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentPage === 'proposal') {
    return (
      <PresentationShell
        onOpenAnalysis={handleOpenOverview}
        onOpenComparison={handleOpenComparison}
        onOpenMaster={handleOpenMaster}
      />
    );
  }

  if (currentPage === 'comparison') {
    return (
      <Comparison2021vs2026Page
        onBackToProposal={handleOpenProposal}
        onGoToOverview={handleOpenOverview}
        onGoToMaster={handleOpenMaster}
      />
    );
  }

  if (currentPage === 'master') {
    return (
      <Master3YReportPage
        onBackToProposal={handleOpenProposal}
        onGoToOverview={handleOpenOverview}
        onGoToComparison={handleOpenComparison}
      />
    );
  }

  return (
    <ElectoralOverviewPage
      onBackToProposal={handleOpenProposal}
      onGoToComparison={handleOpenComparison}
      onGoToMaster={handleOpenMaster}
    />
  );
};

export default App;
