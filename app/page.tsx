import { Separator } from "@/components/ui/separator"
import Navbar from "@/components/ui/navbar"
import Hero from "@/components/ui/hero"
import Domains from "@/components/ui/domains"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Domains />
      <Separator />
    </main>
  )
}
 
