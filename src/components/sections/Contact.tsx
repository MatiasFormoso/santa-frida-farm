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
      <div className="space-y-6 sm:space-y-8">
        {/* WhatsApp y Correo - Lado a lado arriba */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* WhatsApp */}
          <Card variant="elevated" className="p-6 sm:p-8 group" hover={false}>
            <div className="flex items-center mb-5 sm:mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center mr-4 group-hover:from-green-200 group-hover:to-green-100 transition-all duration-300 shadow-sm group-hover:shadow-md">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-green-600 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors duration-300">{strings.whatsapp}</h3>
            </div>
            <p className="text-slate-600 mb-6 text-base sm:text-lg font-medium">
              {CONFIG.contact.whatsappIntl || CONFIG.contact.whatsappNumber}
            </p>
            <Button href={waUrl || "#"} size="lg" variant="primary">{t.contact.whatsappCta}</Button>
          </Card>

          {/* Correo */}
          <Card variant="elevated" className="p-6 sm:p-8 group" hover={false}>
            <div className="flex items-center mb-5 sm:mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center mr-4 group-hover:from-blue-200 group-hover:to-blue-100 transition-all duration-300 shadow-sm group-hover:shadow-md">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors duration-300">{strings.email}</h3>
            </div>
            <p className="text-slate-600 mb-6 text-base sm:text-lg font-medium break-all">{hasEmail ? email : ""}</p>
            {hasEmail && (
              <Button href={`mailto:${email}`} variant="outline" size="lg">
                {strings.writeEmail}
              </Button>
            )}
          </Card>
        </div>

        {/* Ubicación - Abajo ocupando todo el ancho */}
        <Card variant="elevated" className="p-6 sm:p-8 group" hover={false}>
          <div className="flex items-center mb-5 sm:mb-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center mr-4 group-hover:from-orange-200 group-hover:to-orange-100 transition-all duration-300 shadow-sm group-hover:shadow-md">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-orange-600 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors duration-300">{strings.where}</h3>
          </div>
          <p className="text-slate-600 mb-6 text-base sm:text-lg font-medium">{CONFIG.contact.locationLabel}</p>
          <a
            className="group/link inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold transition-all duration-300"
            href={CONFIG.contact.mapsUrl}
            target="_blank"
            rel="noreferrer"
          >
            <span>{strings.maps}</span>
            <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </Card>

        {/* Mapa aéreo - Debajo de la ubicación */}
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/60 ring-1 ring-slate-200/40 shadow-xl hover:shadow-2xl transition-all duration-500">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.1234567890!2d-75.3369444!3d6.1733333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428c4c6b6b6b6%3A0x1234567890abcdef!2sMarinilla%2C%20Antioquia%2C%20Colombia!5e0!3m2!1ses!2sco!4v1234567890123!5m2!1ses!2sco"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Santa Frida Farm en Marinilla, Antioquia"
            className="w-full h-[300px] sm:h-[400px] lg:h-[450px]"
          />
        </div>
      </div>

      <div className="mt-10 sm:mt-12 text-center">
        <div className="inline-flex flex-col sm:flex-row items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-slate-50/80 border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300">
          <span className="text-slate-600 text-sm sm:text-base">{strings.quick}</span>
          <a
            href={CONFIG.contact.instagram}
            target="_blank"
            rel="noreferrer"
            className="text-emerald-600 hover:text-emerald-700 font-bold transition-colors duration-300 inline-flex items-center gap-1 group"
          >
            <span>{strings.ig}</span>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>
    </Section>
  );
}
