import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import { ContactForm } from "@/components/sections/contact-form";
import { FAQ, Footer, Header } from "@/components/sections/landing-page";

export const metadata: Metadata = createPageMetadata({
  title: "Contacto y citas",
  description:
    "Pide cita con Sundemon Tattoo Studio en Alcalá de Henares. Cuéntanos tu idea de tatuaje o resuelve tus dudas sobre el proceso.",
  path: "/contacto",
});

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
            <Link href="mailto:hola@sundemon.com" className="mt-8 inline-flex rounded-full bg-forest-700 px-6 py-3.5 font-sans text-sm font-semibold text-cta-text transition-colors hover:bg-forest-600 focus-visible:outline-2 focus-visible:outline-copper-500">
              Escribir a hola@sundemon.com ↗
            </Link>
          </div>
          <div className="rounded-lg border border-sand-300/70 bg-sand-200/45 p-6 sm:p-8">
            <h2 className="mt-3 font-display text-2xl text-earth-700">Qué puedes contarnos</h2>
            <p className="mt-3 font-sans text-sm leading-6 text-ink-900/65">Rellena el formulario y cuéntanos lo que tienes en mente. Te responderemos en un plazo máximo de 48 horas.</p>
            <div className="mt-7">
              <ContactForm />
            </div>
          </div>
        </section>
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
