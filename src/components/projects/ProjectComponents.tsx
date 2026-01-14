import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  Maximize2,
  Play,
  ArrowRight,
} from "lucide-react";

// --- UTILITAIRE POUR LES COULEURS DYNAMIQUES ---
// Tailwind JIT ne détecte pas les classes interpolées (ex: `bg-${color}-500`).
// Il vaut mieux utiliser une map.
const getColorStyles = (color: string = "emerald") => {
  const colors: any = {
    emerald:
      "border-emerald-500/30 text-emerald-400 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10",
    blue: "border-blue-500/30 text-blue-400 group-hover:border-blue-500/50 group-hover:bg-blue-500/10",
    purple:
      "border-purple-500/30 text-purple-400 group-hover:border-purple-500/50 group-hover:bg-purple-500/10",
    orange:
      "border-orange-500/30 text-orange-400 group-hover:border-orange-500/50 group-hover:bg-orange-500/10",
    white:
      "border-white/30 text-white group-hover:border-white/50 group-hover:bg-white/10",
  };
  return colors[color] || colors.emerald;
};

// --- COMPOSANT HERO ---
export const ProjectHero = ({
  title,
  subtitle,
  layoutId,
  image,
  liveUrl,
  repoUrl,
  onDemoClick,
}: any) => {
  return (
    <div className="w-full pt-24 md:pt-36 pb-16 md:pb-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="flex flex-col mb-12 max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-8xl font-bold text-white tracking-tight leading-[0.95] mb-8 sm:mb-10"
          >
            {title}
            {subtitle && (
              <span className="text-neutral-500 font-medium block text-2xl sm:text-4xl md:text-5xl mt-2 sm:mt-4 tracking-normal">
                {subtitle}
              </span>
            )}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center gap-3 sm:gap-4"
          >
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                className="bg-white text-black px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold hover:scale-105 active:scale-95 transition-all flex items-center gap-2 text-sm shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.5)]"
              >
                Visiter <ExternalLink size={16} />
              </a>
            )}
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                className="bg-neutral-900 text-white border border-white/10 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-medium hover:bg-neutral-800 hover:border-white/20 transition-all flex items-center gap-2 text-sm"
              >
                Code <Github size={16} />
              </a>
            )}
            {onDemoClick && (
              <button
                onClick={onDemoClick}
                className="group flex items-center gap-2 px-6 py-3.5 text-neutral-400 hover:text-white transition-colors text-sm font-medium"
              >
                <div className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-red-500 group-hover:bg-red-500/10 transition-colors">
                  <Play size={12} className="fill-current" />
                </div>
                Voir la démo
              </button>
            )}
          </motion.div>
        </div>

        <motion.div
          layoutId={layoutId}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-[16/10] md:aspect-[21/9] rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900"
        >
          <Image
            src={image}
            fill
            alt={title}
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Overlay gradient subtil pour donner de la profondeur */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
        </motion.div>
      </div>
    </div>
  );
};

// --- COMPOSANT INTRO ---
export const ProjectIntro = ({ context, stack }: any) => {
  return (
    <div className="max-w-[1400px] w-full mx-auto px-4 md:px-8 mb-24 md:mb-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 border-b border-white/10 pb-16 md:pb-24">
        {/* Colonne Contexte */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <div>
            <h3 className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 mb-6">
              <span className="w-8 h-[1px] bg-neutral-700"></span>
              Le Contexte
            </h3>
            <h2 className="text-2xl md:text-3xl font-medium leading-snug text-white mb-6">
              {context.headline}
            </h2>
            <div className="text-base md:text-lg text-neutral-400 leading-relaxed font-light space-y-4">
              {context.content}
            </div>
          </div>
        </div>

        {/* Colonne Stack */}
        <div className="lg:col-span-5">
          <h3 className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 mb-6">
            <span className="w-8 h-[1px] bg-neutral-700"></span>
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {stack.map((tool: any, i: number) => (
              <div
                key={i}
                className="flex items-center gap-2.5 bg-neutral-900/50 border border-white/5 py-1.5 px-3 rounded-full hover:border-white/10 hover:bg-white/5 transition-all group cursor-default"
              >
                <div className="relative w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0">
                  {typeof tool.icon === "string" ? (
                    <Image
                      src={tool.icon}
                      fill
                      alt={tool.label}
                      className="object-contain"
                    />
                  ) : (
                    <tool.icon size={16} />
                  )}
                </div>
                <span className="text-xs md:text-sm font-medium text-neutral-400 group-hover:text-neutral-200 transition-colors">
                  {tool.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- COMPOSANT SECTION PRINCIPALE ---
export const ProjectSection = ({
  title,
  description,
  images,
  icon,
  reversed, // Option pour alterner le layout si besoin (non implémenté ici mais utile)
  onImageClick,
  accentColor = "emerald",
}: any) => {
  const colorClass = getColorStyles(accentColor);

  return (
    <section className="max-w-[1400px] mx-auto px-4 md:px-8 mb-24 md:mb-40">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
        {/* Sticky Text Area */}
        <div className="lg:w-1/3 lg:sticky lg:top-32">
          <div
            className={`p-3 rounded-xl w-fit mb-6 bg-neutral-900 border backdrop-blur-md transition-colors duration-300 ${
              colorClass.split(" ")[0]
            }`}
          >
            {/* On clone l'élément icon pour lui passer la couleur dynamique si c'est un SVG Lucide */}
            {React.isValidElement(icon)
              ? React.cloneElement(icon as any, {
                  className: `w-6 h-6 ${colorClass.split(" ")[1]}`,
                })
              : icon}
          </div>

          <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">
            {title}
          </h3>
          <div className="text-base md:text-lg text-neutral-400 leading-relaxed font-light">
            {description}
          </div>
        </div>

        {/* Images Grid */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {images.map((img: any, i: number) => (
            <motion.div
              key={i}
              layoutId={`img-${img.image}`}
              onClick={() => onImageClick && onImageClick(img)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              // Si c'est la 3ème image (index 2) dans une grille de 2 colonnes, on peut la faire prendre toute la largeur
              className={`group relative rounded-xl overflow-hidden bg-neutral-900 border border-white/10 cursor-zoom-in transition-all duration-300 ${
                images.length === 3 && i === 2
                  ? "md:col-span-2 aspect-[2/1]"
                  : "aspect-[4/3]"
              } hover:shadow-2xl`}
            >
              <Image
                src={img.image}
                alt={img.textBtn || "Project image"}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <div
                  className={`p-4 rounded-full border backdrop-blur-md transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ${colorClass}`}
                >
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>

              {img.textBtn && (
                <div className="absolute bottom-4 left-4 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <span className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-wider text-white bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10">
                    {img.textBtn}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- COMPOSANT FOOTER / NAVIGATION ---
export const ProjectFooter = ({
  nextTitle = "Projet Suivant",
  accentColor = "emerald",
  onNextProject,
  isThereNextProject,
}: any) => {
  if (!isThereNextProject)
    return (
      <div className="max-w-[1400px] mx-auto px-8 py-20 text-center border-t border-white/10">
        <span className="text-neutral-500 font-mono text-sm">
          Fin des projets sélectionnés
        </span>
      </div>
    );

  const colorClass = getColorStyles(accentColor);
  // Extraction de la classe de texte et border pour le hover
  const hoverTextClass = colorClass.match(/text-\w+-\d+/)?.[0] || "text-white";
  const hoverBgClass = `bg-${accentColor}-500`; // Note: Attention au JIT ici aussi, idéalement mappé

  return (
    <div className="w-full border-t border-white/10 bg-neutral-950/30">
      <div
        className="max-w-[1400px] mx-auto px-4 md:px-8 py-20 md:py-32 cursor-pointer group"
        onClick={onNextProject}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                Projet Suivant
              </span>
              <div className="h-[1px] w-12 bg-neutral-800 group-hover:w-24 transition-all duration-500" />
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white group-hover:opacity-50 transition-opacity duration-300">
              {nextTitle}
            </h2>
          </div>

          <div
            className={`hidden md:flex items-center gap-4 text-sm font-medium text-neutral-500 uppercase tracking-widest group-hover:translate-x-4 transition-transform duration-500`}
          >
            Voir le cas
            <div
              className={`w-14 h-14 rounded-full border border-white/10 flex items-center justify-center bg-neutral-900 group-hover:scale-110 transition-all duration-300 ${colorClass}`}
            >
              <ArrowRight size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
