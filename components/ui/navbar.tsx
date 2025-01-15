"use client"

import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-md bg-black/30 border-b border-white/10">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="FINOVA"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="ml-2 text-white font-semibold text-xl tracking-tight">FINOVA</span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2">
              <Link
                href="/"
                className="text-white px-4 py-2 text-sm font-medium transition-colors tracking-wide"
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="text-[#CCCCCC] hover:text-white px-4 py-2 text-sm font-medium transition-colors tracking-wide"
              >
                Projects
              </Link>
              <Link
                href="/team"
                className="text-[#CCCCCC] hover:text-white px-4 py-2 text-sm font-medium transition-colors tracking-wide"
              >
                Team
              </Link>
              <Link
                href="/apply"
                className="text-[#CCCCCC] hover:text-white px-4 py-2 text-sm font-medium transition-colors tracking-wide"
              >
                Apply
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 hover:text-white transition-colors"
              >
                <FiInstagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 hover:text-white transition-colors"
              >
                <FiLinkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 hover:text-white transition-colors"
              >
                <FiGithub className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

