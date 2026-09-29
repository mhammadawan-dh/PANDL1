"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  SlidersHorizontal,
  MapPin,
  Building2,
  Layers,
  ShieldCheck,
  RotateCcw,
  LayoutGrid,
  List,
  ArrowUpDown,
  Check,
  ChevronDown,
  Sparkles,
  DollarSign,
  Maximize2
} from "lucide-react";
import { PLOTS_DATA, PLOT_CATEGORIES, PALC_COMPANY_INFO, PlotListing } from "@/lib/plots-data";
import { PlotCard } from "@/components/ui/plot-card";
import { formatAED } from "@/lib/utils";

export default function PlotsCatalogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedHeight, setSelectedHeight] = useState("all");
  const [freeholdOnly, setFreeholdOnly] = useState(false);
  const [maxPrice, setMaxPrice] = useState(100000000);
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "area-desc" | "far-desc">("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const locations = [
    { id: "all", name: "All Corridors" },
    { id: "Dubai Islands", name: "Dubai Islands" },
    { id: "Al Furjan", name: "Al Furjan" },
    { id: "Dubai South", name: "Dubai South" },
    { id: "Business Bay", name: "Business Bay" },
    { id: "Bukadra", name: "Bukadra / Meydan" },
    { id: "Palm Jumeirah", name: "Palm Jumeirah" },
  ];

  const heights = [
    { id: "all", name: "Any Height" },
    { id: "G+1+R", name: "Low-Rise (G+1)" },
    { id: "G+4", name: "Mid-Rise (G+4 to G+8)" },
    { id: "G+16", name: "High-Density (G+16)" },
    { id: "G+P+24", name: "High-Rise Tower (G+24+)" },
  ];

  const categories = [
    { id: "all", label: "All Plots" },
    { id: "Residential Plots", label: "Residential" },
    { id: "Commercial Land", label: "Commercial" },
    { id: "Mixed Use", label: "Mixed Use" },
    { id: "Industrial Land", label: "Industrial" },
    { id: "waterfront", label: "Waterfront Acreage" },
  ];

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedLocation("all");
    setSelectedCategory("all");
    setSelectedHeight("all");
    setFreeholdOnly(false);
    setMaxPrice(100000000);
    setSortBy("featured");
  };

  const filteredPlots = useMemo(() => {
    return PLOTS_DATA.filter((plot) => {
      // Search text
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesText =
          plot.title.toLowerCase().includes(query) ||
          plot.location.community.toLowerCase().includes(query) ||
          plot.category.toLowerCase().includes(query) ||
          plot.description.toLowerCase().includes(query);
        if (!matchesText) return false;
      }

      // Location
      if (selectedLocation !== "all" && plot.location.community !== selectedLocation) {
        return false;
      }

      // Category / Waterfront
      if (selectedCategory === "waterfront") {
        if (!plot.waterfront) return false;
      } else if (selectedCategory !== "all" && plot.category !== selectedCategory) {
        return false;
      }

      // Height
      if (selectedHeight !== "all") {
        if (selectedHeight === "G+P+24" && !plot.heightAllowance.includes("24") && !plot.heightAllowance.includes("40")) {
          return false;
        }
        if (selectedHeight === "G+4" && !plot.heightAllowance.includes("8") && !plot.heightAllowance.includes("4") && !plot.heightAllowance.includes("M")) {
          return false;
        }
        if (selectedHeight === "G+1+R" && !plot.heightAllowance.includes("1")) {
          return false;
        }
      }

      // Freehold
      if (freeholdOnly && plot.ownership !== "Freehold") {
        return false;
      }

      // Max price
      if (plot.priceAED > maxPrice) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.priceAED - b.priceAED;
      if (sortBy === "price-desc") return b.priceAED - a.priceAED;
      if (sortBy === "area-desc") return b.plotAreaSqFt - a.plotAreaSqFt;
      if (sortBy === "far-desc") return b.far - a.far;
      return 0;
    });
  }, [searchQuery, selectedLocation, selectedCategory, selectedHeight, freeholdOnly, maxPrice, sortBy]);

  return (
    <div className="min-h-screen bg-[#fafbfc] pb-24">
      {/* 1. VISIBLE AERIAL DRONE HERO SECTION (MATCHING SCREEN_11 CATALOG DESIGN) */}
      <section className="relative bg-[#0c0e12] text-white pt-20 pb-28 px-6 lg:px-12 overflow-hidden">
        {/* Crisp Aerial Background with high visibility */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/plots/dubai-skyline-hero.png"
            alt="Dubai Aerial Skyline"
            fill
            priority
            className="object-cover object-center brightness-105 contrast-[1.04] saturate-[1.12]"
          />
          {/* Subtle atmospheric vignette that protects text readability while keeping the skyline radiant */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c0e12]/80 via-[#0c0e12]/45 via-50% to-[#0c0e12]/90" />
        </div>

        <div className="relative max-w-5xl mx-auto flex flex-col items-center text-center z-10">
          {/* Subtitle Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-gray-200 text-xs font-semibold tracking-wider uppercase mb-5 border border-white/20 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#e05638] animate-pulse" />
            <span>Premium Real Estate in Dubai</span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif-title text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] drop-shadow-md">
            Find Off-Market Plots &amp; Development Land in{" "}
            <span className="text-[#e05638] italic font-serif">Dubai</span>
          </h1>

          <p className="text-gray-200 text-sm sm:text-base max-w-2xl mt-4 font-normal leading-relaxed drop-shadow-sm">
            Exclusive access to pre-cleared, DLD verified development land, master-planned parcels, and ultra-prime off-market acreage — all in one place.
          </p>

          {/* Category Selector Pills (Matching Reference Catalog Design) */}
          <div className="flex items-center justify-center gap-2.5 mt-8 flex-wrap">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                    active
                      ? "bg-[#b8441c] text-white shadow-md shadow-[#b8441c]/30 scale-105"
                      : "bg-black/40 backdrop-blur-md hover:bg-black/60 text-gray-200 border border-white/20"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. MODERN FLOATING SEARCH & FILTER CONSOLE */}
      <div className="max-w-[1580px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24 -mt-10 relative z-20">
        <div className="bg-white rounded-2xl shadow-[0_12px_36px_rgba(0,0,0,0.08)] border border-gray-100 p-3 sm:p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-center">
            {/* Location */}
            <div className="px-3 py-2 border-b sm:border-b-0 sm:border-r border-gray-100 flex flex-col justify-center">
              <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#b8441c]" />
                Corridor / Location
              </span>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full bg-transparent text-xs font-semibold text-gray-900 focus:outline-none cursor-pointer border-none p-0"
              >
                {locations.map((loc) => (
                  <option key={loc.id} value={loc.id}>
                    {loc.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Property Type / Zoning */}
            <div className="px-3 py-2 border-b sm:border-b-0 sm:border-r border-gray-100 flex flex-col justify-center">
              <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5 text-[#b8441c]" />
                Asset Classification
              </span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-transparent text-xs font-semibold text-gray-900 focus:outline-none cursor-pointer border-none p-0"
              >
                <option value="all">All Asset Categories</option>
                <option value="Residential Plots">Residential Plots</option>
                <option value="Commercial Land">Commercial Land</option>
                <option value="Mixed Use">Mixed Use</option>
                <option value="Industrial Land">Industrial Land</option>
                <option value="waterfront">Waterfront Only</option>
              </select>
            </div>

            {/* Height Allowance */}
            <div className="px-3 py-2 border-b sm:border-b-0 sm:border-r border-gray-100 flex flex-col justify-center">
              <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-[#b8441c]" />
                Height / Density
              </span>
              <select
                value={selectedHeight}
                onChange={(e) => setSelectedHeight(e.target.value)}
                className="w-full bg-transparent text-xs font-semibold text-gray-900 focus:outline-none cursor-pointer border-none p-0"
              >
                {heights.map((h) => (
                  <option key={h.id} value={h.id}>
                    {h.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Max Budget */}
            <div className="px-3 py-2 border-b sm:border-b-0 sm:border-r border-gray-100 flex flex-col justify-center">
              <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                <DollarSign className="w-3.5 h-3.5 text-[#b8441c]" />
                Max Acquisition Price
              </span>
              <select
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full bg-transparent text-xs font-semibold text-gray-900 focus:outline-none cursor-pointer border-none p-0"
              >
                <option value={100000000}>Up to AED 100M+</option>
                <option value={70000000}>Up to AED 70M</option>
                <option value={50000000}>Up to AED 50M</option>
                <option value={30000000}>Up to AED 30M</option>
                <option value={20000000}>Up to AED 20M</option>
              </select>
            </div>

            {/* Search / Reset Button */}
            <div className="p-1">
              <button
                onClick={resetFilters}
                className="w-full h-11 rounded-xl bg-[#121417] hover:bg-[#b8441c] text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Catalog Viewport */}
      <div className="max-w-[1580px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* LEFT COLUMN: FILTERS SIDEBAR */}
          <aside className="hidden lg:block lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl border border-[#f0f0f2] p-5 shadow-xs sticky top-24 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-800 flex items-center gap-1.5">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-[#b8441c]" />
                  <span>Filter Parcels</span>
                </span>
                <button
                  onClick={resetFilters}
                  className="text-[11px] text-gray-500 hover:text-[#b8441c] flex items-center gap-1 transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              </div>

              {/* Search Keyword */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">
                  Search Keywords
                </label>
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="e.g. Dubai Islands, G+24..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-md text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#b8441c]"
                  />
                </div>
              </div>

              {/* Location Corridor Radio/Pills */}
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">
                  Corridor / Location
                </label>
                <div className="space-y-1">
                  {locations.map((loc) => (
                    <button
                      key={loc.id}
                      onClick={() => setSelectedLocation(loc.id)}
                      className={`w-full text-left px-3 py-1.5 rounded-md text-xs font-medium flex items-center justify-between transition-colors ${
                        selectedLocation === loc.id
                          ? "bg-[#121417] text-white font-semibold"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      <span>{loc.name}</span>
                      {selectedLocation === loc.id && <Check className="w-3.5 h-3.5 text-[#f59e0b]" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Asset Category */}
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">
                  Zoning / Asset Type
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-md text-gray-800 focus:outline-none focus:border-[#b8441c] cursor-pointer"
                >
                  <option value="all">All Asset Categories</option>
                  <option value="Residential Plots">Residential Plots</option>
                  <option value="Commercial Land">Commercial Land</option>
                  <option value="Mixed Use">Mixed Use</option>
                  <option value="Industrial Land">Industrial Land</option>
                  <option value="Villa Communities">Villa Communities</option>
                </select>
              </div>

              {/* Max Budget Slider */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                    Max Price
                  </label>
                  <span className="font-bold text-[#b8441c] tabular-nums text-xs">
                    AED {formatAED(maxPrice)}
                  </span>
                </div>
                <input
                  type="range"
                  min="20000000"
                  max="100000000"
                  step="5000000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-[#b8441c] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-gray-400">
                  <span>AED 20M</span>
                  <span>AED 100M+</span>
                </div>
              </div>

              {/* Freehold Toggle */}
              <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                <label className="text-xs font-semibold text-gray-700 cursor-pointer" htmlFor="freehold-check">
                  100% Freehold Only
                </label>
                <input
                  id="freehold-check"
                  type="checkbox"
                  checked={freeholdOnly}
                  onChange={(e) => setFreeholdOnly(e.target.checked)}
                  className="rounded text-[#b8441c] focus:ring-[#b8441c] w-4 h-4 cursor-pointer"
                />
              </div>
            </div>
          </aside>

          {/* RIGHT COLUMN: LISTING GRID & TOOLBAR */}
          <main className="lg:col-span-3 space-y-6">
            {/* Toolbar */}
            <div className="bg-white rounded-xl border border-[#f0f0f2] p-4 shadow-xs flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {/* Mobile Filter Button */}
                <button
                  onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                  className="lg:hidden px-3.5 py-1.5 rounded-md bg-gray-100 hover:bg-gray-200 text-xs font-semibold text-gray-800 flex items-center gap-1.5"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5 text-[#b8441c]" />
                  <span>Filters</span>
                </button>

                <span className="text-xs text-gray-600 font-medium">
                  Showing <strong className="text-gray-900 font-bold">{filteredPlots.length}</strong> Plots
                </span>
              </div>

              {/* Sorting and View Switcher */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <ArrowUpDown className="w-3.5 h-3.5 text-gray-400" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as "featured" | "price-asc" | "price-desc" | "area-desc" | "far-desc")}
                    className="bg-gray-50 border border-gray-200 rounded-md py-1.5 px-2.5 text-xs font-semibold text-gray-800 focus:outline-none focus:border-[#b8441c] cursor-pointer"
                  >
                    <option value="featured">Featured / Verified</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="area-desc">Plot Area: Largest First</option>
                    <option value="far-desc">FAR Density: Highest First</option>
                  </select>
                </div>

                <div className="hidden sm:flex items-center border border-gray-200 rounded-md overflow-hidden bg-gray-50">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-1.5 ${viewMode === "grid" ? "bg-white text-[#b8441c] shadow-xs" : "text-gray-400"}`}
                    title="Grid View"
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-1.5 ${viewMode === "list" ? "bg-white text-[#b8441c] shadow-xs" : "text-gray-400"}`}
                    title="List View"
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Filter Sheet / Drawer */}
            {mobileFilterOpen && (
              <div className="lg:hidden bg-white p-5 rounded-xl border border-gray-200 space-y-4 shadow-md">
                <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                  <span className="font-bold text-xs uppercase tracking-wider text-gray-800">Mobile Filters</span>
                  <button onClick={resetFilters} className="text-xs text-[#b8441c]">Reset</button>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-gray-500 block mb-1">Corridor</label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full p-2 bg-gray-50 border border-gray-200 rounded-md text-xs"
                  >
                    {locations.map((loc) => (
                      <option key={loc.id} value={loc.id}>{loc.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-gray-500 block mb-1">Zoning</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full p-2 bg-gray-50 border border-gray-200 rounded-md text-xs"
                  >
                    <option value="all">All Asset Categories</option>
                    <option value="Residential Plots">Residential Plots</option>
                    <option value="Commercial Land">Commercial Land</option>
                    <option value="Mixed Use">Mixed Use</option>
                    <option value="Industrial Land">Industrial Land</option>
                    <option value="Villa Communities">Villa Communities</option>
                  </select>
                </div>

                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="w-full py-2.5 bg-[#b8441c] text-white font-semibold text-xs rounded-md"
                >
                  Apply Filters ({filteredPlots.length} Results)
                </button>
              </div>
            )}

            {/* Listings Grid */}
            {filteredPlots.length > 0 ? (
              <div className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>
                {filteredPlots.map((plot) => (
                  <PlotCard key={plot.id} plot={plot} layout={viewMode} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl border border-gray-200 p-12 text-center space-y-4">
                <Building2 className="w-12 h-12 text-gray-300 mx-auto" />
                <h3 className="font-semibold text-gray-800 text-base">No Matching Off-Market Parcels Found</h3>
                <p className="text-xs text-gray-500 max-w-md mx-auto">
                  Try widening your price range or clearing specific zoning filters. Alternatively, submit a private mandate to source off-market parcels matching your exact criteria.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-4 py-2 rounded-md bg-[#121417] text-white text-xs font-semibold"
                >
                  Reset All Filters
                </button>
              </div>
            )}

            {/* Bottom Institutional Disclaimer */}
            <div className="bg-white rounded-xl border border-gray-200/70 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
              <div className="space-y-1">
                <span className="font-bold text-gray-900 block">Confidential Due Diligence Dossiers</span>
                <p className="text-gray-500 font-light">
                  Complete DLD site plans, zoning NOCs, and geotechnical massing models are accessible upon submission of corporate NDA.
                </p>
              </div>
              <Link
                href="/contact"
                className="shrink-0 px-4 py-2 rounded-md bg-[#b8441c] text-white font-semibold text-xs"
              >
                Request Access
              </Link>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
