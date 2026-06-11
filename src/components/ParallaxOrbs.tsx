"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxOrbsProps {
  className?: string;
}

export default function ParallaxOrbs({ className = "" }: ParallaxOrbsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const orb1Y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const orb1X = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const orb2Y = useTransform(scrollYProgress, [0, 1], [-50, 100]);
  const orb2X = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  const orb3Y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const orb3Scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.8]);

  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Primary orb - red */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full"
        style={{
          y: orb1Y,
          x: orb1X,
          background: "radial-gradient(circle, rgba(225, 29, 72, 0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Secondary orb - orange */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          y: orb2Y,
          x: orb2X,
          background: "radial-gradient(circle, rgba(249, 115, 22, 0.12) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* Tertiary orb - yellow accent */}
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full"
        style={{
          y: orb3Y,
          scale: orb3Scale,
          background: "radial-gradient(circle, rgba(251, 191, 36, 0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Additional small orbs */}
      <motion.div
        className="absolute top-1/2 right-1/2 w-[200px] h-[200px] rounded-full bg-accent-primary/5"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [-80, 80]),
          filter: "blur(40px)",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/4 w-[150px] h-[150px] rounded-full bg-accent-secondary/5"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [60, -60]),
          filter: "blur(30px)",
        }}
      />
    </div>
  );
}

// Floating particle system
interface FloatingParticlesProps {
  count?: number;
  className?: string;
}

export function FloatingParticles({ count = 20, className = "" }: FloatingParticlesProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] rounded-full bg-accent-primary/50"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
