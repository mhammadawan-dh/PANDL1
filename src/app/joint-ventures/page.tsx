"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Handshake,
  Building,
  ShieldCheck,
  CheckCircle2,
  FileText,
  ArrowRight,
  TrendingUp,
  Landmark,
  Scale,
  Lock,
  Phone,
  MessageSquare
} from "lucide-react";
import { JV_MANDATES, PALC_COMPANY_INFO } from "@/lib/plots-data";

export default function JointVenturesPage() {
  const [submitted, setSubmitted] = useState(false);
  const [mandateType, setMandateType] = useState<"landowner" | "developer">("landowner");

  const jvModels = [
    {
      title: "Land Contribution Model",
      subtitle: "Equity Land Injection vs Build Capital",
      desc: "The landowner contributes the unencumbered parcel at an independently assessed market valuation as project equity. The developer finances 100% of construction, approvals, and marketing. Profits are distributed at agreed milestones.",
      points: [
        "Zero debt burden on landowner",
        "Retain upside participation beyond flat land sale",
        "Escrow protected under Dubai DLD Law 8",
        "Preferred return hurdle rate"
      ],
      icon: Landmark
    },
    {
      title: "Equity Co-Investment & SPV",
      subtitle: "Special Purpose Vehicle Formation",
      desc: "Formation of an onshore or DIFC SPV where institutional family offices, funds, and private developers pool capital alongside the title deed holder. Managed with institutional governance and third-party quantity surveying.",
      points: [
        "Institutional asset management governance",
        "DIFC / ADGM legal ring-fencing available",
        "Structured mezzanine or senior equity",
        "Clear exit horizons (24-36 months)"
      ],
      icon: Scale
    },
    {
      title: "Turnkey EPC+F Development",
      subtitle: "Engineering, Procurement & Structured Finance",
      desc: "Tier-1 contracting partners deliver full architectural design, turnkey construction, and deferred contractor financing in exchange for finished residential or commercial unit off-take.",
      points: [
        "Guaranteed Maximum Price (GMP) contracts",
        "Eliminates construction completion risk",
        "Deferred contractor milestone payments",
        "Ideal for commercial & hospitality plots"
      ],
      icon: Building
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafbfc] pb-24">
      {/* 1. HERO HEADER WITH VISIBLE AERIAL MASTER PLAN BACKDROP */}
      <section className="relative bg-[#0c0e12] text-white pt-16 pb-24 border-b border-gray-800 overflow-hidden">
        {/* Visible high-res master plan / aerial backdrop */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/plots/dubai-south-industrial.png"
            alt="Dubai Master Development Corridor"
            fill
            priority
            className="object-cover object-center brightness-105 contrast-[1.04] saturate-[1.12]"
          />
          {/* Directional gradient preserving vivid scenery on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0e12]/92 via-[#0c0e12]/55 via-50% to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent via-65% to-[#0c0e12]/85" />
        </div>

        <div className="max-w-[1580px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-300 mb-6 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-gray-500">/</span>
            <span className="text-[#f59e0b] font-semibold">Developers &amp; Institutional Partners</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16">
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[#f59e0b] text-xs font-semibold uppercase tracking-wider shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-pulse" />
                <span>Institutional Advisory &amp; Land Consortia</span>
              </div>

              <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.08] tracking-tight [text-shadow:_0_2px_16px_rgb(0_0_0_/_60%)]">
                Institutional Alliances &amp; <br className="hidden sm:inline" />
                <span className="italic font-normal text-[#e05638]">Joint Venture</span> Development
              </h1>

              <p className="text-base sm:text-lg text-gray-200 max-w-2xl font-light leading-relaxed [text-shadow:_0_1px_8px_rgb(0_0_0_/_80%)]">
                Connecting master developers, verified private landowners, and sovereign institutional capital to structure legally robust, high-yield development ventures across the Emirate of Dubai.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <a
                href="#submit-mandate"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#b8441c] hover:bg-[#a43417] text-white text-xs uppercase tracking-wider font-semibold shadow-md transition-all"
              >
                <span>Submit Developer Mandate</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#master-network"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 text-xs uppercase tracking-wider font-semibold transition-all"
              >
                <span>Explore Master Allocations</span>
              </a>
            </div>
          </div>

          {/* Stats Grid / Institutional Validation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6">
            <div className="p-6 rounded-xl bg-[#121417]/80 backdrop-blur-md border border-white/15 shadow-sm flex flex-col justify-between">
              <span className="text-[11px] uppercase tracking-widest text-gray-400 mb-2 font-semibold">Completed Mandates</span>
              <div className="font-serif-title text-3xl sm:text-4xl text-[#f59e0b] font-bold tracking-tight">AED 4.2B+</div>
              <p className="text-xs text-gray-300 mt-2">DLD Escrow verified transaction volume</p>
            </div>
            <div className="p-6 rounded-xl bg-[#121417]/80 backdrop-blur-md border border-white/15 shadow-sm flex flex-col justify-between">
              <span className="text-[11px] uppercase tracking-widest text-gray-400 mb-2 font-semibold">Master Developers</span>
              <div className="font-serif-title text-3xl sm:text-4xl text-white font-bold tracking-tight">18+</div>
              <p className="text-xs text-gray-300 mt-2">Accredited master community partners</p>
            </div>
            <div className="p-6 rounded-xl bg-[#121417]/80 backdrop-blur-md border border-white/15 shadow-sm flex flex-col justify-between">
              <span className="text-[11px] uppercase tracking-widest text-gray-400 mb-2 font-semibold">Landowner Consortia</span>
              <div className="font-serif-title text-3xl sm:text-4xl text-white font-bold tracking-tight">45+</div>
              <p className="text-xs text-gray-300 mt-2">Direct family office &amp; sovereign holdings</p>
            </div>
            <div className="p-6 rounded-xl bg-[#121417]/80 backdrop-blur-md border border-white/15 shadow-sm flex flex-col justify-between">
              <span className="text-[11px] uppercase tracking-widest text-gray-400 mb-2 font-semibold">Intermediary Policy</span>
              <div className="font-serif-title text-3xl sm:text-4xl text-[#e05638] font-bold tracking-tight">0%</div>
              <p className="text-xs text-gray-300 mt-2">Zero speculative broker chains. Strict NDA</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ACCREDITED MASTER DEVELOPER NETWORK SECTION (MATCHING REFERENCE DESIGN) */}
      <section id="master-network" className="w-full py-20 bg-white border-b border-gray-100">
        <div className="max-w-[1580px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#b8441c] block mb-2">
                Accredited Master Partners
              </span>
              <h2 className="font-serif-heading text-3xl sm:text-4xl text-gray-900 tracking-tight">
                Partnered with UAE&apos;s Leading Master Developers
              </h2>
            </div>
            <p className="text-sm text-gray-500 max-w-md font-light leading-relaxed">
              Exclusive off-market allocations, fast-tracked affection plans, and direct registration desks with Tier-1 public and private developers.
            </p>
          </div>

          {/* Developer Directory Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* EMAAR */}
            <div className="p-7 rounded-2xl bg-[#fafbfc] border border-gray-200/80 shadow-xs flex flex-col justify-between hover:border-[#b8441c]/50 transition-all group">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-serif-title text-2xl font-bold tracking-widest text-gray-900">EMAAR</span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-[#b8441c]/10 text-[#b8441c]">Tier-1 Master</span>
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Dubai Creek Harbour &amp; Oasis Corridor</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6 font-light">
                  High-density waterfront residential plots (G+45) and ultra-luxury low-density lagoon island parcels. Turnkey master infrastructure ready.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between text-xs">
                <span className="text-gray-500">Available Plot GFA</span>
                <span className="font-semibold text-[#b8441c]">1.85M sq.ft GFA</span>
              </div>
            </div>

            {/* NAKHEEL */}
            <div className="p-7 rounded-2xl bg-[#fafbfc] border border-gray-200/80 shadow-xs flex flex-col justify-between hover:border-[#b8441c]/50 transition-all group">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-serif-title text-2xl font-bold tracking-widest text-gray-900">NAKHEEL</span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-amber-50 text-amber-800 border border-amber-200">Master Developer</span>
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Dubai Islands (Deira) &amp; Palm Jebel Ali</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6 font-light">
                  Pristine coastal hospitality footprints, mixed-use commercial boardwalks, and private beachfront estate plots with direct maritime access.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between text-xs">
                <span className="text-gray-500">Available Plot GFA</span>
                <span className="font-semibold text-[#b8441c]">2.40M sq.ft GFA</span>
              </div>
            </div>

            {/* DUBAI SOUTH */}
            <div className="p-7 rounded-2xl bg-[#fafbfc] border border-gray-200/80 shadow-xs flex flex-col justify-between hover:border-[#b8441c]/50 transition-all group">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-serif-title text-xl font-bold tracking-wider text-gray-900">DUBAI SOUTH</span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-blue-50 text-blue-800 border border-blue-200">Government Master</span>
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Al Maktoum Int&apos;l Airport Logistics &amp; Residential</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6 font-light">
                  Master zones adjacent to the world&apos;s largest passenger terminal expansion. Prime for build-to-suit logistics centers, tech hubs, and co-living.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between text-xs">
                <span className="text-gray-500">Available Plot Land</span>
                <span className="font-semibold text-[#b8441c]">3.10M sq.ft Land</span>
              </div>
            </div>

            {/* MERAAS */}
            <div className="p-7 rounded-2xl bg-[#fafbfc] border border-gray-200/80 shadow-xs flex flex-col justify-between hover:border-[#b8441c]/50 transition-all group">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-serif-title text-2xl font-bold tracking-widest text-gray-900">MERAAS</span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-purple-50 text-purple-800 border border-purple-200">Lifestyle Master</span>
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">City Walk, Pearl Jumeira &amp; Jumeirah Bay</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6 font-light">
                  Ultra-prime urban infill opportunities and boutique residential land. Unparalleled positioning for branded residences and boutique hotels.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between text-xs">
                <span className="text-gray-500">Available Plot GFA</span>
                <span className="font-semibold text-[#b8441c]">820,000 sq.ft GFA</span>
              </div>
            </div>

            {/* SOBHA REALTY */}
            <div className="p-7 rounded-2xl bg-[#fafbfc] border border-gray-200/80 shadow-xs flex flex-col justify-between hover:border-[#b8441c]/50 transition-all group">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-serif-title text-xl font-bold tracking-wider text-gray-900">SOBHA REALTY</span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">Institutional Master</span>
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Sobha Hartland II &amp; Bukadra Corridor</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6 font-light">
                  Integrated luxury communities with lagoons and forest reserves. Prime parcels ready for high-specification vertical developments.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between text-xs">
                <span className="text-gray-500">Available Plot GFA</span>
                <span className="font-semibold text-[#b8441c]">1.15M sq.ft GFA</span>
              </div>
            </div>

            {/* ALDAR */}
            <div className="p-7 rounded-2xl bg-[#fafbfc] border border-gray-200/80 shadow-xs flex flex-col justify-between hover:border-[#b8441c]/50 transition-all group">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-serif-title text-2xl font-bold tracking-widest text-gray-900">ALDAR</span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-cyan-50 text-cyan-800 border border-cyan-200">Institutional Expansion</span>
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Haven &amp; Athlon Master Communities</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6 font-light">
                  Large acreage wellness and sports master plans in Dubailand. Joint venture parcels allocated for institutional school, retail, and cluster residential.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between text-xs">
                <span className="text-gray-500">Available Plot Land</span>
                <span className="font-semibold text-[#b8441c]">950,000 sq.ft Land</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STRUCTURED JV MODELS */}
      <section className="py-20 max-w-[1580px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#b8441c]">Structured Capital Models</span>
          <h2 className="font-serif-heading text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight mt-1">
            Proven Joint Venture Frameworks
          </h2>
          <p className="text-sm text-gray-600 mt-2 font-light">
            Tailored legal and operational blueprints designed to maximize land value while minimizing execution risk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {jvModels.map((model, idx) => {
            const Icon = model.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#f0f0f2] p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#b8441c]/10 text-[#b8441c] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif-heading text-xl font-bold text-gray-900 mb-1">
                    {model.title}
                  </h3>
                  <span className="text-xs font-semibold text-[#b8441c] block mb-3">
                    {model.subtitle}
                  </span>
                  <p className="text-xs text-gray-600 leading-relaxed font-light mb-6">
                    {model.desc}
                  </p>

                  <div className="space-y-2 border-t border-gray-100 pt-4">
                    {model.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. ACTIVE OFF-MARKET JV MANDATES */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-[1580px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#b8441c]">Syndication Opportunities</span>
              <h2 className="font-serif-heading text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight mt-1">
                Active Off-Market JV Mandates
              </h2>
            </div>
            <span className="text-xs text-gray-500 font-medium">Updated Weekly by PALC Advisory Desk</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {JV_MANDATES.map((mandate) => (
              <div
                key={mandate.id}
                className="bg-[#fafbfc] rounded-xl border border-gray-200/80 p-6 space-y-4 shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-[#121417] text-[#f59e0b]">
                    {mandate.badge}
                  </span>
                  <span className="text-xs font-semibold text-gray-500">{mandate.location}</span>
                </div>

                <h3 className="font-semibold text-gray-900 text-base leading-snug">
                  {mandate.title}
                </h3>

                <div className="space-y-2 text-xs text-gray-600 border-t border-gray-200/60 pt-3">
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-gray-400">Seeking</span>
                    <strong className="text-gray-800">{mandate.partnerNeed}</strong>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-gray-400">Land Contribution</span>
                    <strong className="text-gray-800">{mandate.landContribution}</strong>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-gray-400">Target Structure</span>
                    <span className="text-gray-700">{mandate.structure}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={`https://wa.me/${PALC_COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                      `Hello PALC, I am inquiring about JV Mandate: ${mandate.title}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 rounded-md bg-[#121417] hover:bg-[#b8441c] text-white text-xs font-semibold text-center transition-colors block"
                  >
                    Express JV Interest
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SUBMIT CONFIDENTIAL MANDATE FORM */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 sm:p-10 shadow-lg space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#b8441c]">Direct Engagement</span>
            <h2 className="font-serif-heading text-2xl sm:text-3xl font-semibold text-gray-900">
              Submit a Confidential Joint Venture Mandate
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 max-w-xl mx-auto font-light">
              Whether you hold a strategic land parcel or represent an institutional development fund seeking land equity, our Business Bay advisory desk structures direct, bespoke alliances.
            </p>
          </div>

          {/* Persona Toggle */}
          <div className="flex justify-center">
            <div className="bg-gray-100 p-1 rounded-lg flex items-center text-xs font-semibold">
              <button
                type="button"
                onClick={() => setMandateType("landowner")}
                className={`px-5 py-2 rounded-md transition-all ${
                  mandateType === "landowner" ? "bg-white text-[#b8441c] shadow-xs" : "text-gray-600"
                }`}
              >
                I Am a Landowner
              </button>
              <button
                type="button"
                onClick={() => setMandateType("developer")}
                className={`px-5 py-2 rounded-md transition-all ${
                  mandateType === "developer" ? "bg-white text-[#b8441c] shadow-xs" : "text-gray-600"
                }`}
              >
                I Am a Developer / Fund
              </button>
            </div>
          </div>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="text-lg font-bold text-emerald-900">Mandate Safely Logged</h3>
              <p className="text-xs sm:text-sm text-emerald-700 max-w-md mx-auto leading-relaxed">
                Thank you. A Senior Partner from Plots &amp; Lands Company will review your land parameters under mutual NDA and contact you directly within 24 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-4 text-xs"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-bold uppercase text-gray-600 block mb-1">
                    Your Full Name / Title
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Salim Al Hashimi"
                    className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-[#b8441c]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase text-gray-600 block mb-1">
                    Company / Family Office Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Al Hashimi Investment Holdings"
                    className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-[#b8441c]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-bold uppercase text-gray-600 block mb-1">
                    Direct Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="direct@holdings.ae"
                    className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-[#b8441c]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase text-gray-600 block mb-1">
                    Mobile / WhatsApp Contact
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 50 000 0000"
                    className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-[#b8441c]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase text-gray-600 block mb-1">
                  {mandateType === "landowner"
                    ? "Plot Details (Location, Size, FAR, Height, Title Status)"
                    : "Development Track Record & Capital Capacity"}
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder={
                    mandateType === "landowner"
                      ? "e.g. Freehold plot in Dubai Islands Sector A, 55,000 sq ft, G+24 allowance, unencumbered title deed ready."
                      : "e.g. Seeking high-density residential land in Al Furjan or Dubai South, balance sheet equity AED 100M+ ready to deploy."
                  }
                  className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-[#b8441c]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg bg-[#b8441c] hover:bg-[#9e3814] text-white text-xs font-semibold tracking-wide transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Lock className="w-4 h-4" />
                  <span>Submit Confidential Joint Venture Mandate</span>
                </button>
              </div>

              <div className="text-center text-[11px] text-gray-400 pt-2">
                All inquiries are covered under automatic mutual NDA and reviewed strictly by PALC partners.
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
