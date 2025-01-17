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

      {/* <HeroHighlight> */}
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
  className="px-4 font-semibold text-foreground dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
>
  <Boxes />
  <span className={cn("lg:text-5xl sm:flex md:flex-row flex-col text-4xl text-foreground relative z-20 flex items-center gap-2")}>
      <span>Introducing</span>
      <motion.span
        className="md:text-5xl text-7xl bg-gradient-to-r from-[#00c886] to-[#09a4c4] bg-clip-text text-transparent font-black drop-shadow-[0px_0px_5px_rgba(255,255,255,0.3)] relative overflow-hidden inline-block"
        initial={{ rotateY: 0, rotateX: 0 }}
        whileHover={{
          rotateY: -15,
          rotateX: 5,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 10,
        }}
        style={{
          perspective: 1000,
        }}
      >
        FINOVA
        <motion.div
          className="absolute w-[20px] h-full bg-white/30 blur-[2px] -skew-x-12 top-0"
          initial={{ left: "-20%" }}
          animate={{ left: "120%" }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 1
          }}
          style={{
            maskImage: "linear-gradient(to right, transparent, white 50%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, white 50%, transparent)"
          }}
        />
      </motion.span>
    </span>
  <p className="lg:text-2xl text-xl text-center mt-2 text-muted-foreground relative z-20">
    Club catchphrase / slogan goes here
  </p>
</motion.h1>
    {/* </HeroHighlight> */}
    </div>
  );
}
