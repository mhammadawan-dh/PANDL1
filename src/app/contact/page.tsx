import { Phone, Mail, MapPin, Building2, ShieldCheck, ArrowRight } from "lucide-react";
import { PALC_COMPANY_INFO } from "@/lib/plots-data";

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${PALC_COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
    `Hello PALC Team, I would like to schedule a private advisory consultation regarding Dubai plots.`
  )}`;

  return (
    <div className="flex-1 w-full bg-midnight min-h-screen pt-32 pb-24 text-text-primary">
      <div className="max-w-[1580px] mx-auto px-6 sm:px-10 lg:px-16 2xl:px-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Context & Info */}
          <div className="space-y-12">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-platinum text-[10px] font-semibold uppercase tracking-wider mb-6 shadow-platinum-subtle">
                <ShieldCheck className="w-3 h-3" />
                <span>Strictly Confidential</span>
              </div>
              <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight mb-6 text-text-primary">
                Private Advisory Desk.
              </h1>
              <p className="text-text-secondary font-light text-lg leading-relaxed">
                To maintain the integrity of our off-market portfolio, all acquisitions and joint ventures are handled directly by our senior partners under strict NDA.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <div className="text-[10px] uppercase tracking-wider text-text-secondary font-semibold mb-2">Corporate Headquarters</div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-platinum shrink-0 mt-0.5" />
                  <div className="text-sm font-light text-text-primary leading-relaxed max-w-sm">
                    {PALC_COMPANY_INFO.address}
                  </div>
                </div>
              </div>

              <div>
                <div className="text-[10px] uppercase tracking-wider text-text-secondary font-semibold mb-2">Direct Communication</div>
                <div className="space-y-4">
                  <a href={`tel:${PALC_COMPANY_INFO.phone.replace(/\s+/g, "")}`} className="flex items-center gap-3 group">
                    <Phone className="w-5 h-5 text-platinum shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-text-primary group-hover:text-platinum transition-colors">{PALC_COMPANY_INFO.phone}</span>
                  </a>
                  <a href={`mailto:${PALC_COMPANY_INFO.email}`} className="flex items-center gap-3 group">
                    <Mail className="w-5 h-5 text-platinum shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-text-primary group-hover:text-platinum transition-colors">{PALC_COMPANY_INFO.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Secure Form */}
          <div className="double-bezel p-1.5 rounded-[2rem] h-fit">
            <div className="bg-midnight-card rounded-[calc(2rem-0.375rem)] p-8 sm:p-10">
              <h2 className="font-serif-heading text-2xl font-medium text-text-primary mb-8">Submit Mandate Requirement</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-wider text-text-secondary font-medium pl-1">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-midnight border-b border-white/10 px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-platinum transition-colors placeholder:text-text-secondary/30"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-wider text-text-secondary font-medium pl-1">Company / Institution</label>
                    <input 
                      type="text" 
                      className="w-full bg-midnight border-b border-white/10 px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-platinum transition-colors placeholder:text-text-secondary/30"
                      placeholder="Enter company name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-wider text-text-secondary font-medium pl-1">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-midnight border-b border-white/10 px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-platinum transition-colors placeholder:text-text-secondary/30"
                    placeholder="you@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-wider text-text-secondary font-medium pl-1">Inquiry Type</label>
                  <select className="w-full bg-midnight border-b border-white/10 px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-platinum transition-colors appearance-none cursor-pointer">
                    <option value="" disabled selected className="text-text-secondary">Select an option</option>
                    <option value="acquisition">Plot Acquisition</option>
                    <option value="disposition">Sell/Dispose Plot</option>
                    <option value="jv">Joint Venture Partnership</option>
                    <option value="general">General Advisory</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-wider text-text-secondary font-medium pl-1">Confidential Details</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-midnight border-b border-white/10 px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-platinum transition-colors placeholder:text-text-secondary/30 resize-none"
                    placeholder="Provide details regarding target location, GFA requirements, or JV structure..."
                  />
                </div>

                <div className="pt-4">
                  <button 
                    type="button"
                    className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-platinum hover:bg-platinum-light text-midnight text-sm font-semibold transition-all shadow-platinum-subtle active:scale-[0.98]"
                  >
                    <span>Submit Securely</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] text-text-secondary text-center mt-4">
                    By submitting, you agree to our confidential handling of your data.
                  </p>
                </div>
              </form>

              <div className="mt-8 pt-8 border-t border-white/10">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-emerald-950/30 hover:bg-emerald-900/50 text-emerald-400 border border-emerald-500/20 text-sm font-semibold transition-all"
                >
                  Connect Directly via WhatsApp
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
