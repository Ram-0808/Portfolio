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
    <section id="skills" className="relative py-24 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-secondary/30 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent-primary font-mono text-sm tracking-wider">// MY STACK</span>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mt-2">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
        </motion.div>

        {/* Core Skills */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-indigo-500/10">
              <Code2 className="w-5 h-5 text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold text-text-primary">Core Technologies</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {coreSkills.map((skill, i) => (
              <SkillBadge key={skill.name} {...skill} index={i} />
            ))}
          </div>
        </div>

        {/* AI & Modern Tools */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard hover={false} className="p-8 relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-purple-500/10">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary">AI-Powered Development</h3>
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full font-mono">
                  Future Tech
                </span>
              </div>
              <p className="text-text-secondary mb-6 max-w-2xl">
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
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-cyan-500/10">
              <Layers className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold text-text-primary">Additional Skills</h3>
          </div>
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
