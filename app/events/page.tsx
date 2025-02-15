"use client";

import { motion } from "framer-motion";
import {
  headingAnimation,
  leftDivAnimation,
  rightDivAnimation,
} from "../../config/animations";

export default function Home() {
  return (
    <main className="">
      <motion.div
        className="flex flex-col gap-6 items-center mb-16"
        initial="hidden"
        animate="visible"
        variants={headingAnimation}
        viewport={{ once: true }}
      >
        <h1 className="md:text-6xl text-5xl text-center mt-40 font-extrabold">EVENTS</h1>
        <p className="lg:mx-60 md:mx-32 mx-16 text-muted-foreground max-w-md text-center">
          We host a dynamic range of events, workshops, and talks designed to
          inspire and empower students. Our events aim to foster innovation and
          skill development in finance, technology, and beyond.
        </p>
      </motion.div>

      <div className="text-center p-16 bg-muted/30 text-muted-foreground">
        Stay tuned for opportunities to learn, connect, and grow with us!
      </div>
    </main>
  );
}
