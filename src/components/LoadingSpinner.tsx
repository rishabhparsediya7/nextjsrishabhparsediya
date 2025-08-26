"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useLoading } from '@/context/LoadingContext';

export default function LoadingSpinner() {
  const { isLoading } = useLoading();

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { 
                duration: 1, 
                repeat: Infinity, 
                ease: "linear" 
              },
              scale: {
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
          >
            <span className="sr-only">Loading...</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
