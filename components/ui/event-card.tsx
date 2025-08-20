"use client";

import React, { useState } from "react";
import { Event } from "@/config/events";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, ExternalLink } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface EventCardProps {
  event: Event;
  className?: string;
}

export function EventCard({ event, className = "" }: EventCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = event.icon;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "ongoing":
        return "bg-green-100 text-green-800 border-green-200";
      case "completed":
        return "bg-gray-100 text-gray-800 border-gray-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "workshop":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "competition":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "seminar":
        return "bg-indigo-100 text-indigo-800 border-indigo-200";
      case "hackathon":
        return "bg-red-100 text-red-800 border-red-200";
      case "networking":
        return "bg-cyan-100 text-cyan-800 border-cyan-200";
      case "conference":
        return "bg-emerald-100 text-emerald-800 border-emerald-200";
      case "talk":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "launch":
        return "bg-pink-100 text-pink-800 border-pink-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <Card
      className={`group hover:shadow-lg transition-all duration-300 h-full ${className}`}
    >
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <IconComponent className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg line-clamp-2">
              {event.title}
            </CardTitle>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          <Badge className={getStatusColor(event.status)} variant="outline">
            {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
          </Badge>
          <Badge className={getTypeColor(event.type)} variant="outline">
            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <p
            className={`text-muted-foreground text-sm ${
              isExpanded ? "" : "line-clamp-3"
            }`}
          >
            {event.description}
          </p>
          {event.description.length > 150 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-primary hover:underline text-xs mt-1 focus:outline-none"
            >
              {isExpanded ? "View less" : "View more"}
            </button>
          )}
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(event.date)}</span>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{event.duration}</span>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{event.location}</span>
          </div>

          {event.maxParticipants && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>Max {event.maxParticipants} participants</span>
            </div>
          )}
        </div>

        {event.highlights && event.highlights.length > 0 && (
          <div>
            <h4 className="font-medium text-sm mb-2">Highlights:</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              {event.highlights.slice(0, 3).map((highlight, index) => (
                <li key={index} className="flex items-center gap-1">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap gap-1">
          {event.tags.slice(0, 4).map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {event.photosLink && (
          <div className="pt-2">
            <a
              href={event.photosLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm rounded-md hover:bg-primary/90 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              View Photos
            </a>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
