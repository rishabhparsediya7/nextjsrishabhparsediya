"use client";
import { SparklesPreview } from "./SparklesPreview";

function ProfileSection() {
  return (
    <div id="sec" className="flex flex-col h-screen  w-full max-w-full">
      <div className="w-full">
        <SparklesPreview />
      </div>
    </div>
  );
}

export default ProfileSection;
