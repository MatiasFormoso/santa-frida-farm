// src/lib/config.ts
export const CONFIG = {
  site: {
    name: "Santa Frida Farm",
    lang: "es",
    url: "https://santafridafarm.com",
    description:
      "Finca familiar premium en Marinilla, Antioquia. Exportador líder de aguacate Hass, café Catimor de especialidad y hortalizas orgánicas a Emiratos Árabes Unidos y Canadá. Cultivo consciente, trazabilidad completa y agricultura sostenible con certificaciones internacionales.",
    tagline: "Premium agricultural exports from Antioquia, Colombia to UAE and Canada - Conscious farming with complete traceability",
    keywords: "aguacate hass colombia, café catimor antioquia, hortalizas orgánicas marinilla, exportación agrícola colombia, export aguacate emiratos arabes, export coffee canada, aguacate hass emiratos arabes unidos, café especialidad canadá, exportación hortalizas colombia, agricultura sostenible, trazabilidad alimentaria, finca familiar antioquia, cultivo consciente, maría yennis silgado, santa frida farm, café de especialidad colombia, aguacate hass premium, hortalizas frescas antioquia, agricultura familiar colombia, productos agrícolas exportación, finca marinilla antioquia, café caturra timor, cultivo sostenible colombia, trazabilidad del campo a la mesa, agricultura regenerativa antioquia, export colombia uae, export colombia canada, agricultural exports colombia, premium avocado exporter, specialty coffee exporter, organic vegetables exporter, colombian agricultural products, international food export, certified organic farming colombia, sustainable agriculture export, food traceability colombia, agricultural supply chain colombia",
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
