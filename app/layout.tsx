import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import Navbar from "@/components/ui/navbar"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "FINOVA",
  description: "FINOVA - Innovation in Finance",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`min-h-screen ${inter.className} dark`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}