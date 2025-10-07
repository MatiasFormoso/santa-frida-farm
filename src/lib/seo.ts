// src/lib/seo.ts
import type { Metadata } from "next";
import { CONFIG } from "@/lib/config";

export function getSiteUrl() {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    "https://example.com"
  );
}

const FALLBACK_DESCRIPTION =
  "Santa Frida Farm — family farm in Marinilla, Antioquia.";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: CONFIG.site.name,
    template: `%s — ${CONFIG.site.name}`,
  },
  description: FALLBACK_DESCRIPTION,
  openGraph: {
    title: CONFIG.site.name,
    description: FALLBACK_DESCRIPTION,
    url: getSiteUrl(),
    type: "website",
    siteName: CONFIG.site.name,
    images: ["/opengraph-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: CONFIG.site.name,
    description: FALLBACK_DESCRIPTION,
    images: ["/opengraph-image.png"],
  },
};
