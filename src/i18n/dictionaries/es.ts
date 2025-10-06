import type { Dict } from "../config";

const es: Dict = {
  meta: {
    title: "Santa Frida Farm",
    description:
      "Grown with love in Marinilla, Antioquia. Hass avocados, specialty coffee and fresh greens — cultivo consciente en el oriente antioqueño.",
  },
  nav: {
    home: "Inicio",
    about: "Sobre la finca",
    products: "Cultivos",
    contact: "Contacto",
  },
  hero: {
    title: "Santa Frida Farm",
    subtitle:
      "Grown with love in Marinilla, Antioquia. Hass avocados, specialty coffee and fresh greens — cultivo consciente en el oriente antioqueño.",
    cta: "Conocer la finca",
  },
  about: {
    title: "Quiénes somos",
    body:
      "Finca ubicada en Marinilla, Antioquia. Cultivamos aguacate Hass, café y hortalizas con foco en calidad, cuidado del entorno y relaciones a largo plazo.\n\n" +
      "Propósito — Producir alimentos nobles y consistentes, respetando los ritmos del territorio y priorizando vínculos de confianza con nuestra comunidad.\n\n" +
      "Prácticas — Manejo responsable de suelos y agua, monitoreo y control integrado de plagas, cosecha oportuna y foco en trazabilidad y mejora continua.\n\n" +
      "Comunidad — Compartimos avances y actividades de la finca en redes, y abrimos espacios de visita y aprendizaje cuando hay cupos disponibles.",
    cards: [
      {
        title: "Propósito",
        body:
          "Producir alimentos nobles y consistentes, respetando los ritmos del territorio y priorizando vínculos de confianza con nuestra comunidad.",
      },
      {
        title: "Prácticas",
        body:
          "Manejo responsable de suelos y agua, monitoreo y control integrado de plagas, cosecha oportuna y foco en trazabilidad y mejora continua.",
      },
      {
        title: "Comunidad",
        body:
          "Compartimos avances y actividades de la finca en redes y abrimos visitas de aprendizaje cuando hay cupos disponibles.",
      },
    ],
  },
  process: {
    title: "Visitas",
    items: [
      "Recorrido cafetalero (3 h) — Del árbol a la taza; Cosecha guiada; Proceso y cata básica. Cupos limitados.",
      "Jornada de huerto — Siembra/trasplante; Compost y riego; Cosecha de temporada. Cupos limitados.",
    ],
  },
  varietals: {
    title: "Cultivos",
    items: ["Hass Avocados", "Specialty Coffee", "Fresh Greens"],
  },

  // 👇 NUEVO
  products: {
    avocado: {
      name: "Hass Avocados",
      summary:
        "Huertos en crecimiento y manejo responsable. Calidad consistente para aliados locales.",
      bullets: ["Trazabilidad por lote", "Manejo integrado de plagas", "Cosecha oportuna"],
    },
    coffee: {
      name: "Specialty Coffee",
      summary:
        "Perfiles equilibrados en lotes pequeños y formación continua en tueste y cata.",
      bullets: ["Tueste reciente", "Perfiles consistentes", "Control de calidad"],
    },
    greens: {
      name: "Fresh Greens",
      summary:
        "Hortalizas y hojas de temporada. Cosecha cercana al consumo para cocinas y familias.",
      bullets: ["Selección semanal", "Cadena en frío", "Entrega local"],
    },
  },

  mediaKit: {
    title: "Comunidad",
    subtitle: "Cosechas, procesos y vida en finca. Más en nuestro Instagram.",
  },
  contact: {
    title: "Pedidos y consultas",
    subtitle:
      "Canales oficiales para escribirnos. WhatsApp y correo se activarán en cuanto estén confirmados.\n\n" +
      "Dónde estamos — Marinilla, Antioquia, Colombia. Oriente antioqueño — microclimas ideales para aguacate Hass y café.",
    whatsappCta: "Abrir WhatsApp",
  },
  footer: {
    rights: "© 2025 Santa Frida Farm. Todos los derechos reservados.",
  },
};

export default es;
