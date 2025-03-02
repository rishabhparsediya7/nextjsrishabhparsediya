import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

interface LinkType {
  link: string;
  name: JSX.Element;
}

export function Links() {
  const iconsArray: LinkType[] = [
    {
      link: "https://github.com/rishabhparsediya7",
      name: <Github className="text-black dark:text-white" />,
    },
    {
      link: "https://www.linkedin.com/in/rishabh-parsediya/",
      name: <Linkedin className="text-black dark:text-white" />,
    },
    {
      link: "mailto:parsediyarishabh@gmail.com",
      name: <Mail className="text-black dark:text-white" />,
    },
  ];

  return (
    <div className="w-full bg-gray-100 dark:bg-[#161616] py-10 transition-colors duration-300">
      <div className="flex h-full my-auto justify-center space-x-12 items-center">
        {iconsArray.map((icon: LinkType, index) => (
          <div
            key={index}
            className="mx-2 bg-white dark:bg-black p-3 rounded-full 
                            border border-black/10 dark:border-white/10
                            hover:bg-gray-100 dark:hover:bg-zinc-900
                            hover:scale-110 
                            shadow-lg dark:shadow-white/5
                            transition-all duration-300"
          >
            <Link href={icon.link} target="_blank">
              {icon.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
