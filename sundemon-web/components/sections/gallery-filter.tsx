"use client";

import Image from "next/image";
import { useState } from "react";

const galleryItems = [
  {
    title: "Fine Line Botánico",
    description: "Trazo delicado con intención",
    category: "fine-line",
    position: "object-[center_65%]",
  },
  {
    title: "Micro-trazo arquitectónico",
    description: "Inspirado en Alcalá de Henares",
    category: "micro-trazo",
    position: "object-[center_30%]",
  },
  {
    title: "La consulta personalizada",
    description: "Ideas que toman forma",
    category: "consulta",
    position: "object-[center_80%]",
  },
  {
    title: "Precisión y conexión",
    description: "Sesiones íntimas y cuidadas",
    category: "sesiones",
    position: "object-[center_45%]",
  },
];

const filters = [
  ["all", "Todos"],
  ["fine-line", "Fine line"],
  ["micro-trazo", "Micro-trazo"],
  ["consulta", "Consulta"],
] as const;

export function GalleryFilter() {
  const [activeFilter, setActiveFilter] = useState("all");
  const visibleItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <>
      <div className="flex flex-wrap gap-2 font-sans text-xs" role="group" aria-label="Filtrar trabajos">
        {filters.map(([value, label]) => (
          <button
            key={value}
            type="button"
            aria-pressed={activeFilter === value}
            onClick={() => setActiveFilter(value)}
            className={`rounded-full border px-3 py-2 transition-colors focus-visible:outline-2 focus-visible:outline-copper-500 ${
              activeFilter === value
                ? "border-earth-700 bg-earth-700 text-white-warm"
                : "border-sand-300 text-earth-700 hover:border-copper-500"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="mt-9 grid gap-5 sm:grid-cols-2">
        {visibleItems.map((item, index) => (
          <article
            key={item.title}
            className={`group relative overflow-hidden rounded-lg bg-sand-200 ${
              index === 0 && activeFilter === "all" ? "sm:row-span-2" : ""
            }`}
          >
            <div className={`relative ${index === 0 && activeFilter === "all" ? "aspect-[4/5] h-full" : "aspect-[1.55]"}`}>
              <Image
                src="/images/estudio.jpeg"
                alt={`${item.title}, trabajo de tatuaje de Sundemon en Alcalá de Henares`}
                fill
                className={`object-cover brightness-[0.78] transition-transform duration-300 group-hover:scale-105 ${item.position}`}
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5 text-white-warm">
                <h3 className="font-display text-xl">{item.title}</h3>
                <p className="mt-1 font-sans text-xs text-sand-200">{item.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
