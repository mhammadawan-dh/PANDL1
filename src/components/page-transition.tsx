/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

// Spatial mapping of the site corresponding to the Navbar
const NAV_ORDER = [
  "/",
  "/plots",
  "/plots/dubai-islands-waterfront-plot",
  "/joint-ventures",
  "/about",
  "/contact"
];

function getNavIndex(path: string) {
  const idx = NAV_ORDER.indexOf(path);
  if (idx !== -1) return idx;
  // If navigating to a specific plot dossier, treat it as conceptually to the right of /plots
  if (path.startsWith("/plots/")) return 1.5; 
  return 0;
}

const pageVariants = {
  initial: (dir: number) => ({
    clipPath: dir === 1 ? "inset(0% 0% 0% 100%)" : "inset(0% 100% 0% 0%)",
    zIndex: 10
  }),
  animate: {
    clipPath: "inset(0% 0% 0% 0%)",
    zIndex: 10,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] as const }
  },
  exit: {
    clipPath: "inset(0% 0% 0% 0%)",
    zIndex: 0,
    transition: { duration: 1 }
  }
};

const threadVariants = {
  initial: (dir: number) => ({
    left: dir === 1 ? "100%" : "0%",
    opacity: 1,
  }),
  animate: (dir: number) => ({
    left: dir === 1 ? "0%" : "100%",
    opacity: 1,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] as const }
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0 }
  }
};

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [prevPath, setPrevPath] = useState(pathname);
  const [direction, setDirection] = useState(1);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (pathname !== prevPath) {
    const prevIdx = getNavIndex(prevPath);
    const currIdx = getNavIndex(pathname);
    setDirection(currIdx >= prevIdx ? 1 : -1);
    setPrevPath(pathname);
  }

  // Skip animation on initial server render to prevent hydration mismatch
  if (!isClient) {
    return <div className="w-full h-full">{children}</div>;
  }

  return (
    <div className="relative w-full flex-1 flex flex-col min-h-screen">
      <AnimatePresence mode="popLayout" initial={false} custom={direction}>
        
        {/* The Page Content */}
        <motion.div
          key={pathname}
          custom={direction}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-full flex-1 flex flex-col bg-midnight min-h-screen"
        >
          {children}
        </motion.div>

        {/* The Sweeping Thread Overlay */}
        <motion.div
          key={pathname + "-thread"}
          custom={direction}
          variants={threadVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed top-0 bottom-0 w-[2px] bg-platinum z-[100] pointer-events-none drop-shadow-[0_0_8px_rgba(211,212,216,0.8)]"
        />
        
      </AnimatePresence>
    </div>
  );
}
