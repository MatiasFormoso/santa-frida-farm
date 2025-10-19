// src/app/[locale]/page.tsx
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import About from "@/components/sections/About";
import Catimori from "@/components/sections/Catimori";
import Company from "@/components/sections/Company";
import Contact from "@/components/sections/Contact";
import FarmGallery from "@/components/sections/FarmGallery";
import FraseHomenaje from "@/components/sections/FraseHomenaje";
import HassSection from "@/components/sections/HassSection";
import Hero from "@/components/sections/Hero";
import Hortalizas from "@/components/sections/Hortalizas";
import InstagramStrip from "@/components/sections/InstagramStrip";

import { getDictionary, type Dict, type Locale } from "@/i18n/config";
import type { Metadata } from "next";

export const dynamic = "force-static";

type Props = { params: { locale: Locale } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = await getDictionary(params.locale);
  const isEN = params.locale === "en";
  
  return {
    title: isEN 
      ? "Santa Frida Farm — Conscious farming in Antioquia"
      : "Santa Frida Farm — Cultivo consciente en Antioquia",
    description: t.meta.description,
    alternates: {
      canonical: `/${params.locale}`,
      languages: { es: "/es", en: "/en" }
    },
    robots: {
      index: true,
      follow: true,
    }
  };
}

export default async function HomeByLocale({ params }: Props) {
  const t: Dict = await getDictionary(params.locale);

  return (
    <main>
      <Header t={t} locale={params.locale} />
      <Hero t={t} locale={params.locale} />
      <FraseHomenaje t={t} locale={params.locale} />
      <About t={t} locale={params.locale} />
      <Company t={t} locale={params.locale} />
      <FarmGallery t={t} locale={params.locale} />
      <HassSection t={t} locale={params.locale} />
      <Catimori t={t} locale={params.locale} />
      <Hortalizas t={t} locale={params.locale} />
      <InstagramStrip t={t} locale={params.locale} />
      <Contact t={t} locale={params.locale} />
      <Footer t={t} locale={params.locale} />
    </main>
  );
}
