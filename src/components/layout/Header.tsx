"use client";
// src/components/layout/Header.tsx
import { useState, useEffect } from "react";
import { CONFIG } from "@/lib/config";
import { Container } from "@/components/ui/primitives";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
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

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkCls =
    "hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:rounded-md";

  const close = () => setOpen(false);

  return (
    <header className={`sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-stone-200/70 ${scrolled ? "shadow-sm" : ""}`}>
      <Container className="flex items-center justify-between h-16">
        {/* Marca */}
        <a href="/" className="font-black tracking-tight text-xl text-stone-900">
          {CONFIG.brand.logoText}
        </a>

        {/* Navegación desktop */}
        <nav className="hidden md:flex items-center gap-6 text-stone-700">
          <a href="#sobre" className={linkCls}>Sobre</a>
          <a href="#productos" className={linkCls}>Cultivos</a>
          <a href="#experiencias" className={linkCls}>Visitas</a>
          <a href="#instagram" className={linkCls}>Galería</a>
          <a href="#contacto" className={linkCls}>Contacto</a>
        </nav>

        {/* Acción lateral desktop: Instagram */}
        <a
          href={CONFIG.contact.instagram}
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          title="Instagram"
          className="hidden md:inline-flex items-center justify-center rounded-xl border border-emerald-200 text-emerald-800 hover:bg-emerald-50 p-2 outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          <InstagramIcon className="w-5 h-5" />
          <span className="sr-only">Instagram</span>
        </a>

        {/* Botón mobile */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex items-center justify-center rounded-xl border border-stone-300 p-2 text-stone-700 hover:bg-stone-50 outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          aria-label="Abrir menú"
          aria-controls="mobile-menu"
          aria-expanded={open}
        >
          <MenuIcon className="w-6 h-6" />
        </button>
      </Container>

      {/* Panel mobile */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-x-0 top-16 z-50 transition ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
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
              <CloseIcon className="w-5 h-5" />
            </button>
          </div>
          <nav className="px-4 pb-4 text-stone-800">
            <ul className="space-y-2">
              <li><a onClick={close} href="#sobre" className="block rounded-lg px-3 py-2 hover:bg-stone-50">Sobre</a></li>
              <li><a onClick={close} href="#productos" className="block rounded-lg px-3 py-2 hover:bg-stone-50">Cultivos</a></li>
              <li><a onClick={close} href="#experiencias" className="block rounded-lg px-3 py-2 hover:bg-stone-50">Visitas</a></li>
              <li><a onClick={close} href="#instagram" className="block rounded-lg px-3 py-2 hover:bg-stone-50">Galería</a></li>
              <li><a onClick={close} href="#contacto" className="block rounded-lg px-3 py-2 hover:bg-stone-50">Contacto</a></li>
              <li className="pt-1">
                <a
                  onClick={close}
                  href={CONFIG.contact.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-flex items-center gap-2 rounded-xl border border-emerald-200 px-3 py-2 text-emerald-800 hover:bg-emerald-50"
                >
                  <InstagramIcon className="w-4 h-4" />
                  Instagram
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* Fondo clickeable para cerrar */}
        <button
          type="button"
          className="fixed inset-0 -z-10 h-[calc(100vh-4rem)] bg-black/10"
          onClick={close}
          aria-hidden="true"
          tabIndex={-1}
        />
      </div>
    </header>
  );
}
