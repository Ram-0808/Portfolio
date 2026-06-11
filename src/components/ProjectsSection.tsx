"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import ProjectCard from "./ui/ProjectCard";
import { projects } from "../lib/constants";

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32 md:py-48">
      {/* Dramatic spotlight */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header - cinema style */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accent-primary font-mono text-xs tracking-[0.4em] uppercase">// Chapter 03</span>
          <h2 className="text-5xl md:text-7xl font-black text-text-primary mt-4 tracking-tight">
            FEATURED <span className="gradient-text">WORKS</span>
          </h2>
          <p className="text-lg text-text-secondary mt-6 max-w-2xl mx-auto">
            Real-world applications I've built for clients and employers
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto mt-6" />
        </motion.div>

        {/* Projects grid - cinema style */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Call to action - cinema style */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-4 px-8 py-5 rounded-2xl bg-glass-card border border-accent-primary/20">
            <Briefcase className="w-6 h-6 text-accent-primary" />
            <span className="text-text-secondary text-lg">
              Want to see more?{" "}
              <a
                href="#contact"
                className="text-accent-primary hover:text-accent-secondary transition-colors font-medium"
              >
                Let's discuss your project →
              </a>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
