import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import Navbar from "@/components/ui/navbar"
import Footer from "@/components/ui/footer"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Finova",
  description: "Finova - Innovation in Finance",
  icons: {
    icon: "/logo.png"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`min-h-screen ${inter.className} flex flex-col min-h-screen dark`}>
        <Navbar />
        <div className="flex-grow overflow-x-hidden">{children}</div>
        <Footer />
      </body>
    </html>
  )
}