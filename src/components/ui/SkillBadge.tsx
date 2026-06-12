"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SkillBadgeProps {
  name: string;
  icon: LucideIcon;
  category: "core" | "ai" | "other";
  index: number;
}

export default function SkillBadge({
  name,
  icon: Icon,
  category,
  index,
}: SkillBadgeProps) {
  const categoryStyles = {
    core: "from-red-500/10 to-orange-500/10 border-red-500/30 hover:border-red-500/60",
    ai: "from-orange-500/10 to-amber-500/10 border-orange-500/30 hover:border-orange-500/60",
    other: "from-amber-500/10 to-yellow-500/10 border-amber-500/30 hover:border-amber-500/60",
  };

  const iconStyles = {
    core: "text-red-400",
    ai: "text-orange-400",
    other: "text-amber-400",
  };

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.05 }}
    >
      <div
        className={`relative p-6 rounded-2xl bg-gradient-to-br ${categoryStyles[category]} border backdrop-blur-sm overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(225,29,72,0.2)]`}
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Animated border glow */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-primary/20 via-transparent to-accent-secondary/20 animate-pulse" />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-4">
          {/* Icon with glow */}
          <div className="relative">
            <div className={`p-4 rounded-2xl bg-bg-tertiary/80 ${iconStyles[category]} group-hover:scale-110 transition-transform duration-300`}>
              <Icon size={28} />
            </div>
            {/* Glow ring behind icon */}
            <div className={`absolute inset-0 ${iconStyles[category]} blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
          </div>

          {/* Skill name */}
          <span className="font-bold text-base text-text-primary tracking-wide text-center">
            {name}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
