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
    <Section
      id="contacto"
      eyebrow={strings.contact}
      title={t.contact.title}
      intro={t.contact.subtitle || ""}
    >
      <div className="space-y-12">
        {/* Grid de contactos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* WhatsApp */}
          <ScrollReveal delay={0.1}>
            <div className="p-6 rounded-xl border border-slate-200 bg-white hover:border-emerald-300 hover:shadow-md transition-all duration-300 h-full flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-5">
                <svg
                  className="w-6 h-6 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-2">
                {strings.whatsapp}
              </h3>
              <p className="text-slate-600 mb-6 text-sm">
                {CONFIG.contact.whatsappIntl || CONFIG.contact.whatsappNumber}
              </p>
              <Button href={waUrl || "#"} size="md" variant="primary" target="_blank">
                {locale === "en" ? "Open WhatsApp" : "Abrir WhatsApp"}
              </Button>
            </div>
          </ScrollReveal>

          {/* Correo */}
          {hasEmail && (
            <ScrollReveal delay={0.15}>
              <div className="p-6 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-md transition-all duration-300 h-full flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center mb-5">
                  <svg
                    className="w-6 h-6 text-slate-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-2">
                  {strings.email}
                </h3>
                <p className="text-slate-600 mb-6 text-sm break-all">{email}</p>
                <Button href={`mailto:${email}`} variant="outline" size="md">
                  {strings.writeEmail}
                </Button>
              </div>
            </ScrollReveal>
          )}

          {/* Ubicación */}
          <ScrollReveal delay={0.2}>
            <div className="p-6 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-md transition-all duration-300 h-full flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center mb-5">
                <svg
                  className="w-6 h-6 text-slate-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-2">
                {strings.where}
              </h3>
              <p className="text-slate-600 mb-6 text-sm">{CONFIG.contact.locationLabel}</p>
              <a
                className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-800 font-semibold transition-colors duration-250"
                href={CONFIG.contact.mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span>{strings.maps}</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Mapa */}
        <ScrollReveal delay={0.25}>
          <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
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
        <ScrollReveal delay={0.3}>
          <div className="text-center pt-4">
            <p className="text-slate-600 text-sm">
              {strings.quick}{" "}
              <a
                href={CONFIG.contact.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-emerald-700 hover:text-emerald-800 font-semibold transition-colors duration-300"
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
