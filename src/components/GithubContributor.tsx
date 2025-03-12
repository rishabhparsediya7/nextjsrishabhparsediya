"use client";
import { useTheme } from "@/context/ThemeProvider";
import GitHubCalendar from "react-github-calendar";

export default function GithubContributor() {
  const { theme } = useTheme();
  return (
    <div className="h-full w-full flex flex-col space-y-6 m-20">
      <div className="px-32 text-2xl font-bold text-zinc-900 dark:text-white">
        Github Stats
      </div>
      <div className="h-full w-full flex justify-around items-center space-y-4 px-32 gap-10">
        <p className="text-zinc-900 dark:text-white text-base">
          I actively manage my GitHub as a central hub for all my projects,
          showcasing my journey in full-stack development. From scalable web
          apps to optimized backend systems, I consistently push clean,
          efficient, and well-documented code. My repositories reflect my
          expertise in React, Node.js, GraphQL, and cloud technologies, along
          with contributions. Explore my GitHub to see my work in
          action—real-world solutions, innovative experiments, and a passion for
          building impactful software. 🚀
        </p>
        <GitHubCalendar
          username="rishabhparsediya7"
          colorScheme={theme === "dark" ? "dark" : "light"}
        />
      </div>
    </div>
  );
}
