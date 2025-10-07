// src/lib/config.ts
export const CONFIG = {
  site: {
    name: "Santa Frida Farm",
    lang: "es",
    description:
      "Cultivamos con amor en Marinilla, Antioquia. Aguacate Hass, café de especialidad y hortalizas frescas — cultivo consciente en el oriente antioqueño.",
    tagline: "Conscious farming in Antioquia",
  },

  // ← NUEVO: usado por Header.tsx
  brand: {
    // El Header usa brand.logoText. Lo dejamos igual al nombre del sitio.
    logoText: "Santa Frida Farm",
    // (opcional) si después querés, podés agregar: logoSrc, logoAlt, etc.
  },

  contact: {
    whatsappNumber: "+97509081460",
    whatsappIntl: "+975 090 814 60",
    email: "santafrida.colombia@gmail.com",
    instagram: "https://www.instagram.com/santafridafarm/",
    locationLabel: "Marinilla, Antioquia, Colombia",
    mapsUrl: "https://maps.google.com/?q=Marinilla,%20Antioquia,%20Colombia",
    whatsappPreset:
      "Hola Santa Frida Farm, me gustaría coordinar una visita / hacer una consulta. ¡Gracias!",
  },
} as const;
