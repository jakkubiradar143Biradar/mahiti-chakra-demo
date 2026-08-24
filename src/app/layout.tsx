import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Daily Rates & Smart Calculators Hub | ದೈನಂದಿನ ದರಗಳು ಮತ್ತು ಕ್ಯಾಲ್ಕುಲೇಟರ್‌ಗಳು",
  description: "Live 24K/22K Gold, Silver, Petrol, Diesel, Krushi & Grocery Prices in Karnataka with Loan EMI, Age, GST, SIP, and Tax Calculators.",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#f59e0b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kn" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col justify-between bg-slate-50 text-slate-900">
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
