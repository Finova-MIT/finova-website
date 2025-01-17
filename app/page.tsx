import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Domains from "@/components/sections/domains";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Domains />
      <Projects />
      <Contact />
    </main>
  );
}
