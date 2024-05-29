'use client'
import React, { useEffect, useState } from 'react'
import { SparklesPreview } from './SparklesPreview'
import Image from 'next/image';
import boxArray from "../data/planets.json";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

function ProfileSection() {
    const radius = 240;
    const angleStep = (2 * Math.PI) / 12;

    useGSAP(() => {
        gsap.to("#rotator", {
            transform: 'rotate(120deg)',
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: "#sec",
                scroller: 'body',
                scrub: 4,
            }
        });
    })

    return (
        <div id='sec' className='flex flex-col h-full w-full max-w-full' >
            <div id="rotator" className='fixed border border-white rounded-full -top-[7rem] -right-[13.5rem] '>
                <Image src="/planets/moon.png" className='mooncls' alt='planets' width={500} height={500} />
                {
                    boxArray.boxArray.map((box: { src: string, cn: string }, index: number) => {
                        const angle = index * angleStep;
                        const x = radius * Math.cos(angle) + radius;
                        const y = radius * Math.sin(angle) + radius;
                        return (
                            <Image
                                src={box.src}
                                key={index}
                                id={box.cn}
                                className="absolute w-12 z-50 h-12 text-white flex justify-center items-center rounded-full"
                                style={{ top: `${y}px`, left: `${x}px`, height: "150px", width: "150px", transform: `translate(-50%, -50%)` }} alt='moon' height={500} width={500} />
                        )
                    })}
            </div>
            <div className=''>
                <SparklesPreview />
            </div>
        </div>
    )
}

export default ProfileSection
