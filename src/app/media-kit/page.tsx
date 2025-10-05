// src/app/media-kit/page.tsx
import { Container, Card, Button } from "@/components/ui/primitives";
import { CONFIG } from "@/lib/config";

export default function MediaKitPage() {
  return (
    <main>
      <section className="py-16 sm:py-20">
        <Container>
          <h1 className="text-3xl sm:text-4xl font-bold text-stone-900">Media kit</h1>
          <p className="mt-3 text-stone-600 max-w-2xl">
            Recursos para prensa y aliados: marca, fotos aprobadas y texto institucional.
            Si necesitás material adicional, escribinos por Instagram.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-stone-900">Identidad</h2>
              <ul className="mt-2 list-disc list-inside text-stone-700 space-y-1">
                <li>Logo en SVG (favicon) y variaciones</li>
                <li>Paleta y uso recomendado</li>
                <li>Tipografía y tamaños</li>
              </ul>
              <div className="mt-4 flex gap-3">
                <Button href="/favicon.svg" variant="ghost">Logo (SVG)</Button>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold text-stone-900">Fotografías</h2>
              <ul className="mt-2 list-disc list-inside text-stone-700 space-y-1">
                <li>Finca y paisajes</li>
                <li>Procesos (café, huerto)</li>
                <li>Detalle de cultivos</li>
              </ul>
              <p className="mt-2 text-sm text-stone-500">
                Próximamente: paquete de fotos aprobadas.
              </p>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold text-stone-900">Texto institucional</h2>
              <p className="mt-2 text-stone-700">
                {CONFIG.site.name} es una finca en {CONFIG.contact.locationLabel}. Cultivamos
                aguacate Hass, café y hortalizas con foco en prácticas responsables y relaciones de largo plazo.
              </p>
              <div className="mt-4 flex gap-3">
                <Button href={CONFIG.contact.instagram} variant="ghost">Contacto de prensa</Button>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold text-stone-900">Descargas</h2>
              <p className="mt-2 text-stone-700">
                Si ya tenés el PDF de media kit, colocá <code>public/media-kit.pdf</code> y usá el botón.
              </p>
              <div className="mt-4 flex gap-3">
                <Button href="/media-kit.pdf">Descargar media kit (PDF)</Button>
              </div>
            </Card>
          </div>
        </Container>
      </section>
    </main>
  );
}
