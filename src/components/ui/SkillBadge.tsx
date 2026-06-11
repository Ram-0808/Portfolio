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
    core: "from-red-500/10 to-orange-500/10 border-red-500/30 hover:border-red-500/50",
    ai: "from-orange-500/10 to-amber-500/10 border-orange-500/30 hover:border-orange-500/50",
    other: "from-amber-500/10 to-yellow-500/10 border-amber-500/30 hover:border-amber-500/50",
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
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <div
        className={`relative p-5 rounded-2xl bg-gradient-to-br ${categoryStyles[category]} border backdrop-blur-sm overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(225,29,72,0.15)]`}
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className={`p-3 rounded-xl bg-bg-tertiary ${iconStyles[category]} group-hover:scale-110 transition-transform`}>
            <Icon size={24} />
          </div>
          <span className="font-bold text-sm text-text-primary tracking-wide">{name}</span>
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
            <span className="text-xs text-text-secondary mt-1 block text-center font-mono">
              {proficiency}%
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
