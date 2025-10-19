// src/components/sections/InstagramStrip.tsx
"use client";

// import { motion } from "framer-motion";
import { Section } from "@/components/ui/primitives";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Dict, Locale } from "@/i18n/config";
import { CONFIG } from "@/lib/config";

const POSTS = [
  { url: "https://www.instagram.com/p/DPWtK6kk6ZI/", thumb: "/images/instagram/ig-1.webp", fallback: "/images/instagram/ig-1.jpg", alt: "Post 1 de Instagram" },
  { url: "https://www.instagram.com/p/DPRqghTk4SA/", thumb: "/images/instagram/ig-2.webp", fallback: "/images/instagram/ig-2.jpg", alt: "Post 2 de Instagram" },
  { url: "https://www.instagram.com/p/DPCJC6bE1VB/", thumb: "/images/instagram/ig-3.webp", fallback: "/images/instagram/ig-3.jpg", alt: "Post 3 de Instagram" },
  { url: "https://www.instagram.com/p/DO6bfK_k9FX/", thumb: "/images/instagram/ig-4.webp", fallback: "/images/instagram/ig-4.jpg", alt: "Post 4 de Instagram" },
  { url: "https://www.instagram.com/p/DO1iI_zE3aL/", thumb: "/images/instagram/ig-5.webp", fallback: "/images/instagram/ig-5.jpg", alt: "Post 5 de Instagram" },
  { url: "https://www.instagram.com/p/DOsFzR6iLTw/", thumb: "/images/instagram/ig-6.webp", fallback: "/images/instagram/ig-6.jpg", alt: "Post 6 de Instagram" },
];

export default function InstagramStrip({ t, locale }: { t: Dict; locale: Locale }) {
  const eyebrow = t.mediaKit?.title ?? (locale === "en" ? "Community" : "Comunidad");
  const title = locale === "en" ? "What we share" : "Lo que compartimos";
  const intro =
    t.mediaKit?.subtitle ??
    (locale === "en"
      ? "Harvests, processes and daily life at the farm. More on our Instagram."
      : "Cosechas, procesos y vida en finca. Más en nuestro Instagram.");

  const ariaPrefix = locale === "en" ? "Open Instagram post" : "Abrir publicación de Instagram";
  const cta = locale === "en" ? "Follow on Instagram" : "Seguir en Instagram";

  return (
    <Section id="instagram" eyebrow={eyebrow} title={title} intro={intro}>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {POSTS.map((p, i) => (
          <ScrollReveal key={i} delay={i * 0.06} duration={0.6}>
            <a
              href={p.url || CONFIG.contact.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label={`${ariaPrefix} ${i + 1}`}
              title={locale === "en" ? "View on Instagram" : "Ver en Instagram"}
              className="group block overflow-hidden rounded-lg border border-slate-200 bg-white hover:border-slate-300 hover:shadow-md transition-all duration-300"
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
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </ScrollReveal>
    </Section>
  );
}
