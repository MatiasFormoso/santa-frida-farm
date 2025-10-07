// src/components/sections/Contact.tsx
import { CONFIG } from "@/lib/config";
import { Section, Card, Button } from "@/components/ui/primitives";
import type { Dict, Locale } from "@/i18n/config";

export default function Contact({ t, locale }: { t: Dict; locale: Locale }) {
  const hasWhatsApp = Boolean(CONFIG.contact.whatsappUrl);
  const hasEmail = Boolean(CONFIG.contact.email && CONFIG.contact.email !== "hola@sitio-ejemplo.com");

  const eyebrow = t.nav.contact;
  const title = t.contact.title;
  const intro = t.contact.subtitle;

  const labels = {
    whatsapp: "WhatsApp",
    email: locale === "en" ? "Email" : "Correo",
    where: locale === "en" ? "Where we are" : "Dónde estamos",
    maps: locale === "en" ? "Open in Google Maps →" : "Ver en Google Maps →",
    soon: locale === "en" ? "Coming soon" : "Próximamente",
    dmLead:
      locale === "en"
        ? "Quick questions? You can also message us on "
        : "¿Consultas rápidas? También podés escribirnos por ",
    dmEnd: locale === "en" ? "." : ".",
    mapAlt: locale === "en" ? "Map / Aerial view (placeholder)" : "Mapa / Vista aérea (placeholder)",
  };

  return (
    <Section id="contacto" eyebrow={eyebrow} title={title} intro={intro}>
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-stone-900">{labels.whatsapp}</h3>
          <p className="mt-2 text-stone-700">
            {hasWhatsApp ? (CONFIG.contact.whatsappIntl || (locale === "en" ? "Available" : "Disponible")) : (locale === "en" ? "We'll add the official number soon." : "Pronto incorporamos el número oficial.")}
          </p>
          <div className="mt-4">
            <Button href={hasWhatsApp ? CONFIG.contact.whatsappUrl! : "#"}>
              {t.contact.whatsappCta}
            </Button>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-stone-900">{labels.email}</h3>
          <p className="mt-2 text-stone-700">
            {hasEmail ? CONFIG.contact.email : (locale === "en" ? "Official email coming soon." : "Correo oficial próximamente.")}
          </p>
          {hasEmail && (
            <div className="mt-4">
              <Button href={`mailto:${CONFIG.contact.email}`} variant="ghost">
                {locale === "en" ? "Write email" : "Escribir email"}
              </Button>
            </div>
          )}
          <hr className="my-6" />
          <h4 className="font-semibold text-stone-900">{labels.where}</h4>
          <p className="mt-2 text-stone-700">{CONFIG.contact.locationLabel}</p>
          <a
            className="mt-2 inline-block text-emerald-800 hover:underline"
            href={CONFIG.contact.mapsUrl}
            target="_blank"
            rel="noreferrer"
          >
            {labels.maps}
          </a>
          <div className="mt-4 rounded-2xl overflow-hidden border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://placehold.co/1200x600?text=Mapa+%2F+Vista+a%C3%A9rea+%28placeholder%29"
              alt={labels.mapAlt}
              className="w-full h-auto"
            />
          </div>
          <p className="mt-3 text-sm text-stone-600">
            {locale === "en"
              ? "Eastern Antioquia — ideal microclimates for Hass avocados and coffee."
              : "Oriente antioqueño — microclimas ideales para aguacate Hass y café."}
          </p>
        </Card>
      </div>

      <div className="mt-6 text-sm text-stone-600">
        {labels.dmLead}
        <a
          href={CONFIG.contact.instagram}
          target="_blank"
          rel="noreferrer"
          className="text-emerald-800 hover:underline"
        >
          Instagram
        </a>
        {labels.dmEnd}
      </div>
    </Section>
  );
}
