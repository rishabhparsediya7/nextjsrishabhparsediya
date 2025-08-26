"use client";

import { useTheme } from "@/context/ThemeProvider";
import { FiMoon, FiSun } from "react-icons/fi";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 fixed z-50 
        sm:top-4 sm:right-4 sm:rounded-lg
        bottom-4 right-4 rounded-full 
        shadow-lg dark:shadow-white/10
        bg-gray-200 dark:bg-gray-800 
        hover:bg-gray-300 dark:hover:bg-gray-700 
        transition-all duration-300
        cursor-pointer h-10 w-10 flex items-center justify-center"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <FiMoon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
      ) : (
        <FiSun className="w-5 h-5 text-gray-800 dark:text-gray-200" />
      )}
    </button>
  );
}
