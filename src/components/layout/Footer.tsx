// src/components/layout/Footer.tsx
"use client";

import { Container } from "@/components/ui/primitives";
import type { Dict, Locale } from "@/i18n/config";
import { CONFIG } from "@/lib/config";

type Props = {
  t: Dict;
  locale: Locale;
};

export default function Footer({ t, locale }: Props) {
  const year = new Date().getFullYear();
  const rights = locale === "en" ? "All rights reserved." : "Todos los derechos reservados.";

  // Tagline corto, 100% en el idioma actual
  const tagline =
    locale === "en"
      ? "Hass avocados, specialty coffee and fresh greens — conscious farming in eastern Antioquia."
      : "Aguacate Hass, café de especialidad y hortalizas frescas — cultivo consciente en el oriente antioqueño.";

  // WhatsApp: número limpio + preset opcional
  const waNumber = CONFIG.contact.whatsappNumber?.replace(/^\+/, "");
  const waLink = waNumber
    ? `https://wa.me/${waNumber}${
        CONFIG.contact.whatsappPreset
          ? `?text=${encodeURIComponent(CONFIG.contact.whatsappPreset)}`
          : ""
      }`
    : null;

  return (
    <footer className="border-t border-slate-200/40 bg-gradient-to-b from-white via-slate-50/20 to-slate-50/40">
      <Container className="py-14 sm:py-18 lg:py-20 grid gap-10 sm:gap-12 lg:gap-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Col 1: marca + tagline corto */}
        <div>
          <h4 className="font-bold text-slate-900 text-lg mb-4 tracking-tight">
            {CONFIG.site.name}
          </h4>
          <p className="text-slate-600 text-sm leading-relaxed max-w-xs">{tagline}</p>
        </div>

        {/* Col 2: contacto */}
        <div>
          <h5 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide">
            {t.nav.contact}
          </h5>
          <ul className="text-slate-600 space-y-2.5 text-sm">
            {waLink && (
              <li>
                <a
                  className="hover:text-teal-600 transition-colors duration-300 inline-flex items-center gap-2 group"
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="w-1 h-1 rounded-full bg-teal-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  WhatsApp {CONFIG.contact.whatsappIntl || ""}
                </a>
              </li>
            )}
            {CONFIG.contact.email && (
              <li>
                <a
                  className="hover:text-teal-600 transition-colors duration-300 inline-flex items-center gap-2 group"
                  href={`mailto:${CONFIG.contact.email}`}
                >
                  <span className="w-1 h-1 rounded-full bg-teal-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  {CONFIG.contact.email}
                </a>
              </li>
            )}
            <li>
              <a
                className="hover:text-teal-600 transition-colors duration-300 inline-flex items-center gap-2 group"
                target="_blank"
                rel="noreferrer"
                href={CONFIG.contact.instagram}
              >
                <span className="w-1 h-1 rounded-full bg-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3: secciones */}
        <div>
          <h5 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide">
            {locale === "en" ? "Sections" : "Secciones"}
          </h5>
          <ul className="text-slate-600 space-y-2.5 text-sm">
            <li>
              <a
                className="hover:text-teal-600 transition-colors duration-300 inline-flex items-center gap-2 group"
                href="#sobre"
              >
                <span className="w-1 h-1 rounded-full bg-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                {t.nav.about}
              </a>
            </li>
            <li>
              <a
                className="hover:text-teal-600 transition-colors duration-300 inline-flex items-center gap-2 group"
                href="#hass"
              >
                <span className="w-1 h-1 rounded-full bg-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                {t.nav.products}
              </a>
            </li>
            <li>
              <a
                className="hover:text-teal-600 transition-colors duration-300 inline-flex items-center gap-2 group"
                href="#contacto"
              >
                <span className="w-1 h-1 rounded-full bg-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                {t.nav.contact}
              </a>
            </li>
          </ul>
        </div>

        {/* Col 4: legal */}
        <div>
          <h5 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide">
            {locale === "en" ? "Legal" : "Legal"}
          </h5>
          <p className="text-xs text-slate-500 leading-relaxed mb-3">
            © {year} {CONFIG.site.name}. {rights}
          </p>
          <p className="text-xs text-slate-500 leading-relaxed">
            {locale === "en" ? "Designed by" : "Diseñado por"}{" "}
            <a
              href="https://modularsoluciones.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:text-teal-700 font-semibold underline underline-offset-2 transition-colors duration-300"
            >
              Modular Soluciones
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
