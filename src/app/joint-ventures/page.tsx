import Link from "next/link";
import { 
  Building2, 
  Handshake, 
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  FileText,
  MessageSquare,
  Phone
} from "lucide-react";
import { JV_MANDATES, PALC_COMPANY_INFO } from "@/lib/plots-data";

export default function JointVenturesPage() {
  const whatsappUrl = `https://wa.me/${PALC_COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
    `Hello PALC Team, I would like to discuss Joint Venture structures and current institutional mandates.`
  )}`;

  return (
    <div className="flex-1 w-full bg-midnight min-h-screen pt-32 pb-24 text-text-primary">
      <div className="max-w-[1580px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-platinum text-[10px] font-semibold uppercase tracking-wider mb-6 shadow-platinum-subtle">
            <Handshake className="w-3 h-3" />
            <span>Institutional Capital</span>
          </div>
          <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-7xl font-normal tracking-tight mb-6 text-text-primary">
            Joint Ventures &amp; Equity Models.
          </h1>
          <p className="text-text-secondary font-light text-lg sm:text-xl leading-relaxed max-w-2xl">
            We structure 50/50 co-development agreements and equity partnerships, connecting tier-1 developers with unencumbered, prime Dubai land positions.
          </p>
        </div>

        {/* Structure Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-24">
          {[
            {
              icon: Building2,
              title: "Land Contribution",
              desc: "Landowners inject unencumbered plots at a pre-agreed equity valuation, securing preferred returns from the final GDV without upfront capital output.",
            },
            {
              icon: Handshake,
              title: "Developer Execution",
              desc: "Tier-1 developers provide EPC financing, construction execution, and sales marketing, mitigating land acquisition costs and maximizing IRR.",
            },
            {
              icon: ShieldCheck,
              title: "Secure Escrow",
              desc: "All structures are governed by DLD-approved SPVs and strictly audited Escrow accounts, ensuring absolute security for both capital and asset.",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-midnight-card border border-white/5 p-8 rounded-3xl hover:bg-white/[0.02] transition-colors group">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-platinum mb-6 group-hover:scale-110 transition-transform duration-500">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium text-text-primary mb-3">{item.title}</h3>
              <p className="text-sm text-text-secondary font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Active JV Mandates */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
            <div>
              <h2 className="font-serif-heading text-3xl sm:text-4xl font-normal text-text-primary tracking-tight mb-2">
                Active JV Mandates
              </h2>
              <p className="text-text-secondary font-light text-sm max-w-lg">
                Exclusive land positions currently open for developer partnership. Full financial models available under NDA.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {JV_MANDATES.map((mandate) => (
              <div key={mandate.id} className="double-bezel p-1.5 rounded-[1.75rem] flex flex-col group hover:border-platinum/50 transition-colors duration-500">
                <div className="bg-midnight-card rounded-[calc(1.75rem-0.375rem)] p-6 sm:p-8 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <span className="inline-block px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-platinum/10 text-platinum border border-platinum/20">
                        {mandate.badge}
                      </span>
                    </div>
                    
                    <h3 className="font-serif-heading text-xl sm:text-2xl font-medium text-text-primary mb-2 line-clamp-2 group-hover:text-platinum transition-colors">
                      {mandate.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-xs text-text-secondary mb-6">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{mandate.location}</span>
                    </div>

                    <div className="space-y-4 mb-8">
                      <div>
                        <div className="text-[10px] uppercase tracking-wider text-text-secondary font-medium mb-1">Partner Requirement</div>
                        <div className="text-sm font-medium text-text-primary">{mandate.partnerNeed}</div>
                      </div>
                      <div className="pt-4 border-t border-white/5">
                        <div className="text-[10px] uppercase tracking-wider text-text-secondary font-medium mb-1">Land Injection</div>
                        <div className="text-sm font-medium text-text-primary">{mandate.landContribution}</div>
                      </div>
                      <div className="pt-4 border-t border-white/5">
                        <div className="text-[10px] uppercase tracking-wider text-text-secondary font-medium mb-1">Proposed Structure</div>
                        <div className="text-sm font-semibold text-platinum">{mandate.structure}</div>
                      </div>
                    </div>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-white/5 hover:bg-platinum text-text-primary hover:text-midnight text-xs font-semibold text-center transition-all flex items-center justify-center gap-2"
                  >
                    <span>Request Term Sheet</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
