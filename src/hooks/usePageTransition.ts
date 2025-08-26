"use client";

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useLoading } from '@/context/LoadingContext';

export function usePageTransition() {
  const pathname = usePathname();
  const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    // Stop loading when the route changes
    stopLoading();
  }, [pathname, stopLoading]);

  // Function to manually trigger loading (can be called before navigation)
  const startPageTransition = () => {
    startLoading();
  };

  return { startPageTransition };
}
