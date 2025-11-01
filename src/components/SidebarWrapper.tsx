'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { createPortal } from 'react-dom';

const Sidebar = dynamic(() => import('./sidebar'), { ssr: false });

const SidebarWrapper = () => {
  const [mounted, setMounted] = useState(false);
  const [mountedMobile, setMountedMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    setMountedMobile(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {mounted &&
        typeof window !== 'undefined' &&
        createPortal(
          <Sidebar isOpenMenu={false} />,
          document.getElementById('sidebar-portal') as HTMLElement
        )}
      
      {mountedMobile &&
        typeof window !== 'undefined' &&
        createPortal(
          <div id="mobile-menu-button-content"></div>,
          document.getElementById('mobile-menu-button') as HTMLElement
        )}
    </>
  );
};

export default SidebarWrapper;
