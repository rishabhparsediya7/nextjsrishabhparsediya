"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import SplitType from "split-type";
import projects from "../data/projects.json";
import { ThreeDCardDemo } from "./ThreeDCard";
import { BackgroundBeams } from "./ui/background-beams";
gsap.registerPlugin(ScrollTrigger);

function ProjectsSection() {
  useEffect(() => {
    const ourText = new SplitType("#project-heading");
    gsap.to(".char", {
      y: 0,
      stagger: 0.01,
      duration: 0.1,
      scrollTrigger: {
        trigger: "#project-heading",
        scrub: true,
        start: "top 95%",
        end: "top 40%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);
  return (
    <div
      id="projects"
      className="h-[full] w-full rounded-md bg-white dark:bg-neutral-950 relative flex flex-col items-center antialiased"
    >
      <div className="max-w-full p-4 overflow-x-hidden">
        <div
          id="project-heading"
          className="relative z-10 text-7xl sm:text-[10vw] text-center mt-20 font-sans font-bold
                        bg-clip-text text-transparent 
                        bg-gradient-to-b from-black to-neutral-600 
                        dark:bg-gradient-to-b dark:from-neutral-200 dark:to-neutral-600
                        [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] dark:[text-shadow:_0_1px_0_rgb(255_255_255_/_40%)]
                        transition-colors duration-300"
        >
          PROJECTS
        </div>
        <div className="max-w-[100vw] flex sm:px-20 relative mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 content-stretch items-start  gap-5 z-10">
            {projects.projects.map((project, index) => {
              return <ThreeDCardDemo key={project.name} item={project} />;
            })}
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default ProjectsSection;
