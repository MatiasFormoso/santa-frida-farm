// src/components/sections/About.tsx
import { CONFIG } from "@/lib/config";
import { Section, Card } from "@/components/ui/primitives";
import type { Dict, Locale } from "@/i18n/config";

type Props = {
  t: Dict;
  locale: Locale;
};

type AboutCard = { title: string; body: string };

export default function About({ t, locale }: Props) {
  const [intro] = t.about.body.split("\n\n");

  const fallbackCards: AboutCard[] = [
    {
      title: locale === "en" ? "Purpose" : "Propósito",
      body:
        locale === "en"
          ? "To produce honest and consistent food, respecting the rhythms of the land and building bonds of trust with our community."
          : "Producir alimentos nobles y consistentes, respetando los ritmos del territorio y priorizando vínculos de confianza con nuestra comunidad.",
    },
    {
      title: locale === "en" ? "Practices" : "Prácticas",
      body:
        locale === "en"
          ? "Responsible soil and water management, integrated pest monitoring and control, timely harvests and a focus on traceability and continuous improvement."
          : "Manejo responsable de suelos y agua, monitoreo y control integrado de plagas, cosecha oportuna y foco en trazabilidad y mejora continua.",
    },
    {
      title: locale === "en" ? "Community" : "Comunidad",
      body:
        locale === "en"
          ? "We share our progress and farm activities on social media and open learning visits whenever spots are available."
          : "Compartimos avances y actividades de la finca en redes y abrimos visitas de aprendizaje cuando hay cupos disponibles.",
    },
  ];

  const cards: AboutCard[] = t.about.cards ?? fallbackCards;

  return (
    <Section id="sobre" eyebrow={t.nav.about} title={t.about.title} intro={intro}>
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((c: AboutCard, i: number) => (
          <Card key={i} className="p-6">
            <h4 className="font-semibold text-stone-900">{c.title}</h4>
            <p className="mt-2 text-stone-600">{c.body}</p>
            {i === 2 && (
              <a
                href={CONFIG.contact.instagram}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-emerald-800 hover:underline"
              >
                {locale === "en" ? "See updates on Instagram →" : "Ver actualizaciones en Instagram →"}
              </a>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}
