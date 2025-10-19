// src/components/sections/Company.tsx
"use client";

import { Card, Section } from "@/components/ui/primitives";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Dict, Locale } from "@/i18n/config";
import Link from "next/link";

type Props = { t: Dict; locale: Locale };

export default function Company({ t, locale }: Props) {
  // Teaser + link inline (reemplaza el botón)
  const teaserES =
    "Santa Frida Farm nació en la tierra: madrugadas de siembra, manos firmes y una mujer que convirtió el dolor en propósito. " +
    "María Yennis Silgado creció con los saberes del campo y, tras superar su mayor tormenta en 2020, encontró en la finca el camino para transformar lágrimas en esperanza.";
  const teaserEN =
    "Santa Frida Farm was born from the land: early mornings, steady hands, and a woman who turned pain into purpose. " +
    "María Yennis Silgado grew up with field wisdom and, after overcoming her toughest storm in 2020, found in the farm a way to transform tears into hope.";
  const ctaLabel = locale === "en" ? "Read full story" : "Ver historia completa";
  const href = `/${locale}/historia`;

  // Misión / Visión oficiales
  const visionES =
    "Ser una finca familiar reconocida por cultivar con amor y respeto por la tierra. Queremos compartir nuestros productos con el mundo, manteniendo siempre nuestra esencia: una familia unida por la tierra y el cuidado de la naturaleza.";
  const missionES =
    "En Santa Frida Farm cultivamos con propósito y conciencia, respetando la tierra que nos ha visto crecer como familia. Nuestra misión es ofrecer productos agrícolas de buena calidad, cultivados con prácticas sostenibles que conservan la esencia de nuestra tierra y nuestra historia.";
  const visionEN =
    "To be a family farm recognized for growing with love and respect for the land. We want to share our products with the world, always maintaining our essence: a family united by the land and care for nature.";
  const missionEN =
    "At Santa Frida Farm we grow with purpose and awareness, respecting the land that watched us grow as a family. Our mission is to offer good quality agricultural products, grown with sustainable practices that preserve the essence of our land and our history.";

  // Especialidad + Capacitaciones/Alianzas
  const specialtyES =
    "Nuestra especialidad es cultivar con propósito, cuidando cada detalle desde la semilla hasta la cosecha. Producimos frutas y hortalizas como aguacates Hass, uchuvas, guayabas, tomates, lechugas, maíz y calabacines, además de café de especialidad. Cosechamos en volumen: Aguacate Hass y Café Catimor.";
  const specialtyEN =
    "Our specialty is purposeful cultivation, caring for every detail from seed to harvest. We produce fruits and greens such as Hass avocados, goldenberries, guavas, tomatoes, lettuces, corn and zucchinis, and specialty coffee. We harvest in volume: Hass avocados and Catimor coffee.";
  const programsES =
    "Aprendemos y colaboramos con entidades del oriente antioqueño: Cámara de Comercio, SENA, MBA, Secretaría de Agricultura, ICA y Agroantioquia Exporta. Participamos en talleres técnicos, catas y jornadas de campo para fortalecer prácticas y trazabilidad.";
  const programsEN =
    "We learn and collaborate with regional entities: Chamber of Commerce, SENA, MBA, Secretariat of Agriculture, ICA and Agroantioquia Exporta. We join technical workshops, cuppings and field days to strengthen practices and traceability.";

  return (
    <Section
      id="company"
      tone="alt"
      eyebrow={`${t.company.historyTitle} · ${t.company.visionTitle} · ${t.company.missionTitle}`}
      title={t.company.historyTitle}
    >
      {/* Intro + link inline al final */}
      <ScrollReveal delay={0.1}>
        <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
          {locale === "en" ? teaserEN : teaserES}{" "}
          <Link
            href={href}
            aria-label={ctaLabel}
            className="text-teal-600 hover:text-teal-700 hover:underline font-medium transition-colors duration-300"
          >
            {ctaLabel} →
          </Link>
        </p>
      </ScrollReveal>

      {/* Misión / Visión */}
      <div className="mt-10 mb-10 grid gap-6 md:grid-cols-2">
        <ScrollReveal delay={0.2}>
          <Card className="p-8 hover:shadow-lg transition-all duration-300">
            <h4 className="font-semibold text-slate-900 text-lg mb-3">{t.company.visionTitle}</h4>
            <p className="text-slate-600 leading-relaxed">{locale === "en" ? visionEN : visionES}</p>
          </Card>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <Card className="p-8 hover:shadow-lg transition-all duration-300">
            <h4 className="font-semibold text-slate-900 text-lg mb-3">{t.company.missionTitle}</h4>
            <p className="text-slate-600 leading-relaxed">{locale === "en" ? missionEN : missionES}</p>
          </Card>
        </ScrollReveal>
      </div>

      {/* Especialidad + Capacitaciones/Alianzas */}
      <div className="grid gap-6 md:grid-cols-2">
        <ScrollReveal delay={0.3}>
          <Card className="p-8 hover:shadow-lg transition-all duration-500">
            <h4 className="font-semibold text-slate-900 text-lg mb-3">
              {locale === "en" ? "Our Specialty" : "Nuestra especialidad"}
            </h4>
            <p className="text-slate-600 leading-relaxed">
              {locale === "en" ? specialtyEN : specialtyES}
            </p>
          </Card>
        </ScrollReveal>
        <ScrollReveal delay={0.4}>
          <Card className="p-8 hover:shadow-lg transition-all duration-500">
            <h4 className="font-semibold text-slate-900 text-lg mb-3">
              {locale === "en" ? "Training & Partnerships" : "Capacitaciones y alianzas"}
            </h4>
            <p className="text-slate-600 leading-relaxed">
              {locale === "en" ? programsEN : programsES}
            </p>
          </Card>
        </ScrollReveal>
      </div>
    </Section>
  );
}
