"use client";
import React from "react";
import { Menu } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center bg-white dark:bg-black">
      <Navbar className="top-2" />
      {/* <ThemeToggle /> */}
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 px-2 sm:px-0",
        className
      )}
    >
      <Menu>
        <div className="flex gap-4">
          <Link
            className="flex text-sm md:text-md sm:text-base items-center text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            href="/#profile"
          >
            Profile
          </Link>
          <Link
            className="flex text-sm md:text-md sm:text-base items-center text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            href="/#projects"
          >
            Projects
          </Link>
          <Link
            className="flex text-sm md:text-md sm:text-base items-center text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            href="/#experience"
          >
            Experience
          </Link>
          <Link
            className="flex text-sm md:text-md sm:text-base items-center text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            href="/#contact"
          >
            Contact
          </Link>
        </div>
        <div className="rounded-2xl overflow-hidden">
          <Image
            src="/profile2.jpg"
            alt="author"
            width={50}
            height={10}
            className="rounded-2xl hover:scale-110 transition-transform duration-200"
          />
        </div>
      </Menu>
    </div>
  );
}
