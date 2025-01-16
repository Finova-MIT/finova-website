"use client"
import React, { useState } from 'react';
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
import { Button } from './button';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const domains = [
  {
    name: "Quant and Algo Trading",
    icon: <FaChartLine />,
    description: "Specialized in developing sophisticated algorithmic trading strategies and quantitative analysis tools for financial markets.",
    image: "/quant-and-algo-trading.jpg"
  },
  {
    name: "Finance and Banking",
    icon: <FaUniversity />,
    description: "Comprehensive solutions for banking systems, payment processing, and financial service applications.",
    image: "/finance-and-banking.jpg"
  },
  {
    name: "Blockchain and Web3",
    icon: <FaBitcoin />,
    description: "Expertise in blockchain technology, smart contracts, and decentralized application development.",
    image: "/blockchain-and-web3.jpg"
  },
  {
    name: "Cybersecurity",
    icon: <FaShieldAlt />,
    description: "Advanced security solutions and consulting services to protect digital assets and infrastructure.",
    image: "/cybersecurity.jpg"
  },
  {
    name: "Data Analysis and Machine Learning",
    icon: <FaDatabase />,
    description: "Leveraging AI and ML technologies for data-driven insights and predictive analytics.",
    image: "/data-analysis-and-ml.jpg"
  },
  {
    name: "Fullstack Development",
    icon: <FaCode />,
    description: "End-to-end web and application development using cutting-edge technologies and frameworks.",
    image: "/fullstack.jpg"
  },
  {
    name: "Public Relations",
    icon: <FaBullhorn />,
    description: "Strategic communication and brand management services for maximum market impact.",
    image: "/public-relations.jpg"
  },
  {
    name: "Social Media and Graphic Design",
    icon: <FaPalette />,
    description: "Creative digital content and visual design solutions for enhanced brand presence.",
    image: "/graphic-design.jpg"
  },
];

export default function Domains() {
  const [selectedDomain, setSelectedDomain] = useState(domains[0]);

  return (
    <div id="domains" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-8 pb-12">
      <h1 className="text-4xl font-bold text-center mb-6 pt-4 mt-8 mb-12">Our Domains</h1>
      
      {/* Mobile View */}
      <div className="md:hidden lg:hidden space-y-4 max-w-md mx-auto">
        {domains.map((domain, index) => (
          <div
            key={index}
            className="bg-muted rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-4">
              <div className="text-3xl text-accent-foreground">{domain.icon}</div>
              <h3 className="font-medium">{domain.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View */}
      <div className="md:block lg:block hidden relative lg:-skew-x-12">
        <div className="relative z-10 grid grid-cols-12 gap-12">
          {/* Left Side - Domain List */}
          <div className="flex flex-col col-span-5 space-y-4">
            {domains.map((domain, index) => (
              <Button
                key={index}
                className={`w-full cursor-pointer p-4 rounded-lg transition-all duration-300 transform ${
                  selectedDomain.name === domain.name
                    ? 'shadow-lg -translate-x-2'
                    : 'bg-background text-foreground hover:bg-muted'
                }`}
                onClick={() => setSelectedDomain(domain)}
              >
                <div className="flex items-center space-x-4 w-full justify-start transform lg:skew-x-12">
                  <div className="text-3xl">{domain.icon}</div>
                  <h3 className="font-medium text-left">{domain.name}</h3>
                </div>
              </Button>
            ))}
          </div>

          {/* Right Side - Domain Details */}
          <div className="col-span-7 p-8 bg-muted md:-skew-x-12 lg:skew-x-0">
            <div className="bg-background border-2 border-border rounded-lg p-6 shadow-sm skew-x-12">
              <AspectRatio ratio={2 / 1} className="mb-6">
                <img
                  src={selectedDomain.image}
                  alt={selectedDomain.name}
                  className="rounded-lg object-cover w-full h-full"
                />
              </AspectRatio>
              <h2 className="text-2xl font-bold mb-4">{selectedDomain.name}</h2>
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