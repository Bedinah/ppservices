import ContactMe from "@/pages/pages/contactus";
import LandingPage from "@/pages/pages/landing";
import Navigation from "@/pages/pages/navigation";
import Projects from "@/pages/pages/projects";
import Services from "@/pages/pages/service";
import Experience from "@/pages/pages/skills";

export default function Home() {
  return (
    <main>
      <Navigation />
      <LandingPage />
      <Services />
      <Experience />
      <Projects/>
      <ContactMe/>
    </main>
  );
}
