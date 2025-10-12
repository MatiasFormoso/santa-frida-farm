// src/components/sections/Hass.tsx
import { Section, Card } from "@/components/ui/primitives";
import type { Dict, Locale } from "@/i18n/config";

type Props = { t: Dict; locale: Locale };

export default function Hass({ t, locale }: Props) {
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
    <Section id="hass" eyebrow={eyebrow} title={title}>
      {/* Mobile: título -> tarjetas -> foto -> botón */}
      <div className="space-y-8 md:space-y-0 md:grid md:gap-16 md:grid-cols-12 md:items-center">
        {/* Contenido - izquierda en desktop */}
        <div className="md:col-span-7">
          {/* Introducción */}
          <div className="mb-10">
            <p className="text-slate-600 text-lg leading-relaxed">
              {locale === "en" ? introEN : introES}
            </p>
          </div>

          {/* Tarjetas de estadísticas */}
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {stats.map(([label, value]) => (
              <Card
                key={label}
                variant="elevated"
                className="p-6 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <dt className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-3">
                  {label}
                </dt>
                <dd className="text-slate-900 font-bold text-lg leading-tight">
                  {value}
                </dd>
              </Card>
            ))}
          </dl>
        </div>

        {/* Imagen - derecha en desktop */}
        <div className="md:col-span-5">
          <figure className="group">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 ring-1 ring-slate-200/40 shadow-lg hover:shadow-xl transition-all duration-500">
              <picture>
                <source
                  type="image/webp"
                  srcSet="/images/sections/hass-collage-2400x1800.webp 2400w, /images/sections/hass-collage-1600x1200.webp 1600w"
                  sizes="(min-width:1024px) 40vw, 100vw"
                />
                <source
                  type="image/jpeg"
                  srcSet="/images/sections/hass-collage-2400x1800.jpg 2400w, /images/sections/hass-collage-1600x1200.jpg 1600w"
                  sizes="(min-width:1024px) 40vw, 100vw"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/sections/hass-collage-1600x1200.jpg"
                  alt={
                    locale === "en"
                      ? "Hass avocado harvest collage at the farm"
                      : "Collage de cosecha de aguacate Hass en la finca"
                  }
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              {/* Overlay sutil en hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <figcaption className="mt-4 text-sm text-slate-500 text-center">
              {locale === "en"
                ? "Collage: crates, branches and harvest at Santa Frida Farm."
                : "Collage: cajas, ramas y cosecha en Santa Frida Farm."}
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Botón de disponibilidad - al final en mobile */}
      <div className="flex justify-center md:justify-start mt-8">
        <a
          href="#contacto"
          className="inline-flex items-center justify-center rounded-xl border-2 px-8 py-4 text-green-800 border-green-800 hover:bg-green-50 hover:border-green-900 transition-all duration-200 font-semibold hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group"
        >
          <span className="mr-2">
            {locale === "en" ? "Check availability" : "Consultar disponibilidad"}
          </span>
          <svg
            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </Section>
  );
}
