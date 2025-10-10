// src/components/sections/InstagramStrip.tsx
import { Section } from "@/components/ui/primitives";
import { CONFIG } from "@/lib/config";
import type { Dict, Locale } from "@/i18n/config";

const POSTS = [
  { url: "https://www.instagram.com/p/DPWtK6kk6ZI/", thumb: "/images/instagram/ig-1.jpg", alt: "Post 1 de Instagram" },
  { url: "https://www.instagram.com/p/DPRqghTk4SA/", thumb: "/images/instagram/ig-2.jpg", alt: "Post 2 de Instagram" },
  { url: "https://www.instagram.com/p/DPCJC6bE1VB/", thumb: "/images/instagram/ig-3.jpg", alt: "Post 3 de Instagram" },
  { url: "https://www.instagram.com/p/DO6bfK_k9FX/", thumb: "/images/instagram/ig-4.jpg", alt: "Post 4 de Instagram" },
  { url: "https://www.instagram.com/p/DO1iI_zE3aL/", thumb: "/images/instagram/ig-5.jpg", alt: "Post 5 de Instagram" },
  { url: "https://www.instagram.com/p/DOsFzR6iLTw/", thumb: "/images/instagram/ig-6.jpg", alt: "Post 6 de Instagram" },
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
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {POSTS.map((p, i) => (
          <a
            key={i}
            href={p.url || CONFIG.contact.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label={`${ariaPrefix} ${i + 1}`}
            title={locale === "en" ? "View on Instagram" : "Ver en Instagram"}
            className="group block overflow-hidden rounded-2xl border border-stone-200 bg-white"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={p.thumb}
                alt={p.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
          </a>
        ))}
      </div>

      <div className="mt-6">
        <a
          href={CONFIG.contact.instagram}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-2xl px-5 py-3 font-semibold text-emerald-800 hover:bg-emerald-50 border border-emerald-200 transition"
        >
          {cta}
        </a>
      </div>
    </Section>
  );
}
