// src/lib/config.ts
export const CONFIG = {
  site: {
    name: "Santa Frida Farm",
    lang: "es",
    url: "https://santa-frida-farm.vercel.app", // ← ajusta tu dominio si cambia
    description:
      "Cultivamos con amor en Marinilla, Antioquia. Aguacate Hass, café de especialidad y hortalizas frescas — cultivo consciente en el oriente antioqueño.",
    tagline: "Conscious farming in Antioquia",
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
    mapsUrl: "https://maps.google.com/?q=Marinilla,%20Antioquia,%20Colombia",
    whatsappPreset:
      "Hola Santa Frida Farm, me gustaría coordinar una visita / hacer una consulta. ¡Gracias!",
  },
} as const;
