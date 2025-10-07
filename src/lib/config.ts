// src/lib/config.ts
export const CONFIG = {
  site: {
    name: "Santa Frida Farm",
    lang: "es",
    url: "https://santa-frida-farm.vercel.app", // ← agrega/ajusta tu dominio
    description:
      "Cultivamos con amor en Marinilla, Antioquia. Aguacate Hass, café de especialidad y hortalizas frescas — cultivo consciente en el oriente antioqueño.",
    tagline: "Conscious farming in Antioquia",
  },

  brand: {
    logoText: "Santa Frida Farm",
  },

  contact: {
    whatsappNumber: "+975109081460",
    whatsappIntl: "+971 50 908 1460",
    email: "santafrida.colombia@gmail.com",
    instagram: "https://www.instagram.com/santafridafarm/",
    locationLabel: "Marinilla, Antioquia, Colombia",
    mapsUrl: "https://maps.google.com/?q=Marinilla,%20Antioquia,%20Colombia",
    whatsappPreset:
      "Hola Santa Frida Farm, me gustaría coordinar una visita / hacer una consulta. ¡Gracias!",
  },
} as const;
