import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { metadata as metadataConfig } from "@/config/metadata";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

import { Card, CardHeader, CardFooter } from "@/components/ui/card";
import { board } from "@/config/members";
import { AnimatedTitle, AnimatedBody } from "@/components/ui/animated-sections";

export const generateMetadata = (): Metadata => {
  return {
    title: `Team | ${metadataConfig.shortName}`,
    description: "Meet the team behind Finova Manipal - A student-run FinTech club at Manipal Institute of Technology",
  };
};

export default function Home() {
  return (
    <main className="overflow-hidden">
      <AnimatedTitle
        title="BOARD"
        description="Our board consists of visionary leaders dedicated to fostering innovation in the domains of finance and technology. Each member brings unique qualities to drive our mission forward. Together, they empower the next generation of changemakers."
      />

      <AnimatedBody
        className="mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 lg:max-w-4xl md:max-w-2xl max-w-60"
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

            <CardFooter className="flex justify-center gap-4">
              <Link
                href={`mailto:${member.email}`}
                target="_blank"
                rel="noreferrer"
              >
                <FaEnvelope className="text-xl text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </Link>
              <Link href={member.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin className="text-xl text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </AnimatedBody>
    </main>
  );
}
