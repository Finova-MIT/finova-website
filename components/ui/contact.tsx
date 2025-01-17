"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Label } from "./label";
import { Button } from "./button";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "./toaster";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const { toast } = useToast();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Your message has been sent successfully.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        const data = await response.json();
        toast({
          title: "Failed",
          description: data.error || "Something went wrong.",
        });
      }
    } catch (err) {
      toast({
        title: "Failed",
        description: "Please try again after some time.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      id="contact"
      className="lg:max-w-3xl md:max-w-xl max-w-md md:px-6 lg:px-8 px-4 py-8 mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h1 className="text-4xl font-bold text-center md:py-12 lg:py-16 py-6">
        Contact Us
      </h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 border-border border-2 rounded-xl p-8 md:shadow-[0_20px_50px_rgba(0,_255,_253,_0.15)] mb-14"
      >
        <div className="space-y-2">
          <Label htmlFor="name" className="block font-medium">
            Name
          </Label>
          <Input
            id="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border rounded px-4 py-2"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="block font-medium">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border rounded px-4 py-2"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message" className="block font-medium">
            Message
          </Label>
          <Textarea
            id="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full border rounded px-4 py-2 min-h-[100px]"
          />
        </div>
        <Button type="submit" className="" disabled={loading}>
          {loading ? "Submitting" : "Submit"}
        </Button>
        <Toaster />
      </form>
    </motion.div>
  );
}
