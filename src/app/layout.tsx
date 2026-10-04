import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "PALC Real Estate | Off-Market Dubai Plots & Development Land",
  description:
    "Private land advisory operating exclusively in Dubai's premier communities. Direct transactions between landowners and institutional developers with zero middleman distortion.",
  icons: {
    icon: "/favicon.ico",
  },
};

import { PageTransition } from "@/components/page-transition";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cormorant.variable} ${jakarta.variable} antialiased selection:bg-[#D3D4D8]/30 selection:text-[#F2F2F2]`}
    >
      <body
        suppressHydrationWarning
        className="min-h-[100dvh] flex flex-col bg-midnight text-text-primary overflow-x-hidden"
      >
        <Navbar />
        <main className="flex-1 w-full flex flex-col relative overflow-hidden">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
