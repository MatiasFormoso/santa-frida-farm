// src/components/sections/Hortalizas.tsx
import { Section, Card } from "@/components/ui/primitives";
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
      {/* Mobile: título -> tarjetas -> foto -> botón */}
      <div className="space-y-10 md:space-y-0 md:grid md:gap-12 lg:gap-16 md:grid-cols-12 md:items-center">
        {/* Contenido - izquierda en desktop */}
        <div className="md:col-span-7">
          {/* Introducción */}
          <div className="mb-8 sm:mb-10">
            <p className="text-slate-600 text-lg sm:text-xl leading-relaxed">
              {locale === "en" ? introEN : introES}
            </p>
          </div>

          {/* Tarjetas de estadísticas */}
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10">
            {stats.map(([label, value], idx) => (
              <Card key={label} variant="elevated" className="p-5 sm:p-6 group" style={{ animationDelay: `${idx * 50}ms` }}>
                <dt className="text-[0.6875rem] sm:text-xs font-bold uppercase tracking-widest text-emerald-600 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform duration-300"></span>
                  {label}
                </dt>
                <dd className="text-slate-900 font-bold text-base sm:text-lg leading-tight">{value}</dd>
              </Card>
            ))}
          </dl>
        </div>

        {/* Imagen - derecha en desktop */}
        <div className="md:col-span-5">
          <figure className="group">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/60 ring-1 ring-slate-200/40 shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-emerald-200/60">
              <picture>
                <source
                  type="image/webp"
                  srcSet="/images/sections/greens-collage-2400x1800.webp 2400w, /images/sections/greens-collage-1600x1200.webp 1600w"
                  sizes="(min-width:1024px) 40vw, 100vw"
                />
                <source
                  type="image/jpeg"
                  srcSet="/images/sections/greens-collage-2400x1800.jpg 2400w, /images/sections/greens-collage-1600x1200.jpg 1600w"
                  sizes="(min-width:1024px) 40vw, 100vw"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/sections/greens-collage-1600x1200.jpg"
                  alt={
                    locale === "en"
                      ? "Fresh greens collage: lettuces, cabbage, chilies and garden at the farm"
                      : "Collage de hortalizas: lechugas, repollo, ajíes y huerto en la finca"
                  }
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              {/* Overlay sutil en hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <figcaption className="mt-4 text-xs sm:text-sm text-slate-500 text-center font-medium">
              {locale === "en"
                ? "Collage: seasonal garden at Santa Frida Farm."
                : "Collage: huerto de temporada en Santa Frida Farm."}
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Botón de disponibilidad - al final en mobile */}
      <div className="flex justify-center md:justify-start mt-10 sm:mt-12">
        <a
          href="#contacto"
          className="group inline-flex items-center justify-center rounded-xl border-2 px-6 sm:px-8 py-3.5 sm:py-4 text-emerald-700 border-emerald-600/80 hover:bg-emerald-600 hover:text-white hover:border-emerald-700 transition-all duration-300 font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
        >
          <span className="mr-2">{locale === "en" ? "Check availability" : "Consultar disponibilidad"}</span>
          <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </Section>
  );
}
