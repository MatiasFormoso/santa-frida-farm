// src/i18n/config.ts
export type Dict = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    about: string;
    products: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta?: string;
  };
  about: {
    title: string;
    body: string;
    // 👇 nuevo: cards por idioma (3 items: propósito, prácticas, comunidad)
    cards?: { title: string; body: string }[];
  };
  process: {
    title: string;
    items: string[];
  };
  varietals: {
    title: string;
    items: string[];
  };
  mediaKit?: {
    title: string;
    subtitle?: string;
  };
  contact: {
    title: string;
    subtitle?: string;
    whatsappCta: string;
  };
  footer: {
    rights: string;
  };
};

export type Locale = "es" | "en";

export async function getDictionary(locale: Locale) {
  switch (locale) {
    case "en":
      return (await import("./dictionaries/en")).default;
    case "es":
    default:
      return (await import("./dictionaries/es")).default;
  }
}
