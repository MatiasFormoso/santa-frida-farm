// src/components/ui/Breadcrumbs.tsx
import Link from "./Link";
import * as React from "react";

type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-stone-600">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((it, i) => {
          const last = i === items.length - 1;
          return (
            <li key={`${it.label}-${i}`} aria-current={last ? "page" : undefined} className="flex items-center gap-2">
              {it.href && !last ? (
                <Link href={it.href} subtle className="hover:underline">
                  {it.label}
                </Link>
              ) : (
                <span className="font-medium text-stone-800">{it.label}</span>
              )}
              {!last && <span aria-hidden className="text-stone-400">›</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
