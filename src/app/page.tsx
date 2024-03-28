import { ExperienceSection } from "@/components/ExperienceSection";
import { NavbarDemo } from "@/components/Nav";
import ProfileSection from "@/components/ProfileSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <NavbarDemo />
      <ProfileSection />
      <ProjectsSection />
      <ExperienceSection />
    </main>
  );
}
