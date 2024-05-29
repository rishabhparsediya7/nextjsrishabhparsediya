'use client'
import React from 'react'
import { BackgroundBeams } from './ui/background-beams';
import projects from '../data/projects.json'
import { ThreeDCardDemo } from './ThreeDCard';

function ProjectsSection() {
    return (
        <div id='projects' className="h-[full] w-full rounded-md bg-neutral-950 relative flex flex-col items-center antialiased">
            <div className="max-w-full p-4">
                <h1 className="relative z-10 text-7xl sm:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center mt-20 font-sans font-bold">
                    PROJECTS <span className='text-[30px]'>({projects.projects.length})</span>
                </h1>
                <div className='max-w-[100vw] flex sm:px-20 relative mt-10'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 content-stretch items-start md:grid-cols-3 gap-5 z-10">
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
