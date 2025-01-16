import { Separator } from "@/components/ui/separator"
import Hero from "@/components/ui/hero"
import Domains from "@/components/ui/domains"
import Projects from "@/components/ui/projects"
import Stats from "@/components/ui/stats"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <Domains />
      {/* <Separator /> */}
      <Projects />
    </main>
  )
}
 
