// src/components/HashScrollHandler.tsx
"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function HashScrollHandler() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Pequeño delay para asegurar que el contenido está renderizado
    const timer = setTimeout(() => {
      const hash = window.location.hash;

      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          // Scroll suave al elemento
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return null;
}
