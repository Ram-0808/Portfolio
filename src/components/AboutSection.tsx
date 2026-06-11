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
  const roundedValue = useTransform(motionValue, (v) => Math.round(v));
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
    <section id="about" className="relative py-24 md:py-32" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-secondary/50 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent-primary font-mono text-sm tracking-wider">// ABOUT ME</span>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mt-2">
            Know Me <span className="gradient-text">Better</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Avatar */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              {/* Avatar gradient border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary p-px">
                <div className="w-full h-full rounded-2xl bg-bg-secondary" />
              </div>

              {/* Avatar placeholder */}
              <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-bg-tertiary to-bg-secondary flex items-center justify-center overflow-hidden">
                <div className="text-8xl">👨‍💻</div>

                {/* Floating badge */}
                <motion.div
                  className="absolute -bottom-2 -right-2 px-3 py-2 bg-bg-tertiary rounded-lg border border-glass-border shadow-lg"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <span className="text-sm font-medium text-accent-primary">Django Dev</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard hover={false} className="p-8">
              {/* Location */}
              <div className="flex items-center gap-2 text-text-secondary mb-4">
                <MapPin size={18} />
                <span>{personalInfo.location}</span>
              </div>

              {/* Bio */}
              <p className="text-lg text-text-primary leading-relaxed mb-6">
                {personalInfo.bio}
              </p>

              {/* Availability badge */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20 mb-8">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 font-medium">
                  Available for freelance projects
                </span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="text-center p-4 rounded-xl bg-bg-primary/50"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                  >
                    <stat.icon className="w-6 h-6 text-accent-primary mx-auto mb-2" />
                    <div className="text-2xl md:text-3xl font-bold text-text-primary">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs text-text-secondary mt-1">{stat.label}</div>
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
