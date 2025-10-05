// src/lib/seo.ts
import type { Metadata } from "next";
import { CONFIG } from "@/lib/config";

export function getSiteUrl() {
  const url = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  return url || "http://localhost:3000";
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: `${CONFIG.site.name} — Sitio oficial`,
  description: CONFIG.site.description,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: CONFIG.site.name,
    title: `${CONFIG.site.name} — Sitio oficial`,
    description: CONFIG.site.description,
    url: "/",
    images: ["/opengraph-image"], // generado abajo
  },
  twitter: { card: "summary_large_image" },
};
