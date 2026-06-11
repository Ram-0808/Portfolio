"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import TiltCard from "../TiltCard";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  enableTilt?: boolean;
}

export default function GlassCard({ children, className = "", hover = true, enableTilt = true }: GlassCardProps) {
  if (enableTilt) {
    return (
      <TiltCard className={`glass-card rounded-2xl ${className}`}>
        {children}
      </TiltCard>
    );
  }

  return (
    <motion.div
      className={`glass-card rounded-2xl ${className}`}
      whileHover={hover ? { y: -4, scale: 1.01 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
