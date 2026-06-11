"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar, CheckCircle2 } from "lucide-react";
import GlassCard from "./ui/GlassCard";
import { experiences } from "../lib/constants";

export default function ExperienceSection() {
  const ref = useRef(null);

  return (
    <section id="experience" className="relative py-32 md:py-48" ref={ref}>
      {/* Dramatic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-tertiary/5 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Section header - cinema style */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accent-tertiary font-mono text-xs tracking-[0.4em] uppercase">// Chapter 04</span>
          <h2 className="text-5xl md:text-7xl font-black text-text-primary mt-4 tracking-tight">
            THE <span className="gradient-text">JOURNEY</span>
          </h2>
          <p className="text-lg text-text-secondary mt-6 max-w-xl mx-auto">
            Where I've been building, breaking, and learning
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-tertiary to-accent-primary mx-auto mt-6" />
        </motion.div>

        {/* Timeline - cinema style */}
        <div className="relative">
          {/* Vertical line - desktop only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-accent-tertiary via-accent-primary to-transparent transform -translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {/* Timeline dot - desktop only */}
                <div className="hidden md:flex absolute left-1/2 top-8 w-4 h-4 rounded-full bg-accent-tertiary transform -translate-x-1/2 items-center justify-center">
                  {exp.current && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-accent-tertiary"
                      animate={{ scale: [1, 1.8, 1], opacity: [1, 0, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    />
                  )}
                </div>

                {/* Content - centered on all screens */}
                <div className="w-full">
                  <GlassCard hover={false} className="p-8 bg-gradient-to-br from-bg-secondary/90 to-bg-primary/95">
                    {/* Header - cinema style */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl font-black text-text-primary tracking-tight">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-accent-tertiary mt-2">
                          <Building2 size={18} />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-accent-tertiary/10 border border-accent-tertiary/20 text-sm font-mono">
                        <Calendar size={14} className="text-accent-tertiary" />
                        <span className="text-accent-tertiary">{exp.period}</span>
                      </div>
                    </div>

                    {/* Current badge - cinema style */}
                    {exp.current && (
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-semibold mb-6">
                        <div className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </div>
                        Currently Working Here
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-text-secondary text-lg leading-relaxed mb-6">{exp.description}</p>

                    {/* Highlights - cinema style */}
                    <div className="space-y-3">
                      {exp.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                          <CheckCircle2 size={18} className="text-accent-primary mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
