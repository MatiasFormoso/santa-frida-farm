// src/lib/config.ts
export const CONFIG = {
  site: {
    name: "Santa Frida Farm",
    lang: "es",
    url: "https://santafridafarm.com",
    description:
      "Finca familiar en Marinilla, Antioquia. Cultivamos aguacate Hass, café Catimor de especialidad y hortalizas orgánicas con amor y cuidado del entorno. Agricultura consciente y sostenible.",
    tagline: "Agricultura familiar consciente en Antioquia, Colombia - Cultivo sostenible con trazabilidad",
    keywords: "aguacate hass colombia, café catimor antioquia, hortalizas orgánicas marinilla, agricultura sostenible, trazabilidad alimentaria, finca familiar antioquia, cultivo consciente, maría yennis silgado, santa frida farm, café de especialidad colombia, hortalizas frescas antioquia, agricultura familiar colombia, finca marinilla antioquia, café caturra timor, cultivo sostenible colombia, trazabilidad del campo a la mesa, agricultura regenerativa antioquia, agricultural exports colombia, specialty coffee exporter, organic vegetables exporter, colombian agricultural products, sustainable agriculture export, food traceability colombia, agricultural supply chain colombia, premium avocado exporter, premium coffee exporter, agricultural export leader, premium agricultural products, exportador premium colombia, calidad premium agrícola, mejor exportador aguacate, líder exportación café colombia",
  },

  brand: {
    logoText: "Santa Frida Farm",
  },

  contact: {
    // ✅ Número corregido (formato internacional y sin espacios)
    whatsappNumber: "+573019553003",
    whatsappIntl: "+57 301 955 3003",
    email: "santafrida.colombia@gmail.com",
    instagram: "https://www.instagram.com/santafridafarm/",
    locationLabel: "Marinilla, Antioquia, Colombia",
    latitude: "6.216000",
    longitude: "-75.284000",
    mapsUrl: "https://www.google.com/maps?q=6.216000,-75.284000",
    whatsappPreset:
      "Hola Santa Frida Farm, me gustaría coordinar una visita / hacer una consulta. ¡Gracias!",
  },
} as const;
