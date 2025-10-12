// src/components/sections/Catimori.tsx
import { Section } from "@/components/ui/primitives";
import type { Dict, Locale } from "@/i18n/config";

type Props = { t: Dict; locale: Locale };

export default function Catimori({ t, locale }: Props) {
  const eyebrow = locale === "en" ? "Crops" : "Cultivos";
  const title = locale === "en" ? "Catimori Coffee" : "Café Catimori";

  const introES =
    "Cultivo y proceso cuidados para maximizar su potencial en taza.";
  const introEN =
    "Careful cultivation and processing to maximize cup potential.";

  const statsES: [string, string][] = [
    ["Variedad", "Catimori (cruce Caturra × Timor)"],
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
    ["Variety", "Catimori (Caturra × Timor cross)"],
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
      {/* Mobile layout: tarjetas -> fotos -> botón */}
      <div className="space-y-8 md:space-y-0 md:grid md:gap-12 md:grid-cols-12 md:items-start">
        {/* Contenido - izquierda en desktop */}
        <div className="md:col-span-7">
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            {locale === "en" ? introEN : introES}
          </p>

          {/* Tarjetas - primero en mobile */}
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {stats.map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <dt className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-3">
                  {label}
                </dt>
                <dd className="text-slate-900 font-bold text-lg">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Imagen - derecha en desktop */}
        <div className="md:col-span-5">
          <figure className="group">
            <div className="overflow-hidden rounded-2xl border border-slate-200/60 ring-1 ring-slate-200/40 shadow-sm hover:shadow-md transition-all duration-300">
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
                      ? "Catimori coffee collage: branch, cherries and harvest at the farm"
                      : "Collage de café Catimori: rama, cerezas y cosecha en la finca"
                  }
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
            <figcaption className="mt-3 text-sm text-slate-500">
              {locale === "en"
                ? "Collage: branch, cherries and harvest at Santa Frida Farm."
                : "Collage: rama, cerezas y cosecha en Santa Frida Farm."}
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Botón de disponibilidad - al final en mobile */}
      <div className="flex justify-center md:justify-start mt-8">
        <a
          href="#contacto"
          className="inline-flex items-center justify-center rounded-xl border px-6 py-3 text-green-800 border-green-800 hover:bg-green-50 transition-all duration-200 font-semibold hover:shadow-sm hover:scale-[1.02] active:scale-[0.98]"
        >
          {locale === "en" ? "Check availability" : "Consultar disponibilidad"}
        </a>
      </div>
    </Section>
  );
}
