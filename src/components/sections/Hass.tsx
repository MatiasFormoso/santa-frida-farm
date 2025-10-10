// src/components/sections/Hass.tsx
import { Section } from "@/components/ui/primitives";
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
    ["Harvests", "2 per year (weather & management dependent)"],
    ["Quality", "Hand selection to premium standards"],
    ["Availability", "Domestic & international markets"],
    ["Traceability", "From tree to packing"],
  ];

  const stats = locale === "en" ? statsEN : statsES;

  return (
    <Section id="hass" eyebrow={eyebrow} title={title}>
      {/* layout más cuidado: texto a la izquierda, collage a la derecha */}
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
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.015]"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
            <figcaption className="mt-3 text-sm text-stone-500">
              {locale === "en"
                ? "Collage: crates, branches and harvest at Santa Frida Farm."
                : "Collage: cajas, ramas y cosecha en Santa Frida Farm."}
            </figcaption>
          </figure>
        </div>
      </div>
    </Section>
  );
}
