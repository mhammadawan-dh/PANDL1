"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { 
  Building2, 
  MapPin, 
  Search, 
  ShieldCheck, 
  ChevronDown,
  Sparkles,
  Maximize2
} from "lucide-react";
import { PLOTS_DATA, PLOT_CATEGORIES, PALC_COMPANY_INFO, PlotListing } from "@/lib/plots-data";
import { PlotCard } from "@/components/ui/plot-card";

function PlotsCatalogContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const initialLocation = searchParams.get("location") || "all";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedLocation, setSelectedLocation] = useState(initialLocation);
  const [searchQuery, setSearchQuery] = useState("");
  const [layout, setLayout] = useState<"grid" | "list">("grid");

  const filteredPlots = useMemo(() => {
    return PLOTS_DATA.filter((plot) => {
      // Category Match
      const matchesCat = 
        selectedCategory === "all" || 
        plot.category === selectedCategory ||
        (selectedCategory === "Waterfront" && plot.waterfront);
        
      // Location Match
      const matchesLoc = 
        selectedLocation === "all" || 
        plot.location.community.toLowerCase().includes(selectedLocation.toLowerCase());
        
      // Search Match
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = 
        searchQuery === "" || 
        plot.title.toLowerCase().includes(searchLower) ||
        plot.location.community.toLowerCase().includes(searchLower) ||
        plot.id.toLowerCase().includes(searchLower);

      return matchesCat && matchesLoc && matchesSearch;
    });
  }, [selectedCategory, selectedLocation, searchQuery]);

  return (
    <div className="flex-1 w-full bg-midnight min-h-screen pt-32 pb-24 text-text-primary">
      <div className="max-w-[1580px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
        
        {/* Header Section */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-platinum text-[10px] font-semibold uppercase tracking-wider mb-6 shadow-platinum-subtle">
            <Sparkles className="w-3 h-3" />
            <span>Off-Market Land Portfolio</span>
          </div>
          <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight mb-4 text-text-primary">
            Curated Parcels
          </h1>
          <p className="text-text-secondary max-w-2xl font-light text-base sm:text-lg leading-relaxed">
            Exclusive access to verified, off-market plots across Dubai&apos;s prime corridors. Direct owner negotiations, zero middleman distortion.
          </p>
        </div>

        {/* Filters & Control Bar */}
        <div className="double-bezel p-1.5 rounded-[1.5rem] mb-12">
          <div className="bg-midnight-card rounded-[calc(1.5rem-0.375rem)] p-4 sm:p-6 flex flex-col xl:flex-row xl:items-center justify-between gap-6">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
              <input
                type="text"
                placeholder="Search by ID, Community, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-midnight/50 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-platinum/50 transition-colors"
              />
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {/* Category Dropdown */}
              <div className="relative">
                <div className="flex items-center gap-2 px-4 py-3 bg-midnight/50 border border-white/10 rounded-xl min-w-[200px]">
                  <Building2 className="w-4 h-4 text-platinum shrink-0" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="bg-transparent text-sm font-medium text-text-primary focus:outline-none appearance-none w-full cursor-pointer"
                  >
                    <option value="all" className="bg-midnight text-text-primary">All Asset Classes</option>
                    <option value="Residential Plots" className="bg-midnight text-text-primary">Residential Plots</option>
                    <option value="Commercial Land" className="bg-midnight text-text-primary">Commercial Land</option>
                    <option value="Mixed Use" className="bg-midnight text-text-primary">Mixed Use</option>
                    <option value="Villa Communities" className="bg-midnight text-text-primary">Villa Communities</option>
                    <option value="Waterfront" className="bg-midnight text-text-primary">Waterfront Only</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-text-secondary pointer-events-none absolute right-4 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              {/* Location Dropdown */}
              <div className="relative">
                <div className="flex items-center gap-2 px-4 py-3 bg-midnight/50 border border-white/10 rounded-xl min-w-[200px]">
                  <MapPin className="w-4 h-4 text-platinum shrink-0" />
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="bg-transparent text-sm font-medium text-text-primary focus:outline-none appearance-none w-full cursor-pointer"
                  >
                    <option value="all" className="bg-midnight text-text-primary">All Corridors</option>
                    <option value="Dubai Islands" className="bg-midnight text-text-primary">Dubai Islands</option>
                    <option value="Al Furjan" className="bg-midnight text-text-primary">Al Furjan</option>
                    <option value="Dubai South" className="bg-midnight text-text-primary">Dubai South</option>
                    <option value="Business Bay" className="bg-midnight text-text-primary">Business Bay</option>
                    <option value="Palm Jumeirah" className="bg-midnight text-text-primary">Palm Jumeirah</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-text-secondary pointer-events-none absolute right-4 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              {/* View Toggle */}
              <div className="flex items-center bg-midnight/50 border border-white/10 rounded-xl p-1">
                <button
                  onClick={() => setLayout("grid")}
                  className={`p-2 rounded-lg transition-colors ${
                    layout === "grid" ? "bg-white/10 text-platinum" : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  <div className="grid grid-cols-2 gap-1 w-4 h-4">
                    <div className="bg-current rounded-[1px]" />
                    <div className="bg-current rounded-[1px]" />
                    <div className="bg-current rounded-[1px]" />
                    <div className="bg-current rounded-[1px]" />
                  </div>
                </button>
                <button
                  onClick={() => setLayout("list")}
                  className={`p-2 rounded-lg transition-colors ${
                    layout === "list" ? "bg-white/10 text-platinum" : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  <div className="flex flex-col gap-1 w-4 h-4 justify-center">
                    <div className="h-[2px] bg-current rounded-full w-full" />
                    <div className="h-[2px] bg-current rounded-full w-full" />
                    <div className="h-[2px] bg-current rounded-full w-full" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
          <div className="text-sm text-text-secondary">
            Showing <span className="font-semibold text-platinum">{filteredPlots.length}</span> prime parcels
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-950/30 px-3 py-1.5 rounded-full border border-emerald-500/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>All Title Deeds Verified</span>
          </div>
        </div>

        {/* Grid / List View */}
        {filteredPlots.length > 0 ? (
          <div 
            className={
              layout === "grid" 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" 
                : "flex flex-col gap-6"
            }
          >
            {filteredPlots.map((plot) => (
              <PlotCard key={plot.id} plot={plot} layout={layout} />
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-white/5 rounded-[2rem] border border-white/10">
            <Maximize2 className="w-12 h-12 text-text-secondary mx-auto mb-4 opacity-50" />
            <h3 className="text-lg font-semibold text-text-primary mb-2">No parcels match your criteria</h3>
            <p className="text-sm text-text-secondary max-w-md mx-auto mb-6">
              We frequently update our off-market portfolio. Adjust your filters or contact our advisory team directly for specific mandates.
            </p>
            <button 
              onClick={() => {
                setSelectedCategory("all");
                setSelectedLocation("all");
                setSearchQuery("");
              }}
              className="text-platinum text-sm font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function PlotsCatalog() {
  return (
    <Suspense fallback={
      <div className="flex-1 w-full bg-midnight min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-platinum border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <PlotsCatalogContent />
    </Suspense>
  );
}
