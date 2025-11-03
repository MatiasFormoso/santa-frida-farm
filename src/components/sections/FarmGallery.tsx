"use client";

import { Section } from "@/components/ui/primitives";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Dict, Locale } from "@/i18n/config";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = { t: Dict; locale: Locale };

// Galería Comunitaria - Imágenes desde /images/client-photos/
const ALL_CLIENT_PHOTOS = [
  {
    id: "photo-1",
    src: "/images/client-photos/WhatsApp Image 2025-10-18 at 17.18.02 (1).jpeg",
    alt: "Santa Frida Farm",
    category: "general",
  },
  {
    id: "photo-2",
    src: "/images/client-photos/WhatsApp Image 2025-10-18 at 17.18.02.jpeg",
    alt: "Santa Frida Farm",
    category: "general",
  },
  {
    id: "photo-3",
    src: "/images/client-photos/WhatsApp Image 2025-10-18 at 17.18.03 (1).jpeg",
    alt: "Santa Frida Farm",
    category: "general",
  },
  {
    id: "photo-4",
    src: "/images/client-photos/WhatsApp Image 2025-10-18 at 17.18.03.jpeg",
    alt: "Santa Frida Farm",
    category: "general",
  },
  {
    id: "photo-5",
    src: "/images/client-photos/WhatsApp Image 2025-10-18 at 17.18.04.jpeg",
    alt: "Santa Frida Farm",
    category: "general",
  },
  {
    id: "photo-6",
    src: "/images/client-photos/WhatsApp Image 2025-10-18 at 17.19.03.jpeg",
    alt: "Santa Frida Farm",
    category: "general",
  },
  {
    id: "photo-7",
    src: "/images/client-photos/WhatsApp Image 2025-10-18 at 17.19.41.jpeg",
    alt: "Santa Frida Farm",
    category: "general",
  },
  {
    id: "photo-8",
    src: "/images/client-photos/WhatsApp Image 2025-10-18 at 17.20.37.jpeg",
    alt: "Santa Frida Farm",
    category: "general",
  },
  {
    id: "photo-9",
    src: "/images/client-photos/WhatsApp Image 2025-10-18 at 17.24.18.jpeg",
    alt: "Santa Frida Farm",
    category: "general",
  },
  {
    id: "photo-10",
    src: "/images/client-photos/WhatsApp Image 2025-10-18 at 17.24.19 (1).jpeg",
    alt: "Santa Frida Farm",
    category: "general",
  },
  {
    id: "photo-11",
    src: "/images/client-photos/WhatsApp Image 2025-10-18 at 17.24.19.jpeg",
    alt: "Santa Frida Farm",
    category: "general",
  },
];

export default function FarmGallery({ t, locale }: Props) {
  const [currentPhotos, setCurrentPhotos] = useState<number[]>([0, 1, 2]);
  const [usedPhotos, setUsedPhotos] = useState<number[]>([0, 1, 2]);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  // Función para obtener las próximas 3 fotos sin repetir
  const getNextThreePhotos = () => {
    const availablePhotos = ALL_CLIENT_PHOTOS.map((_, index) => index).filter(
      index => !usedPhotos.includes(index)
    );

    if (availablePhotos.length < 3) {
      // Si no hay suficientes fotos disponibles, reiniciar el ciclo
      const newPhotos = [0, 1, 2];
      setUsedPhotos(newPhotos);
      return newPhotos;
    }

    // Seleccionar 3 fotos aleatorias de las disponibles
    const shuffled = [...availablePhotos].sort(() => 0.5 - Math.random());
    const nextThree = shuffled.slice(0, 3);
    setUsedPhotos(prev => [...prev, ...nextThree]);
    return nextThree;
  };

  // Auto-play del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      const nextPhotos = getNextThreePhotos();
      setCurrentPhotos(nextPhotos);
    }, 5000);
    return () => clearInterval(interval);
  }, [usedPhotos]);

  const nextSlide = () => {
    const nextPhotos = getNextThreePhotos();
    setCurrentPhotos(nextPhotos);
  };

  const prevSlide = () => {
    // Para el botón anterior, simplemente obtener nuevas fotos
    const nextPhotos = getNextThreePhotos();
    setCurrentPhotos(nextPhotos);
  };

  const openModal = (photoSrc: string) => {
    setSelectedPhoto(photoSrc);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <Section
      id="farm-gallery"
      eyebrow={t.gallery.eyebrow}
      title={t.gallery.title}
      intro={t.gallery.intro}
    >
      <ScrollReveal>
        <div className="relative max-w-7xl mx-auto">
          {/* Carrusel Container - 3 marcos verticales */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-slate-50/50 shadow-2xl border border-slate-200/40 p-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 h-[600px] sm:h-[520px]">
              {/* Marco principal */}
              <motion.div
                key={`main-${currentPhotos[0]}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative overflow-hidden rounded-2xl border border-slate-300/30 shadow-lg bg-white group"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ALL_CLIENT_PHOTOS[currentPhotos[0]!]!.src}
                  alt={ALL_CLIENT_PHOTOS[currentPhotos[0]!]!.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-102"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-white text-sm font-semibold tracking-wide">
                      SANTA FRIDA FARM
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* Marco central */}
              <motion.div
                key={`center-${currentPhotos[1]}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                className="relative overflow-hidden rounded-2xl border border-slate-300/30 shadow-lg bg-white group"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ALL_CLIENT_PHOTOS[currentPhotos[1]!]!.src}
                  alt={ALL_CLIENT_PHOTOS[currentPhotos[1]!]!.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-102"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-white text-sm font-semibold tracking-wide">
                      SANTA FRIDA FARM
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* Marco derecho - solo visible en desktop */}
              <motion.div
                key={`right-${currentPhotos[2]}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
                className="relative overflow-hidden rounded-2xl border border-slate-300/30 shadow-lg bg-white group hidden sm:block"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ALL_CLIENT_PHOTOS[currentPhotos[2]!]!.src}
                  alt={ALL_CLIENT_PHOTOS[currentPhotos[2]!]!.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-102"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-white text-sm font-semibold tracking-wide">
                      SANTA FRIDA FARM
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Controles de navegación */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center text-slate-700 hover:bg-white hover:text-emerald-600 transition-all duration-300 group shadow-xl border border-slate-200/50"
            >
              <svg
                className="w-6 h-6 transition-transform group-hover:-translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center text-slate-700 hover:bg-white hover:text-emerald-600 transition-all duration-300 group shadow-xl border border-slate-200/50"
            >
              <svg
                className="w-6 h-6 transition-transform group-hover:translate-x-0.5"
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
            </button>
          </div>

          {/* Mini galería debajo - solo visible en desktop */}
          <div className="mt-12 hidden sm:grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-11 gap-4">
            {ALL_CLIENT_PHOTOS.map((photo, index) => (
              <motion.button
                key={photo.id}
                onClick={() => {
                  // Seleccionar esta foto y 2 más aleatorias
                  const availablePhotos = ALL_CLIENT_PHOTOS.map((_, i) => i).filter(
                    i => i !== index
                  );
                  const shuffled = [...availablePhotos].sort(() => 0.5 - Math.random());
                  const selectedPhotos = [index, ...shuffled.slice(0, 2)];
                  setCurrentPhotos(selectedPhotos);
                  setUsedPhotos(prev => [...prev, ...selectedPhotos]);
                  openModal(photo.src);
                }}
                className={`group relative overflow-hidden rounded-xl border-2 transition-all duration-300 bg-white shadow-md hover:shadow-xl ${
                  currentPhotos.includes(index)
                    ? "border-emerald-500 shadow-lg ring-2 ring-emerald-500/20"
                    : "border-slate-200/60 hover:border-slate-300"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="aspect-square overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Overlay profesional */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Texto informativo */}
      <ScrollReveal delay={0.1} duration={0.5}>
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              {locale === "en" ? "Experience Our Quality" : "Experimentá Nuestra Calidad"}
            </h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              {locale === "en"
                ? "Join our community and stay updated with our latest coffee production processes, sustainability initiatives, and farm updates."
                : "Unite a nuestra comunidad y mantente actualizado con nuestros últimos procesos de producción de café, iniciativas de sostenibilidad y actualizaciones de la finca."}
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Modal para ver foto completa */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            <button
              onClick={closeModal}
              className="absolute -top-16 right-0 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 shadow-lg border border-white/20"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedPhoto}
                alt="Vista ampliada"
                className="w-full h-full object-contain max-h-[80vh] rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
