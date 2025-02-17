import Home from "../components/Home";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { CoverParticles } from "@/components/cover-particles";

export default function Index() {
  return (
    <main className="relative min-h-screen">
      <Home />
      <CoverParticles />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
