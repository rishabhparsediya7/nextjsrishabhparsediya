"use client";
import React from "react";
import { Menu } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";

export function NavbarDemo() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-2" />
            <p className="text-black">
                .
            </p>
        </div>
    );
}

function Navbar({ className }: { className?: string }) {
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 px-2 sm:px-0", className)}
        >
            <Menu>
                <div className="flex gap-4">
                    <Link className="flex text-sm sm:text-base items-center text-white" href='/#profile'>Profile</Link>
                    <Link className="flex text-sm sm:text-base items-center text-white" href='/#projects'>Projects</Link>
                    <Link className="flex text-sm sm:text-base items-center text-white" href='/#experience'>Experience</Link>
                    <Link className="flex text-sm sm:text-base items-center text-white" href='/#contact'>Contact</Link>
                </div>
                <div style={{ borderRadius: '5px', overflow: 'hidden' }}>
                    <Image src='/profile2.jpg' alt="author" width={50} height={10} className="rounded-2xl" />
                </div>
            </Menu>

        </div>
    );
}
