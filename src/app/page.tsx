"use client";

import ProfileSection from "@/components/ProfileSection";
import SidebarWrapper from "@/components/SidebarWrapper";

export default function Home() {
  return (
    <>
      <SidebarWrapper />
      <div className="w-full">
        <ProfileSection />
      </div>
    </>
  );
}
