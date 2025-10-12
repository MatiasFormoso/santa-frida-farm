// src/components/ui/Link.tsx
"use client";

import NextLink from "next/link";
import * as React from "react";

type Props = React.ComponentProps<typeof NextLink> & {
  subtle?: boolean; // si true, color más discreto
};

export default function LinkUI({ subtle = false, className = "", ...props }: Props) {
  const base =
    "underline-offset-4 decoration-transparent hover:decoration-current transition-colors focus:outline-none " +
    "focus-visible:ring-2 focus-visible:ring-emerald-600/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white";
  const color = subtle ? "text-stone-700 hover:text-stone-900" : "text-emerald-600 hover:text-emerald-700";
  return <NextLink {...props} className={`${base} ${color} ${className}`} />;
}
