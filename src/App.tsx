import React, { useState, useEffect } from 'react';
import { PresentationShell } from './components/PresentationShell';
import { ElectoralOverviewPage } from './pages/ElectoralOverviewPage';

export const App: React.FC = () => {
  const getInitialPage = (): 'overview' | 'proposal' => {
    if (typeof window !== 'undefined' && window.location.hash.toLowerCase().includes('proposal')) {
      return 'proposal';
    }
    return 'overview';
  };

  const [currentPage, setCurrentPage] = useState<'overview' | 'proposal'>(getInitialPage);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash.toLowerCase().includes('proposal')) {
        setCurrentPage('proposal');
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

  if (currentPage === 'proposal') {
    return <PresentationShell onOpenAnalysis={handleOpenOverview} />;
  }

  return <ElectoralOverviewPage onBackToProposal={handleOpenProposal} />;
};

export default App;
