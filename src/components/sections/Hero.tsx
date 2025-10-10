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

      <Container className="relative z-10 flex items-end min-h-[78svh] pb-12">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full border border-white/30 bg-white/15 backdrop-blur px-3 py-1 text-sm font-medium text-white">
            Marinilla · Antioquia
          </span>

          <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            {t.hero.title}
          </h1>

          <p className="mt-4 text-lg text-white/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.55)]">
            {t.hero.subtitle}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#sobre"
              className="inline-flex items-center justify-center rounded-xl border px-4 py-2 text-white border-white/60 hover:bg-white/10 transition"
            >
              {t.hero.cta ?? "Conocer la finca"}
            </a>
            <a
              href={CONFIG.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border px-4 py-2 text-white border-white/60 hover:bg-white/10 transition"
            >
              Instagram
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
