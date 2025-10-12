// src/app/[locale]/historia/page.tsx
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { Section, Container, Card } from "@/components/ui/primitives";

export const dynamic = "force-static";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const isEN = params.locale === "en";
  const title = isEN ? "History — Santa Frida Farm" : "Historia — Santa Frida Farm";
  const description = isEN
    ? "The origin, values and legacy behind Santa Frida Farm — a story of resilience, family and land."
    : "Origen, valores y legado de Santa Frida Farm — una historia de resiliencia, familia y tierra.";

  return {
    title,
    description,
    alternates: { languages: { es: "/es/historia", en: "/en/historia" } },
    openGraph: {
      title,
      description,
      images: [
        {
          url: "/images/history-maria-aguacates.webp",
          width: 1200,
          height: 630,
          alt: "Santa Frida Farm",
        },
      ],
    },
  };
}

export default function HistoriaPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const isEN = locale === "en";

  const t = {
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
      {/* Header minimal */}
      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/95 backdrop-blur-md">
        <Container className="flex h-16 items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center gap-3 group">
            <div className="relative">
              <Image
                src="/logo-santa-frida.png"
                alt="Santa Frida Farm"
                width={40}
                height={40}
                className="h-10 w-10 object-contain transition-transform duration-200 group-hover:scale-105"
                priority
              />
            </div>
            <span className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors duration-200">
              Santa Frida Farm
            </span>
          </Link>
          
          <nav aria-label="Breadcrumb" className="text-sm">
            <ol className="flex items-center gap-2 text-slate-500">
              <li>
                <Link
                  href={`/${locale}`}
                  className="hover:text-emerald-600 transition-colors duration-200"
                >
                  {t.crumbHome}
                </Link>
              </li>
              <li aria-hidden className="text-slate-300">›</li>
              <li className="font-medium text-slate-700" aria-current="page">
                {t.pageTitle}
              </li>
            </ol>
          </nav>
        </Container>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-slate-50"></div>
        <Container className="relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 mb-8">
              <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></div>
              {isEN ? "Our Story" : "Nuestra Historia"}
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-8">
              {t.pageTitle}
            </h1>
            
            <blockquote className="text-xl sm:text-2xl text-slate-600 leading-relaxed italic max-w-3xl mx-auto">
              <span className="text-emerald-600">"{t.quoteA}</span>
              <br />
              <span>{t.quoteB}"</span>
            </blockquote>
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <Section tone="alt" className="py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                  {t.storyTitle}
                </h2>
                <div className="w-16 h-1 bg-emerald-600 rounded-full"></div>
              </div>
              
              <div className="prose prose-lg prose-slate max-w-none">
                {isEN ? (
                  <>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      Santa Frida Farm did not start at a desk. It started in the land. In those quiet dawns when the sun has
                      not yet risen but a woman is already standing, with a steady heart and hands ready to sow.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      María Yennis Silgado, founder of Santa Frida Farm, learned since childhood that the land was her only
                      certainty. Her parents taught her that every harvest is a promise of the future, and that dreams are
                      cultivated like avocados, coffee or vegetables: with patience, effort and faith.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-6">
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
                    <p className="text-slate-600 leading-relaxed mb-6">
                      Santa Frida Farm no nació en un escritorio. Nació en la tierra. En esas madrugadas silenciosas donde el sol
                      aún no ha salido, pero una mujer ya está de pie, con el corazón firme y las manos listas para sembrar.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      María Yennis Silgado, fundadora de Santa Frida Farm, aprendió desde niña que la tierra era su única
                      certeza. Sus padres le enseñaron que cada cosecha era una promesa de futuro, y que los sueños se cultivaban
                      igual que los aguacates, el café o las hortalizas: con paciencia, con esfuerzo y con fe.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-6">
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
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
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
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-emerald-100 rounded-full opacity-60"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-emerald-200 rounded-full opacity-40"></div>
            </div>
          </div>
        </Container>
      </Section>

      {/* What represents Section */}
      <Section tone="plain" className="py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
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
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-slate-100 rounded-full opacity-60"></div>
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-slate-200 rounded-full opacity-40"></div>
            </div>
            
            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                  {t.whatTitle}
                </h2>
                <div className="w-16 h-1 bg-emerald-600 rounded-full"></div>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-slate-600 leading-relaxed">
                  {isEN ? "Santa Frida is far more than a farm:" : "Santa Frida es mucho más que una finca:"}
                </p>
                
                <div className="space-y-4">
                  <Card variant="subtle" className="p-6 border-l-4 border-emerald-500">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-3 h-3 rounded-full bg-emerald-600"></div>
                      </div>
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
                  
                  <Card variant="subtle" className="p-6 border-l-4 border-emerald-500">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-3 h-3 rounded-full bg-emerald-600"></div>
                      </div>
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
                  
                  <Card variant="subtle" className="p-6 border-l-4 border-emerald-500">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-3 h-3 rounded-full bg-emerald-600"></div>
                      </div>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                {t.legacyTitle}
              </h2>
              <div className="w-16 h-1 bg-emerald-600 rounded-full mx-auto"></div>
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
            
            <div className="mt-16">
              <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-emerald-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                {isEN ? "Continuing the legacy" : "Continuando el legado"}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 py-12">
        <Container>
          <div className="text-center">
            <Link 
              href={`/${locale}`}
              className="inline-flex items-center gap-2 text-slate-600 hover:text-emerald-600 transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {isEN ? "Back to home" : "Volver al inicio"}
            </Link>
          </div>
        </Container>
      </footer>
    </main>
  );
}