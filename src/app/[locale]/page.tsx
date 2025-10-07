// src/app/[locale]/page.tsx
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Company from "@/components/sections/Company";
import Participation from "@/components/sections/Participation";
import Training from "@/components/sections/Training";
import Products from "@/components/sections/Products";
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
      <Company t={t} locale={params.locale} />

      <Participation t={t} locale={params.locale} />
      <Training t={t} locale={params.locale} />

      <Products t={t} locale={params.locale} />

      <InstagramStrip t={t} locale={params.locale} /> {/* <- props */}
      <Contact t={t} locale={params.locale} />       {/* <- props */}
      <Footer t={t} locale={params.locale} />
    </main>
  );
}
