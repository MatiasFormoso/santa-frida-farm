// src/components/sections/InstagramStrip.tsx
"use client";

// import { motion } from "framer-motion";
import { Section } from "@/components/ui/primitives";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Locale } from "@/i18n/config";
import { CONFIG } from "@/lib/config";

const POSTS = [
  {
    thumb: "/images/gallery-community/gallery-1.jpeg",
    fallback: "/images/gallery-community/gallery-1.jpeg",
    alt: "Santa Frida Farm",
  },
  {
    thumb: "/images/gallery-community/gallery-2.jpeg",
    fallback: "/images/gallery-community/gallery-2.jpeg",
    alt: "Santa Frida Farm",
  },
  {
    thumb: "/images/gallery-community/gallery-3.jpeg",
    fallback: "/images/gallery-community/gallery-3.jpeg",
    alt: "Santa Frida Farm",
  },
  {
    thumb: "/images/gallery-community/gallery-4.jpeg",
    fallback: "/images/gallery-community/gallery-4.jpeg",
    alt: "Santa Frida Farm",
  },
  {
    thumb: "/images/gallery-community/gallery-5.jpeg",
    fallback: "/images/gallery-community/gallery-5.jpeg",
    alt: "Santa Frida Farm",
  },
  {
    thumb: "/images/gallery-community/gallery-6.jpeg",
    fallback: "/images/gallery-community/gallery-6.jpeg",
    alt: "Santa Frida Farm",
  },
];

export default function InstagramStrip({ locale }: { locale: Locale }) {
  const eyebrow = locale === "en" ? "Gallery" : "Galería";
  const title = locale === "en" ? "Latest updates" : "Últimas actualizaciones";
  const intro =
    locale === "en"
      ? "Follow us on Instagram for daily updates and behind-the-scenes content."
      : "Seguinos en Instagram para contenido diario y detrás de escena.";

  const ariaPrefix = locale === "en" ? "Open Instagram post" : "Abrir publicación de Instagram";
  const cta = locale === "en" ? "Follow on Instagram" : "Seguir en Instagram";

  return (
    <Section id="instagram" eyebrow={eyebrow} title={title} intro={intro}>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
        {POSTS.map((p, i) => (
          <ScrollReveal key={i} delay={i * 0.03} duration={0.5}>
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
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.08]"
                  />
                </picture>
              </div>
            </a>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.2} duration={0.5}>
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
