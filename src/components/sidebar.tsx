"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiHome,
  FiUser,
  FiBriefcase,
  FiFileText,
  FiMail,
  FiMenu,
  FiX,
  FiGithub,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import Image from "next/image";
type NavItem = {
  name: string;
  path: string;
  icon: React.ReactNode;
};

const navItems: NavItem[] = [
  { name: "Home", path: "/", icon: <FiHome className="w-5 h-5" /> },
  { name: "About", path: "/about", icon: <FiUser className="w-5 h-5" /> },
  {
    name: "Projects",
    path: "/projects",
    icon: <FiBriefcase className="w-5 h-5" />,
  },
  { name: "Resume", path: "/resume", icon: <FiFileText className="w-5 h-5" /> },
  { name: "Contact", path: "/contact", icon: <FiMail className="w-5 h-5" /> },
];

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: <FiGithub className="w-5 h-5" />,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: <FiLinkedin className="w-5 h-5" />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yourusername",
    icon: <FiTwitter className="w-5 h-5" />,
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const MobileMenuButton = () => (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
      aria-label="Toggle menu"
    >
      {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
    </button>
  );

  useEffect(() => {
    if (typeof document !== "undefined") {
      const mobileMenuButton = document.getElementById(
        "mobile-menu-button-content"
      );
      if (mobileMenuButton) {
        const mobileButton = document.createElement("div");
        mobileButton.className = "md:hidden";
        mobileMenuButton.replaceChildren(mobileButton);

        import("react-dom/client")
          .then(({ createRoot }) => {
            const root = createRoot(mobileButton);
            root.render(<MobileMenuButton />);

            return () => {
              root.unmount();
            };
          })
          .catch(() => {
            import("react-dom").then((ReactDOM) => {
              ReactDOM.render(<MobileMenuButton />, mobileButton);
            });
          });
      }
    }
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <>
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 transform ${
          isOpen
            ? "translate-x-0"
            : "-translate-x-full border-r border-gray-600 dark:border-gray-900"
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col h-full p-2">
          <div className="p-2 flex items-center gap-2 mb-4">
            <Image
              src="/profile.webp"
              alt="author"
              width={50}
              height={10}
              className="rounded-full h-12 w-12 transition-transform duration-200 cursor-pointer hover:scale-110"
            />
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
                    className={`flex items-center text-xs sm:text-sm px-2 py-3 rounded-lg ${
                      pathname === item.path
                        ? "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white"
                        : "text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800"
                    }`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-xs text-center text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Rishabh Parsediya. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
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
