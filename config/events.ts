import { Calendar, Users, Trophy, BookOpen, Zap, TrendingUp, Globe, Brain } from "lucide-react";

export interface Event {
    id: number;
    title: string;
    description: string;
    date: string;
    type: "workshop" | "competition" | "seminar" | "hackathon" | "networking" | "conference" | "talk" | "launch";
    status: "upcoming" | "ongoing" | "completed";
    location: string;
    duration: string;
    maxParticipants?: number;
    image: string;
    highlights: string[];
    icon: any;
    tags: string[];
    photosLink?: string;
}

export const events: Event[] = [
    {
        id: 1,
        title: "Softlaunch",
        description: "A two-day event combining business fundamentals workshop and hackathon. Day one introduced business concepts and vibe coding to transform ideas into reality. Day two featured a hackathon where teams brought their business ideas to life through vibe coding.",
        date: "2025-04-18",
        type: "hackathon",
        status: "completed",
        location: "Innovation Centre",
        duration: "2 Days",
        maxParticipants: 240,
        image: "https://picsum.photos/400/300?random=1",
        photosLink: "https://drive.google.com/drive/folders/1DnjRE_SnLZo5U3QkxWTjXsnrXuF000zm",
        highlights: [
            "Business fundamentals workshop",
            "Vibe coding methodology",
            "Business idea development",
            "Two-day hackathon format",
            "130 participants attended"
        ],
        icon: Globe,
        tags: ["launch", "hackathon", "business", "vibe-coding"]
    },
    {
        id: 2,
        title: "Research Paper and Patent Writing Workshop",
        description: "An online workshop educating participants on choosing problem statements, writing research papers, and working on patents. Covered the complete process from research methodology to post-publication procedures.",
        date: "2025-03-28",
        type: "workshop",
        status: "completed",
        location: "Online",
        duration: "Full Day",
        maxParticipants: 50,
        image: "https://picsum.photos/400/300?random=2",
        highlights: [
            "Problem statement selection",
            "Research paper writing techniques",
            "Patent application process",
            "Post-publication procedures",
            "50 attendees participated"
        ],
        icon: BookOpen,
        tags: ["research", "writing", "patents", "online", "academic"]
    },
    {
        id: 3,
        title: "FA/TA Smart Trading Workshop",
        description: "An exploration of strategic trading decisions incorporating both fundamental and technical analysis. Participants tested various trading strategies and learned practical application of market analysis techniques.",
        date: "2025-04-13",
        type: "workshop",
        status: "completed",
        location: "MIT Trading Lab",
        duration: "2 Days",
        maxParticipants: 50,
        image: "https://picsum.photos/400/300?random=3",
        highlights: [
            "Fundamental analysis techniques",
            "Technical analysis methods",
            "Strategy testing and implementation",
            "Strategic trading decisions",
            "35 attendees participated"
        ],
        icon: TrendingUp,
        tags: ["trading", "fundamental-analysis", "technical-analysis", "strategy", "markets"]
    }
];

export const eventTypes = [
    { value: "all", label: "All Events" },
    { value: "workshop", label: "Workshops" },
    { value: "competition", label: "Competitions" },
    { value: "seminar", label: "Seminars" },
    { value: "hackathon", label: "Hackathons" },
    { value: "networking", label: "Networking" },
    { value: "conference", label: "Conferences" },
    { value: "talk", label: "Talks" },
    { value: "launch", label: "Launch Events" }
];

export const eventStatuses = [
    { value: "all", label: "All Statuses" },
    { value: "upcoming", label: "Upcoming" },
    { value: "ongoing", label: "Ongoing" },
    { value: "completed", label: "Completed" }
];
