"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ProcessStep = {
  title: string;
  description: string;
  detail: string;
  image: string;
  position: string;
};

const baseImage = "/images/DetalleTatuajes/DetalleBase.avif";

const processSteps: ProcessStep[] = [
  {
    title: "Reserva & Escucha",
    description: "Nos cuentas tu idea, referencias y el lugar de tu cuerpo que quieres habitar.",
    detail: "Todo empieza por entenderte, no por elegir una plantilla.",
    image: "/images/DetalleTatuajes/TatuajesDetalle1.avif",
    position: "object-[center_55%]",
  },
  {
    title: "Consulta & Co-diseño",
    description: "Aterrizamos el concepto y construimos una propuesta pensada para ti.",
    detail: "Probamos proporciones, composición y ritmo hasta que el diseño se siente tuyo.",
    image: "/images/DetalleTatuajes/TatuajeDetalle2.avif",
    position: "object-[center_55%]",
  },
  {
    title: "La Sesión",
    description: "El día llega con calma, precisión y todo preparado para disfrutar del proceso.",
    detail: "Preparamos el espacio y trabajamos con atención en cada trazo.",
    image: "/images/DetalleTatuajes/TatuajeDetalle3.avif",
    position: "object-[center_55%]",
  },
  {
    title: "Curación & Control",
    description: "Te acompañamos después para cuidar la pieza y verla evolucionar contigo.",
    detail: "La relación no termina al salir del estudio: seguimos disponibles para tus preguntas.",
    image: "/images/DetalleTatuajes/TatuajeDetalle4.avif",
    position: "object-[center_55%]",
  },
];

export function TattooProcess() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [displayedImage, setDisplayedImage] = useState(baseImage);
  const [isFading, setIsFading] = useState(false);
  const transitionTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (transitionTimer.current !== null) window.clearTimeout(transitionTimer.current);
    };
  }, []);

  const selectStep = (stepIndex: number | null) => {
    const nextImage = stepIndex === null ? baseImage : processSteps[stepIndex].image;
    if (transitionTimer.current !== null) window.clearTimeout(transitionTimer.current);
    setActiveStep(stepIndex);
    setIsFading(true);
    transitionTimer.current = window.setTimeout(() => {
      setDisplayedImage(nextImage);
      setIsFading(false);
    }, 220);
  };

  const activeProcess = activeStep === null ? null : processSteps[activeStep];

  return (
    <section id="proceso" aria-labelledby="process-title" className="border-y border-sand-300/60 bg-sand-200/45">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-sans text-[10px] font-semibold tracking-[0.14em] text-copper-500 uppercase">El proceso</p>
          <h2 id="process-title" className="mt-3 font-display text-3xl text-earth-700 sm:text-4xl">Una buena pieza se construye paso a paso</h2>
          <p className="mt-4 max-w-2xl font-sans text-sm leading-6 text-ink-900/65">Explora cada momento del proceso y descubre qué ocurre antes, durante y después de tu tatuaje.</p>
        </div>

        <div className="relative mt-12 min-h-[680px] overflow-hidden rounded-xl bg-sand-200 shadow-warm sm:min-h-[720px] lg:min-h-[760px]">
          <Image src={displayedImage} alt={activeProcess ? activeProcess.title : "Piel limpia sobre la camilla de Sundemon antes de comenzar"} fill className={`object-cover transition-all duration-700 ease-out ${isFading ? "scale-[1.04] opacity-0 blur-[2px]" : "scale-100 opacity-100 blur-0"} ${activeProcess?.position ?? "object-center"}`} sizes="(max-width: 1024px) 100vw, 1200px" priority={activeStep === null} />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/30 via-transparent to-ink-900/55" />
          <div className="relative mx-0 mr-auto flex min-h-[680px] max-w-2xl flex-col justify-center px-5 py-10 sm:min-h-[720px] sm:px-10 lg:min-h-[760px]">
            <div className="space-y-2">
              {processSteps.map((step, index) => {
                const isActive = activeStep === index;

                return (
                  <button key={step.title} type="button" onClick={() => selectStep(isActive ? null : index)} aria-expanded={isActive} className={`group block w-full rounded-lg border text-left text-white-warm backdrop-blur-md transition-all duration-700 ease-out focus-visible:outline-2 focus-visible:outline-white ${isActive ? "translate-x-2 border-white/70 bg-ink-900/65 px-5 py-5" : "border-white/25 bg-ink-900/20 px-5 py-4 hover:translate-x-1 hover:border-white/60 hover:bg-ink-900/40"}`}>
                    <span className="flex items-center justify-between gap-5">
                      <span className={`font-display transition-all duration-500 ${isActive ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"}`}>{step.title}</span>
                      <span aria-hidden="true" className={`flex size-8 shrink-0 items-center justify-center rounded-full border border-white/60 text-2xl font-light leading-none transition-transform duration-500 ${isActive ? "rotate-45" : "group-hover:rotate-90"}`}>+</span>
                    </span>
                    <span className={`grid transition-all duration-700 ease-out ${isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                      <span className="min-h-0 overflow-hidden">
                        <span className="mt-4 block max-w-xl font-sans text-sm leading-6 text-sand-100">{step.description}</span>
                        <span className="mt-3 block border-l-2 border-forest-600 pl-4 font-sans text-xs leading-5 text-sand-200">{step.detail}</span>
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
