// src/app/[locale]/page.tsx
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import FraseHomenaje from "@/components/sections/FraseHomenaje";
import About from "@/components/sections/About";
import Company from "@/components/sections/Company";
import HassSection from "@/components/sections/HassSection";
import Catimori from "@/components/sections/Catimori";
import Hortalizas from "@/components/sections/Hortalizas";
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
      <FraseHomenaje t={t} locale={params.locale} />
      <About t={t} locale={params.locale} />
      <Company t={t} locale={params.locale} />
      <HassSection t={t} locale={params.locale} />
      <Catimori t={t} locale={params.locale} />
      <Hortalizas t={t} locale={params.locale} />
      <InstagramStrip t={t} locale={params.locale} />
      <Contact t={t} locale={params.locale} />
      <Footer t={t} locale={params.locale} />
    </main>
  );
}
