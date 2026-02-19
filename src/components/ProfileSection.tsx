"use client";

import { motion } from "framer-motion";
import imagekit from "../../imagekit-uploads.json";
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
      ease: "easeOut",
    },
  },
};

const techStackCards = [
  {
    id: 1,
    name: "add-expense.png",
    src: imagekit["add-expense"].url,
    fileId: "6901272c5c7cd75eb8203461",
    filePath: "/my-project/add-expense_gmDNOgmqV.png",
  },
  {
    id: 2,
    name: "expenses.png",
    src: imagekit["expenses"].url,
    fileId: "690127345c7cd75eb820879e",
    filePath: "/my-project/expenses_cKcfLLLkT.png",
  },
  {
    id: 3,
    name: "home.png",
    src: imagekit["home"].url,
    fileId: "6901273a5c7cd75eb820ac39",
    filePath: "/my-project/home_nM7jWlhUs.png",
  },
  {
    id: 4,
    name: "login.png",
    src: imagekit["login"].url,
    fileId: "690127445c7cd75eb820e5cc",
    filePath: "/my-project/login_XVs3vmYak.png",
  },
  {
    id: 5,
    name: "profile.png",
    src: imagekit["profile-png"].url,
    fileId: "6901274c5c7cd75eb8213477",
    filePath: "/my-project/profile_c6QEIE42o.png",
  },
];

function ProfileSection() {
  const joinedDate = new Date("2022-02-17T00:00:00");
  const today = new Date();
  const diffTime = Math.abs(today.getTime() - joinedDate.getTime());
  const diffDays = (diffTime / (1000 * 60 * 60 * 24 * 365)).toFixed(1);
  return (
    <div className="w-full min-h-screen flex flex-col items-center py-8 md:py-12 px-4">
      <motion.div
        className="w-full max-w-full mx-auto text-center mb-8 md:mb-16 px-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          variants={item}
        >
          Senior Full Stack Engineer
        </motion.h1>

        <motion.div className="space-y-4 md:space-y-6 text-left max-w-4xl mx-auto">
          <motion.p
            className="text-md leading-relaxed text-gray-400 dark:text-gray-200"
            variants={item}
          >
            Hi there 👋 I&apos;m a Senior Full Stack Engineer with {diffDays}{" "}
            years of experience in engineering high-stakes, enterprise-grade
            systems. I specialize in the full software lifecycle from
            architecting seamless, high-performance user interfaces with React
            and React Native to building resilient, distributed backend
            infrastructures using Node.js, GraphQL, and PostgreSQL.
          </motion.p>

          <motion.p
            className="text-md md:text-lg leading-relaxed text-gray-400 dark:text-gray-200"
            variants={item}
          >
            Driven by a philosophy of &quot;Complexity simplified,&quot; I focus
            on building maintainable, high-performance systems that solve
            mission-critical challenges. My goal is to bridge the gap between
            technical complexity and business growth, delivering software that
            is as reliable as it is innovative.
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div
        className="w-full max-w-5xl mx-auto gap-12 px-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div className="space-y-8" variants={item}>
          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900/50 dark:to-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden group">
            {/* Animated Background Decor */}
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <svg
                width="160"
                height="160"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-emerald-500 transform rotate-12"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </div>

            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight leading-tight">
              Architecting{" "}
              <span className="text-emerald-500">Scalable Systems</span> &
              Engineering Excellence
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-2 border-l-2 border-emerald-500/20 pl-4 hover:border-emerald-500 transition-colors duration-300">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
                  Scale & Resilience
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Engineering distributed architectures that thrive under high
                  traffic. Experience with retail platforms serving users.
                </p>
              </div>
              <div className="space-y-2 border-l-2 border-emerald-500/20 pl-4 hover:border-emerald-500 transition-colors duration-300">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
                  Security Hardening
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Zero-trust approach at the core implementing advanced RBAC,
                  hardened auth, and PII protection for enterprise B2B portals.
                </p>
              </div>
              <div className="space-y-2 border-l-2 border-emerald-500/20 pl-4 hover:border-emerald-500 transition-colors duration-300">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
                  DX & Infrastructure
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Building the foundation that powers teams. Expert in
                  platform-agnostic SDKs and high-performance multi-tenant
                  component libraries.
                </p>
              </div>
              <div className="space-y-2 border-l-2 border-emerald-500/20 pl-4 hover:border-emerald-500 transition-colors duration-300">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
                  Tactical Ownership
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  More than a developer, I bridge business requirement with
                  technical implementation, owning the lifecycle from PRD to
                  production.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-zinc-100 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-6">
              <div className="flex gap-8">
                <div className="space-y-1">
                  <p className="text-2xl font-black text-zinc-900 dark:text-white">
                    5+
                  </p>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">
                    Major Systems
                  </p>
                </div>
                <div className="w-[1px] h-10 bg-zinc-200 dark:bg-zinc-800" />
                <div className="space-y-1">
                  <p className="text-2xl font-black text-zinc-900 dark:text-white">
                    100%
                  </p>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">
                    Audit Ready
                  </p>
                </div>
              </div>
              <div className="px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl overflow-hidden relative group/btn transition-transform hover:scale-105 active:scale-95">
                <p className="text-xs font-bold uppercase tracking-widest relative z-10 transition-colors">
                  Clean Code. Proven Impact.
                </p>
                <div className="absolute inset-0 bg-emerald-500 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </motion.div>
        {/* 
            [COMMENTED] Old Project Specific Highlight
            <motion.div className="p-8 rounded-xl shadow-lg" variants={item}>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Flagged - High-Performance Feature Management
              </h2>
            </motion.div>
          */}

        {/* <motion.div
          className="hidden sm:flex max-w-3xl flex-col justify-center"
          variants={item}
        >
          <StackedCards cards={techStackCards} />
        </motion.div> */}
      </motion.div>
    </div>
  );
}

export default ProfileSection;
