'use client'
import React from 'react'
import { BackgroundBeams } from './ui/background-beams';
import projects from '../data/projects.json'
import { ThreeDCardDemo } from './ThreeDCard';

function ProjectsSection() {
    return (
        <div id='projects' className="h-[full] w-full rounded-md bg-neutral-950 relative flex flex-col items-center antialiased">
            <div className="max-w-full p-4">
                <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center mt-20 font-sans font-bold">
                    PROJECTS
                </h1>
                <div className='max-w-[100vw] flex p-0 sm:px-20'>
                    <div className="flex overflow-x-auto custom-scrollbar gap-x-5 z-10">
                        {projects.projects.map((project, index) => {
                            return (
                                <ThreeDCardDemo
                                    key={project.name}
                                    item={project}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
            <BackgroundBeams />
        </div>
    );
}

export default ProjectsSection
