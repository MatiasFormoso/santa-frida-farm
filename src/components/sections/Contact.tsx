// src/components/sections/Contact.tsx
import { CONFIG } from "@/lib/config";
import { Section, Card, Button } from "@/components/ui/primitives";
import type { Dict, Locale } from "@/i18n/config";

type Props = { t: Dict; locale: Locale };

export default function Contact({ t, locale }: Props) {
  const hasWhats = Boolean(CONFIG.contact.whatsappNumber);

  const email = String(CONFIG.contact.email || "");
  const hasEmail = email.trim().length > 0;

  const preset =
    locale === "en"
      ? "Hello! I'd like to contact Santa Frida Farm about products. Could you share availability and prices? Thank you."
      : "¡Hola! Me gustaría contactar a Santa Frida Farm por productos. ¿Podrían compartir disponibilidad y precios? Gracias.";

  const waUrl = hasWhats
    ? `https://wa.me/${String(CONFIG.contact.whatsappNumber).replace(/^\+/, "")}?text=${encodeURIComponent(preset)}`
    : undefined;

  const strings = {
    contact: locale === "en" ? "Contact" : "Contacto",
    whatsapp: "WhatsApp",
    openWhatsapp: locale === "en" ? "Open WhatsApp" : "Abrir WhatsApp",
    email: locale === "en" ? "Email" : "Correo",
    writeEmail: locale === "en" ? "Write email" : "Escribir email",
    where: locale === "en" ? "Where we are" : "Dónde estamos",
    maps: locale === "en" ? "View on Google Maps →" : "Ver en Google Maps →",
    quick:
      locale === "en"
        ? "Quick questions? You can also reach us on "
        : "¿Consultas rápidas? También podés escribirnos por ",
    ig: "Instagram",
  };

  return (
    <Section id="contacto" eyebrow={strings.contact} title={t.contact.title} intro={t.contact.subtitle}>
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-stone-900">{strings.whatsapp}</h3>
          <p className="mt-2 text-stone-700">
            {CONFIG.contact.whatsappIntl || CONFIG.contact.whatsappNumber}
          </p>
          <div className="mt-4">
            <Button href={waUrl || "#"}>{t.contact.whatsappCta}</Button>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-stone-900">{strings.email}</h3>
          <p className="mt-2 text-stone-700">{hasEmail ? email : ""}</p>
          {hasEmail && (
            <div className="mt-4">
              <Button href={`mailto:${email}`} variant="ghost">
                {strings.writeEmail}
              </Button>
            </div>
          )}
          <hr className="my-6" />
          <h4 className="font-semibold text-stone-900">{strings.where}</h4>
          <p className="mt-2 text-stone-700">{CONFIG.contact.locationLabel}</p>
          <a
            className="mt-2 inline-block text-emerald-800 hover:underline"
            href={CONFIG.contact.mapsUrl}
            target="_blank"
            rel="noreferrer"
          >
            {strings.maps}
          </a>
          <div className="mt-4 rounded-2xl overflow-hidden border">
            <img
              src="https://placehold.co/1200x600?text=Mapa+%2F+Vista+a%C3%A9rea+%28placeholder%29"
              alt="Mapa de la zona (placeholder)"
              className="w-full h-auto"
            />
          </div>
        </Card>
      </div>

      <div className="mt-6 text-sm text-stone-600">
        {strings.quick}
        <a
          href={CONFIG.contact.instagram}
          target="_blank"
          rel="noreferrer"
          className="text-emerald-800 hover:underline"
        >
          {strings.ig}
        </a>
        .
      </div>
    </Section>
  );
}
