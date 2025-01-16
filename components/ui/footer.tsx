"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-secondary flex lg:gap-16 md:gap-8 gap-4 py-8 lg:px-48 md:px-8 px-4 justify-between mt-8 lg:text-sm md:text-sm text-xs">
      <div className="">
        <h1 className="font-bold lg:text-lg md:text-lg text-md my-2">Quick Links</h1>
        <div className="flex flex-col">
          <Link
            href="/#"
            className="text-muted-foreground hover:text-secondary-foreground"
          >
            <span>Home</span>
          </Link>

          <Link
            href="/#domains"
            className="text-muted-foreground hover:text-secondary-foreground"
          >
            <span>Domains</span>
          </Link>

          <Link
            href="/#projects"
            className="text-muted-foreground hover:text-secondary-foreground"
          >
            <span>Projects</span>
          </Link>
        </div>
      </div>
      <div className="">
        <h1 className="font-bold lg:text-lg md:text-lg text-md my-2">Nav Links</h1>
        <div className="flex flex-col">
          <Link
            href="/"
            className="text-muted-foreground hover:text-secondary-foreground"
          >
            <span>Home</span>
          </Link>

          <Link
            href="/gallery"
            className="text-muted-foreground hover:text-secondary-foreground"
          >
            <span>Gallery</span>
          </Link>

          <Link
            href="/team"
            className="text-muted-foreground hover:text-secondary-foreground"
          >
            <span>Team</span>
          </Link>

          <Link
            href="/apply"
            className="text-muted-foreground hover:text-secondary-foreground"
          >
            <span>Apply</span>
          </Link>
        </div>
      </div>

      <div className="">
        <h1 className="font-bold lg:text-lg md:text-lg text-md my-2">Socials</h1>
        <div className="flex flex-col">
          <Link
            href="https://www.instagram.com/finova.manipal/"
            className="text-muted-foreground hover:text-secondary-foreground flex gap-2 items-center"
          >
            <FaInstagram className="text-lg" />
            <span>Instagram</span>
          </Link>

          <Link
            href="https://linkedin.com"
            className="text-muted-foreground hover:text-secondary-foreground flex gap-2 items-center"
          >
            <FaLinkedin className="text-lg" />
            <span>LinkedIn</span>
          </Link>

          <Link
            href="https://github.com"
            className="text-muted-foreground hover:text-secondary-foreground flex gap-2 items-center"
          >
            <FaGithub className="text-lg" />
            <span>GitHub</span>
          </Link>
        </div>
      </div>

      <div className="">
        <div className="flex items-center my-2">
          <Image
            src="/logo.png"
            alt="Finova Logo"
            width={32}
            height={32}
            className="lg:w-8 md:w-8 w-4 lg:h-8 md:h-8 h-4"
            loading="lazy"
          />
          <span className="ml-2 text-foreground font-semibold lg:text-lg md:text-lg text-md tracking-tight">
            FINOVA
          </span>
        </div>
        <p className="text-muted-foreground max-w-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam pariatur cupiditate ut blanditiis nisi alias repellendus. Corporis at harum quo amet expedita sint quasi doloremque, illum ipsam sunt, dolorem provident.
        </p>
      </div>
    </div>
  );
}
