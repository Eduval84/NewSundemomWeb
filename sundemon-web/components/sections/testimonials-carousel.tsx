"use client";

import { useEffect, useState } from "react";

type Testimonial = {
  author: string;
  details?: string;
  date: string;
  quote: string;
  ownerReply?: string;
};

const testimonials: Testimonial[] = [
  {
    author: "Jose Antonio Plaza Lobo",
    details: "Local Guide · 12 reseñas · 7 fotos",
    date: "Hace 5 meses",
    quote:
      "Increíble tatuador y mejor persona. Me ha hecho un cover de 2 tatuajes con la temática del señor de los anillos y el resultado ha sido una pasada. En el proceso de su elaboración he estado en 2 estudios en los que trabajó, hasta que ha creado el suyo propio. Impresionante el sitio, ha pensado hasta en el último detalle para que el cliente esté a mimo. Aparte de su profesionalidad tatuando te ayuda a diseñar el proyecto que tienes en la cabeza y enseñándote como quedaría mejor. Ya estoy pensando en lo siguiente.",
  },
  {
    author: "tamara ormeño garcia",
    details: "2 reseñas · 1 foto",
    date: "Hace 5 meses",
    quote:
      "Ha sido una experiencia perfecta, estoy encantada con mis tatuajes. Se nota profesionalidad, Jonh te ayuda con ideas para que sea perfecto y a pesar de por vida. repetiré seguro 😊",
  },
  {
    author: "zariweya Guerrero",
    details: "Local Guide · 70 reseñas · 146 fotos",
    date: "Hace 5 meses",
    quote:
      "La experiencia ha sido increíble de principio a fin. El nivel del profesional es indiscutible, se nota en cada trazo y en el cuidado por los detalles. Pero lo que realmente marca la diferencia es la sensibilidad que muestra, tanto a la hora de diseñar como durante todo el proceso.",
    ownerReply:
      "Saray, gracias por empaparte por completo del cuidado y amor con los que hemos construido este espacio para acompañarte en este nuevo símbolo. Agradecerte también tu sensibilidad y paz, que hacían que el espacio tuviese aún más sentido.",
  },
  {
    author: "Jesica Tatiana Valencia Pineda",
    details: "2 reseñas",
    date: "Hace 3 meses",
    quote:
      "Estuve en el estudio para realizarme un cover de un tatuaje bastante complicado de cubrir y como me imagine, el tatuador me lo dejó increíble. No puedo estar más contenta con el resultado, no solo te asegura el mejor servicio si no que también el trato y la cercanía es inmejorable.",
  },
  {
    author: "Natalia Mellado, canto y voz energética",
    details: "10 reseñas · 2 fotos",
    date: "Hace 3 meses",
    quote:
      "Es increíble lo que pasa en esa sala. No solo te tatúa si no que llega hasta ti desde otra perspectiva. Jhoan y su equipo son increíbles.",
  },
  {
    author: "Yolanda Gomez",
    details: "Local Guide · 9 reseñas · 1 foto",
    date: "Hace 3 semanas",
    quote:
      "Para seguir repitiendo. Creo que es el mejor tatuador que hemos tenido. Es impresionante la técnica y sobre todo el trato. Estoy in love con mis tatuajes!!!!",
  },
  {
    author: "Freddy Jose Fortoul Pernia",
    details: "5 reseñas · 1 foto",
    date: "Hace 6 meses",
    quote:
      "Excelente profesional, transmite a la perfección el diseño, atento al detalle se siente la pasión por el arte, el estudio increíble se siente mucha paz, tranquilidad, la verdad 10 de 10.",
  },
  {
    author: "Anemona Valentina Florea",
    details: "3 reseñas",
    date: "Hace 5 meses",
    quote:
      "La experiencia fue excelente de principio a fin. Desde el primer momento demostró ser un gran profesional.",
    ownerReply:
      "Anémona, gracias por confiar en nosotros en una cicatriz (tatuaje) tan importante para ti. La importancia de cuidar el detalle es algo indudable para nosotros en un proceso que te marcará de por vida.",
  },
  {
    author: "Raulsd10",
    details: "7 reseñas · 1 foto",
    date: "Hace 6 meses",
    quote:
      "El estudio lo lleva Jhoan y es una persona maravillosa, muchos años de experiencia tatuando, muy buen trato con el cliente pregunta si necesitas algo te da de beber y el lugar es súper idílico, una zona de confort absoluta con vistas maravillosas.",
    ownerReply:
      "Raúl, gracias por confiar en nosotros para tu proyecto. Fue un gusto trabajar contigo. Esperamos volver a verte para próximas ideas.",
  },
  {
    author: "Naylatita Sanchez",
    details: "Local Guide · 13 reseñas · 1 foto",
    date: "Hace 4 meses",
    quote:
      "Un entorno diferente y relajante y Jonh todo un profesional q te hace sentir segura en sus manos. Muchas gracias por dejar un recuerdo en mi piel tan bonito. 🥰🥰🥰🥰🥰",
  },
  {
    author: "Abel GR",
    details: "8 reseñas",
    date: "Hace 5 meses",
    quote:
      "Inmejorable experiencia cada sesión de tatuaje con Jhoan. Gran tatuador al que no voy a descubrir yo, solo con ver sus trabajos se ve. Y mejor persona, como conecta con el cliente, el trato que te da, su estudio, te hace sentir como si te conociera de toda la vida.",
    ownerReply:
      "Abel, gracias por dejarnos acompañarte en todo este proceso. Desde la sesión de diseño, tu apertura a confiar en nosotros nos facilitó el trabajo de ofrecerte la mejor experiencia. Esperamos verte de nuevo.",
  },
  {
    author: "gonzalo navarro ruiz",
    details: "Local Guide · 18 reseñas · 13 fotos",
    date: "Hace 2 meses",
    quote:
      "Fui hace unas semanas a realizarme un tatuaje y tengo que decir que tanto la experiencia como el trato es un 10/10. Yaiza, la tatuadora, es encantadora y refleja a la perfección aquello que deseas en tu piel. Si estás pensando en hacerte un tatuaje, este es tu sitio 100%.",
    ownerReply:
      "Gonzalo muchas gracias por compartir tu experiencia. Nuestros artistas son increíbles no solo por la calidad técnica, también por el trato tan cuidado que ofrecen cada uno de ellos.",
  },
  {
    author: "Ana María Gonzalo",
    details: "3 reseñas · 1 foto",
    date: "Hace 4 meses",
    quote:
      "Ya llevo varios trabajos con él y ahora estamos con una manga. No puedo estar más contenta. Confianza total, trato increíble y un resultado que siempre supera lo que tenía en mente. Da gusto ponerse en sus manos.",
  },
  {
    author: "DEUS TYGAME",
    details: "3 reseñas · 1 foto",
    date: "Hace 4 meses",
    quote:
      "Es un excelente tatuador, una persona muy simpática con la que se puede tener una conversación estupenda, trata de maravilla y muy profesional se lo recomiendo a todo el mundo, sus tatuajes en realismo son una locura.",
  },
  {
    author: "David G",
    details: "2 reseñas",
    date: "Hace 5 meses",
    quote:
      "Sinceramente un lugar perfecto para el proceso del tatuaje, un espacio cuidado al detalle, con un sentimiento de intimidad que marca una diferencia notoria frente a cualquier otro estudio en el que haya estado, cálido, con un trato y un ambiente excepcional.",
    ownerReply:
      "David, gracias por permitir que los detalles que hemos cuidado en nuestro estudio te acompañen en esta experiencia. Creemos que la confianza que deposita cada uno de nuestros clientes debe ser abrazada en cada paso.",
  },
  {
    author: "Marcos Plaza",
    details: "2 reseñas",
    date: "Hace 4 meses",
    quote:
      "Experiencia increíble, se nota la profesionalidad y muy buen trato de principio a fin, el lugar transmite mucha tranquilidad.",
  },
  {
    author: "Adrian Barajas Gonzalez",
    details: "3 reseñas · 3 fotos",
    date: "Hace 3 meses",
    quote:
      "Una de mis mejores experiencias, llevo prácticamente todo el brazo con él y el trato y el cuidado que tienen son simplemente maravillosos, pocos tatuadores así, gracias Jhon, por más proyectos juntos.",
    ownerReply:
      "Muchas gracias Adrian por comentar con tanto cariño tu experiencia, nos llena de alegría leerte.",
  },
  {
    author: "Eduardo Valderrama Murillo",
    details: "2 reseñas · 7 fotos",
    date: "Hace 6 meses",
    quote:
      "Jhoan es un gran tatuador, pero mejor acompañante. Tiene una capacidad excelente para escuchar y ver dentro de las personas. Es esta ocasión tuve con él una sesión de acompañamiento y fue genial, me ayudó mucho a identificar algunos comportamientos y sensaciones que me venían persiguiendo desde hace tiempo.",
    ownerReply:
      "Eduardo, gracias por tu detallado comentario sobre el acompañamiento que hemos realizado. Estamos muy agradecidos por tu confianza y apertura emocional para profundizar en esta etapa de tu vida.",
  },
  {
    author: "Alba Galan",
    details: "4 reseñas · 1 foto",
    date: "Hace 5 meses",
    quote:
      "Tatuarse en SUNDEMON es una experiencia única sin duda. John es un profesional enorme que hace que te dé una tatuaje increíble. Escucha, acompaña en la idea y te ayuda siempre a darle forma con la mejor composición. Llevo muchos años.",
    ownerReply:
      "Alba, gracias por tu hermoso comentario. Nos llena enormemente saber que te hemos acompañado estos años, creciendo juntos. Agradecerte la confianza depositada en cada cicatriz que hemos creado juntos.",
  },
  {
    author: "theBorderRaptor",
    details: "3 reseñas · 1 foto",
    date: "Hace 5 meses",
    quote:
      "Solo puedo decir que si no me tatuo con John no me tatuo con nadie. Llevo tatuandome con él 4 años y si pudiera definir a John con palabras, algo que es difícil, es profesionalidad, talento y sensibilidad. La experiencia en su estudio es maravillosa.",
    ownerReply:
      "Te agradeceremos mucho tu lindo comentario, Alonso. Es una experiencia propuesta para que no olvides desde qué lugar crear tu tatuaje o, como nosotros lo llamamos, tu cicatriz.",
  },
  {
    author: "David Navarro",
    details: "1 reseña",
    date: "Hace 5 meses",
    quote:
      "No hay palabras para describir la profesionalidad de Jhoan, es increíble el trato desde que entras hasta que sales un 10 sin discusión alguna y los resultados hablan por sí solos.",
    ownerReply:
      "Gracias David, no solo por tu valoración, sino por confiar en nosotros tanto para realizarte tus proyectos de tatuaje como para formarte. Estamos muy agradecidos.",
  },
  {
    author: "FABY K",
    details: "Local Guide · 67 reseñas · 6 fotos",
    date: "Hace 5 meses",
    quote:
      "Excelente trato por parte de John, la dinámica del seminario estupenda, siempre resolviendo las dudas que se iban presentando a lo largo de la enseñanza. Totalmente recomendado.",
    ownerReply:
      "Gracias Faby por confiar en nosotros para tu desarrollo como artista. Es un gusto recibirte siempre en nuestro espacio.",
  },
  {
    author: "jose barahona",
    details: "Local Guide · 9 reseñas · 29 fotos",
    date: "Hace 5 meses",
    quote:
      "Hola, sorprendente y espectacular, recomendable 100%, super contento, gran profesional y persona.",
    ownerReply:
      "Jose gracias por contar con nosotros y hacernos parte de tu proceso personal.",
  },
  {
    author: "CUADRADO",
    details: "Local Guide · 23 reseñas",
    date: "Hace 5 meses",
    quote:
      "Uno de esos sitios a los que vas para un servicio y sales con una experiencia es increíble el trato y el lugar.",
    ownerReply:
      "Gracias Enrique por tu valoración. Por estar atento a cómo hemos puesto cada detalle para que sea un espacio lleno de paz.",
  },
  {
    author: "María Castilla",
    details: "3 reseñas",
    date: "Hace 3 meses",
    quote: "Increíble trabajo de Yaiza, súper contenta con el trato y el resultado 💗",
    ownerReply: "Gracias María por elegirnos y expresar como has sentido tu experiencia.",
  },
  {
    author: "Nerea Xipi",
    details: "Local Guide · 66 reseñas · 178 fotos",
    date: "Hace una semana",
    quote:
      "Estoy encantada con ellos, sin duda creo que es la mejor decisión que tome yendo a tatuarme allí. He salido encantada con mi trato, lo han hecho con tanto amor que ha quedado precioso incluso le dieron un giro a mi modelo que lo ha dejado todavía mejor, y le han dado justo ese significado que yo quería, lo recomiendo sin duda.",
    ownerReply:
      "Muchas gracias Nerea por elegirnos y por dejarnos crearte una pieza única. Esperamos volver a verte en cualquiera de nuestro eventos o para un nuevo tatuaje.",
  },
  {
    author: "lidya movillo",
    details: "1 reseña",
    date: "Hace 3 semanas",
    quote:
      "Son bastantes años dejando que me deje señal en mi piel de la forma más bonita, la experiencia es más allá que un solo tatuaje. Que suerte tener un tatuador tan profesional.",
    ownerReply:
      "Muchas gracias Lidya por tu hermoso comentario. Estaremos siempre encantados de acompañarte en tus nuevas cicatrices.",
  },
  {
    author: "mario garcialopez medina",
    details: "2 reseñas",
    date: "Hace un mes",
    quote: "Experiencia de lo mejor lo recomiendo mucho.",
  },
  {
    author: "Encarnaçión",
    details: "3 reseñas",
    date: "Hace un mes",
    quote: "Pongo 5 estrellas porque no puedo poner más de lo mejor que te puedes encontrar cuando un 10 no es suficiente.",
  },
  {
    author: "Lucas Cabezuelo",
    details: "13 reseñas · 2 fotos",
    date: "Hace una semana",
    quote: "Un trato excepcional, un servicio increíble y una calidad de tatuaje impecable. No se me ocurre un lugar mejor para hacerte un tatuaje.",
  },
];

function getVisibleCount() {
  if (typeof window === "undefined") return 1;
  if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 640) return 2;
  return 1;
}

export function TestimonialsCarousel() {
  const [visibleCount, setVisibleCount] = useState(1);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const updateVisibleCount = () => {
      const nextCount = getVisibleCount();
      setVisibleCount(nextCount);
      setStartIndex((currentIndex) => Math.min(currentIndex, testimonials.length - nextCount));
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxStartIndex = testimonials.length - visibleCount;
  const canGoBack = startIndex > 0;
  const canGoForward = startIndex < maxStartIndex;
  const visibleTestimonials = testimonials.slice(startIndex, startIndex + visibleCount);

  const goBack = () => setStartIndex((currentIndex) => Math.max(0, currentIndex - 1));
  const goForward = () => setStartIndex((currentIndex) => Math.min(maxStartIndex, currentIndex + 1));

  return (
    <section aria-labelledby="testimonials-title" className="bg-sand-200/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-sans text-[10px] font-semibold tracking-[0.14em] text-copper-500 uppercase">Testimonios reales</p>
            <h2 id="testimonials-title" className="mt-3 font-display text-3xl text-earth-700">La voz de quienes confían su piel</h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-sand-300 bg-white-warm/70 px-4 py-2 font-sans text-xs text-earth-700">★ 5.0 · Google</span>
            <span className="font-sans text-xs text-ink-900/55" aria-live="polite">{startIndex + 1}-{Math.min(startIndex + visibleCount, testimonials.length)} / {testimonials.length}</span>
          </div>
        </div>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
          {visibleTestimonials.map((testimonial) => (
            <article key={testimonial.author} className="flex min-h-64 flex-col justify-between rounded-lg bg-white-warm/80 p-6">
              <div>
                <p className="text-xs tracking-[0.3em] text-copper-500" aria-label="5 estrellas">★★★★★</p>
                <blockquote className="mt-5 font-display text-base leading-7 text-earth-700">“{testimonial.quote}”</blockquote>
              </div>
              <footer className="mt-7 border-t border-sand-300/60 pt-4 font-sans text-[10px] text-ink-900/60">
                <p className="font-semibold text-earth-700">{testimonial.author}</p>
                {testimonial.details && <p className="mt-1">{testimonial.details} · {testimonial.date}</p>}
                {!testimonial.details && <p className="mt-1">{testimonial.date}</p>}
                {testimonial.ownerReply && (
                  <p className="mt-4 border-l border-copper-500/60 pl-3 leading-5 text-ink-900/65">{testimonial.ownerReply}</p>
                )}
              </footer>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between gap-4">
          <button type="button" onClick={goBack} disabled={!canGoBack} aria-label="Ver reseñas anteriores" className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-earth-700/30 text-lg text-earth-700 transition-colors hover:bg-white-warm disabled:cursor-not-allowed disabled:opacity-30 focus-visible:outline-2 focus-visible:outline-copper-500">
            <span aria-hidden="true">←</span>
          </button>
          <div className="flex gap-1.5" aria-label="Posición dentro de las reseñas">
            {Array.from({ length: maxStartIndex + 1 }, (_, index) => (
              <button key={index} type="button" onClick={() => setStartIndex(index)} aria-label={`Ver reseñas desde la posición ${index + 1}`} aria-current={index === startIndex ? "true" : undefined} className={`h-2 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-copper-500 ${index === startIndex ? "w-6 bg-earth-700" : "w-2 bg-sand-300 hover:bg-copper-500"}`} />
            ))}
          </div>
          <button type="button" onClick={goForward} disabled={!canGoForward} aria-label="Ver más reseñas" className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-earth-700/30 text-lg text-earth-700 transition-colors hover:bg-white-warm disabled:cursor-not-allowed disabled:opacity-30 focus-visible:outline-2 focus-visible:outline-copper-500">
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}