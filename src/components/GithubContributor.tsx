"use client";
import { useTheme } from "@/context/ThemeProvider";
import GitHubCalendar from "react-github-calendar";

export default function GithubContributor() {
  // return (
  //   // <img
  //   //   src="https://github-contributions.vercel.app/api?username=rishabhparsediya7&theme=github-dark"
  //   //   alt="GitHub Contributions"
  //   // />
  // );
  const { theme } = useTheme();
  return (
    <div className="h-full space-y-4">
      <p className="text-zinc-900 dark:text-white text-2xl font-bold">
        Github Stats
      </p>
      <GitHubCalendar
        username="rishabhparsediya7"
        colorScheme={theme === "dark" ? "dark" : "light"}
      />
    </div>
  );
}
