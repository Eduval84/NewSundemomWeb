import type { Metadata } from "next";
import Image from "next/image";
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
        <section aria-labelledby="studio-hero-title" className="relative isolate min-h-[620px] overflow-hidden border-b border-sand-300/50 bg-ink-900 sm:min-h-[700px]">
          <Image src="/images/DSC_0115-2.jpg" alt="Cuenco tibetano iluminado sostenido en la mano en el estudio Sundemom" fill priority className="-z-20 object-cover object-[65%_center]" sizes="100vw" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-900/90 via-ink-900/60 to-ink-900/15" />
          <div className="relative mx-auto flex min-h-[620px] max-w-6xl items-center px-4 py-16 sm:min-h-[700px] sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="font-sans text-[10px] font-semibold tracking-[0.14em] text-sand-200 uppercase">
                El espacio · Alcalá de Henares
              </p>
              <h1 id="studio-hero-title" className="mt-6 max-w-xl font-display text-5xl leading-[1.05] text-white-warm sm:text-7xl">
                Un lugar para crear con calma.
              </h1>
              <p className="mt-7 max-w-[50ch] font-sans text-base leading-7 text-sand-100 sm:text-lg">
                Sundemon es un estudio de tatuajes y un espacio creativo donde las ideas encuentran tiempo, atención y una forma propia.
              </p>
            </div>
          </div>
        </section>
        <section aria-labelledby="story-title" className="border-y border-sand-300/60 bg-sand-200/45">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:px-8">
            <div>
              <p className="font-sans text-[10px] font-semibold tracking-[0.14em] text-copper-500 uppercase">La historia de Sundemom</p>
              <h2 id="story-title" className="mt-3 font-display text-3xl text-earth-700 sm:text-4xl">Descubre Sundemom</h2>
              <p className="mt-4 font-display text-xl text-earth-700/80">Más que un tatuaje, una huella de tu historia.</p>
            </div>
            <div className="space-y-5 font-sans text-sm leading-7 text-ink-900/70 sm:text-base">
              <p>Hola, soy Jhoan, fundador de SUNDEMOM, un espacio que he creado para vivir el arte del tatuaje desde la calma y la consciencia.</p>
              <p>Después de más de nueve años dedicándome a este arte, he comprendido que un tatuaje no solo permanece en tu piel, sino también en el significado que le das y en la historia que te llevó a hacerlo.</p>
              <p>Por eso, en SUNDEMOM te invitamos a detenerte, reflexionar y conectar contigo mismo para transformar tus experiencias en algo que te acompañe toda la vida.</p>
              <p>A nuestros tatuajes nos gusta llamarlos «cicatrices», porque representan las huellas de lo que hemos vivido, de aquello que nos ha transformado y de lo que hemos aprendido por el camino.</p>
              <p>Queremos que cada vez que mires tu piel encuentres algo más que una imagen: un recordatorio de quién fuiste, de quién eres y de todo lo que aún puedes llegar a ser.</p>
            </div>
          </div>
        </section>
        <Team />
      </main>
      <Footer />
    </>
  );
}
