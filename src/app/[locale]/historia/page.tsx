// src/app/[locale]/historia/page.tsx
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { Section, Container } from "@/components/ui/primitives";

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
          url: "/images/history-maria-aguacates.jpg",
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
    // quote en 2 partes para forzar salto y equilibrar líneas
    quoteA: "“Las semillas que hoy florecen fueron plantadas con lágrimas,",
    quoteB: "esperanza y manos que nunca se rindieron.”",
    storyTitle: isEN ? "How Santa Frida Farm began" : "Cómo nació Santa Frida Farm",
    whatTitle: isEN ? "What Santa Frida represents" : "¿Qué representa Santa Frida Farm?",
    legacyTitle: isEN ? "A woman, a legacy" : "Una mujer, un legado",
    contactCta: isEN ? "Contact us" : "Contacto y pedidos",
    contactHref: isEN ? "/en#contact" : "/es#contacto",
  };

  return (
    <main>
      {/* Header minimal inline (solo logo + marca) */}
      <header className="sticky top-0 z-40 border-b border-stone-200/70 bg-white/80 backdrop-blur">
        <Container className="flex h-14 items-center justify-between">
          <a href={`/${locale}`} aria-label="Santa Frida Farm — Home" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center">
              <Image
                src="/logo-santa-frida.png"
                alt="Santa Frida Farm"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
                priority
              />
            </span>
            <span className="whitespace-nowrap text-xl font-black tracking-tight text-stone-900">
              Santa Frida Farm
            </span>
          </a>
        </Container>
      </header>

      {/* Cabecera compacta con watermark a la derecha */}
      <Section tone="plain" className="py-6 sm:py-8">
        <div className="relative">
          {/* Bloque de texto */}
          <div className="grid items-start gap-8 md:grid-cols-12">
            <div className="md:col-span-8 lg:col-span-7">
              <h1 className="text-3xl font-bold text-stone-900 sm:text-4xl">{t.pageTitle}</h1>

              <nav aria-label="Breadcrumb" className="mt-3 text-sm text-stone-500">
                <ol className="flex items-center gap-2">
                  <li>
                    <Link
                      href={`/${locale}`}
                      className="underline-offset-4 hover:underline hover:text-stone-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    >
                      {t.crumbHome}
                    </Link>
                  </li>
                  <li aria-hidden>›</li>
                  <li className="font-medium text-stone-700" aria-current="page">
                    {t.pageTitle}
                  </li>
                </ol>
              </nav>

              <blockquote className="mt-4 border-l-4 border-emerald-700 pl-4 text-lg italic leading-relaxed text-stone-700">
                <span>{t.quoteA}</span>
                <br />
                <span>{t.quoteB}</span>
              </blockquote>
            </div>
          </div>

          {/* Marca de agua: logo grande, sin tarjeta, pegado al borde inferior derecha */}
          <div
            aria-hidden="true"
            className="pointer-events-none select-none absolute right-34 bottom-0 translate-y-3 sm:translate-y-4"
          >
            {/* tamaños responsivos para que sea protagonista pero sin romper el layout */}
            <Image
              src="/logo-santa-frida.png"
              alt=""
              width={720}
              height={720}
              priority
              sizes="(min-width:1280px) 620px, (min-width:1024px) 520px, (min-width:640px) 420px, 320px"
              className="h-auto w-[110px] sm:w-[140px] lg:w-[160px] xl:w-[180px]"

            />
          </div>
        </div>
      </Section>

      {/* Sección 1: Historia + foto (banda gris clara) */}
      <Section id="historia" tone="alt" className="py-12 sm:py-14">
        <div className="grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-semibold">{t.storyTitle}</h2>
            <div className="prose mt-4 max-w-none prose-stone">
              {isEN ? (
                <>
                  <p>
                    Santa Frida Farm did not start at a desk. It started in the land. In those quiet dawns when the sun has
                    not yet risen but a woman is already standing, with a steady heart and hands ready to sow.
                  </p>
                  <p>
                    María Yennis Silgado, founder of Santa Frida Farm, learned since childhood that the land was her only
                    certainty. Her parents taught her that every harvest is a promise of the future, and that dreams are
                    cultivated like avocados, coffee or vegetables: with patience, effort and faith.
                  </p>
                  <p>
                    From an early age she became a guardian of ancestral knowledge: conscious sowing, clean harvesting and
                    respect for nature. She also faced storms. The hardest one: the loss of her daughter in 2020 — a pain that
                    broke her soul, but not her will.
                  </p>
                  <p>
                    Amid grief, it was the land that held her. Each dawn, she got up to sow — not only out of need, but as an
                    act of love, remembrance and comfort. In those furrows watered by tears and hope, the name Santa Frida Farm
                    grew stronger: a farm that overcame great obstacles and found light along the way.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Santa Frida Farm no nació en un escritorio. Nació en la tierra. En esas madrugadas silenciosas donde el sol
                    aún no ha salido, pero una mujer ya está de pie, con el corazón firme y las manos listas para sembrar.
                  </p>
                  <p>
                    María Yennis Silgado, fundadora de Santa Frida Farm, aprendió desde niña que la tierra era su única
                    certeza. Sus padres le enseñaron que cada cosecha era una promesa de futuro, y que los sueños se cultivaban
                    igual que los aguacates, el café o las hortalizas: con paciencia, con esfuerzo y con fe.
                  </p>
                  <p>
                    Desde muy pequeña se convirtió en guardiana de saberes ancestrales: siembra consciente, cosecha limpia y
                    respeto por la naturaleza. También enfrentó tormentas. La más dura: la pérdida de su hija en 2020. Un dolor
                    que partió su alma, pero no su voluntad.
                  </p>
                  <p>
                    En medio del luto, fue la tierra quien la sostuvo. Cada amanecer, se levantaba para sembrar —no solo por
                    necesidad— sino como un acto de amor, memoria y consuelo. En esos surcos regados por lágrimas y esperanza
                    se fortaleció el nombre Santa Frida Farm: una finca que superó obstáculos enormes y encontró luz en su
                    camino.
                  </p>
                </>
              )}
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl shadow-sm">
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
                sizes="(max-width: 768px) 100vw, 480px"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Sección 2: ¿Qué representa? (banda blanca) */}
      <Section id="que-representa" tone="plain" className="py-12 sm:py-14">
        <div className="grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl shadow-sm">
              <Image
                src="/images/history-campo-siembra.jpg"
                alt={isEN ? "Field work and planting at Santa Frida Farm" : "Trabajo de campo y siembra en Santa Frida Farm"}
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 480px"
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">{t.whatTitle}</h2>
            <div className="prose mt-4 max-w-none prose-stone">
              {isEN ? (
                <>
                  <p>Santa Frida is far more than a farm:</p>
                  <ul>
                    <li>Resilience sown.</li>
                    <li>Living memory.</li>
                    <li>The symbol of a family that turned pain into purpose and scarcity into conscious abundance.</li>
                  </ul>
                  <p>
                    Today, under María Yennis’ leadership, we produce Hass avocado, catimor coffee and clean vegetables with
                    sustainable methods, caring work and honesty.
                  </p>
                </>
              ) : (
                <>
                  <p>Santa Frida es mucho más que una finca:</p>
                  <ul>
                    <li>Resiliencia sembrada.</li>
                    <li>Memoria viva.</li>
                    <li>El símbolo de una familia que convirtió el dolor en propósito y la escasez en abundancia consciente.</li>
                  </ul>
                  <p>
                    Hoy, bajo el liderazgo de María Yennis, producimos aguacate Hass, café catimor y hortalizas limpias, con
                    métodos sostenibles, cuidado amoroso y trabajo honesto.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* Sección 3: Legado (banda gris clara) */}
      <Section id="legado" tone="alt" className="py-12 sm:py-14">
        <div className="max-w-6xl">
          <h2 className="text-2xl font-semibold">{t.legacyTitle}</h2>
          <div className="prose mt-4 max-w-none prose-stone">
            {isEN ? (
              <>
                <p>
                  Thanks to María Yennis Silgado’s relentless effort, Santa Frida Farm is now a solid reality—free of pests,
                  with healthy crops and a firm vision for growth. With her hands, empirical wisdom and love for the land, she
                  has built a company that inspires her children, grandchildren and many other rural women.
                </p>
                <p>
                  She is the root of this project; the soul behind the name. The example that even if pain takes something away,
                  the land can give hope back—if you never stop sowing.
                </p>
              </>
            ) : (
              <>
                <p>
                  Gracias al esfuerzo inagotable de María Yennis Silgado, Santa Frida Farm es hoy una realidad sólida, limpia de
                  plagas, con cultivos sanos y una visión firme de crecimiento. Ella, con sus manos, su sabiduría empírica y su
                  amor por la tierra, ha levantado una empresa que inspira a hijos, nietos y a muchas otras mujeres rurales.
                </p>
                <p>
                  Ella es la raíz de este proyecto; el alma detrás del nombre. El ejemplo de que, aunque el dolor te arranque
                  algo, la tierra puede devolverte esperanza si no dejás de sembrar.
                </p>
              </>
            )}
          </div>

          <div className="mt-8">
            <Link
              href={t.contactHref}
              className="inline-flex items-center rounded-xl border border-emerald-700 px-4 py-2 text-sm font-semibold text-emerald-800 hover:bg-emerald-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              {t.contactCta}
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
