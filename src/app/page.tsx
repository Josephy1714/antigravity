import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="w-full relative">
      <Hero />
      <div className="space-y-32 md:space-y-48 pb-20">
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}
