import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";

interface ProjectImageData {
  textBtn: string;
  image: string;
}

interface ProjectSectionMobileType {
  title: string;
  description: React.ReactNode;
  imgArray: ProjectImageData[];
  icon: React.ReactNode;
}

export default function ProjectSectionMobile({
  title,
  description,
  imgArray,
  icon,
}: ProjectSectionMobileType) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300; // Défilement d'environ un écran
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="grid grid-cols-1 gap-10">
      {/* En-tête */}
      <div className="flex flex-col gap-4 w-full max-w-[700px] mx-auto">
        {icon && (
          <div className="bg-white outline outline-1 outline-neutral-200 size-16 rounded-2xl flex items-center justify-center">
            <span className="text-neutral-600">{icon}</span>
          </div>
        )}
        <h3 className="text-3xl text-balance font-bold text-neutral-800 leading-tight">
          {title}
        </h3>
        <div className="text-neutral-600 text-balance leading-relaxed">
          {description}
        </div>
      </div>

      {/* Conteneur Blanc "Carte" */}
      <div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm relative group">
        {/* Flèche Gauche (Visible uniquement Desktop) */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-neutral-800 p-3 rounded-full shadow-lg border border-neutral-100 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0"
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Flèche Droite (Visible uniquement Desktop) */}
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-neutral-800 p-3 rounded-full shadow-lg border border-neutral-100 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0"
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>

        {/* Zone de Scroll */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 pb-4 pt-2 px-2 snap-x snap-mandatory scrollbar-hide"
        >
          {imgArray.map((item, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 min-w-[240px] md:min-w-[260px] snap-center"
            >
              {/* Mockup Téléphone */}
              <div className="relative aspect-[9/19] w-full bg-neutral-900 rounded-[2.5rem] border-[8px] border-neutral-900 shadow-xl overflow-hidden ring-1 ring-neutral-900/5">
                <Image
                  src={item.image}
                  fill
                  alt={item.textBtn}
                  className="object-cover bg-neutral-100"
                  sizes="(max-width: 768px) 240px, 260px"
                  draggable={false} // Empêche le drag de l'image pour faciliter le scroll souris
                />
              </div>

              {/* Légende */}
              <p className="text-center text-sm font-semibold text-neutral-600 bg-neutral-100/50 py-1.5 px-3 rounded-full mx-auto w-fit border border-neutral-100">
                {item.textBtn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
