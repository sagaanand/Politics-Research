import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SlideContainerProps {
  children: React.ReactNode;
  slideId: number;
}

export const SlideContainer: React.FC<SlideContainerProps> = ({ children, slideId }) => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8 select-none">
      <div className="w-full max-w-7xl h-full max-h-[900px] bg-white rounded-3xl border border-[#E5E5EA] shadow-keynote flex flex-col overflow-hidden relative keynote-card">
        <AnimatePresence mode="wait">
          <motion.div
            key={slideId}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 w-full h-full flex flex-col overflow-y-auto keynote-scroll"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
