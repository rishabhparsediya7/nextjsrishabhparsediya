"use client";
import { useTheme } from "@/context/ThemeProvider";
import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export default function GithubContributor() {
  const { theme } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div 
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
      ref={ref}
    >
      <motion.div 
        className="text-center mb-12"
        variants={fadeInUp}
      >
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
          GitHub Activity
        </h2>
      </motion.div>
      
      <motion.div 
        className=" backdrop-blur-sm rounded-xl shadow-lg p-6 mb-8 border border-gray-100 dark:border-gray-700/50"
        variants={fadeInUp}
        whileHover={{
          y: -5,
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
          transition: { duration: 0.3 }
        }}
      >
        <motion.p 
          className="text-zinc-700 dark:text-gray-300 text-sm font-thin mb-6 text-center max-w-3xl mx-auto"
          variants={fadeInUp}
        >
          I actively manage my GitHub as a central hub for all my projects,
          showcasing my journey in full-stack development. From scalable web
          apps to optimized backend systems, I consistently push clean,
          efficient, and well-documented code. My repositories reflect my
          expertise in React, Node.js, GraphQL, and cloud technologies, along
          with contributions. Explore my GitHub to see my work in
          action—real-world solutions, innovative experiments, and a passion for
          building impactful software. 🚀
        </motion.p>
        
        <motion.div 
          className="overflow-x-auto"
          variants={fadeInUp}
        >
          <div className="min-w-[800px] md:min-w-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <GitHubCalendar
                username="rishabhparsediya7"
                colorScheme={theme === "dark" ? "dark" : "light"}
                fontSize={12}
                blockSize={12}
                blockMargin={4}
                style={{
                  margin: '0 auto',
                  maxWidth: '100%',
                }}
                transformData={(data) => {
                  console.log(data);
                  return data;
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
