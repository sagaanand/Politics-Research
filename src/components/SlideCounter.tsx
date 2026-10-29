import React from 'react';

interface SlideCounterProps {
  currentIndex: number;
  totalSlides: number;
}

export const SlideCounter: React.FC<SlideCounterProps> = ({ currentIndex, totalSlides }) => {
  const currentFormatted = String(currentIndex + 1).padStart(2, '0');
  const totalFormatted = String(totalSlides).padStart(2, '0');

  return (
    <div className="inline-flex items-center gap-1.5 font-mono text-xs font-medium tracking-tight text-[#6E6E73] bg-[#F5F5F7] px-2.5 py-1 rounded-full border border-[#E5E5EA]">
      <span className="text-[#1D1D1F] font-semibold">{currentFormatted}</span>
      <span className="text-[#86868B]">/</span>
      <span>{totalFormatted}</span>
    </div>
  );
};
