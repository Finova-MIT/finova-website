"use client";

import Image from "next/image";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Card, CardHeader, CardFooter } from "@/components/ui/card";
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { headingAnimation, bodyAnimation } from "../../config/animations";
import { board } from "@/config/members";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <motion.div
        className="flex flex-col gap-6 items-center mb-16"
        initial="hidden"
        animate="visible"
        variants={headingAnimation}
        viewport={{ once: true }}
      >
        <h1 className="text-6xl text-center mt-40 font-extrabold">BOARD</h1>
        <p className="lg:mx-60 md:mx-32 mx-16 text-muted-foreground max-w-md text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aliquid
          laborum ipsam veritatis doloribus temporibus quo non neque amet
          debitis nulla sint perspiciatis, dicta nihil eos. Tenetur nihil nobis
          sapiente?
        </p>
      </motion.div>

      <motion.div
        className="mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 lg:max-w-4xl md:max-w-2xl max-w-60"
        initial="hidden"
        animate="visible"
        variants={bodyAnimation}
        viewport={{ once: true }}
      >
        {board.map((member, index) => (
          <Card key={index} className="shadow-md w-full h-full">
            <CardHeader className="items-center text-center">
              <Image
                src={member.image}
                alt={`${member.name}'s picture`}
                width={256}
                height={256}
                className="w-28 h-28 rounded-full object-cover"
                loading="lazy"
              />
              <h2 className="text-lg font-bold mt-4">{member.name}</h2>
              <p className="text-muted-foreground text-sm">
                {member.designation}
              </p>
            </CardHeader>

            <CardFooter className="flex justify-center gap-4  ">
              <a
                href={`mailto:${member.email}`}
                target="_blank"
                rel="noreferrer"
              >
                <FaEnvelope className="text-xl text-muted-foreground hover:text-primary cursor-pointer" />
              </a>
              <a href={member.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin className="text-xl text-muted-foreground hover:text-primary cursor-pointer" />
              </a>
              <a href={member.instagram} target="_blank" rel="noreferrer">
                <FaInstagram className="text-xl text-muted-foreground hover:text-primary cursor-pointer" />
              </a>
            </CardFooter>
          </Card>
        ))}
      </motion.div>
    </main>
  );
}
