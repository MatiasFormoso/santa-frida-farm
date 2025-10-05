// src/components/sections/Hero.tsx
import { CONFIG } from "@/lib/config";
import { Container, Pill, Button } from "@/components/ui/primitives";

export default function Hero() {
  return (
    <section className="relative min-h-[68vh]">
      {/* FOTO DE FONDO – simple */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/hero-1920.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />

      {/* CONTENIDO */}
      <Container className="relative py-20 sm:py-28">
        {/* panel translúcido para legibilidad, sin “vender” */}
        <div className="max-w-xl rounded-2xl bg-white/70 backdrop-blur-sm p-6">
          <Pill>Marinilla · Antioquia</Pill>
          <h1 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight text-stone-900">
            {CONFIG.site.name}
          </h1>
          <p className="mt-4 text-lg text-stone-700">
            {CONFIG.site.tagline}. {CONFIG.site.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="#sobre" variant="ghost">Conocer la finca</Button>
            <Button href={CONFIG.contact.instagram} variant="ghost">Ver Instagram</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
