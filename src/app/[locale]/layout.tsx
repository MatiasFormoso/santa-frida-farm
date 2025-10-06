// src/app/[locale]/layout.tsx
import type { Metadata } from "next";

const BASE = "https://santa-frida-farm.vercel.app";
const LOCALES = ["es", "en"] as const;
type L = typeof LOCALES[number];

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export function generateMetadata(
  { params }: { params: { locale: L } }
): Metadata {
  const locale = params.locale;

  // 👇 Título unificado para ambos idiomas (usa "absolute" para ignorar templates del root)
  const titleAbs = "Santa Frida Farm — Conscious farming in Antioquia";

  // Descripción sigue por idioma (podés ajustar el copy si querés)
  const description =
    locale === "en"
      ? "Grown with love in Marinilla, Antioquia. Hass avocados, specialty coffee and fresh greens — conscious cultivation in eastern Antioquia."
      : "Café de especialidad y cultivo consciente en Marinilla, Antioquia.";

  return {
    title: { absolute: titleAbs },
    description,
    alternates: {
      languages: {
        "es-ES": `${BASE}/es`,
        en: `${BASE}/en`,
      },
    },
    openGraph: {
      title: titleAbs,
      description,
      url: `${BASE}/${locale}`,
      type: "website",
      locale: locale === "en" ? "en_US" : "es_ES",
    },
  };
}

// No envolvemos con <html>/<body> para no chocar con el root layout
export default function LocaleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
