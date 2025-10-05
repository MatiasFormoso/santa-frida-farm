import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Products from "@/components/sections/Products";
import Experiences from "@/components/sections/Experiences";
import InstagramStrip from "@/components/sections/InstagramStrip";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Products />
      <Experiences />
      <InstagramStrip />
      <Contact />
      <Footer />
    </main>
  );
}
