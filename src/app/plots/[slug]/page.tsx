"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ShieldCheck,
  MapPin,
  Maximize2,
  Building2,
  Layers,
  FileText,
  Phone,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  Calculator,
  Compass,
  Download,
  Lock,
  ChevronRight,
  TrendingUp,
  Landmark,
  Share2
} from "lucide-react";
import { PLOTS_DATA, PALC_COMPANY_INFO, PlotListing } from "@/lib/plots-data";
import { PlotCard } from "@/components/ui/plot-card";
import { formatAED } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function PlotDetailsPage({ params }: PageProps) {
  const { slug } = use(params);
  const plot = PLOTS_DATA.find((p) => p.slug === slug);

  if (!plot) {
    notFound();
  }

  const [activeImage, setActiveImage] = useState(plot.images.hero);
  const [ndaRequested, setNdaRequested] = useState(false);
  const [targetType, setTargetType] = useState<"luxury" | "standard">("luxury");

  // Dynamic Feasibility calculation
  const calculatedGDV = targetType === "luxury"
    ? plot.feasibility.projectedGDVAED
    : Math.round(plot.feasibility.projectedGDVAED * 0.85);

  const calculatedMargin = targetType === "luxury"
    ? plot.feasibility.developerMarginPercent
    : Math.round(plot.feasibility.developerMarginPercent * 0.82 * 10) / 10;

  const whatsappUrl = `https://wa.me/${PALC_COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
    `Hello PALC Land Desk, I am requesting direct landowner due diligence documents for: ${plot.title} (AED ${plot.priceAED.toLocaleString()}).`
  )}`;

  const similarPlots = PLOTS_DATA.filter((p) => p.id !== plot.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#fafbfc] pb-24">
      {/* 1. TOP BREADCRUMBS & VERIFICATION HEADER */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="max-w-[1580px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-gray-500">
            <nav className="flex items-center gap-1.5 flex-wrap">
              <Link href="/" className="hover:text-[#b8441c] transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
              <Link href="/plots" className="hover:text-[#b8441c] transition-colors">Properties &amp; Land Catalog</Link>
              <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
              <span className="font-semibold text-gray-800 line-clamp-1">{plot.title}</span>
            </nav>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Direct Owner Mandate
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#b45309] bg-[#fffbeb] px-2 py-0.5 rounded border border-[#fde68a]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#f59e0b]" /> DLD Verified
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. PLOT HERO TITLE & PRICE BAR */}
      <div className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-[1580px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2 flex-wrap text-xs">
                <span className="px-2.5 py-1 rounded bg-[#121417] text-white font-semibold">
                  {plot.category}
                </span>
                <span className="px-2.5 py-1 rounded bg-gray-100 text-gray-800 font-semibold">
                  {plot.heightAllowance}
                </span>
                {plot.waterfront && (
                  <span className="px-2.5 py-1 rounded bg-sky-100 text-sky-800 font-semibold">
                    Waterfront Facing
                  </span>
                )}
                {plot.cornerPlot && (
                  <span className="px-2.5 py-1 rounded bg-amber-100 text-amber-800 font-semibold">
                    Prime Corner Plot
                  </span>
                )}
              </div>

              <h1 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
                {plot.title}
              </h1>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 font-medium">
                <MapPin className="w-4 h-4 text-[#b8441c]" />
                <span>{plot.location.community}, {plot.location.sector ? `${plot.location.sector}, ` : ""}Dubai, UAE</span>
                {plot.metroProximity && <span className="text-gray-400">• {plot.metroProximity}</span>}
              </div>
            </div>

            {/* Price Box */}
            <div className="bg-[#fafbfc] rounded-xl p-4 sm:p-5 border border-gray-200/80 shrink-0 text-left lg:text-right">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">
                Total Acquisition Price
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#121417] tabular-nums tracking-tight mt-0.5">
                AED {formatAED(plot.priceAED)}
              </div>
              {plot.pricePerSqFtGFA && (
                <div className="text-xs text-gray-500 font-medium mt-1">
                  Approx. <strong className="text-gray-800 tabular-nums">AED {plot.pricePerSqFtGFA}</strong> per sq.ft GFA
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 3. MAIN GALLERY & DETAILS GRID */}
      <div className="max-w-[1580px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT 2 COLUMNS: MEDIA, PARAMETERS, FEASIBILITY */}
          <div className="lg:col-span-2 space-y-10">
            {/* Primary Image Viewer */}
            <div className="space-y-3">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-900 border border-gray-200 shadow-md">
                <Image
                  src={activeImage}
                  alt={plot.title}
                  fill
                  priority
                  className="object-cover brightness-105 contrast-[1.04] saturate-[1.12]"
                />
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-white text-xs font-semibold flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#f59e0b]" />
                  <span>High-Resolution Aerial Drone Shot (Dubai Land Archive)</span>
                </div>
              </div>

              {/* Thumbnails Strip */}
              <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-1">
                {plot.images.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`relative w-24 h-16 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                      activeImage === img ? "border-[#b8441c] scale-105 shadow-sm" : "border-gray-200 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt="Thumbnail" fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Plot Executive Summary */}
            <div className="bg-white rounded-xl border border-[#f0f0f2] p-6 shadow-xs space-y-4">
              <h2 className="font-serif-title text-xl font-bold text-gray-900">
                Land Parcel Overview
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed font-light">
                {plot.description}
              </p>
              <div className="pt-2 flex items-center gap-6 text-xs text-gray-500 font-medium">
                <div>
                  <span className="block text-[10px] uppercase text-gray-400 font-bold">Ownership</span>
                  <span className="text-gray-900 font-semibold">{plot.ownership}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-gray-400 font-bold">Zoning Use</span>
                  <span className="text-gray-900 font-semibold">{plot.category}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-gray-400 font-bold">Corridor</span>
                  <span className="text-gray-900 font-semibold">{plot.location.community}</span>
                </div>
              </div>
            </div>

            {/* Land Parameters & Zoning Verification Matrix */}
            <div className="bg-white rounded-xl border border-[#f0f0f2] p-6 shadow-xs space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#b8441c]">Technical Specifications</span>
                  <h2 className="font-serif-title text-xl font-bold text-gray-900 mt-0.5">
                    Land Parameters &amp; Zoning Verification
                  </h2>
                </div>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  DLD Verified
                </span>
              </div>

              {/* High-Impact Stat Tiles */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-[#fafbfc] p-4 rounded-lg border border-gray-100 text-center">
                  <span className="block text-[10px] uppercase font-bold text-gray-400 tracking-wider">Plot Area</span>
                  <span className="text-base sm:text-lg font-bold text-gray-900 tabular-nums">
                    {plot.plotAreaSqFt.toLocaleString()}
                  </span>
                  <span className="block text-[10px] text-gray-500">sq.ft ({plot.plotAreaSqM.toLocaleString()} m²)</span>
                </div>

                <div className="bg-[#fafbfc] p-4 rounded-lg border border-gray-100 text-center">
                  <span className="block text-[10px] uppercase font-bold text-gray-400 tracking-wider">Max GFA</span>
                  <span className="text-base sm:text-lg font-bold text-gray-900 tabular-nums">
                    {plot.maxGfaSqFt.toLocaleString()}
                  </span>
                  <span className="block text-[10px] text-gray-500">Gross Floor Area</span>
                </div>

                <div className="bg-[#fafbfc] p-4 rounded-lg border border-gray-100 text-center">
                  <span className="block text-[10px] uppercase font-bold text-gray-400 tracking-wider">FAR Ratio</span>
                  <span className="text-base sm:text-lg font-bold text-[#b8441c] tabular-nums">
                    {plot.far.toFixed(2)}x
                  </span>
                  <span className="block text-[10px] text-gray-500">Efficiency</span>
                </div>

                <div className="bg-[#fafbfc] p-4 rounded-lg border border-gray-100 text-center">
                  <span className="block text-[10px] uppercase font-bold text-gray-400 tracking-wider">Height</span>
                  <span className="text-base sm:text-lg font-bold text-gray-900">
                    {plot.heightAllowance}
                  </span>
                  <span className="block text-[10px] text-gray-500">Floors</span>
                </div>
              </div>

              {/* Parameters Table */}
              <div className="divide-y divide-gray-100 border border-gray-100 rounded-lg overflow-hidden text-xs">
                {plot.parameters.map((param, index) => (
                  <div key={index} className="flex items-center justify-between p-3.5 hover:bg-gray-50 transition-colors">
                    <span className="text-gray-500 font-medium">{param.label}</span>
                    <span className="text-gray-900 font-semibold text-right flex items-center gap-1.5">
                      <span>{param.value}</span>
                      {param.verified && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Development Feasibility Breakdown */}
            <div className="bg-white rounded-xl border border-[#f0f0f2] p-6 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#b8441c]">Financial Modeling</span>
                  <h2 className="font-serif-title text-xl font-bold text-gray-900 mt-0.5">
                    High-Level Development Feasibility
                  </h2>
                </div>

                {/* Target Asset Toggle */}
                <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-lg text-xs font-semibold">
                  <button
                    onClick={() => setTargetType("luxury")}
                    className={`px-3 py-1 rounded-md transition-all ${
                      targetType === "luxury" ? "bg-white text-[#b8441c] shadow-xs" : "text-gray-600"
                    }`}
                  >
                    Ultra-Luxury Tier
                  </button>
                  <button
                    onClick={() => setTargetType("standard")}
                    className={`px-3 py-1 rounded-md transition-all ${
                      targetType === "standard" ? "bg-white text-[#b8441c] shadow-xs" : "text-gray-600"
                    }`}
                  >
                    Standard Mid-Rise
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-gray-900 to-[#1e242b] text-white space-y-1">
                  <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Projected GDV</span>
                  <div className="text-xl font-extrabold text-[#f59e0b] tabular-nums">
                    AED {formatAED(calculatedGDV)}
                  </div>
                  <span className="text-[10px] text-gray-300 block">Estimated Gross Development Value</span>
                </div>

                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 text-gray-800 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Construction Cost</span>
                  <div className="text-xl font-bold text-gray-900 tabular-nums">
                    AED {formatAED(plot.feasibility.estimatedConstructionAED)}
                  </div>
                  <span className="text-[10px] text-gray-500 block">Shell, Core &amp; Fitout Benchmark</span>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-900 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-emerald-700 tracking-wider">Developer Margin</span>
                  <div className="text-xl font-extrabold text-emerald-800 tabular-nums">
                    ~{calculatedMargin}%
                  </div>
                  <span className="text-[10px] text-emerald-600 block">Anticipated Return on Cost</span>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#fafbfc] border border-gray-100 text-xs text-gray-600 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#b8441c]" />
                  <span>Target Asset Class: <strong className="text-gray-900 font-semibold">{plot.feasibility.targetAssetClass}</strong></span>
                </div>
                <span className="text-gray-400">•</span>
                <span>Absorption: <strong className="text-gray-900 font-semibold">{plot.feasibility.absorptionHorizon}</strong></span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: STICKY CONTACT & NDA SUBMISSION */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-[#f0f0f2] p-6 shadow-md sticky top-24 space-y-6">
              <div>
                <span className="inline-block px-2.5 py-1 rounded bg-[#b8441c]/10 text-[#b8441c] text-[10px] font-bold uppercase tracking-wider mb-2">
                  Private Acquisition Desk
                </span>
                <h3 className="font-serif-title text-xl font-bold text-gray-900">
                  Request Technical Dossier
                </h3>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  Due diligence documents (Site Plan, DLD Title Verification, Setback Certificates) are released under mutual confidentiality.
                </p>
              </div>

              {ndaRequested ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-5 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-sm text-emerald-900">Mandate Request Received</h4>
                  <p className="text-xs text-emerald-700 leading-relaxed">
                    Our Senior Land Advisory Desk will send the encrypted NDA and unredacted title dossier to your email within 2 business hours.
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 underline pt-2"
                  >
                    <span>Instant Follow-up via WhatsApp</span>
                  </a>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setNdaRequested(true);
                  }}
                  className="space-y-3.5 text-xs"
                >
                  <div>
                    <label className="text-[11px] font-bold uppercase text-gray-500 block mb-1">
                      Investor / Developer Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Al Mansoor"
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-[#b8441c]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold uppercase text-gray-500 block mb-1">
                      Corporate Entity / Family Office
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Horizon Developments"
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-[#b8441c]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold uppercase text-gray-500 block mb-1">
                      Direct Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="direct@corporate.com"
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-[#b8441c]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold uppercase text-gray-500 block mb-1">
                      Contact Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+971 50 000 0000"
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-[#b8441c]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-lg bg-[#b8441c] hover:bg-[#9e3814] text-white text-xs font-semibold tracking-wide transition-all shadow-sm flex items-center justify-center gap-2"
                  >
                    <Lock className="w-3.5 h-3.5" />
                    <span>Request Confidential NDA &amp; Dossier</span>
                  </button>
                </form>
              )}

              {/* Direct Land Intelligence Contact */}
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">
                  Direct Owner Desk
                </span>

                <a
                  href={`tel:${PALC_COMPANY_INFO.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2.5 text-xs font-semibold text-gray-800 hover:text-[#b8441c] transition-colors p-2.5 rounded-lg bg-gray-50 border border-gray-100"
                >
                  <Phone className="w-4 h-4 text-[#b8441c]" />
                  <span>Direct: {PALC_COMPANY_INFO.phone}</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 p-2.5 rounded-lg transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>Direct WhatsApp Channel</span>
                </a>

                <div className="pt-2 text-[10px] text-gray-400 text-center leading-normal">
                  Office 2206, Single Business Tower, Business Bay, Dubai.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. ALTERNATIVE / SIMILAR OFF-MARKET PLOTS */}
      <div className="max-w-[1580px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24 pt-16">
        <div className="border-t border-gray-200 pt-10">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#b8441c]">Portfolio Opportunities</span>
              <h2 className="font-serif-title text-2xl font-bold text-gray-900 tracking-tight mt-1">
                Alternative Prime Development Plots
              </h2>
            </div>
            <Link
              href="/plots"
              className="text-xs font-semibold text-[#b8441c] flex items-center gap-1 hover:underline"
            >
              <span>Explore All Plots</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {similarPlots.map((simPlot) => (
              <PlotCard key={simPlot.id} plot={simPlot} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
