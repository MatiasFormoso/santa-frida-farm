import type { Dict } from "../config";

const en: Dict = {
  meta: {
    title: "Santa Frida Farm — Conscious farming in Antioquia",
    description:
      "Grown with love in Marinilla, Antioquia. Hass avocados, specialty coffee and fresh greens — conscious cultivation in eastern Antioquia.",
  },
  nav: {
    home: "Home",
    about: "About",
    products: "Crops",
    contact: "Contact",
  },
  hero: {
    title: "Santa Frida Farm",
    subtitle:
      "Grown with love in Marinilla, Antioquia. Hass avocados, specialty coffee and fresh greens — conscious cultivation in eastern Antioquia.",
    cta: "Visit the farm",
  },
  about: {
    title: "Who we are",
    body:
      "A family farm located in Marinilla, Antioquia. We grow Hass avocados, coffee and fresh greens with a focus on quality, environmental care and long-term relationships.\n\n" +
      "Purpose — To produce honest and consistent food, respecting the rhythms of the land and building bonds of trust with our community.\n\n" +
      "Practices — Responsible soil and water management, integrated pest monitoring and control, timely harvests and a focus on traceability and continuous improvement.\n\n" +
      "Community — We share our progress and farm activities on social media and open learning visits whenever spots are available.",
    cards: [
      {
        title: "Purpose",
        body:
          "To produce honest and consistent food, respecting the rhythms of the land and building bonds of trust with our community.",
      },
      {
        title: "Practices",
        body:
          "Responsible soil and water management, integrated pest monitoring and control, timely harvests and a focus on traceability and continuous improvement.",
      },
      {
        title: "Community",
        body:
          "We share our progress and farm activities on social media and open learning visits whenever spots are available.",
      },
    ],
  },
  process: {
    title: "Visits",
    items: [
      "Coffee Tour (3 h) — From tree to cup; Guided harvest; Basic process and tasting. Limited availability.",
      "Garden Workshop — Planting/transplanting; Compost and irrigation; Seasonal harvest. Limited availability.",
    ],
  },
  varietals: {
    title: "Crops",
    items: ["Hass Avocados", "Specialty Coffee", "Fresh Greens"],
  },

  // 👇 NUEVO
  products: {
    avocado: {
      name: "Hass Avocados",
      summary:
        "Orchards in steady growth with responsible management. Consistent quality for local partners.",
      bullets: ["Batch-level traceability", "Integrated pest management", "Timely harvests"],
    },
    coffee: {
      name: "Specialty Coffee",
      summary:
        "Balanced profiles in small lots and ongoing training in roasting and cupping.",
      bullets: ["Freshly roasted", "Consistent profiles", "Quality control"],
    },
    greens: {
      name: "Fresh Greens",
      summary:
        "Seasonal vegetables and leafy greens. Harvested close to consumption for kitchens and families.",
      bullets: ["Weekly selection", "Cold chain", "Local delivery"],
    },
  },

  mediaKit: {
    title: "Community",
    subtitle: "Harvests, processes and daily life at the farm. More on Instagram.",
  },
  contact: {
    title: "Orders and inquiries",
    subtitle:
      "Official contact channels. WhatsApp and email will be activated once confirmed.\n\n" +
      "Where we are — Marinilla, Antioquia, Colombia. Eastern Antioquia — ideal microclimates for Hass avocados and coffee.",
    whatsappCta: "Open WhatsApp",
  },
  footer: {
    rights: "© 2025 Santa Frida Farm. All rights reserved.",
  },
};

export default en;
