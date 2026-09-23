import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    quote:
      "Desde la primera conversación entendieron exactamente lo que quería plasmar.",
    author: "Elena R.",
    location: "Alcalá de Henares",
  },
  {
    quote:
      "La delicadeza del trazo y el cuidado durante toda la sesión hicieron que disfrutara del proceso.",
    author: "Marco V.",
    location: "Madrid",
  },
  {
    quote:
      "Un estudio tranquilo, preciso y humano. El resultado supera lo que imaginaba.",
    author: "Gabriela N.",
    location: "Guadalajara",
  },
];

const essentialLinks = [
  {
    title: "Tatuajes",
    description: "Descubre nuestro proceso, estilos y piezas que cuentan historias.",
    href: "#tatuajes",
    imageClass: "object-[center_65%]",
    label: "01 / Archivo",
  },
  {
    title: "Sundemon",
    description: "Conoce el estudio, nuestra filosofía y la calma detrás de cada trazo.",
    href: "#estudio",
    imageClass: "object-[center_35%]",
    label: "02 / Espacio",
  },
  {
    title: "Contacto",
    description: "Cuéntanos qué tienes en mente. Empecemos con una conversación.",
    href: "#contacto",
    imageClass: "object-[center_80%]",
    label: "03 / Diálogo",
  },
];

const processSteps = [
  ["01", "Reserva & Escucha", "Nos cuentas tu idea, referencias y el lugar de tu cuerpo que quieres habitar."],
  ["02", "Consulta & Co-diseño", "Aterrizamos el concepto y construimos una propuesta pensada para ti."],
  ["03", "La Sesión", "El día llega con calma, precisión y todo preparado para disfrutar del proceso."],
  ["04", "Curación & Control", "Te acompañamos después para cuidar la pieza y verla evolucionar contigo."],
];

const galleryItems = [
  ["Fine Line Botánico", "Trazo delicado con intención", "object-[center_65%]"],
  ["Micro-trazo arquitectónico", "Inspirado en Alcalá de Henares", "object-[center_30%]"],
  ["La consulta personalizada", "Ideas que toman forma", "object-[center_80%]"],
  ["Precisión y conexión", "Sesiones íntimas y cuidadas", "object-[center_45%]"],
];

const philosophyValues = [
  ["01", "Idea", "Cada tatuaje comienza con una historia y una conversación en la que puedas sentirte escuchado."],
  ["02", "Diseño", "Damos forma al concepto con intención, proporción y respeto por tu anatomía."],
  ["03", "Experiencia", "El proceso se construye con calma, desde la primera consulta hasta la última cura."],
  ["04", "Confianza", "Acompañamiento honesto para que tu pieza se sienta tan tuya como el recuerdo que la inspira."],
];

const faqs = [
  ["¿Cuánto tiempo tardáis en responder mi solicitud?", "Respondemos todas las consultas en un plazo máximo de 24 horas laborables. Revisamos cada propuesta con calma antes de contestarte."],
  ["¿Tengo que llevar algo preparado para la valoración?", "No es necesario. Una idea, una referencia o una conversación son suficientes para empezar a construir la propuesta."],
  ["¿Puedo acudir directamente al estudio?", "Trabajamos con cita previa para poder dedicarte el tiempo y la atención que merece cada proyecto."],
  ["¿Qué ocurre si no tengo una imagen exacta?", "Es precisamente ahí donde empieza nuestro trabajo: escuchamos lo que quieres transmitir y lo convertimos en una pieza propia."],
];

function Mark() {
  return (
    <span aria-hidden="true" className="text-copper-500">
      ✦
    </span>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-sand-300/50 bg-[#F7F4EE]/90 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Sundemon Tattoo Studio, inicio">
          <Image
            src="/images/logo.png"
            alt="Sundemon Tattoo Studio"
            width={156}
            height={58}
            className="h-10 w-[136px] object-contain mix-blend-multiply sm:h-11 sm:w-[150px]"
            priority
          />
        </Link>
        <nav aria-label="Navegación principal" className="hidden items-center gap-8 font-sans text-[11px] font-semibold tracking-[0.12em] text-ink-900 uppercase md:flex">
          <Link className="transition-colors hover:text-copper-500 focus-visible:outline-2 focus-visible:outline-copper-500" href="#tatuajes">Tatuajes</Link>
          <Link className="transition-colors hover:text-copper-500 focus-visible:outline-2 focus-visible:outline-copper-500" href="#estudio">Sundemon</Link>
          <Link className="transition-colors hover:text-copper-500 focus-visible:outline-2 focus-visible:outline-copper-500" href="#contacto">Contacto</Link>
        </nav>
        <Link href="#contacto" className="rounded-full bg-earth-700 px-4 py-3 font-sans text-xs font-semibold text-white-warm transition-colors hover:bg-earth-500 focus-visible:outline-2 focus-visible:outline-copper-500">
          Cuéntanos tu idea
        </Link>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section aria-labelledby="hero-title" className="border-b border-sand-300/50">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-10 sm:px-6 sm:py-16 lg:grid-cols-[1fr_0.82fr] lg:items-center lg:gap-20 lg:px-8 lg:py-20">
        <div>
          <div className="flex flex-wrap justify-between gap-3 font-sans text-[10px] font-semibold tracking-[0.12em] text-earth-500 uppercase">
            <span><Mark /> Estudio de autor · Alcalá de Henares, Madrid</span>
            <span className="text-right text-ink-900/60">Cita previa · Atención exclusiva</span>
          </div>
          <div className="mt-16 max-w-xl lg:mt-24">
            <p className="mb-5 font-sans text-xs tracking-[0.14em] text-copper-500 uppercase">Tattoo studio · desde 2018</p>
            <h1 id="hero-title" className="font-display text-5xl leading-[1.05] text-earth-700 sm:text-7xl">
              Tu historia.<br />
              <em className="text-earth-500">En tu piel.</em>
            </h1>
            <p className="mt-7 max-w-[50ch] font-sans text-base leading-7 text-ink-900/75 sm:text-lg">
              Un espacio donde las ideas se convierten en tatuajes pensados para ti. Calma, arquitectura lúcida y precisión milimétrica en el centro histórico.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link href="#contacto" className="rounded-full bg-earth-700 px-6 py-3.5 font-sans text-sm font-semibold text-white-warm transition-colors hover:bg-earth-500 focus-visible:outline-2 focus-visible:outline-copper-500">
                Cuéntanos tu idea <span aria-hidden="true">↗</span>
              </Link>
              <Link href="#tatuajes" className="font-sans text-sm font-semibold text-earth-700 underline decoration-sand-300 underline-offset-8 transition-colors hover:text-copper-500 focus-visible:outline-2 focus-visible:outline-copper-500">
                Ver trabajos
              </Link>
            </div>
          </div>
        </div>
        <figure className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-sand-200 shadow-warm">
            <Image src="/images/estudio.jpeg" alt="Estudio de tatuajes Sundemon en Calle Ferraz, Alcalá de Henares" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 42vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent" />
            <figcaption className="absolute inset-x-5 bottom-5 font-sans text-xs leading-5 text-white-warm">
              <span className="block font-semibold tracking-[0.12em] text-sand-200 uppercase">El estudio</span>
              Espacio de quietud y luz natural · Calle Ferraz 3
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="bg-sand-200/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-sans text-[10px] font-semibold tracking-[0.14em] text-copper-500 uppercase">Testimonios reales</p>
            <h2 id="testimonials-title" className="mt-3 font-display text-3xl text-earth-700">La voz de quienes confían su piel</h2>
          </div>
          <span className="rounded-full border border-sand-300 bg-white-warm/70 px-4 py-2 font-sans text-xs text-earth-700">★ 5.0 · Valoración en Alcalá de Henares / Madrid</span>
        </div>
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.author} className="flex min-h-48 flex-col justify-between rounded-lg bg-white-warm/80 p-6">
              <div>
                <p className="text-xs tracking-[0.3em] text-copper-500">★★★★★</p>
                <blockquote className="mt-5 font-display text-base leading-7 text-earth-700">“{testimonial.quote}”</blockquote>
              </div>
              <footer className="mt-7 flex justify-between font-sans text-[10px] font-semibold tracking-[0.1em] text-ink-900/55 uppercase">
                <span>{testimonial.author}</span><span>{testimonial.location}</span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EssentialNavigation() {
  return (
    <section aria-labelledby="essential-title" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="font-sans text-[10px] font-semibold tracking-[0.14em] text-copper-500 uppercase">Explora el estudio</p>
      <h2 id="essential-title" className="mt-3 font-display text-3xl text-earth-700">Navegación esencial</h2>
      <p className="mt-3 max-w-xl font-sans text-sm leading-6 text-ink-900/65">Tres puertas de entrada para comprender nuestra forma de entender el arte corporal contemporáneo.</p>
      <div className="mt-9 grid gap-5 md:grid-cols-3">
        {essentialLinks.map((item) => (
          <Link key={item.title} href={item.href} className="group overflow-hidden rounded-lg border border-sand-300/70 bg-white-warm/60 focus-visible:outline-2 focus-visible:outline-copper-500">
            <div className="relative aspect-[1.35] overflow-hidden bg-sand-200">
              <Image src="/images/estudio.jpeg" alt={`Sundemon Tattoo Studio, ${item.title.toLowerCase()} en Alcalá de Henares`} fill className={`object-cover transition-transform duration-300 group-hover:scale-105 ${item.imageClass}`} sizes="(max-width: 768px) 100vw, 33vw" />
              <span className="absolute right-3 top-3 rounded-full bg-white-warm/85 px-2.5 py-1 font-sans text-[9px] font-semibold tracking-[0.1em] text-earth-700 uppercase">{item.label}</span>
            </div>
            <div className="p-5">
              <h3 className="font-display text-xl text-earth-700">{item.title}</h3>
              <p className="mt-2 font-sans text-sm leading-6 text-ink-900/65">{item.description}</p>
              <span className="mt-5 block font-sans text-xs font-semibold text-earth-700">Descubrir <span aria-hidden="true">↗</span></span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section aria-labelledby="process-title" className="border-y border-sand-300/60 bg-sand-200/45">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="font-sans text-[10px] font-semibold tracking-[0.14em] text-copper-500 uppercase">El proceso</p>
        <h2 id="process-title" className="mt-3 font-display text-3xl text-earth-700 sm:text-4xl">Un tatuaje empieza mucho antes de la aguja</h2>
        <p className="mt-4 max-w-2xl font-sans text-sm leading-6 text-ink-900/65">Claridad y calma desde el primer trazo. Entendemos el tatuaje como un proceso compartido.</p>
        <ol className="mt-12 grid gap-4 lg:grid-cols-4">
          {processSteps.map(([number, title, description]) => (
            <li key={number} className="rounded-lg border border-sand-300/70 bg-sand-100/75 p-5">
              <div className="flex items-center justify-between border-b border-sand-300/60 pb-4">
                <span className="font-display text-2xl text-copper-500">{number}</span>
                <Mark />
              </div>
              <h3 className="mt-5 font-display text-lg text-earth-700">{title}</h3>
              <p className="mt-3 font-sans text-sm leading-6 text-ink-900/65">{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section id="estudio" aria-labelledby="philosophy-title" className="border-b border-sand-300/60">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8">
        <div>
          <p className="font-sans text-[10px] font-semibold tracking-[0.14em] text-copper-500 uppercase">Filosofía de autor</p>
          <h2 id="philosophy-title" className="mt-3 font-display text-3xl text-earth-700 sm:text-4xl">Lejos de los clichés y el ruido.</h2>
          <p className="mt-5 font-sans text-sm leading-7 text-ink-900/70">
            Sundemon nace como un refugio de diseño contemporáneo donde cada proyecto se aborda con dedicación individual. Diseñamos a medida y entendemos el tatuaje como una pieza de arte permanente cuya historia comienza en la conversación.
          </p>
          <p className="mt-4 font-sans text-sm leading-7 text-ink-900/70">
            Un espacio para mirar despacio, decidir con claridad y llevarte algo que tenga sentido mucho después de salir del estudio.
          </p>
          <span className="mt-7 inline-flex rounded-full border border-sand-300 bg-sand-100 px-3 py-2 font-sans text-[10px] font-semibold tracking-[0.08em] text-earth-700 uppercase">
            <Mark /> Atención personalizada en la ciudad de Cervantes
          </span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {philosophyValues.map(([number, title, description]) => (
            <article key={number} className="rounded-lg border border-sand-300/70 bg-sand-200/45 p-5">
              <div className="flex items-center justify-between">
                <span className="font-display text-xl text-copper-500">{number}</span>
                <Mark />
              </div>
              <h3 className="mt-7 font-display text-xl text-earth-700">{title}</h3>
              <p className="mt-3 font-sans text-sm leading-6 text-ink-900/65">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section aria-labelledby="team-title" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="font-sans text-[10px] font-semibold tracking-[0.14em] text-copper-500 uppercase">El equipo Sundemon</p>
          <h2 id="team-title" className="mt-3 font-display text-3xl text-earth-700">Personas detrás de cada pieza</h2>
        </div>
        <p className="max-w-sm font-sans text-sm leading-6 text-ink-900/65">Una red de artistas y colaboradores que comparte una forma precisa y humana de trabajar.</p>
      </div>
      <div className="mt-9 grid gap-5 md:grid-cols-3">
        <article className="overflow-hidden rounded-lg border border-sand-300/70 bg-white-warm/70">
          <div className="relative aspect-[4/3] overflow-hidden bg-sand-200">
            <Image src="/images/estudio.jpeg" alt="Artista de Sundemon Tattoo Studio trabajando en Alcalá de Henares" fill className="object-cover object-[center_65%]" sizes="(max-width: 768px) 100vw, 33vw" />
          </div>
          <div className="p-5">
            <p className="font-sans text-[10px] font-semibold tracking-[0.12em] text-copper-500 uppercase">Dirección artística</p>
            <h3 className="mt-2 font-display text-xl text-earth-700">Sundemon Studio</h3>
            <p className="mt-3 font-sans text-sm leading-6 text-ink-900/65">Diseño, tatuaje y acompañamiento en un mismo lugar.</p>
          </div>
        </article>
        {["Artista residente", "Colaboraciones"].map((title) => (
          <article key={title} className="flex min-h-80 flex-col items-center justify-center rounded-lg border border-sand-300/70 bg-sand-200/45 p-6 text-center">
            <span className="flex size-12 items-center justify-center rounded-full border border-sand-300 bg-sand-100 font-display text-xl text-copper-500">✦</span>
            <p className="mt-7 font-sans text-[10px] font-semibold tracking-[0.12em] text-copper-500 uppercase">Próximamente</p>
            <h3 className="mt-2 font-display text-xl text-earth-700">{title}</h3>
            <p className="mt-3 max-w-xs font-sans text-sm leading-6 text-ink-900/65">Nuevas miradas que se suman al estudio con la misma sensibilidad y cuidado.</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="tatuajes" aria-labelledby="gallery-title" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-sans text-[10px] font-semibold tracking-[0.14em] text-copper-500 uppercase">Archivo Sundemon</p>
          <h2 id="gallery-title" className="mt-3 font-display text-3xl text-earth-700">Tatuajes reales, personas reales</h2>
        </div>
        <div className="flex gap-2 font-sans text-xs">
          <span className="rounded-full bg-earth-700 px-3 py-2 text-white-warm">Todos</span>
          <span className="rounded-full border border-sand-300 px-3 py-2 text-earth-700">Fine line</span>
          <span className="rounded-full border border-sand-300 px-3 py-2 text-earth-700">Micro-trazo</span>
        </div>
      </div>
      <div className="mt-9 grid gap-5 sm:grid-cols-2">
        {galleryItems.map(([title, description, objectPosition], index) => (
          <article key={title} className={`group relative overflow-hidden rounded-lg bg-sand-200 ${index === 0 ? "sm:row-span-2" : ""}`}>
            <div className={`relative ${index === 0 ? "aspect-[4/5] h-full" : "aspect-[1.55]"}`}>
              <Image src="/images/estudio.jpeg" alt={`${title}, trabajo de tatuaje de Sundemon en Alcalá de Henares`} fill className={`object-cover brightness-[0.78] transition-transform duration-300 group-hover:scale-105 ${objectPosition}`} sizes="(max-width: 640px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5 text-white-warm">
                <h3 className="font-display text-xl">{title}</h3>
                <p className="mt-1 font-sans text-xs text-sand-200">{description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Location() {
  return (
    <section aria-labelledby="location-title" className="border-y border-sand-300/60 bg-sand-200/50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8">
        <div>
          <p className="font-sans text-[10px] font-semibold tracking-[0.14em] text-copper-500 uppercase">Dónde encontrarnos</p>
          <h2 id="location-title" className="mt-3 font-display text-3xl text-earth-700">Un santuario creativo en la ciudad de Cervantes</h2>
          <p className="mt-5 font-sans text-sm leading-7 text-ink-900/70">Un espacio tranquilo en el centro histórico de Alcalá de Henares, pensado para que el tiempo se detenga y la conversación encuentre su forma.</p>
          <address className="mt-8 not-italic font-sans text-sm leading-7 text-earth-700">
            <strong className="font-semibold">Calle Ferraz 3</strong><br />
            28801 · Alcalá de Henares, Madrid<br />
            <span className="text-ink-900/60">L–V · 11:00–20:00 · Con cita previa</span>
          </address>
        </div>
        <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-xl border border-sand-300 bg-sand-100 p-8 shadow-warm">
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(90deg, transparent 49%, #b9784c 50%, transparent 51%), linear-gradient(transparent 49%, #b9784c 50%, transparent 51%)", backgroundSize: "64px 64px" }} />
          <div className="relative z-10 rounded-full border border-copper-500 bg-earth-700 px-6 py-5 text-center text-white-warm shadow-warm">
            <Mark /><br /><span className="font-sans text-xs font-semibold tracking-[0.1em] uppercase">Sundemon</span>
          </div>
          <span className="absolute bottom-5 left-5 font-sans text-[10px] tracking-[0.1em] text-earth-500 uppercase">Centro histórico · Alcalá de Henares</span>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section aria-labelledby="faq-title" className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="font-sans text-[10px] font-semibold tracking-[0.14em] text-copper-500 uppercase">Antes de escribirnos</p>
        <h2 id="faq-title" className="mt-3 font-display text-3xl text-earth-700">Preguntas frecuentes sobre la consulta</h2>
      </div>
      <div className="mt-10 divide-y divide-sand-300/70 border-y border-sand-300/70">
        {faqs.map(([question, answer]) => (
          <details key={question} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display text-base text-earth-700 marker:hidden">
              {question}
              <span className="font-sans text-xl font-light text-copper-500 transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="max-w-2xl pt-4 font-sans text-sm leading-6 text-ink-900/65">{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contacto" className="bg-ink-900 text-white-warm">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <p className="font-sans text-[10px] font-semibold tracking-[0.14em] text-copper-500 uppercase">Hablemos</p>
          <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight sm:text-5xl">¿Tienes una idea en mente?</h2>
          <p className="mt-5 max-w-lg font-sans text-sm leading-7 text-sand-300">Cuéntanosla. Las mejores piezas suelen comenzar con una conversación sencilla.</p>
          <Link href="mailto:hola@sundemon.com" className="mt-8 inline-block rounded-full bg-copper-500 px-6 py-3.5 font-sans text-sm font-semibold text-white-warm transition-colors hover:bg-earth-500 focus-visible:outline-2 focus-visible:outline-sand-200">Cuéntanos tu idea ↗</Link>
        </div>
        <div className="lg:pt-2">
          <p className="font-display text-xl tracking-[0.14em]">SUNDEMON</p>
          <nav aria-label="Enlaces del pie de página" className="mt-7 flex flex-col gap-3 font-sans text-sm text-sand-300">
            <Link className="hover:text-white-warm" href="#tatuajes">Tatuajes</Link>
            <Link className="hover:text-white-warm" href="#estudio">El estudio</Link>
            <Link className="hover:text-white-warm" href="#contacto">Contacto</Link>
          </nav>
        </div>
      </div>
      <div className="border-t border-white-warm/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 font-sans text-[10px] tracking-[0.08em] text-sand-300 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <span>© 2026 Sundemon Tattoo Studio · Alcalá de Henares</span>
          <span>Instagram · WhatsApp · hola@sundemon.com</span>
        </div>
      </div>
    </footer>
  );
}

export function LandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TattooParlor",
            name: "Sundemon Tattoo Studio",
            description:
              "Estudio de tatuajes de autor, fine line y micro-trazo en Alcalá de Henares.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Calle Ferraz 3",
              postalCode: "28801",
              addressLocality: "Alcalá de Henares",
              addressRegion: "Madrid",
              addressCountry: "ES",
            },
            openingHours: "Mo-Fr 11:00-20:00",
            priceRange: "$$",
          }),
        }}
      />
      <Header />
      <main>
        <Hero />
        <Testimonials />
        <EssentialNavigation />
        <Process />
        <Philosophy />
        <Team />
        <Gallery />
        <Location />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
