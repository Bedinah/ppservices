import AboutMe from "@/pages/pages/about";
import ContactMe from "@/pages/pages/contactus";
import LandingPage from "@/pages/pages/landing";
import Projects from "@/pages/pages/projects";
import Experience from "@/pages/pages/skills";

export default function Home() {
  return (
    <>
      <main className="tajawal w-full h-full">
        <LandingPage />
        <AboutMe />
        <Projects />
        <Experience />
        <ContactMe />
      </main>
    </>
  );
}
