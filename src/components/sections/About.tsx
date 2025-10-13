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
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {cards.map((c: AboutCard, i: number) => (
          <Card key={i} variant="elevated" className="p-6 sm:p-8 group" hover={false}>
            <div className="flex items-start sm:items-center mb-5 sm:mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center mr-4 group-hover:from-emerald-200 group-hover:to-emerald-100 transition-all duration-300 shadow-sm group-hover:shadow-md">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-700 group-hover:scale-110 transition-transform duration-300"></div>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors duration-300">{c.title}</h4>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{c.body}</p>
            {i === 2 && (
              <a
                href={CONFIG.contact.instagram}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold transition-all duration-300 group/link"
              >
                <span>{locale === "en" ? "See updates on Instagram" : "Ver actualizaciones en Instagram"}</span>
                <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}
