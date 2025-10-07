// src/components/sections/Participation.tsx
import { Section, Card } from "@/components/ui/primitives";
import type { Dict, Locale } from "@/i18n/config";

export default function Participation({ t, locale }: { t: Dict; locale: Locale }) {
  return (
    <Section
      id="participacion"
      eyebrow={t.participation.eyebrow}
      title={t.participation.title}
      intro={t.participation.intro}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {t.participation.items.map((label, i) => (
          <Card key={i} className="p-5">
            <div className="aspect-[3/2] w-full rounded-xl border border-stone-200 bg-stone-50/70 flex items-center justify-center text-stone-400 text-sm">
              {locale === "en" ? "Logo / Badge" : "Logo / Sello"}
            </div>
            <p className="mt-3 text-stone-700">{label}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
