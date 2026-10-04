import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { 
  MapPin, 
  ShieldCheck, 
  ArrowLeft,
  Ruler,
  Building2,
  Layers,
  FileText,
  MessageSquare,
  ArrowUpRight,
  Calculator,
  Compass,
  Download,
  CheckCircle2,
  Landmark,
  Share2
} from "lucide-react";
import { PLOTS_DATA, PALC_COMPANY_INFO } from "@/lib/plots-data";
import { formatAED } from "@/lib/utils";

// In Next.js 16 app router, params is a Promise
export default async function PlotDossier({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const plot = PLOTS_DATA.find((p) => p.slug === slug);

  if (!plot) {
    notFound();
  }

  const whatsappUrl = `https://wa.me/${PALC_COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
    `Hello PALC Team, I am requesting the full technical dossier & title deed verification for plot ID: ${plot.id} (${plot.title}).`
  )}`;

  return (
    <div className="flex-1 w-full bg-midnight min-h-screen text-text-primary pb-32">
      
      {/* 1. CINEMATIC HERO */}
      <div className="relative h-[65vh] min-h-[500px] w-full">
        <Image
          src={plot.images.hero}
          alt={plot.title}
          fill
          priority
          className="object-cover"
        />
        {/* Gradient overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-black/30" />
        
        {/* Back Navigation */}
        <div className="absolute top-8 left-6 sm:left-10 lg:left-16 z-10">
          <Link 
            href="/plots" 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white text-xs font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>
        </div>

        {/* Floating Dossier Title Block */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:px-16 2xl:px-24">
          <div className="max-w-[1580px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-platinum text-midnight text-[10px] font-bold uppercase tracking-wider shadow-platinum-subtle">
                  {plot.category}
                </span>
                {plot.dldApproved && (
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    DLD Cleared
                  </span>
                )}
                <span className="px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                  ID: {plot.id}
                </span>
              </div>
              <h1 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl text-white font-normal leading-[1.1] tracking-tight">
                {plot.title}
              </h1>
              <div className="flex items-center gap-2 text-platinum font-medium text-sm sm:text-base">
                <MapPin className="w-5 h-5" />
                <span>{plot.location.community}{plot.location.sector ? `, ${plot.location.sector}` : ""}</span>
              </div>
            </div>

            {/* Price Box */}
            <div className="double-bezel p-6 rounded-2xl md:min-w-[300px] shrink-0 backdrop-blur-xl">
              <div className="text-[11px] uppercase tracking-wider text-text-secondary font-semibold mb-1">
                Total Land Value
              </div>
              <div className="text-3xl font-bold text-white tabular-nums tracking-tight mb-4">
                AED {formatAED(plot.priceAED)}
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-white/10">
                <span className="text-xs text-text-secondary font-medium">Rate per GFA</span>
                <span className="text-sm font-semibold text-platinum tabular-nums">
                  AED {plot.pricePerSqFtGFA} <span className="text-[10px] font-normal text-text-secondary">/ sq.ft</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN DOSSIER CONTENT */}
      <div className="max-w-[1580px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-12">
            
            {/* Executive Summary */}
            <section className="space-y-6">
              <h2 className="font-serif-heading text-2xl sm:text-3xl font-medium text-platinum flex items-center gap-3">
                <FileText className="w-6 h-6" />
                Executive Summary
              </h2>
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed font-light">
                {plot.description}
              </p>
            </section>

            {/* Core Metrics Grid */}
            <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Plot Area", value: plot.plotAreaSqFt.toLocaleString(), sub: "sq.ft", icon: Ruler },
                { label: "Max GFA", value: plot.maxGfaSqFt.toLocaleString(), sub: "sq.ft", icon: Layers },
                { label: "FAR / Density", value: plot.far.toFixed(2), sub: "Ratio", icon: Calculator },
                { label: "Height", value: plot.heightAllowance, sub: "Allowance", icon: Building2 },
              ].map((metric, idx) => (
                <div key={idx} className="bg-midnight-card border border-white/5 rounded-2xl p-5 hover:bg-white/[0.02] transition-colors">
                  <metric.icon className="w-5 h-5 text-platinum mb-4 opacity-70" />
                  <div className="text-[10px] uppercase tracking-wider text-text-secondary font-medium mb-1">
                    {metric.label}
                  </div>
                  <div className="text-xl font-semibold text-text-primary tabular-nums">
                    {metric.value} <span className="text-[11px] font-normal text-text-secondary">{metric.sub}</span>
                  </div>
                </div>
              ))}
            </section>

            {/* Technical Parameters */}
            <section className="space-y-6">
              <h3 className="font-serif-heading text-2xl font-medium text-text-primary">Zoning &amp; Parameters</h3>
              <div className="bg-midnight-card border border-white/5 rounded-[1.5rem] overflow-hidden">
                <div className="divide-y divide-white/5">
                  {plot.parameters.map((param, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 hover:bg-white/[0.02] transition-colors">
                      <span className="text-sm text-text-secondary font-medium mb-1 sm:mb-0 w-1/3">
                        {param.label}
                      </span>
                      <span className="text-sm text-text-primary font-medium flex-1">
                        {param.value}
                      </span>
                      {param.verified && (
                        <span className="shrink-0 inline-flex items-center gap-1.5 text-[10px] font-semibold text-emerald-400 uppercase tracking-wider mt-2 sm:mt-0">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Verified
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>

          </div>

          {/* Right Column: Financials & Action */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-6 relative">
            <div className="sticky top-28 space-y-6">
              
              {/* Feasibility Model */}
              <div className="double-bezel p-1.5 rounded-[1.75rem]">
                <div className="bg-midnight-card rounded-[calc(1.75rem-0.375rem)] p-6 space-y-6">
                  <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                    <Landmark className="w-5 h-5 text-platinum" />
                    <h3 className="font-serif-heading text-xl font-medium text-text-primary">Financial Feasibility</h3>
                  </div>
                  
                  <div className="space-y-5">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-text-secondary font-medium mb-1">Target Asset Class</div>
                      <div className="text-sm font-semibold text-platinum">{plot.feasibility.targetAssetClass}</div>
                    </div>
                    
                    <div className="flex justify-between items-baseline">
                      <div className="text-[10px] uppercase tracking-wider text-text-secondary font-medium">Est. Construction Cost</div>
                      <div className="text-sm font-medium text-text-primary tabular-nums">AED {formatAED(plot.feasibility.estimatedConstructionAED)}</div>
                    </div>
                    
                    <div className="flex justify-between items-baseline">
                      <div className="text-[10px] uppercase tracking-wider text-text-secondary font-medium">Projected GDV</div>
                      <div className="text-sm font-semibold text-emerald-400 tabular-nums">AED {formatAED(plot.feasibility.projectedGDVAED)}</div>
                    </div>
                    
                    <div className="flex justify-between items-baseline pt-4 border-t border-white/10">
                      <div className="text-[10px] uppercase tracking-wider text-text-secondary font-medium">Developer Margin</div>
                      <div className="text-lg font-bold text-platinum tabular-nums">{plot.feasibility.developerMarginPercent}%</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secure Action Desk */}
              <div className="bg-[#14161B] border border-white/10 rounded-[1.75rem] p-6 text-center space-y-5 shadow-2xl">
                <ShieldCheck className="w-8 h-8 text-platinum mx-auto opacity-80" />
                <div>
                  <h4 className="font-semibold text-text-primary mb-1">Request Secure Access</h4>
                  <p className="text-xs text-text-secondary font-light">Title deed, affection plan, and KMZ files available under NDA for qualified principals.</p>
                </div>
                
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-platinum hover:bg-platinum-light text-midnight text-sm font-semibold transition-colors shadow-platinum-subtle"
                >
                  <MessageSquare className="w-4 h-4" />
                  Connect via WhatsApp
                </a>
                
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-text-primary text-sm font-semibold transition-colors"
                >
                  Schedule Advisory Call
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
