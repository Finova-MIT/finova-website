"use client";

import { motion } from "framer-motion";
import { headingAnimation, subheadingAnimation, bodyAnimation } from "@/config/animations";

interface AnimatedTitleProps {
  title: string;
  description: string;
}

interface AnimatedBodyProps {
  className: string;
  children: React.ReactNode;
}

const AnimatedTitle = ({ title, description }: AnimatedTitleProps) => {
  return (
    <div className="flex flex-col gap-6 items-center mb-16">
      <motion.h1
        className="md:text-6xl text-5xl text-center mt-40 font-extrabold"
        initial="hidden"
        animate="visible"
        variants={headingAnimation}
        viewport={{ once: true }}
      >
        {title}
      </motion.h1>
      <motion.p
        className="lg:mx-60 md:mx-32 mx-16 text-muted-foreground max-w-md text-center"
        initial="hidden"
        animate="visible"
        variants={subheadingAnimation}
        viewport={{ once: true }}
      >
        {description}
      </motion.p>
    </div>
  );
};

const AnimatedBody = ({ className, children }: AnimatedBodyProps) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={bodyAnimation}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export { AnimatedTitle, AnimatedBody };