// src/components/sections/Hero.tsx
import { CONFIG } from "@/lib/config";
import { Container } from "@/components/ui/primitives";
import type { Dict, Locale } from "@/i18n/config";

type Props = { t: Dict; locale: Locale };

/**
 * 78% de pantalla. Look cálido con capa ámbar (multiply),
 * gradiente de contraste y viñeteo sutil. Sin zoom ni animaciones.
 */
export default function Hero({ t }: Props) {
  return (
    <section
      className="
        relative
        min-h-[78svh]
        [mask-image:linear-gradient(to_bottom,black_98%,transparent_100%)]
        [-webkit-mask-image:linear-gradient(to_bottom,black_98%,transparent_100%)]
      "
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/hero-1920.jpg"
        alt="Paisaje de la finca"
        className="absolute inset-0 h-full w-full object-cover object-center will-change-auto"
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />

      {/* Capa cálida (ámbar) */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none mix-blend-multiply bg-[#F5C68A] opacity-35"
      />

      {/* Gradiente de contraste (base inferior un poco más marcada) */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-black/15 to-transparent"
      />

      {/* Viñeteo muy leve para profundidad */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_62%,rgba(0,0,0,0.12)_100%)]"
      />

      <Container className="relative z-10 flex items-end min-h-[78svh] pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-2 text-sm font-medium text-white/95 mb-6">
            <div className="w-2 h-2 rounded-full bg-emerald-400 mr-3 animate-pulse"></div>
            Marinilla · Antioquia
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)] leading-tight mb-6">
            {t.hero.title}
          </h1>

          <p className="text-lg md:text-xl text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] leading-relaxed mb-8 max-w-2xl">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#sobre"
              className="inline-flex items-center justify-center rounded-2xl border-2 border-white/40 bg-white/10 backdrop-blur-md px-8 py-4 text-white font-semibold hover:bg-white/20 hover:border-white/60 transition-all duration-300 transform hover:scale-105"
            >
              {t.hero.cta ?? "Conocer la finca"}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a
              href={CONFIG.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border-2 border-white/40 bg-white/10 backdrop-blur-md px-8 py-4 text-white font-semibold hover:bg-white/20 hover:border-white/60 transition-all duration-300 transform hover:scale-105"
            >
              <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
