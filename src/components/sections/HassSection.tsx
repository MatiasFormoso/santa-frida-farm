"use client";

import { Section } from "@/components/ui/primitives";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Dict, Locale } from "@/i18n/config";

type Props = { t: Dict; locale: Locale };

export default function HassSection({ locale }: Props) {
  const eyebrow = locale === "en" ? "Crops" : "Cultivos";
  const title = locale === "en" ? "Hass Avocado" : "Aguacate Hass";

  const introES =
    "Producción sostenible con control de calidad desde el árbol hasta el empaque y trazabilidad por lote.";
  const introEN =
    "Sustainable production with quality control from tree to packing and full lot traceability.";

  const statsES: [string, string][] = [
    ["Árboles cultivados", "100"],
    ["Producción estimada", "~7.000 kg/año (≈ 7 t)"],
    ["Cosechas", "2 por año (según clima y manejo)"],
    ["Calidad", "Selección manual bajo estándares premium"],
    ["Disponibilidad", "Mercado nacional e internacional"],
    ["Trazabilidad", "Del árbol al empaque"],
  ];

  const statsEN: [string, string][] = [
    ["Trees planted", "100"],
    ["Estimated production", "~7,000 kg/year (≈ 7 t)"],
    ["Harvests", "2 per year (weather and management dependent)"],
    ["Quality", "Hand selection to premium standards"],
    ["Availability", "Domestic and international markets"],
    ["Traceability", "From tree to packing"],
  ];

  const stats = locale === "en" ? statsEN : statsES;

  return (
    <Section id="hass" eyebrow={eyebrow} title={title} tone="alt">
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


