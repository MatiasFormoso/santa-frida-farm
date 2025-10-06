// src/components/sections/Experiences.tsx
import { Section, Card, Img, Pill, Button } from "@/components/ui/primitives";
import { CONFIG } from "@/lib/config";
import type { Dict, Locale } from "@/i18n/config";

type Experience = {
  title: string;
  bullets: string[];
  img: string;
};

const EXPERIENCES: Experience[] = [
  {
    title: "Recorrido cafetalero (3 h)",
    bullets: ["Del árbol a la taza", "Cosecha guiada", "Proceso y cata básica"],
    img: "https://placehold.co/1200x800/0b3b2e/ffffff?text=Coffee+Tour",
  },
  {
    title: "Jornada de huerto",
    bullets: ["Siembra/trasplante", "Compost y riego", "Cosecha de temporada"],
    img: "https://placehold.co/1200x800/14532d/ffffff?text=Huerto",
  },
];

export default function Experiences({ t, locale }: { t: Dict; locale: Locale }) {
  const href = CONFIG.contact.instagram;

  return (
    <Section
      id="experiencias"
      eyebrow={t.process.title} // "Visitas" / "Visits"
      title={locale === "en" ? "Visit the farm" : "Conocer la finca"}
      // intro: mantenemos tu copy original en ES (para no inventar traducción)
      intro="Abrimos espacios de visita y aprendizaje en fechas puntuales. Cupos limitados y enfoque educativo."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {EXPERIENCES.map((it) => (
          <Card key={it.title} className="p-5">
            <Img src={it.img} alt={it.title} />
            <div className="mt-4 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-stone-900">{it.title}</h3>
                <ul className="mt-2 text-stone-700 list-disc list-inside">
                  {it.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
              <Pill>{locale === "en" ? "Limited availability" : "Cupos limitados"}</Pill>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <Button href={href} variant="ghost">
          {locale === "en" ? "Check next dates" : "Consultar próximas fechas"}
        </Button>
      </div>
    </Section>
  );
}
