// src/app/[locale]/cultivos/CultivosNav.tsx
"use client";

const SECTIONS = [
  { id: "hass", labelES: "Aguacate Hass", labelEN: "Hass Avocado" },
  { id: "catimori", labelES: "Café Catimor", labelEN: "Catimor Coffee" },
  { id: "hortalizas", labelES: "Hortalizas", labelEN: "Fresh Greens" },
];

export default function CultivosNav({ locale }: { locale: string }) {
  return (
    <nav className="border-b border-slate-200 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-2 py-4">
          {SECTIONS.map(section => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="flex-1 px-4 py-3 rounded-lg font-medium text-sm bg-white text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors border border-slate-200 hover:border-emerald-300 text-center"
            >
              {locale === "en" ? section.labelEN : section.labelES}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
