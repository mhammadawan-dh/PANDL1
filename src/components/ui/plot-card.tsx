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
      className={`group double-bezel p-1.5 rounded-[1.75rem] transition-all duration-500 hover:border-platinum/50 flex ${
        isHorizontal ? "flex-col sm:flex-row" : "flex-col"
      }`}
    >
      <div className={`relative bg-midnight-card rounded-[calc(1.75rem-0.375rem)] overflow-hidden flex ${
        isHorizontal ? "flex-col sm:flex-row w-full" : "flex-col w-full h-full"
      }`}>
        
        {/* Top / Left Image Container */}
        <div
          className={`relative overflow-hidden bg-midnight ${
            isHorizontal
              ? "sm:w-80 sm:shrink-0 aspect-[16/10] sm:aspect-auto sm:min-h-[260px]"
              : "aspect-[16/10]"
          }`}
        >
          <Image
            src={plot.images.hero}
            alt={plot.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/20 to-transparent" />

          {/* Top Badges */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 flex-wrap">
              {plot.dldApproved && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wide bg-platinum/90 text-midnight shadow-platinum-subtle backdrop-blur-md">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  DLD Verified
                </span>
              )}
              <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wide bg-midnight/60 text-text-primary border border-white/10 backdrop-blur-md">
                {plot.ownership}
              </span>
            </div>
          </div>

          {/* Bottom Image Overlay: Location & Tags */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-text-primary text-xs">
            <div className="flex items-center gap-1 font-medium drop-shadow-md">
              <MapPin className="w-3.5 h-3.5 text-platinum" />
              <span>{plot.location.community}</span>
              {plot.location.sector && <span className="text-text-secondary">• {plot.location.sector}</span>}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
          <div>
            <div className="flex items-center justify-between text-[11px] text-text-secondary mb-2 font-medium tracking-wide uppercase">
              <span className="text-platinum">{plot.category}</span>
              <span className="font-mono">{plot.heightAllowance}</span>
            </div>

            <Link href={`/plots/${plot.slug}`} className="block group/title">
              <h3 className="font-serif-heading font-medium text-text-primary text-xl leading-tight group-hover/title:text-platinum transition-colors line-clamp-2">
                {plot.title}
              </h3>
            </Link>

            {isHorizontal && (
              <p className="text-sm text-text-secondary mt-3 line-clamp-2 font-light leading-relaxed">
                {plot.description}
              </p>
            )}
          </div>

          {/* Price Box */}
          <div className="bg-white/5 rounded-xl p-4 border border-white/5 flex items-baseline justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-text-secondary font-medium">Total Land Price</div>
              <div className="text-xl font-medium text-text-primary tabular-nums tracking-tight mt-0.5">
                AED {formatAED(plot.priceAED)}
              </div>
            </div>
            {plot.pricePerSqFtGFA && (
              <div className="text-right">
                <div className="text-[10px] uppercase tracking-wider text-text-secondary font-medium">Rate / GFA</div>
                <div className="text-sm font-medium text-text-primary tabular-nums mt-0.5">
                  AED {plot.pricePerSqFtGFA} <span className="text-[10px] text-text-secondary font-normal">/sq.ft</span>
                </div>
              </div>
            )}
          </div>

          {/* 3-Column Specifications Grid */}
          <div className="grid grid-cols-3 gap-3 py-3 border-y border-white/5">
            <div>
              <span className="block text-[9px] uppercase tracking-wider text-text-secondary font-medium mb-1">Plot Area</span>
              <span className="font-medium text-xs text-text-primary tabular-nums">
                {plot.plotAreaSqFt.toLocaleString()} <span className="text-[9px] text-text-secondary">sq.ft</span>
              </span>
            </div>
            <div className="border-l border-white/5 pl-3">
              <span className="block text-[9px] uppercase tracking-wider text-text-secondary font-medium mb-1">Max GFA</span>
              <span className="font-medium text-xs text-text-primary tabular-nums">
                {plot.maxGfaSqFt.toLocaleString()} <span className="text-[9px] text-text-secondary">sq.ft</span>
              </span>
            </div>
            <div className="border-l border-white/5 pl-3">
              <span className="block text-[9px] uppercase tracking-wider text-text-secondary font-medium mb-1">FAR</span>
              <span className="font-medium text-xs text-platinum tabular-nums">
                {plot.far.toFixed(2)}x
              </span>
            </div>
          </div>

          {/* Action Strip */}
          <div className="pt-1 flex items-center gap-3">
            <Link
              href={`/plots/${plot.slug}`}
              className="group/btn flex-1 py-3 px-4 rounded-xl bg-white/5 hover:bg-platinum text-text-primary hover:text-midnight text-xs font-semibold text-center transition-all flex items-center justify-center gap-2"
            >
              <span>Plot Dossier</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-xl bg-emerald-950/30 hover:bg-emerald-900/50 text-emerald-400 border border-emerald-500/20 text-xs font-semibold transition-all flex items-center gap-2"
              title="Direct WhatsApp with PALC Land Intelligence Desk"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
