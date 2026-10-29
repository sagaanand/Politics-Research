import React from 'react';

interface ProgressIndicatorProps {
  currentIndex: number;
  totalSlides: number;
  onSelectSlide?: (index: number) => void;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  currentIndex,
  totalSlides,
  onSelectSlide
}) => {
  const progressPercent = ((currentIndex + 1) / totalSlides) * 100;

  return (
    <div className="w-full relative group">
      {/* Top micro progress line */}
      <div className="h-[2px] w-full bg-[#E5E5EA]/70 overflow-hidden">
        <div
          className="h-full bg-[#0066CC] transition-all duration-300 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Discrete segment dots for quick visual orientation on desktop */}
      <div className="hidden lg:flex items-center justify-between px-6 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => onSelectSlide?.(idx)}
            className={`h-1.5 rounded-full transition-all duration-200 ${
              idx === currentIndex
                ? 'w-8 bg-[#0066CC]'
                : idx < currentIndex
                ? 'w-3 bg-[#6E6E73]/50 hover:bg-[#6E6E73]'
                : 'w-3 bg-[#E5E5EA] hover:bg-[#C7C7CC]'
            }`}
            title={`Slide ${idx + 1}`}
            aria-label={`Jump to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
