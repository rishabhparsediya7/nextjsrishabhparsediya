"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import Image from "next/image";
import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Mail } from 'lucide-react';
import Link from "next/link";
import { LinksSection } from "./LinksSection";

export function SparklesPreview() {
    return (
        <div className="h-[100vh] sm:h-[44rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
            {/* <div className="bg-slate-700/40 flex gap-4 rounded-full px-4 py-2 mb-2">
                <Link href='https://github.com/rishabhparsediya7' className="h-12 w-12 bg-black/40 flex items-center justify-center rounded-full"> <Github /></Link>
                <Link href='mailto:parsediyarishabh@gmail.com' className="h-12 w-12 bg-black/40 flex items-center justify-center rounded-full"> <Mail /></Link>
                <Link href='https://linkedin.com/in/rishabh-parsediya' className="h-12 w-12 bg-black/40 flex items-center justify-center rounded-full"> <Linkedin /></Link>
            </div> */}
            <LinksSection />
            <h1 className="md:text-5xl text-4xl lg:text-8xl font-bold text-center text-white relative z-20">
                Rishabh Parsediya
            </h1>
            <div className="w-[40rem] h-40 relative">
                {/* Gradients */}
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                {/* Core component */}
                <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={1200}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />

                {/* Radial Gradient to prevent sharp edges */}
                <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
        </div>
    );
}
