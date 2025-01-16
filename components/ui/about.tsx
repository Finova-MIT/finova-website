"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedCounter from "./animated-counter";

const stats = [
  { attribute: "Projects", value: 1 },
  { attribute: "Years", value: 0 },
  { attribute: "Members", value: 89 },
  { attribute: "Domains", value: 8 },
];

const headingAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 2, ease: "easeOut" } },
};

const rightDivAnimation = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 2, ease: "easeOut" } },
};

export default function About() {
  return (
    <div id="about" className="py-16 flex flex-row items-start justify-between lg:mx-48 md:mx-24 mx-12 gap-20">
      <motion.div
        className="flex flex-col"
        initial="hidden"
        whileInView="visible"
        variants={headingAnimation}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>

        <p className="text-muted-foreground max-w-md">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
          asperiores expedita quia tempore reiciendis atque alias facilis qui
          blanditiis culpa quisquam provident, quae facere corrupti ipsa
          necessitatibus! Odio, ipsum enim?
        </p>
      </motion.div>

      <motion.div
        className="grid lg:grid-cols-2 md:grid-cols-2 gap-2"
        initial="hidden"
        whileInView="visible"
        variants={rightDivAnimation}
        viewport={{ once: true }}
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center border-border border-2 lg:px-16 md:px-12 px-8 py-4"
          >
            <h1 className="lg:text-4xl md:text-2xl text-xl font-black">
              <AnimatedCounter from={0} to={stat.value} />
            </h1>
            <p className="font-bold text-muted-foreground lg:text-md md:text-sm text-xs">
              {stat.attribute.toUpperCase()}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
