# Santa Frida Farm — Plataforma Web

Sitio web multilenguaje desarrollado con **Next.js 14**, **TypeScript** y **Tailwind CSS**, orientado a una arquitectura modular, mantenible y optimizada para rendimiento.  
Incluye soporte para enrutamiento localizado (ES/EN), secciones reutilizables y componentes base diseñados para garantizar consistencia visual y semántica.

🔗 **Deploy en producción:** [https://santa-frida-farm.vercel.app](https://santa-frida-farm.vercel.app)

---

## ⚙️ Stack Tecnológico

- **Framework:** [Next.js 14 (App Router)](https://nextjs.org/docs)
- **Lenguaje:** TypeScript  
- **Estilos:** Tailwind CSS + sistema de “primitives” (`Section`, `Container`, `Card`)  
- **Internacionalización:** rutas estáticas `/es` y `/en` con conmutador de idioma  
- **Despliegue:** Vercel (edge optimized build)  
- **Imágenes:** `next/image` con optimización automática y responsive layout  

---

## 🧩 Arquitectura

Estructura principal del proyecto:
```
src/
 ├─ app/
 │   ├─ [locale]/               # rutas localizadas (es/en)
 │   │   ├─ page.tsx            # página principal
 │   │   ├─ historia/           # página dedicada “Historia”
 │   │   └─ layout.tsx          # layout base por idioma
 │   └─ globals.css
 ├─ components/
 │   ├─ sections/               # secciones de contenido (Hero, Story, Company, etc.)
 │   └─ ui/                     # componentes base reutilizables
 ├─ lib/                        # helpers, configuración e i18n
 └─ public/
     └─ images/
```

**Características de diseño:**
- Enrutamiento con App Router y generación estática (`generateMetadata`).
- Layouts compuestos mediante primitives reutilizables.
- Convenciones BEM-like en Tailwind para jerarquía visual consistente.
- HTML semántico y accesibilidad mediante roles y focus states.
- Alternancia de tonos (“plain” / “alt”) para equilibrio cromático entre secciones.

---

## 🧠 Funcionalidades Principales

- **Contenido bilingüe (ES/EN)** a nivel de ruta, sin dependencias externas de i18n.
- **Diseño responsive**, adaptativo a breakpoints con tipografía fluida.
- **Generación estática completa** (exportable sin servidor).
- **Código liviano** (~120 KB gzipped) sin frameworks UI adicionales.
- **Optimización de imágenes** con `next/image`, relaciones de aspecto y hints de prioridad.

---

## 🧱 Sistema de Diseño

Primitives principales definidas en `src/components/ui/primitives.tsx`:
- `Section`: contenedor semántico con variantes de tono.  
- `Container`: wrapper responsive con control de ancho y padding.  
- `Card`: superficie base para bloques de contenido.

Estas primitives permiten mantener consistencia visual, espaciado y ritmo vertical a lo largo del sitio.

---

**URL de producción:**  
[https://santa-frida-farm.vercel.app](https://santa-frida-farm.vercel.app)

---
