"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function FeaturedProjectCard({
  item,
}: {
  item: {
    name: string;
    label: string;
    technology_used: string[];
    summary: string;
    description: string;
    key_features: string[];
    contributions: string[];
    impact: string;
    highlight: string;
    image: string;
    link: string;
  };
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 mb-12"
    >
      <div className="flex flex-col lg:flex-row h-full">
        {/* Image Section */}
        <div className="lg:w-2/5 relative h-64 lg:h-auto overflow-hidden">
          <Image
            src={item.image || "/placeholder.png"}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden" />
          <div className="absolute bottom-4 left-4 lg:hidden">
            <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs rounded-full">
              {item.label}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:w-3/5 p-6 lg:p-8 flex flex-col">
          <div className="hidden lg:flex justify-between items-start mb-4">
            <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-medium rounded-full border border-zinc-200 dark:border-zinc-700">
              {item.label}
            </span>
            <a
              href={item.link}
              target="_blank"
              className="text-sm font-semibold text-zinc-900 dark:text-white flex items-center hover:opacity-70 transition-opacity"
            >
              Case Study <span className="ml-1">→</span>
            </a>
          </div>

          <h3 className="text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mb-2">
            {item.name}
          </h3>
          <p className="text-lg font-medium text-emerald-600 dark:text-emerald-400 mb-4 leading-snug">
            {item.summary}
          </p>

          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
            {item.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3">
                Key Features
              </h4>
              <ul className="space-y-2">
                {item.key_features.map((feature, i) => (
                  <li
                    key={i}
                    className="text-sm text-zinc-700 dark:text-zinc-300 flex items-start"
                  >
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3">
                Technical Impact
              </h4>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 italic mb-4">
                &ldquo;{item.impact}&rdquo;
              </p>
              <div className="p-3 bg-zinc-50 dark:bg-zinc-800/80 rounded-lg border border-zinc-100 dark:border-zinc-700">
                <p className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase mb-1 tracking-tight">
                  Technical Highlight
                </p>
                <p className="text-sm text-zinc-900 dark:text-zinc-100 font-medium">
                  {item.highlight}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-auto">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3">
              Engineering Contributions
            </h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {item.contributions.map((contribution, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-white dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs rounded-md"
                >
                  {contribution}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2 pt-4 border-t border-zinc-100 dark:border-zinc-800">
              {item.technology_used.map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] uppercase tracking-widest font-black text-zinc-400 dark:text-zinc-500"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
