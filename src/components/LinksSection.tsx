"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Mail } from 'lucide-react';

const people = [
    {
        id: 1,
        name: "GitHub",
        designation: "Rishabh Parsediya",
        Icon: () => <Github />
    },
    {
        id: 2,
        name: "Gmail",
        designation: "Rishabh Parsediya",
        Icon: () => <Mail />
    },
    {
        id: 3,
        name: "LinkedIn",
        designation: "Rishabh Parsediya",
        Icon: () => <Linkedin />
    },
];

export function LinksSection() {
    return (
        <div className="flex flex-row items-center justify-center mb-10 w-full">
            <AnimatedTooltip items={people} />
        </div>
    );
}

