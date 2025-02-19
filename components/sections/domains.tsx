"use client";

import { useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { domains } from "@/config/domains";

export default function Domains() {
  const [selectedDomain, setSelectedDomain] = useState(domains[0]);

  return (
    <div
      id="domains"
      className="lg:max-w-6xl md:max-w-4xl max-w-lg md:px-6 lg:px-8 px-4 py-8 mx-auto"
    >
      <h1 className="text-4xl font-bold text-center md:py-12 lg:py-16 py-6">
        Our Domains
      </h1>

      {/* Mobile View */}
      <div className="md:hidden space-y-2 max-w-md mx-auto">
        {domains.map((domain, index) => (
          <div key={index} className="rounded-lg p-4 border-border border-2">
            <div className="flex items-center space-x-4">
              <domain.icon className="text-3xl text-accent-foreground" />
              <h3 className="font-medium">{domain.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View */}
      <div className="md:block lg:block hidden lg:-skew-x-6">
        <div className="z-10 grid grid-cols-12 gap-12">
          {/* Left Side - Domain List */}
          <div className="flex flex-col col-span-5 space-y-4">
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
          </div>

          {/* Right Side - Domain Details */}
          <div className="col-span-7 bg-muted/20 p-8">
            <div className="bg-background border-2 border-foreground/30 rounded-lg p-6 drop-shadow-[0px_0px_40px_rgba(0,255,253,0.2)] lg:skew-x-6">
              <Image
                width={1920}
                height={1080}
                src={selectedDomain.image}
                alt={selectedDomain.name}
                className="rounded-lg object-cover w-full h-full mb-4"
                loading="lazy"
              />
              <h2 className="text-2xl font-bold mb-2">{selectedDomain.name}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {selectedDomain.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}