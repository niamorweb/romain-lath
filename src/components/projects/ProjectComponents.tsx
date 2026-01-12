import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  Maximize2,
  Play,
} from "lucide-react";

export const ProjectHero = ({
  title,
  subtitle,
  tags,
  image,
  layoutId,
  liveUrl,
  repoUrl,
  onDemoClick,
}: any) => {
  return (
    <div className="w-full pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            {tags?.map((tag: any, i: number) => (
              <span
                key={i}
                className={`px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] font-mono uppercase tracking-[0.2em] ${
                  tag.color || "text-neutral-400"
                } flex items-center gap-2`}
              >
                {tag.icon && <tag.icon size={12} />} {tag.label}
              </span>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9] mb-10"
          >
            {title}
            {subtitle && (
              <span className="text-neutral-600 block md:inline md:ml-4">
                {subtitle}
              </span>
            )}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                className="bg-white text-black px-8 py-3.5 rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2 text-sm shadow-xl shadow-white/5"
              >
                Visiter le site <ExternalLink size={16} />
              </a>
            )}
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                className="bg-white/5 text-white border border-white/10 px-8 py-3.5 rounded-full font-medium hover:bg-white/10 transition-all flex items-center gap-2 backdrop-blur-md text-sm"
              >
                Code Source <Github size={16} />
              </a>
            )}
            {onDemoClick && (
              <button
                onClick={onDemoClick}
                className="bg-red-500/10 text-red-300 border border-red-500/20 px-8 py-3.5 rounded-full font-medium hover:bg-red-500/20 hover:text-white transition-all flex items-center gap-2 backdrop-blur-md text-sm cursor-pointer"
              >
                Voir la démo (3 min) <Play size={16} className="fill-current" />
              </button>
            )}
          </motion.div>
        </div>

        <motion.div
          layoutId={layoutId}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
        >
          <Image
            src={image}
            fill
            alt={title}
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020408]/40 to-transparent" />
        </motion.div>
      </div>
    </div>
  );
};

export const ProjectIntro = ({ context, stack }: any) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 border-b border-white/10 pb-20">
      <div className="lg:col-span-7">
        <h3 className="text-sm font-mono uppercase tracking-widest text-neutral-500 mb-6">
          Le Contexte
        </h3>
        <div className="text-2xl md:text-3xl font-light leading-snug text-white mb-8">
          {context.headline}
        </div>
        <div className="text-lg text-neutral-400 leading-relaxed max-w-2xl space-y-4">
          {context.content}
        </div>
      </div>

      <div className="lg:col-span-5">
        <h3 className="text-sm font-mono uppercase tracking-widest text-neutral-500 mb-6">
          Tech Stack
        </h3>
        <div className="flex flex-wrap gap-3">
          {stack.map((tool: any, i: number) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors group"
            >
              <div className="relative w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity">
                {typeof tool.icon === "string" ? (
                  <Image
                    src={tool.icon}
                    fill
                    alt={tool.label}
                    className="object-contain"
                  />
                ) : (
                  <tool.icon size={20} />
                )}
              </div>
              <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors">
                {tool.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ProjectSection = ({
  title,
  description,
  images,
  icon,
  reversed,
  onImageClick,
  accentColor = "emerald",
}: any) => {
  return (
    <section
      className={`flex flex-col gap-12 items-start ${reversed ? "" : ""}`}
    >
      <div className={`lg:col-span-4 mx-auto max-w-[800px] `}>
        <div className="bg-white/5 border border-white/10 p-4 rounded-2xl w-fit mb-6 backdrop-blur-sm shadow-lg">
          {icon}
        </div>
        <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">
          {title}
        </h3>
        <div className="text-lg text-neutral-400 leading-relaxed font-light">
          {description}
        </div>
      </div>

      <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 w-full gap-6">
        {images.map((img: any, i: number) => (
          <motion.div
            key={i}
            layoutId={`img-${img.image}`}
            onClick={() => onImageClick && onImageClick(img)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className={`group relative rounded-xl overflow-hidden bg-[#0a0a0a] border border-white/10 hover:border-${accentColor}-500/50 cursor-zoom-in transition-all duration-300 shadow-lg`}
          >
            <div className="aspect-[4/3] relative">
              <Image
                src={img.image}
                alt={img.textBtn}
                fill
                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
            </div>

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div
                className={`bg-${accentColor}-500/20 backdrop-blur-md p-3 rounded-full border border-${accentColor}-500/30`}
              >
                <Maximize2 className={`text-${accentColor}-400 w-6 h-6`} />
              </div>
            </div>

            <div className="absolute bottom-4 left-4 pointer-events-none">
              <span
                className={`text-xs font-mono text-${accentColor}-100 bg-${accentColor}-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-${accentColor}-500/20`}
              >
                {img.textBtn}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export const ProjectFooter = ({
  onClose,
  nextTitle = "Projet Suivant",
  accentColor = "white",
  onNextProject,
  isThereNextProject,
}: any) => {
  return (
    <div
      className="mt-40 pt-20 border-t border-white/10 flex justify-between items-center group cursor-pointer"
      onClick={(e) => {
        e.stopPropagation();
        onNextProject();
      }}
    >
      <div>
        <span className="text-sm font-mono text-neutral-500 uppercase tracking-widest">
          Fin de l'étude
        </span>
        <h2
          className={`text-4xl md:text-5xl font-bold text-white mt-2 group-hover:text-${accentColor}-400 transition-colors duration-300`}
        >
          {nextTitle}
        </h2>
      </div>
      <div
        className={`w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-${accentColor}-400 group-hover:border-${accentColor}-400 group-hover:text-black transition-all duration-500`}
      >
        <ArrowUpRight size={32} />
      </div>
    </div>
  );
};
