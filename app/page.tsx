import { Separator } from "@/components/ui/separator"
import Hero from "@/components/ui/hero"
import Domains from "@/components/ui/domains"
import Projects from "@/components/ui/projects"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Domains />
      <Separator />
      <Projects />
    </main>
  )
}
 
