"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="backdrop-blur-md bg-background/30 border-b border-foreground/10">
        <nav className="flex items-center justify-between h-16 px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="FINOVA"
              width={32}
              height={32}
              className="w-8 h-8"
              loading="lazy"
            />
            <span className="ml-2 text-foreground font-semibold text-xl tracking-tight">
              FINOVA
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2">
            <Link
              href="/"
              className="text-foreground hover:text-muted-foreground px-4 py-2 text-sm font-medium transition-colors tracking-wide"
            >
              Home
            </Link>
            <Link
              href="/events"
              className="text-foreground hover:text-muted-foreground px-4 py-2 text-sm font-medium transition-colors tracking-wide"
            >
              Events
            </Link>
            <Link
              href="/team"
              className="text-foreground hover:text-muted-foreground px-4 py-2 text-sm font-medium transition-colors tracking-wide"
            >
              Team
            </Link>
            <Link
              href="/apply"
              className="text-foreground hover:text-muted-foreground px-4 py-2 text-sm font-medium transition-colors tracking-wide"
            >
              Apply
            </Link>
          </div>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="https://www.instagram.com/finova.manipal/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-muted-foreground transition-colors"
            >
              <FaInstagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://in.linkedin.com/company/finova-mit-manipal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-muted-foreground transition-colors"
            >
              <FaLinkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/Finova-MIT"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-muted-foreground transition-colors"
            >
              <FaGithub className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden bg-transparent text-foreground"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <FiMenu className="w-6 h-6" />
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}

      <div
        className={`md:hidden transition-transform duration-500 ease-in-out fixed h-full w-full inset-y-0 z-50 backdrop-blur-xl bg-background/70 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } flex items-center justify-center`}
      >
        <button
          className="absolute top-6 right-8 text-foreground"
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          <FiX className="w-6 h-6" />
        </button>

        <div className="flex flex-col items-center justify-between gap-32 my-auto text-2xl">
          <div className="flex flex-col items-center space-y-6">
            {["Home", "Events", "Team", "Apply"].map((item, index) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className=""
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={toggleMenu}
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-8">
            {[
              {
                icon: FaInstagram,
                href: "https://www.instagram.com/finova.manipal/",
                label: "Instagram",
              },
              {
                icon: FaLinkedin,
                href: "https://in.linkedin.com/company/finova-mit-manipal",
                label: "LinkedIn",
              },
              {
                icon: FaGithub,
                href: "https://github.com/Finova-MIT",
                label: "GitHub",
              },
            ].map(({ icon: Icon, href, label }, index) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className=""
                style={{ transitionDelay: `${(index + 4) * 100}ms` }}
              >
                <Icon className="" />
                <span className="sr-only">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
