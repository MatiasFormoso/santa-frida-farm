// src/components/sections/Hero.tsx
"use client";

import { motion } from "framer-motion";
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
      className="relative w-full overflow-hidden"
      style={{ 
        height: 'calc(100dvh - 4rem)', 
        minHeight: 'calc(100dvh - 4rem)', 
        maxHeight: 'calc(100dvh - 4rem)'
      }}
    >
      <picture>
        <source 
          srcSet="/images/hero-1920-optimized.webp" 
          type="image/webp"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-1920.jpg"
          alt="Vista panorámica de Santa Frida Farm en Marinilla, Antioquia - Cultivos de aguacate Hass, café de especialidad y hortalizas orgánicas en el oriente antioqueño"
          className="absolute inset-0 h-full w-full object-cover object-top sm:object-center origin-top scale-[1.17] sm:scale-100 transition-transform duration-500"
          style={{
            filter: 'blur(1.31px)',
            WebkitFilter: 'blur(1.31px)'
          }}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </picture>

      {/* Capa oscura sutil para mejor legibilidad */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none bg-black/30"
      />

      {/* Viñeta para enfocar el centro y suavizar esquinas */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_45%,rgba(0,0,0,0.42)_100%)]"
      />





      <Container className="relative z-10 flex items-center h-full">
        <div className="w-full flex justify-center sm:justify-start px-4 sm:px-0">
          <div className="w-full max-w-4xl sm:pl-4 lg:pl-0 text-center sm:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ willChange: 'opacity, transform' }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-5 sm:mb-6 text-[0.9375rem] sm:text-sm font-medium text-white border border-white/60 rounded-full backdrop-blur-md bg-black/60 shadow-xl"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-teal-400 shadow-lg shadow-teal-400/50 animate-pulse"></div>
              <span className="tracking-wider">Marinilla, Antioquia</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{ 
                textShadow: '0 4px 24px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.7), 0 1px 3px rgba(0,0,0,0.5)', 
                willChange: 'opacity, transform' 
              }}
              className="text-[2.75rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-5 tracking-tight sm:leading-[1.1]"
            >
              {t.hero.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ 
                textShadow: '0 3px 16px rgba(0,0,0,0.8), 0 2px 6px rgba(0,0,0,0.6), 0 1px 3px rgba(0,0,0,0.4)', 
                willChange: 'opacity, transform' 
              }}
              className="text-xl sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 font-light leading-relaxed"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              style={{ willChange: 'opacity, transform' }}
              className="relative flex flex-row items-center justify-center sm:justify-start gap-3 flex-wrap"
            >
              {/* Fondo desenfocado solo para los botones */}
              <div className="absolute inset-0 pointer-events-none rounded-2xl -m-2" />
              <a
                href="#frase-homenaje"
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 text-base font-semibold text-white border border-white/60 rounded-full backdrop-blur-md bg-black/60 shadow-xl hover:bg-black/70 hover:border-white/80 transition-all duration-300"
              >
                <span>{t.hero.cta}</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a
                href={CONFIG.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 text-base font-semibold text-white border border-white/60 rounded-full backdrop-blur-md bg-black/60 shadow-xl hover:bg-black/70 hover:border-white/80 transition-all duration-300"
              >
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram</span>
              </a>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
