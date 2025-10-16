// src/lib/seo.ts
import type { Metadata } from "next";
import { CONFIG } from "@/lib/config";

/**
 * Devuelve la URL absoluta del sitio garantizando protocolo y sin barra final.
 * Prioriza:
 * 1) CONFIG.site.url
 * 2) NEXT_PUBLIC_SITE_URL
 * 3) VERCEL_URL (llega sin protocolo)
 * 4) localhost
 */
export function getSiteUrl(): string {
  // Aseguramos que el tipo sea string, no un literal "as const"
  const fromConfig: string | undefined = (CONFIG as any)?.site?.url;
  const fromEnv: string | undefined =
    process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL;

  let url: string = fromConfig || fromEnv || "http://localhost:3000";

  // Si viene sin http/https (caso típico de Vercel: "my-app.vercel.app"), lo normalizamos
  if (!/^https?:\/\//i.test(url)) {
    url = `https://${url}`;
  }

  // Quitamos barras finales redundantes
  url = url.replace(/\/+$/, "");
  return url;
}

const fallbackDescription =
  ((CONFIG as any)?.site?.description as string | undefined) ||
  ((CONFIG as any)?.site?.tagline as string | undefined) ||
  "Santa Frida Farm";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: (CONFIG as any)?.site?.name || "Santa Frida Farm",
    template: `%s — ${(CONFIG as any)?.site?.name || "Santa Frida Farm"}`,
  },
  description: fallbackDescription,
  keywords: (CONFIG as any)?.site?.keywords || "aguacate hass, café especialidad, hortalizas orgánicas, agricultura colombia",
  authors: [{ name: "Santa Frida Farm" }],
  creator: "Santa Frida Farm",
  publisher: "Santa Frida Farm",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: getSiteUrl(),
    siteName: (CONFIG as any)?.site?.name || "Santa Frida Farm",
    title: (CONFIG as any)?.site?.name || "Santa Frida Farm",
    description: fallbackDescription,
    images: [
      {
        url: "/images/hero-1920-optimized.webp",
        width: 1920,
        height: 1080,
        alt: "Vista panorámica de Santa Frida Farm en Marinilla, Antioquia - Cultivos de aguacate Hass, café y hortalizas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: (CONFIG as any)?.site?.name || "Santa Frida Farm",
    description: fallbackDescription,
    images: ["/images/hero-1920-optimized.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
