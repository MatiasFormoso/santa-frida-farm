// src/components/sections/VisionMission.tsx
import { Section, Card } from "@/components/ui/primitives";
import type { Dict, Locale } from "@/i18n/config";

export default function VisionMission({ t }: { t: Dict; locale: Locale }) {
  return (
    <Section
      id="vision-mision"
      tone="alt" // ← gris claro para recortar el “bloque blanco” antes de Products
      eyebrow={`${t.company.visionTitle} · ${t.company.missionTitle}`}
      title={`${t.company.visionTitle} & ${t.company.missionTitle}`}
      intro=""
    >
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h4 className="font-semibold text-stone-900">{t.company.visionTitle}</h4>
          <p className="mt-2 text-stone-600">{t.company.visionBody}</p>
        </Card>
        <Card className="p-6">
          <h4 className="font-semibold text-stone-900">{t.company.missionTitle}</h4>
          <p className="mt-2 text-stone-600">{t.company.missionBody}</p>
        </Card>
      </div>
    </Section>
  );
}
