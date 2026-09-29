"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  MapPin,
  Building2,
  Compass,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Layers,
  Sparkles,
  Phone,
  BarChart3,
  FileCheck,
  Users2,
  TrendingUp,
  Landmark,
  BadgeCheck
} from "lucide-react";
import { PLOTS_DATA, PLOT_CATEGORIES, PALC_COMPANY_INFO } from "@/lib/plots-data";
import { PlotCard } from "@/components/ui/plot-card";
import { MobbinScroller } from "@/components/ui/mobbin-scroller";

export default function HomePage() {
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTab, setSearchTab] = useState<"all" | "waterfront" | "commercial" | "industrial">("all");

  const filteredPlots = PLOTS_DATA.filter((plot) => {
    const matchesLoc =
      selectedLocation === "all" ||
      plot.location.community.toLowerCase().includes(selectedLocation.toLowerCase());
    const matchesCat =
      selectedCategory === "all" ||
      plot.category.toLowerCase().replace(/\s+/g, "").includes(selectedCategory.toLowerCase());

    if (searchTab === "waterfront" && !plot.waterfront) return false;
    if (searchTab === "commercial" && plot.category !== "Commercial Land") return false;
    if (searchTab === "industrial" && plot.category !== "Industrial Land") return false;

    return matchesLoc && matchesCat;
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#fafbfc] w-full overflow-x-hidden">
      {/* 1. CINEMATIC FULL-BLEED HERO WITH VERTICAL TRANSITION GRADIENT */}
      <section className="relative min-h-[92vh] flex flex-col justify-between pt-24 pb-20 sm:pb-28 text-white overflow-visible bg-[#0b0e13]">
        {/* Full-bleed Aerial Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/plots/dubai-skyline-hero.png"
            alt="Dubai Aerial Panoramic Skyline"
            fill
            priority
            className="object-cover object-center brightness-105 contrast-[1.04] saturate-[1.12]"
          />
          {/* Soft directional scrim: gently darkens behind text on left, leaves skyline radiant on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07090d]/85 via-[#07090d]/35 via-45% to-transparent" />
          {/* Light top navigation shadow and subtle bottom blend */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent via-65% to-[#0b0e13]/60" />
        </div>

        {/* Hero Content Canvas */}
        <div className="relative z-10 w-full max-w-[1580px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24 flex-1 flex flex-col justify-center my-auto">
          <div className="max-w-4xl space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[#f59e0b] text-xs font-semibold uppercase tracking-[0.2em] shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#f59e0b]" />
              <span>Direct Dubai Land Advisory &bull; 100% Laser Focus</span>
            </div>

            {/* Dominant Architectural Heading */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[5.75rem] font-bold tracking-tight leading-[1.04] text-white [text-shadow:_0_2px_16px_rgb(0_0_0_/_60%)]">
              Find Off-Market Plots &amp; <br />
              <span className="text-[#e05638] italic font-serif font-normal">Development Land</span> in Dubai
            </h1>

            {/* Hero Subtitle */}
            <p className="text-gray-100 text-base sm:text-lg md:text-xl max-w-2xl font-normal leading-relaxed tracking-wide text-balance [text-shadow:_0_1px_8px_rgb(0_0_0_/_80%)]">
              Direct access to off-market acreage, high-yield commercial parcels, and prime waterfront development plots traded quietly between landowners and institutional developers.
            </p>
          </div>
        </div>

        {/* FLOATING OVERLAPPING SEARCH CONSOLE (BRIDGES HERO & DISCOVERY SECTIONS) */}
        <div className="relative z-20 w-full max-w-[1580px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24 -mb-12 sm:-mb-16">
          <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] p-5 sm:p-7 border border-gray-100 text-gray-800">
            {/* Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-4 border-b border-gray-100">
              {[
                { id: "all", label: "All Off-Market Plots" },
                { id: "waterfront", label: "Waterfront & Islands" },
                { id: "commercial", label: "Commercial High-Rise" },
                { id: "industrial", label: "Industrial & Logistics" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSearchTab(tab.id as "all" | "waterfront" | "commercial" | "industrial")}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    searchTab === tab.id
                      ? "bg-[#b8441c] text-white shadow-xs"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Main Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-center">
              {/* Location Select */}
              <div className="space-y-1 sm:border-r border-gray-100 sm:pr-4">
                <label className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">
                  Corridor / Location
                </label>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#b8441c] shrink-0" />
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full text-sm font-semibold text-gray-800 bg-transparent focus:outline-none cursor-pointer py-1"
                  >
                    <option value="all">All Prime Corridors</option>
                    <option value="dubai islands">Dubai Islands</option>
                    <option value="al furjan">Al Furjan</option>
                    <option value="dubai south">Dubai South</option>
                    <option value="business bay">Business Bay</option>
                    <option value="palm jumeirah">Palm Jumeirah</option>
                    <option value="bukadra">Bukadra / Meydan</option>
                  </select>
                </div>
              </div>

              {/* Land Category Select */}
              <div className="space-y-1 sm:border-r border-gray-100 sm:pr-4">
                <label className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">
                  Zoning / Asset Class
                </label>
                <div className="flex items-center gap-2.5">
                  <Building2 className="w-4 h-4 text-[#b8441c] shrink-0" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full text-sm font-semibold text-gray-800 bg-transparent focus:outline-none cursor-pointer py-1"
                  >
                    <option value="all">All Asset Classes</option>
                    <option value="residential">Residential Plots</option>
                    <option value="commercial">Commercial Land</option>
                    <option value="mixed">Mixed Use</option>
                    <option value="industrial">Industrial Land</option>
                    <option value="villa">Villa Communities</option>
                  </select>
                </div>
              </div>

              {/* Status & Compliance Badge */}
              <div className="space-y-1 lg:border-r border-gray-100 lg:pr-4">
                <label className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">
                  Due Diligence Status
                </label>
                <div className="flex items-center gap-2 py-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-sm font-semibold text-gray-800">
                    DLD Title Verified &bull; Freehold
                  </span>
                </div>
              </div>

              {/* Search Trigger */}
              <div>
                <Link
                  href="/plots"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#b8441c] hover:bg-[#9e3814] text-white text-sm font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 tracking-wide"
                >
                  <Search className="w-4 h-4" />
                  <span>Search {filteredPlots.length} Available Plots</span>
                </Link>
              </div>
            </div>

            {/* Micro Trust Banner */}
            <div className="mt-4 pt-3.5 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-500 font-medium">
              <div className="flex items-center gap-5 flex-wrap">
                <span className="flex items-center gap-1.5 text-gray-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#b8441c]" /> Direct Owner Transactions
                </span>
                <span className="flex items-center gap-1.5 text-gray-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#b8441c]" /> Zero Broker DSP Layers
                </span>
                <span className="flex items-center gap-1.5 text-gray-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#b8441c]" /> Unredacted FAR &amp; GFA Data
                </span>
              </div>
              <span className="text-[#b8441c] font-semibold tracking-wide">
                “If it’s Available then it is Available.”
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LIVE CORRIDOR TELEMETRY TICKER */}
      <section className="pt-24 sm:pt-28 pb-8 bg-[#fafbfc] border-b border-gray-100">
        <div className="max-w-[1580px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-gray-200/80">
            {[
              { label: "Corridor Sourcing History", value: "20+ Years", sub: "Dubai Master Land Corridors" },
              { label: "Direct Owner Deals", value: "0 DSPs", sub: "Zero Middleman Price Inflation" },
              { label: "Document Verification", value: "100% DLD", sub: "Site Plans & Title Deeds Cleared" },
              { label: "Institutional Transacted Value", value: "AED 4.2B+", sub: "Off-Market Site Allocations" },
            ].map((metric, idx) => (
              <div key={idx} className="space-y-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#121417] font-serif tabular-nums tracking-tight block">
                  {metric.value}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#b8441c] block">
                  {metric.label}
                </span>
                <span className="text-[11px] text-gray-500 font-light block">
                  {metric.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CATEGORY DISCOVERY (EXPANSIVE MOBBIN-STYLE RAIL) */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-[1580px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#b8441c]">Asset Allocations</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight mt-1">
                Find the Right Opportunity
              </h2>
            </div>
            <Link
              href="/plots"
              className="text-xs font-semibold text-[#b8441c] hover:text-[#9e3814] flex items-center gap-1 transition-colors"
            >
              <span>Explore All 28 Parcels</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <MobbinScroller gap="gap-6">
            {PLOT_CATEGORIES.filter((c) => c.id !== "all").map((cat) => (
              <Link
                key={cat.id}
                href={`/plots?category=${encodeURIComponent(cat.name)}`}
                className="shrink-0 w-72 sm:w-80 p-6 rounded-2xl border border-gray-100 bg-[#fafbfc] hover:bg-white hover:border-[#b8441c]/40 hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#b8441c] mb-5 group-hover:scale-110 transition-transform shadow-xs">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-gray-900 text-lg group-hover:text-[#b8441c] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-2 leading-relaxed font-light">
                    {cat.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-gray-400">
                  <span>{cat.count} Available Sites</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 text-[#b8441c] transition-transform" />
                </div>
              </Link>
            ))}
          </MobbinScroller>
        </div>
      </section>

      {/* 4. FEATURED OFF-MARKET DEALS (PANORAMIC WIDE GRID) */}
      <section className="py-20 md:py-28 bg-[#fafbfc]">
        <div className="max-w-[1580px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#b8441c]" />
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Off-Market Deal Sourcing
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight">
                Premium Off-Market Deals
              </h2>
              <p className="text-sm text-gray-600 max-w-2xl font-light">
                Curated land parcels with unredacted title deeds, GFA optimization models, and complete zoning clearances ready for immediate developer negotiation.
              </p>
            </div>

            {/* Quick Corridor Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
              {["all", "Dubai Islands", "Al Furjan", "Dubai South", "Business Bay"].map((loc) => (
                <button
                  key={loc}
                  onClick={() => setSelectedLocation(loc === "all" ? "all" : loc.toLowerCase())}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    (loc === "all" && selectedLocation === "all") ||
                    selectedLocation.toLowerCase() === loc.toLowerCase()
                      ? "bg-[#121417] text-white shadow-sm"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {loc === "all" ? "All Locations" : loc}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid Spanning Full Width */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlots.map((plot) => (
              <PlotCard key={plot.id} plot={plot} />
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/plots"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white border border-gray-300 hover:border-[#b8441c] hover:text-[#b8441c] text-xs font-semibold tracking-wide transition-all shadow-sm"
            >
              <span>Browse Complete Land Portfolio ({PLOTS_DATA.length} Parcels)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. VALUE PROPOSITION: "MORE THAN JUST REAL ESTATE" */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-[1580px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#b8441c]">The PALC Difference</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight mt-2 mb-4">
              More Than Just Real Estate
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed font-light">
              We think like investors. We understand how billionaires and institutional development funds buy land: with precision, privacy, and total control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Exclusive Off-Market Access",
                desc: "Plots that never appear on public portals or social media. Traded quietly between beneficial owners and serious capital."
              },
              {
                icon: Compass,
                title: "20+ Years Market Intelligence",
                desc: "Deep insider relationships across Dubai's land corridors, master developers, and land registry archives."
              },
              {
                icon: Users2,
                title: "Zero Broker DSP Layers",
                desc: "We eliminate deal-spoiling personalities and broker chains that inflate prices and blur real land valuations."
              },
              {
                icon: BarChart3,
                title: "Value Engineering & FAR Studies",
                desc: "Every parcel is analyzed for GFA optimization, height envelopes, and capital yield before you make your bid."
              },
              {
                icon: FileCheck,
                title: "Direct Owner Transactions",
                desc: "Full transparency. You review the unredacted documents, meet the actual title deed owner, and proceed directly."
              },
              {
                icon: Layers,
                title: "End-to-End Execution",
                desc: "From initial zoning validation and feasibility modeling to DLD transfer and contractor JV introductions."
              }
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={i}
                  className="p-8 rounded-2xl border border-gray-100 bg-[#fafbfc] hover:bg-white hover:border-[#b8441c]/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#b8441c]/10 text-[#b8441c] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-gray-900 text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CLIENT TESTIMONIALS (EXACT PDF VERIFICATION) */}
      <section className="py-24 bg-[#121417] text-white">
        <div className="max-w-[1580px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#f59e0b]">Verified Deal Execution</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mt-2 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-400 text-sm font-light">
              Transactions executed directly with international developers and private family offices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PALC_COMPANY_INFO.testimonials.map((test, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xs flex flex-col justify-between hover:border-amber-500/30 transition-colors"
              >
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-[#b8441c]/20 border border-[#b8441c]/40 text-[#f59e0b] text-[10px] font-semibold uppercase tracking-wider mb-5">
                    {test.tag}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed italic mb-8 font-light">
                    “{test.quote}”
                  </p>
                </div>

                <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-base text-white">{test.author}</h4>
                    <span className="text-xs text-gray-400">{test.origin}</span>
                  </div>
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CONSULTATION & MANDATE CTA BANNER */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-[1580px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
          <div className="bg-gradient-to-r from-[#121417] via-[#1a2028] to-[#121417] rounded-3xl p-10 sm:p-14 text-white flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl border border-gray-800">
            <div className="space-y-4 max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#f59e0b]">Private Advisory Mandate</span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
                Looking for an Unlisted, Bespoke Land Acquisition Mandate?
              </h2>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
                Connect directly with our senior land intelligence committee in Business Bay. We source strictly off-market parcels matching your precise FAR, GFA, and capital criteria under mutual non-disclosure agreement.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
              <Link
                href="/contact"
                className="w-full sm:w-auto text-center px-8 py-4 rounded-xl bg-[#b8441c] hover:bg-[#9e3814] text-white text-xs font-semibold tracking-wide transition-all shadow-md hover:shadow-lg"
              >
                Submit Confidential Mandate
              </Link>
              <a
                href={`tel:${PALC_COMPANY_INFO.phone.replace(/\s+/g, "")}`}
                className="w-full sm:w-auto text-center px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#f59e0b]" />
                <span className="tabular-nums">{PALC_COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
