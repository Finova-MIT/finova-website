import { Separator } from "@/components/ui/separator"
import Navbar from "@/components/ui/navbar"
import Hero from "@/components/ui/hero"
import About from "@/components/ui/about"
import Domains from "@/components/ui/domains"
import Projects from "@/components/ui/projects"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      {/* <About /> */}
      <Domains />
      <Separator />
      {/* <Projects /> */}
    </main>
  )
}
 
