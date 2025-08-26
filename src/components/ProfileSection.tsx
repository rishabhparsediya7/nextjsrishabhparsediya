"use client";

import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
};

function ProfileSection() {
  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center overflow-hidden rounded-md">
      <motion.div 
        className="space-y-6 relative z-20 max-w-2xl px-4 py-12"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p 
          className="text-sm leading-relaxed text-gray-800 dark:text-gray-200"
          variants={item}
        >
          Hi there 👋 <br /> I'm a Full Stack Developer with 3+ years of
          experience building scalable and user-friendly digital products. I
          enjoy working across the stack — from crafting seamless front-end
          experiences with React and React Native, to designing robust back-end
          systems with Node.js, GraphQL, and PostgreSQL.
        </motion.p>
        
        <motion.p 
          className="text-sm leading-relaxed text-gray-800 dark:text-gray-200"
          variants={item}
        >
          My focus is on writing clean, maintainable, and performant code while
          solving real-world problems. I'm especially passionate about building
          products that make people's lives easier.
        </motion.p>
        
        <motion.p 
          className="text-sm leading-relaxed text-gray-800 dark:text-gray-200"
          variants={item}
        >
          Outside of coding, I love exploring new technologies, learning
          continuously, and sharing knowledge with the developer community.
        </motion.p>
        
        <motion.p 
          className="text-sm text-gray-800 dark:text-gray-200 font-medium mt-8"
          variants={item}
        >
          ~ Rishabh Parsediya
        </motion.p>
      </motion.div>
    </div>
  );
}

export default ProfileSection;
