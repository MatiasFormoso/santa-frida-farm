// src/components/sections/Hortalizas.tsx
"use client";

import { Section, Card } from "@/components/ui/primitives";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Dict, Locale } from "@/i18n/config";

type Props = { t: Dict; locale: Locale };

export default function Hortalizas({ t, locale }: Props) {
  const eyebrow = locale === "en" ? "Crops" : "Cultivos";
  const title = locale === "en" ? "Fresh Greens" : "Hortalizas frescas";

  const introES =
    "Huerto de temporada con cosecha manual y manejo responsable del cultivo.";
  const introEN =
    "Seasonal garden with hand-picked harvest and responsible crop management.";

  const statsES: [string, string][] = [
    ["Variedades clave", "Lechuga (verde y morada), repollo/col, ají picante, calabacín, uchuva"],
    ["Prácticas", "Siembra/trasplante, riego y cosecha manual según madurez"],
    ["Disponibilidad", "Sujeta a temporada y volumen de cosecha"],
    ["Presentación", "Producto fresco (a granel o por unidad)"],
    ["Trazabilidad", "Del cultivo al empaque"],
    ["Ubicación", "Marinilla · Antioquia"],
  ];

  const statsEN: [string, string][] = [
    ["Key varieties", "Lettuce (green & red), cabbage/cole, hot chili, zucchini, cape gooseberry"],
    ["Practices", "Planting/transplanting, irrigation and hand harvest by ripeness"],
    ["Availability", "Seasonal and volume-dependent"],
    ["Presentation", "Fresh produce (bulk or unit)"],
    ["Traceability", "From field to packing"],
    ["Location", "Marinilla · Antioquia"],
  ];

  const stats = locale === "en" ? statsEN : statsES;

  return (
    <Section id="hortalizas" eyebrow={eyebrow} title={title}>
      <div>
        {/* Contenido */}
        <div>
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
