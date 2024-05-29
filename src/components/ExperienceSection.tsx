"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { content } from '../data/experience'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

export function ExperienceSection() {
    useGSAP(() => {
        gsap.to("#experience h1", {
            transform: "translateX(-100%)",
            scrollTrigger: {
                trigger: "#experience h1",
                start: "top 20%",
                end: "top -100%",
                scrub: 2,
            }
        });
    })
    return (
        <div id="experience" className="w-full overflow-x-hidden">
            <h1 id="experience-heading" className="uppercase text-[30vw]">Experience</h1>
            <StickyScroll content={content} />
        </div>
    );
}
