"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

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
  const [isDesktopViewport, setIsDesktopViewport] = useState<boolean | null>(null);
  const transitionTimer = useRef<number | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    return () => {
      if (transitionTimer.current !== null) window.clearTimeout(transitionTimer.current);
    };
  }, []);

  const selectStep = useCallback((stepIndex: number | null) => {
    const nextImage = stepIndex === null ? baseImage : processSteps[stepIndex].image;
    if (transitionTimer.current !== null) window.clearTimeout(transitionTimer.current);
    setActiveStep(stepIndex);
    setIsFading(true);
    transitionTimer.current = window.setTimeout(() => {
      setDisplayedImage(nextImage);
      setIsFading(false);
    }, 220);
  }, []);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    let observer: IntersectionObserver | undefined;

    const observeDesktopSteps = () => {
      observer?.disconnect();
      setIsDesktopViewport(desktopQuery.matches);

      if (!desktopQuery.matches || !sectionRef.current) return;

      observer = new IntersectionObserver(
        (entries) => {
          const visibleStep = entries.find((entry) => entry.isIntersecting);
          const index = visibleStep?.target.getAttribute("data-step-index");

          if (index !== null && index !== undefined) {
            selectStep(Number(index));
          }
        },
        { rootMargin: "-45% 0px -45% 0px" },
      );

      sectionRef.current.querySelectorAll<HTMLElement>("[data-process-step]").forEach((step) => {
        observer?.observe(step);
      });
    };

    observeDesktopSteps();
    desktopQuery.addEventListener("change", observeDesktopSteps);

    return () => {
      observer?.disconnect();
      desktopQuery.removeEventListener("change", observeDesktopSteps);
    };
  }, [selectStep]);

  const moveToStep = (direction: number) => {
    const currentIndex = activeStep ?? 0;
    selectStep((currentIndex + direction + processSteps.length) % processSteps.length);
  };

  const activeProcess = activeStep === null ? null : processSteps[activeStep];

  return (
    <section ref={sectionRef} id="proceso" aria-label="El proceso del tatuaje" className="border-y border-sand-300/60 bg-sand-200/45">
      <div className="relative hidden lg:block">
        <div className="sticky top-0 h-screen">
          <div className="relative h-full w-full overflow-hidden bg-ink-900">
              <Image
                src={displayedImage}
                alt={activeProcess ? activeProcess.title : "Piel limpia sobre la camilla de Sundemon antes de comenzar"}
                fill
                className={`object-cover transition-all duration-700 ease-out ${isFading ? "scale-[1.04] opacity-0 blur-[2px]" : "scale-100 opacity-100 blur-0"} ${activeProcess?.position ?? "object-center"}`}
                sizes="(min-width: 1024px) calc(100vw - 1rem), 1px"
                loading={isDesktopViewport === true ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/10 to-black/45" />

              <div className="absolute inset-x-6 top-24 mx-auto flex max-w-7xl justify-end text-white sm:inset-x-10 lg:top-28 lg:px-8">
                <div className="max-w-2xl text-right">
                  <p className="font-sans text-[10px] font-semibold tracking-[0.14em] text-white uppercase">El proceso</p>
                  <h2 id="process-title-desktop" className="mt-3 font-display text-4xl leading-tight text-white sm:text-5xl">
                    Una buena pieza se construye paso a paso
                  </h2>
                  <p className="mt-4 ml-auto max-w-xl font-sans text-sm leading-6 text-white/85">
                    Explora cada momento del proceso y descubre qué ocurre antes, durante y después de tu tatuaje.
                  </p>
                </div>
              </div>

              <div className="absolute inset-x-6 bottom-8 mx-auto max-w-7xl sm:inset-x-10 lg:bottom-12 lg:px-8">
                <div className="max-w-xl border border-white/40 bg-black/70 p-6 text-white shadow-warm backdrop-blur-md sm:p-8">
                  <p className="font-sans text-[10px] font-semibold tracking-[0.14em] text-white/75 uppercase">
                    Paso {activeStep === null ? 1 : activeStep + 1} de {processSteps.length}
                  </p>
                  <h3 className="mt-3 font-display text-3xl text-white sm:text-4xl">
                    {activeProcess?.title ?? processSteps[0].title}
                  </h3>
                  <p className="mt-4 font-sans text-sm leading-6 text-white/90 sm:text-base">
                    {activeProcess?.description ?? processSteps[0].description}
                  </p>
                  <p className="mt-4 border-l-2 border-white pl-4 font-sans text-sm leading-6 text-white/75">
                    {activeProcess?.detail ?? processSteps[0].detail}
                  </p>
                </div>
              </div>
            </div>
          </div>

        <div aria-hidden="true" className="relative z-10 -mt-[100vh]">
          {processSteps.map((step, index) => (
            <div key={step.title} data-process-step data-step-index={index} className="h-screen" />
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:hidden lg:px-8">
        <div className="max-w-2xl">
          <p className="font-sans text-[10px] font-semibold tracking-[0.14em] text-copper-500 uppercase">El proceso</p>
          <h2 id="process-title-mobile" className="mt-3 font-display text-3xl text-earth-700 sm:text-4xl">Una buena pieza se construye paso a paso</h2>
          <p className="mt-4 max-w-2xl font-sans text-sm leading-6 text-ink-900/65">Explora cada momento del proceso y descubre qué ocurre antes, durante y después de tu tatuaje.</p>
        </div>

        <div className="relative mt-12 min-h-[560px] overflow-hidden rounded-xl bg-sand-200 shadow-warm sm:min-h-[620px]">
          <Image src={displayedImage} alt={activeProcess ? activeProcess.title : "Piel limpia sobre la camilla de Sundemon antes de comenzar"} fill className={`object-cover transition-all duration-700 ease-out ${isFading ? "scale-[1.04] opacity-0 blur-[2px]" : "scale-100 opacity-100 blur-0"} ${activeProcess?.position ?? "object-center"}`} sizes="(min-width: 1152px) 1104px, (min-width: 640px) calc(100vw - 3rem), calc(100vw - 2rem)" loading={isDesktopViewport === false ? "eager" : "lazy"} />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/30 via-transparent to-ink-900/55" />
          <div className="absolute inset-x-3 bottom-3 lg:hidden">
            {activeStep === null ? (
              <div className="rounded-xl border border-white/30 bg-ink-900/35 p-3 text-white-warm backdrop-blur-md">
                <p className="px-2 pb-2 font-sans text-[10px] font-semibold tracking-[0.14em] text-sand-200 uppercase">Explora el proceso</p>
                <div className="grid grid-cols-2 gap-2">
                  {processSteps.map((step, index) => (
                    <button key={step.title} type="button" onClick={() => selectStep(index)} className="flex min-h-12 items-center justify-between rounded-lg border border-white/25 bg-white/10 px-3 text-left font-display text-base text-white-warm transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-white">
                      <span>{step.title}</span>
                      <span aria-hidden="true" className="ml-2 flex size-7 shrink-0 items-center justify-center rounded-full border border-white/60 text-xl font-light leading-none">+</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="rounded-xl border border-white/70 bg-ink-900/70 p-4 text-white-warm shadow-warm backdrop-blur-md">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-sans text-[10px] font-semibold tracking-[0.14em] text-sand-200 uppercase">Paso {activeStep + 1} de {processSteps.length}</p>
                    <h3 className="mt-2 font-display text-2xl">{activeProcess?.title}</h3>
                  </div>
                  <button type="button" onClick={() => selectStep(null)} aria-label="Cerrar detalle" className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white/60 text-xl font-light leading-none focus-visible:outline-2 focus-visible:outline-white">×</button>
                </div>
                <p className="mt-3 font-sans text-sm leading-6 text-sand-100">{activeProcess?.description}</p>
                <p className="mt-3 border-l-2 border-forest-600 pl-3 font-sans text-xs leading-5 text-sand-200">{activeProcess?.detail}</p>
                <div className="mt-4 flex items-center justify-between border-t border-white/20 pt-3">
                  <button type="button" onClick={() => moveToStep(-1)} aria-label="Paso anterior" className="flex size-9 items-center justify-center rounded-full border border-white/50 text-lg focus-visible:outline-2 focus-visible:outline-white">←</button>
                  <span className="font-sans text-xs text-sand-200">Desliza por los pasos</span>
                  <button type="button" onClick={() => moveToStep(1)} aria-label="Siguiente paso" className="flex size-9 items-center justify-center rounded-full border border-white/50 text-lg focus-visible:outline-2 focus-visible:outline-white">→</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
