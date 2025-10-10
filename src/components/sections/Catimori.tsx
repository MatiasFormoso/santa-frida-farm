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
      {/* mismo formato que Hass: texto izq., collage der. */}
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
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.015] rounded-[22px]"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
            <figcaption className="mt-3 text-sm text-stone-500">
              {locale === "en"
                ? "Collage: branch, cherries and harvest at Santa Frida Farm."
                : "Collage: rama, cerezas y cosecha en Santa Frida Farm."}
            </figcaption>
          </figure>
        </div>
      </div>
    </Section>
  );
}
