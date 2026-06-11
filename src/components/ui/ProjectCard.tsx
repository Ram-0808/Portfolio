"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Project } from "../../lib/constants";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
    >
      {/* Main card */}
      <div className="relative bg-bg-secondary rounded-2xl overflow-hidden border border-white/5 transition-all duration-500 group-hover:border-accent-primary/30 group-hover:shadow-2xl group-hover:shadow-accent-primary/10">
        {/* Browser chrome header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-bg-tertiary border-b border-white/5">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex-1 mx-4">
            <div className="px-3 py-1 bg-bg-primary/50 rounded text-xs text-text-secondary font-mono truncate">
              {project.liveUrl.replace("https://", "")}
            </div>
          </div>
        </div>

        {/* Image placeholder with gradient */}
        <div className={`relative h-56 bg-gradient-to-br ${project.imageGradient} overflow-hidden`}>
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-8 left-8 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute bottom-8 right-8 w-24 h-24 rounded-full bg-white/10 blur-xl" />
          </div>

          {/* Project icon/illustration */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <span className="text-4xl">
                {project.id === "hospital-management" ? "🏥" : "📊"}
              </span>
            </div>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-sm font-medium hover:bg-white/20 transition-colors"
            >
              <ExternalLink size={16} />
              Live Site
            </a>
            {project.adminUrl && (
              <a
                href={project.adminUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-sm font-medium hover:bg-white/20 transition-colors"
              >
                <ExternalLink size={16} />
                Admin Portal
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-text-secondary text-sm mb-4 leading-relaxed">
            {project.longDescription}
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            {project.features.slice(0, 4).map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-text-secondary">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                {feature}
              </div>
            ))}
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-accent-primary/10 text-accent-primary text-xs rounded-md font-mono"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 pt-4 border-t border-white/5">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-accent-primary hover:text-accent-secondary transition-colors group/link"
            >
              Visit Live Site
              <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
            </a>
            {project.adminUrl && (
              <a
                href={project.adminUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent-primary transition-colors"
              >
                <ExternalLink size={14} />
                Admin Portal
              </a>
            )}
          </div>
        </div>

        {/* Gradient border glow on hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary p-px">
            <div className="w-full h-full rounded-2xl bg-bg-secondary" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
