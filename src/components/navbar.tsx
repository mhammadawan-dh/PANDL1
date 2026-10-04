"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, ArrowUpRight, Menu, X } from "lucide-react";
import { PALC_COMPANY_INFO } from "@/lib/plots-data";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Explore Plots", href: "/plots" },
    { name: "Dubai Islands", href: "/plots/dubai-islands-waterfront-plot" },
    { name: "Joint Ventures", href: "/joint-ventures" },
    { name: "Advisory & About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all w-full pt-4 px-4 sm:px-6">
      <div className="mx-auto max-w-[1580px] h-16 sm:h-20 rounded-full bg-midnight-surface/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.4)] flex items-center justify-between px-6 sm:px-8">
        
        {/* Brand Logo & Dubai Tag */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 shrink-0 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/palc-logo-white.png"
                alt="Plots & Lands Company Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-text-primary leading-none">
                PALC <span className="text-platinum font-medium text-xs tracking-wider">DUBAI</span>
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-wider text-text-secondary uppercase font-semibold mt-1">
                Plots &amp; Lands Company
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-text-secondary">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors py-1 ${
                  isActive
                    ? "text-platinum font-semibold border-b border-platinum"
                    : "hover:text-platinum"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center space-x-4">
          <a
            href={`tel:${PALC_COMPANY_INFO.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-2 text-xs font-semibold text-text-secondary hover:text-platinum transition-colors py-2 px-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/5"
          >
            <Phone className="w-3.5 h-3.5 text-platinum" />
            <span className="tabular-nums">{PALC_COMPANY_INFO.phone}</span>
          </a>

          {/* Button-in-Button Pattern */}
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 pl-5 pr-1.5 py-1.5 rounded-full bg-platinum hover:bg-platinum-light text-midnight text-xs font-semibold tracking-wide transition-all active:scale-[0.98]"
          >
            <span>Direct Advisory</span>
            <div className="w-7 h-7 rounded-full bg-midnight/10 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-[1px] transition-transform">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-full text-text-secondary hover:bg-white/10"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-[4.5rem] left-4 right-4 bg-midnight-card border border-white/10 rounded-2xl px-6 pt-4 pb-6 space-y-3 shadow-2xl backdrop-blur-xl">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-3 rounded-lg text-sm font-medium text-text-primary hover:bg-white/5 hover:text-platinum"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href={`tel:${PALC_COMPANY_INFO.phone.replace(/\s+/g, "")}`}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-text-primary"
            >
              <Phone className="w-4 h-4 text-platinum" />
              <span>Call: {PALC_COMPANY_INFO.phone}</span>
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-platinum text-midnight text-xs font-semibold text-center"
            >
              Book Private Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
