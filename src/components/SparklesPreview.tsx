"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { LinksSection } from "./LinksSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useTheme } from "@/context/ThemeProvider";

gsap.registerPlugin(ScrollTrigger);

export function SparklesPreview() {
  const { theme } = useTheme();
  useGSAP(() => {
    gsap.to("#author-section", {
      scale: 0.2,
      duration: 3,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: "#author-section",
        start: "bottom 110%",
        end: "bottom 0%",
        scrub: 4,
      },
    });
  }, []);

  return (
    <div
      id="author-section"
      className="h-[100vh] sm:h-[44rem] w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md"
    >
      <LinksSection />
      <div className="text-center space-y-4 relative z-20">
        <h1
          id="author"
          className="md:text-5xl bounce-in-top text-4xl lg:text-8xl font-bold text-black dark:text-white"
        >
          Rishabh Parsediya
        </h1>
        <p className="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-200">
          I turn ideas into functional, scalable, and elegant digital solutions.
        </p>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
          Passionate Developer | Problem Solver | Tech Enthusiast
        </p>
        <p className="text-sm md:text-base font-medium text-indigo-600 dark:text-white">
          Code. Create. Innovate. Deliver.
        </p>
      </div>

      <div className="w-[40rem] h-40 relative">
        {theme === "light" && (
          <>
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          </>
        )}
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor={theme === "light" ? "#000000" : `#FFFFFF`}
        />
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-white dark:from-black to-transparent [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
