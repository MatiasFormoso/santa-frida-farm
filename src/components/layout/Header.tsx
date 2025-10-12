// src/components/layout/Header.tsx
"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { CONFIG } from "@/lib/config";
import { Container } from "@/components/ui/primitives";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import type { Dict, Locale } from "@/i18n/config";

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
    "relative text-slate-600 hover:text-slate-900 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:rounded-md";
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
      name: locale === "en" ? "Catimori Coffee" : "Café Catimori",
      description: locale === "en" ? "Specialty coffee beans" : "Granos de café de especialidad",
      icon: "☕"
    },
    {
      id: "greens",
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
      <span className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors duration-200">
        {CONFIG.brand.logoText}
      </span>
    </a>
  );

  // etiqueta para "Cultivos"
  const cropsLabel = locale === "en" ? "Crops" : "Cultivos";

  // ===== Variante mínima para /historia =====
  if (isHistory) {
    return (
      <header className={`sticky top-0 z-40 border-b border-slate-200/60 bg-white/90 backdrop-blur-md transition-all duration-300 ${scrolled ? "shadow-lg shadow-slate-900/5" : ""}`}>
        <Container className="flex h-16 items-center justify-between">
          {Brand}
          <LocaleSwitcher size="sm" />
        </Container>
      </header>
    );
  }

  // ===== Header completo (resto del sitio) =====
  return (
    <header className={`sticky top-0 z-40 border-b border-slate-200/60 bg-white/90 backdrop-blur-md transition-all duration-300 ${scrolled ? "shadow-lg shadow-slate-900/5" : ""}`}>
      <Container className="flex h-16 items-center justify-between">
        {Brand}

        {/* Navegación desktop */}
        <nav className="hidden items-center gap-8 text-slate-600 md:flex">
          <a href="#sobre" className={`${linkCls} group relative px-3 py-2 rounded-lg hover:bg-slate-50/50`}>
            {t.nav.about}
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-emerald-500 transition-all duration-200 group-hover:w-3/4 group-hover:left-1/8"></span>
          </a>
          
          {/* Dropdown Cultivos */}
          <div className="relative" data-dropdown>
            <button
              type="button"
              onClick={() => setCropsOpen(!cropsOpen)}
              onMouseEnter={() => setCropsOpen(true)}
              className={`group flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${linkCls} ${cropsOpen ? 'text-emerald-600 bg-emerald-50/80 shadow-sm' : 'hover:bg-slate-50/50'}`}
              aria-expanded={cropsOpen}
              aria-haspopup="true"
            >
              {cropsLabel}
              <ChevronDownIcon className={`h-4 w-4 transition-all duration-200 ${cropsOpen ? 'rotate-180 text-emerald-600' : 'group-hover:text-slate-500'}`} />
            </button>
            
            {/* Dropdown Menu */}
            <div
              className={`absolute top-full left-0 mt-3 w-80 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200/60 overflow-hidden transition-all duration-300 ${
                cropsOpen ? 'opacity-100 visible translate-y-0 scale-100' : 'opacity-0 invisible translate-y-2 scale-95'
              }`}
              onMouseLeave={() => setCropsOpen(false)}
            >
              <div className="p-3">
                {crops.map((crop) => (
                  <a
                    key={crop.id}
                    href={`#${crop.id}`}
                    onClick={closeCrops}
                    className="group flex items-center gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-emerald-50/50 hover:to-slate-50/50 transition-all duration-200 border border-transparent hover:border-emerald-200/50"
                  >
                    <span className="text-2xl transition-transform duration-200 group-hover:scale-110">{crop.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors duration-200">
                        {crop.name}
                      </div>
                      <div className="text-sm text-slate-500 truncate group-hover:text-slate-600 transition-colors duration-200">
                        {crop.description}
                      </div>
                    </div>
                    <ArrowRightIcon className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-all duration-200 group-hover:translate-x-0.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <a href="#instagram" className={`${linkCls} group relative px-3 py-2 rounded-lg hover:bg-slate-50/50`}>
            {t.mediaKit?.title ?? "Galería"}
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-emerald-500 transition-all duration-200 group-hover:w-3/4 group-hover:left-1/8"></span>
          </a>
          <a href="#contacto" className={`${linkCls} group relative px-3 py-2 rounded-lg hover:bg-slate-50/50`}>
            {t.nav.contact}
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-emerald-500 transition-all duration-200 group-hover:w-3/4 group-hover:left-1/8"></span>
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
            className="group inline-flex items-center justify-center rounded-xl border border-emerald-200/60 bg-emerald-50/30 p-2.5 text-emerald-600 hover:bg-emerald-50 hover:border-emerald-300/60 hover:shadow-sm transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
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
          className="group inline-flex items-center justify-center rounded-xl border border-slate-300/60 bg-slate-50/30 p-2.5 text-slate-700 hover:bg-slate-100 hover:border-slate-400/60 hover:shadow-sm transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white md:hidden"
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
        <div className="mx-3 rounded-2xl border border-slate-200/60 bg-white/95 backdrop-blur-md shadow-xl">
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200/50">
            <span className="font-semibold text-slate-900">Menú</span>
            <button
              type="button"
              onClick={close}
              className="group inline-flex items-center justify-center rounded-lg border border-slate-300/60 bg-slate-50/30 p-2 text-slate-700 hover:bg-slate-100 hover:border-slate-400/60 transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              aria-label="Cerrar menú"
            >
              <CloseIcon className="h-5 w-5 transition-transform duration-200 group-hover:scale-105" />
            </button>
          </div>
          <nav className="px-5 pb-5 text-slate-800">
            <ul className="space-y-1">
              <li>
                <a onClick={close} href="#sobre" className="group flex items-center rounded-xl px-4 py-3 hover:bg-gradient-to-r hover:from-slate-50 hover:to-emerald-50/30 transition-all duration-200">
                  <span className="group-hover:text-emerald-600 transition-colors duration-200">{t.nav.about}</span>
                </a>
              </li>
              
              {/* Cultivos dropdown mobile */}
              <li>
                <button
                  type="button"
                  onClick={() => setCropsOpen(!cropsOpen)}
                  className="group flex items-center justify-between w-full rounded-xl px-4 py-3 hover:bg-gradient-to-r hover:from-slate-50 hover:to-emerald-50/30 text-left transition-all duration-200"
                >
                  <span className="group-hover:text-emerald-600 transition-colors duration-200">{cropsLabel}</span>
                  <ChevronDownIcon className={`h-4 w-4 transition-all duration-200 ${cropsOpen ? 'rotate-180 text-emerald-600' : 'group-hover:text-slate-500'}`} />
                </button>
                {cropsOpen && (
                  <ul className="ml-4 mt-2 space-y-1">
                    {crops.map((crop) => (
                      <li key={crop.id}>
                        <a 
                          href={`#${crop.id}`} 
                          onClick={() => {
                            closeCrops();
                            setTimeout(() => close(), 100);
                          }}
                          className="group flex items-center gap-3 rounded-lg px-4 py-2.5 hover:bg-gradient-to-r hover:from-emerald-50/50 hover:to-slate-50/50 text-sm transition-all duration-200"
                        >
                          <span className="text-lg transition-transform duration-200 group-hover:scale-110">{crop.icon}</span>
                          <span className="group-hover:text-emerald-600 transition-colors duration-200">{crop.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              
              <li>
                <a onClick={close} href="#instagram" className="group flex items-center rounded-xl px-4 py-3 hover:bg-gradient-to-r hover:from-slate-50 hover:to-emerald-50/30 transition-all duration-200">
                  <span className="group-hover:text-emerald-600 transition-colors duration-200">{t.mediaKit?.title ?? "Galería"}</span>
                </a>
              </li>
              <li>
                <a onClick={close} href="#contacto" className="group flex items-center rounded-xl px-4 py-3 hover:bg-gradient-to-r hover:from-slate-50 hover:to-emerald-50/30 transition-all duration-200">
                  <span className="group-hover:text-emerald-600 transition-colors duration-200">{t.nav.contact}</span>
                </a>
              </li>
              <li className="flex items-center gap-3 pt-3 border-t border-slate-200/50">
                <a
                  onClick={close}
                  href={CONFIG.contact.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-200/60 bg-emerald-50/30 px-4 py-2.5 text-emerald-600 hover:bg-emerald-50 hover:border-emerald-300/60 transition-all duration-200"
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
          className="fixed inset-0 -z-10 h-[calc(100vh-4rem)] bg-black/20 backdrop-blur-sm"
          onClick={close}
          aria-hidden
          tabIndex={-1}
        />
      </div>
    </header>
  );
}
