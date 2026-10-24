"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const styles = [
  {
    name: "Fine line",
    folder: "LineaFina",
    eyebrow: "FINE LINE · LÍNEA FINA",
    description: "La delicadeza también puede dejar huella.",
    body: [
      "El Fine Line es un estilo que destaca por la precisión y sutileza de sus líneas, dando vida a composiciones elegantes, delicadas y llenas de significado.",
      "Cada detalle tiene su intención, creando piezas visualmente ligeras que pueden transmitir grandes historias y emociones.",
      "Si buscas un tatuaje sutil, íntimo y capaz de expresar mucho con poco, este puede ser tu estilo.",
    ],
  },
  {
    name: "Microrealismo",
    folder: "MicroRealismo",
    eyebrow: "Microrealismo",
    description: "La realidad convertida en arte sobre tu piel.",
    body: [
      "El microrealismo transforma imágenes reales en pequeñas obras de arte llenas de precisión y detalle. Cada pieza busca capturar la esencia de aquello que deseas recordar, creando un impacto visual único.",
      "Si buscas inmortalizar un rostro, un recuerdo o algo especial con la mayor fidelidad posible a la realidad, este puede ser tu estilo.",
    ],
  },
  {
    name: "Realismo",
    folder: "Realismo",
    eyebrow: "Realismo",
    description: "La realidad llevada a su máxima expresión.",
    body: [
      "En el realismo, el arte se adapta a tu cuerpo. Creamos obras llenas de detalle, trabajando con composiciones más amplias que se integran de forma natural con tu anatomía.",
      "A diferencia del microrealismo, este estilo nos permite explorar cada detalle con mayor profundidad, buscando un impacto visual único y una representación fiel de la realidad.",
      "Si buscas una pieza que destaque por su fuerza, precisión y riqueza de detalles, este puede ser tu estilo.",
    ],
  },
  {
    name: "Conceptual",
    folder: "Conceptual",
    eyebrow: "Conceptual",
    description: "Donde la imaginación no tiene límites.",
    body: [
      "En el estilo conceptual dejamos volar la creatividad para transformar ideas en obras únicas, explorando incluso los límites de lo abstracto.",
      "Buscamos expresar mucho con poco, creando composiciones donde cada línea, forma y detalle tiene una intención. El resultado son piezas originales que cuentan historias de una manera diferente.",
      "Si buscas romper con lo convencional, explorar tu imaginación y descubrir nuevas formas de expresión, este puede ser tu estilo.",
    ],
  },
  {
    name: "Anime",
    folder: "Anime",
    eyebrow: "Anime",
    description: "Historias que traspasan la pantalla y cobran vida en tu piel.",
    body: [
      "El anime ha conquistado nuestra cultura con historias profundas, personajes inolvidables y mundos donde la imaginación no tiene límites.",
      "Este estilo nos permite dar vida a tus personajes favoritos, capturando no solo su apariencia, sino también la esencia, las emociones y los valores que representan para ti.",
      "Si alguna historia te ha marcado, te has identificado con un personaje o simplemente te apasiona el universo del anime, este puede ser tu estilo.",
    ],
  },
];

function StyleGallery({ styleName, images }: { styleName: string; images: string[] }) {
  const trackRef = useRef<HTMLUListElement | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const scrollTrack = (direction: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.8, behavior: "smooth" });
  };

  const moveLightbox = useCallback(
    (direction: number) => {
      setOpenIndex((current) => (current === null ? null : (current + direction + images.length) % images.length));
    },
    [images.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenIndex(null);
      if (event.key === "ArrowLeft") moveLightbox(-1);
      if (event.key === "ArrowRight") moveLightbox(1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [openIndex, moveLightbox]);

  const arrowClass = "flex size-11 items-center justify-center rounded-full border border-earth-700/30 text-lg text-earth-700 transition-colors hover:bg-sand-100 focus-visible:outline-2 focus-visible:outline-copper-500";

  return (
    <div className="mt-10">
      <div className="flex items-center justify-between">
        <p className="font-sans text-[10px] font-semibold tracking-[0.14em] text-copper-500 uppercase">Trabajos · {images.length} {images.length === 1 ? "pieza" : "piezas"}</p>
        {images.length > 1 && (
          <div className="flex gap-2">
            <button type="button" onClick={() => scrollTrack(-1)} aria-label="Fotos anteriores" className={arrowClass}><span aria-hidden="true">←</span></button>
            <button type="button" onClick={() => scrollTrack(1)} aria-label="Fotos siguientes" className={arrowClass}><span aria-hidden="true">→</span></button>
          </div>
        )}
      </div>
      <ul ref={trackRef} className="mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:thin]">
        {images.map((src, index) => (
          <li key={src} className="w-[68%] shrink-0 snap-start sm:w-[40%] lg:w-[28%]">
            <button type="button" onClick={() => setOpenIndex(index)} aria-label={`Ampliar tatuaje ${index + 1} de ${images.length}, estilo ${styleName}`} className="group relative block aspect-[4/5] w-full cursor-zoom-in overflow-hidden rounded-lg bg-sand-200 focus-visible:outline-2 focus-visible:outline-copper-500">
              <Image src={src} alt={`Tatuaje de estilo ${styleName} ${index + 1}, realizado en Sundemom`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 68vw, (max-width: 1024px) 40vw, 28vw" />
            </button>
          </li>
        ))}
      </ul>

      {openIndex !== null && (
        <div role="dialog" aria-modal="true" aria-label={`Tatuajes de estilo ${styleName}`} className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900/90 p-4 backdrop-blur-sm" onClick={() => setOpenIndex(null)}>
          <div className="relative h-full max-h-[90vh] w-full max-w-4xl" onClick={(event) => event.stopPropagation()}>
            <Image src={images[openIndex]} alt={`Tatuaje de estilo ${styleName} ${openIndex + 1}, realizado en Sundemom`} fill priority className="object-contain" sizes="(max-width: 1024px) 100vw, 896px" />
          </div>
          <button type="button" onClick={() => setOpenIndex(null)} aria-label="Cerrar" className="absolute top-4 right-4 flex size-11 items-center justify-center rounded-full border border-white/50 text-2xl text-white-warm focus-visible:outline-2 focus-visible:outline-white">×</button>
          {images.length > 1 && (
            <>
              <button type="button" onClick={(event) => { event.stopPropagation(); moveLightbox(-1); }} aria-label="Foto anterior" className="absolute left-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-ink-900/40 text-xl text-white-warm focus-visible:outline-2 focus-visible:outline-white sm:left-6"><span aria-hidden="true">←</span></button>
              <button type="button" onClick={(event) => { event.stopPropagation(); moveLightbox(1); }} aria-label="Foto siguiente" className="absolute right-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-ink-900/40 text-xl text-white-warm focus-visible:outline-2 focus-visible:outline-white sm:right-6"><span aria-hidden="true">→</span></button>
            </>
          )}
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-sans text-xs text-white-warm/80">{openIndex + 1} / {images.length}</p>
        </div>
      )}
    </div>
  );
}
type TattooStylesProps = {
  galleries: Record<string, string[]>;
};

export function TattooStyles({ galleries }: TattooStylesProps) {
  const availableStyles = styles.filter((style) => (galleries[style.folder]?.length ?? 0) > 0);
  const [activeIndex, setActiveIndex] = useState(0);

  if (availableStyles.length === 0) return null;

  const activeStyle = availableStyles[Math.min(activeIndex, availableStyles.length - 1)];
  const activeImages = galleries[activeStyle.folder];

  const showPrevious = () => {
    setActiveIndex((currentIndex) => (currentIndex - 1 + availableStyles.length) % availableStyles.length);
  };

  const showNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % availableStyles.length);
  };

  return (
    <section id="estilos" aria-labelledby="styles-title" className="border-y border-sand-300/60 bg-sand-100">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="font-sans text-[10px] font-semibold tracking-[0.14em] text-copper-500 uppercase">Estilos</p>
            <h2 id="styles-title" className="mt-3 font-display text-3xl text-earth-700 sm:text-4xl">En 9 años, más de 1.000 personas han avalado nuestro trabajo</h2>
            <p className="mt-4 font-sans text-sm leading-6 text-ink-900/65 sm:text-base">Hemos aprendido que el estilo importa, pero entenderte importa más. Explora algunos de los estilos que podemos ofrecerte</p>
          </div>
          <div className="flex items-center gap-2">
            <button type="button" onClick={showPrevious} aria-label="Estilo anterior" className="flex size-11 items-center justify-center rounded-full border border-earth-700/30 text-lg text-earth-700 transition-colors hover:bg-white-warm focus-visible:outline-2 focus-visible:outline-copper-500">
              <span aria-hidden="true">←</span>
            </button>
            <span className="min-w-14 text-center font-sans text-xs text-ink-900/55" aria-live="polite">{String(Math.min(activeIndex, availableStyles.length - 1) + 1).padStart(2, "0")} / {String(availableStyles.length).padStart(2, "0")}</span>
            <button type="button" onClick={showNext} aria-label="Siguiente estilo" className="flex size-11 items-center justify-center rounded-full border border-earth-700/30 text-lg text-earth-700 transition-colors hover:bg-white-warm focus-visible:outline-2 focus-visible:outline-copper-500">
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Seleccionar estilo de tatuaje">
          {availableStyles.map((style, index) => (
            <button key={style.name} type="button" onClick={() => setActiveIndex(index)} aria-label={`Ver estilo ${style.name}`} aria-pressed={activeStyle.name === style.name} className={`rounded-full border px-3 py-2 font-sans text-xs transition-colors focus-visible:outline-2 focus-visible:outline-copper-500 ${activeStyle.name === style.name ? "border-earth-700 bg-earth-700 text-white-warm" : "border-sand-300 text-earth-700 hover:border-copper-500"}`}>
              {style.name}
            </button>
          ))}
        </div>

        <article className="mt-6 rounded-xl border border-sand-300/70 bg-white-warm p-7 sm:p-10 lg:p-12">
          <p className="font-sans text-[10px] font-semibold tracking-[0.14em] text-copper-500 uppercase">{activeStyle.eyebrow}</p>
          <h3 className="mt-5 font-display text-4xl text-earth-700">{activeStyle.name}</h3>
          <p className="mt-5 max-w-2xl font-sans text-base leading-7 text-ink-900/80">{activeStyle.description}</p>
          <div className="mt-4 max-w-2xl space-y-3 font-sans text-sm leading-6 text-ink-900/65">
            {activeStyle.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <StyleGallery key={activeStyle.folder} styleName={activeStyle.name} images={activeImages} />
          <p className="mt-10 border-t border-sand-300/70 pt-5 font-sans text-xs leading-5 text-ink-900/55">Cada proyecto empieza con una referencia, una pregunta o simplemente una sensación. El diseño final se construye contigo.</p>
        </article>
      </div>
    </section>
  );
}
