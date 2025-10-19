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
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "any", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      { rel: "maskable", url: "/icon-maskable-512.png", sizes: "512x512" },
      { rel: "icon", url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/icon-512.png", sizes: "512x512", type: "image/png" }
    ],
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
    description: "Agricultura familiar consciente en Marinilla, Antioquia",
    potentialAction: {
      "@type": "SearchAction",
      target: `${getSiteUrl()}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang={CONFIG.site.lang} className="scroll-smooth">
      <head>
        {/* Favicon específico para Google */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
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
