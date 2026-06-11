"use client";

import { motion } from "framer-motion";
import { Code2, Sparkles, Layers } from "lucide-react";
import SkillBadge from "./ui/SkillBadge";
import GlassCard from "./ui/GlassCard";
import { skills } from "../lib/constants";

export default function SkillsSection() {
  const coreSkills = skills.filter((s) => s.category === "core");
  const aiSkills = skills.filter((s) => s.category === "ai");
  const otherSkills = skills.filter((s) => s.category === "other");

  return (
    <section id="skills" className="relative py-32 md:py-48">
      {/* Dramatic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-secondary/5 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header - cinema style */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accent-secondary font-mono text-xs tracking-[0.4em] uppercase">// Chapter 02</span>
          <h2 className="text-5xl md:text-7xl font-black text-text-primary mt-4 tracking-tight">
            MY <span className="gradient-text">ARSENAL</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-secondary to-accent-primary mx-auto mt-6" />
        </motion.div>

        {/* Core Skills */}
        <div className="mb-16">
          <motion.div
            className="flex items-center gap-4 mb-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="p-3 rounded-xl bg-accent-primary/10 border border-accent-primary/20">
              <Code2 className="w-6 h-6 text-accent-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-text-primary">Core Technologies</h3>
              <p className="text-sm text-text-secondary">The foundation of my work</p>
            </div>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {coreSkills.map((skill, i) => (
              <SkillBadge key={skill.name} {...skill} index={i} />
            ))}
          </div>
        </div>

        {/* AI & Modern Tools - cinema card */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <GlassCard hover={false} className="p-10 bg-gradient-to-br from-bg-secondary/90 to-bg-primary/95 relative overflow-hidden">
            {/* Glow effects */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-secondary/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-primary/10 rounded-full blur-[80px]" />

            <div className="relative z-10">
              <motion.div
                className="flex items-center gap-4 mb-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="p-3 rounded-xl bg-accent-secondary/10 border border-accent-secondary/20">
                  <Sparkles className="w-6 h-6 text-accent-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-text-primary">AI-Powered Development</h3>
                  <p className="text-sm text-text-secondary">The future of building</p>
                </div>
                <span className="ml-auto px-4 py-1.5 bg-accent-secondary/20 text-accent-secondary text-xs rounded-full font-bold tracking-wide">
                  NEXT GEN
                </span>
              </motion.div>
              <p className="text-lg text-text-secondary mb-8 max-w-3xl leading-relaxed">
                I leverage AI tools like Cursor and Claude to accelerate development. Vibe coding
                allows me to rapidly prototype and build production-ready applications with clean,
                maintainable code.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {aiSkills.map((skill, i) => (
                  <SkillBadge key={skill.name} {...skill} index={i + coreSkills.length} />
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Other Skills */}
        <div>
          <motion.div
            className="flex items-center gap-4 mb-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="p-3 rounded-xl bg-accent-tertiary/10 border border-accent-tertiary/20">
              <Layers className="w-6 h-6 text-accent-tertiary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-text-primary">Additional Skills</h3>
              <p className="text-sm text-text-secondary">What else I bring to the table</p>
            </div>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {otherSkills.map((skill, i) => (
              <SkillBadge
                key={skill.name}
                {...skill}
                index={i + coreSkills.length + aiSkills.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
