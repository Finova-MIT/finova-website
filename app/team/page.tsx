import Image from "next/image"
import { AspectRatio } from "@radix-ui/react-aspect-ratio"
import { Card, CardHeader, CardFooter } from "@/components/ui/card"
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa"

const boardMembers = [
  {
    name: "Vedant Agarwal",
    designation: "President",
    image: "/board/president.jpg",
    email: "",
    linkedin: "",
    instagram: "",
  },
  { 
    name: "Suhani Patel",
    designation: "Vice President",
    image: "/board/vice-president.jpg",
    email: "",
    linkedin: "",
    instagram: "",
  },
  { 
    name: "Samriddhi Mishra",
    designation: "General Secretary",
    image: "/board/general-secretary.jpg",
    email: "",
    linkedin: "",
    instagram: "",
  },
  { 
    name: "Aayushman Jain",
    designation: "Treasurer",
    image: "/board/treasurer.jpg",
    email: "",
    linkedin: "",
    instagram: "",
  },
  { 
    name: "Nishant Dahiya",
    designation: "Operational Secretary (?)",
    image: "/board/opsec.jpg",
    email: "",
    linkedin: "",
    instagram: "",
  },
  { 
    name: "Nihar Madhekar",
    designation: "Quant & Algo Trading Head",
    image: "/board/quant-and-algo-trading-head.jpg",
    email: "",
    linkedin: "",
    instagram: "",
  },
  { 
    name: "Debarun Karmakar",
    designation: "Finance & Banking Head",
    image: "/board/finance-and-banking-head.jpg",
    email: "",
    linkedin: "",
    instagram: "",
  },
  { 
    name: "Suhani Patel",
    designation: "Blockchain & Web3 Head",
    image: "/board/blockchain-and-web3-head.jpg",
    email: "",
    linkedin: "",
    instagram: "",
  },
  { 
    name: "Sujai",
    designation: "Cybersecurity Head",
    image: "/board/cybersecurity-head.jpg",
    email: "",
    linkedin: "",
    instagram: "",
  },
  { 
    name: "Abhuday Singh",
    designation: "Data Analysis & ML Head",
    image: "/board/data-analysis-and-ml-head.jpg",
    email: "",
    linkedin: "",
    instagram: "",
  },
  { 
    name: "Pranav G Nayak",
    designation: "Fullstack Development Head",
    image: "/board/fullstack-head.jpg",
    email: "pranavgnayak@gmail.com",
    linkedin: "",
    instagram: "",
  },
  { 
    name: "Ayush Das",
    designation: "Public Relations Head",
    image: "/board/pr-head.jpg",
    email: "",
    linkedin: "",
    instagram: "",
  },
  { 
    name: "Aditya Sharma",
    designation: "Social Media & Graphic Design Head",
    image: "/board/smgd-head.jpg",
    email: "",
    linkedin: "",
    instagram: "",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex flex-col gap-6 items-center mb-16">
      <h1 className="text-6xl text-center mt-40 font-extrabold">
        BOARD
      </h1>
      <p className="lg:mx-60 md:mx-32 mx-16 text-muted-foreground max-w-md text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aliquid laborum ipsam veritatis doloribus temporibus quo non neque amet debitis nulla sint perspiciatis, dicta nihil eos. Tenetur nihil nobis sapiente?
      </p>
      </div>

      <div className="mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 lg:max-w-4xl md:max-w-2xl max-w-60">
        {boardMembers.map((member, index) => (
          <Card key={index} className="shadow-md">
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
              <p className="text-muted-foreground text-sm">{member.designation}</p>
            </CardHeader>

            <CardFooter className="flex justify-center gap-4  ">
              <a href={`mailto:${member.email}`} target="_blank" rel="noreferrer">
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
      </div>
    </main>
  )
}
