"use client";

import { motion } from "motion/react";
import React, { ReactNode } from "react";

interface InfiniteMarqueeProps {
  children: ReactNode;
  speed?: number; // Duration in seconds for one full loop
  direction?: "left" | "right";
}

export function InfiniteMarquee({ children, speed = 40, direction = "left" }: InfiniteMarqueeProps) {
  return (
    <div className="relative flex overflow-hidden group mask-fade-edges py-4">
      {/* First block */}
      <motion.div
        className="flex shrink-0 gap-6 pr-6"
        animate={{
          x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"]
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {children}
      </motion.div>
      
      {/* Second block (duplicate for seamless loop) */}
      <motion.div
        className="flex shrink-0 gap-6 pr-6"
        animate={{
          x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"]
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
