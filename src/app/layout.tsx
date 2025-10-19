// src/app/layout.tsx
import { CONFIG } from "@/lib/config";
import { defaultMetadata, getSiteUrl } from "@/lib/seo";
import { generateOrganizationStructuredData } from "@/lib/structured-data";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  ...defaultMetadata,
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [{ rel: "maskable", url: "/icon-maskable-512.png" }],
  },
};

// Fuente profesional (display: swap para performance)
const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // JSON-LD estructurado optimizado para SEO
  const orgJson = generateOrganizationStructuredData("es");

  const websiteJson = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: CONFIG.site.name,
    url: getSiteUrl(),
    description: "Premium agricultural exporter from Antioquia, Colombia to UAE and Canada",
    potentialAction: {
      "@type": "SearchAction",
      target: `${getSiteUrl()}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang={CONFIG.site.lang} className="scroll-smooth">
      <head>
        {/* Render en SSR y antes de hidratar: evita mismatches */}
        <Script
          id="org-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJson) }}
        />
        <Script
          id="website-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJson) }}
        />
      </head>
      <body className={`${inter.className} min-h-screen bg-white text-stone-800`}>
        {children}
      </body>
    </html>
  );
}
