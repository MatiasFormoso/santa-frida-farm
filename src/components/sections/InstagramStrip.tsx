// src/components/sections/InstagramStrip.tsx
"use client";

// import { motion } from "framer-motion";
import { Section } from "@/components/ui/primitives";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Dict, Locale } from "@/i18n/config";
import { CONFIG } from "@/lib/config";

const POSTS = [
  {
    thumb: "/images/instagram/ig-1-new.webp",
    fallback: "/images/instagram/ig-1-new.jpg",
    alt: "Aguacate Hass - Cosecha premium",
  },
  {
    thumb: "/images/instagram/ig-2-new.webp",
    fallback: "/images/instagram/ig-2-new.jpg",
    alt: "Café de especialidad - Proceso artesanal",
  },
  {
    thumb: "/images/instagram/ig-3-new.webp",
    fallback: "/images/instagram/ig-3-new.jpg",
    alt: "Campo de cultivo - Vida en la finca",
  },
  {
    thumb: "/images/instagram/ig-4-new.webp",
    fallback: "/images/instagram/ig-4-new.jpg",
    alt: "Hortalizas frescas - Cultivo orgánico",
  },
  {
    thumb: "/images/instagram/ig-5-new.webp",
    fallback: "/images/instagram/ig-5-new.jpg",
    alt: "Cosecha de temporada",
  },
  {
    thumb: "/images/instagram/ig-6.webp",
    fallback: "/images/instagram/ig-6.jpg",
    alt: "Comunidad agrícola - Santa Frida Farm",
  },
];

export default function InstagramStrip({ t, locale }: { t: Dict; locale: Locale }) {
  const eyebrow = t.gallery.eyebrow;
  const title = t.gallery.title;
  const intro = t.gallery.intro;

  const ariaPrefix = locale === "en" ? "Open Instagram post" : "Abrir publicación de Instagram";
  const cta = locale === "en" ? "Follow on Instagram" : "Seguir en Instagram";

  return (
    <Section id="instagram" eyebrow={eyebrow} title={title} intro={intro}>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
        {POSTS.map((p, i) => (
          <ScrollReveal key={i} delay={i * 0.08} duration={0.6}>
            <a
              href={CONFIG.contact.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label={`${ariaPrefix} ${i + 1}`}
              title={locale === "en" ? "Follow us on Instagram" : "Síguenos en Instagram"}
              className="group block overflow-hidden rounded-xl border border-slate-200 bg-white hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <picture>
                  <source srcSet={p.thumb} type="image/webp" />
                  <img
                    src={p.fallback}
                    alt={p.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                  />
                </picture>
              </div>
            </a>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.4} duration={0.6}>
        <div className="mt-12 flex justify-center">
          <a
            href={CONFIG.contact.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 font-medium text-slate-900 border-2 border-slate-900 hover:bg-slate-900 hover:text-white rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <span>{cta}</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </ScrollReveal>
    </Section>
  );
}
