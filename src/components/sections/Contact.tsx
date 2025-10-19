// src/components/sections/Contact.tsx
"use client";

import { Button, Section } from "@/components/ui/primitives";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Dict, Locale } from "@/i18n/config";
import { CONFIG } from "@/lib/config";

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
    email: locale === "en" ? "Email" : "Correo",
    writeEmail: locale === "en" ? "Write email" : "Escribir email",
    where: locale === "en" ? "Where we are" : "Dónde estamos",
    maps: locale === "en" ? "View on Google Maps" : "Ver en Google Maps",
    quick:
      locale === "en"
        ? "Quick questions? You can also reach us on"
        : "¿Consultas rápidas? También podés escribirnos por",
    ig: "Instagram",
  };

  return (
    <Section id="contacto" tone="alt" eyebrow={strings.contact} title={t.contact.title} intro={t.contact.subtitle || ""}>
      <div className="space-y-10">
        {/* Grid de contactos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* WhatsApp */}
          <ScrollReveal delay={0.2}>
            <div className="border-l-2 border-emerald-600 pl-6 py-2 group hover:border-emerald-700 transition-colors duration-250">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">{strings.whatsapp}</h3>
              <p className="text-slate-900 mb-5 text-base font-medium">
                {CONFIG.contact.whatsappIntl || CONFIG.contact.whatsappNumber}
              </p>
              <Button href={waUrl || "#"} size="md" variant="primary">
                {locale === "en" ? "Open WhatsApp" : "Abrir WhatsApp"}
              </Button>
            </div>
          </ScrollReveal>

          {/* Correo */}
          {hasEmail && (
            <ScrollReveal delay={0.3}>
              <div className="border-l-2 border-slate-300 pl-6 py-2 group hover:border-slate-400 transition-colors duration-300">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">{strings.email}</h3>
                <p className="text-slate-900 mb-5 text-base font-medium break-all">{email}</p>
                <Button href={`mailto:${email}`} variant="outline" size="md">
                  {strings.writeEmail}
                </Button>
              </div>
            </ScrollReveal>
          )}

          {/* Ubicación */}
          <ScrollReveal delay={0.4}>
            <div className="border-l-2 border-slate-300 pl-6 py-2 group hover:border-slate-400 transition-colors duration-300">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">{strings.where}</h3>
              <p className="text-slate-900 mb-5 text-base font-medium">{CONFIG.contact.locationLabel}</p>
              <a
                className="inline-flex items-center gap-1 text-slate-900 hover:text-emerald-700 font-medium transition-colors duration-250 underline underline-offset-4 decoration-1"
                href={CONFIG.contact.mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span>{strings.maps}</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Mapa */}
        <ScrollReveal delay={0.4}>
          <div className="rounded-lg overflow-hidden border border-slate-200 shadow-md hover:shadow-lg transition-shadow duration-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.1234567890!2d-75.284000!3d6.216000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428c4c6b6b6b6%3A0x1234567890abcdef!2sSanta%20Frida%20Farm%2C%20Marinilla%2C%20Antioquia%2C%20Colombia!5e0!3m2!1ses!2sco!4v1234567890123!5m2!1ses!2sco"
              width="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Santa Frida Farm en Marinilla, Antioquia"
              className="w-full h-[350px] sm:h-[400px]"
            />
          </div>
        </ScrollReveal>

        {/* Nota sobre Instagram */}
        <ScrollReveal delay={0.5}>
          <div className="text-center pt-2">
            <p className="text-slate-600 text-sm">
              {strings.quick}{" "}
              <a
                href={CONFIG.contact.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-slate-900 hover:text-teal-700 font-semibold underline underline-offset-4 decoration-1 transition-colors duration-300"
              >
                {strings.ig}
              </a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}


