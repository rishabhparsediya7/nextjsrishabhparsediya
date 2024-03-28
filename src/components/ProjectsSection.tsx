'use client'
import React from 'react'
import { BackgroundBeams } from './ui/background-beams';
import projects from '../data/projects.json'
import { HoverEffect } from './ui/card-hover-effect';

function ProjectsSection() {
    return (
        <div id='projects' className="h-[full] w-full rounded-md bg-neutral-950 relative flex flex-col items-center antialiased">
            <div className="max-w-full p-4">
                <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center mt-20 font-sans font-bold">
                    PROJECTS
                </h1>
                <div className='w-full mt-8'>
                    <HoverEffect items={projects.projects} />
                </div>
            </div>
            <BackgroundBeams />
        </div>
    );
}

export default ProjectsSection
