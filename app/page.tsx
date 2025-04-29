import AboutMe from "@/pages/pages/about";
import ContactMe from "@/pages/pages/contactus";
import LandingPage from "@/pages/pages/landing";
import Navigation from "@/pages/pages/navigation";
import Projects from "@/pages/pages/projects";
import SkillsExperience from "@/pages/pages/skills";

export default function Home() {
  return (
    <>
      <main className="tajawal w-full h-full">
        <Navigation />
        <LandingPage />
        <AboutMe />
        <Projects />
        <SkillsExperience />
        <ContactMe />
      </main>
    </>
  );
}
