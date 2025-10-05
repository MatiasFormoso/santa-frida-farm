// src/components/sections/Products.tsx
import { Section, Card, Img, Button } from "@/components/ui/primitives";

type Product = {
  key: string;
  name: string;
  summary: string;
  bullets: string[];
  img: string;
  alt: string;
};

const PRODUCTS: Product[] = [
  {
    key: "avocado",
    name: "Hass Avocados",
    summary:
      "Huertos en crecimiento y manejo responsable. Calidad consistente para aliados locales.",
    bullets: ["Trazabilidad por lote", "Manejo integrado de plagas", "Cosecha oportuna"],
    img: "/images/products/avocado-1200.webp",
    alt: "Aguacates Hass en árbol",
  },
  {
    key: "coffee",
    name: "Specialty Coffee",
    summary:
      "Perfiles equilibrados en lotes pequeños y formación continua en tueste y cata.",
    bullets: ["Tueste reciente", "Perfiles consistentes", "Control de calidad"],
    img: "/images/products/coffee-1200.webp",
    alt: "Cerezas de café maduras en la planta",
  },
  {
    key: "greens",
    name: "Fresh Greens",
    summary:
      "Hortalizas y hojas de temporada. Cosecha cercana al consumo para cocinas y familias.",
    bullets: ["Selección semanal", "Cadena en frío", "Entrega local"],
    img: "/images/products/greens-1200.webp",
    alt: "Filas de lechuga en invernadero",
  },
];

export default function Products() {
  return (
    <Section
      tone="alt"
      id="productos"
      eyebrow="Cultivos"
      title="Lo que cultivamos"
      intro="Tres líneas que representan el corazón de la finca. Si querés conocer cómo trabajamos el suelo, el agua y la trazabilidad, visitá la sección Sobre."
    >
      <div className="grid md:grid-cols-3 gap-6">
        {PRODUCTS.map((p) => (
          <Card key={p.key} className="p-5 flex flex-col">
            <Img src={p.img} alt={p.alt} />
            <h3 className="mt-4 text-xl font-semibold text-stone-900">{p.name}</h3>
            <p className="mt-2 text-stone-600">{p.summary}</p>
            <ul className="mt-3 space-y-1 text-stone-700">
              {p.bullets.map((b, i) => (
                <li key={i} className="flex gap-2">• <span>{b}</span></li>
              ))}
            </ul>
            <div className="mt-5 pt-4 border-t">
              <Button href="#sobre" variant="ghost">Conocer prácticas</Button>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
