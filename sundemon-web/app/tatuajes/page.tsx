import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer, Header } from "@/components/sections/landing-page";
import { TattooProcess } from "@/components/sections/tattoo-process";
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
        <TattooProcess />
        <section aria-labelledby="tattoos-cta-title" className="border-y border-sand-300/70 bg-sand-100">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8 lg:py-24">
            <div>
              <p className="font-sans text-[10px] font-semibold tracking-[0.14em] text-copper-500 uppercase">Antes de dar el paso</p>
              <p className="mt-4 max-w-xs font-sans text-sm leading-6 text-ink-900/60">Una idea puede esperar. Una conversación es un buen lugar para empezar.</p>
            </div>
            <div>
              <h2 id="tattoos-cta-title" className="max-w-3xl font-display text-4xl leading-tight text-earth-700 sm:text-5xl">¿Qué quieres llevar contigo cuando este momento ya haya pasado?</h2>
              <p className="mt-6 max-w-xl font-sans text-base leading-7 text-ink-900/65">No tienes que llegar con todo decidido. Cuéntanos qué te mueve y encontraremos juntos la forma de hacerlo permanente.</p>
              <Link href="/contacto" className="mt-8 inline-flex rounded-full bg-forest-700 px-7 py-4 font-sans text-sm font-semibold text-cta-text transition-colors hover:bg-forest-600 focus-visible:outline-2 focus-visible:outline-earth-700">
              Reserva tu cita <span aria-hidden="true" className="ml-2">↗</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
