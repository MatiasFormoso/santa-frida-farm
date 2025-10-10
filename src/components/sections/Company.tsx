// src/components/sections/Company.tsx
import Link from "next/link";
import { Section, Card } from "@/components/ui/primitives";
import type { Dict, Locale } from "@/i18n/config";

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
    "Ser una empresa agrícola reconocida internacionalmente por la calidad excepcional de nuestros productos y nuestro compromiso con la sostenibilidad, llevando el alma del campo a cada rincón del mundo, sin perder la raíz de quienes somos: una familia unida por la tierra y el respeto a la naturaleza.";
  const missionES =
    "En Santa Frida Farm cultivamos con propósito y conciencia, respetando la tierra que nos ha visto crecer como familia y como productores. Nuestra misión es ofrecer al mundo productos agrícolas de la más alta calidad, sembrados en condiciones óptimas y con prácticas sostenibles que conservan la esencia de nuestra tierra, nuestra gente y nuestra historia.";
  const visionEN =
    "To be an agricultural company recognized internationally for the exceptional quality of our products and our commitment to sustainability, taking the soul of the countryside to every corner of the world, without losing the root of who we are: a family united by the land and respect for nature.";
  const missionEN =
    "At Santa Frida Farm we grow with purpose and awareness, respecting the land that watched us grow as a family and as producers. Our mission is to offer the world agricultural products of the highest quality, grown under optimal conditions and with sustainable practices that preserve the essence of our land, our people and our history.";

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
      <p className="text-stone-700">
        {locale === "en" ? teaserEN : teaserES}{" "}
        <Link
          href={href}
          aria-label={ctaLabel}
          className="text-green-700 hover:text-green-800 hover:underline font-medium"
        >
          {ctaLabel} →
        </Link>
      </p>

      {/* Misión / Visión */}
      <div className="mt-8 mb-8 grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h4 className="font-semibold text-stone-900">{t.company.visionTitle}</h4>
          <p className="mt-2 text-stone-600">{locale === "en" ? visionEN : visionES}</p>
        </Card>
        <Card className="p-6">
          <h4 className="font-semibold text-stone-900">{t.company.missionTitle}</h4>
          <p className="mt-2 text-stone-600">{locale === "en" ? missionEN : missionES}</p>
        </Card>
      </div>

      {/* Especialidad + Capacitaciones/Alianzas */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h4 className="font-semibold text-stone-900">
            {locale === "en" ? "Our Specialty" : "Nuestra especialidad"}
          </h4>
          <p className="mt-2 text-stone-600">
            {locale === "en" ? specialtyEN : specialtyES}
          </p>
        </Card>
        <Card className="p-6">
          <h4 className="font-semibold text-stone-900">
            {locale === "en" ? "Training & Partnerships" : "Capacitaciones y alianzas"}
          </h4>
          <p className="mt-2 text-stone-600">
            {locale === "en" ? programsEN : programsES}
          </p>
        </Card>
      </div>
    </Section>
  );
}
