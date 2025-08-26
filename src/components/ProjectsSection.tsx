"use client";
import projects from "../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import { BackgroundBeams } from "./ui/background-beams";

function ProjectsSection() {
  return (
    <div className="w-full rounded-md relative flex flex-col items-center antialiased">
      <div className="max-w-full p-4 overflow-x-hidden">
        <div className="flex relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 content-stretch items-start  gap-5 z-10">
            {projects.projects.map((project) => {
              return <ProjectCard key={project.name} item={project} />;
            })}
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default ProjectsSection;
