"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { FaCalendar } from "react-icons/fa";
import {
  bodyAnimation,
  headingAnimation,
  leftDivAnimation,
  rightDivAnimation,
} from "../../config/animations";
import { completedProjects, inProgressProjects } from "@/config/projects";

// Define Project type
type Project = {
  id: number;
  title: string;
  description: string;
  timestamp: string;
  images: string[];
};

type ProjectDetailsModalProps = {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
};

function ProjectDetailsModal({
  project,
  isOpen,
  onClose,
}: ProjectDetailsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-80 mx-auto my-auto">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription className="items-center flex flex-col">
            <span className="mt-4 flex gap-2 items-center text-muted-foreground">
              <FaCalendar className="text-md" />
              {project.timestamp}
            </span>
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          <Carousel className="mb-6">
            <CarouselContent>
              {project.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-[2/1]">
                    <img
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      className="rounded-lg object-cover w-full h-full"
                      loading="lazy"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project>(
    completedProjects[0]
  );
  const [activeTab, setActiveTab] = useState<"completed" | "in-progress">(
    "completed"
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileSelectedProject, setMobileSelectedProject] =
    useState<Project | null>(null);

  const handleMobileLearnMore = (project: Project) => {
    setMobileSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div
      id="projects"
      className="lg:max-w-6xl md:max-w-4xl max-w-lg md:px-6 lg:px-8 px-4 py-8 mx-auto"
    >
      <motion.h1
        className="text-4xl font-bold text-center md:py-12 lg:py-16 py-6"
        initial="hidden"
        whileInView="visible"
        variants={headingAnimation}
        viewport={{ once: true }}
      >
        Our Projects
      </motion.h1>

      {/* Mobile View */}
      <motion.div
        className="md:hidden space-y-2 max-w-md mx-auto"
        initial="hidden"
        whileInView="visible"
        variants={bodyAnimation}
        viewport={{ once: true }}
      >
        <Tabs defaultValue="completed" className="w-full">
          <TabsList className="flex space-x-4 justify-center mb-4">
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          </TabsList>
          {["completed", "in-progress"].map((tab) => (
            <TabsContent key={tab} value={tab}>
              <div className="space-y-4">
                {(tab === "completed"
                  ? completedProjects
                  : inProgressProjects
                ).map((project) => (
                  <div
                    key={project.id}
                    className="border-border border-2 rounded-lg p-4 grid"
                  >
                    <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <Button
                      className=""
                      onClick={() => handleMobileLearnMore(project)}
                    >
                      Learn More
                    </Button>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Mobile Project Details Modal */}
        {mobileSelectedProject && (
          <ProjectDetailsModal
            project={mobileSelectedProject}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </motion.div>

      {/* Desktop View */}
      <div className="md:block lg:block hidden lg:-skew-x-6">
        <div className="z-10 grid grid-cols-12 gap-12">
          {/* Left Side - Project Details */}
          <motion.div
            className="col-span-7 bg-muted/20 p-8"
            initial="hidden"
            whileInView="visible"
            variants={leftDivAnimation}
            viewport={{ once: true }}
          >
            <div className="bg-background border-2 border-foreground/30 rounded-lg p-6 drop-shadow-[0px_0px_40px_rgba(0,255,253,0.2)] lg:skew-x-6">
              <Carousel className="mb-4">
                <CarouselContent>
                  {selectedProject.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-[2/1]">
                        <img
                          src={image}
                          alt={`${selectedProject.title} - Image ${index + 1}`}
                          className="rounded-lg object-cover w-full h-full"
                          loading="lazy"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <h2 className="text-2xl font-bold mb-2">
                {selectedProject.title}
              </h2>
              <p className="text-sm text-muted-foreground mb-4 flex gap-2 items-center">
                <FaCalendar className="text-md" />
                {selectedProject.timestamp}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {selectedProject.description}
              </p>
            </div>
          </motion.div>

          {/* Right Side - Project List */}
          <motion.div
            className="flex flex-col col-span-5"
            initial="hidden"
            whileInView="visible"
            variants={rightDivAnimation}
            viewport={{ once: true }}
          >
            <Tabs
              defaultValue="completed"
              className="w-full"
              onValueChange={(value) => {
                setActiveTab(value as "completed" | "in-progress");
                setSelectedProject(
                  value === "completed"
                    ? completedProjects[0]
                    : inProgressProjects[0]
                );
              }}
            >
              <TabsList className="flex justify-start space-x-4 mb-4">
                <TabsTrigger value="completed">
                  <span className="lg:skew-x-6">Completed</span>
                </TabsTrigger>
                <TabsTrigger value="in-progress">
                  <span className="lg:skew-x-6">In Progress</span>
                </TabsTrigger>
              </TabsList>

              {["completed", "in-progress"].map((tab) => (
                <TabsContent key={tab} value={tab} className="mt-0 space-y-4">
                  {(tab === "completed"
                    ? completedProjects
                    : inProgressProjects
                  ).map((project) => (
                    <Button
                      key={project.id}
                      className={`w-full cursor-pointer p-4 rounded-lg transition-transform duration-300 transform ${
                        selectedProject.id === project.id
                          ? "shadow-lg -translate-x-2 bg-gradient-to-r from-[#00c886] dark:to-[#09a4c4] text-background"
                          : "bg-background text-foreground hover:bg-muted"
                      }`}
                      onClick={() => setSelectedProject(project)}
                    >
                      <div className="flex items-center space-x-4 w-full justify-start transform lg:skew-x-6">
                        <h3 className="font-medium text-left">
                          {project.title}
                        </h3>
                      </div>
                    </Button>
                  ))}
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
