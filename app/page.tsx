import type { Metadata } from "next";
import { metadata as metadataConfig } from "@/config/metadata";

import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Domains from "@/components/sections/domains";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";

export const generateMetadata = (): Metadata => {
  return {
    title: `Home | ${metadataConfig.shortName}`,
    description: "Homepage of Finova Manipal - A student-run FinTech club at Manipal Institute of Technology",
  };
};

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
