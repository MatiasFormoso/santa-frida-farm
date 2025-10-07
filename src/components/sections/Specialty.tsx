// src/components/sections/Specialty.tsx
import { Section, Card } from "@/components/ui/primitives";
import type { Dict, Locale } from "@/i18n/config";

export default function Specialty({ t }: { t: Dict; locale: Locale }) {
  return (
    <Section
      id="especialidad"
      // sin tone => blanco
      eyebrow={t.company.specialtyTitle}
      title={t.company.specialtyTitle}
      intro={t.company.specialtyBody}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h4 className="font-semibold text-stone-900">{t.company.participationTitle}</h4>
          <p className="mt-2 text-stone-600">{t.company.participationBody}</p>
        </Card>
        <Card className="p-6">
          <h4 className="font-semibold text-stone-900">Media / Logos</h4>
          <p className="mt-2 text-stone-600">
            TEXTO DE RELLENO: aquí vamos a mostrar logos de eventos/capacitaciones o sellos cuando Taty los confirme.
          </p>
        </Card>
      </div>
    </Section>
  );
}
