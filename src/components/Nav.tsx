"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";

export function NavbarDemo() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-2" />
            <p className="text-black dark:text-white">
                The Navbar will show on top of the page
            </p>
        </div>
    );
}

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 px-2 sm:px-0", className)}
        >
            <Menu setActive={setActive}>
                <div className="flex gap-4">
                    <Link className="flex items-center" href='#profile'>Profile</Link>
                    <Link className="flex items-center" href='#projects'>Projects</Link>
                    <Link className="flex items-center" href='#experience'>Experience</Link>
                </div>
                <div style={{ borderRadius: '5px', overflow: 'hidden' }}>
                    <Image src='/profile2.jpg' alt="author" width={50} height={10} className="rounded-2xl" objectFit="cover" />
                </div>
            </Menu>

        </div>
    );
}
