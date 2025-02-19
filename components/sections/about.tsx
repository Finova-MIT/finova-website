"use client";

import React from "react";
import AnimatedCounter from "../ui/animated-counter";

const stats = [
  { attribute: "Domains", value: 8 },
  { attribute: "Members", value: 300, more: true },
  { attribute: "Projects", value: 3, more: true },
  { attribute: "Years", value: 1 },
];

export default function About() {
  return (
    <div
      id="about"
      className="flex items-start justify-between lg:mx-48 md:mx-24 mx-4 md:gap-20 gap-10 pb-8 lg:pt-16 md:pt-12 pt-6"
    >
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold text-center pb-6">About Us</h1>

        <p className="text-muted-foreground max-w-md">
          Established in 2024, we are a student-driven community passionate
          about merging finance and technology to drive innovation and impact.
          By merging the fields of finance and technology, we're not just
          building skills - we're building the future.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-2">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="backdrop-blur-md flex flex-col items-center border-border border-2 rounded-lg hover:bg-border transition-colors ease-out duration-300 lg:px-16 md:px-12 px-8 py-4"
          >
            <h1 className="lg:text-4xl md:text-2xl text-xl font-black">
              <AnimatedCounter from={0} to={stat.value} />
              {stat.more && (
                <span className="absolute text-muted-foreground font-semibold">
                  +
                </span>
              )}
            </h1>
            <p className="font-bold text-muted-foreground lg:text-md md:text-sm text-xs">
              {stat.attribute.toUpperCase()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
