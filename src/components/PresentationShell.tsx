import React, { useState } from 'react';
import { usePresentationNavigation } from '../hooks/usePresentationNavigation';
import { ProgressIndicator } from './ProgressIndicator';
import { NavigationControls } from './NavigationControls';
import { SlideOverviewModal } from './SlideOverviewModal';
import { InternalCostModal } from './InternalCostModal';
import { SlideContainer } from './SlideContainer';
import { proposalMeta, slideList } from '../data/proposal';
import { Lock } from 'lucide-react';

// Import all 18 slide components
import { CoverSlide } from '../slides/CoverSlide';
import { ExecutiveSummarySlide } from '../slides/ExecutiveSummarySlide';
import { ResearchObjectivesSlide } from '../slides/ResearchObjectivesSlide';
import { ScopeSlide } from '../slides/ScopeSlide';
import { ResearchMethodologySlide } from '../slides/ResearchMethodologySlide';
import { DataArchitectureSlide } from '../slides/DataArchitectureSlide';
import { PollingStationMappingSlide } from '../slides/PollingStationMappingSlide';
import { AnalyticalFrameworkSlide } from '../slides/AnalyticalFrameworkSlide';
import { DeliverablesSlide } from '../slides/DeliverablesSlide';
import { QualityAssuranceSlide } from '../slides/QualityAssuranceSlide';
import { ProjectTeamSlide } from '../slides/ProjectTeamSlide';
import { TimelineSlide } from '../slides/TimelineSlide';
import { CommercialsSlide } from '../slides/CommercialsSlide';
import { PaymentTermsSlide } from '../slides/PaymentTermsSlide';
import { AssumptionsSlide } from '../slides/AssumptionsSlide';
import { DataAvailabilitySlide } from '../slides/DataAvailabilitySlide';
import { ClientResponsibilitiesSlide } from '../slides/ClientResponsibilitiesSlide';
import { ApprovalSlide } from '../slides/ApprovalSlide';

export const PresentationShell: React.FC = () => {
  const totalSlides = slideList.length;
  const navigation = usePresentationNavigation({ totalSlides });
  const [isInternalCostOpen, setIsInternalCostOpen] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const renderSlideContent = (index: number) => {
    switch (index) {
      case 0:
        return <CoverSlide onNext={navigation.nextSlide} />;
      case 1:
        return <ExecutiveSummarySlide />;
      case 2:
        return <ResearchObjectivesSlide />;
      case 3:
        return <ScopeSlide />;
      case 4:
        return <ResearchMethodologySlide />;
      case 5:
        return <DataArchitectureSlide />;
      case 6:
        return <PollingStationMappingSlide />;
      case 7:
        return <AnalyticalFrameworkSlide />;
      case 8:
        return <DeliverablesSlide />;
      case 9:
        return <QualityAssuranceSlide />;
      case 10:
        return <ProjectTeamSlide />;
      case 11:
        return <TimelineSlide />;
      case 12:
        return <CommercialsSlide onOpenInternalCosting={() => setIsInternalCostOpen(true)} />;
      case 13:
        return <PaymentTermsSlide />;
      case 14:
        return <AssumptionsSlide />;
      case 15:
        return <DataAvailabilitySlide />;
      case 16:
        return <ClientResponsibilitiesSlide onGoToApproval={() => navigation.goToSlide(17)} />;
      case 17:
        return <ApprovalSlide onPrint={handlePrint} />;
      default:
        return <CoverSlide onNext={navigation.nextSlide} />;
    }
  };

  const currentMetadata = slideList[navigation.currentIndex] || slideList[0];

  return (
    <div
      className="presentation-shell h-screen w-screen flex flex-col bg-[#FBFBFD] overflow-hidden select-none"
      onWheel={navigation.handleWheel}
      onTouchStart={navigation.handleTouchStart}
      onTouchEnd={navigation.handleTouchEnd}
    >
      {/* Top Header Bar (Hidden in print) */}
      <header className="presentation-header w-full border-b border-[#E5E5EA] bg-white/90 backdrop-blur-md z-30 shrink-0">
        <ProgressIndicator
          currentIndex={navigation.currentIndex}
          totalSlides={totalSlides}
          onSelectSlide={navigation.goToSlide}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-12 flex items-center justify-between">
          {/* Left Title & Project Context */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-xs tracking-tight text-[#1D1D1F] truncate">
                {proposalMeta.projectTitle}
              </span>
              <span className="text-[#C7C7CC] hidden sm:inline">•</span>
              <span className="text-xs text-[#6E6E73] truncate hidden sm:inline">
                {proposalMeta.projectSubtitle}
              </span>
            </div>
          </div>

          {/* Right Status Badges & Internal Costing Trigger */}
          <div className="flex items-center gap-2.5 shrink-0">
            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-[#F5F5F7] text-[#6E6E73] border border-[#E5E5EA] hidden md:inline">
              {currentMetadata.category}
            </span>

            {/* Internal Costing Model Link (Confidential) */}
            <button
              type="button"
              onClick={() => setIsInternalCostOpen(true)}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7] border border-transparent hover:border-[#E5E5EA] transition-all"
              title="View Internal Costing Model (Internal Reference Only)"
            >
              <Lock className="w-3 h-3 text-[#86868B]" />
              <span className="hidden sm:inline">Internal Basis</span>
            </button>

            {/* Slide Index Pill */}
            <button
              type="button"
              onClick={() => navigation.setIsOverviewOpen(true)}
              className="px-2.5 py-1 rounded-full bg-[#F5F5F7] hover:bg-[#E5E5EA] text-[#1D1D1F] font-mono text-xs font-semibold border border-[#E5E5EA] transition-colors"
              title="Click to view all 18 slides (Hotkey: O)"
            >
              {String(navigation.currentIndex + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
            </button>
          </div>
        </div>
      </header>

      {/* Main Slide Interactive Viewport */}
      <main className="flex-1 w-full h-[calc(100vh-3rem)] overflow-hidden flex items-center justify-center relative no-print">
        <SlideContainer slideId={navigation.currentIndex}>
          {renderSlideContent(navigation.currentIndex)}
        </SlideContainer>
      </main>

      {/* Floating Bottom Navigation Controls (Hidden in print) */}
      <NavigationControls
        currentIndex={navigation.currentIndex}
        totalSlides={totalSlides}
        onPrev={navigation.prevSlide}
        onNext={navigation.nextSlide}
        onToggleOverview={() => navigation.setIsOverviewOpen(prev => !prev)}
        onToggleFullscreen={navigation.toggleFullscreen}
        isFullscreen={navigation.isFullscreen}
        onPrint={handlePrint}
      />

      {/* Slide Overview Sorter Modal */}
      <SlideOverviewModal
        isOpen={navigation.isOverviewOpen}
        onClose={() => navigation.setIsOverviewOpen(false)}
        currentIndex={navigation.currentIndex}
        onSelectSlide={navigation.goToSlide}
      />

      {/* Internal Costing Reference Modal */}
      <InternalCostModal
        isOpen={isInternalCostOpen}
        onClose={() => setIsInternalCostOpen(false)}
      />

      {/* Hidden Print Container: Sequentially renders all 18 slides for browser Print/PDF export */}
      <div className="slide-container-print-all hidden">
        {slideList.map((slide, idx) => (
          <div key={slide.id} className="print-slide-page">
            <div className="mb-4 pb-2 border-b border-[#E5E5EA] flex justify-between items-center text-xs text-[#6E6E73]">
              <span className="font-semibold text-[#1D1D1F]">
                {proposalMeta.projectTitle} — {proposalMeta.projectSubtitle}
              </span>
              <span className="font-mono">
                Slide {slide.id} of {totalSlides} · {slide.category}
              </span>
            </div>
            {renderSlideContent(idx)}
            <div className="mt-4 pt-2 border-t border-[#E5E5EA] flex justify-between items-center text-[10px] text-[#86868B]">
              <span>Prepared by {proposalMeta.preparedBy} · {proposalMeta.company}</span>
              <span>Confidential Proposal Document</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
