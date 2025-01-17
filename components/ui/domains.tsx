"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaChartLine,
  FaUniversity,
  FaBitcoin,
  FaShieldAlt,
  FaDatabase,
  FaCode,
  FaBullhorn,
  FaPalette,
} from "react-icons/fa";
import { Button } from "./button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const domains = [
  {
    name: "Quant and Algo Trading",
    icon: <FaChartLine />,
    description:
      "Specialized in developing sophisticated algorithmic trading strategies and quantitative analysis tools for financial markets.",
    image: "/domains/quant-and-algo-trading.jpg",
  },
  {
    name: "Finance and Banking",
    icon: <FaUniversity />,
    description:
      "Comprehensive solutions for banking systems, payment processing, and financial service applications.",
    image: "/domains/finance-and-banking.jpg",
  },
  {
    name: "Blockchain and Web3",
    icon: <FaBitcoin />,
    description:
      "Expertise in blockchain technology, smart contracts, and decentralized application development.",
    image: "/domains/blockchain-and-web3.jpg",
  },
  {
    name: "Cybersecurity",
    icon: <FaShieldAlt />,
    description:
      "Advanced security solutions and consulting services to protect digital assets and infrastructure.",
    image: "/domains/cybersecurity.jpg",
  },
  {
    name: "Data Analysis and Machine Learning",
    icon: <FaDatabase />,
    description:
      "Leveraging AI and ML technologies for data-driven insights and predictive analytics.",
    image: "/domains/data-analysis-and-ml.jpg",
  },
  {
    name: "Fullstack Development",
    icon: <FaCode />,
    description:
      "End-to-end web and application development using cutting-edge technologies and frameworks.",
    image: "/domains/fullstack.jpg",
  },
  {
    name: "Public Relations",
    icon: <FaBullhorn />,
    description:
      "Strategic communication and brand management services for maximum market impact.",
    image: "/domains/public-relations.jpg",
  },
  {
    name: "Social Media and Graphic Design",
    icon: <FaPalette />,
    description:
      "Creative digital content and visual design solutions for enhanced brand presence.",
    image: "/domains/graphic-design.jpg",
  },
];

const headingAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 2, ease: "easeOut" } },
};

const leftDivAnimation = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 2, ease: "easeOut" } },
};

const rightDivAnimation = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 2, ease: "easeOut" } },
};

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
        variants={headingAnimation}
        viewport={{ once: true }}
      >
        {domains.map((domain, index) => (
          <div
            key={index}
            className="rounded-lg p-4 border-border border-2"
          >
            <div className="flex items-center space-x-4">
              <div className="text-3xl text-accent-foreground">{domain.icon}</div>
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
                    ? "shadow-lg -translate-x-2"
                    : "bg-background text-foreground hover:bg-muted"
                }`}
                onClick={() => setSelectedDomain(domain)}
              >
                <div className="flex items-center w-full space-x-2 transform lg:skew-x-6">
                  <div className="text-3xl">{domain.icon}</div>
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
            <div className="bg-background border-2 border-foreground/30 rounded-lg p-6 shadow-[0_20px_50px_rgba(0,_255,_253,_0.15)] lg:skew-x-6">
              <AspectRatio ratio={2 / 1} className="mb-4">
                <img
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
