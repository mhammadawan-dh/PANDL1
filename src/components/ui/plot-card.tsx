"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, MapPin, ArrowUpRight, MessageSquare } from "lucide-react";
import { PlotListing, PALC_COMPANY_INFO } from "@/lib/plots-data";
import { formatAED } from "@/lib/utils";

interface PlotCardProps {
  plot: PlotListing;
  layout?: "grid" | "list" | "horizontal";
}

export function PlotCard({ plot, layout = "grid" }: PlotCardProps) {
  const isHorizontal = layout === "list" || layout === "horizontal";

  const whatsappUrl = `https://wa.me/${PALC_COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
    `Hello PALC Team, I am interested in off-market plot: ${plot.title} (${plot.location.community}) listed at AED ${plot.priceAED.toLocaleString()}. Please provide the technical dossier.`
  )}`;

  return (
    <div
      className={`group bg-white rounded-[14px] border border-[#f0f0f2] overflow-hidden shadow-[0_4px_20px_-2px_rgba(18,20,23,0.05)] hover:shadow-[0_12px_30px_-4px_rgba(18,20,23,0.1)] transition-all duration-300 flex ${
        isHorizontal ? "flex-col sm:flex-row" : "flex-col justify-between"
      }`}
    >
      {/* Top / Left Image Container */}
      <div
        className={`relative overflow-hidden bg-gray-100 ${
          isHorizontal
            ? "sm:w-80 sm:shrink-0 aspect-[16/10] sm:aspect-auto sm:min-h-[220px]"
            : "aspect-[16/10]"
        }`}
      >
        <Image
          src={plot.images.hero}
          alt={plot.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            {plot.dldApproved && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#fffbeb] text-[#b45309] border border-[#fde68a] shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#f59e0b]" />
                DLD Verified
              </span>
            )}
            <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/90 backdrop-blur-xs text-gray-800 border border-gray-200/60 shadow-xs">
              {plot.ownership}
            </span>
          </div>

          {plot.dataStatus === "verified" ? (
            <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-[#121417]/80 text-[#f59e0b] border border-amber-500/30 backdrop-blur-xs">
              Exclusive
            </span>
          ) : (
            <span className="px-2 py-0.5 rounded text-[10px] font-medium tracking-wider uppercase bg-black/60 text-gray-300 backdrop-blur-xs">
              Portfolio
            </span>
          )}
        </div>

        {/* Bottom Image Overlay: Location & Tags */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
          <div className="flex items-center gap-1 font-medium drop-shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-[#f59e0b]" />
            <span>{plot.location.community}</span>
            {plot.location.sector && <span className="opacity-80">• {plot.location.sector}</span>}
          </div>
          {plot.waterfront && (
            <span className="bg-sky-950/80 text-sky-200 border border-sky-400/30 text-[10px] px-2 py-0.5 rounded font-medium">
              Waterfront
            </span>
          )}
          {plot.cornerPlot && (
            <span className="bg-emerald-950/80 text-emerald-200 border border-emerald-400/30 text-[10px] px-2 py-0.5 rounded font-medium">
              Corner Parcel
            </span>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center justify-between text-xs text-gray-500 mb-1.5 font-medium">
            <span className="text-[#b8441c] font-semibold">{plot.category}</span>
            <span className="font-mono text-[11px]">{plot.heightAllowance}</span>
          </div>

          <Link href={`/plots/${plot.slug}`} className="block group/title">
            <h3 className="font-semibold text-gray-900 text-base leading-snug group-hover/title:text-[#b8441c] transition-colors line-clamp-2">
              {plot.title}
            </h3>
          </Link>

          {isHorizontal && (
            <p className="text-xs text-gray-500 mt-2 line-clamp-2 font-light leading-relaxed">
              {plot.description}
            </p>
          )}
        </div>

        {/* Price Box */}
        <div className="bg-[#fafbfc] rounded-lg p-3 border border-gray-100 flex items-baseline justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">Total Land Price</div>
            <div className="text-xl font-bold text-[#121417] tabular-nums tracking-tight">
              AED {formatAED(plot.priceAED)}
            </div>
          </div>
          {plot.pricePerSqFtGFA && (
            <div className="text-right">
              <div className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">Rate / GFA</div>
              <div className="text-xs font-semibold text-gray-700 tabular-nums">
                AED {plot.pricePerSqFtGFA} <span className="text-[10px] text-gray-500">/sq.ft</span>
              </div>
            </div>
          )}
        </div>

        {/* 3-Column Specifications Grid */}
        <div className="grid grid-cols-3 gap-2 py-1 text-center border-y border-gray-100">
          <div className="p-1">
            <span className="block text-[10px] uppercase tracking-wider text-gray-400 font-medium">Plot Area</span>
            <span className="font-bold text-xs text-gray-800 tabular-nums">
              {plot.plotAreaSqFt.toLocaleString()} <span className="text-[9px] font-normal text-gray-500">sq.ft</span>
            </span>
          </div>
          <div className="p-1 border-x border-gray-100">
            <span className="block text-[10px] uppercase tracking-wider text-gray-400 font-medium">Max GFA</span>
            <span className="font-bold text-xs text-gray-800 tabular-nums">
              {plot.maxGfaSqFt.toLocaleString()} <span className="text-[9px] font-normal text-gray-500">sq.ft</span>
            </span>
          </div>
          <div className="p-1">
            <span className="block text-[10px] uppercase tracking-wider text-gray-400 font-medium">FAR</span>
            <span className="font-bold text-xs text-[#b8441c] tabular-nums">
              {plot.far.toFixed(2)}x
            </span>
          </div>
        </div>

        {/* Action Strip */}
        <div className="pt-2 flex items-center gap-2">
          <Link
            href={`/plots/${plot.slug}`}
            className="flex-1 py-2 px-3 rounded-md bg-[#121417] hover:bg-[#b8441c] text-white text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1"
          >
            <span>Plot Dossier</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-3 rounded-md bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-semibold transition-colors flex items-center gap-1.5"
            title="Direct WhatsApp with PALC Land Intelligence Desk"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
