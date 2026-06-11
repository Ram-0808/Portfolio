"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar, CheckCircle2 } from "lucide-react";
import GlassCard from "./ui/GlassCard";
import { experiences } from "../lib/constants";

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-24 md:py-32" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-secondary/30 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent-primary font-mono text-sm tracking-wider">// EXPERIENCE</span>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mt-2">
            Where I've <span className="gradient-text">Worked</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - hidden on mobile, centered on desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-primary via-accent-secondary to-transparent transform -translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                className={`relative flex flex-col md:flex-row items-center md:items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Timeline dot - hidden on mobile, centered on desktop */}
                <div className="hidden md:flex absolute left-1/2 top-8 w-4 h-4 rounded-full bg-accent-primary transform -translate-x-1/2 z-10 items-center justify-center">
                  {exp.current && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-accent-primary"
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    />
                  )}
                </div>

                {/* Content - always centered on mobile */}
                <div className={`w-full md:flex-1 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <GlassCard hover={false} className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-text-primary">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-accent-primary mt-1">
                          <Building2 size={16} />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 text-accent-primary text-sm">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                    </div>

                    {/* Current badge */}
                    {exp.current && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm mb-4">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        Currently Working Here
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-text-secondary mb-4">{exp.description}</p>

                    {/* Highlights */}
                    <div className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                          <CheckCircle2 size={16} className="text-accent-primary mt-0.5 flex-shrink-0" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
