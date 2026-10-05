import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { Footer, Header, Team } from "@/components/sections/landing-page";

export const metadata: Metadata = createPageMetadata({
  title: "El estudio en Alcalá de Henares",
  description:
    "Conoce el estudio de tatuajes Sundemon en Alcalá de Henares, su equipo y una forma de trabajar basada en la calma y la escucha.",
  path: "/estudio",
});

export default function StudioPage() {
  return (
    <>
      <Header />
      <main>
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <p className="font-sans text-[10px] font-semibold tracking-[0.14em] text-copper-500 uppercase">
            El espacio · Alcalá de Henares
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-tight text-earth-700 sm:text-6xl">
            Un lugar para crear con calma.
          </h1>
          <p className="mt-6 max-w-2xl font-sans text-base leading-7 text-ink-900/70 sm:text-lg">
            Sundemon es un estudio de tatuajes y un espacio creativo donde las ideas encuentran tiempo, atención y una forma propia.
          </p>
        </section>
        <section aria-labelledby="story-title" className="border-y border-sand-300/60 bg-sand-200/45">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:px-8">
            <div>
              <p className="font-sans text-[10px] font-semibold tracking-[0.14em] text-copper-500 uppercase">La historia de Sundemon</p>
              <h2 id="story-title" className="mt-3 font-display text-3xl text-earth-700 sm:text-4xl">Una forma de tatuar construida con tiempo y escucha</h2>
            </div>
            <div className="space-y-5 font-sans text-sm leading-7 text-ink-900/70 sm:text-base">
              <p>Jhoan lleva más de ocho años dedicado al tatuaje. Durante este tiempo ha ido construyendo una manera de trabajar basada en la precisión, la calma y el acompañamiento cercano a cada persona.</p>
              <p>Sundemon nació para dar forma a esa visión: un estudio pensado para que cada proyecto tenga su propio tiempo y para que el proceso se sienta tan cuidado como el resultado. Hace casi un año abrimos nuestras puertas en Alcalá de Henares y seguimos creando este espacio junto a quienes confían en nosotros.</p>
            </div>
          </div>
        </section>
        <Team />
      </main>
      <Footer />
    </>
  );
}
