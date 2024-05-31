"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

export function ThreeDCardDemo({ item }: {
    item: {
        name: string,
        technology_used: string[],
        image: string,
        description: string,
        link: string
        label: string
    }
}) {
    return (
        <CardContainer className="inter-var">
            <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] w-[100vw] sm:w-[30rem] h-[80vh] rounded-xl p-6 border  ">
                <div className="flex justify-between mb-4">
                    <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-white"
                    >
                        {item.name}
                    </CardItem>
                    <div className="bg-white flex justify-center max-h-7 items-center text-black rounded-2xl px-3 text-[12px] py-1">
                        <a target="_blank" href={item.link} className="m-auto">Visit now →</a>
                    </div>
                </div>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-sm max-w-sm ellipsis tracking-wide mt-2 text-neutral-300"
                >
                    {item.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                        src={`/${item.image}`}
                        height={500}
                        width={500}
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                <div className="flex flex-col justify-between items-left mt-4">
                    <CardItem className={
                        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm flex flex-wrap gap-2"}>
                        {
                            item.technology_used.map((tech) =>
                                <p className={`bg-slate-800 text-[12px] rounded-xl px-4 py-1 ${tech === item.label && `bg-white text-slate-800`}`} key={tech}>{tech}</p>
                            )
                        }
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}
