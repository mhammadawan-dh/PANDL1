"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  Building2
} from "lucide-react";
import { PALC_COMPANY_INFO } from "@/lib/plots-data";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const whatsappUrl = `https://wa.me/${PALC_COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
    `Hello PALC Team, I am contacting your Land Advisory Desk regarding private land acquisitions in Dubai.`
  )}`;

  return (
    <div className="min-h-screen bg-[#fafbfc] pb-24">
      {/* 1. VISIBLE AERIAL HERO HEADER */}
      <section className="relative bg-[#0c0e12] text-white pt-16 pb-24 border-b border-gray-800 overflow-hidden">
        {/* Full-bleed Aerial Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/plots/dubai-skyline-hero.png"
            alt="Dubai Land Advisory Desk"
            fill
            priority
            className="object-cover object-center brightness-105 contrast-[1.04] saturate-[1.12]"
          />
          {/* Directional scrim: leaves Dubai skyline radiant on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0e12]/92 via-[#0c0e12]/55 via-50% to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent via-65% to-[#0c0e12]/85" />
        </div>

        <div className="max-w-[1580px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-300 mb-6 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-gray-500">/</span>
            <span className="text-[#f59e0b] font-semibold">Contact &amp; Private Advisory</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[#f59e0b] text-xs font-semibold uppercase tracking-wider shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-pulse" />
              <span>Direct Land Advisory Desk &bull; Business Bay HQ</span>
            </div>

            <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight [text-shadow:_0_2px_16px_rgb(0_0_0_/_60%)]">
              Institutional Mandates &amp;{" "}
              <span className="italic text-[#e05638] font-serif">Contact</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-200 font-light leading-relaxed [text-shadow:_0_1px_8px_rgb(0_0_0_/_80%)]">
              Direct connection to our senior land intelligence committee. We respond to verified developer inquiries, affection plan verification requests, and private investor acquisition mandates within 2 business hours.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-[1580px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24 -mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Direct Office Cards */}
          <div className="space-y-6">
            {/* Headquarters Card */}
            <div className="bg-white rounded-xl border border-[#f0f0f2] p-6 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#b8441c]/10 text-[#b8441c] flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Headquarters
                </span>
                <h3 className="font-serif-heading text-lg font-bold text-gray-900 mt-1">
                  Single Business Tower
                </h3>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  {PALC_COMPANY_INFO.address}
                </p>
              </div>

              <div className="pt-2 border-t border-gray-100 text-xs text-gray-500 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-gray-400" />
                <span>Mon – Fri: 09:00 – 18:00 GST</span>
              </div>
            </div>

            {/* Direct Phone & WhatsApp Card */}
            <div className="bg-white rounded-xl border border-[#f0f0f2] p-6 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Telephone &amp; WhatsApp
                </span>
                <h3 className="font-serif-heading text-lg font-bold text-gray-900 mt-1">
                  Direct Line
                </h3>
                <a
                  href={`tel:${PALC_COMPANY_INFO.phone.replace(/\s+/g, "")}`}
                  className="text-sm font-bold text-[#b8441c] hover:underline block mt-1"
                >
                  {PALC_COMPANY_INFO.phone}
                </a>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open Direct WhatsApp</span>
              </a>
            </div>

            {/* Email & Licensing Card */}
            <div className="bg-white rounded-xl border border-[#f0f0f2] p-6 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-gray-100 text-gray-700 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Official Inquiries
                </span>
                <a
                  href={`mailto:${PALC_COMPANY_INFO.email}`}
                  className="text-xs font-semibold text-gray-900 hover:text-[#b8441c] block mt-1"
                >
                  {PALC_COMPANY_INFO.email}
                </a>
              </div>
              <div className="pt-2 border-t border-gray-100 flex items-center gap-2 text-[11px] text-gray-400">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Licensed in Dubai, United Arab Emirates</span>
              </div>
            </div>
          </div>

          {/* Right 2 Columns: Institutional Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-[#f0f0f2] p-8 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#b8441c]">Direct Engagement</span>
                <h2 className="font-serif-heading text-2xl font-bold text-gray-900 mt-1">
                  Book a Land Consultation or Submit a Mandate
                </h2>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  Provide your acquisition target or land details below. An authorized representative will contact you with relevant due diligence files.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h3 className="text-lg font-bold text-emerald-900">Inquiry Received</h3>
                  <p className="text-xs text-emerald-700 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to Plots &amp; Lands Company. A Senior Partner will review your request and get in touch with you shortly.
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
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Farhan Al Qasimi"
                        className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-[#b8441c]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold uppercase text-gray-600 block mb-1">
                        Company / Investor Group
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Gulf Sovereign Real Estate"
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
                        placeholder="investor@domain.com"
                        className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-[#b8441c]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold uppercase text-gray-600 block mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+971 50 123 4567"
                        className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-[#b8441c]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-bold uppercase text-gray-600 block mb-1">
                        Target Corridor
                      </label>
                      <select className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-[#b8441c] cursor-pointer">
                        <option>Dubai Islands (Waterfront)</option>
                        <option>Al Furjan / Metro Link</option>
                        <option>Dubai South (Logistics &amp; Freehold)</option>
                        <option>Business Bay (Canal High-Rise)</option>
                        <option>Palm Jumeirah (Villa Plots)</option>
                        <option>Bukadra / Meydan Horizon</option>
                        <option>Other Dubai Corridor</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[11px] font-bold uppercase text-gray-600 block mb-1">
                        Estimated Capital Allocation
                      </label>
                      <select className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-[#b8441c] cursor-pointer">
                        <option>AED 30,000,000 – AED 60,000,000</option>
                        <option>AED 60,000,000 – AED 120,000,000</option>
                        <option>AED 120,000,000+</option>
                        <option>Joint Venture / Equity Contribution</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold uppercase text-gray-600 block mb-1">
                      Requirements or Specific Plot Details
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Specify required FAR, height limits, zoning preferences, or plot identification if inquiring about a specific mandate."
                      className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-[#b8441c]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-lg bg-[#b8441c] hover:bg-[#9e3814] text-white text-xs font-semibold tracking-wide transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <Lock className="w-4 h-4" />
                    <span>Send Confidential Request to Advisory Desk</span>
                  </button>

                  <div className="text-center text-[11px] text-gray-400 pt-2">
                    Direct communication protected under standard UAE commercial non-disclosure agreements.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
