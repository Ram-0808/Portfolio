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
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
    >
      {/* Main card - cinema style */}
      <div className="relative bg-gradient-to-b from-bg-secondary to-bg-primary rounded-2xl overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_60px_rgba(225,29,72,0.15)] group-hover:border-accent-primary/30 border border-white/5">
        {/* Browser chrome header - cinema style */}
        <div className="flex items-center gap-2 px-5 py-4 bg-bg-tertiary border-b border-white/5">
          <div className="flex gap-2">
            <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-r from-red-500 to-orange-500" />
            <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-r from-yellow-500 to-green-500" />
            <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500" />
          </div>
          <div className="flex-1 mx-4">
            <div className="px-4 py-1.5 bg-bg-primary/60 rounded-lg text-xs text-text-secondary font-mono truncate border border-white/5">
              {project.liveUrl.replace("https://", "")}
            </div>
          </div>
        </div>

        {/* Image area with dramatic gradient */}
        <div className={`relative h-64 bg-gradient-to-br ${project.imageGradient} overflow-hidden`}>
          {/* Dramatic overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white/20 blur-3xl" />
            <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
          </div>

          {/* Project icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-[0_0_40px_rgba(0,0,0,0.3)]">
              <span className="text-5xl">
                {project.id === "hospital-management" ? "🏥" : "📊"}
              </span>
            </div>
          </div>

          {/* Hover overlay - cinema style */}
          <div className="absolute inset-0 bg-bg-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4 backdrop-blur-sm">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-lg text-sm font-semibold hover:scale-105 transition-transform shadow-lg"
            >
              <ExternalLink size={16} />
              Live Site
            </a>
            {project.adminUrl && (
              <a
                href={project.adminUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg text-sm font-medium hover:bg-white/20 transition-colors border border-white/20"
              >
                <ExternalLink size={16} />
                Admin Portal
              </a>
            )}
          </div>
        </div>

        {/* Content - cinema style */}
        <div className="p-8">
          <h3 className="text-2xl font-black text-text-primary mb-3 group-hover:text-accent-primary transition-colors tracking-tight">
            {project.title}
          </h3>
          <p className="text-text-secondary text-sm mb-6 leading-relaxed">
            {project.longDescription}
          </p>

          {/* Features - cinema style */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {project.features.slice(0, 4).map((feature, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-text-secondary">
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary" />
                {feature}
              </div>
            ))}
          </div>

          {/* Tech stack - cinema style */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-accent-primary/10 text-accent-primary text-xs rounded-lg font-mono border border-accent-primary/20 hover:bg-accent-primary/20 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links - cinema style */}
          <div className="flex items-center gap-6 pt-5 border-t border-white/5">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-accent-primary hover:text-accent-secondary transition-colors group/link"
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

        {/* Gradient border glow on hover - cinema */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary p-px">
            <div className="w-full h-full rounded-2xl bg-bg-secondary" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
