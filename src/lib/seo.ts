// src/lib/seo.ts
import type { Metadata } from "next";
import { CONFIG } from "@/lib/config";

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
}

export const defaultMetadata: Metadata = {
  // ⬇️ título limpio, sin “Sitio oficial”
  title: CONFIG.site.name,

  description: CONFIG.site.description ?? CONFIG.site.tagline,
  alternates: { canonical: "/" },

  openGraph: {
    title: CONFIG.site.name,
    siteName: CONFIG.site.name,
    url: "/",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: CONFIG.site.name
  }
};
