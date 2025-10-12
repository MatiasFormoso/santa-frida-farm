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
      {/* Layout: WhatsApp y Correo lado a lado arriba, Ubicación abajo ocupando todo el ancho, Mapa debajo */}
      <div className="space-y-8">
        {/* WhatsApp y Correo - Lado a lado arriba */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* WhatsApp */}
          <Card variant="elevated" className="p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900">{strings.whatsapp}</h3>
            </div>
            <p className="text-slate-600 mb-6 text-lg">
              {CONFIG.contact.whatsappIntl || CONFIG.contact.whatsappNumber}
            </p>
            <Button href={waUrl || "#"} size="lg">{t.contact.whatsappCta}</Button>
          </Card>

          {/* Correo */}
          <Card variant="elevated" className="p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900">{strings.email}</h3>
            </div>
            <p className="text-slate-600 mb-6 text-lg">{hasEmail ? email : ""}</p>
            {hasEmail && (
              <Button href={`mailto:${email}`} variant="outline" size="lg">
                {strings.writeEmail}
              </Button>
            )}
          </Card>
        </div>

        {/* Ubicación - Abajo ocupando todo el ancho */}
        <Card variant="elevated" className="p-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900">{strings.where}</h3>
          </div>
          <p className="text-slate-600 mb-6 text-lg">{CONFIG.contact.locationLabel}</p>
          <a
            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium transition-colors duration-200"
            href={CONFIG.contact.mapsUrl}
            target="_blank"
            rel="noreferrer"
          >
            {strings.maps}
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </Card>

        {/* Mapa aéreo - Debajo de la ubicación */}
        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.1234567890!2d-75.3369444!3d6.1733333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428c4c6b6b6b6%3A0x1234567890abcdef!2sMarinilla%2C%20Antioquia%2C%20Colombia!5e0!3m2!1ses!2sco!4v1234567890123!5m2!1ses!2sco"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Santa Frida Farm en Marinilla, Antioquia"
          />
        </div>
      </div>

      <div className="mt-12 text-center">
        <div className="inline-flex items-center px-6 py-3 rounded-2xl bg-slate-50 border border-slate-200">
          <span className="text-slate-600 mr-2">{strings.quick}</span>
          <a
            href={CONFIG.contact.instagram}
            target="_blank"
            rel="noreferrer"
            className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors duration-200"
          >
            {strings.ig}
          </a>
        </div>
      </div>
    </Section>
  );
}
