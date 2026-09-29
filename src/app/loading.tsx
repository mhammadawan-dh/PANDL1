import Image from "next/image";

export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#fafbfc]">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <div className="relative w-16 h-16 rounded-full flex items-center justify-center">
            <Image
              src="/images/palc-logo-dark.png"
              alt="Loading PALC Dossier"
              fill
              className="object-contain animate-pulse"
            />
          </div>
          <div className="absolute -inset-2 rounded-full border border-[#b8441c]/20 animate-ping opacity-40" />
        </div>
        <div className="text-center space-y-1">
          <span className="text-xs font-bold uppercase tracking-widest text-[#121417] block">
            Loading Land Dossier
          </span>
          <span className="text-[10px] text-gray-400 tracking-wider font-medium uppercase">
            Plots &amp; Lands Company • Dubai
          </span>
        </div>
      </div>
    </div>
  );
}
