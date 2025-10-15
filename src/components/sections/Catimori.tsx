// src/components/sections/Catimori.tsx
"use client";

import { Section, Card } from "@/components/ui/primitives";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Dict, Locale } from "@/i18n/config";

type Props = { t: Dict; locale: Locale };

export default function Catimori({ t, locale }: Props) {
  const eyebrow = locale === "en" ? "Crops" : "Cultivos";
  const title = locale === "en" ? "Catimor Coffee (Caturra × Timor cross)" : "Café Catimor (cruce Caturra x Timor)";

  const introES =
    "Cultivo y proceso cuidados para maximizar su potencial en taza.";
  const introEN =
    "Careful cultivation and processing to maximize cup potential.";

  const statsES: [string, string][] = [
    ["Variedad", "Catimor (cruce Caturra × Timor)"],
    ["Árboles sembrados", "510"],
    ["Cosechas al año", "2"],
    ["Producción anual", "~612 kg pergamino seco (≈ 490–510 kg café oro)"],
    [
      "Notas de taza",
      "Cacao oscuro, frutos secos, especias suaves; cuerpo medio y acidez balanceada",
    ],
    ["Trazabilidad", "Del árbol al beneficio y empaque"],
  ];

  const statsEN: [string, string][] = [
    ["Variety", "Catimor (Caturra × Timor cross)"],
    ["Trees planted", "510"],
    ["Harvests per year", "2"],
    ["Annual production", "~612 kg parchment (≈ 490–510 kg green coffee)"],
    [
      "Cup notes",
      "Dark cocoa, dried fruits, gentle spices; medium body and balanced acidity",
    ],
    ["Traceability", "From tree to wet mill and packing"],
  ];

  const stats = locale === "en" ? statsEN : statsES;

  return (
    <Section id="catimori" tone="alt" eyebrow={eyebrow} title={title}>
      <div className="space-y-8 md:space-y-0 md:grid md:gap-12 lg:gap-16 md:grid-cols-12 md:items-center">
        {/* Contenido - izquierda en desktop */}
        <div className="md:col-span-7">
          {/* Introducción */}
          <ScrollReveal>
            <div className="mb-8">
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                {locale === "en" ? introEN : introES}
              </p>
            </div>
          </ScrollReveal>

          {/* Estadísticas */}
          <dl className="space-y-4 mb-10">
            {stats.map(([label, value], idx) => (
              <ScrollReveal key={label} delay={idx * 0.05} duration={0.6}>
                <div className="border-b border-slate-200/80 pb-4 group hover:border-teal-500/50 transition-all duration-300">
                  <dt className="text-[0.6875rem] font-bold uppercase tracking-[0.15em] text-slate-500 mb-2.5">
                    {label}
                  </dt>
                  <dd className="text-slate-900 text-base font-semibold leading-snug">
                    {value}
                  </dd>
                </div>
              </ScrollReveal>
            ))}
          </dl>
        </div>

        {/* Imagen - derecha en desktop */}
        <div className="md:col-span-5">
          <ScrollReveal delay={0.3}>
            <figure className="group">
              <div className="relative overflow-hidden rounded-xl border border-slate-200/60 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                <picture>
                  <source
                    type="image/webp"
                    srcSet="/images/sections/catimori-collage-2400x1800.webp 2400w, /images/sections/catimori-collage-1600x1200.webp 1600w"
                    sizes="(min-width:1024px) 40vw, 100vw"
                  />
                  <source
                    type="image/jpeg"
                    srcSet="/images/sections/catimori-collage-2400x1800.jpg 2400w, /images/sections/catimori-collage-1600x1200.jpg 1600w"
                    sizes="(min-width:1024px) 40vw, 100vw"
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/sections/catimori-collage-1600x1200.jpg"
                    alt={
                      locale === "en"
                        ? "Catimor coffee collage: branch, cherries and harvest at the farm"
                        : "Collage de café Catimor: rama, cerezas y cosecha en la finca"
                    }
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
            </figure>
          </ScrollReveal>
        </div>
      </div>

      {/* Botón de disponibilidad */}
      <ScrollReveal delay={0.4}>
        <div className="flex justify-center md:justify-start mt-10">
          <a
            href="#contacto"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 text-slate-900 border-2 border-slate-300/80 hover:border-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-300 font-semibold shadow-sm hover:shadow-md hover:scale-[1.02]"
          >
            <span>{locale === "en" ? "Check availability" : "Consultar disponibilidad"}</span>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </ScrollReveal>
    </Section>
  );
}
