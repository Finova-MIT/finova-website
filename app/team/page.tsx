import { Separator } from "@/components/ui/separator"
import { Card, CardHeader, CardFooter, CardContent } from "@/components/ui/card" // Adjust import based on your structure
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa" // React Icons for social links

const boardMembers = [
  {
    name: "Vedant Agarwal",
    designation: "President",
    image: "/president.jpg",
    email: "",
    linkedin: "",
    instagram: "",
  },
  { 
    name: "Suhani Patel",
    designation: "Vice President",
    image: "/vice-president.jpg",
    email: "",
    linkedin: "",
    instagram: "",
  },
  { 
    name: "Samriddhi Mishra",
    designation: "General Secretary",
    image: "/general-secretary.jpg",
    email: "",
    linkedin: "",
    instagram: "",
  },
  { 
    name: "Aayushman Jain",
    designation: "Treasurer",
    image: "/treasurer.jpg",
    email: "",
    linkedin: "",
    instagram: "",
  },
  { 
    name: "Nishant Dahiya",
    designation: "Operational Secretary (?)",
    image: "/opsec.jpg",
    email: "",
    linkedin: "",
    instagram: "",
  },
  { 
    name: "Nihar Madhekar",
    designation: "Quant & Algo Trading Head",
    image: "/quant-and-algo-trading-head.jpg",
    email: "",
    linkedin: "",
    instagram: "",
  },
  { 
    name: "Debarun Karmakar",
    designation: "Finance & Banking Head",
    image: "finance-and-banking-head.jpg",
    email: "",
    linkedin: "",
    instagram: "",
  },
  { 
    name: "Suhani Patel",
    designation: "Blockchain & Web3 Head",
    image: "/blockchain-and-web3-head.jpg",
    email: "",
    linkedin: "",
    instagram: "",
  },
  { 
    name: "Sujai",
    designation: "Cybersecurity Head",
    image: "/cybersecurity-head.jpg",
    email: "",
    linkedin: "",
    instagram: "",
  },
  { 
    name: "Abhuday Singh",
    designation: "Data Analysis & ML Head",
    image: "/data-analysis-and-ml-head.jpg",
    email: "",
    linkedin: "",
    instagram: "",
  },
  { 
    name: "Pranav G Nayak",
    designation: "Fullstack Development Head",
    image: "/fullstack-head.jpg",
    email: "pranavgnayak@gmail.com",
    linkedin: "",
    instagram: "",
  },
  { 
    name: "Ayush Das",
    designation: "Public Relations Head",
    image: "/pr-head.jpg",
    email: "",
    linkedin: "",
    instagram: "",
  },
  { 
    name: "Aditya Sharma",
    designation: "Social Media & Graphic Design Head",
    image: "/smgd-head.jpg",
    email: "",
    linkedin: "",
    instagram: "",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <h1 className="text-6xl text-center mt-40 font-extrabold">
        BOARD
      </h1>
      <p className="lg:mx-60 md:mx-32 mx-16 text-muted-foreground mt-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aliquid laborum ipsam veritatis doloribus temporibus quo non neque amet debitis nulla sint perspiciatis, dicta nihil eos. Tenetur nihil nobis sapiente?
      </p>

      <Separator className="my-10" />

      <div className="lg:mx-60 md:mx-32 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {boardMembers.map((member, index) => (
          <Card key={index} className="shadow-md">
            <CardHeader className="flex flex-col items-center">
              <img
                src={member.image}
                alt={`${member.name}'s picture`}
                className="w-24 h-24 rounded-full object-cover"
              />
              <h2 className="text-lg font-bold mt-4">{member.name}</h2>
              <p className="text-muted-foreground text-sm text-center">{member.designation}</p>
            </CardHeader>
            {/* <Separator /> */}
            <CardFooter className="flex justify-center gap-4 my-2">
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
