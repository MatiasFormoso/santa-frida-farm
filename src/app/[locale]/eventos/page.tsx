// src/app/[locale]/eventos/page.tsx
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import EventsGallery from "@/components/sections/EventsGallery";
import { Container } from "@/components/ui/primitives";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Locale } from "@/i18n/config";
import { getDictionary, type Dict } from "@/i18n/config";
import type { Metadata } from "next";

export const dynamic = "force-static";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const isEN = params.locale === "en";
  const title = isEN ? "Events — Santa Frida Farm" : "Eventos — Santa Frida Farm";
  const description = isEN
    ? "Discover the events and community activities at Santa Frida Farm in Marinilla, Antioquia."
    : "Descubrí los eventos y actividades de la comunidad en Santa Frida Farm en Marinilla, Antioquia.";

  return {
    title,
    description,
    keywords: [
      "eventos agrícolas",
      "eventos marinilla",
      "actividades comunitarias",
      "agricultura colombia",
    ],
    alternates: {
      canonical: `/${params.locale}/eventos`,
      languages: { es: "/es/eventos", en: "/en/eventos" },
    },
  };
}

export default async function EventosPage({ params }: { params: { locale: Locale } }) {
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
                {isEN ? "Events" : "Eventos"}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.06}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-tight mb-6">
                {isEN ? "Events" : "Eventos"}
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                {isEN
                  ? "Events, fairs and community activities at Santa Frida Farm."
                  : "Eventos, ferias y actividades de la comunidad en Santa Frida Farm."}
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Separador decorativo */}
      <div className="relative w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {/* Events Gallery Section */}
      <EventsGallery t={t} locale={locale} />

      <Footer t={t} locale={locale} />
    </main>
  );
}
