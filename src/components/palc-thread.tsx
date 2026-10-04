"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";

export function PalcThread() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // We track the scroll progress of the entire page to draw the thread.
  // Using document.documentElement or a wrapper element.
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"]
  });

  // If the user prefers reduced motion, we just draw the full line statically.
  const drawProgress = reduce ? 1 : scrollYProgress;

  return (
    <div 
      className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-full pointer-events-none overflow-visible z-0 hidden lg:block"
      ref={containerRef}
    >
      <svg
        viewBox="0 0 800 4000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMin slice"
        className="w-full h-full opacity-60"
      >
        <motion.path
          d="
            M 400 0
            C 400 300, 200 400, 200 600
            C 200 800, 600 900, 600 1200
            C 600 1500, 300 1600, 300 1900
            C 300 2200, 500 2300, 500 2600
            C 500 2900, 400 3000, 400 3400
            L 400 4000
          "
          stroke="#D3D4D8"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="shadow-platinum-glow"
          style={{
            pathLength: drawProgress,
            opacity: useTransform(scrollYProgress, [0, 0.02, 1], [0, 1, 1])
          }}
        />
        
        {/* Glow node markers at key scroll points */}
        <motion.circle 
          cx="200" cy="600" r="4" 
          fill="#D3D4D8" 
          className="shadow-platinum-glow"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.1, 0.15], [0, 0, 1]) }}
        />
        <motion.circle 
          cx="600" cy="1200" r="4" 
          fill="#D3D4D8" 
          className="shadow-platinum-glow"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.25, 0.3], [0, 0, 1]) }}
        />
        <motion.circle 
          cx="300" cy="1900" r="4" 
          fill="#D3D4D8" 
          className="shadow-platinum-glow"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.45, 0.5], [0, 0, 1]) }}
        />
      </svg>
    </div>
  );
}
