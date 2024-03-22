import ContactMe from "@/pages/pages/contactus";
import LandingPage from "@/pages/pages/landing";
import Navigation from "@/pages/pages/navigation";
import Projects from "@/pages/pages/projects";
import Experience from "@/pages/pages/skills";

export default function Home() {
  return (
    <main className="container mx-auto tajawal">
      <Navigation />
      <div className="w-full h-[.5px] bg-[#1E818E]"></div>
      <LandingPage />
      <Projects />
      <Experience />
      <ContactMe />
    </main>
  );
}
