// src/components/sections/FraseHomenaje.tsx
import Link from "next/link";
import type { Locale, Dict } from "@/i18n/config";

type Props = { t: Dict; locale: Locale };

/**
 * 22% de pantalla. Texto levemente más alto (no centrado exacto),
 * y con margen inferior negativo suave para reducir el blanco antes de la próxima sección.
 * ÚNICO cambio: el estilo del link “María Yennis” para que se note clickeable sin hover.
 */
export default function FraseHomenaje({ locale }: Props) {
  const isEN = locale === "en";

  // Link permanente a /[locale]/historia: color + subrayado visibles siempre
  const name = (
    <a
      href={`/${locale}/historia`}
      target="_blank"
      rel="noopener noreferrer"
      className="
        text-emerald-600
        underline decoration-emerald-600 decoration-2 underline-offset-[6px] decoration-solid
        cursor-pointer
        visited:text-emerald-600 visited:decoration-emerald-600
        hover:decoration-emerald-700 hover:text-emerald-700
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white
      "
    >
      María Yennis
    </a>
  );

  return (
    <section
      aria-label={isEN ? "Tribute phrase" : "Frase homenaje"}
      className="bg-white"
    >
      <div
        className="
          mx-auto
          max-w-4xl
          min-h-[22svh]
          px-6
          flex
          items-start
          justify-center
          pt-4 md:pt-6
          pb-2
          -mb-4 md:-mb-20   /* aprieta el espacio con la sección siguiente */
        "
      >
        <p className="text-center text-base sm:text-lg md:text-xl leading-relaxed italic text-stone-900">
          {isEN ? (
            <>
              “Opportunities come to those who don’t give up. Thank you, {name}, for teaching us that sowing with love is harvesting the future.”
            </>
          ) : (
            <>
              “Las oportunidades llegan para quienes no se rinden. Gracias, {name}, por enseñarnos que sembrar con amor es cosechar futuro.”
            </>
          )}
        </p>
      </div>
    </section>
  );
}
