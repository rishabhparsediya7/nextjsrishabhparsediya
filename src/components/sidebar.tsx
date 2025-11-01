"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FiBriefcase,
  FiGithub,
  FiHome,
  FiLinkedin,
  FiMail,
  FiMenu,
  FiUser,
  FiX
} from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";
import imagekit from "../../imagekit-uploads.json";
import Image from "next/image";
import { FaCaretLeft, FaProjectDiagram } from "react-icons/fa";
import { TbArrowLeftFromArc, TbSignLeft } from "react-icons/tb";
import { SiLefthook } from "react-icons/si";
type NavItem = {
  name: string;
  path: string;
  icon: React.ReactNode;
};

const navItems: NavItem[] = [
  { name: "Home", path: "/", icon: <FiHome /> },
  { name: "Tech Stack", path: "/techstack", icon: <FiUser /> },
  {
    name: "Projects",
    path: "/projects",
    icon: <FaProjectDiagram />,
  },
  { name: "Experience", path: "/experience", icon: <FiBriefcase /> },
  { name: "Github Highlights", path: "/github", icon: <FiUser /> },
  { name: "Contact", path: "/contact", icon: <FiMail /> },
];

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/rishabhparsediya7",
    icon: <FiGithub />,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/rishabh-parsediya",
    icon: <FiLinkedin />,
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/RishabhParsedi1",
    icon: <FiX />,
  },
];

const Sidebar = ({isOpenMenu, toggleSB }: {isOpenMenu: boolean, toggleSB?: () => void}) => {
  const [isOpen, setIsOpen] = useState(isOpenMenu);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    toggleSB?.();
  };

  if (!mounted) return null;

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleMenu}
          className="p-2 rounded-md transition-all duration-300 ease-in-out"
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <FiMenu 
              className={`absolute -top-2 inset-0 transition-all duration-300 text-gray-800 dark:text-black bg-gray-200 dark:bg-gray-200 p-2 rounded-md ${isOpen ? 'opacity-0 -translate-x-4 rotate-90' : 'opacity-100'}`} 
              size={32} 
            />
            <TbSignLeft 
              className={`absolute top-0 left-48 inset-0 transition-all duration-300 transform ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 -rotate-90'} hover:scale-110`} 
              size={24} 
            />
          </div>
        </button>
      </div>
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 transform ${
          isOpen
            ? "translate-x-0"
            : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col h-full p-2 max-[768px]:bg-black">
          <div className="p-2 flex items-center gap-2 mb-1">
            <div className="p-0.5 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 transition-transform duration-200 cursor-pointer hover:scale-110">
              <div className="p-0.2 rounded-full bg-white dark:bg-gray-900">
                <Image
                  src={imagekit["profile-webp"]?.url || ""}
                  alt="author"
                  width={40}
                  height={40}
                  className="rounded-full h-8 w-8"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-md font-bold text-gray-800 dark:text-white">
                Rishabh Parsediya
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Full Stack Developer
              </p>
            </div>
          </div>
          <nav className="flex-1">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`flex items-center justify-between w-full px-2 py-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-[#121212] transition-colors text-[8px] text-sm ${isActive(item.path) ? "bg-gray-200 dark:bg-[#121212]" : ""}`}
                  >
                    <div className="flex items-center gap-2"> 
                      <span className="w-4 flex-shrink-0">{item.icon}</span>
                      <span className="font-thin">{item.name}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex mb-8">
            <nav className="flex flex-col gap-3 w-full">
              <ul className="border-t border-gray-200 dark:border-gray-900 pt-2">
                {socialLinks.map((social) => (
                  <li
                    key={social.name}
                    className="list-none hover:bg-gray-200 dark:hover:bg-[#121212] w-full px-2 py-2 rounded-lg"
                  >
                    <Link
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-[8px] text-sm justify-between gap-2 text-gray-500 dark:text-gray-400  transition-colors w-full"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-4 flex-shrink-0">{social.icon}</span>
                        <span className="font-thin text-[8px] text-sm">
                          {social.name}
                        </span>
                      </div>
                      <span className="w-4 flex-shrink-0">
                        <GoArrowUpRight size={12} />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
