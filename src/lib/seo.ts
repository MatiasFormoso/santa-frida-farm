// src/lib/seo.ts
import { CONFIG } from "@/lib/config";
import type { Metadata } from "next";

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

// const fallbackDescription =
//   ((CONFIG as any)?.site?.description as string | undefined) ||
//   ((CONFIG as any)?.site?.tagline as string | undefined) ||
//   "Santa Frida Farm";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Santa Frida Farm — Cultivo consciente en Marinilla, Antioquia | Aguacate Hass y Café Catimor",
    template: "%s | Santa Frida Farm — Agricultura familiar en Antioquia",
  },
  description: "Finca familiar en Marinilla, Antioquia. Cultivamos aguacate Hass, café Catimor de especialidad y hortalizas orgánicas con amor y cuidado del entorno. Agricultura consciente en el oriente antioqueño.",
  keywords: [
    "aguacate hass colombia",
    "café catimor antioquia", 
    "hortalizas orgánicas marinilla",
    "exportación agrícola colombia",
    "export aguacate emiratos arabes",
    "export coffee canada",
    "aguacate hass emiratos arabes unidos",
    "café especialidad canadá",
    "exportación hortalizas colombia",
    "agricultura sostenible",
    "trazabilidad alimentaria",
    "finca familiar antioquia",
    "cultivo consciente",
    "maría yennis silgado",
    "santa frida farm",
    "café de especialidad colombia",
    "aguacate hass colombia",
    "hortalizas frescas antioquia",
    "agricultura familiar colombia",
    "productos agrícolas exportación",
    "finca marinilla antioquia",
    "café caturra timor",
    "cultivo sostenible colombia",
    "trazabilidad del campo a la mesa",
    "agricultura regenerativa antioquia",
    "export colombia uae",
    "export colombia canada",
    "agricultural exports colombia",
    "agricultural exports colombia",
    "specialty coffee exporter",
    "organic vegetables exporter",
    "colombian agricultural products",
    "international food export",
    "certified organic farming colombia",
    "sustainable agriculture export",
    "food traceability colombia",
    "agricultural supply chain colombia",
    // Keywords comerciales para SEO (no visibles en página)
    "premium avocado exporter",
    "premium coffee exporter", 
    "agricultural export leader",
    "premium agricultural products",
    "exportador premium colombia",
    "calidad premium agrícola",
    "mejor exportador aguacate",
    "líder exportación café colombia"
  ],
  authors: [{ 
    name: "María Yennis Silgado", 
    url: "https://santafridafarm.com" 
  }],
  creator: "Santa Frida Farm",
  publisher: "Santa Frida Farm",
  category: "Agriculture",
  classification: "Agricultural Products",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "es": "/es",
      "en": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    alternateLocale: "en_US",
    url: getSiteUrl(),
    siteName: "Santa Frida Farm",
    title: "Santa Frida Farm — Agricultura consciente en Marinilla, Antioquia",
    description: "Finca familiar en Marinilla, Antioquia. Cultivamos aguacate Hass, café Catimor de especialidad y hortalizas orgánicas con amor y cuidado del entorno.",
    images: [
      {
        url: "/images/hero-1920-optimized.webp",
        width: 1920,
        height: 1080,
        alt: "Vista panorámica de Santa Frida Farm en Marinilla, Antioquia - Cultivos de aguacate Hass, café Catimor y hortalizas orgánicas",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Santa Frida Farm — Agricultura familiar en Antioquia",
    description: "Finca familiar en Marinilla, Antioquia. Cultivamos aguacate Hass, café Catimor de especialidad y hortalizas orgánicas con amor y cuidado del entorno.",
    images: ["/images/hero-1920-optimized.webp"],
    creator: "@santafridafarm",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  ...(process.env.GOOGLE_SITE_VERIFICATION && {
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    }
  }),
  other: {
    "geo.region": "CO-ANT",
    "geo.placename": "Marinilla, Antioquia, Colombia",
    "geo.position": "6.216000;-75.284000",
    "ICBM": "6.216000, -75.284000",
    "DC.title": "Santa Frida Farm - Agricultura Familiar",
    "DC.description": "Productor de aguacate Hass, café Catimor y hortalizas orgánicas",
    "DC.subject": "Agricultura, Aguacate Hass, Café de Especialidad, Hortalizas Orgánicas",
    "DC.creator": "María Yennis Silgado",
    "DC.publisher": "Santa Frida Farm",
    "DC.contributor": "Santa Frida Farm",
    "DC.type": "Agricultural Business",
    "DC.format": "text/html",
    "DC.identifier": getSiteUrl(),
    "DC.source": getSiteUrl(),
    "DC.language": "es",
    "DC.relation": "https://santafridafarm.com",
    "DC.coverage": "Marinilla, Antioquia, Colombia",
    "DC.rights": "Copyright Santa Frida Farm",
  },
};
