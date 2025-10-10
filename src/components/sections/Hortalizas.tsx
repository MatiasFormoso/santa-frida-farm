// src/components/sections/Greens.tsx
import { Section } from "@/components/ui/primitives";
import type { Dict, Locale } from "@/i18n/config";

type Props = { t: Dict; locale: Locale };

export default function Greens({ t, locale }: Props) {
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
    <Section id="greens" eyebrow={eyebrow} title={title}>
      {/* mismo layout que Hass/Catimori: texto izq., collage der. */}
      <div className="grid gap-10 md:grid-cols-12 items-start">
        {/* Columna texto */}
        <div className="md:col-span-7">
          <p className="text-stone-700 leading-relaxed">
            {locale === "en" ? introEN : introES}
          </p>

          <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm hover:shadow-md transition"
              >
                <dt className="text-xs font-medium uppercase tracking-wide text-stone-500">
                  {label}
                </dt>
                <dd className="mt-1 text-stone-900 font-semibold">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-7">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-xl border px-5 py-2.5 text-green-800 border-green-800 hover:bg-green-50 transition font-semibold"
            >
              {locale === "en" ? "Check availability" : "Consultar disponibilidad"}
            </a>
          </div>
        </div>

        {/* Columna imagen (collage) */}
        <div className="md:col-span-5">
          <figure className="group">
            <div className="overflow-hidden rounded-2xl border border-stone-200 ring-1 ring-stone-200/70 shadow-sm">
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
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.015] rounded-[22px]"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
            <figcaption className="mt-3 text-sm text-stone-500">
              {locale === "en"
                ? "Collage: seasonal garden at Santa Frida Farm."
                : "Collage: huerto de temporada en Santa Frida Farm."}
            </figcaption>
          </figure>
        </div>
      </div>
    </Section>
  );
}
