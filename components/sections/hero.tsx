"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  leftHeroAnimation,
  rightHeroAnimation,
  bottomHeroAnimation,
} from "@/config/animations";

export default function Hero() {
  return (
    <div
      id="hero"
      className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg"
    >
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className="px-4 font-semibold text-foreground dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto ">
        <span
          className={cn(
            "md:text-5xl md:flex-row md:items-end flex-col text-4xl text-foreground relative z-20 flex justify-center gap-2"
          )}
        >
          <motion.span
            initial="hidden"
            animate="visible"
            variants={leftHeroAnimation}
          >
            Introducing
          </motion.span>
          <motion.span
            className="md:text-5xl text-7xl font-black relative overflow-hidden inline-block"
            initial="hidden"
            animate="visible"
            variants={rightHeroAnimation}
            style={{
              background:
                "linear-gradient(to right, #30d5c8 0, #dfdfdf 10%, #23e8d1 20%)",
              backgroundPosition: "0",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "shine 1.5s infinite linear",
              animationFillMode: "forwards",
              whiteSpace: "nowrap",
            }}
          >
            FINOVA
          </motion.span>

          <style jsx>{`
            @keyframes shine {
              0% {
                background-position: 200% 0;
              }
              100% {
                background-position: 0% 0;
              }
            }
          `}</style>
        </span>
        <motion.p
          className="md:text-2xl text-xl text-center mt-2 text-muted-foreground relative z-20 md:mx-32 mx-14 md:mt-0 mt-6"
          initial="hidden"
          animate="visible"
          variants={bottomHeroAnimation}
        >
          Where Finance meets Technology & Innovation
        </motion.p>
      </h1>
    </div>
  );
}
