// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { defaultMetadata, getSiteUrl } from "@/lib/seo";
import { CONFIG } from "@/lib/config";
import { Inter } from "next/font/google";

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

function OrgJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: CONFIG.site.name,
    url: getSiteUrl(),
    sameAs: [CONFIG.contact.instagram],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: CONFIG.site.name,
    url: getSiteUrl(),
    potentialAction: {
      "@type": "SearchAction",
      target: `${getSiteUrl()}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={CONFIG.site.lang} className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-white text-stone-800`}>
        {children}
        <OrgJsonLd />
        <WebSiteJsonLd />
      </body>
    </html>
  );
}
