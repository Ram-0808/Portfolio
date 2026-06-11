"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import { MapPin, Sparkles, Award, Users } from "lucide-react";
import GlassCard from "./ui/GlassCard";
import { personalInfo } from "../lib/constants";

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const displayValue = useTransform(motionValue, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, motionValue, value]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </motion.span>
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Award, value: personalInfo.yearsExperience, suffix: "+", label: "Years Experience" },
    { icon: Sparkles, value: personalInfo.projectsCompleted, suffix: "+", label: "Projects Built" },
    { icon: Users, value: personalInfo.clientsServed, suffix: "+", label: "Happy Clients" },
  ];

  return (
    <section id="about" className="relative py-32 md:py-48" ref={ref}>
      {/* Spotlight background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header - cinema style */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accent-primary font-mono text-xs tracking-[0.4em] uppercase">// Chapter 01</span>
          <h2 className="text-5xl md:text-7xl font-black text-text-primary mt-4 tracking-tight">
            THE <span className="gradient-text">STORY</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Avatar with cinema style */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              {/* Dramatic glow behind avatar */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/30 to-accent-secondary/30 blur-3xl rounded-full" />

              {/* Avatar frame */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 via-transparent to-accent-secondary/20" />
                <div className="w-full h-full bg-gradient-to-br from-bg-secondary to-bg-tertiary flex items-center justify-center">
                  <span className="text-[120px] md:text-[180px]">👨‍💻</span>
                </div>
              </div>

              {/* Floating badges - cinema style */}
              <motion.div
                className="absolute -top-4 -right-4 px-4 py-2 rounded-lg bg-bg-secondary border border-accent-primary/30 shadow-[0_0_30px_rgba(225,29,72,0.3)]"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <span className="text-sm font-bold text-accent-primary tracking-wide">Django Dev</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-lg bg-bg-secondary border border-accent-secondary/30"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
              >
                <span className="text-sm font-bold text-accent-secondary tracking-wide">AI Enthusiast</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <GlassCard hover={false} className="p-10 bg-gradient-to-br from-bg-secondary/80 to-bg-primary/90">
              {/* Location with dramatic styling */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-[1px] bg-gradient-to-r from-accent-primary to-transparent" />
                <div className="flex items-center gap-2 text-text-secondary">
                  <MapPin size={18} className="text-accent-primary" />
                  <span className="tracking-wide">{personalInfo.location}</span>
                </div>
              </div>

              {/* Bio - cinematic text */}
              <p className="text-xl md:text-2xl text-text-primary leading-relaxed font-light mb-10">
                {personalInfo.bio}
              </p>

              {/* Availability badge - cinema style */}
              <div className="flex items-center gap-4 p-5 rounded-xl bg-gradient-to-r from-green-500/10 to-transparent border-l-2 border-green-500 mb-10">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>
                <span className="text-green-400 font-medium tracking-wide">
                  Currently available for projects
                </span>
              </div>

              {/* Stats - cinema style */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="text-center p-5 rounded-xl bg-bg-primary/50 border border-white/5 hover:border-accent-primary/30 transition-colors"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.5 }}
                  >
                    <stat.icon className="w-6 h-6 text-accent-primary mx-auto mb-3" />
                    <div className="text-3xl md:text-4xl font-black text-text-primary">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs text-text-secondary mt-2 tracking-wider uppercase">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
