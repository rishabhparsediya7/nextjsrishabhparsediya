"use client";

import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function ProjectCard({
  item,
}: {
  item: {
    name: string;
    technology_used: string[];
    image: string;
    description: string;
    link: string;
    label: string;
  };
}) {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className="relative group/card 
                hover:shadow-2xl hover:shadow-emerald-500/[0.1] 
                bg-white dark:bg-black 
                border-black/[0.2] dark:border-white/[0.2] 
                w-[100vw] sm:w-[30rem] h-auto 
                rounded-xl p-6 border"
      >
        <div className="flex justify-between mb-4">
          <CardItem
            translateZ="50"
            className="text-lg md:text-sm max-h-10 min-h-10 font-bold text-black dark:text-white"
          >
            {item.name}
          </CardItem>

          <a
            className="bg-black dark:bg-white flex justify-center max-h-7 items-center text-white dark:text-black rounded-2xl px-3 text-[12px] py-1 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            target="_blank"
            href={item.link}
          >
            <p className="justify-center md:min-w-10 min-w-20 flex items-center flex-col">
              Visit now →
            </p>
          </a>
        </div>
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm ellipsis tracking-wide mt-2 text-neutral-600 dark:text-neutral-300"
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
          <CardItem
            className={
              "mt-8 text-zinc-600 dark:text-zinc-400 tracking-wide leading-relaxed text-sm flex flex-wrap gap-2"
            }
          >
            {item.technology_used.map((tech) => (
              <p
                className={`
                                    ${
                                      tech === item.label
                                        ? "bg-black dark:bg-white text-white dark:text-black"
                                        : "bg-gray-100 dark:bg-slate-800 text-black dark:text-white"
                                    }
                                    text-[12px] rounded-xl px-4 py-1 transition-colors
                                    hover:bg-gray-200 dark:hover:bg-slate-700
                                `}
                key={tech}
              >
                {tech}
              </p>
            ))}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
