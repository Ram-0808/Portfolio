"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface MarqueeTextProps {
  text: string;
  speed?: number;
  className?: string;
  separator?: string;
}

export default function MarqueeText({
  text,
  speed = 50,
  className = "",
  separator = "•",
}: MarqueeTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const repeatedText = Array(6).fill(text).join(` ${separator} `);

  return (
    <div
      ref={ref}
      className={`overflow-hidden py-4 ${className}`}
    >
      <motion.div
        className="flex whitespace-nowrap"
        style={{ x }}
        animate={{ x: [0, -1000] }}
        transition={{
          duration: 20 / speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <span className={`text-6xl md:text-8xl lg:text-9xl font-black tracking-tight gradient-text inline-block pr-8`}>
          {repeatedText}
        </span>
        <span className={`text-6xl md:text-8xl lg:text-9xl font-black tracking-tight gradient-text inline-block pr-8`}>
          {repeatedText}
        </span>
      </motion.div>
    </div>
  );
}

// Static marquee (auto-scrolling)
interface AutoMarqueeProps {
  items: string[];
  className?: string;
  speed?: number;
}

export function AutoMarquee({ items, className = "", speed = 30 }: AutoMarqueeProps) {
  const repeatedItems = [...items, ...items, ...items];

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex gap-8"
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {repeatedItems.map((item, i) => (
          <span
            key={i}
            className="text-2xl md:text-3xl font-semibold text-text-secondary whitespace-nowrap"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// Vertical marquee
interface VerticalMarqueeProps {
  texts: string[];
  className?: string;
}

export function VerticalMarquee({ texts, className = "" }: VerticalMarqueeProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex flex-col gap-4"
        animate={{ y: ["0%", "-50%"] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...texts, ...texts].map((text, i) => (
          <span
            key={i}
            className="text-sm font-mono text-accent-primary tracking-widest"
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
