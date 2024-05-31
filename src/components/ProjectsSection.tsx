'use client'
import React, { useEffect } from 'react'
import { BackgroundBeams } from './ui/background-beams';
import projects from '../data/projects.json';
import { ThreeDCardDemo } from './ThreeDCard';
import gsap from 'gsap';
import SplitType from 'split-type'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

function ProjectsSection() {
    useEffect(() => {
        const ourText = new SplitType('#project-heading')
        gsap.to('.char', {
            y: 0,
            stagger: 0.01,
            duration: .1,
            scrollTrigger: {
                trigger: '#project-heading',
                scrub: true,
                start: "top 60%",
                end: "bottom 40%",
            }
        })
    }, [])
    return (
        <div id='projects' className="h-[full] w-full rounded-md bg-neutral-950 relative flex flex-col items-center antialiased">
            <div className="max-w-full p-4 overflow-x-hidden">
                <div id='project-heading' className="relative z-10 text-7xl text-white sm:text-[10vw] bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center mt-20 font-sans font-bold">
                    PROJECTS
                </div>
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
