"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <div id="hero" className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="px-4 font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
      <Boxes />
      <p className={cn("lg:text-5xl text-4xl text-foreground relative z-20")}>
        Introducing {" "}
        <Highlight>
        FINOVA
        </Highlight>
      </p>
      <p className="lg:text-2xl text-xl text-center mt-2 text-muted-foreground relative z-20">
        Club catchphrase / slogan goes here
      </p>
      </motion.h1>
    </HeroHighlight>
    </div>
  );
}
