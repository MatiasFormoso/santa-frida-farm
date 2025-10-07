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
    // opcional: si querés sobreescribir las cards desde el diccionario
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
    description: string; // <- NUEVO
    rights: string;
  };

  // NUEVO: secciones extendidas
  company: {
    historyTitle: string;
    historyBody: string;
    visionTitle: string;
    visionBody: string;
    missionTitle: string;
    missionBody: string;
    specialtyTitle: string;
    specialtyBody: string;
    participationTitle: string;
    participationBody: string;
  };
  participation: {
    eyebrow: string;
    title: string;
    intro: string;
    items: string[];
  };
  training: {
    eyebrow: string;
    title: string;
    intro: string;
    cta: string;
    items: { title: string; body: string }[];
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
