"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, ArrowUpRight, Menu, X, ShieldCheck, MapPin } from "lucide-react";
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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-[0_1px_6px_rgba(0,0,0,0.03)] transition-all w-full">
      <div className="max-w-[1580px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24 h-20 flex items-center justify-between">
        {/* Brand Logo & Dubai Tag */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-11 h-11 shrink-0 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/palc-logo-dark.png"
                alt="Plots & Lands Company Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight text-[#121417] leading-none">
                PALC <span className="text-[#b8441c] font-medium text-xs tracking-wider">DUBAI</span>
              </span>
              <span className="text-[10px] tracking-wider text-gray-500 uppercase font-semibold mt-1">
                Plots &amp; Lands Company
              </span>
            </div>
          </Link>

          {/* Institutional Status Badge */}
          <div className="hidden xl:flex items-center gap-2 pl-6 border-l border-gray-200 text-[11px] font-semibold text-gray-600">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Business Bay Desk Active • GST</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-gray-600">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors py-1 ${
                  isActive
                    ? "text-[#b8441c] font-semibold border-b-2 border-[#b8441c]"
                    : "hover:text-[#b8441c]"
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
            className="flex items-center gap-2 text-xs font-semibold text-gray-700 hover:text-[#b8441c] transition-colors py-2 px-3.5 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200"
          >
            <Phone className="w-3.5 h-3.5 text-[#b8441c]" />
            <span className="tabular-nums">{PALC_COMPANY_INFO.phone}</span>
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#b8441c] hover:bg-[#9e3814] text-white text-xs font-semibold tracking-wide transition-all shadow-sm hover:shadow"
          >
            <span>Direct Advisory</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-6 pt-4 pb-6 space-y-3 shadow-lg">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-3 rounded-md text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-[#b8441c]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-gray-100 flex flex-col gap-2.5">
            <a
              href={`tel:${PALC_COMPANY_INFO.phone.replace(/\s+/g, "")}`}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-md bg-gray-50 border border-gray-200 text-xs font-semibold text-gray-800"
            >
              <Phone className="w-4 h-4 text-[#b8441c]" />
              <span>Call: {PALC_COMPANY_INFO.phone}</span>
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-md bg-[#b8441c] text-white text-xs font-semibold text-center"
            >
              Book Private Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
