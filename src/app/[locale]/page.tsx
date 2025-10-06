// src/app/[locale]/page.tsx
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Products from "@/components/sections/Products";
import Experiences from "@/components/sections/Experiences";
import InstagramStrip from "@/components/sections/InstagramStrip";
import Contact from "@/components/sections/Contact";

import { getDictionary, type Locale, type Dict } from "@/i18n/config";

export const dynamic = "force-static";

type Props = { params: { locale: Locale } };

export default async function HomeByLocale({ params }: Props) {
  const t: Dict = await getDictionary(params.locale);

  return (
    <main>
      <Header t={t} locale={params.locale} />
      <Hero t={t} locale={params.locale} />
      <About t={t} locale={params.locale} />
      <Products t={t} locale={params.locale} />      {/* ← nuevo */}
      <Experiences t={t} locale={params.locale} />   {/* ← nuevo */}
      <InstagramStrip />
      <Contact />
      <Footer t={t} locale={params.locale} />
    </main>
  );
}
