import type { Metadata } from "next";
import { Footer, Gallery, Header, Process, Team } from "@/components/sections/landing-page";

export const metadata: Metadata = {
  title: "Tatuajes en Alcalá de Henares | Fine Line y Micro-Trazo",
  description:
    "Descubre los tatuajes de autor de Sundemon en Alcalá de Henares: fine line, micro-trazo y diseños pensados para ti.",
};

export default function TattoosPage() {
  return (
    <>
      <Header />
      <main>
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <p className="font-sans text-[10px] font-semibold tracking-[0.14em] text-copper-500 uppercase">
            Proceso y resultados · Estudio de autor
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-tight text-earth-700 sm:text-6xl">
            Tatuajes que empiezan mucho antes de la aguja.
          </h1>
          <p className="mt-6 max-w-2xl font-sans text-base leading-7 text-ink-900/70 sm:text-lg">
            Cada pieza nace de una conversación y se desarrolla con calma, precisión y una mirada propia en nuestro estudio de tatuajes en Alcalá de Henares.
          </p>
        </section>
        <Gallery />
        <Process />
        <Team />
      </main>
      <Footer />
    </>
  );
}
