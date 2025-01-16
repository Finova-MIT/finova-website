"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

export default function Footer() {
  return (
    <div className="bg-secondary flex lg:gap-16 gap-4 p-8 justify-between lg:px-48 mt-8">
      <div className="">
        <h1 className="font-bold text-lg my-2">Quick Links</h1>
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
        <h1 className="font-bold text-lg my-2">Navigation</h1>
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
        <h1 className="font-bold text-lg my-2">Socials</h1>
        <div className="flex flex-col">
          <Link
            href="https://www.instagram.com/finova.manipal/"
            className="text-muted-foreground hover:text-secondary-foreground flex gap-2 items-center"
          >
            <FiInstagram className="text-lg" />
            <span>Instagram</span>
          </Link>

          <Link
            href="https://linkedin.com"
            className="text-muted-foreground hover:text-secondary-foreground flex gap-2 items-center"
          >
            <FiLinkedin className="text-lg" />
            <span>LinkedIn</span>
          </Link>

          <Link
            href="https://github.com"
            className="text-muted-foreground hover:text-secondary-foreground flex gap-2 items-center"
          >
            <FiGithub className="text-lg" />
            <span>GitHub</span>
          </Link>
        </div>
      </div>

      <div className="">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="FINOVA"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span className="ml-2 text-foreground font-semibold text-xl tracking-tight">
            FINOVA
          </span>
        </div>
        <p className="text-muted-foreground max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam pariatur cupiditate ut blanditiis nisi alias repellendus. Corporis at harum quo amet expedita sint quasi doloremque, illum ipsam sunt, dolorem provident.
        </p>
      </div>
    </div>
  );
}
