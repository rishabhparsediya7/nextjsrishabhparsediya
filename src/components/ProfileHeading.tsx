"use client";
import React from "react";
import {
    TextRevealCard,
    TextRevealCardDescription,
    TextRevealCardTitle,
} from "./ui/text-reveal-card";

export default function ProfileHeading() {
    return (<div className="flex items-center justify-center h-[40rem] rounded-2xl w-full">
        <TextRevealCard
            text="Rishabh Parsediya"
            revealText="Developer | Engineer"
        >
            <TextRevealCardTitle>
                <q>Code is like humor. When you have to explain it, it is bad</q>
            </TextRevealCardTitle>
            <TextRevealCardDescription>
                Hello there! Care to code together someday ?
            </TextRevealCardDescription>
        </TextRevealCard>
    </div>)
}