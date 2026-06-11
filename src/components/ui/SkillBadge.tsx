"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SkillBadgeProps {
  name: string;
  icon: LucideIcon;
  proficiency: number;
  category: "core" | "ai" | "other";
  index: number;
}

export default function SkillBadge({
  name,
  icon: Icon,
  proficiency,
  category,
  index,
}: SkillBadgeProps) {
  const categoryStyles = {
    core: "from-indigo-500 to-blue-600 border-indigo-500/30",
    ai: "from-purple-500 to-pink-600 border-purple-500/30",
    other: "from-cyan-500 to-teal-600 border-cyan-500/30",
  };

  const iconStyles = {
    core: "text-indigo-400",
    ai: "text-purple-400",
    other: "text-cyan-400",
  };

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ y: -5 }}
    >
      <div
        className={`relative p-4 rounded-xl bg-gradient-to-br ${categoryStyles[category]} border backdrop-blur-sm overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:shadow-${category === "core" ? "indigo" : category === "ai" ? "purple" : "cyan"}-500/20`}
        style={{ perspective: "1000px" }}
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className={`p-3 rounded-lg bg-bg-tertiary ${iconStyles[category]}`}>
            <Icon size={24} />
          </div>
          <span className="font-semibold text-sm text-text-primary">{name}</span>
          <div className="w-full">
            <div className="h-1.5 bg-bg-primary/50 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${proficiency}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.05, duration: 0.8, ease: "easeOut" }}
              />
            </div>
            <span className="text-xs text-text-secondary mt-1 block text-center">
              {proficiency}%
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
