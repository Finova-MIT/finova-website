import { Separator } from "@/components/ui/separator"
import Hero from "@/components/ui/hero"
import About from "@/components/ui/about"
import Domains from "@/components/ui/domains"
import Projects from "@/components/ui/projects"
import Contact from "@/components/ui/contact"

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Domains />
      {/* <Separator /> */}
      <Projects />
      <Contact />
    </main>
  )
}
 
