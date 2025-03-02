"use client";
import React from "react";

export const Menu = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav className="relative rounded-3xl border-[0.01rem] border-black/[0.1] dark:border-white/[0.2] bg-white dark:bg-black shadow-lg dark:shadow-white/10 flex justify-between space-x-4 py-2 pl-6 pr-3">
      {children}
    </nav>
  );
};
