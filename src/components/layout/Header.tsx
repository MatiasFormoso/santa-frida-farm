// src/components/layout/Header.tsx
"use client";

import LocaleSwitcher from "@/components/LocaleSwitcher";
import { Container } from "@/components/ui/primitives";
import type { Dict, Locale } from "@/i18n/config";
import { CONFIG } from "@/lib/config";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type HeaderProps = { t: Dict; locale: Locale };

export default function Header({ t, locale }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [cropsOpen, setCropsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname() || "/";
  const isHistory = /\/(es|en)\/historia\/?$/.test(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cropsOpen && !(event.target as Element).closest('[data-dropdown]')) {
        setCropsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [cropsOpen]);

  const linkCls =
    "relative text-slate-600 hover:text-slate-900 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:rounded-lg font-medium";
  const close = () => setOpen(false);
  const closeCrops = () => setCropsOpen(false);

  // Datos de cultivos
  const crops = [
    {
      id: "hass",
      name: locale === "en" ? "Hass Avocado" : "Aguacate Hass",
      description: locale === "en" ? "Premium quality avocados" : "Aguacates de calidad premium",
      icon: "🥑"
    },
    {
      id: "catimori", 
      name: locale === "en" ? "Catimor Coffee (Caturra × Timor cross)" : "Café Catimor (cruce Caturra x Timor)",
      description: locale === "en" ? "Specialty coffee beans" : "Granos de café de especialidad",
      icon: "☕"
    },
    {
      id: "hortalizas",
      name: locale === "en" ? "Fresh Greens" : "Hortalizas frescas", 
      description: locale === "en" ? "Fresh seasonal vegetables" : "Hortalizas frescas de temporada",
      icon: "🥬"
    }
  ];

  const Brand = (
    <a 
      href={`/${locale}`} 
      className="flex items-center gap-3 group" 
      aria-label="Santa Frida Farm — Home"
    >
      <div className="relative">
        <Image
          src="/logo-santa-frida.png"
          alt="Santa Frida Farm"
          width={40}
          height={40}
          className="h-10 w-10 object-contain transition-transform duration-200 group-hover:scale-105"
          priority
        />
      </div>
      <span className="text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors duration-200">
        {CONFIG.brand.logoText}
      </span>
    </a>
  );

  // etiqueta para "Cultivos"
  const cropsLabel = locale === "en" ? "Crops" : "Cultivos";

  // ===== Variante mínima para /historia =====
  if (isHistory) {
    return (
      <header className={`sticky top-0 z-40 border-b transition-all duration-300 ${scrolled ? "border-slate-200/60 bg-white/98 shadow-lg shadow-slate-900/[0.02]" : "border-slate-200/30 bg-white/95"}`}>
        <Container className="flex h-16 items-center justify-between">
          {Brand}
          <LocaleSwitcher size="sm" />
        </Container>
      </header>
    );
  }

  // ===== Header completo (resto del sitio) =====
  return (
    <header className={`sticky top-0 z-40 border-b transition-all duration-300 ${scrolled ? "border-slate-200/60 bg-white/98 shadow-lg shadow-slate-900/[0.02]" : "border-slate-200/30 bg-white/95"}`}>
      <Container className="flex h-16 items-center justify-between">
        {Brand}

        {/* Navegación desktop */}
        <nav className="hidden items-center gap-8 text-slate-600 md:flex">
          <a href="#sobre" className={`${linkCls} group relative px-3 py-2 rounded-lg hover:bg-slate-50/50`}>
            {t.nav.about}
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-teal-500 transition-all duration-200 group-hover:w-3/4 group-hover:left-1/8"></span>
          </a>
          
          {/* Dropdown Cultivos */}
          <div className="relative" data-dropdown>
            <button
              type="button"
              onClick={() => setCropsOpen(!cropsOpen)}
              onMouseEnter={() => setCropsOpen(true)}
              className={`group flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-200 ${linkCls} ${cropsOpen ? 'text-emerald-700 bg-emerald-50/70 shadow-sm' : 'hover:bg-slate-50/50'}`}
              aria-expanded={cropsOpen}
              aria-haspopup="true"
            >
              {cropsLabel}
              <ChevronDownIcon className={`h-4 w-4 transition-all duration-200 ${cropsOpen ? 'rotate-180 text-emerald-700' : 'group-hover:text-slate-500'}`} />
            </button>
            
            {/* Dropdown Menu */}
            <div
              className={`absolute top-full left-0 mt-2 w-[22rem] bg-white shadow-lg border border-slate-200/80 rounded-lg overflow-hidden transition-all duration-200 ${
                cropsOpen ? 'opacity-100 visible translate-y-0 scale-100' : 'opacity-0 invisible translate-y-2 scale-95'
              }`}
              onMouseLeave={() => setCropsOpen(false)}
            >
              <div className="py-2">
                {crops.map((crop) => (
                  <a
                    key={crop.id}
                    href={`#${crop.id}`}
                    onClick={closeCrops}
                    className="group flex items-center gap-4 px-4 py-3 hover:bg-slate-50/80 transition-colors duration-150 border-b border-slate-100 last:border-0"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-slate-900 group-hover:text-emerald-700 transition-colors duration-150">
                        {crop.name}
                      </div>
                      <div className="text-sm text-slate-500 truncate group-hover:text-slate-600 transition-colors duration-150">
                        {crop.description}
                      </div>
                    </div>
                    <ArrowRightIcon className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-transform duration-150 group-hover:translate-x-0.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <a href="#instagram" className={`${linkCls} group relative px-3 py-2 rounded-lg hover:bg-slate-50/50`}>
            {t.mediaKit?.title ?? "Galería"}
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-teal-500 transition-all duration-200 group-hover:w-3/4 group-hover:left-1/8"></span>
          </a>
          <a href="#contacto" className={`${linkCls} group relative px-3 py-2 rounded-lg hover:bg-slate-50/50`}>
            {t.nav.contact}
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-teal-500 transition-all duration-200 group-hover:w-3/4 group-hover:left-1/8"></span>
          </a>
        </nav>

        {/* Acciones derechas */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={CONFIG.contact.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            title="Instagram"
            className="group inline-flex items-center justify-center rounded-xl border border-emerald-300/60 bg-emerald-50/40 p-2.5 text-emerald-700 hover:bg-emerald-100 hover:border-emerald-400/60 hover:shadow-sm transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            <InstagramIcon className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
            <span className="sr-only">Instagram</span>
          </a>
          <LocaleSwitcher size="sm" />
        </div>

        {/* Botón mobile */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group inline-flex items-center justify-center rounded-xl border border-slate-300/60 bg-slate-50/30 p-2.5 text-slate-700 hover:bg-slate-100 hover:border-slate-400/60 hover:shadow-sm transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-teal-600/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white md:hidden"
          aria-label="Abrir menú"
          aria-controls="mobile-menu"
          aria-expanded={open}
        >
          <MenuIcon className="h-6 w-6 transition-transform duration-200 group-hover:scale-105" />
        </button>
      </Container>

      {/* Panel mobile */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-16 z-50 transition-all duration-300 md:hidden ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        aria-hidden={!open}
      >
        <div className="mx-3 rounded-2xl border border-slate-200/60 bg-white shadow-xl">
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200/50">
            <span className="font-semibold text-slate-900">Menú</span>
            <button
              type="button"
              onClick={close}
              className="group inline-flex items-center justify-center rounded-lg border border-slate-300/60 bg-slate-50/30 p-2 text-slate-700 hover:bg-slate-100 hover:border-slate-400/60 transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-teal-600/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              aria-label="Cerrar menú"
            >
              <CloseIcon className="h-5 w-5 transition-transform duration-200 group-hover:scale-105" />
            </button>
          </div>
          <nav className="px-5 pb-5 text-slate-800">
            <ul className="space-y-1">
              <li>
                <a onClick={close} href="#sobre" className="group flex items-center rounded-xl px-4 py-3 hover:bg-gradient-to-r hover:from-slate-50 hover:to-teal-50/30 transition-all duration-200">
                  <span className="group-hover:text-teal-600 transition-colors duration-200">{t.nav.about}</span>
                </a>
              </li>
              
              {/* Cultivos mobile - navega directamente a Hass */}
              <li>
                <a 
                  href="#hass" 
                  onClick={close}
                  className="group flex items-center rounded-xl px-4 py-3 hover:bg-gradient-to-r hover:from-slate-50 hover:to-teal-50/30 transition-all duration-200"
                >
                  <span className="group-hover:text-teal-600 transition-colors duration-200">{cropsLabel}</span>
                </a>
              </li>
              
              <li>
                <a onClick={close} href="#instagram" className="group flex items-center rounded-xl px-4 py-3 hover:bg-gradient-to-r hover:from-slate-50 hover:to-teal-50/30 transition-all duration-200">
                  <span className="group-hover:text-teal-600 transition-colors duration-200">{t.mediaKit?.title ?? "Galería"}</span>
                </a>
              </li>
              <li>
                <a onClick={close} href="#contacto" className="group flex items-center rounded-xl px-4 py-3 hover:bg-gradient-to-r hover:from-slate-50 hover:to-teal-50/30 transition-all duration-200">
                  <span className="group-hover:text-teal-600 transition-colors duration-200">{t.nav.contact}</span>
                </a>
              </li>
              <li className="flex items-center gap-3 pt-3 border-t border-slate-200/50">
                <a
                  onClick={close}
                  href={CONFIG.contact.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-teal-200/60 bg-teal-50/30 px-4 py-2.5 text-teal-600 hover:bg-teal-50 hover:border-teal-300/60 transition-all duration-200"
                >
                  <InstagramIcon className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                  Instagram
                </a>
                <LocaleSwitcher size="sm" />
              </li>
            </ul>
          </nav>
        </div>
        <button
          type="button"
          className="fixed inset-0 -z-10 h-[calc(100vh-4rem)] bg-black/20"
          onClick={close}
          aria-hidden
          tabIndex={-1}
        />
      </div>
    </header>
  );
}
