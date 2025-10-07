// src/components/sections/Company.tsx
import Link from "next/link";
import { Section, Card } from "@/components/ui/primitives";
import type { Dict, Locale } from "@/i18n/config";

type Props = { t: Dict; locale: Locale };

export default function Company({ t, locale }: Props) {
  const teaserES =
    "Santa Frida Farm nació en la tierra: madrugadas de siembra, manos firmes y una mujer que convirtió el dolor en propósito. " +
    "María Yennis Silgado creció con los saberes del campo y, tras superar su mayor tormenta en 2020, encontró en la finca el camino para transformar lágrimas en esperanza.";

  const teaserEN =
    "Santa Frida Farm was born from the land: early mornings, steady hands, and a woman who turned pain into purpose. " +
    "María Yennis Silgado grew up with field wisdom and, after overcoming her toughest storm in 2020, found in the farm a way to transform tears into hope.";

  const ctaLabel = locale === "en" ? "Read full story" : "Ver historia completa";
  const href = `/${locale}/historia`;

  return (
    <Section
      id="company"
      tone="alt"
      eyebrow={`${t.company.historyTitle} · ${t.company.visionTitle} · ${t.company.missionTitle}`}
      title={t.company.historyTitle}
      intro={locale === "en" ? teaserEN : teaserES}
    >
      {/* CTA al detalle de Historia */}
      <div className="mt-6 mb-10">
        <Link
          href={href}
          aria-label={ctaLabel}
          className="inline-flex items-center rounded-xl bg-green-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-700/30"
        >
          {ctaLabel}
        </Link>
      </div>

      {/* Visión & Misión */}
      <div className="mb-8 grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h4 className="font-semibold text-stone-900">{t.company.visionTitle}</h4>
          <p className="mt-2 text-stone-600">{t.company.visionBody}</p>
        </Card>
        <Card className="p-6">
          <h4 className="font-semibold text-stone-900">{t.company.missionTitle}</h4>
          <p className="mt-2 text-stone-600">{t.company.missionBody}</p>
        </Card>
      </div>

      {/* Especialidad / Participación */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h4 className="font-semibold text-stone-900">{t.company.specialtyTitle}</h4>
          <p className="mt-2 text-stone-600">{t.company.specialtyBody}</p>
        </Card>
        <Card className="p-6">
          <h4 className="font-semibold text-stone-900">{t.company.participationTitle}</h4>
          <p className="mt-2 text-stone-600">{t.company.participationBody}</p>
        </Card>
      </div>
    </Section>
  );
}
