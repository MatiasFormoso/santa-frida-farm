// src/components/sections/Hero.tsx
import { CONFIG } from "@/lib/config";
import { Container } from "@/components/ui/primitives";
import type { Dict, Locale } from "@/i18n/config";

type Props = {
  t: Dict;
  locale: Locale;
};

export default function Hero({ t }: Props) {
  return (
    <section className="relative min-h-[68vh]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/hero-1920.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />

      {/* overlay más fuerte para contraste */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent" />

      <Container className="relative z-10 flex items-end min-h-[68vh] pb-14">
        <div className="max-w-2xl">
          {/* badge fijo como antes */}
          <span className="inline-block rounded-full border border-white/30 bg-white/20 backdrop-blur px-3 py-1 text-sm font-medium text-white">
            Marinilla · Antioquia
          </span>

          <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-white drop-shadow">
            {t.hero.title}
          </h1>
          <p className="mt-4 text-lg text-white/85">
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
              rel="noreferrer"
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
