import { CONFIG } from "@/lib/config";
import { Container } from "@/components/ui/primitives";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <Container className="py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h4 className="font-semibold text-stone-900">{CONFIG.site.name}</h4>
          <p className="mt-2 text-stone-600 max-w-xs">{CONFIG.site.description}</p>
        </div>
        <div>
          <h5 className="font-semibold text-stone-900">Contacto</h5>
          <ul className="mt-2 text-stone-700 space-y-1">
            {CONFIG.contact.whatsappUrl && (
              <li><a className="hover:underline" href={CONFIG.contact.whatsappUrl}>
                WhatsApp {CONFIG.contact.whatsappIntl || ""}</a></li>
            )}
            <li><a className="hover:underline" href={`mailto:${CONFIG.contact.email}`}>{CONFIG.contact.email}</a></li>
            <li><a className="hover:underline" target="_blank" rel="noreferrer" href={CONFIG.contact.instagram}>Instagram</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold text-stone-900">Secciones</h5>
          <ul className="mt-2 text-stone-700 space-y-1">
            <li><a className="hover:underline" href="#sobre">Sobre</a></li>
            <li><a className="hover:underline" href="#productos">Productos</a></li>
            <li><a className="hover:underline" href="#contacto">Contacto</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold text-stone-900">Legal</h5>
          <p className="mt-2 text-sm text-stone-600">
            © {new Date().getFullYear()} {CONFIG.site.name}. Todos los derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
