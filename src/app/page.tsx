"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  MapPin,
  Building2,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  ChevronRight,
  TrendingUp,
} from "lucide-react";
import { PLOTS_DATA, PLOT_CATEGORIES, PALC_COMPANY_INFO } from "@/lib/plots-data";
import { PlotCard } from "@/components/ui/plot-card";
import { InfiniteMarquee } from "@/components/ui/infinite-marquee";
import { PalcThread } from "@/components/palc-thread";
import { motion } from "motion/react";

export default function HomePage() {
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTab, setSearchTab] = useState<"all" | "residential" | "commercial" | "waterfront">("all");

  const filteredPlots = PLOTS_DATA.filter((plot) => {
    const matchesLoc =
      selectedLocation === "all" ||
      plot.location.community.toLowerCase().includes(selectedLocation.toLowerCase());
    const matchesCat =
      selectedCategory === "all" ||
      plot.category.toLowerCase().replace(/\s+/g, "").includes(selectedCategory.toLowerCase());

    if (searchTab === "waterfront" && !plot.waterfront) return false;
    if (searchTab === "commercial" && plot.category !== "Commercial Land") return false;
    if (searchTab === "residential" && plot.category !== "Residential Plots") return false;

    return matchesLoc && matchesCat;
  });

  return (
    <div className="flex flex-col min-h-screen bg-midnight w-full overflow-x-hidden relative">
      {/* 0. CONTINUOUS GOLDEN THREAD (Visual Spine) */}
      <PalcThread />

      {/* 1. CINEMATIC FULL-BLEED HERO WITH VERTICAL TRANSITION GRADIENT */}
      <section className="relative min-h-[100dvh] flex flex-col justify-between pt-32 pb-20 sm:pb-32 text-text-primary overflow-visible">
        {/* Full-bleed Aerial Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/plots/dubai-skyline-hero.png"
            alt="Dubai Aerial Panoramic Skyline"
            fill
            priority
            className="object-cover object-center opacity-40 brightness-75 contrast-125 saturate-[0.8]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-midnight" />
        </div>

        {/* Hero Content Canvas */}
        <div className="relative z-10 w-full max-w-[1580px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24 flex-1 flex flex-col justify-center my-auto pt-10">
          <div className="max-w-4xl space-y-8">
            {/* Eyebrow Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-platinum/30 text-platinum text-xs font-medium uppercase tracking-[0.2em] shadow-platinum-subtle"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Dubai Land Advisory</span>
            </motion.div>

            {/* Dominant Architectural Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif-heading text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-normal tracking-tight leading-[1.05] text-text-primary"
            >
              Exclusive Access to <br />
              <span className="text-platinum italic font-medium">Prime Development</span> Land.
            </motion.h1>

            {/* Hero Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-text-secondary text-base sm:text-lg md:text-xl max-w-2xl font-light leading-relaxed tracking-wide text-balance"
            >
              Curated off-market acreage, high-yield commercial parcels, and beachfront development plots traded quietly between landowners and tier-1 institutions.
            </motion.p>
          </div>
        </div>

        {/* FLOATING INTEGRATED SEARCH CONSOLE */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 w-full max-w-[1580px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24 mt-12"
        >
          <div className="double-bezel p-1.5 rounded-[2rem]">
            <div className="bg-midnight-card rounded-[calc(2rem-0.375rem)] p-6 sm:p-8 flex flex-col">
              
              {/* Filter Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-5 mb-6 border-b border-white/10">
                {[
                  { id: "all", label: "All Parcels" },
                  { id: "residential", label: "Residential" },
                  { id: "commercial", label: "Commercial" },
                  { id: "waterfront", label: "Waterfront" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSearchTab(tab.id as "all" | "residential" | "commercial" | "waterfront")}
                    className={`px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                      searchTab === tab.id
                        ? "bg-platinum text-midnight shadow-platinum-subtle"
                        : "bg-white/5 hover:bg-white/10 text-text-secondary"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Main Inputs Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                {/* Location Select */}
                <div className="space-y-1.5 md:border-r border-white/10 md:pr-6">
                  <label className="text-[10px] font-semibold uppercase tracking-wider text-text-secondary block">
                    Corridor / Location
                  </label>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-platinum shrink-0" />
                    <select
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="w-full text-sm font-medium text-text-primary bg-transparent focus:outline-none cursor-pointer py-1 appearance-none"
                    >
                      <option value="all" className="bg-midnight">All Prime Corridors</option>
                      <option value="dubai islands" className="bg-midnight">Dubai Islands</option>
                      <option value="al furjan" className="bg-midnight">Al Furjan</option>
                      <option value="dubai south" className="bg-midnight">Dubai South</option>
                      <option value="business bay" className="bg-midnight">Business Bay</option>
                      <option value="palm jumeirah" className="bg-midnight">Palm Jumeirah</option>
                    </select>
                  </div>
                </div>

                {/* Land Category Select */}
                <div className="space-y-1.5 md:border-r border-white/10 md:pr-6">
                  <label className="text-[10px] font-semibold uppercase tracking-wider text-text-secondary block">
                    Zoning Class
                  </label>
                  <div className="flex items-center gap-3">
                    <Building2 className="w-4 h-4 text-platinum shrink-0" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full text-sm font-medium text-text-primary bg-transparent focus:outline-none cursor-pointer py-1 appearance-none"
                    >
                      <option value="all" className="bg-midnight">All Asset Classes</option>
                      <option value="residential" className="bg-midnight">Residential Plots</option>
                      <option value="commercial" className="bg-midnight">Commercial Land</option>
                      <option value="industrial" className="bg-midnight">Industrial Land</option>
                      <option value="villa" className="bg-midnight">Villa Communities</option>
                    </select>
                  </div>
                </div>

                {/* Status & Compliance Badge */}
                <div className="space-y-1.5 md:pr-6">
                  <label className="text-[10px] font-semibold uppercase tracking-wider text-text-secondary block">
                    Due Diligence
                  </label>
                  <div className="flex items-center gap-3 py-1">
                    <ShieldCheck className="w-4 h-4 text-platinum shrink-0" />
                    <span className="text-sm font-medium text-text-primary">
                      DLD Verified
                    </span>
                  </div>
                </div>

                {/* Search Trigger */}
                <div>
                  <Link
                    href="/plots"
                    className="w-full py-4 px-6 rounded-xl bg-platinum hover:bg-platinum-light text-midnight text-sm font-semibold transition-all shadow-platinum-subtle flex items-center justify-center gap-2 tracking-wide active:scale-[0.98]"
                  >
                    <Search className="w-4 h-4" />
                    <span>Search {filteredPlots.length} Parcels</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. LIVE CORRIDOR TELEMETRY TICKER */}
      <section className="py-24 relative z-10">
        <div className="max-w-[1580px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { label: "Sourcing History", value: "20+", sub: "Years in Dubai Land" },
              { label: "Direct Deals", value: "0", sub: "Broker Markups" },
              { label: "DLD Verification", value: "100%", sub: "Title Deeds Cleared" },
              { label: "Institutional Value", value: "4.2B", sub: "AED Transacted" },
            ].map((metric, idx) => (
              <div key={idx} className="space-y-2">
                <span className="text-4xl sm:text-5xl font-light text-text-primary font-serif-heading tabular-nums tracking-tight block">
                  {metric.value}
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-platinum block">
                  {metric.label}
                </span>
                <span className="text-xs text-text-secondary font-light block">
                  {metric.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ASYMMETRIC BENTO: FEATURED DEALS */}
      <section className="py-32 relative z-10">
        <div className="max-w-[1580px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <h2 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-text-primary tracking-tight">
                Premium Off-Market.
              </h2>
              <p className="text-base text-text-secondary max-w-2xl font-light leading-relaxed">
                Curated land parcels with unredacted title deeds, GFA optimization models, and complete zoning clearances ready for immediate institutional negotiation.
              </p>
            </div>
            <Link
              href="/plots"
              className="group flex items-center gap-2 text-sm font-medium text-platinum hover:text-platinum-light transition-colors"
            >
              <span>Explore All Parcels</span>
              <div className="w-8 h-8 rounded-full border border-platinum/30 flex items-center justify-center group-hover:bg-platinum/10 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>

          {/* Editorial Bento Layout: Anchor Left, Cascade Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Anchor Hero Plot */}
            <div className="lg:col-span-7">
              {filteredPlots[0] && (
                <PlotCard plot={filteredPlots[0]} layout="grid" />
              )}
            </div>
            
            {/* Staggered Vertical Plots */}
            <div className="lg:col-span-5 flex flex-col gap-8 lg:mt-24">
              {filteredPlots.slice(1, 3).map((plot) => (
                <PlotCard key={plot.id} plot={plot} layout="grid" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. ASSET CLASS SCROLLER */}
      <section className="py-24 relative z-10 overflow-hidden border-t border-white/5">
        <div className="max-w-[1580px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
          <div className="mb-12">
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-normal text-text-primary tracking-tight">
              Strategic Allocations
            </h2>
          </div>

          <InfiniteMarquee speed={35} direction="left">
            {PLOT_CATEGORIES.filter((c) => c.id !== "all").map((cat) => (
              <Link
                key={cat.id}
                href={`/plots?category=${encodeURIComponent(cat.name)}`}
                className="group shrink-0 w-[300px] sm:w-[340px] h-full double-bezel p-1.5 rounded-[1.75rem] transition-all duration-500 hover:border-platinum/50"
              >
                <div className="bg-midnight-card rounded-[calc(1.75rem-0.375rem)] p-8 h-full flex flex-col justify-between hover:bg-white/[0.02] transition-colors">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-platinum mb-6 group-hover:scale-110 transition-transform duration-500">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif-heading font-medium text-text-primary text-2xl group-hover:text-platinum transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-sm text-text-secondary mt-3 leading-relaxed font-light">
                      {cat.desc}
                    </p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-medium text-text-secondary">
                    <span>{cat.count} Available Sites</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 text-platinum transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </InfiniteMarquee>
        </div>
      </section>

      {/* 5. INSTITUTIONAL ADVISORY & CTA */}
      <section className="py-32 relative z-10">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 text-center space-y-10">
          <div className="w-16 h-16 mx-auto rounded-full bg-platinum/10 border border-platinum/20 flex items-center justify-center text-platinum shadow-platinum-glow">
            <TrendingUp className="w-6 h-6" />
          </div>
          <h2 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-text-primary tracking-tight">
            Institutional Capital &amp; Joint Ventures
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto font-light leading-relaxed">
            We structure 50/50 co-development agreements and equity models for tier-1 developers seeking unencumbered land positions in Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/joint-ventures"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-platinum hover:bg-platinum-light text-midnight text-sm font-semibold transition-all active:scale-[0.98]"
            >
              Explore JV Structures
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-text-primary text-sm font-semibold transition-all active:scale-[0.98]"
            >
              Private Consultation
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
