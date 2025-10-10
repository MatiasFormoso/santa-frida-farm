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

type HeaderProps = { t: Dict; locale: Locale };

export default function Header({ t, locale }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname() || "/";
  const isHistory = /\/(es|en)\/historia\/?$/.test(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkCls =
    "hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:rounded-md";
  const close = () => setOpen(false);

  const Brand = (
    <a href={`/${locale}`} className="flex items-center gap-2" aria-label="Santa Frida Farm — Home">
      <span className="inline-flex h-8 w-8 items-center justify-center">
        <Image
          src="/logo-santa-frida.png"
          alt="Santa Frida Farm"
          width={32}
          height={32}
          priority
          className="h-8 w-8 object-contain"
        />
      </span>
      <span className="whitespace-nowrap text-xl font-black tracking-tight text-stone-900">
        {CONFIG.brand.logoText}
      </span>
    </a>
  );

  // etiqueta para "Cultivos"
  const cropsLabel = locale === "en" ? "Crops" : "Cultivos";

  // ===== Variante mínima para /historia =====
  if (isHistory) {
    return (
      <header className={`sticky top-0 z-40 border-b border-stone-200/70 bg-white/80 backdrop-blur ${scrolled ? "shadow-sm" : ""}`}>
        <Container className="flex h-14 items-center justify-between">
          {Brand}
          {/* sin menú; si querés, acá se puede dejar <LocaleSwitcher size="sm" /> */}
        </Container>
      </header>
    );
  }

  // ===== Header completo (resto del sitio) =====
  return (
    <header className={`sticky top-0 z-40 border-b border-stone-200/70 bg-white/80 backdrop-blur ${scrolled ? "shadow-sm" : ""}`}>
      <Container className="flex h-16 items-center justify-between">
        {Brand}

        {/* Navegación desktop */}
        <nav className="hidden items-center gap-6 text-stone-700 md:flex">
          <a href="#sobre" className={linkCls}>{t.nav.about}</a>
          {/* Cultivos -> sección Hass */}
          <a href="#hass" className={linkCls}>{cropsLabel}</a>
          <a href="#instagram" className={linkCls}>{t.mediaKit?.title ?? "Galería"}</a>
          <a href="#contacto" className={linkCls}>{t.nav.contact}</a>
        </nav>

        {/* Acciones derechas */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href={CONFIG.contact.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            title="Instagram"
            className="inline-flex items-center justify-center rounded-xl border border-emerald-200 p-2 text-emerald-800 hover:bg-emerald-50 outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            <InstagramIcon className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </a>
          <LocaleSwitcher size="sm" />
        </div>

        {/* Botón mobile */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center justify-center rounded-xl border border-stone-300 p-2 text-stone-700 hover:bg-stone-50 outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white md:hidden"
          aria-label="Abrir menú"
          aria-controls="mobile-menu"
          aria-expanded={open}
        >
          <MenuIcon className="h-6 w-6" />
        </button>
      </Container>

      {/* Panel mobile */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-16 z-50 transition md:hidden ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        aria-hidden={!open}
      >
        <div className="mx-3 rounded-2xl border border-stone-200 bg-white/95 backdrop-blur shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <span className="font-semibold text-stone-900">Menú</span>
            <button
              type="button"
              onClick={close}
              className="inline-flex items-center justify-center rounded-lg border border-stone-300 p-2 text-stone-700 hover:bg-stone-50 outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              aria-label="Cerrar menú"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>
          <nav className="px-4 pb-4 text-stone-800">
            <ul className="space-y-2">
              <li><a onClick={close} href="#sobre" className="block rounded-lg px-3 py-2 hover:bg-stone-50">{t.nav.about}</a></li>
              {/* Cultivos -> sección Hass */}
              <li><a onClick={close} href="#hass" className="block rounded-lg px-3 py-2 hover:bg-stone-50">{cropsLabel}</a></li>
              <li><a onClick={close} href="#instagram" className="block rounded-lg px-3 py-2 hover:bg-stone-50">{t.mediaKit?.title ?? "Galería"}</a></li>
              <li><a onClick={close} href="#contacto" className="block rounded-lg px-3 py-2 hover:bg-stone-50">{t.nav.contact}</a></li>
              <li className="flex items-center gap-2 pt-1">
                <a
                  onClick={close}
                  href={CONFIG.contact.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-emerald-200 px-3 py-2 text-emerald-800 hover:bg-emerald-50"
                >
                  <InstagramIcon className="h-4 w-4" />
                  Instagram
                </a>
                <LocaleSwitcher size="sm" />
              </li>
            </ul>
          </nav>
        </div>
        <button
          type="button"
          className="fixed inset-0 -z-10 h-[calc(100vh-4rem)] bg-black/10"
          onClick={close}
          aria-hidden
          tabIndex={-1}
        />
      </div>
    </header>
  );
}
