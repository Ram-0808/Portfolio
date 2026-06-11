"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import ProjectCard from "./ui/ProjectCard";
import { projects } from "../lib/constants";

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-secondary/30 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent-primary font-mono text-sm tracking-wider">// MY WORK</span>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mt-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            Real-world applications I've built for clients and employers. Click to explore live demos.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-glass-card border border-glass-border">
            <Briefcase className="w-5 h-5 text-accent-primary" />
            <span className="text-text-secondary">
              Want to see more?{" "}
              <a href="#contact" className="text-accent-primary hover:text-accent-secondary transition-colors">
                Let's discuss your project
              </a>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
