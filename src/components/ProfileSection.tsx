"use client";
import React, { useEffect, useState } from "react";
import { SparklesPreview } from "./SparklesPreview";
import Image from "next/image";
import boxArray from "../data/planets.json";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useTheme } from "@/context/ThemeProvider";

gsap.registerPlugin(ScrollTrigger);

function ProfileSection() {
  return (
    <div
      id="sec"
      className="flex flex-col h-full w-full max-w-full bg-white dark:bg-black"
    >
      <div className="w-full">
        <SparklesPreview />
      </div>
    </div>
  );
}

export default ProfileSection;
