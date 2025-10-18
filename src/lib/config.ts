// src/lib/config.ts
export const CONFIG = {
  site: {
    name: "Santa Frida Farm",
    lang: "es",
    url: "https://santa-frida-farm.vercel.app", // ← ajusta tu dominio si cambia
    description:
      "Productor premium de aguacate Hass, café de especialidad y hortalizas orgánicas en Marinilla, Antioquia. Agricultura sostenible y trazabilidad completa para exportación internacional.",
    tagline: "Premium agricultural products from Antioquia, Colombia",
    keywords: "aguacate hass colombia, café especialidad antioquia, hortalizas orgánicas, exportación agrícola colombia, agricultura sostenible, trazabilidad alimentaria",
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
