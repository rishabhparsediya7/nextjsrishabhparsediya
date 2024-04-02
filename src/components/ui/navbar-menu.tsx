"use client";
import React from "react";

export const Menu = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <nav
            className="relative rounded-3xl border-[0.1rem] border-white/[0.2] bg-black shadow-input flex justify-between space-x-4 py-2 pl-6 pr-3"
        >
            {children}
        </nav>
    );
};
