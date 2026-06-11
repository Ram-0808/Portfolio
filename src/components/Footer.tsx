"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { socialLinks, personalInfo } from "../lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & name */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold gradient-text">
              {personalInfo.name.split(" ")[0]}
              <span className="text-text-primary">.dev</span>
            </a>
            <p className="text-text-secondary text-sm mt-1">
              Backend Developer at Absolin Software Solutions
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3 md:gap-4">
            {socialLinks.map((link) => {
              const IconComponent = link.icon as React.ComponentType<{size?: number; className?: string}>;
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-bg-secondary hover:bg-accent-primary/10 border border-white/5 hover:border-accent-primary/30 transition-colors"
                  whileHover={{ y: -2 }}
                  title={link.name}
                >
                  <IconComponent size={20} className="text-text-secondary" />
                </motion.a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-text-secondary text-sm flex items-center gap-1">
              Made with <Heart size={14} className="text-red-500 fill-red-500" /> in {personalInfo.location}
            </p>
            <p className="text-text-secondary/50 text-xs mt-1">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
