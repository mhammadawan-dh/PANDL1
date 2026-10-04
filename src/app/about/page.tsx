import Image from "next/image";
import Link from "next/link";
import { 
  Building2, 
  ShieldCheck, 
  Lock, 
  Layers,
  ArrowRight
} from "lucide-react";
import { PALC_COMPANY_INFO } from "@/lib/plots-data";

export default function AboutPage() {
  return (
    <div className="flex-1 w-full bg-midnight min-h-screen text-text-primary">
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-[1580px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24 relative z-10">
          <div className="max-w-4xl">
            <h1 className="font-serif-heading text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-normal leading-[1.05] tracking-tight mb-8">
              The Anti-Middleman <br/> <span className="text-platinum italic">Land Advisory.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-text-secondary font-light leading-relaxed max-w-3xl border-l-2 border-platinum/30 pl-6">
              &quot;We connect institutional investors and master developers directly with land owners, cutting out broker middlemen and deal-spoiling personalities.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Grid */}
      <section className="py-24 border-t border-white/5 relative z-10 bg-midnight-surface">
        <div className="max-w-[1580px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="font-serif-heading text-3xl sm:text-4xl text-text-primary">The Dubai Land Dilemma</h2>
                <p className="text-text-secondary font-light leading-relaxed">
                  The Dubai plot market is notorious for extreme fragmentation. A single plot is often circulated by 10 different brokers, each adding their own markup, leading to distorted valuations and collapsed negotiations before the buyer even meets the seller.
                </p>
                <p className="text-text-secondary font-light leading-relaxed">
                  <span className="text-text-primary font-medium">Plots &amp; Lands Company (PALC)</span> was built to solve this. We are not a standard agency. We are a highly specialized advisory with a 100% laser focus on land transactions.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/10">
                {PALC_COMPANY_INFO.corePrinciples.slice(0,2).map((principle, idx) => (
                  <div key={idx} className="space-y-2">
                    <h4 className="text-platinum font-semibold text-sm uppercase tracking-wider">{principle.title}</h4>
                    <p className="text-xs text-text-secondary font-light leading-relaxed">{principle.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Anchor */}
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto double-bezel p-2 rounded-[2rem] overflow-hidden">
              <div className="relative w-full h-full rounded-[calc(2rem-0.5rem)] overflow-hidden">
                <Image
                  src="/images/plots/dubai-skyline-hero.png"
                  alt="Dubai Master Plan"
                  fill
                  className="object-cover grayscale opacity-50 contrast-125"
                />
                <div className="absolute inset-0 bg-midnight/40 mix-blend-multiply" />
                
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-midnight-card/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center shadow-2xl">
                    <ShieldCheck className="w-8 h-8 text-platinum mx-auto mb-3 opacity-80" />
                    <div className="text-xl font-medium text-text-primary mb-1">0% DSP Distortion</div>
                    <div className="text-xs text-text-secondary font-light">Verified Title Deeds Only</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-white/5 relative z-10 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif-heading text-4xl sm:text-5xl text-text-primary mb-6">Discuss Your Mandate</h2>
          <p className="text-text-secondary font-light mb-10 max-w-lg mx-auto">
            Whether acquiring strategic land banks or seeking a JV partner for your plot, connect directly with our principals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-platinum hover:bg-platinum-light text-midnight text-sm font-semibold transition-all active:scale-[0.98] shadow-platinum-subtle"
          >
            <span>Schedule Private Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
