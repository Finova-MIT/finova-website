import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

const projects = {
  completed: [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A fully functional online store",
      timestamp: "15-05-2024",
      images: ["/projects/test1.jpg", "/projects/test2.jpg"],
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Organize and track your tasks",
      timestamp: "22-06-2023",
      images: ["/projects/test1.jpg", "/projects/test2.jpg"],
    },
  ],

  inProgress: [
    {
      id: 9,
      title: "AI Chatbot",
      description: "Intelligent conversational agent",
      timestamp: "05-01-2025",
      images: ["/projects/test1.jpg", "/projects/test2.jpg"],
    },
  ],
};

export async function GET(req: NextApiRequest) {
  return NextResponse.json(projects)
}
