"use client";
import { ContactForm } from "@/components/ContactForm";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Footer } from "@/components/Footer";
import { NavbarDemo } from "@/components/Nav";
import ProfileSection from "@/components/ProfileSection";
import ProjectsSection from "@/components/ProjectsSection";
import { useTheme } from "@/context/ThemeProvider";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white dark:bg-black">
      <NavbarDemo />
      <ProfileSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactForm />
      <Footer />
    </main>
  );
}
