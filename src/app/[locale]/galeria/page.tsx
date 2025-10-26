// src/app/[locale]/galeria/page.tsx
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import InstagramStrip from "@/components/sections/InstagramStrip";
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
    ? "Gallery — Santa Frida Farm | Community and Farm Life"
    : "Galería — Santa Frida Farm | Comunidad y Vida en Finca";
  const description = isEN
    ? "Discover the daily life at Santa Frida Farm. Harvests, processes and moments captured from our farm in Marinilla, Antioquia."
    : "Descubrí el día a día en Santa Frida Farm. Cosechas, procesos y momentos capturados desde nuestra finca en Marinilla, Antioquia.";

  return {
    title,
    description,
    keywords: [
      "galería santa frida farm",
      "fotografía agrícola",
      "vida en finca",
      "comunidad agrícola",
    ],
    alternates: {
      canonical: `/${params.locale}/galeria`,
      languages: { es: "/es/galeria", en: "/en/galeria" },
    },
  };
}

export default async function GaleriaPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const t: Dict = await getDictionary(locale);

  return (
    <main className="min-h-screen bg-white">
      <Header t={t} locale={locale} />

      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden bg-gradient-to-b from-emerald-50/50 via-emerald-50/30 to-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2U0ZTdlYiIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMyIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40" />
        <Container className="relative">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <div className="inline-flex items-center rounded-full border border-emerald-200/70 bg-emerald-50/60 px-4 py-2 text-sm font-semibold text-emerald-700 mb-6">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                  <path
                    fillRule="evenodd"
                    d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {t.gallery.eyebrow}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.06}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
                {t.gallery.title}
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                {t.gallery.intro}
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Informative Section */}
      <section className="relative py-16 sm:py-20 bg-white">
        <Container className="relative">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <ScrollReveal>
                <div className="h-full flex flex-col p-8 rounded-2xl bg-gradient-to-br from-emerald-50/80 to-emerald-50/40 border border-emerald-100/60 hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-emerald-600 flex items-center justify-center shadow-sm">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 min-h-[3rem] flex items-center justify-center">
                    {locale === "en" ? "Quality Production" : "Producción de calidad"}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed flex-grow">
                    {locale === "en"
                      ? "From seed to harvest, we ensure the highest quality standards."
                      : "Desde la siembra hasta la cosecha, aseguramos los más altos estándares de calidad."}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="h-full flex flex-col p-8 rounded-2xl bg-gradient-to-br from-emerald-50/80 to-emerald-50/40 border border-emerald-100/60 hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-emerald-600 flex items-center justify-center shadow-sm">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 min-h-[3rem] flex items-center justify-center">
                    {locale === "en" ? "Sustainable Practices" : "Prácticas sostenibles"}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed flex-grow">
                    {locale === "en"
                      ? "Respect for the environment and responsible cultivation."
                      : "Respeto por el medio ambiente y cultivo responsable."}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="h-full flex flex-col p-8 rounded-2xl bg-gradient-to-br from-emerald-50/80 to-emerald-50/40 border border-emerald-100/60 hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-emerald-600 flex items-center justify-center shadow-sm">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 min-h-[3rem] flex items-center justify-center">
                    {locale === "en" ? "Community Connection" : "Vínculo comunitario"}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed flex-grow">
                    {locale === "en"
                      ? "Learning, sharing and growing together."
                      : "Aprendiendo, compartiendo y creciendo juntos."}
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Instagram Strip Section */}
      <InstagramStrip t={t} locale={locale} />

      <Footer t={t} locale={locale} />
    </main>
  );
}
