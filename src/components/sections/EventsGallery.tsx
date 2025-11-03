// src/components/sections/EventsGallery.tsx
import { Section } from "@/components/ui/primitives";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Dict, Locale } from "@/i18n/config";
import Image from "next/image";

interface MediaItem {
  type: "image" | "video";
  src: string;
  alt?: string;
}

interface Event {
  id: string;
  title: string;
  description: string;
  images: MediaItem[];
  video?: MediaItem | undefined;
  date?: string;
}

export default function EventsGallery({ t, locale }: { t: Dict; locale: Locale }) {
  // Estructura de eventos - fácil de expandir
  const events: Event[] = [
    {
      id: "finca-el-balcon-pasantia-2025",
      title:
        locale === "en"
          ? "Finca El Balcón Internship | San Pedro de los Milagros 🇨🇴"
          : "Pasantía Finca El Balcón | San Pedro de los Milagros 🇨🇴",
      description:
        locale === "en"
          ? "Learning experience at Finca El Balcón, a family dairy operating since 1988. We learned about solar energy applications, sustainable technologies, and innovation adapted to different agricultural contexts. The Arango Tamayo family demonstrated strength in transforming challenging environments into productive spaces."
          : "Experiencia de aprendizaje en Finca El Balcón, empresa quesera y lechera familiar desde 1988. Conocimos aplicaciones de energía solar, tecnologías sostenibles e innovación adaptada a diferentes contextos. La familia Arango Tamayo mostró fortaleza en transformar entornos desafiantes en espacios productivos.",
      date:
        locale === "en" ? "2025 | San Pedro de los Milagros" : "2025 | San Pedro de los Milagros",
      images: [
        {
          type: "image",
          src: "/images/events/pasantia-balcon/WhatsApp Image 2025-10-29 at 12.01.07.jpeg",
          alt: "Visita a Finca El Balcón",
        },
        {
          type: "image",
          src: "/images/events/pasantia-balcon/WhatsApp Image 2025-10-29 at 12.01.08.jpeg",
          alt: "Instalaciones",
        },
        {
          type: "image",
          src: "/images/events/pasantia-balcon/WhatsApp Image 2025-10-29 at 12.01.09 (1).jpeg",
          alt: "Tecnología agrícola",
        },
        {
          type: "image",
          src: "/images/events/pasantia-balcon/WhatsApp Image 2025-10-29 at 12.01.09.jpeg",
          alt: "Procesos sostenibles",
        },
      ],
      // VIDEO: Agrega aquí el video 9:16 de la pasantía (YouTube o archivo local)
      // Ejemplo con YouTube:
      // video: { type: "video", src: "https://www.youtube.com/embed/VIDEO_ID", alt: "Pasantía Finca El Balcón" },
      // Ejemplo con archivo local:
      // video: { type: "video", src: "/videos/pasantia-balcon.mp4", alt: "Pasantía Finca El Balcón" },
    },
    {
      id: "global-food-week-2025",
      title:
        locale === "en"
          ? "Global Food Week 2025 | Abu Dhabi 🇦🇪"
          : "Global Food Week 2025 | Abu Dhabi 🇦🇪",
      description:
        locale === "en"
          ? "An event bringing together innovation, technology, and sustainability. We're inspired by how the UAE supports agricultural projects transforming desert environments. A valuable experience connecting us with companies across the Middle East and Europe, opening opportunities for the future of sustainable food production."
          : "Un evento que reúne innovación, tecnología y sostenibilidad. Nos inspira ver cómo los EAU apoyan proyectos agrícolas que transforman entornos desérticos. Una experiencia valiosa que nos conecta con empresas de Medio Oriente y Europa, abriendo oportunidades para el futuro de la producción alimentaria sostenible.",
      date: locale === "en" ? "January 2025 | Abu Dhabi" : "Enero 2025 | Abu Dhabi",
      images: [
        {
          type: "image",
          src: "/images/events/global-food-week/WhatsApp Image 2025-11-02 at 20.27.28.jpeg",
          alt: "Stand del evento",
        },
        {
          type: "image",
          src: "/images/events/global-food-week/WhatsApp Image 2025-11-02 at 20.27.54.jpeg",
          alt: "Proyectos agrícolas",
        },
        {
          type: "image",
          src: "/images/events/global-food-week/WhatsApp Image 2025-11-02 at 20.28.08.jpeg",
          alt: "Tecnología agrícola",
        },
        {
          type: "image",
          src: "/images/events/global-food-week/WhatsApp Image 2025-11-02 at 20.28.21.jpeg",
          alt: "Innovación sostenible",
        },
      ],
      // VIDEO: Agrega aquí el video 9:16 del evento (YouTube o archivo local)
      // Ejemplo con YouTube:
      // video: { type: "video", src: "https://www.youtube.com/embed/VIDEO_ID", alt: "Global Food Week 2025" },
      // Ejemplo con archivo local:
      // video: { type: "video", src: "/videos/global-food-week.mp4", alt: "Global Food Week 2025" },
    },
    {
      id: "world-coffee-dubai-2025",
      title: locale === "en" ? "World of Coffee Dubai 2025 🇦🇪" : "World of Coffee Dubai 2025 🇦🇪",
      description:
        locale === "en"
          ? "For the first time as visitors, we participated in the largest coffee meeting in the Middle East. An inspiring experience connecting with leading professionals worldwide. Our farm is in development, and this marks an excellent beginning to our journey in specialty coffee. We attended Ethiopian coffee tastings, exploring fruity flavors and smooth aromatic profiles."
          : "Por primera vez como visitantes, participamos en el encuentro mundial más grande de café en Medio Oriente. Una experiencia inspiradora para conectarnos con los mejores profesionales a nivel mundial. Nuestra finca está en desarrollo y esto marca un excelente comienzo en nuestro camino hacia el café de especialidad. Asistimos a catas de café etíope, explorando sabores frutales y perfiles aromáticos suaves.",
      date: locale === "en" ? "February 10-12, 2025 | Dubai" : "10-12 Febrero, 2025 | Dubai",
      images: [
        {
          type: "image",
          src: "/images/events/world-coffee-dubai/WhatsApp Image 2025-11-02 at 20.24.40.jpeg",
          alt: "Entrada World of Coffee Dubai",
        },
        {
          type: "image",
          src: "/images/events/world-coffee-dubai/WhatsApp Image 2025-11-02 at 20.24.57.jpeg",
          alt: "Stand de catas",
        },
        {
          type: "image",
          src: "/images/events/world-coffee-dubai/WhatsApp Image 2025-11-02 at 20.25.30.jpeg",
          alt: "Tostadores internacionales",
        },
      ],
      // VIDEO: Agrega aquí el video 9:16 del evento (YouTube o archivo local)
      // Ejemplo con YouTube:
      // video: { type: "video", src: "https://www.youtube.com/embed/VIDEO_ID", alt: "World of Coffee Dubai 2025" },
      // Ejemplo con archivo local:
      // video: { type: "video", src: "/videos/world-coffee-dubai.mp4", alt: "World of Coffee Dubai 2025" },
    },
  ];

  return (
    <Section
      id="galeria-eventos"
      tone="plain"
      eyebrow={t.events.gallery}
      title={t.events.title}
      intro={t.events.intro}
    >
      {events.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-slate-500 text-lg">
            {locale === "en"
              ? "Events will be added here soon."
              : "Los eventos se agregarán aquí próximamente."}
          </p>
        </div>
      ) : (
        <div className="space-y-16">
          {events.map((event, index) => (
            <ScrollReveal key={event.id} delay={index * 0.1}>
              <EventCard event={event} />
            </ScrollReveal>
          ))}
        </div>
      )}
    </Section>
  );
}

function EventCard({ event }: { event: Event }) {
  const hasVideo = event.video && event.video.src;

  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
      {/* Header del evento */}
      <div className="p-6 sm:p-8 border-b border-slate-100">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-2">{event.title}</h3>
            {event.date && <p className="text-sm text-slate-500 font-medium">{event.date}</p>}
          </div>
        </div>
        {event.description && (
          <p className="mt-4 text-slate-600 leading-relaxed">{event.description}</p>
        )}
      </div>

      {/* Video + Galería de imágenes */}
      <div className="p-6 sm:p-8 bg-gradient-to-b from-slate-50 to-white">
        <div className={`grid gap-6 ${hasVideo ? "grid-cols-1 lg:grid-cols-3" : "grid-cols-1"}`}>
          {/* Video 9:16 - izquierda en desktop */}
          {hasVideo && (
            <div className="lg:col-span-1">
              <div className="relative overflow-hidden rounded-xl border-2 border-dashed border-slate-300 bg-slate-100/50">
                <div className="aspect-[9/16] relative flex items-center justify-center max-w-[280px] mx-auto">
                  {event.video!.src.includes("youtube.com") ||
                  event.video!.src.includes("youtu.be") ? (
                    <iframe
                      src={event.video!.src}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={event.video!.alt || "Video del evento"}
                    />
                  ) : (
                    <video
                      src={event.video!.src}
                      controls
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      Tu navegador no soporta video.
                    </video>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Galería de imágenes - derecha en desktop */}
          <div className={hasVideo ? "lg:col-span-2" : "w-full"}>
            <div
              className={`grid gap-4 ${
                hasVideo
                  ? "grid-cols-1 sm:grid-cols-2"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {event.images && event.images.length > 0 ? (
                event.images.map((image, idx) => (
                  <div
                    key={idx}
                    className="relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={image.src}
                        alt={image.alt || `Imagen ${idx + 1} del evento`}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full">
                  <div className="border-2 border-dashed border-slate-300 rounded-xl bg-slate-50/50 p-12">
                    <div className="text-center">
                      <svg
                        className="w-12 h-12 mx-auto mb-3 text-slate-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="text-sm font-medium text-slate-600">Fotos del evento</p>
                      <p className="text-xs text-slate-500 mt-1">Agrega imágenes aquí</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
