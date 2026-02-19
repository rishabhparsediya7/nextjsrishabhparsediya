"use client";
import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { FeaturedProjectCard } from "./FeaturedProjectCard";
import { BackgroundBeams } from "./ui/background-beams";
import { motion } from "framer-motion";

function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.isFeatured);
  const otherProjects = projects.filter((p) => !p.isFeatured);

  return (
    <div className="w-full min-h-screen py-20 px-4 md:px-8 relative flex flex-col items-center antialiased">
      <div className="max-w-7xl w-full mx-auto relative z-10">
        {/* Featured Projects Section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white">
              Featured Projects
            </h2>
            <div className="h-[1px] flex-grow bg-zinc-200 dark:bg-zinc-800 hidden md:block" />
          </motion.div>

          <div className="space-y-12">
            {featuredProjects.map((project) => (
              <FeaturedProjectCard key={project.name} item={project as any} />
            ))}
          </div>
        </div>

        {/* Other Projects Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-zinc-900 dark:text-white">
              Technical Contributions
            </h2>
            <div className="h-[1px] flex-grow bg-zinc-200 dark:bg-zinc-800 hidden md:block" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project) => (
              <ProjectCard key={project.name} item={project} />
            ))}
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default ProjectsSection;
