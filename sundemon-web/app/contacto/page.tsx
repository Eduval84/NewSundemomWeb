import type { Metadata } from "next";
import Link from "next/link";
import { FAQ, Footer, Header, Location } from "@/components/sections/landing-page";

export const metadata: Metadata = {
  title: "Contacto y citas | Sundemon Tattoo Studio",
  description:
    "Contacta con Sundemon Tattoo Studio para hablar sobre tu próximo tatuaje en Alcalá de Henares. Estamos en Calle Ferraz 3.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:items-start lg:px-8 lg:py-24">
          <div>
            <p className="font-sans text-[10px] font-semibold tracking-[0.14em] text-copper-500 uppercase">
              Cita previa · Atención personalizada
            </p>
            <h1 className="mt-4 max-w-2xl font-display text-5xl leading-tight text-earth-700 sm:text-6xl">
              Cuéntanos tu historia para empezar.
            </h1>
            <p className="mt-6 max-w-xl font-sans text-base leading-7 text-ink-900/70 sm:text-lg">
              No necesitas tenerlo todo decidido. Comparte tu idea, una referencia o simplemente lo que quieres sentir, y encontraremos juntos el siguiente paso.
            </p>
            <Link href="mailto:hola@sundemon.com" className="mt-8 inline-flex rounded-full bg-earth-700 px-6 py-3.5 font-sans text-sm font-semibold text-white-warm transition-colors hover:bg-earth-500 focus-visible:outline-2 focus-visible:outline-copper-500">
              Escribir a hola@sundemon.com ↗
            </Link>
          </div>
          <div className="rounded-lg border border-sand-300/70 bg-sand-200/45 p-6 sm:p-8">
            <p className="font-sans text-[10px] font-semibold tracking-[0.14em] text-copper-500 uppercase">Ficha de propuesta</p>
            <h2 className="mt-3 font-display text-2xl text-earth-700">Qué puedes contarnos</h2>
            <ul className="mt-6 space-y-4 font-sans text-sm leading-6 text-ink-900/70">
              <li><strong className="text-earth-700">La idea:</strong> qué quieres representar y por qué.</li>
              <li><strong className="text-earth-700">La ubicación:</strong> zona del cuerpo y tamaño aproximado.</li>
              <li><strong className="text-earth-700">Tus referencias:</strong> imágenes, estilos o piezas que te inspiran.</li>
              <li><strong className="text-earth-700">Tu disponibilidad:</strong> días y horarios que te funcionan.</li>
            </ul>
          </div>
        </section>
        <Location />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
