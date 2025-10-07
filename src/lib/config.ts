// src/lib/config.ts

/** Datos públicos del sitio y de contacto */
export const CONFIG = {
  site: {
    name: "Santa Frida Farm",
  },
  brand: {
    logoText: "Santa Frida Farm",
  },
  contact: {
    /** Número para wa.me (el código ya le quita símbolos/espacios). */
    whatsappNumber: "97509081460",
    /** Cómo se muestra en la UI (podés cambiar el formato visual). */
    whatsappIntl: "+97509081460",
    /** (Opcional) Link directo si preferís usar API custom. Déjalo vacío si no. */
    whatsappUrl: "",

    /** Email oficial */
    email: "santafrida.colombia@gmail.com",

    /** Redes y ubicación */
    instagram: "https://www.instagram.com/santafridafarm/",
    locationLabel: "Marinilla, Antioquia, Colombia",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Marinilla%2C%20Antioquia%2C%20Colombia",
  },
} as const;
