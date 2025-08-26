"use client";

import { createContext, useContext, useState, ReactNode, useCallback } from 'react';

type LoadingContextType = {
  isLoading: boolean;
  startLoading: (timeout?: number) => void;
  stopLoading: () => void;
};

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const startLoading = useCallback((timeout = 10000) => {
    // Clear any existing timeout
    if (timeoutId) clearTimeout(timeoutId);
    
    setIsLoading(true);
    
    // Set a new timeout to automatically stop loading
    const id = setTimeout(() => {
      setIsLoading(false);
    }, timeout);
    
    setTimeoutId(id);
  }, [timeoutId]);

  const stopLoading = useCallback(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setIsLoading(false);
  }, [timeoutId]);

  return (
    <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
}
