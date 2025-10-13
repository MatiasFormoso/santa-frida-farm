// src/components/sections/InstagramStrip.tsx
import { Section } from "@/components/ui/primitives";
import { CONFIG } from "@/lib/config";
import type { Dict, Locale } from "@/i18n/config";

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
    <Section id="instagram" tone="alt" eyebrow={eyebrow} title={title} intro={intro}>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {POSTS.map((p, i) => (
          <a
            key={i}
            href={p.url || CONFIG.contact.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label={`${ariaPrefix} ${i + 1}`}
            title={locale === "en" ? "View on Instagram" : "Ver en Instagram"}
            className="group relative block overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200/60 bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="aspect-square overflow-hidden relative">
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
              {/* Overlay con ícono de Instagram en hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <svg className="w-8 h-8 text-white transform scale-75 group-hover:scale-100 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-8 sm:mt-10 flex justify-center">
        <a
          href={CONFIG.contact.instagram}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 rounded-xl px-6 sm:px-8 py-3.5 sm:py-4 font-semibold text-emerald-700 hover:text-white bg-white hover:bg-emerald-600 border-2 border-emerald-600/80 hover:border-emerald-700 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
        >
          <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          <span>{cta}</span>
        </a>
      </div>
    </Section>
  );
}
