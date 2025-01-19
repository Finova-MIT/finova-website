"use client";

import { motion } from "framer-motion";
import { headingAnimation, bodyAnimation } from "@/config/animations";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="pt-32">
      <div className="flex flex-col gap-6 items-center mb-16">
        <motion.h1
          className="text-9xl text-center font-black"
          initial="hidden"
          whileInView="visible"
          variants={headingAnimation}
          viewport={{ once: true }}
        >
          404
        </motion.h1>
        <motion.p
          className="lg:mx-60 md:mx-32 mx-16 text-muted-foreground max-w-md text-center text-md"
          initial="hidden"
          whileInView="visible"
          variants={bodyAnimation}
          viewport={{ once: true }}
        >
          The page you were looking for was not found. Please check the URL or
          go back to the{" "}
          <Link href="/" className="text-chart-1 underline">
            homepage
          </Link>
          .
        </motion.p>
      </div>
    </main>
  );
}
