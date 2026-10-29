import { useState, useEffect, useCallback, useRef } from 'react';

interface UsePresentationNavigationProps {
  totalSlides: number;
}

export function usePresentationNavigation({ totalSlides }: UsePresentationNavigationProps) {
  // Read initial slide from URL hash if available (e.g. #slide-4 -> index 3)
  const getInitialIndex = (): number => {
    try {
      const hash = window.location.hash;
      const match = hash.match(/^#slide-(\d+)$/);
      if (match) {
        const slideNum = parseInt(match[1], 10);
        if (slideNum >= 1 && slideNum <= totalSlides) {
          return slideNum - 1;
        }
      }
    } catch {
      // ignore
    }
    return 0;
  };

  const [currentIndex, setCurrentIndex] = useState<number>(getInitialIndex);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isOverviewOpen, setIsOverviewOpen] = useState<boolean>(false);
  const [isInternalMode, setIsInternalMode] = useState<boolean>(false);

  // Wheel debounce ref
  const wheelCooldownRef = useRef<boolean>(false);
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);

  // Sync hash to current slide index
  useEffect(() => {
    const slideNumber = currentIndex + 1;
    const currentHash = window.location.hash;
    const targetHash = `#slide-${slideNumber}`;
    if (currentHash !== targetHash) {
      window.history.replaceState(null, '', targetHash);
    }
  }, [currentIndex]);

  // Listen to hash changes (back/forward navigation)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const match = hash.match(/^#slide-(\d+)$/);
      if (match) {
        const slideNum = parseInt(match[1], 10);
        if (slideNum >= 1 && slideNum <= totalSlides) {
          setCurrentIndex(slideNum - 1);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [totalSlides]);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentIndex(index);
    }
  }, [totalSlides]);

  const nextSlide = useCallback(() => {
    setCurrentIndex(prev => (prev < totalSlides - 1 ? prev + 1 : prev));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : prev));
  }, []);

  const goToFirst = useCallback(() => {
    setCurrentIndex(0);
  }, []);

  const goToLast = useCallback(() => {
    setCurrentIndex(totalSlides - 1);
  }, [totalSlides]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  }, []);

  // Sync fullscreen state
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input, textarea, or contentEditable
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.isContentEditable)
      ) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'PageDown' || (e.key === ' ' && !e.shiftKey)) {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp' || (e.key === ' ' && e.shiftKey)) {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToFirst();
      } else if (e.key === 'End') {
        e.preventDefault();
        goToLast();
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 'o' || e.key === 'O') {
        e.preventDefault();
        setIsOverviewOpen(prev => !prev);
      } else if (e.key === 'Escape') {
        if (isOverviewOpen) {
          e.preventDefault();
          setIsOverviewOpen(false);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, goToFirst, goToLast, toggleFullscreen, isOverviewOpen]);

  // Wheel and trackpad debounced handler
  const handleWheel = useCallback((e: React.WheelEvent) => {
    // If overview is open or target is inside a scrollable container with overflow, let it scroll
    if (isOverviewOpen) return;

    const target = e.target as HTMLElement | null;
    if (target) {
      let currentEl: HTMLElement | null = target;
      while (currentEl && currentEl !== document.body) {
        const overflowY = window.getComputedStyle(currentEl).overflowY;
        if (
          (overflowY === 'auto' || overflowY === 'scroll') &&
          currentEl.scrollHeight > currentEl.clientHeight
        ) {
          // If the element can still be scrolled in the direction of the delta, do not trigger slide switch
          const atTop = currentEl.scrollTop <= 0;
          const atBottom = currentEl.scrollTop + currentEl.clientHeight >= currentEl.scrollHeight - 1;
          if ((e.deltaY > 0 && !atBottom) || (e.deltaY < 0 && !atTop)) {
            return;
          }
        }
        currentEl = currentEl.parentElement;
      }
    }

    if (wheelCooldownRef.current) return;

    if (Math.abs(e.deltaY) > 35) {
      wheelCooldownRef.current = true;
      if (e.deltaY > 0) {
        nextSlide();
      } else {
        prevSlide();
      }

      setTimeout(() => {
        wheelCooldownRef.current = false;
      }, 700);
    }
  }, [nextSlide, prevSlide, isOverviewOpen]);

  // Touch navigation handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      touchStartXRef.current = e.touches[0].clientX;
      touchStartYRef.current = e.touches[0].clientY;
    }
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;

    const deltaX = touchEndX - touchStartXRef.current;
    const deltaY = touchEndY - touchStartYRef.current;

    // Horizontal swipe must be stronger than vertical swipe
    if (Math.abs(deltaX) > 60 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
      if (deltaX < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    touchStartXRef.current = null;
    touchStartYRef.current = null;
  }, [nextSlide, prevSlide]);

  return {
    currentIndex,
    currentSlideNumber: currentIndex + 1,
    totalSlides,
    goToSlide,
    nextSlide,
    prevSlide,
    goToFirst,
    goToLast,
    isFullscreen,
    toggleFullscreen,
    isOverviewOpen,
    setIsOverviewOpen,
    isInternalMode,
    setIsInternalMode,
    handleWheel,
    handleTouchStart,
    handleTouchEnd
  };
}

