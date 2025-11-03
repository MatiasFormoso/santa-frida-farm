// src/app/[locale]/contacto/page.tsx
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Contact from "@/components/sections/Contact";
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
  const title = isEN
    ? "Contact — Santa Frida Farm | Get in Touch"
    : "Contacto — Santa Frida Farm | Estamos Aquí";
  const description = isEN
    ? "Contact Santa Frida Farm. WhatsApp, email and location in Marinilla, Antioquia. We're here to answer your questions about our crops."
    : "Contactá a Santa Frida Farm. WhatsApp, correo electrónico y ubicación en Marinilla, Antioquia. Estamos para responder tus consultas.";

  return {
    title,
    description,
    keywords: [
      "contacto santa frida farm",
      "whatsapp",
      "ubicación marinilla",
      "cultivo aguacate colombia",
    ],
    alternates: {
      canonical: `/${params.locale}/contacto`,
      languages: { es: "/es/contacto", en: "/en/contacto" },
    },
  };
}

export default async function ContactoPage({ params }: { params: { locale: Locale } }) {
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
                {isEN ? "Contact" : "Contacto"}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.06}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-tight mb-6">
                {isEN ? "Get in Touch" : "Estamos Aquí"}
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                {isEN
                  ? "We're here to answer your questions about our crops, availability and farming practices."
                  : "Estamos para responder tus consultas sobre nuestros cultivos, disponibilidad y prácticas agrícolas."}
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Separador decorativo */}
      <div className="relative w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {/* Contact Section */}
      <Contact t={t} locale={locale} />

      {/* Separador decorativo */}
      <div className="relative w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {/* Additional Info Section */}
      <section className="py-20 bg-slate-50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ScrollReveal delay={0.1}>
                <div className="p-6 rounded-xl border border-slate-200 bg-white hover:border-emerald-300 hover:shadow-md transition-all duration-300 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-5">
                    <svg
                      className="w-6 h-6 text-emerald-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    {isEN ? "Response Time" : "Tiempo de Respuesta"}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                    {isEN
                      ? "We typically respond within 24 hours. For urgent matters, please use WhatsApp for immediate assistance."
                      : "Generalmente respondemos en menos de 24 horas. Para asuntos urgentes, usa WhatsApp para asistencia inmediata."}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div className="p-6 rounded-xl border border-slate-200 bg-white hover:border-emerald-300 hover:shadow-md transition-all duration-300 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-5">
                    <svg
                      className="w-6 h-6 text-emerald-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    {isEN ? "What We Can Help With" : "¿En Qué Te Podemos Ayudar?"}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                    {isEN
                      ? "Product availability, cultivation inquiries, collaboration opportunities, and general information about our farming practices."
                      : "Disponibilidad de productos, consultas sobre cultivos, oportunidades de colaboración e información general sobre nuestras prácticas agrícolas."}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="p-6 rounded-xl border border-slate-200 bg-white hover:border-emerald-300 hover:shadow-md transition-all duration-300 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-5">
                    <svg
                      className="w-6 h-6 text-emerald-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    {isEN ? "Business Hours" : "Horarios de Atención"}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                    {isEN
                      ? "We are available Monday through Friday from 8:00 AM to 6:00 PM. For urgent inquiries, please contact us via WhatsApp at any time."
                      : "Estamos disponibles de lunes a viernes de 8:00 AM a 6:00 PM. Para consultas urgentes, contáctenos por WhatsApp en cualquier momento."}
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      <Footer t={t} locale={locale} />
    </main>
  );
}
