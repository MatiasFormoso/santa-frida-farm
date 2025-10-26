// src/app/[locale]/cultivos/CultivosNav.tsx
"use client";

import { useEffect, useState } from "react";

type Section = {
  id: string;
  labelES: string;
  labelEN: string;
};

const SECTIONS: Section[] = [
  { id: "hass", labelES: "Aguacate Hass", labelEN: "Hass Avocado" },
  { id: "catimori", labelES: "Café Catimor", labelEN: "Catimor Coffee" },
  { id: "hortalizas", labelES: "Hortalizas", labelEN: "Fresh Greens" },
];

export default function CultivosNav({ locale }: { locale: string }) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = SECTIONS.map(s => s.id);
      const scrollPosition = window.scrollY + 120; // Offset para el header

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        if (!sectionId) continue;
        const element = document.getElementById(sectionId);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset para el header sticky
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="sticky top-16 z-30 bg-white/95 backdrop-blur-sm border-b border-slate-200/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-1 overflow-x-auto py-3 hide-scrollbar">
          {SECTIONS.map(section => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap font-medium text-sm transition-all duration-200 touch-manipulation ${
                activeSection === section.id
                  ? "bg-emerald-100 text-emerald-700 shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              {locale === "en" ? section.labelEN : section.labelES}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
