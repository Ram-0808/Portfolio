"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);
  const isHoveringRef = useRef(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor='pointer']");

      if (isInteractive && !isHoveringRef.current) {
        isHoveringRef.current = true;
        cursorRef.current?.classList.add("cursor-hover");
        cursorInnerRef.current?.classList.add("inner-hover");
      } else if (!isInteractive && isHoveringRef.current) {
        isHoveringRef.current = false;
        cursorRef.current?.classList.remove("cursor-hover");
        cursorInnerRef.current?.classList.remove("inner-hover");
      }
    };

    window.addEventListener("mousemove", moveCursor);

    // Hide cursor when leaving window
    const handleMouseLeave = () => {
      cursorRef.current?.classList.add("cursor-hidden");
    };
    const handleMouseEnter = () => {
      cursorRef.current?.classList.remove("cursor-hidden");
    };

    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Outer cursor (follows slowly) */}
      <motion.div
        ref={cursorRef}
        className="cursor"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      >
        {/* Inner cursor (follows fast) */}
        <motion.div
          ref={cursorInnerRef}
          className="cursor-inner"
          style={{
            translateX: cursorX,
            translateY: cursorY,
          }}
        />
      </motion.div>

      <style>{`
        .cursor {
          position: fixed;
          top: 0;
          left: 0;
          width: 40px;
          height: 40px;
          border: 1px solid rgba(99, 102, 241, 0.5);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          opacity: 1;
          transition: width 0.3s, height 0.3s, background 0.3s, border-color 0.3s;
          mix-blend-mode: difference;
        }

        .cursor-inner {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 8px;
          height: 8px;
          background: rgba(99, 102, 241, 0.8);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.3s, height 0.3s, background 0.3s;
        }

        .cursor.cursor-hover {
          width: 60px;
          height: 60px;
          background: rgba(99, 102, 241, 0.1);
          border-color: rgba(99, 102, 241, 0.8);
        }

        .cursor-inner.inner-hover {
          width: 12px;
          height: 12px;
          background: rgba(99, 102, 241, 1);
        }

        .cursor.cursor-hidden {
          opacity: 0;
        }

        @media (max-width: 768px) {
          .cursor {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
