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
    /** ← para poder usar t.about.cards en About.tsx */
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
    /** opcional, por si lo tomás desde i18n */
    whatsappPreset?: string;
  };
  footer: {
    rights: string;
    /** opcional si cargás la descripción desde i18n para evitar spanglish */
    description?: string;
  };

  // Secciones extendidas (las que ya venimos usando)
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
  training?: {
    eyebrow: string;
    title: string;
    intro: string;
    cta: string;
    items: { title: string; body: string }[];
  };
  events: {
    eyebrow: string;
    title: string;
    intro: string;
    gallery: string;
    videos: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    intro: string;
  };
};

export type Locale = "es" | "en";

export async function getDictionary(locale: Locale) {
  switch (locale) {
    case "en":
      return (await import("./dictionaries/en")).default as Dict;
    case "es":
    default:
      return (await import("./dictionaries/es")).default as Dict;
  }
}
