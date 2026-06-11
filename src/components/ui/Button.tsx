"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
  href?: string;
}

export default function Button({
  children,
  variant = "primary",
  onClick,
  className = "",
  href,
}: ButtonProps) {
  const baseClasses =
    "relative px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 overflow-hidden";

  const variants = {
    primary:
      "bg-gradient-to-r from-accent-primary to-accent-secondary text-white hover:shadow-lg hover:shadow-accent-primary/30",
    secondary:
      "border border-accent-primary/50 text-accent-primary hover:bg-accent-primary/10 hover:border-accent-primary",
  };

  const content = (
    <motion.span
      className="relative z-10 flex items-center gap-2"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={`${baseClasses} ${variants[variant]} inline-flex items-center justify-center ${className}`}
        whileHover={{ y: -2 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <span className="absolute inset-0 bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      {content}
    </motion.button>
  );
}
