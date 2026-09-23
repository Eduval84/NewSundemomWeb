import type { Metadata } from "next";
import { Footer, Header, Location, Philosophy, Team } from "@/components/sections/landing-page";

export const metadata: Metadata = {
  title: "Sundemon Tattoo Studio | Espacio creativo en Alcalá de Henares",
  description:
    "Conoce Sundemon Tattoo Studio, nuestra filosofía, equipo y espacio creativo en Calle Ferraz 3, Alcalá de Henares.",
};

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
        <Philosophy />
        <Team />
        <Location />
      </main>
      <Footer />
    </>
  );
}
