// src/app/[locale]/cultivos/page.tsx
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Catimori from "@/components/sections/Catimori";
import HassSection from "@/components/sections/HassSection";
import Hortalizas from "@/components/sections/Hortalizas";
import { Container, Section } from "@/components/ui/primitives";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Locale } from "@/i18n/config";
import { getDictionary, type Dict } from "@/i18n/config";
import type { Metadata } from "next";
import CultivosNav from "./CultivosNav";

export const dynamic = "force-static";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const isEN = params.locale === "en";
  const title = isEN
    ? "Our Crops — Santa Frida Farm | Hass Avocado, Specialty Coffee & Fresh Greens"
    : "Nuestros Cultivos — Santa Frida Farm | Aguacate Hass, Café de Especialidad y Hortalizas";
  const description = isEN
    ? "Discover our Hass avocado, Catimor specialty coffee and fresh seasonal vegetables. Sustainable cultivation with full traceability in Marinilla, Antioquia."
    : "Descubrí nuestro aguacate Hass, café Catimor de especialidad y hortalizas frescas de temporada. Cultivo sostenible con trazabilidad completa en Marinilla, Antioquia.";

  return {
    title,
    description,
    keywords: [
      "aguacate hass colombia",
      "café catimor",
      "café de especialidad",
      "hortalizas orgánicas",
      "cultivo sostenible",
      "trazabilidad agrícola",
      "agricultura marinilla",
      "productos agrícolas antioquia",
    ],
    alternates: {
      canonical: `/${params.locale}/cultivos`,
      languages: { es: "/es/cultivos", en: "/en/cultivos" },
    },
    openGraph: {
      type: "website",
      title,
      description,
      locale: isEN ? "en_US" : "es_CO",
      alternateLocale: isEN ? "es_CO" : "en_US",
      images: [
        {
          url: "/images/sections/hass-collage-1600x1200.webp",
          width: 1200,
          height: 630,
          alt: isEN
            ? "Hass avocados, specialty coffee and fresh greens from Santa Frida Farm"
            : "Aguacates Hass, café de especialidad y hortalizas frescas de Santa Frida Farm",
          type: "image/webp",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/sections/hass-collage-1600x1200.webp"],
    },
  };
}

export default async function CultivosPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const isEN = locale === "en";
  const t: Dict = await getDictionary(locale);

  return (
    <main className="min-h-screen bg-white">
      <Header t={t} locale={locale} />

      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 via-emerald-50/30 to-white" />
        <Container className="relative">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <div className="inline-flex items-center rounded-full border border-emerald-200/70 bg-emerald-50/60 px-4 py-2 text-sm font-semibold text-emerald-700 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 mr-2" />
                {isEN ? "Our Crops" : "Nuestros Cultivos"}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.06}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-tight mb-6">
                {isEN ? "Our Crops" : "Nuestros Cultivos"}
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                {isEN
                  ? "Sustainable cultivation with full traceability from tree to packing. Quality, care and tradition in every harvest."
                  : "Cultivo sostenible con trazabilidad completa del árbol al empaque. Calidad, cuidado y tradición en cada cosecha."}
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Sticky Navigation */}
      <CultivosNav locale={locale} />

      {/* Sección Hass */}
      <HassSection t={t} locale={locale} />

      {/* Sección Catimor */}
      <Catimori t={t} locale={locale} />

      {/* Sección Hortalizas */}
      <Hortalizas t={t} locale={locale} />

      {/* Call to Action */}
      <Section tone="alt" className="py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-6">
                {isEN ? "Interested in our products?" : "¿Te interesan nuestros productos?"}
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {isEN
                  ? "Get in touch with us to check availability, pricing and delivery options for our crops."
                  : "Contactanos para conocer disponibilidad, precios y opciones de entrega de nuestros cultivos."}
              </p>
              <a
                href={`/${locale}/contacto`}
                className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02]"
              >
                <span>{isEN ? "Contact us" : "Contactanos"}</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      <Footer t={t} locale={locale} />
    </main>
  );
}
