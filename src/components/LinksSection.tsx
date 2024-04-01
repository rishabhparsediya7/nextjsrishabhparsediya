"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { Github, Linkedin, Mail } from 'lucide-react';

const people = [
    {
        id: 1,
        name: "Rishabh Parsediya",
        designation: "LinkedIn",
        link: "https://www.linkedin.com/in/rishabh-parsediya/",
        image: '/linkedin.png'
    },
    {
        id: 2,
        name: "Rishabh Parsediya",
        designation: "Github",
        link: "https://github.com/rishabhparsediya7",
        image: '/github.png'
    },
    {
        id: 3,
        name: "Rishabh Parsediya",
        designation: "Leetcode",
        link: "https://leetcode.com/rishabhparsediya/",
        image: '/leetcode.png'
    },
    {
        id: 4,
        name: "Rishabh Parsediya",
        designation: "G Mail",
        link: "mailto:parsediyarishabh@gmail.com",
        image: '/gmail.png'
    },
];

export function LinksSection() {
    return (
        <div className="flex flex-row items-center justify-center mb-10 w-full">
            <AnimatedTooltip items={people} />
        </div>
    );
}

