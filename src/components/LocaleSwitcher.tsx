// src/components/LocaleSwitcher.tsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";

type Locale = "es" | "en";

/**
 * Reemplaza/el primer segmento por el locale elegido.
 * Si no hay /es|/en, lo agrega al principio.
 */
function replaceLocale(pathname: string, next: Locale) {
  const segs = pathname.split("/").filter(Boolean);
  if (segs.length === 0) return `/${next}`;
  if (segs[0] === "es" || segs[0] === "en") segs[0] = next;
  else segs.unshift(next);
  return `/${segs.join("/")}`;
}

export default function LocaleSwitcher({
  className,
  size = "sm",
}: {
  className?: string;
  size?: "sm" | "md";
}) {
  const router = useRouter();
  const pathname = usePathname() || "/";

  const current: Locale = useMemo(() => {
    const first = pathname.split("/").filter(Boolean)[0];
    return (first === "en" ? "en" : first === "es" ? "es" : "es") as Locale;
  }, [pathname]);

  const other: Locale = current === "es" ? "en" : "es";
  const label = current === "es" ? "ES / EN" : "EN / ES";

  const sizeCls = size === "sm" ? "px-3 py-1.5 text-sm" : "px-4 py-2 text-base";

  // Estilo en NEGRO (neutro), con hover/focus sutiles
  const baseBtn =
    "inline-flex items-center justify-center rounded-xl border " +
    "border-stone-300 text-stone-800 " +
    "transition hover:bg-stone-50 hover:shadow-sm active:scale-[0.98] " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400/50 " +
    "focus-visible:ring-offset-2 focus-visible:ring-offset-white select-none";

  const onSwitch = () => {
    const base = replaceLocale(pathname, other);
    const search = typeof window !== "undefined" ? window.location.search : "";
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    router.push(`${base}${search}${hash}`, { scroll: false });
  };

  return (
    <button
      type="button"
      aria-label="Cambiar idioma"
      onClick={onSwitch}
      className={[baseBtn, sizeCls, className ?? ""].join(" ")}
    >
      {label}
    </button>
  );
}
