import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageContext";
import { MainLayout } from "@/components/MainLayout";

export const metadata: Metadata = {
  title: "Mahiti Chakra Help Portal | ಕರ್ನಾಟಕದ #1 ಡಿಜಿಟಲ್ ಸಹಾಯ ಪೋರ್ಟಲ್",
  description: "All-in-one Karnataka digital help portal with 33+ apps, live gold/fuel rates, APMC crop prices, photo resizer & finance calculators.",
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
      <body className="antialiased min-h-screen bg-slate-50 text-slate-900">
        <LanguageProvider>
          <MainLayout>
            {children}
          </MainLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}
