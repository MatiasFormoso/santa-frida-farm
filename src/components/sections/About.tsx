// src/components/sections/About.tsx
"use client";

import { Section } from "@/components/ui/primitives";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Dict, Locale } from "@/i18n/config";
import { CONFIG } from "@/lib/config";

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
    <Section id="sobre" eyebrow={t.nav.about} title={t.about.title} intro={intro || ""}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
        {cards.map((c: AboutCard, i: number) => (
          <ScrollReveal key={i} delay={i * 0.15}>
            <div className="group h-full">
              <div className="border-l-2 border-slate-200/60 pl-6 sm:pl-8 py-2 group-hover:border-emerald-600 transition-all duration-250">
                <h4 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4 tracking-tight">{c.title}</h4>
                <p className="text-slate-600 leading-relaxed text-base">{c.body}</p>
                {i === 2 && (
                  <a
                    href={CONFIG.contact.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center text-slate-900 hover:text-emerald-600 font-medium transition-all duration-250 group/link"
                  >
                    <span className="underline underline-offset-4 decoration-1">{locale === "en" ? "See updates on Instagram" : "Ver actualizaciones en Instagram"}</span>
                    <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
