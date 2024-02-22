import LandingPage from "@/pages/pages/landing";
import Navigation from "@/pages/pages/navigation";
import Services from "@/pages/pages/service";

export default function Home() {
  return (
    <main>
      <Navigation/>
      <LandingPage/>
      <Services/>
    </main>
  );
}
