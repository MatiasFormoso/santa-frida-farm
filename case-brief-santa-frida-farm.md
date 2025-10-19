# Case Brief — Santa Frida Farm
## Plataforma de Exportación Agrícola Premium

---

## S1 — Portada

**Imagen:** Hero desktop (1920x1080 WebP optimizado)

### Título: Santa Frida Farm — Plataforma de exportación (ES/EN)

**Subtítulo:** Arquitectura · Performance · SEO

**Pie:** Next.js 14 · TypeScript estricto · Tailwind · Headers de seguridad

---

## S2 — Contexto

**Imagen:** Hero mobile (responsive)

### Título: Alcance y contenido

**Bullets:**
- Operación agrícola en Marinilla (Antioquia, Colombia)
- Catálogo: aguacate Hass, café Catimor, hortalizas orgánicas
- Sitio bilingüe con rutas `/es` y `/en`
- Exportaciones a Emiratos Árabes Unidos y Canadá
- Trazabilidad completa del campo a la exportación

---

## S3 — Arquitectura

**Imagen:** Coffee production gallery desktop

### Título: Decisiones técnicas

**Bullets:**
- **Next.js 14 + TypeScript estricto** (SSG); JavaScript inicial acotado (~87 kB)
- **Sistema de componentes** con Tailwind CSS; animaciones condicionadas en mobile
- **Imágenes AVIF/WebP** y lazy loading con TTL de caché de 30 días
- **Rutas i18n** y metadatos por idioma con redirección automática
- **Framer Motion** optimizado con `optimizePackageImports`
- **Bundle analyzer** integrado para monitoreo de performance

---

## S4 — Calidad y seguridad

**Imagen:** Contact + mapa interactivo

### Título: Calidad y seguridad

**Bullets:**
- **TypeScript estricto** con configuración `noUncheckedIndexedAccess` y `exactOptionalPropertyTypes`
- **ESLint + Prettier** con reglas de accesibilidad (`jsx-a11y`)
- **Accesibilidad:** semántica HTML5, ARIA labels y manejo de foco
- **Headers de seguridad:** `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`
- **CSP para imágenes:** `default-src 'self'; script-src 'none'; sandbox`
- **Caché optimizado:** imágenes con TTL de 30 días, compresión habilitada

---

## S5 — SEO técnico

**Imagen:** JSON-LD formateado en consola

### Título: Datos estructurados

**Bullets:**
- **JSON-LD (Schema.org) activo:** `AgriculturalBusiness` / `Product` / `Organization`
- **areaServed:** Colombia, Emiratos Árabes Unidos, Canadá
- **Catálogo declarado:** Hass, Catimor, hortalizas con disponibilidad y precios
- **Contacto e idiomas** (ES/EN) especificados con `ContactPoint`
- **Metadatos geográficos:** coordenadas GPS de Marinilla, Antioquia
- **OpenGraph + Twitter Cards** con imágenes optimizadas
- **Dublin Core** metadata para bibliotecas digitales

---

## S6 — Indexación y métricas

**Imagen:** sitemap.xml generado

### Título: Rastreo e indicadores

**Bullets:**
- **sitemap.xml** con URLs de `/es`, `/en`, productos y `/contact`
- **robots.txt** habilitado con reglas específicas por bot
- **Core Web Vitals** monitoreadas (mobile-first)
- **First-load JS:** ~87 kB (excelente para SSG)
- **Bundle size:** 155 kB total para página principal
- **Static generation:** 7 páginas pre-renderizadas
- **SEO keywords:** 40+ términos específicos de exportación agrícola

---

## Métricas técnicas destacadas

| Métrica | Valor | Estado |
|---------|-------|--------|
| First Load JS | 87.4 kB | ✅ Excelente |
| Bundle Total | 155 kB | ✅ Optimizado |
| Páginas SSG | 7/7 | ✅ 100% |
| Imágenes WebP/AVIF | ✅ | ✅ Moderno |
| TypeScript Strict | ✅ | ✅ Robusto |
| Headers Seguridad | 3/3 | ✅ Completo |
| JSON-LD Schema | ✅ | ✅ SEO+ |

---

## Stack tecnológico completo

**Frontend:** Next.js 14, React 18, TypeScript 5.9, Tailwind CSS 4.1  
**Animaciones:** Framer Motion 12.23 (optimizado)  
**Imágenes:** Sharp 0.34, WebP/AVIF, lazy loading  
**SEO:** JSON-LD, OpenGraph, Twitter Cards, sitemap.xml  
**Seguridad:** CSP, X-Frame-Options, X-Content-Type-Options  
**Herramientas:** ESLint, Prettier, Bundle Analyzer  
**Deploy:** Vercel-ready con `output: "standalone"`

---

*Case brief generado para Santa Frida Farm — Exportador premium de productos agrícolas colombianos*

