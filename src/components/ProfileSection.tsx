"use client";

import { motion } from "framer-motion";
import StackedCards from "./StackedCards";

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
    src: "/trakio/home.png",
    content: "Home",
  },
  {
    id: 2,
    src: "/trakio/expenses.png",
    content: "Expenses",
  },
  {
    id: 3,
    src: "/trakio/add-expense.png",
    content: "Add Expense",
  },
  {
    id: 4,
    src: "/trakio/profile.png",
    content: "Profile",
  },
  {
    id: 5,
    src: "/trakio/login.png",
    content: "Login",
  },
];

function ProfileSection() {
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
          Full Stack Developer
        </motion.h1>

        <motion.div className="space-y-4 md:space-y-6 text-left max-w-4xl mx-auto">
          <motion.p
            className="text-md leading-relaxed text-gray-400 dark:text-gray-200"
            variants={item}
          >
            Hi there 👋 I&apos;m a Full Stack Developer with 3+ years of
            experience building scalable and user-friendly digital products. I
            enjoy working across the stack — from crafting seamless front-end
            experiences with React and React Native, to designing robust
            back-end systems with Node.js, GraphQL, and PostgreSQL.
          </motion.p>

          <motion.p
            className="text-md md:text-lg leading-relaxed text-gray-400 dark:text-gray-200"
            variants={item}
          >
            My focus is on writing clean, maintainable, and performant code
            while solving real-world problems. I&apos;m especially passionate
            about building products that make people&apos;s lives easier.
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div
        className="max-w-5xl absolute top-[50%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div
          className="flex flex-col max-w-2xl justify-center"
          variants={item}
        >
          <motion.div className="p-8 rounded-xl shadow-lg" variants={item}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Trakio - A Modern Expense Manager
            </h2>
            <p className="text-gray-200 mb-4">A React Native app built with React Native, Node.js, and PostgreSQL. Trakio is a modern expense manager that makes it simple to stay on top of your finances.</p>

            <p className="text-gray-400 mb-4">
              Trakio is a modern expense manager that makes it simple to stay on
              top of your finances. Whether you’re managing personal spending,
              splitting bills with friends, or running shared budgets, Trakio
              brings everything together in one place.
            </p>

            <p className="text-gray-400 mb-4">
              You can easily add and categorize expenses, track who owes what,
              and chat directly within the app to keep conversations tied to
              your spending. With real-time sync across devices, Trakio ensures
              that everyone is always on the same page.
            </p>

            <p className="text-gray-400 mb-4">
              Detailed insights and reports help you understand your habits and
              set smarter financial goals. And when needed, you can export your
              data into multiple formats for accounting, taxes, or just keeping
              a backup.
            </p>

            <p className="text-gray-400">
              Simple, collaborative, and secure — Trakio is built to make
              expense tracking effortless while keeping your finances clear and
              organized.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex max-w-3xl flex-col justify-center"
          variants={item}
        >
          <StackedCards cards={techStackCards} />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ProfileSection;
