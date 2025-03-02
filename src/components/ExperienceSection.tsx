"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { content } from "../data/experience";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

export function ExperienceSection() {
  useGSAP(() => {
    gsap.to("#experience h1", {
      transform: "translateX(-100%)",
      scrollTrigger: {
        trigger: "#experience",
        start: "top 20%",
        end: "top -100%",
        scrub: 2,
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <div
      id="experience"
      className="w-full overflow-x-hidden bg-white dark:bg-black"
    >
      <h1
        id="experience-heading"
        className="text-8xl sm:text-[15vw] font-bold text-center py-20
          bg-clip-text text-transparent 
          bg-gradient-to-r from-black via-black to-black/70
          dark:from-white dark:via-white dark:to-white/70
          [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] 
          dark:[text-shadow:_0_1px_0_rgb(255_255_255_/_40%)]
          transition-colors duration-300 uppercase"
      >
        Experience
      </h1>
      <StickyScroll content={content} />
    </div>
  );
}
