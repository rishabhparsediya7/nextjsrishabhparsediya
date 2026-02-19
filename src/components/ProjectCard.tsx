"use client";

import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { cn } from "@/utils/cn";

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
    isFeatured?: boolean;
    summary?: string;
  };
}) {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className="relative group/card 
                hover:shadow-2xl hover:shadow-emerald-500/[0.1] 
                bg-white dark:bg-zinc-900/40
                border-zinc-200 dark:border-zinc-800
                w-[100vw] sm:w-[30rem] h-auto 
                rounded-2xl p-6 border transition-all duration-300"
      >
        <div className="flex justify-between items-start mb-4">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-zinc-900 dark:text-white"
          >
            {item.name}
          </CardItem>

          <a
            className="bg-zinc-900 dark:bg-white flex justify-center h-8 items-center text-white dark:text-zinc-900 rounded-lg px-4 text-[12px] font-bold hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
            target="_blank"
            href={item.link}
          >
            Visit →
          </a>
        </div>

        {item.summary && (
          <CardItem
            as="p"
            translateZ="55"
            className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-2"
          >
            {item.summary}
          </CardItem>
        )}

        <CardItem
          as="p"
          translateZ="60"
          className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 min-h-[3rem]"
        >
          {item.description}
        </CardItem>

        <CardItem translateZ="100" className="w-full mt-6">
          <Image
            src={item.image || "/placeholder.png"}
            height={500}
            width={500}
            className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl transition-transform duration-500 group-hover/card:scale-[1.02]"
            alt={item.name}
          />
        </CardItem>

        <div className="flex flex-col justify-between items-left mt-6">
          <CardItem className="flex flex-wrap gap-2" translateZ="50">
            {item.technology_used.map((tech) => (
              <span
                className={cn(
                  "text-[10px] font-bold px-3 py-1 rounded-full border transition-colors",
                  tech === item.label
                    ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 border-transparent"
                    : "bg-zinc-50 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700",
                )}
                key={tech}
              >
                {tech}
              </span>
            ))}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
