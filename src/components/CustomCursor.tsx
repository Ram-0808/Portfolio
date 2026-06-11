"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 26, stiffness: 500 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);

      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor='pointer']");

      setIsHovering(!!isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Outer ring - smooth following */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      >
        <motion.div
          className="relative"
          animate={{
            width: isHovering ? 60 : isClicking ? 30 : 40,
            height: isHovering ? 60 : isClicking ? 30 : 40,
          }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          style={{
            background: isHovering
              ? "rgba(225, 29, 72, 0.2)"
              : "transparent",
            border: `1.5px solid ${isHovering ? "rgba(225, 29, 72, 0.8)" : "rgba(255, 255, 255, 0.5)"}`,
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </motion.div>

      {/* Inner dot - fast following */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000]"
        style={{
          translateX: cursorX,
          translateY: cursorY,
        }}
      >
        <motion.div
          className="relative"
          animate={{
            width: isHovering ? 8 : isClicking ? 6 : 6,
            height: isHovering ? 8 : isClicking ? 6 : 6,
          }}
          transition={{ duration: 0.1 }}
          style={{
            background: isHovering ? "#e11d48" : "#ffffff",
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </motion.div>

      {/* Hide default cursor */}
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}
