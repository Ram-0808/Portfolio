"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface TrailDot {
  x: number;
  y: number;
  opacity: number;
}

export default function CursorTrail() {
  const trailRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<TrailDot[]>([]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const numDots = 15;
    dotsRef.current = Array(numDots).fill({ x: 0, y: 0, opacity: 0 });

    let currentX = 0;
    let currentY = 0;
    let animationId: number;

    const updateTrail = () => {
      const targetX = mouseX.get();
      const targetY = mouseY.get();

      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;

      dotsRef.current = dotsRef.current.map((dot, i) => {
        const prevDot = i === 0 ? { x: currentX, y: currentY } : dotsRef.current[i - 1];
        return {
          x: prevDot.x + (Math.random() - 0.5) * 2,
          y: prevDot.y + (Math.random() - 0.5) * 2,
          opacity: Math.min(1, (numDots - i) / numDots),
        };
      });

      if (trailRef.current) {
        const children = trailRef.current.children;
        dotsRef.current.forEach((dot, i) => {
          if (children[i]) {
            const el = children[i] as HTMLElement;
            el.style.transform = `translate(${dot.x}px, ${dot.y}px)`;
            el.style.opacity = `${dot.opacity * 0.6}`;
          }
        });
      }

      animationId = requestAnimationFrame(updateTrail);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    updateTrail();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [mouseX, mouseY]);

  return (
    <div
      ref={trailRef}
      className="fixed inset-0 pointer-events-none z-[9998]"
    >
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: `radial-gradient(circle, rgba(225, 29, 72, ${0.8 - i * 0.05}) 0%, transparent 70%)`,
            width: `${8 - i * 0.4}px`,
            height: `${8 - i * 0.4}px`,
            marginLeft: `${-4 + i * 0.2}px`,
            marginTop: `${-4 + i * 0.2}px`,
          }}
        />
      ))}
    </div>
  );
}
