"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedCounter from "./animated-counter";

const stats = [
  { attribute: "Domains", value: 8 },
  { attribute: "Members", value: 89 },
  { attribute: "Projects", value: 1 },
  { attribute: "Years", value: 0 },
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
  return ( //text-4xl font-bold text-center md:py-12 lg:py-16 py-6
    <div id="about" className="flex items-start justify-between lg:mx-48 md:mx-24 mx-4 md:gap-20 gap-10 pb-8 lg:pt-16 md:pt-12 pt-6">
      <motion.div
        className="flex flex-col"
        initial="hidden"
        whileInView="visible"
        variants={headingAnimation}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl font-bold text-center pb-6">About Us</h1>

        <p className="text-muted-foreground max-w-md">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere temporibus tenetur quos et quo facilis error aliquid quasi veniam possimus recusandae nisi, maiores sit laudantium rem eius deleniti repudiandae illum.
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 gap-2"
        initial="hidden"
        whileInView="visible"
        variants={rightDivAnimation}
        viewport={{ once: true }}
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center border-border border-2 rounded-lg hover:bg-border transition-colors ease-out duration-300 lg:px-16 md:px-12 px-8 py-4"
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
