// src/app/[locale]/historia/page.tsx
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Card, Container, Section } from "@/components/ui/primitives";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Locale } from "@/i18n/config";
import { getDictionary, type Dict } from "@/i18n/config";
import type { Metadata } from "next";
import Image from "next/image";

export const dynamic = "force-static";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const isEN = params.locale === "en";
  const title = isEN 
    ? "History — María Yennis Silgado & Santa Frida Farm | Conscious Farming in Antioquia"
    : "Historia — María Yennis Silgado & Santa Frida Farm | Cultivo Consciente en Antioquia";
  const description = isEN
    ? "The inspiring story of María Yennis Silgado and Santa Frida Farm — from resilience to agricultural success. Conscious farming in Marinilla, Antioquia."
    : "La inspiradora historia de María Yennis Silgado y Santa Frida Farm — de la resiliencia al éxito agrícola. Cultivo consciente en Marinilla, Antioquia.";

  return {
    title,
    description,
    keywords: [
      "maría yennis silgado",
      "historia santa frida farm",
      "resiliencia agricultura colombia",
      "exportador agrícola antioquia",
      "finca familiar marinilla",
      "agricultura sostenible colombia",
      "exportación emiratos arabes",
      "exportación canada",
      "aguacate hass colombia",
      "café catimor antioquia"
    ],
    alternates: { 
      canonical: `/${params.locale}/historia`,
      languages: { es: "/es/historia", en: "/en/historia" } 
    },
    openGraph: {
      type: "article",
      title,
      description,
      locale: isEN ? "en_US" : "es_CO",
      alternateLocale: isEN ? "es_CO" : "en_US",
      images: [
        {
          url: "/images/history-maria-aguacates.webp",
          width: 1200,
          height: 630,
          alt: isEN 
            ? "María Yennis Silgado selecting avocados at Santa Frida Farm - Conscious farming in Antioquia"
            : "María Yennis Silgado seleccionando aguacates en Santa Frida Farm - Cultivo consciente en Antioquia",
          type: "image/webp",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/history-maria-aguacates.webp"],
    },
  };
}

export default async function HistoriaPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const isEN = locale === "en";
  const t: Dict = await getDictionary(locale);

  const th = {
    crumbHome: isEN ? "Home" : "Inicio",
    pageTitle: isEN ? "History" : "Historia",
    quoteA: isEN 
      ? "The seeds that bloom today were planted with tears,"
      : "Las semillas que hoy florecen fueron plantadas con lágrimas,",
    quoteB: isEN 
      ? "hope and hands that never gave up."
      : "esperanza y manos que nunca se rindieron.",
    storyTitle: isEN ? "How Santa Frida Farm began" : "Cómo nació Santa Frida Farm",
    whatTitle: isEN ? "What Santa Frida represents" : "¿Qué representa Santa Frida Farm?",
    legacyTitle: isEN ? "A woman, a legacy" : "Una mujer, un legado",
  };

  return (
    <main className="min-h-screen bg-white">
      <Header t={t} locale={locale} />

      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />
        <Container className="relative">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <div className="inline-flex items-center rounded-full border border-emerald-200/70 bg-emerald-50/60 px-4 py-2 text-sm font-semibold text-emerald-700 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 mr-2" />
                {isEN ? "Our Story" : "Nuestra Historia"}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.06}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-tight mb-6">
                {th.pageTitle}
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <blockquote className="text-xl sm:text-2xl text-slate-600 leading-relaxed italic max-w-3xl mx-auto">
                <span className="text-emerald-700">"{th.quoteA}</span>
                <br />
                <span>{th.quoteB}"</span>
              </blockquote>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <Section tone="alt" className="py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-medium text-slate-900 tracking-tight mb-4">
                  {th.storyTitle}
                </h2>
                <div className="w-14 h-0.5 bg-emerald-600/80 rounded"></div>
              </div>
              
              <div className="prose prose-lg prose-slate max-w-none">
                {isEN ? (
                  <>
                    <p className="text-slate-700 leading-relaxed mb-6">
                      Santa Frida Farm did not start at a desk. It started in the land. In those quiet dawns when the sun has
                      not yet risen but a woman is already standing, with a steady heart and hands ready to sow.
                    </p>
                    <p className="text-slate-700 leading-relaxed mb-6">
                      María Yennis Silgado, founder of Santa Frida Farm, learned since childhood that the land was her only
                      certainty. Her parents taught her that every harvest is a promise of the future, and that dreams are
                      cultivated like avocados, coffee or vegetables: with patience, effort and faith.
                    </p>
                    <p className="text-slate-700 leading-relaxed mb-6">
                      From an early age she became a guardian of ancestral knowledge: conscious sowing, clean harvesting and
                      respect for nature. She also faced storms. The hardest one: the loss of her daughter in 2020 — a pain that
                      broke her soul, but not her will.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      Amid grief, it was the land that held her. Each dawn, she got up to sow — not only out of need, but as an
                      act of love, remembrance and comfort. In those furrows watered by tears and hope, the name Santa Frida Farm
                      grew stronger: a farm that overcame great obstacles and found light along the way.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-slate-700 leading-relaxed mb-6">
                      Santa Frida Farm no nació en un escritorio. Nació en la tierra. En esas madrugadas silenciosas donde el sol
                      aún no ha salido, pero una mujer ya está de pie, con el corazón firme y las manos listas para sembrar.
                    </p>
                    <p className="text-slate-700 leading-relaxed mb-6">
                      María Yennis Silgado, fundadora de Santa Frida Farm, aprendió desde niña que la tierra era su única
                      certeza. Sus padres le enseñaron que cada cosecha era una promesa de futuro, y que los sueños se cultivaban
                      igual que los aguacates, el café o las hortalizas: con paciencia, con esfuerzo y con fe.
                    </p>
                    <p className="text-slate-700 leading-relaxed mb-6">
                      Desde muy pequeña se convirtió en guardiana de saberes ancestrales: siembra consciente, cosecha limpia y
                      respeto por la naturaleza. También enfrentó tormentas. La más dura: la pérdida de su hija en 2020. Un dolor
                      que partió su alma, pero no su voluntad.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      En medio del luto, fue la tierra quien la sostuvo. Cada amanecer, se levantaba para sembrar —no solo por
                      necesidad— sino como un acto de amor, memoria y consuelo. En esos surcos regados por lágrimas y esperanza
                      se fortaleció el nombre Santa Frida Farm: una finca que superó obstáculos enormes y encontró luz en su
                      camino.
                    </p>
                  </>
                )}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-lg border border-slate-200/60">
                <picture>
                  <source srcSet="/images/history-maria-aguacates.webp" type="image/webp" />
                  <Image
                    src="/images/history-maria-aguacates.jpg"
                    alt={
                      isEN
                        ? "María Yennis selecting avocados at Santa Frida Farm"
                        : "María Yennis seleccionando aguacates en Santa Frida Farm"
                    }
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </picture>
              </div>
              
            </div>
          </div>
        </Container>
      </Section>

      {/* What represents Section */}
      <Section tone="plain" className="py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-lg border border-slate-200/60">
                <picture>
                  <source srcSet="/images/history-campo-siembra.webp" type="image/webp" />
                  <Image
                    src="/images/history-campo-siembra.jpg"
                    alt={isEN ? "Field work and planting at Santa Frida Farm" : "Trabajo de campo y siembra en Santa Frida Farm"}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </picture>
              </div>
              
            </div>
            
            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <h2 className="text-3xl sm:text-4xl font-medium text-slate-900 tracking-tight mb-6">
                  {th.whatTitle}
                </h2>
                <div className="w-14 h-0.5 bg-emerald-600/80 rounded"></div>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-slate-600 leading-relaxed">
                  {isEN ? "Santa Frida is far more than a farm:" : "Santa Frida es mucho más que una finca:"}
                </p>
                
                <div className="space-y-4">
                  <Card variant="subtle" className="p-6 border-l-2 border-emerald-500/70">
                    <div className="flex items-start gap-4">
                      
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">
                          {isEN ? "Resilience sown" : "Resiliencia sembrada"}
                        </h3>
                        <p className="text-slate-600 text-sm">
                          {isEN 
                            ? "Every seed planted represents overcoming obstacles and turning pain into purpose."
                            : "Cada semilla sembrada representa superar obstáculos y convertir el dolor en propósito."
                          }
                        </p>
                      </div>
                    </div>
                  </Card>
                  
                  <Card variant="subtle" className="p-6 border-l-2 border-emerald-500/70">
                    <div className="flex items-start gap-4">
                      
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">
                          {isEN ? "Living memory" : "Memoria viva"}
                        </h3>
                        <p className="text-slate-600 text-sm">
                          {isEN 
                            ? "A tribute to ancestral knowledge and the wisdom passed down through generations."
                            : "Un homenaje a los saberes ancestrales y la sabiduría transmitida por generaciones."
                          }
                        </p>
                      </div>
                    </div>
                  </Card>
                  
                  <Card variant="subtle" className="p-6 border-l-2 border-emerald-500/70">
                    <div className="flex items-start gap-4">
                      
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">
                          {isEN ? "Conscious abundance" : "Abundancia consciente"}
                        </h3>
                        <p className="text-slate-600 text-sm">
                          {isEN 
                            ? "The symbol of a family that turned scarcity into sustainable abundance through conscious farming."
                            : "El símbolo de una familia que convirtió la escasez en abundancia sostenible a través del cultivo consciente."
                          }
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
                
                <p className="text-slate-600 leading-relaxed">
                  {isEN 
                    ? "Today, under María Yennis' leadership, we produce Hass avocado, catimor coffee and clean vegetables with sustainable methods, caring work and honesty."
                    : "Hoy, bajo el liderazgo de María Yennis, producimos aguacate Hass, café catimor y hortalizas limpias, con métodos sostenibles, cuidado amoroso y trabajo honesto."
                  }
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Legacy Section */}
      <Section tone="alt" className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
                <h2 className="text-3xl sm:text-4xl font-medium text-slate-900 tracking-tight mb-6">
                {th.legacyTitle}
              </h2>
              <div className="w-14 h-0.5 bg-emerald-600/80 rounded mx-auto"></div>
            </div>
            
            <div className="prose prose-lg prose-slate max-w-none">
              {isEN ? (
                <>
                  <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                    Thanks to María Yennis Silgado's relentless effort, Santa Frida Farm is now a solid reality—free of pests,
                    with healthy crops and a firm vision for growth. With her hands, empirical wisdom and love for the land, she
                    has built a company that inspires her children, grandchildren and many other rural women.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    She is the root of this project; the soul behind the name. The example that even if pain takes something away,
                    the land can give hope back—if you never stop sowing.
                  </p>
                </>
              ) : (
                <>
                  <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                    Gracias al esfuerzo inagotable de María Yennis Silgado, Santa Frida Farm es hoy una realidad sólida, limpia de
                    plagas, con cultivos sanos y una visión firme de crecimiento. Ella, con sus manos, su sabiduría empírica y su
                    amor por la tierra, ha levantado una empresa que inspira a hijos, nietos y a muchas otras mujeres rurales.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Ella es la raíz de este proyecto; el alma detrás del nombre. El ejemplo de que, aunque el dolor te arranque
                    algo, la tierra puede devolverte esperanza si no dejás de sembrar.
                  </p>
                </>
              )}
            </div>
            
            <div className="mt-14">
              <div className="inline-flex items-center gap-3 px-7 py-3.5 rounded-lg bg-slate-900 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300">
                {isEN ? "Continuing the legacy" : "Continuando el legado"}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Footer t={t} locale={locale} />
    </main>
  );
}