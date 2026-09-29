"use client";

import React, { useRef, useState, useEffect, ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MobbinScrollerProps {
  children: ReactNode;
  className?: string;
  showArrows?: boolean;
  fadeEdges?: boolean;
  gap?: string;
}

export function MobbinScroller({
  children,
  className = "",
  showArrows = true,
  fadeEdges = true,
  gap = "gap-4",
}: MobbinScrollerProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const checkScrollability = () => {
    if (!scrollerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollerRef.current;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
  };

  useEffect(() => {
    checkScrollability();
    const scroller = scrollerRef.current;
    if (scroller) {
      scroller.addEventListener("scroll", checkScrollability, { passive: true });
      window.addEventListener("resize", checkScrollability);
    }
    return () => {
      if (scroller) {
        scroller.removeEventListener("scroll", checkScrollability);
      }
      window.removeEventListener("resize", checkScrollability);
    };
  }, []);

  const scrollByAmount = (distance: number) => {
    if (!scrollerRef.current) return;
    scrollerRef.current.scrollBy({
      left: distance,
      behavior: "smooth",
    });
  };

  // Mouse Drag to Scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollerRef.current.offsetLeft);
    setScrollLeft(scrollerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Drag sensitivity
    scrollerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className={`relative group/scroller ${className}`}>
      {/* Left Chevron Button */}
      {showArrows && canScrollLeft && (
        <button
          onClick={() => scrollByAmount(-380)}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/95 border border-gray-200 shadow-md flex items-center justify-center text-gray-700 hover:text-[#b8441c] hover:scale-105 active:scale-95 transition-all"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}

      {/* Right Chevron Button */}
      {showArrows && canScrollRight && (
        <button
          onClick={() => scrollByAmount(380)}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/95 border border-gray-200 shadow-md flex items-center justify-center text-gray-700 hover:text-[#b8441c] hover:scale-105 active:scale-95 transition-all"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}

      {/* Horizontal Scroll Track */}
      <div
        ref={scrollerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={`flex overflow-x-auto no-scrollbar py-2 px-1 cursor-grab active:cursor-grabbing select-none scroll-smooth ${gap} ${
          fadeEdges ? "mask-fade-edges" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}
