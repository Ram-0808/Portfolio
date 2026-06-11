"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { socialLinks, personalInfo } from "../lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 border-t border-white/5 bg-gradient-to-b from-transparent to-bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & name - cinema style */}
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-black tracking-tight">
              <span className="text-text-primary">{"<"}</span>
              <span className="gradient-text">{personalInfo.name.split(" ")[0]}</span>
              <span className="text-text-primary">{"/>"}</span>
            </a>
            <p className="text-text-secondary text-sm mt-2 tracking-wide">
              {personalInfo.role} • {personalInfo.location}
            </p>
          </div>

          {/* Social links - cinema style */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const IconComponent = link.icon as React.ComponentType<{size?: number; className?: string}>;
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-bg-secondary border border-white/5 hover:border-accent-primary/30 hover:bg-accent-primary/10 transition-all"
                  whileHover={{ y: -4, scale: 1.1 }}
                  title={link.name}
                >
                  <IconComponent size={20} className="text-text-secondary" />
                </motion.a>
              );
            })}
          </div>

          {/* Copyright - cinema style */}
          <div className="text-center md:text-right">
            <p className="text-text-secondary text-sm flex items-center justify-center md:justify-end gap-2">
              <span className="text-accent-primary">©</span> {currentYear} • Crafted with
              <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />
              in {personalInfo.location}
            </p>
            <p className="text-text-secondary/50 text-xs mt-1 tracking-wider">
              All rights reserved
            </p>
          </div>
        </div>

        {/* Bottom tagline */}
        <motion.div
          className="text-center mt-10 pt-8 border-t border-white/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-text-secondary/40 text-xs tracking-[0.3em] uppercase font-mono">
            Building the future, one commit at a time
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
