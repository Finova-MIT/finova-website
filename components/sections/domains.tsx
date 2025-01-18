"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  bodyAnimation,
  headingAnimation,
  leftDivAnimation,
  rightDivAnimation,
} from "../../config/animations";
import { domains } from "@/config/domains";
import Image from "next/image";

export default function Domains() {
  const [selectedDomain, setSelectedDomain] = useState(domains[0]);

  return (
    <div
      id="domains"
      className="lg:max-w-6xl md:max-w-4xl max-w-lg md:px-6 lg:px-8 px-4 py-8 mx-auto"
    >
      <motion.h1
        className="text-4xl font-bold text-center md:py-12 lg:py-16 py-6"
        initial="hidden"
        whileInView="visible"
        variants={headingAnimation}
        viewport={{ once: true }}
      >
        Our Domains
      </motion.h1>

      {/* Mobile View */}
      <motion.div
        className="md:hidden space-y-2 max-w-md mx-auto"
        initial="hidden"
        whileInView="visible"
        variants={bodyAnimation}
        viewport={{ once: true }}
      >
        {domains.map((domain, index) => (
          <div key={index} className="rounded-lg p-4 border-border border-2">
            <div className="flex items-center space-x-4">
              <domain.icon className="text-3xl text-accent-foreground" />
              <h3 className="font-medium">{domain.name}</h3>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Desktop View */}
      <div className="md:block lg:block hidden lg:-skew-x-6">
        <div className="z-10 grid grid-cols-12 gap-12">
          {/* Left Side - Domain List */}
          <motion.div
            className="flex flex-col col-span-5 space-y-4"
            initial="hidden"
            whileInView="visible"
            variants={leftDivAnimation}
            viewport={{ once: true }}
          >
            {domains.map((domain, index) => (
              <Button
                key={index}
                className={`w-full cursor-pointer p-4 rounded-lg transition-transform duration-300 transform ${
                  selectedDomain.name === domain.name
                    ? "shadow-lg -translate-x-2 bg-gradient-to-r from-[#00c886] to-[#09a4c4] text-background"
                    : "bg-background text-foreground hover:bg-muted"
                }`}
                onClick={() => setSelectedDomain(domain)}
              >
                <div className="flex items-center w-full space-x-2 transform lg:skew-x-6">
                  <domain.icon className="text-3xl" />
                  <h3 className="font-medium">{domain.name}</h3>
                </div>
              </Button>
            ))}
          </motion.div>

          {/* Right Side - Domain Details */}
          <motion.div
            className="col-span-7 bg-muted/20 p-8"
            initial="hidden"
            whileInView="visible"
            variants={rightDivAnimation}
            viewport={{ once: true }}
          >
            <div className="bg-background border-2 border-foreground/30 rounded-lg p-6 drop-shadow-[0px_0px_40px_rgba(0,255,253,0.2)] lg:skew-x-6">
              <AspectRatio ratio={2 / 1} className="mb-4">
                <Image
                  width={1920}
                  height={1080}
                  src={selectedDomain.image}
                  alt={selectedDomain.name}
                  className="rounded-lg object-cover w-full h-full"
                  loading="lazy"
                />
              </AspectRatio>
              <h2 className="text-2xl font-bold mb-2">{selectedDomain.name}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {selectedDomain.description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
