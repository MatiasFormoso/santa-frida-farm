// src/components/sections/Company.tsx
import { Section, Card } from "@/components/ui/primitives";
import type { Dict, Locale } from "@/i18n/config";

type Props = { t: Dict; locale: Locale };

export default function Company({ t }: Props) {
  return (
    <Section
      id="company"
      tone="alt" // UNA sola banda gris muy clara
      eyebrow={`${t.company.historyTitle} · ${t.company.visionTitle} · ${t.company.missionTitle}`}
      title={t.company.historyTitle}
      intro={t.company.historyBody}
    >
      {/* Visión & Misión */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
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
      <div className="grid md:grid-cols-2 gap-6">
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
