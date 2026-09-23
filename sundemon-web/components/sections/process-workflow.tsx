type ProcessStep = {
  title: string;
  description: string;
};

type ProcessWorkflowProps = {
  steps?: readonly ProcessStep[];
};

const defaultSteps: readonly ProcessStep[] = [
  {
    title: "Cuéntanos tu idea",
    description:
      "Comparte la historia, referencias y detalles que quieres convertir en tatuaje.",
  },
  {
    title: "Damos forma al diseño",
    description:
      "Trabajamos contigo una propuesta única, pensada para tu cuerpo y tu estilo.",
  },
  {
    title: "Preparamos la sesión",
    description:
      "Te acompañamos con toda la información necesaria para llegar preparado.",
  },
  {
    title: "Vive el proceso",
    description:
      "Nos encontramos en el estudio para crear una pieza hecha para quedarse contigo.",
  },
];

export function ProcessWorkflow({
  steps = defaultSteps,
}: ProcessWorkflowProps) {
  return (
    <section
      aria-labelledby="process-workflow-title"
      className="w-full bg-sand-100 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-sm font-semibold tracking-[0.12em] text-copper-500 uppercase">
            Cómo trabajamos
          </p>
          <h2
            id="process-workflow-title"
            className="mt-4 font-display text-3xl leading-tight text-earth-700 sm:text-4xl"
          >
            Un proceso cuidado de principio a fin
          </h2>
          <p className="mt-5 font-sans text-base leading-7 text-ink-900/75">
            Cada proyecto comienza con una conversación y avanza a tu ritmo,
            con atención a cada detalle.
          </p>
        </div>

        <ol className="mt-14 grid gap-10 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, index) => (
            <li
              key={`${step.title}-${index}`}
              className="relative lg:px-4 lg:first:pl-0 lg:last:pr-0"
            >
              {index < steps.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute top-6 left-12 hidden h-px w-[calc(100%-3rem)] bg-sand-300 lg:block"
                />
              ) : null}

              <div className="relative">
                <span className="flex size-12 items-center justify-center rounded-full border border-copper-500 bg-sand-100 font-display text-lg text-earth-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-display text-xl text-earth-700">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-sm font-sans text-sm leading-6 text-ink-900/75">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
