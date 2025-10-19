// src/components/sections/FraseHomenaje.tsx
"use client";

import type { Dict, Locale } from "@/i18n/config";
import { motion } from "framer-motion";

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
        text-teal-600
        underline decoration-teal-600 decoration-2 underline-offset-[6px] decoration-solid
        cursor-pointer
        visited:text-teal-600 visited:decoration-teal-600
        hover:decoration-teal-700 hover:text-teal-700
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white
        transition-colors duration-300
      "
    >
      María Yennis
    </a>
  );

  return (
    <section
      id="frase-homenaje"
      aria-label={isEN ? "Tribute phrase" : "Frase homenaje"}
      className="relative bg-slate-50 py-10 sm:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.0, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-16 h-px bg-slate-300 mx-auto"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.0, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed text-slate-700 tracking-tight"
          >
            {isEN ? (
              <>
                "Opportunities come to those who don't give up. Thank you, {name}, for teaching us that{" "}
                sowing with love is harvesting the future."
              </>
            ) : (
              <>
                "Las oportunidades llegan para quienes no se rinden. Gracias, {name}, por enseñarnos que{" "}
                sembrar con amor es cosechar futuro."
              </>
            )}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-16 h-px bg-slate-300 mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
