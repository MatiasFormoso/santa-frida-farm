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
      id="hero"
      className="
        relative
        min-h-[78svh]
        overflow-hidden
        [mask-image:linear-gradient(to_bottom,black_98%,transparent_100%)]
        [-webkit-mask-image:linear-gradient(to_bottom,black_98%,transparent_100%)]
      "
      style={{ height: '78vh', minHeight: '78vh' }}
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

      <Container className="relative z-10 flex items-end min-h-[78svh] pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-4xl animate-fade-in-up">
          <div className="inline-flex items-center rounded-full border border-white/30 bg-white/15 backdrop-blur-xl px-4 py-2.5 text-sm sm:text-base font-medium text-white/95 mb-6 sm:mb-8 shadow-lg shadow-black/20 hover:bg-white/20 transition-all duration-300">
            <div className="w-2 h-2 rounded-full bg-emerald-400 mr-3 animate-pulse shadow-lg shadow-emerald-400/50"></div>
            <span className="tracking-wide">Marinilla · Antioquia</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-[0_6px_20px_rgba(0,0,0,0.8)] leading-[1.1] tracking-tight mb-6 sm:mb-8">
            {t.hero.title}
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/95 drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)] leading-relaxed mb-8 sm:mb-10 max-w-3xl font-light">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <a
              href="#sobre"
              className="group inline-flex items-center justify-center rounded-xl sm:rounded-2xl border-2 border-white/50 bg-white/15 backdrop-blur-xl px-6 sm:px-8 py-3.5 sm:py-4 text-white font-semibold hover:bg-white/25 hover:border-white/70 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30"
            >
              <span>{t.hero.cta ?? "Conocer la finca"}</span>
              <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a
              href={CONFIG.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center rounded-xl sm:rounded-2xl border-2 border-white/50 bg-white/15 backdrop-blur-xl px-6 sm:px-8 py-3.5 sm:py-4 text-white font-semibold hover:bg-white/25 hover:border-white/70 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30"
            >
              <svg className="mr-2 w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
