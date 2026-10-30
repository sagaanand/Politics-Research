import React from 'react';
import { BarChart3, GitCompare } from 'lucide-react';
import { usePresentationNavigation } from '../hooks/usePresentationNavigation';
import { ProgressIndicator } from './ProgressIndicator';
import { NavigationControls } from './NavigationControls';
import { SlideOverviewModal } from './SlideOverviewModal';
import { SlideContainer } from './SlideContainer';
import { proposalMeta, slideList } from '../data/proposal';
import { NavPageId } from './ConstituencyNav';

// Import all 22 slide components
import { CoverSlide } from '../slides/CoverSlide';
import { AboutFounderSlide } from '../slides/AboutFounderSlide';
import { ProfessionalExperienceSlide } from '../slides/ProfessionalExperienceSlide';
import { CompanyEcosystemSlide } from '../slides/CompanyEcosystemSlide';
import { CtrlAltKickSlide } from '../slides/CtrlAltKickSlide';
import { DigitalCakeSlide } from '../slides/DigitalCakeSlide';
import { NamNilamInfraSlide } from '../slides/NamNilamInfraSlide';
import { PoliticalExperienceSlide } from '../slides/PoliticalExperienceSlide';
import { CaseStudyTamilNaduSlide } from '../slides/CaseStudyTamilNaduSlide';
import { CaseStudyLokSabhaSlide } from '../slides/CaseStudyLokSabhaSlide';
import { ExperienceRelationSlide } from '../slides/ExperienceRelationSlide';
import { ProjectOverviewSlide } from '../slides/ProjectOverviewSlide';
import { ResearchObjectivesSlide } from '../slides/ResearchObjectivesSlide';
import { ScopeSlide } from '../slides/ScopeSlide';
import { ResearchMethodologySlide } from '../slides/ResearchMethodologySlide';
import { PollingStationMappingSlide } from '../slides/PollingStationMappingSlide';
import { AnalyticalFrameworkSlide } from '../slides/AnalyticalFrameworkSlide';
import { DeliverablesSlide } from '../slides/DeliverablesSlide';
import { QualityAssuranceSlide } from '../slides/QualityAssuranceSlide';
import { TeamAndTimelineSlide } from '../slides/TeamAndTimelineSlide';
import { CommercialsAndPaymentSlide } from '../slides/CommercialsAndPaymentSlide';
import { ApprovalAndNextStepsSlide } from '../slides/ApprovalAndNextStepsSlide';

interface PresentationShellProps {
  onNavigate?: (page: NavPageId) => void;
  onOpenAnalysis?: () => void;
  onOpenComparison?: () => void;
  onOpenMaster?: () => void;
}

export const PresentationShell: React.FC<PresentationShellProps> = ({
  onNavigate,
  onOpenAnalysis,
  onOpenComparison,
  onOpenMaster
}) => {
  const totalSlides = slideList.length;
  const navigation = usePresentationNavigation({ totalSlides });

  const handlePrint = () => {
    window.print();
  };

  const renderSlideContent = (index: number) => {
    switch (index) {
      case 0:
        return <CoverSlide onNext={navigation.nextSlide} />;
      case 1:
        return <AboutFounderSlide />;
      case 2:
        return <ProfessionalExperienceSlide />;
      case 3:
        return <CompanyEcosystemSlide />;
      case 4:
        return <CtrlAltKickSlide />;
      case 5:
        return <DigitalCakeSlide />;
      case 6:
        return <NamNilamInfraSlide />;
      case 7:
        return <PoliticalExperienceSlide />;
      case 8:
        return <CaseStudyTamilNaduSlide />;
      case 9:
        return <CaseStudyLokSabhaSlide />;
      case 10:
        return <ExperienceRelationSlide />;
      case 11:
        return <ProjectOverviewSlide />;
      case 12:
        return <ResearchObjectivesSlide />;
      case 13:
        return <ScopeSlide />;
      case 14:
        return <ResearchMethodologySlide />;
      case 15:
        return <PollingStationMappingSlide />;
      case 16:
        return <AnalyticalFrameworkSlide />;
      case 17:
        return <DeliverablesSlide />;
      case 18:
        return <QualityAssuranceSlide />;
      case 19:
        return <TeamAndTimelineSlide />;
      case 20:
        return <CommercialsAndPaymentSlide />;
      case 21:
        return <ApprovalAndNextStepsSlide onPrint={handlePrint} />;
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

          {/* Right Status Badges & Slide Index */}
          <div className="flex items-center gap-2 shrink-0">
            {onNavigate ? (
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => onNavigate('2016')}
                  className="px-2.5 py-1 rounded-full text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all"
                  title="Open 2016 Election Report"
                >
                  2016
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('2021')}
                  className="px-2.5 py-1 rounded-full text-xs font-bold text-purple-700 bg-purple-50 hover:bg-purple-100 border border-purple-200 transition-all"
                  title="Open 2021 Election Report"
                >
                  2021
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('2026')}
                  className="px-2.5 py-1 rounded-full text-xs font-bold text-white bg-[#0066CC] hover:bg-[#0052A3] transition-all shadow-xs"
                  title="Open 2026 Election Report"
                >
                  2026
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('comparison')}
                  className="px-2.5 py-1 rounded-full text-xs font-bold text-purple-700 bg-purple-50 hover:bg-purple-100 border border-purple-200 transition-all hidden sm:inline"
                  title="Open 2021 vs 2026 Comparison"
                >
                  21 vs 26
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('master')}
                  className="px-2.5 py-1 rounded-full text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all hidden sm:inline"
                  title="Open 10-Year Master Study (2016-2026)"
                >
                  Master
                </button>
              </div>
            ) : (
              <>
                {onOpenAnalysis && (
                  <button
                    type="button"
                    onClick={onOpenAnalysis}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white bg-[#0066CC] hover:bg-[#0052A3] transition-all shadow-sm"
                    title="Open Viralimalai 2026 Complete Electoral Overview Page"
                  >
                    <BarChart3 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">2026 Overview</span>
                  </button>
                )}

                {onOpenComparison && (
                  <button
                    type="button"
                    onClick={onOpenComparison}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-purple-700 bg-purple-50 hover:bg-purple-100 border border-purple-200 transition-all shadow-sm"
                    title="Open 2021 vs 2026 Polling Comparison Page"
                  >
                    <GitCompare className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">2021 vs 2026</span>
                  </button>
                )}

                {onOpenMaster && (
                  <button
                    type="button"
                    onClick={onOpenMaster}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all shadow-sm"
                    title="Open 2016-2026 3-Election Master Report"
                  >
                    <span className="hidden sm:inline">2016-2026 Master</span>
                    <span className="sm:hidden">Master</span>
                  </button>
                )}
              </>
            )}

            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-[#F5F5F7] text-[#6E6E73] border border-[#E5E5EA] hidden md:inline">
              {currentMetadata.category}
            </span>

            {/* Slide Index Pill */}
            <button
              type="button"
              onClick={() => navigation.setIsOverviewOpen(true)}
              className="px-2.5 py-1 rounded-full bg-[#F5F5F7] hover:bg-[#E5E5EA] text-[#1D1D1F] font-mono text-xs font-semibold border border-[#E5E5EA] transition-colors"
              title="Click to view all 22 slides (Hotkey: O)"
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

      {/* Hidden Print Container: Sequentially renders all 22 slides for browser Print/PDF export */}
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
