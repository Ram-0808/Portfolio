"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  animation?: "slideUp" | "slideDown" | "fade" | "reveal";
}

export default function SplitText({
  text,
  className = "",
  delay = 0,
  staggerDelay = 0.05,
  animation = "slideUp",
}: SplitTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const words = text.split(" ");

  const getInitial = () => {
    switch (animation) {
      case "slideUp":
        return { y: "100%", opacity: 0 };
      case "slideDown":
        return { y: "-100%", opacity: 0 };
      case "fade":
        return { opacity: 0 };
      case "reveal":
        return { clipPath: "inset(0 100% 0 0)" };
      default:
        return { y: "100%", opacity: 0 };
    }
  };

  const getAnimate = () => {
    switch (animation) {
      case "slideUp":
      case "slideDown":
        return { y: 0, opacity: 1 };
      case "fade":
        return { opacity: 1 };
      case "reveal":
        return { clipPath: "inset(0 0% 0 0)" };
      default:
        return { y: 0, opacity: 1 };
    }
  };

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={getInitial()}
            animate={isInView ? getAnimate() : getInitial()}
            transition={{
              duration: 0.6,
              delay: delay + i * staggerDelay,
              ease: "easeOut",
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </span>
  );
}

// Character split animation
interface CharSplitProps {
  text: string;
  className?: string;
  delay?: number;
}

export function CharSplit({ text, className = "", delay = 0 }: CharSplitProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const chars = text.split("");

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {chars.map((char, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : { y: "100%" }}
            transition={{
              duration: 0.4,
              delay: delay + i * 0.03,
              ease: "easeOut",
            }}
          >
            {char === " " ? " " : char}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

// Container for staggered children
interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({ children, className = "", staggerDelay = 0.1 }: StaggerContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// Stagger item wrapper
interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
}

export function StaggerItem({ children, className = "" }: StaggerItemProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
