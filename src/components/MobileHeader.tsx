"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Sidebar from "@/components/sidebar";

export default function MobileHeader() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  return (
    <div className="md:hidden relative h-16 border-b border-gray-200 dark:border-gray-700 flex items-center px-4">
      {!isSidebarOpen && (
        <div className="w-full flex justify-center items-center">
          <p className="text-gray-800 dark:text-white text-lg">Rishabh Parsediya</p>
        </div>
      )}
      <div id="mobile-menu-button">
        <Sidebar />
      </div>
    </div>
  );
}