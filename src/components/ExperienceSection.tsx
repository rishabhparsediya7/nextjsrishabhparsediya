"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
        title: "Software Engineer",
        company: "Persistent Systems",
        timeline: "2022 July - 2024 July",
        description:
            "Being an SDE, I was glad enough to got a chance working on diversified domains and team. Collaborated with clients presented me ample opportunities to showcase my skills in different domains and to be a part of one of the Biggest Teams",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--indigo-500),var(--lime-300))] flex items-center justify-center text-white">
                SDE, Persistent Systems
            </div>
        ),
    },
    {
        title: "SDE Intern",
        company: "Persistent Systems",
        timeline: "2022 Jan - 2022 July",
        description:
            "Got a chance to work and get trained on the Full Stack Technologies, where I was collaborated with Team and completed the assignments and moved to a position where these skills can be applied practically",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
                SDE Intern, Persistent Systems
            </div>
        ),
    },
    {
        title: "SE Intern",
        company: "Virtusa",
        timeline: "2021 Dec - 2022 Jan",
        description:
            "Delve myself into a Java Full Stack Training where I got a chance to worked with the team and present my skills",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                SE Intern, Virtusa
            </div>
        ),
    },
];
export function ExperienceSection() {
    return (
        <div id="experience" className="w-full">
            <StickyScroll content={content} />
        </div>
    );
}
