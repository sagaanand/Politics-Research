import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SlideContainerProps {
  children: React.ReactNode;
  slideId: number;
}

export const SlideContainer: React.FC<SlideContainerProps> = ({ children, slideId }) => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-3 sm:p-6 md:p-8 lg:p-10 select-none">
      <div className="w-full max-w-6xl h-full max-h-[880px] bg-white rounded-2xl md:rounded-3xl border border-[#E5E5EA] shadow-keynote flex flex-col overflow-hidden relative keynote-card">
        <AnimatePresence mode="wait">
          <motion.div
            key={slideId}
            initial={{ opacity: 0, y: 8, scale: 0.995 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.995 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 w-full h-full flex flex-col overflow-y-auto keynote-scroll"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

