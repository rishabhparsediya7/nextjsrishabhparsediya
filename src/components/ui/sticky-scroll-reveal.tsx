"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { useTheme } from "@/context/ThemeProvider";
export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    company: string;
    timeline: string;
    description: string | React.ReactNode;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const { theme } = useTheme();
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "rgb(255,255,255)", // light mode zinc-100
    "rgb(255,255,255)", // light mode neutral-50
    "rgb(255,255,255)", // light mode slate-50
    "rgb(255,255,255)",
  ];

  const darkBackgroundColors = [
    "rgb(0 0 0)", // dark mode zinc-800
    "rgb(0 0 0)", // dark mode black
    "rgb(0 0 0)", // dark mode neutral-900
    "rgb(0 0 0)",
  ];

  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];
  const backgroundColor =
    theme === "dark"
      ? darkBackgroundColors[activeCard % darkBackgroundColors.length]
      : backgroundColors[activeCard % backgroundColors.length];
  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColor,
      }}
      className="h-[100vh] w-full noscrollbar overflow-y-auto flex justify-center relative rounded-md px-4 sm:px-10 bg-white dark:bg-zinc-800 transition-colors duration-300"
      ref={ref}
    >
      <div className="relative flex flex-col items-start w-full max-w-7xl">
        <div className="w-full flex flex-col lg:flex-row lg:justify-between">
          <div className="w-full">
            {content.map((item, index) => (
              <div key={item.title + index} className="w-full my-20">
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-2xl font-bold text-black dark:text-slate-100"
                >
                  {item.title}
                </motion.h2>
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-xl font-bold text-black dark:text-slate-100"
                >
                  {item.company}
                </motion.h2>
                <motion.h3
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-base font-bold text-black dark:text-slate-100"
                >
                  {item.timeline}
                </motion.h3>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-lg text-gray-600 dark:text-slate-300 mt-10"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
            <div className="h-[30vh]" />
          </div>

          <motion.div
            animate={{
              background: linearGradients[activeCard % linearGradients.length],
            }}
            className={cn(
              "hidden lg:block h-60 w-[40vw] rounded-md bg-white sticky top-28 overflow-hidden shadow-lg dark:shadow-white/10",
              contentClassName
            )}
          >
            {content[activeCard].content ?? null}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
