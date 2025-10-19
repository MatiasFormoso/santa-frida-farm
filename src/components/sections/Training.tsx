// src/components/sections/Training.tsx
import { Card, Section } from "@/components/ui/primitives";
import type { Dict, Locale } from "@/i18n/config";
import { CONFIG } from "@/lib/config";

export default function Training({ t }: { t: Dict; locale: Locale }) {
  return (
    <Section
      id="capacitaciones"
      eyebrow={t.training.eyebrow}
      title={t.training.title}
      intro={t.training.intro}
    >
      <div className="grid md:grid-cols-2 gap-6">
        {t.training.items.map((it, i) => (
          <Card key={i} className="p-6">
            <h4 className="font-semibold text-stone-900">{it.title}</h4>
            <p className="mt-2 text-stone-600">{it.body}</p>
            <div className="mt-4">
              <a
                href={CONFIG.contact.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border px-4 py-2 text-stone-700 hover:bg-stone-50"
              >
                {t.training.cta}
              </a>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
