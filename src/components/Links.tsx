import React from 'react';
import { Github, Linkedin, Mail, icons } from 'lucide-react';
import Link from 'next/link';

interface LinkType {
    link: string,
    name: JSX.Element
}

export function Links() {

    const iconsArray: LinkType[] = [
        { link: "https://github.com/rishabhparsediya7", name: < Github /> },
        { link: "https://www.linkedin.com/in/rishabh-parsediya/", name: < Linkedin /> },
        { link: "mailto:parsediyarishabh@gmail.com", name: <Mail /> }
    ];
    return (
        <div className="w-full bg-[#161616] py-2">
            <div className="flex h-full my-auto justify-center space-x-12 items-center">
                {iconsArray.map((icon: LinkType, index) => (
                    <div key={index} className="mx-2 bg-black p-3 rounded-full">
                        <Link href={icon.link} >
                            {icon.name}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
