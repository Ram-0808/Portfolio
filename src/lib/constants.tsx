import React from "react";
import {
  Code2,
  Database,
  Server,
  GitBranch,
  Zap,
  Sparkles,
  Bot,
  Layers,
  Terminal,
  Globe,
  Users,
  Building2,
  MapPin,
  Send,
  LucideIcon
} from "lucide-react";

// Custom SVG icons for social platforms
export const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

export const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export interface Skill {
  name: string;
  icon: LucideIcon;
  proficiency: number;
  category: "core" | "ai" | "other";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  liveUrl: string;
  adminUrl?: string;
  imageGradient: string;
  features: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  current: boolean;
  description: string;
  highlights: string[];
}

export interface SocialLink {
  name: string;
  icon: React.ComponentType<{size?: number; className?: string}> | (() => React.ReactElement);
  url: string;
}

export const personalInfo = {
  name: "Raghu Ram Kuna",
  role: "Backend Developer",
  tagline: "I build robust, scalable backend systems that power exceptional digital experiences.",
  bio: "Professional backend developer specializing in Django and PostgreSQL. Passionate about building clean, maintainable code and leveraging AI tools to accelerate development. Currently working at Absolin Software Solutions LLP while growing freelance clientele.",
  location: "India",
  email: "raghuramkuna2003@gmail.com",
  available: true,
  yearsExperience: 1,
  projectsCompleted: 10,
  clientsServed: 5,
};

export const skills: Skill[] = [
  { name: "Python", icon: Code2, proficiency: 95, category: "core" },
  { name: "Django", icon: Server, proficiency: 90, category: "core" },
  { name: "PostgreSQL", icon: Database, proficiency: 85, category: "core" },
  { name: "REST APIs", icon: Globe, proficiency: 90, category: "core" },
  { name: "Git & GitHub", icon: GitBranch, proficiency: 85, category: "core" },
  { name: "Linux", icon: Terminal, proficiency: 85, category: "core" },
  { name: "AI-Powered Dev", icon: Sparkles, proficiency: 90, category: "ai" },
  { name: "Vibe Coding", icon: Zap, proficiency: 85, category: "ai" },
  { name: "Cursor / Claude", icon: Bot, proficiency: 88, category: "ai" },
  { name: "Automation", icon: Terminal, proficiency: 80, category: "ai" },
  { name: "React Basics", icon: Layers, proficiency: 70, category: "other" },
  { name: "Team Collaboration", icon: Users, proficiency: 85, category: "other" },
  { name: "Problem Solving", icon: Building2, proficiency: 90, category: "other" },
];

export const projects: Project[] = [
  {
    id: "hospital-management",
    title: "Hospital Management System",
    description: "Complete healthcare platform with patient records, billing, pharmacy, and public portal.",
    longDescription: "A comprehensive hospital management system built for seamless healthcare operations. Features include patient record management, appointment scheduling, payment processing, pharmacy inventory, and a public portal for patients to access their information.",
    tech: ["Django", "PostgreSQL", "React", "Tailwind CSS", "REST API"],
    liveUrl: "https://hms-frontend-bice-three.vercel.app/",
    adminUrl: "https://hms-frontend-bice-three.vercel.app/admin/",
    imageGradient: "from-cyan-500 to-blue-600",
    features: [
      "Patient Records Management",
      "Payment & Billing System",
      "Pharmacy Inventory",
      "Public Patient Portal",
      "Admin Dashboard",
      "Role-based Access"
    ]
  },
  {
    id: "lead-management",
    title: "Lead Management System",
    description: "CRM solution for real estate firms to track leads, follow-ups, and conversions.",
    longDescription: "A powerful lead management system designed for real estate professionals. Streamlines the entire sales pipeline from initial contact to conversion, with automated follow-ups, performance analytics, and team collaboration tools.",
    tech: ["Django", "PostgreSQL", "React", "Tailwind CSS", "WebSockets"],
    liveUrl: "https://lead-management-frontend-hazel.vercel.app/",
    imageGradient: "from-purple-500 to-pink-600",
    features: [
      "Kanban Lead Pipeline",
      "Automated Follow-ups",
      "Performance Metrics",
      "Team Collaboration",
      "Real-time Updates",
      "Lead Scoring System"
    ]
  }
];

export const experiences: Experience[] = [
  {
    company: "Absolin Software Solutions LLP",
    role: "Backend Developer",
    period: "2025 - Present",
    current: true,
    description: "Building robust backend systems for a product-based startup, focusing on scalable architecture and clean code practices.",
    highlights: [
      "Developing Django-based backend services",
      "Designing PostgreSQL database schemas",
      "Integrating AI tools for enhanced productivity",
      "Building RESTful APIs for frontend consumption",
      "Contributing to product architecture decisions"
    ]
  }
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", icon: GithubIcon, url: "https://github.com/Ram-0808" },
  { name: "LinkedIn", icon: LinkedinIcon, url: "https://linkedin.com/in/raghu-ramk0808" },
  { name: "Email", icon: Send, url: "mailto:raghuramkuna2003@gmail.com" },
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];
