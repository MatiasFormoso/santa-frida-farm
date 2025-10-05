// src/components/sections/About.tsx
import { CONFIG } from "@/lib/config";
import { Section, Card } from "@/components/ui/primitives";

export default function About() {
  return (
    <Section
      id="sobre"
      eyebrow="Sobre la finca"
      title="Quiénes somos"
      intro="Finca ubicada en Marinilla, Antioquia. Cultivamos aguacate Hass, café y hortalizas con foco en calidad, cuidado del entorno y relaciones a largo plazo."
    >
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6">
          <h4 className="font-semibold text-stone-900">Propósito</h4>
          <p className="mt-2 text-stone-600">
            Producir alimentos nobles y consistentes, respetando los ritmos del territorio y
            priorizando vínculos de confianza con nuestra comunidad.
          </p>
          <p className="mt-2 text-stone-600">{CONFIG.contact.locationLabel}</p>
        </Card>

        <Card className="p-6">
          <h4 className="font-semibold text-stone-900">Prácticas</h4>
          <p className="mt-2 text-stone-600">
            Manejo responsable de suelos y agua, monitoreo y control integrado de plagas,
            cosecha oportuna y foco en trazabilidad y mejora continua.
          </p>
        </Card>

        <Card className="p-6">
          <h4 className="font-semibold text-stone-900">Comunidad</h4>
          <p className="mt-2 text-stone-600">
            Compartimos avances y actividades de la finca en redes, y abrimos espacios de visita
            y aprendizaje cuando hay cupos disponibles.
          </p>
          <a
            href={CONFIG.contact.instagram}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-emerald-800 hover:underline"
          >
            Ver actualizaciones en Instagram →
          </a>
        </Card>
      </div>
    </Section>
  );
}
