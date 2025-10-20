# Santa Frida Farm — Premium Agricultural Platform

A professional, multilingual web platform built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Designed for premium agricultural products showcasing Santa Frida Farm's Hass avocados, specialty coffee, and organic vegetables from Marinilla, Antioquia, Colombia.

🔗 **Production URL:** [https://santafridafarm.com](https://santafridafarm.com)

---

## 🚀 Features

- **🌍 Multilingual Support** - Complete ES/EN localization with route-based switching
- **📱 Responsive Design** - Mobile-first approach with fluid typography and breakpoints
- **⚡ Performance Optimized** - Static generation, image optimization, and bundle analysis
- **🎨 Professional Design System** - Consistent primitives and corporate aesthetics
- **♿ Accessibility** - WCAG compliant with semantic HTML and ARIA attributes
- **🔒 Security** - Security headers, CSP policies, and best practices
- **🧪 Type Safety** - Strict TypeScript configuration with comprehensive type checking

---

## 🛠️ Tech Stack

### Core Framework
- **[Next.js 14](https://nextjs.org/docs)** - App Router with static generation
- **[TypeScript](https://www.typescriptlang.org/)** - Strict type checking and modern JS features
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting with TypeScript and React rules
- **[Prettier](https://prettier.io/)** - Code formatting and consistency
- **[Bundle Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)** - Bundle size optimization

### Animation & UX
- **[Framer Motion](https://www.framer.com/motion/)** - Smooth animations and transitions
- **Custom Scroll Reveal** - Intersection Observer-based animations

---

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── [locale]/                 # Localized routes (es/en)
│   │   ├── page.tsx             # Homepage
│   │   ├── historia/            # History page
│   │   └── layout.tsx           # Locale-specific layout
│   ├── globals.css              # Global styles and CSS variables
│   ├── layout.tsx               # Root layout
│   └── sitemap.ts               # Dynamic sitemap generation
├── components/                   # React components
│   ├── layout/                  # Layout components (Header, Footer)
│   ├── sections/                # Content sections (Hero, About, etc.)
│   └── ui/                      # Reusable UI primitives
├── i18n/                        # Internationalization
│   ├── config.ts                # i18n configuration and types
│   └── dictionaries/            # Translation files
├── lib/                         # Utilities and configuration
│   ├── config.ts                # App configuration
│   └── seo.ts                   # SEO utilities
└── public/
    └── images/                  # Optimized images and assets
```

---

## 🎨 Design System

### Primitives (`src/components/ui/primitives.tsx`)
- **`Section`** - Semantic container with tone variants
- **`Container`** - Responsive wrapper with width and padding control
- **`Card`** - Base surface for content blocks
- **`Button`** - Interactive elements with variants
- **`ScrollReveal`** - Animation wrapper component

### Color Palette
- **Primary**: Emerald-based corporate colors
- **Neutral**: Slate grays for text and backgrounds
- **Accent**: Teal highlights for interactive elements

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17.0 or higher
- npm 8.0.0 or higher


## 🌐 Deployment

The project is configured for automatic deployment on **Vercel**:

- **Production**: [https://santafridafarm.com](https://santafridafarm.com)
- **Branch**: `main` (auto-deploy)
- **Build Command**: `npm run build`
- **Output Directory**: `.next`


## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: ~120KB gzipped
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: WebP/AVIF formats with responsive sizing

---

## 🔧 Configuration

### TypeScript
Strict configuration with comprehensive type checking:
- `noUnusedLocals` and `noUnusedParameters`
- `exactOptionalPropertyTypes`
- `noImplicitReturns`
- `noUncheckedIndexedAccess`

### ESLint
Extended configuration with:
- Next.js recommended rules
- TypeScript support
- React and React Hooks rules
- Accessibility (jsx-a11y) rules
- Prettier integration

### Prettier
Consistent code formatting:
- 100 character line width
- Single quotes for JSX
- Semicolons enabled
- Trailing commas in ES5

---


## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
