import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Github } from 'lucide-react'
import Image from 'next/image'

interface ProjectDetailsModalProps {
  project: {
    id: number
    title: string
    description: string
    timestamp: string
    images: string[]
    githubUrl: string
  }
  isOpen: boolean
  onClose: () => void
}

export default function ProjectDetails({ project, isOpen, onClose }: ProjectDetailsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            {project.images.map((image, index) => (
              <div key={index} className="relative aspect-video">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} screenshot ${index + 1}`}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500">Created: {project.timestamp}</p>
          <Button asChild variant="outline" className="w-full">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View Source Code
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

