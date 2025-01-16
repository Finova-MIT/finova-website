"use client"; 

import React, { useState } from "react"; 
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import ProjectDetails from "@/components/ui/project-details";

// Sample project data
const completedProjects = [
  { id: 1, title: "E-commerce Platform", description: "A fully functional online store", timestamp: "2023-05-15", images: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"], githubUrl: "https://github.com/example/e-commerce" },
  { id: 2, title: "Task Management App", description: "Organize and track your tasks", timestamp: "2023-06-22", images: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"], githubUrl: "https://github.com/example/task-manager" },
  { id: 3, title: "Social Media Dashboard", description: "Analytics for social media accounts", timestamp: "2023-07-10", images: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"], githubUrl: "https://github.com/example/social-dashboard" },
  { id: 4, title: "Fitness Tracker", description: "Monitor your workouts and progress", timestamp: "2023-08-05", images: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"], githubUrl: "https://github.com/example/fitness-tracker" },
  { id: 5, title: "Recipe Finder", description: "Discover new recipes based on ingredients", timestamp: "2023-09-18", images: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"], githubUrl: "https://github.com/example/recipe-finder" },
  { id: 6, title: "Weather App", description: "Real-time weather forecasts", timestamp: "2023-10-30", images: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"], githubUrl: "https://github.com/example/weather-app" },
  { id: 7, title: "Portfolio Website", description: "Showcase your work and skills", timestamp: "2023-11-25", images: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"], githubUrl: "https://github.com/example/portfolio" },
  { id: 8, title: "Budget Planner", description: "Manage your finances effectively", timestamp: "2023-12-12", images: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"], githubUrl: "https://github.com/example/budget-planner" },
]

const workInProgressProjects = [
  { id: 9, title: "AI Chatbot", description: "Intelligent conversational agent", timestamp: "2024-01-05", images: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"], githubUrl: "https://github.com/example/ai-chatbot" },
  { id: 10, title: "Virtual Reality Game", description: "Immersive gaming experience", timestamp: "2024-01-20", images: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"], githubUrl: "https://github.com/example/vr-game" },
  { id: 11, title: "Smart Home Controller", description: "Manage your IoT devices", timestamp: "2024-02-08", images: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"], githubUrl: "https://github.com/example/smart-home" },
]

const ProjectGrid = ({ projects }: { projects: typeof completedProjects }) => {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openProjectDetails = (project: typeof projects[0]) => {
      setSelectedProject(project);
      setIsModalOpen(true);
    };
  
    return (
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-y-auto max-h-[80vh] p-4 custom-scrollbar"
      >
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col">
            <img src={project.images[0]} alt={project.title} className="w-full h-40 object-cover rounded-t-md" />
            <CardHeader className="flex-grow text-center">
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardFooter className="justify-center">
                <span className="cursor-pointer border-b-2 border-transparent hover:border-inherit text-muted-foreground" onClick={() => openProjectDetails(project)}>
                    Learn More
                </span>
              {/* <Button className="w-full" onClick={() => openProjectDetails(project)}>
                Learn More
              </Button> */}
            </CardFooter>
          </Card>
        ))}
        {selectedProject && (
          <ProjectDetails
            project={selectedProject}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </div>
    );
  };
  
  export default function Projects() {
    return (
      <div className="flex flex-col h-screen px-6 md:px-12">
        <h1 className="text-4xl font-bold text-center mb-6 lg:mt-24 mt-12">Our Projects</h1>
        <Tabs defaultValue="completed" className="w-full">
          <TabsList className="flex space-x-4 p-6 justify-center">
            <TabsTrigger value="completed" className="px-6 py-2 text-sm font-medium">
              Completed
            </TabsTrigger>
            <TabsTrigger value="in-progress" className="px-6 py-2 text-sm font-medium">
              Work in Progress
            </TabsTrigger>
          </TabsList>
          <TabsContent value="completed" className="flex-grow mt-6">
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Completed Projects</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <ProjectGrid projects={completedProjects} />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="in-progress" className="flex-grow mt-6">
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Work in Progress</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <ProjectGrid projects={workInProgressProjects} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    );
  }