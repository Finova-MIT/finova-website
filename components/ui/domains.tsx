"use client";
import React from "react";
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
import { Card, CardContent, CardTitle, CardHeader } from "./card";

const domains = [
  { name: "Quant and Algo Trading", icon: <FaChartLine /> },
  { name: "Finance and Banking", icon: <FaUniversity /> },
  { name: "Blockchain and Web3", icon: <FaBitcoin /> },
  { name: "Cybersecurity", icon: <FaShieldAlt /> },
  { name: "Data Analysis and Machine Learning", icon: <FaDatabase /> },
  { name: "Fullstack Development", icon: <FaCode /> },
  { name: "Public Relations", icon: <FaBullhorn /> },
  { name: "Social Media and Graphic Design", icon: <FaPalette /> },
];

export default function Domains() {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <h1 className="text-4xl font-bold text-center mb-6 lg:mt-24 mt-12">Our Domains</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {domains.map((domain, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-3">
              <CardHeader className="p-2">
                <div className="text-3xl text-muted-foreground">{domain.icon}</div>
              </CardHeader>
              <CardContent className="p-2">
                <p className="text-sm font-medium">{domain.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }