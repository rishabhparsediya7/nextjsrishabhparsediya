'use client';

import React from 'react';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import dynamic from 'next/dynamic';

// Lazy load icons
const FaReact = dynamic(() => import('react-icons/fa').then(mod => mod.FaReact), { ssr: false });
const FaNodeJs = dynamic(() => import('react-icons/fa').then(mod => mod.FaNodeJs), { ssr: false });
const FaDocker = dynamic(() => import('react-icons/fa').then(mod => mod.FaDocker), { ssr: false });
const FaAws = dynamic(() => import('react-icons/fa').then(mod => mod.FaAws), { ssr: false });
const FaGitAlt = dynamic(() => import('react-icons/fa').then(mod => mod.FaGitAlt), { ssr: false });
const SiNextdotjs = dynamic(() => import('react-icons/si').then(mod => mod.SiNextdotjs), { ssr: false });
const SiTypescript = dynamic(() => import('react-icons/si').then(mod => mod.SiTypescript), { ssr: false });
const SiPostgresql = dynamic(() => import('react-icons/si').then(mod => mod.SiPostgresql), { ssr: false });
const SiMongodb = dynamic(() => import('react-icons/si').then(mod => mod.SiMongodb), { ssr: false });
const SiRedis = dynamic(() => import('react-icons/si').then(mod => mod.SiRedis), { ssr: false });
const SiGraphql = dynamic(() => import('react-icons/si').then(mod => mod.SiGraphql), { ssr: false });
const SiTailwindcss = dynamic(() => import('react-icons/si').then(mod => mod.SiTailwindcss), { ssr: false });
const SiPrisma = dynamic(() => import('react-icons/si').then(mod => mod.SiPrisma), { ssr: false });
const TbBrandReactNative = dynamic(() => import('react-icons/tb').then(mod => mod.TbBrandReactNative), { ssr: false });

const techCategories = [
  {
    title: 'Frontend',
    items: [
      { name: 'React', icon: <FaReact className="w-6 h-6 text-blue-500" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="w-6 h-6 text-black dark:text-white" /> },
      { name: 'TypeScript', icon: <SiTypescript className="w-6 h-6 text-blue-600" /> },
      { name: 'React Native', icon: <TbBrandReactNative className="w-6 h-6 text-blue-400" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-6 h-6 text-cyan-400" /> },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', icon: <FaNodeJs className="w-6 h-6 text-green-600" /> },
      { name: 'GraphQL', icon: <SiGraphql className="w-6 h-6 text-pink-600" /> },
      { name: 'REST APIs', icon: '🌐', custom: true },
      { name: 'JWT Authentication', icon: '🔑', custom: true },
    ],
  },
  {
    title: 'Database',
    items: [
      { name: 'PostgreSQL', icon: <SiPostgresql className="w-6 h-6 text-blue-700" /> },
      { name: 'MongoDB', icon: <SiMongodb className="w-6 h-6 text-green-600" /> },
      { name: 'Redis', icon: <SiRedis className="w-6 h-6 text-red-600" /> },
      { name: 'Prisma', icon: <SiPrisma className="w-6 h-6 text-blue-900 dark:text-blue-100" /> },
    ],
  },
  {
    title: 'DevOps & Tools',
    items: [
      { name: 'Docker', icon: <FaDocker className="w-6 h-6 text-blue-400" /> },
      { name: 'AWS', icon: <FaAws className="w-6 h-6 text-orange-500" /> },
      { name: 'Git', icon: <FaGitAlt className="w-6 h-6 text-orange-600" /> },
      { name: 'CI/CD', icon: '🔄', custom: true },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10
    }
  }
};

const TechCard = React.memo(({ name, icon, custom = false }: { name: string; icon: React.ReactNode; custom?: boolean }) => (
  <motion.div
    variants={item}
    initial="hidden"
    animate="show"
    whileHover={{ 
      scale: 1.05,
      y: -5,
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
    }}
    whileTap={{ scale: 0.98 }}
    style={{
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
    }}
    transition={{ 
      type: 'spring', 
      stiffness: 300,
      damping: 10
    }}
    className="min-w-[8rem] min-h-[8rem] p-4 hover:bg-gray-200 dark:hover:bg-[#121212] hover:shadow-2xl hover:shadow-emerald-500/[0.1] rounded-lg shadow-md flex flex-col items-center justify-center cursor-default"
  >
    <div className={`${custom ? 'text-3xl' : ''} mb-2`}>
      {icon}
    </div>
    <span className="text-sm font-thin text-gray-700 dark:text-gray-200">{name}</span>
  </motion.div>
));

const TechStack = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 pl-6"
        >
          <h1 className="text-2xl font-thin text-gray-900 dark:text-white mb-1">Tech Stack</h1>
          <p className="text-sm font-thin text-gray-600 dark:text-gray-300">Here is a list of the tech that powers my projects</p>
        </motion.div>
        
        <LazyMotion features={domAnimation}>

        <div className="flex flex-col gap-2">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100
              }}
              className="rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-2xl font-thin text-gray-800 dark:text-white mb-2">
                  {category.title}
                </h2>
                <motion.div 
                  className="flex flex-wrap gap-4"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  {category.items.map((item) => (
                    <TechCard 
                      key={item.name} 
                      name={item.name} 
                      icon={item.icon} 
                      custom={item.custom} 
                    />
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        </LazyMotion>
      </div>
    </div>
  );
};

export default TechStack;