// src/lib/structured-data.ts
import { CONFIG } from "@/lib/config";

export interface StructuredDataProps {
  locale: "es" | "en";
  type?: "Organization" | "AgriculturalBusiness" | "LocalBusiness" | "Product";
}

export function generateStructuredData({ locale }: StructuredDataProps) {
  const isEN = locale === "en";
  
  const baseData = {
    "@context": "https://schema.org",
    "@type": "AgriculturalBusiness",
    "name": "Santa Frida Farm",
    "alternateName": "Santa Frida Farm",
    "description": isEN 
      ? "Family farm specializing in Hass avocados, Catimor specialty coffee, and organic vegetables from Marinilla, Antioquia, Colombia. Conscious farming with sustainable practices and complete traceability."
      : "Finca familiar especializada en aguacate Hass, café Catimor de especialidad y hortalizas orgánicas desde Marinilla, Antioquia, Colombia. Cultivo consciente con prácticas sostenibles y trazabilidad completa.",
    "url": CONFIG.site.url,
    "logo": `${CONFIG.site.url}/logo-santa-frida.png`,
    "image": `${CONFIG.site.url}/images/hero-1920-optimized.webp`,
    "foundingDate": "2020",
    "founder": {
      "@type": "Person",
      "name": "María Yennis Silgado",
      "jobTitle": "Founder & Agricultural Producer",
      "description": isEN 
        ? "Agricultural entrepreneur and founder of Santa Frida Farm, specializing in conscious crop production and sustainable farming."
        : "Emprendedora agrícola y fundadora de Santa Frida Farm, especializada en producción consciente de cultivos y agricultura sostenible."
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Marinilla",
      "addressLocality": "Marinilla",
      "addressRegion": "Antioquia",
      "addressCountry": "CO",
      "postalCode": "054040"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "6.216000",
      "longitude": "-75.284000"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": CONFIG.contact.whatsappIntl,
      "contactType": "customer service",
      "availableLanguage": ["Spanish", "English"],
      "areaServed": ["CO", "AE", "CA"],
      "contactOption": "TollFree"
    },
    "email": CONFIG.contact.email,
    "sameAs": [
      CONFIG.contact.instagram,
      "https://santafridafarm.com"
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "Colombia"
      },
      {
        "@type": "Country", 
        "name": "United Arab Emirates"
      },
      {
        "@type": "Country",
        "name": "Canada"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": isEN ? "Agricultural Products Catalog" : "Catálogo de Productos Agrícolas",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": isEN ? "Hass Avocados" : "Aguacate Hass",
            "description": isEN 
              ? "Hass avocados grown with sustainable practices and complete traceability. Available for export."
              : "Aguacates Hass cultivados con prácticas sostenibles y trazabilidad completa. Disponibles para exportación.",
            "category": "Agricultural Product",
            "brand": {
              "@type": "Brand",
              "name": "Santa Frida Farm"
            },
            "image": `${CONFIG.site.url}/images/products/avocado-1200.webp`,
            "productionDate": "2024",
            "countryOfOrigin": "Colombia"
          },
          "availability": "https://schema.org/InStock",
          "priceCurrency": "USD",
          "eligibleRegion": [
            {
              "@type": "Country",
              "name": "United Arab Emirates"
            },
            {
              "@type": "Country",
              "name": "Canada"
            }
          ]
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": isEN ? "Catimor Specialty Coffee" : "Café Catimor de Especialidad",
            "description": isEN 
              ? "Catimor coffee (Caturra × Timor cross) with balanced cup profiles and complete traceability from tree to harvest."
              : "Café Catimor (cruce Caturra × Timor) con perfiles de taza equilibrados y trazabilidad completa del árbol a la cosecha.",
            "category": "Agricultural Product",
            "brand": {
              "@type": "Brand",
              "name": "Santa Frida Farm"
            },
            "image": `${CONFIG.site.url}/images/products/coffee-1200.webp`,
            "productionDate": "2024",
            "countryOfOrigin": "Colombia"
          },
          "availability": "https://schema.org/InStock",
          "priceCurrency": "USD",
          "eligibleRegion": [
            {
              "@type": "Country",
              "name": "United Arab Emirates"
            },
            {
              "@type": "Country",
              "name": "Canada"
            }
          ]
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": isEN ? "Fresh Organic Vegetables" : "Hortalizas Orgánicas Frescas",
            "description": isEN 
              ? "Seasonal organic vegetables including lettuce, cabbage, chili peppers, zucchini, and goldenberries. Hand-harvested and cold-chain managed."
              : "Hortalizas orgánicas de temporada incluyendo lechuga, repollo, ají, calabacín y uchuvas. Cosechadas manualmente y manejadas en cadena de frío.",
            "category": "Agricultural Product",
            "brand": {
              "@type": "Brand",
              "name": "Santa Frida Farm"
            },
            "image": `${CONFIG.site.url}/images/products/greens-1200.webp`,
            "productionDate": "2024",
            "countryOfOrigin": "Colombia"
          },
          "availability": "https://schema.org/Seasonal",
          "priceCurrency": "USD",
          "eligibleRegion": [
            {
              "@type": "Country",
              "name": "United Arab Emirates"
            },
            {
              "@type": "Country",
              "name": "Canada"
            }
          ]
        }
      ]
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "description": isEN 
          ? "International agricultural export services with complete traceability and quality certifications"
          : "Servicios de exportación agrícola internacional con trazabilidad completa y certificaciones de calidad",
        "priceCurrency": "USD",
        "eligibleRegion": [
          {
            "@type": "Country",
            "name": "United Arab Emirates"
          },
          {
            "@type": "Country",
            "name": "Canada"
          }
        ]
      }
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "certification",
        "recognizedBy": {
          "@type": "Organization",
          "name": "ICA - Instituto Colombiano Agropecuario"
        }
      },
      {
        "@type": "EducationalOccupationalCredential", 
        "credentialCategory": "certification",
        "recognizedBy": {
          "@type": "Organization",
          "name": "SENA - Servicio Nacional de Aprendizaje"
        }
      }
    ],
    "memberOf": [
      {
        "@type": "Organization",
        "name": "Cámara de Comercio del Oriente Antioqueño"
      },
      {
        "@type": "Organization",
        "name": "Agroantioquia Exporta"
      }
    ]
  };

  return baseData;
}

export function generateOrganizationStructuredData(locale: "es" | "en") {
  return generateStructuredData({ locale });
}

export function generateProductStructuredData(locale: "es" | "en", productType: "avocado" | "coffee" | "vegetables") {
  const isEN = locale === "en";
  
  const products = {
    avocado: {
      name: isEN ? "Hass Avocados" : "Aguacate Hass",
      description: isEN 
        ? "Hass avocados with complete traceability, available for export"
        : "Aguacates Hass con trazabilidad completa, disponibles para exportación",
      image: "/images/products/avocado-1200.webp"
    },
    coffee: {
      name: isEN ? "Catimor Specialty Coffee" : "Café Catimor de Especialidad", 
      description: isEN
        ? "Catimor coffee (Caturra × Timor cross) with balanced profiles"
        : "Café Catimor (cruce Caturra × Timor) con perfiles equilibrados",
      image: "/images/products/coffee-1200.webp"
    },
    vegetables: {
      name: isEN ? "Fresh Organic Vegetables" : "Hortalizas Orgánicas Frescas",
      description: isEN
        ? "Seasonal organic vegetables with hand-harvested quality"
        : "Hortalizas orgánicas de temporada con calidad cosechada manualmente",
      image: "/images/products/greens-1200.webp"
    }
  };

  const product = products[productType];

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": `${CONFIG.site.url}${product.image}`,
    "brand": {
      "@type": "Brand",
      "name": "Santa Frida Farm"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Santa Frida Farm",
      "url": CONFIG.site.url
    },
    "countryOfOrigin": "Colombia",
    "productionDate": "2024",
    "category": "Agricultural Product",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD",
      "seller": {
        "@type": "Organization",
        "name": "Santa Frida Farm"
      },
      "eligibleRegion": [
        {
          "@type": "Country",
          "name": "United Arab Emirates"
        },
        {
          "@type": "Country", 
          "name": "Canada"
        }
      ]
    }
  };
}
