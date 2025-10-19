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
    default: "Santa Frida Farm — Exportador Premium a Emiratos Árabes y Canadá | Aguacate Hass y Café Catimor",
    template: "%s | Santa Frida Farm — Exportaciones Agrícolas Premium a UAE y Canadá",
  },
  description: "Finca familiar premium en Marinilla, Antioquia. Exportador líder de aguacate Hass, café Catimor de especialidad y hortalizas orgánicas a Emiratos Árabes Unidos y Canadá. Cultivo consciente, trazabilidad completa y certificaciones internacionales.",
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
    "aguacate hass premium",
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
    "premium avocado exporter",
    "specialty coffee exporter",
    "organic vegetables exporter",
    "colombian agricultural products",
    "international food export",
    "certified organic farming colombia",
    "sustainable agriculture export",
    "food traceability colombia",
    "agricultural supply chain colombia"
  ],
  authors: [{ 
    name: "María Yennis Silgado", 
    url: "https://santafridafarm.com" 
  }],
  creator: "Santa Frida Farm",
  publisher: "Santa Frida Farm",
  category: "Agriculture",
  classification: "Premium Agricultural Products",
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
    title: "Santa Frida Farm — Exportador Premium a Emiratos Árabes y Canadá",
    description: "Exportador líder de aguacate Hass, café Catimor de especialidad y hortalizas orgánicas a Emiratos Árabes Unidos y Canadá. Finca familiar premium en Marinilla, Antioquia con certificaciones internacionales.",
    images: [
      {
        url: "/images/hero-1920-optimized.webp",
        width: 1920,
        height: 1080,
        alt: "Vista panorámica de Santa Frida Farm en Marinilla, Antioquia - Cultivos premium de aguacate Hass, café Catimor y hortalizas orgánicas",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Santa Frida Farm — Exportador a Emiratos Árabes y Canadá",
    description: "Exportador líder de aguacate Hass, café Catimor de especialidad y hortalizas orgánicas a Emiratos Árabes Unidos y Canadá. Finca premium en Marinilla, Antioquia.",
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
    "DC.title": "Santa Frida Farm - Agricultura Premium",
    "DC.description": "Productor premium de aguacate Hass, café Catimor y hortalizas orgánicas",
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
