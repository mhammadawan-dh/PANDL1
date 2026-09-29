import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ShieldCheck } from "lucide-react";
import { PALC_COMPANY_INFO } from "@/lib/plots-data";

export function Footer() {
  return (
    <footer className="bg-[#0b0e13] text-gray-400 text-xs py-16 border-t border-gray-800 w-full">
      <div className="max-w-[1580px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Column 1: Brand & Philosophy */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="relative w-10 h-10 shrink-0">
                <Image
                  src="/images/palc-logo-white.png"
                  alt="Plots & Lands Company Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-base tracking-tight text-white">
                PALC DUBAI <span className="text-gray-400 font-normal text-xs">| Plots &amp; Lands Company</span>
              </span>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed max-w-md font-light">
              A private land advisory with 100% laser focus on Plots &amp; Lands only in Dubai, UAE. We connect institutional investors and master developers directly with land owners, cutting out broker middlemen and deal spoiling personalities.
            </p>
            <div className="flex items-center gap-2 pt-2 text-[11px] text-[#f59e0b]">
              <ShieldCheck className="w-4 h-4" />
              <span>Direct Transactions • DLD Document Verification • 0% DSP Distortion</span>
            </div>
          </div>

          {/* Column 2: Direct Contact */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase">Direct Advisory</h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#b8441c] shrink-0 mt-0.5" />
                <span>{PALC_COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#b8441c] shrink-0" />
                <a href={`tel:${PALC_COMPANY_INFO.phone.replace(/\s+/g, "")}`} className="hover:text-white transition-colors">
                  {PALC_COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#b8441c] shrink-0" />
                <a href={`mailto:${PALC_COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {PALC_COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase">Prime Corridors</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/plots?location=Dubai+Islands" className="hover:text-white transition-colors">
                  Dubai Islands Waterfront
                </Link>
              </li>
              <li>
                <Link href="/plots?location=Al+Furjan" className="hover:text-white transition-colors">
                  Al Furjan Metro Plots
                </Link>
              </li>
              <li>
                <Link href="/plots?location=Dubai+South" className="hover:text-white transition-colors">
                  Dubai South Logistics Hub
                </Link>
              </li>
              <li>
                <Link href="/plots?location=Business+Bay" className="hover:text-white transition-colors">
                  Business Bay Canal Front
                </Link>
              </li>
              <li>
                <Link href="/plots?location=Palm+Jumeirah" className="hover:text-white transition-colors">
                  Palm Jumeirah Signature Fronds
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Advisory & Legal */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase">Advisory &amp; JV</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/joint-ventures" className="hover:text-white transition-colors">
                  Joint Venture Structures
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Anti-Middleman Model
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Submit Land Mandate
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Confidentiality &amp; NDA
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-400">
          <p>© 2026 Plots &amp; Lands Company (PALC). All rights reserved. Registered in Dubai, UAE.</p>
          <div className="flex items-center space-x-6">
            <span className="text-gray-400">“If it’s Available then it is Available.”</span>
            <Link href="/contact" className="hover:text-white">Confidentiality Terms</Link>
            <Link href="/about" className="hover:text-white">Regulatory Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
