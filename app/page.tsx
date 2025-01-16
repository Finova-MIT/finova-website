import { Separator } from "@/components/ui/separator"
import Hero from "@/components/ui/hero"
import Domains from "@/components/ui/domains"
import Projects from "@/components/ui/projects"
import About from "@/components/ui/about"

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Domains />
      {/* <Separator /> */}
      <Projects />
    </main>
  )
}
 
