"use client";
import { useEffect, useState } from "react";
import {
  isRecruitmentOpen,
  redirectTime,
  formLink,
} from "@/config/applications";
import { motion } from "framer-motion";
import {
  headingAnimation,
  bodyAnimation,
  bottomHeroAnimation,
} from "@/config/animations";
import Link from "next/link";

export default function Home() {
  const [countdown, setCountdown] = useState(redirectTime);

  useEffect(() => {
    if (!isRecruitmentOpen) return;

    let hasRedirected = false;
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 0 && !hasRedirected) {
          clearInterval(timer);
          window.open(formLink, "_blank");
          hasRedirected = true;
          return prev;
        }
        return Math.max(prev - 1, 0);
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isRecruitmentOpen) {
    return (
      <main className="">
        <div className="flex flex-col gap-6 items-center mb-16">
          <motion.h1
            className="text-6xl text-center mt-40 font-extrabold"
            initial="hidden"
            animate="visible"
            variants={headingAnimation}
          >
            APPLICATIONS CLOSED
          </motion.h1>
          <motion.p
            className="lg:mx-60 md:mx-32 mx-16 text-muted-foreground max-w-md text-center"
            initial="hidden"
            animate="visible"
            variants={bodyAnimation}
          >
            Applications for the current recruitment cycle have closed. Please
            check back later for updates.
          </motion.p>
        </div>
      </main>
    );
  }

  return (
    <main className="">
      <div className="flex flex-col gap-6 items-center mb-16">
        <motion.h1
          className="text-6xl text-center mt-40 font-extrabold"
          initial="hidden"
          animate="visible"
          variants={headingAnimation}
        >
          APPLICATIONS OPEN
        </motion.h1>
        <motion.p
          className="lg:mx-60 md:mx-32 mx-16 text-muted-foreground max-w-md text-center"
          initial="hidden"
          animate="visible"
          variants={bodyAnimation}
        >
          The recruitments for current cycle are in commencement! You are being
          redirected to the application form in
        </motion.p>
        <motion.h1
          className="text-8xl text-center font-black"
          initial="hidden"
          animate="visible"
          variants={bottomHeroAnimation}
        >
          {countdown}
        </motion.h1>
        <motion.p
          className="lg:mx-60 md:mx-32 mx-16 text-muted-foreground max-w-md text-center"
          initial="hidden"
          animate="visible"
          variants={bodyAnimation}
        >
          seconds. If you are not redirected, please click{" "}
          <Link
            className="text-chart-1 hover:border-b-2 transition-all hover:text-primary"
            href={formLink}
            target="_blank"
            rel="noreferrer"
          >
            here
          </Link>
          .
        </motion.p>
      </div>
    </main>
  );
}
