import React, { useState, useEffect } from 'react';
import { PresentationShell } from './components/PresentationShell';
import { BoothAnalysisPage } from './pages/BoothAnalysisPage';

export const App: React.FC = () => {
  const getInitialPage = (): 'proposal' | 'analysis' => {
    if (typeof window !== 'undefined' && window.location.hash.toLowerCase().includes('analysis')) {
      return 'analysis';
    }
    return 'proposal';
  };

  const [currentPage, setCurrentPage] = useState<'proposal' | 'analysis'>(getInitialPage);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash.toLowerCase().includes('analysis')) {
        setCurrentPage('analysis');
      } else {
        setCurrentPage('proposal');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenAnalysis = () => {
    window.location.hash = '#analysis';
    setCurrentPage('analysis');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToProposal = () => {
    window.location.hash = '#proposal';
    setCurrentPage('proposal');
  };

  if (currentPage === 'analysis') {
    return <BoothAnalysisPage onBackToProposal={handleBackToProposal} />;
  }

  return <PresentationShell onOpenAnalysis={handleOpenAnalysis} />;
};

export default App;
