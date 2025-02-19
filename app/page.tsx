import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { headers } from "next/headers";
import { metadata as metadataConfig } from "@/config/metadata";

// const Hero = dynamic(() => import("@/components/sections/hero"));
// const About = dynamic(() => import("@/components/sections/about"));
// const Domains = dynamic(() => import("@/components/sections/domains"));
// const Projects = dynamic(() => import("@/components/sections/projects"));
// const Contact = dynamic(() => import("@/components/sections/contact"));

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

export default async function Home() {

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
