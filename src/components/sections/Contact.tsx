// src/components/sections/Contact.tsx
import { CONFIG } from "@/lib/config";
import { Section, Card, Button } from "@/components/ui/primitives";

export default function Contact() {
  const hasWhatsApp = Boolean(CONFIG.contact.whatsappUrl);
  const hasEmail = Boolean(CONFIG.contact.email && CONFIG.contact.email !== "hola@sitio-ejemplo.com");

  return (
    <Section
      id="contacto"
      eyebrow="Contacto"
      title="Pedidos y consultas"
      intro="Canales oficiales para escribirnos. WhatsApp y correo se activarán en cuanto estén confirmados."
    >
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-stone-900">WhatsApp</h3>
          <p className="mt-2 text-stone-700">
            {hasWhatsApp ? (CONFIG.contact.whatsappIntl || "Disponible") : "Pronto incorporamos el número oficial."}
          </p>
          <div className="mt-4">
            <Button href={hasWhatsApp ? CONFIG.contact.whatsappUrl! : "#"}>Abrir WhatsApp</Button>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-stone-900">Email</h3>
          <p className="mt-2 text-stone-700">
            {hasEmail ? CONFIG.contact.email : "Correo oficial próximamente."}
          </p>
          {hasEmail && (
            <div className="mt-4">
              <Button href={`mailto:${CONFIG.contact.email}`} variant="ghost">Escribir email</Button>
            </div>
          )}
          <hr className="my-6" />
          <h4 className="font-semibold text-stone-900">Dónde estamos</h4>
          <p className="mt-2 text-stone-700">{CONFIG.contact.locationLabel}</p>
          <a
            className="mt-2 inline-block text-emerald-800 hover:underline"
            href={CONFIG.contact.mapsUrl}
            target="_blank"
            rel="noreferrer"
          >
            Ver en Google Maps →
          </a>
          <div className="mt-4 rounded-2xl overflow-hidden border">
            <img
              src="https://placehold.co/1200x600?text=Mapa+%2F+Vista+a%C3%A9rea+%28placeholder%29"
              alt="Mapa de la zona (placeholder)"
              className="w-full h-auto"
            />
          </div>
          <p className="mt-3 text-sm text-stone-600">
            Oriente antioqueño — microclimas ideales para aguacate Hass y café.
          </p>
        </Card>
      </div>
      <div className="mt-6 text-sm text-stone-600">
        ¿Consultas rápidas? También podés escribirnos por{" "}
        <a
          href={CONFIG.contact.instagram}
          target="_blank"
          rel="noreferrer"
          className="text-emerald-800 hover:underline"
        >
          Instagram
        </a>.
      </div>
    </Section>
  );
}
