"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import { personalInfo } from "../lib/constants";
import SplitText from "./SplitText";
import ParallaxOrbs from "./ParallaxOrbs";
import MagneticButton from "./MagneticButton";

const roles = ["Backend Developer", "Django Expert", "AI Enthusiast", "Problem Solver"];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.9]);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Film grain overlay */}
      <div className="film-grain" />
      <div className="cinematic-vignette" />

      {/* Parallax orbs */}
      <ParallaxOrbs />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        style={{ opacity, scale }}
      >
        {/* Cinematic tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-glass-card border border-accent-primary/20 text-sm backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>
            <span className="text-text-secondary tracking-wider uppercase">Open to opportunities</span>
          </span>
        </motion.div>

        {/* Main heading - dramatic cinema style with split text animation */}
        <div className="mb-8">
          <SplitText
            text="I BUILD DIGITAL EXPERIENCES"
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight"
            delay={0.2}
            staggerDelay={0.03}
            animation="slideUp"
          />
        </div>

        {/* Name reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="text-xl md:text-2xl text-text-secondary font-light tracking-[0.3em] uppercase">
            {personalInfo.name}
          </span>
        </motion.div>

        {/* Animated role text */}
        <motion.div
          className="h-14 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span className="text-2xl md:text-4xl font-semibold gradient-text">
            {displayText}
          </span>
          <span className="text-2xl md:text-4xl font-semibold gradient-text cursor-blink">
            |
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons - cinema style with magnetic effect */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <MagneticButton>
            <a href="#projects" className="group relative">
              <button className="btn-cinema px-10 py-5 rounded-xl text-white font-bold text-lg flex items-center gap-3 shadow-lg shadow-accent-primary/20">
                <span>Explore My Work</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
          </MagneticButton>

          <MagneticButton strength={0.3}>
            <a href="#contact" className="group">
              <button className="btn-cinema-secondary px-10 py-5 rounded-xl text-white font-semibold text-lg backdrop-blur-sm">
                <span className="flex items-center gap-3">
                  <Play size={18} className="group-hover:scale-110 transition-transform" />
                  Let's Talk
                </span>
              </button>
            </a>
          </MagneticButton>
        </motion.div>

        {/* Scroll indicator - cinema style */}
        <motion.div
          className="absolute bottom-16 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <div className="flex flex-col items-center gap-4">
            <span className="text-[10px] text-text-secondary tracking-[0.4em] uppercase font-mono">Scroll</span>
            <motion.div
              className="w-[1px] h-20 bg-gradient-to-b from-accent-primary via-accent-secondary to-transparent relative overflow-hidden"
              initial={{ scaleY: 0, originY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              <motion.div
                className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white to-transparent opacity-50"
                animate={{ y: [0, 80, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
