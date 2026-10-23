"use client";

import Image from "next/image";
import { useState } from "react";

const styles = [
  {
    name: "Fine line",
    eyebrow: "Línea fina",
    description: "Este estilo se caracteriza por sus líneas finas y precisas, dando vida a piezas sutiles, elegantes y llenas de intención.",
    body: [
      "Son tatuajes ligeros a la vista, pero con una gran carga simbólica y emocional.",
      "Si buscas un diseño delicado, íntimo y con sensibilidad, este puede ser tu estilo.",
    ],
    image: "/images/Tatuajes.avif",
    position: "object-[center_65%]",
  },
  {
    name: "Microrealismo",
    eyebrow: "Microrealismo",
    description: "La realidad convertida en arte sobre tu piel.",
    body: [
      "El microrealismo transforma imágenes reales en pequeñas obras de arte llenas de precisión y detalle. Cada pieza busca capturar la esencia de aquello que deseas recordar, creando un impacto visual único.",
      "Si buscas inmortalizar un rostro, un recuerdo o algo especial con la mayor fidelidad posible a la realidad, este puede ser tu estilo.",
    ],
    image: "/images/H1Tatuajes.avif",
    position: "object-[58%_55%]",
  },
  {
    name: "Realismo",
    eyebrow: "Realismo",
    description: "La realidad llevada a su máxima expresión.",
    body: [
      "En el realismo, el arte se adapta a tu cuerpo. Creamos obras llenas de detalle, trabajando con composiciones más amplias que se integran de forma natural con tu anatomía.",
      "A diferencia del microrealismo, este estilo nos permite explorar cada detalle con mayor profundidad, buscando un impacto visual único y una representación fiel de la realidad.",
      "Si buscas una pieza que destaque por su fuerza, precisión y riqueza de detalles, este puede ser tu estilo.",
    ],
    image: "/images/Edificio.jpg",
    position: "object-[center_55%]",
  },
  {
    name: "Conceptual",
    eyebrow: "Conceptual",
    description: "Donde la imaginación no tiene límites.",
    body: [
      "En el estilo conceptual dejamos volar la creatividad para transformar ideas en obras únicas, explorando incluso los límites de lo abstracto.",
      "Buscamos expresar mucho con poco, creando composiciones donde cada línea, forma y detalle tiene una intención. El resultado son piezas originales que cuentan historias de una manera diferente.",
      "Si buscas romper con lo convencional, explorar tu imaginación y descubrir nuevas formas de expresión, este puede ser tu estilo.",
    ],
    image: "/images/DSC_0208-2.jpg",
    position: "object-[center_35%]",
  },
  {
    name: "Anime",
    eyebrow: "Anime",
    description: "Historias que traspasan la pantalla y cobran vida en tu piel.",
    body: [
      "El anime ha conquistado nuestra cultura con historias profundas, personajes inolvidables y mundos donde la imaginación no tiene límites.",
      "Este estilo nos permite dar vida a tus personajes favoritos, capturando no solo su apariencia, sino también la esencia, las emociones y los valores que representan para ti.",
      "Si alguna historia te ha marcado, te has identificado con un personaje o simplemente te apasiona el universo del anime, este puede ser tu estilo.",
    ],
    image: "/images/Artistas/Jhoan.avif",
    position: "object-[center_30%]",
  },
];

export function TattooStyles() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStyle = styles[activeIndex];

  const showPrevious = () => {
    setActiveIndex((currentIndex) => (currentIndex - 1 + styles.length) % styles.length);
  };

  const showNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % styles.length);
  };

  return (
    <section id="estilos" aria-labelledby="styles-title" className="border-y border-sand-300/60 bg-sand-100">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="font-sans text-[10px] font-semibold tracking-[0.14em] text-copper-500 uppercase">Estilos</p>
            <h2 id="styles-title" className="mt-3 font-display text-3xl text-earth-700 sm:text-4xl">En 8 años, más de 1.000 personas han avalado nuestro trabajo</h2>
            <p className="mt-4 font-sans text-sm leading-6 text-ink-900/65 sm:text-base">Hemos aprendido que el estilo importa, pero entenderte importa más. Explora algunos de los estilos que podemos ofrecerte</p>
          </div>
          <div className="flex items-center gap-2">
            <button type="button" onClick={showPrevious} aria-label="Estilo anterior" className="flex size-11 items-center justify-center rounded-full border border-earth-700/30 text-lg text-earth-700 transition-colors hover:bg-white-warm focus-visible:outline-2 focus-visible:outline-copper-500">
              <span aria-hidden="true">←</span>
            </button>
            <span className="min-w-14 text-center font-sans text-xs text-ink-900/55" aria-live="polite">{String(activeIndex + 1).padStart(2, "0")} / {String(styles.length).padStart(2, "0")}</span>
            <button type="button" onClick={showNext} aria-label="Siguiente estilo" className="flex size-11 items-center justify-center rounded-full border border-earth-700/30 text-lg text-earth-700 transition-colors hover:bg-white-warm focus-visible:outline-2 focus-visible:outline-copper-500">
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        <article className="mt-10 grid overflow-hidden rounded-xl border border-sand-300/70 bg-white-warm lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative min-h-[360px] bg-sand-200 lg:min-h-[500px]">
            <Image src={activeStyle.image} alt={`${activeStyle.name}, estilo de tatuaje de Sundemon`} fill className={`object-cover ${activeStyle.position}`} sizes="(max-width: 1024px) 100vw, 60vw" />
          </div>
          <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
            <div>
              <p className="font-sans text-[10px] font-semibold tracking-[0.14em] text-copper-500 uppercase">{activeStyle.eyebrow}</p>
              <h3 className="mt-5 font-display text-4xl text-earth-700">{activeStyle.name}</h3>
              <p className="mt-5 max-w-md font-sans text-base leading-7 text-ink-900/80">{activeStyle.description}</p>
              <div className="mt-4 max-w-md space-y-3 font-sans text-sm leading-6 text-ink-900/65">
                {activeStyle.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
            <p className="mt-12 border-t border-sand-300/70 pt-5 font-sans text-xs leading-5 text-ink-900/55">Cada proyecto empieza con una referencia, una pregunta o simplemente una sensación. El diseño final se construye contigo.</p>
          </div>
        </article>

        <div className="mt-6 flex flex-wrap gap-2" aria-label="Seleccionar estilo de tatuaje">
          {styles.map((style, index) => (
            <button key={style.name} type="button" onClick={() => setActiveIndex(index)} aria-label={`Ver estilo ${style.name}`} aria-pressed={activeIndex === index} className={`rounded-full border px-3 py-2 font-sans text-xs transition-colors focus-visible:outline-2 focus-visible:outline-copper-500 ${activeIndex === index ? "border-earth-700 bg-earth-700 text-white-warm" : "border-sand-300 text-earth-700 hover:border-copper-500"}`}>
              {style.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
