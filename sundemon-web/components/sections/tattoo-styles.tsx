"use client";

import Image from "next/image";
import { useState } from "react";

const styles = [
  {
    name: "Fine line",
    eyebrow: "Línea fina",
    description: "Líneas delicadas y precisas para piezas ligeras, íntimas y llenas de detalle.",
    image: "/images/Tatuajes.avif",
    position: "object-[center_65%]",
  },
  {
    name: "Microrealismo",
    eyebrow: "Detalle en pequeño",
    description: "Realismo concentrado en piezas pequeñas, con sombras sutiles y una lectura limpia.",
    image: "/images/H1Tatuajes.avif",
    position: "object-[58%_55%]",
  },
  {
    name: "Blackwork",
    eyebrow: "Tinta y contraste",
    description: "Composiciones gráficas de negro sólido, contraste y una presencia que no necesita explicar nada.",
    image: "/images/Contacto.avif",
    position: "object-[center_55%]",
  },
  {
    name: "Realismo",
    eyebrow: "Volumen y textura",
    description: "Sombras, profundidad y proporción para convertir una imagen importante en una pieza viva.",
    image: "/images/Edificio.jpg",
    position: "object-[center_55%]",
  },
  {
    name: "Conceptual",
    eyebrow: "Una idea propia",
    description: "Diseños que parten de una conversación y encuentran una forma personal, simbólica y duradera.",
    image: "/images/Sundemom.avif",
    position: "object-[center_35%]",
  },
  {
    name: "Puntillismo",
    eyebrow: "Textura construida",
    description: "Miles de puntos que crean volumen, ritmo y una textura serena sobre la piel.",
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
            <p className="font-sans text-[10px] font-semibold tracking-[0.14em] text-copper-500 uppercase">Los estilos de Jhoan</p>
            <h2 id="styles-title" className="mt-3 font-display text-3xl text-earth-700 sm:text-4xl">En 8 años, más de 1.000 personas han avalado nuestro trabajo</h2>
            <p className="mt-4 font-sans text-sm leading-6 text-ink-900/65 sm:text-base">En ocho años hemos aprendido que el estilo importa, pero la escucha importa más. Explora algunas de las direcciones que podemos construir contigo.</p>
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
              <p className="mt-5 max-w-md font-sans text-base leading-7 text-ink-900/70">{activeStyle.description}</p>
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
