"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const headingAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 2, ease: "easeOut" } },
};

export default function Contact() {
  return (
    <motion.div
      id="contact"
      className="lg:max-w-3xl md:max-w-xl max-w-md md:px-6 lg:px-8 px-4 py-8 mx-auto"
      initial="hidden"
      whileInView="visible"
      variants={headingAnimation}
      viewport={{ once: true }}
    >
      <h1 className="text-4xl font-bold text-center md:py-12 lg:py-16 py-6">
        Contact Us
      </h1>
      <div className="space-y-4 border-border border-2 rounded-xl p-8">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter your name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Enter your email" type="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Enter your message"
            className="min-h-[100px]"
          />
        </div>
        <Button type="submit">Submit</Button>
      </div>
    </motion.div>
  );
}
