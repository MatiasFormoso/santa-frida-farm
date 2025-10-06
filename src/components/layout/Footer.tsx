import { CONFIG } from "@/lib/config";
import { Container } from "@/components/ui/primitives";
import type { Dict, Locale } from "@/i18n/config";

type Props = {
  t: Dict;
  locale: Locale;
};

export default function Footer({ t, locale }: Props) {
  const year = new Date().getFullYear();
  const rights =
    locale === "en"
      ? "All rights reserved."
      : "Todos los derechos reservados.";

  return (
    <footer className="border-t bg-white">
      <Container className="py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Col 1: marca + descripción */}
        <div>
          <h4 className="font-semibold text-stone-900">{CONFIG.site.name}</h4>
          <p className="mt-2 text-stone-600 max-w-xs">
            {CONFIG.site.description}
          </p>
        </div>

        {/* Col 2: contacto */}
        <div>
          <h5 className="font-semibold text-stone-900">
            {t.nav.contact /* Contacto / Contact */}
          </h5>
          <ul className="mt-2 text-stone-700 space-y-1">
            {CONFIG.contact.whatsappUrl && (
              <li>
                <a className="hover:underline" href={CONFIG.contact.whatsappUrl}>
                  WhatsApp {CONFIG.contact.whatsappIntl || ""}
                </a>
              </li>
            )}
            <li>
              <a className="hover:underline" href={`mailto:${CONFIG.contact.email}`}>
                {CONFIG.contact.email}
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
                href={CONFIG.contact.instagram}
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3: secciones */}
        <div>
          <h5 className="font-semibold text-stone-900">
            {locale === "en" ? "Sections" : "Secciones"}
          </h5>
          <ul className="mt-2 text-stone-700 space-y-1">
            <li>
              <a className="hover:underline" href="#sobre">
                {t.nav.about}
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#productos">
                {t.nav.products}
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#contacto">
                {t.nav.contact}
              </a>
            </li>
          </ul>
        </div>

        {/* Col 4: legal */}
        <div>
          <h5 className="font-semibold text-stone-900">
            {locale === "en" ? "Legal" : "Legal"}
          </h5>
          <p className="mt-2 text-sm text-stone-600">
            © {year} {CONFIG.site.name}. {rights}
          </p>
        </div>
      </Container>
    </footer>
  );
}
