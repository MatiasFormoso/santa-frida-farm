// src/components/sections/Products.tsx
import { Container, Section } from "@/components/ui/primitives";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Dict, Locale } from "@/i18n/config";

type ProductKey = "avocado" | "coffee" | "greens";

type Product = {
  key: ProductKey;
  name: string;
  stats: string;
  description: string;
  features: string[];
};

const PRODUCTS_ES: Product[] = [
  {
    key: "avocado",
    name: "Aguacate Hass",
    stats: "100 árboles · ~7 t/año",
    description: "Cosechas selectivas bajo estándares premium",
    features: [
      "2 cosechas por año",
      "Selección manual premium",
      "Trazabilidad completa",
      "Disponible para exportación",
    ],
  },
  {
    key: "coffee",
    name: "Café Catimor",
    stats: "510 árboles · ~490 kg/año",
    description: "Café de especialidad con notas de cacao",
    features: [
      "Notas: cacao, frutos secos",
      "Cuerpo medio balanceado",
      "Proceso artesanal",
      "Café de especialidad premium",
    ],
  },
  {
    key: "greens",
    name: "Hortalizas",
    stats: "Temporada dependiente",
    description: "Lechuga, repollo, ají, calabacín, uchuva",
    features: [
      "Variedad estacional",
      "Cosecha manual",
      "Producto fresco",
      "Disponible en temporada",
    ],
  },
];

const PRODUCTS_EN: Product[] = [
  {
    key: "avocado",
    name: "Hass Avocado",
    stats: "100 trees · ~7 t/year",
    description: "Selective harvests to premium standards",
    features: [
      "2 harvests per year",
      "Premium manual selection",
      "Complete traceability",
      "Available for export",
    ],
  },
  {
    key: "coffee",
    name: "Catimor Coffee",
    stats: "510 trees · ~490 kg/year",
    description: "Specialty coffee with cocoa notes",
    features: [
      "Notes: cocoa, dried fruits",
      "Balanced medium body",
      "Artisanal processing",
      "Premium specialty coffee",
    ],
  },
  {
    key: "greens",
    name: "Fresh Greens",
    stats: "Season dependent",
    description: "Lettuce, cabbage, chili, zucchini, gooseberry",
    features: ["Seasonal variety", "Manual harvest", "Fresh product", "Seasonal availability"],
  },
];

function AvocadoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 3C7 3 3 6 3 10c0 4 3 8 7 10 2 1 2 1 2 1s0 0 2-1c4-2 7-6 7-10 0-4-4-7-9-7zm0 2c4 0 7 3 7 7 0 3-2.5 6-5 7.5C12 18 10 16 10 15s0-2 2-2 2 1 2 2c2-1.5 5-4.5 5-7.5 0-4-3-7-7-7z" />
      <circle cx="10" cy="11" r="1" fill="currentColor" opacity="0.6" />
      <circle cx="14" cy="11" r="1" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

function CoffeeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 6h-2V4H7v2H5c-1.1 0-2 .9-2 2v8c0 2.2 1.8 4 4 4h8c2.2 0 4-1.8 4-4V8c0-1.1-.9-2-2-2zm0 10c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V8h14v8z" />
      <path d="M20 18h1v2c0 1.1-.9 2-2 2h-8v-2h8v-2z" />
    </svg>
  );
}

function LeafIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.5 2 2 6.5 2 12c0 6 4.5 11 10 13 2.5 1 2.5 1 2.5 1s0 0 2.5-1C23 23 27.5 18 27.5 12c0-5.5-4.5-10-10-10zm0 2c4.5 0 8 3.5 8 8 0 5-3.5 9-6.5 10C13 21 11 18.5 11 17s0-2 1-2 1 0.5 1 1.5C16 22 20 17.5 20 12c0-4.5-3.5-8-8-8z" />
      <path d="M8 16c-1-2-3-3-5-3v2c1.5 0 3 0.5 4 2v-1z" />
      <path d="M16 16v1c1-1.5 2.5-2 4-2v-2c-2 0-4 1-5 3z" />
    </svg>
  );
}

function getIcon(key: ProductKey) {
  switch (key) {
    case "avocado":
      return AvocadoIcon;
    case "coffee":
      return CoffeeIcon;
    case "greens":
      return LeafIcon;
  }
}

export default function Products({ t, locale }: { t: Dict; locale: Locale }) {
  const products = locale === "en" ? PRODUCTS_EN : PRODUCTS_ES;

  return (
    <Section tone="alt" id="productos">
      <Container>
        <div className="mb-12">
          <ScrollReveal>
            <p className="text-sm font-semibold text-emerald-700 mb-3">{t.nav.products}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-4">
              {locale === "en" ? "Our Crops" : "Nuestros Cultivos"}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="text-lg text-slate-600 max-w-3xl">
              {locale === "en"
                ? "Sustainable cultivation with traceability and quality."
                : "Cultivo sostenible con trazabilidad y calidad."}
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {products.map((product, index) => {
            return (
              <ScrollReveal key={product.key} delay={index * 0.06}>
                <div className="h-full">
                  <div className="bg-white border border-slate-200 rounded-xl p-6 h-full group hover:shadow-md hover:border-slate-300 transition-all duration-300">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{product.name}</h3>
                    <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-3" />
                    <p className="text-sm font-medium text-slate-700 mb-3">{product.stats}</p>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {product.description}
                    </p>

                    <div className="space-y-2 pt-4 border-t border-slate-100">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <svg
                            className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-xs text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="flex justify-start">
          <ScrollReveal>
            <a
              href={`/${locale}/cultivos`}
              className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              <span>{locale === "en" ? "More information" : "Ver más información"}</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}
