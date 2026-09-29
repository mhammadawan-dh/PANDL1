"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Sparkles, ShieldCheck } from "lucide-react";

export function Preloader() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => setMounted(true), 0);
    // Fast architectural counter
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setVisible(false), 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 10;
      });
    }, 45);

    return () => clearInterval(timer);
  }, []);

  if (!mounted || !visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#0b0e13] flex flex-col items-center justify-center text-white transition-opacity duration-700 ease-out ${
        progress >= 100 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center max-w-sm px-6 text-center space-y-6">
        {/* PDF Circular Logo Seal */}
        <div className="relative">
          <div className="relative w-24 h-24 rounded-full flex items-center justify-center p-2 shadow-[0_0_50px_rgba(245,158,11,0.25)]">
            <Image
              src="/images/palc-logo-gold.png"
              alt="Plots & Lands Company"
              fill
              priority
              className="object-contain"
            />
          </div>
          <div className="absolute -inset-2 rounded-full border border-amber-500/20 animate-pulse pointer-events-none" />
        </div>

        {/* Corporate Title */}
        <div className="space-y-1.5">
          <h2 className="font-bold text-sm tracking-[0.25em] uppercase text-white">
            Plots &amp; Lands Company
          </h2>
          <p className="text-[11px] text-[#f59e0b] font-medium tracking-widest uppercase">
            Dubai Private Land Advisory
          </p>
        </div>

        {/* Minimal Progress Line & Counter */}
        <div className="w-48 space-y-2">
          <div className="h-[2px] w-full bg-white/10 overflow-hidden rounded-full">
            <div
              className="h-full bg-gradient-to-r from-[#b8441c] to-[#f59e0b] transition-all duration-150 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-[10px] text-gray-400 font-mono tracking-wider">
            <span>OFF-MARKET PORTAL</span>
            <span className="text-[#f59e0b] tabular-nums font-bold">
              {Math.min(progress, 100)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
