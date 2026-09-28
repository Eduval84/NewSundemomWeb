import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer, Header, Process } from "@/components/sections/landing-page";
import { TattooStyles } from "@/components/sections/tattoo-styles";

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
        <section aria-labelledby="tattoos-hero-title" className="relative isolate min-h-[620px] overflow-hidden border-b border-sand-300/50 bg-ink-900 sm:min-h-[700px]">
          <Image
            src="/images/H1Tatuajes.avif"
            alt="Tatuaje realizado en Sundemon Tattoo Studio"
            fill
            priority
            className="-z-20 object-cover object-[55%_55%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-900/90 via-ink-900/60 to-ink-900/15" />
          <div className="relative mx-auto flex min-h-[620px] max-w-6xl items-center px-4 py-16 sm:min-h-[700px] sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 id="tattoos-hero-title" className="max-w-xl font-display text-5xl leading-[1.05] text-white-warm sm:text-7xl">
                ¿Diseñar sin escucharte? Nosotros no trabajamos así.
              </h1>
              <p className="mt-7 max-w-[50ch] font-sans text-base leading-7 text-sand-100 sm:text-lg">
                Cada pieza nace de una conversación y se desarrolla con calma, precisión y una mirada propia.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <Link href="#proceso" className="rounded-full bg-forest-700 px-6 py-3.5 font-sans text-sm font-semibold text-cta-text transition-colors hover:bg-forest-600 focus-visible:outline-2 focus-visible:outline-sand-100">
                  Cómo trabajamos <span aria-hidden="true">↓</span>
                </Link>
                <Link href="/contacto" className="font-sans text-sm font-semibold text-white-warm underline decoration-sand-300 underline-offset-8 transition-colors hover:text-sand-200 focus-visible:outline-2 focus-visible:outline-sand-100">
                  Reserva tu cita <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <TattooStyles />
        <Process />
        <section aria-labelledby="tattoos-cta-title" className="bg-ink-900 text-white-warm">
          <div className="mx-auto max-w-5xl px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-32">
            <p className="font-sans text-[10px] font-semibold tracking-[0.14em] text-sand-300 uppercase">Antes de dar el paso</p>
            <h2 id="tattoos-cta-title" className="mx-auto mt-5 max-w-3xl font-display text-4xl leading-tight sm:text-6xl">¿Qué quieres llevar contigo cuando este momento ya haya pasado?</h2>
            <p className="mx-auto mt-6 max-w-xl font-sans text-base leading-7 text-sand-200">No tienes que llegar con todo decidido. Cuéntanos qué te mueve y encontraremos juntos la forma de hacerlo permanente.</p>
            <Link href="/contacto" className="mt-9 inline-flex rounded-full bg-forest-700 px-7 py-4 font-sans text-sm font-semibold text-cta-text transition-colors hover:bg-forest-600 focus-visible:outline-2 focus-visible:outline-sand-100">
              Reserva tu cita <span aria-hidden="true" className="ml-2">↗</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
