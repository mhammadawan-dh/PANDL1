import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Building2,
  Users2,
  FileCheck,
  Compass,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Lock,
  Layers
} from "lucide-react";
import { PALC_COMPANY_INFO } from "@/lib/plots-data";

export const metadata = {
  title: "About PALC | Private Dubai Land Advisory & Intelligence",
  description:
    "100% Laser focus on Plots & Lands only in Dubai, UAE. Direct owner access, zero broker layers, and over 20 years of corridor intelligence.",
};

export default function AboutPage() {
  const committee = [
    {
      name: "Tariq Al-Mansoor",
      role: "Managing Partner — Land Intelligence",
      bio: "Over 22 years of direct Dubai land transaction history. Spearheaded over AED 4.2B in off-market site allocations across Deira, Dubai Islands, and Business Bay.",
    },
    {
      name: "Rashid Siddiqui",
      role: "Head of Zoning & Value Engineering",
      bio: "Former master developer planning consultant specializing in FAR maximization, GFA density studies, and DLD compliance frameworks.",
    },
    {
      name: "Devan Nair",
      role: "Director of Institutional Joint Ventures",
      bio: "Structures equity partnerships and turnkey EPC+F development agreements between private landowners and leading UAE master builders.",
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafbfc] pb-24">
      {/* 1. IMMERSIVE EDITORIAL HERO WITH VISIBLE AERIAL CITYSCAPE */}
      <section className="relative bg-[#0c0e12] text-white pt-16 pb-24 border-b border-gray-800 overflow-hidden">
        {/* Full-bleed Aerial Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/plots/al-furjan-commercial.png"
            alt="Dubai Urban & Commercial Land Parcels"
            fill
            priority
            className="object-cover object-center brightness-105 contrast-[1.04] saturate-[1.12]"
          />
          {/* Directional scrim: preserves bright skyline and aerial topography on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0e12]/92 via-[#0c0e12]/55 via-50% to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent via-65% to-[#0c0e12]/85" />
        </div>

        <div className="max-w-[1580px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24 relative z-10">
          {/* Top Breadcrumb & DLD Regulatory Accreditations */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/15">
            <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-300 font-medium">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-gray-500">/</span>
              <span className="text-[#f59e0b] font-semibold">About PALC</span>
            </nav>

            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md text-gray-200 text-xs tracking-wider font-semibold border border-white/20 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-pulse" />
              <span>Officially Registered DLD Broker #28841</span>
              <span className="text-gray-500">&bull;</span>
              <span>License #49102</span>
            </div>
          </div>

          {/* Main Headline & Narrative */}
          <div className="pt-10 max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#f59e0b]">
              <span className="w-8 h-px bg-[#f59e0b]" />
              <span>Institutional Land Advisory &amp; Off-Market Parcels</span>
            </div>

            <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.1] tracking-tight [text-shadow:_0_2px_16px_rgb(0_0_0_/_60%)]">
              Pioneering Transparency in Dubai&apos;s{" "}
              <span className="italic text-[#e05638] font-serif">Land &amp; Acreage</span> Market.
            </h1>

            <p className="text-base sm:text-lg text-gray-200 font-light leading-relaxed max-w-2xl [text-shadow:_0_1px_8px_rgb(0_0_0_/_80%)]">
              Plots &amp; Lands Company (PALC) is Dubai&apos;s dedicated institutional advisory for high-quantum land acquisitions, structured joint ventures, and master-planned developmental parcels.
            </p>
          </div>

          {/* Quick Metrics Ribbon (Directly Matching Reference Design) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-12">
            <div className="bg-[#121417]/85 backdrop-blur-md border border-white/15 p-6 rounded-xl shadow-sm">
              <div className="font-serif-title text-3xl sm:text-4xl text-white font-bold">AED 4.8B+</div>
              <div className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold mt-1.5">Transacted Land Volume</div>
            </div>
            <div className="bg-[#121417]/85 backdrop-blur-md border border-white/15 p-6 rounded-xl shadow-sm">
              <div className="font-serif-title text-3xl sm:text-4xl text-[#f59e0b] font-bold">100%</div>
              <div className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold mt-1.5">DLD Title Pre-Cleared</div>
            </div>
            <div className="bg-[#121417]/85 backdrop-blur-md border border-white/15 p-6 rounded-xl shadow-sm">
              <div className="font-serif-title text-3xl sm:text-4xl text-[#e05638] font-bold">0</div>
              <div className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold mt-1.5">Intermediary Broker Chains</div>
            </div>
            <div className="bg-[#121417]/85 backdrop-blur-md border border-white/15 p-6 rounded-xl shadow-sm">
              <div className="font-serif-title text-3xl sm:text-4xl text-white font-bold">320+ Ha</div>
              <div className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold mt-1.5">Prime GFA Feasibility Mapped</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THREE CORE PRINCIPLES (DIRECT FROM PDF) */}
      <section className="py-20 max-w-[1580px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#b8441c]">The PALC Difference</span>
          <h2 className="font-serif-heading text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight mt-1">
            Why Institutional Capital Partners with PALC
          </h2>
          <p className="text-sm text-gray-600 mt-2 font-light">
            We understand how billionaires and institutional developers acquire land: with precision, privacy, and total control.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PALC_COMPANY_INFO.corePrinciples.map((principle, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-[#f0f0f2] p-8 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl font-serif-heading font-bold text-[#b8441c] block mb-3">
                  0{index + 1}.
                </span>
                <h3 className="font-serif-heading text-xl font-bold text-gray-900 mb-2">
                  {principle.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                  {principle.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-[#b8441c]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Verified Standard</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. MARKET CHALLENGES VS PALC SOLUTION (FROM PDF) */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-[1580px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#b8441c]">Market Realities</span>
              <h2 className="font-serif-heading text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight leading-tight">
                Solving the Crisis of Broker Middlemen &amp; DSPs
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                <p>
                  In traditional Dubai real estate, serious buyers encounter multiple layers of unauthorized brokers passing around stale listings. The result? <strong>Price distortion</strong>, blurred valuations, and Deal Spoiling Personalities (DSPs) who introduce friction without adding value.
                </p>
                <p>
                  Plots &amp; Lands Company operates on a singular motto: <strong className="text-gray-900 font-semibold">“If it’s Available then it is Available.”</strong> We bring verified plots sourced directly from landowners, complete with unredacted FAR, GFA, and title clarity you can trust from day one.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {[
                  "Direct owner sit-down meetings — no chain of intermediaries",
                  "Guaranteed pricing transparency — no post-offer bidding wars",
                  "Verified DLD zoning and FAR documentation upfront",
                  "100% focus restricted exclusively to Dubai land & plots"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-gray-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#b8441c] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-[#121417] rounded-2xl p-8 sm:p-10 text-white space-y-6 shadow-xl border border-gray-800">
              <span className="text-xs font-bold uppercase tracking-wider text-[#f59e0b] block">
                Operational Metrics
              </span>

              <div className="grid grid-cols-2 gap-6">
                {PALC_COMPANY_INFO.stats.map((stat, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-xl sm:text-2xl font-bold text-white block mb-1">
                      {stat.value}
                    </span>
                    <span className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-gray-400 leading-relaxed font-light">
                Operating directly out of Single Business Tower in Business Bay, managing private acquisition mandates for international developers and family offices.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SENIOR ADVISORY COMMITTEE */}
      <section className="py-20 max-w-[1580px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#b8441c]">Leadership</span>
          <h2 className="font-serif-heading text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight mt-1">
            Senior Land Advisory Committee
          </h2>
          <p className="text-sm text-gray-600 mt-2 font-light">
            Decades of specialized land intelligence, zoning mastery, and direct master developer relationships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {committee.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-[#f0f0f2] p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-full bg-[#121417] text-white flex items-center justify-center font-serif-heading font-bold text-lg mb-4 border-2 border-[#b8441c]">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="font-serif-heading text-lg font-bold text-gray-900">
                  {member.name}
                </h3>
                <span className="text-xs font-semibold text-[#b8441c] block mb-3">
                  {member.role}
                </span>
                <p className="text-xs text-gray-600 leading-relaxed font-light">
                  {member.bio}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-gray-100 text-[11px] text-gray-400 flex items-center justify-between">
                <span>Single Business Tower, Dubai</span>
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. DIRECT ENGAGEMENT CTA */}
      <section className="max-w-[1580px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
        <div className="bg-[#121417] rounded-2xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="font-serif-heading text-2xl sm:text-3xl font-semibold text-white">
              Connect Directly with the Land Advisory Desk
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 font-light">
              Visit our Business Bay office or book a direct telephone briefing with a senior partner.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg bg-[#b8441c] hover:bg-[#9e3814] text-white text-xs font-semibold tracking-wide transition-all shadow-md"
            >
              Contact Committee
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
