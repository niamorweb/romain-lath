import React, { useEffect, useRef, useState } from "react";
import ProjectLayout from "@/components/projects/ProjectLayout";
import {
  ProjectHero,
  ProjectIntro,
  ProjectFooter,
} from "@/components/projects/ProjectComponents";
import {
  ShieldCheck,
  RefreshCw,
  Fingerprint,
  Database,
  Lock,
  Code2,
  Store,
  Key,
  TestTube2,
  KeyRound,
  Zap,
  Play,
  RotateCcw,
  Minimize,
  Maximize,
  Cpu,
} from "lucide-react";
import { projectsNewVersion } from "@/components/newVersion/projets/data/data";
import { useRouter } from "next/navigation";
import ProjectLayoutGlobal from "@/components/project/ProjectLayoutGlobal";
import ProjectHeader from "@/components/project/ProjectHeader";
import Separator from "@/components/project/Separator";
import Image from "next/image";
import ProjectSection from "@/components/project/ProjectSection";

interface ProjectImageData {
  textBtn: string;
  image: string;
}

export default function CayoProjectPage() {
  const currentSlug = "rimages";
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const currentIndex = projectsNewVersion.findIndex(
    (p) => p.url === currentSlug,
  );
  const project = projectsNewVersion[currentIndex];

  const LANDING_DATA: ProjectImageData[] = [
    {
      textBtn: "Landing Page",
      image: "/images/newversion/RIMAGES/landing-hero.avif",
    },
    {
      textBtn: "Section",
      image: "/images/newversion/RIMAGES/landing-section.avif",
    },
    {
      textBtn: "Architecture du code",
      image: "/images/newversion/RIMAGES/landing-directory.avif",
    },
    {
      textBtn: "Code",
      image: "/images/newversion/RIMAGES/landing-html.avif",
    },
    {
      textBtn: "Stats (Performance, SEO..)",
      image: "/images/newversion/RIMAGES/stats.avif",
    },
  ];

  const APP_DATA: ProjectImageData[] = [
    {
      textBtn: "Interface iniliale",
      image: "/images/newversion/RIMAGES/interface-empty.avif",
    },
    {
      textBtn: "Interface une fois compressé",
      image: "/images/newversion/RIMAGES/interface-done.avif",
    },
    {
      textBtn: "Code React estimation size",
      image: "/images/newversion/RIMAGES/react-simulation.avif",
    },
    {
      textBtn: "Code React compression",
      image: "/images/newversion/RIMAGES/react-compression.avif",
    },
    {
      textBtn: "Code Rust",
      image: "/images/newversion/RIMAGES/rust-code.avif",
    },
    {
      textBtn: "Build pour MacOS (.dmg)",
      image: "/images/newversion/RIMAGES/build-mac.avif",
    },
    {
      textBtn: "Releases Windows 64 bit & MacOS Silicon",
      image: "/images/newversion/RIMAGES/releases.avif",
    },
  ];

  const VIDEO_URL =
    "https://res.cloudinary.com/dfez6bupb/video/upload/v1770544085/202602080952_1_kccvel.mp4";
  const POSTER_URL = "/images/newversion/RIMAGES/landing-hero.avif";

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation(); // Empêche le clic de déclencher le Play/Pause du parent

    if (!document.fullscreenElement) {
      // Entre en plein écran sur le CONTENEUR (pour garder l'UI)
      containerRef.current?.requestFullscreen().catch((err) => {
        console.error(`Erreur d'activation du plein écran: ${err.message}`);
      });
    } else {
      // Sort du plein écran
      document.exitFullscreen();
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      if (duration > 0) {
        setProgress((current / duration) * 100);
      }
    }
  };

  // Gère le clic sur la barre de progression
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    if (videoRef.current && progressBarRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const percentage = clickX / width;

      const newTime = percentage * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
      setProgress(percentage * 100);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setProgress(100);
    if (videoRef.current) videoRef.current.currentTime = 0;
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  if (!project) return null;

  return (
    <ProjectLayoutGlobal>
      <ProjectHeader
        badgeStatus="Projet Personnel"
        badgeRoles={["Développeur Desktop", "UX/UI Designer"]}
        title="Rimages - Bulk images compression. Instant. Private. Free."
        websiteUrl="https://rimages.vercel.app"
        repoUrl="https://github.com/rimages-app"
        skills={project.skills}
      />

      <Separator />

      <section className="grid grid-cols-1 gap-10 items-center w-full max-w-[1240px] mx-auto">
        <div className="flex flex-col gap-4 max-w-[700px] mx-auto">
          <h3 className="text-3xl text-balance font-bold text-neutral-800 leading-tight">
            Contexte & Problématique
          </h3>
          <div className="text-neutral-600 text-balance leading-relaxed flex flex-col gap-3">
            <p>
              Les outils de compression d'images en ligne (TinyPNG, IloveIMG)
              sont limités : upload lent, restriction sur le nombre de fichiers
              et surtout, <strong>aucune garantie de confidentialité</strong>{" "}
              sur les photos.
            </p>
            <p>
              J'ai créé <strong>Rimages</strong> pour combler ce manque : une
              application de bureau pour Windows & MacOS dédiée au{" "}
              <strong>traitement de masse (bulk)</strong>. L'objectif : une
              privacy totale (zéro serveur) et une UX fluide capable de digérer
              des centaines d'images instantanément.
            </p>
          </div>
        </div>

        {/* SECTION VIDEO (INCHANGÉE SUR LA LOGIQUE) */}
        <div
          ref={containerRef}
          className={`group relative rounded-2xl overflow-hidden shadow-2xl shadow-neutral-200/50 border border-neutral-200 bg-black cursor-pointer select-none transition-all duration-500 ${
            isFullscreen
              ? "w-full h-full rounded-none border-none"
              : "aspect-video"
          }`}
          onClick={togglePlay}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <video
            ref={videoRef}
            src={VIDEO_URL}
            poster={POSTER_URL}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              !isPlaying && isHovered && !isFullscreen
                ? "scale-105 blur-[2px]"
                : "scale-100 blur-0"
            } ${isFullscreen ? "object-contain" : "object-cover"}`}
            playsInline
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleVideoEnd}
          />

          <div
            className={`absolute inset-0 bg-black/10 transition-opacity duration-500 pointer-events-none ${
              isPlaying ? "opacity-0" : "opacity-100"
            }`}
          />

          <div
            className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-500 ${
              isPlaying ? "opacity-0 scale-110" : "opacity-100 scale-100"
            }`}
          >
            {progress === 100 ? (
              <div className="w-20 h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg border border-white/50">
                <RotateCcw className="w-8 h-8 text-neutral-900" />
              </div>
            ) : (
              <div className="relative w-20 h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg border border-white/50 group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 text-neutral-900 ml-1 fill-neutral-900" />
              </div>
            )}
          </div>

          <div
            className={`absolute bottom-0 left-0 w-full flex flex-col justify-end transition-opacity duration-300 px-4 pb-4 ${
              isPlaying || isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex justify-end mb-2">
              <button
                onClick={toggleFullscreen}
                className="p-2 rounded-full bg-black/50 backdrop-blur-md text-white border border-white/10 hover:bg-white hover:text-black transition-all duration-300 z-20 group/btn"
                title={isFullscreen ? "Réduire" : "Plein écran"}
              >
                {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
              </button>
            </div>

            <div
              className="w-full h-2 group/progress cursor-pointer relative py-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                ref={progressBarRef}
                className="w-full h-1 bg-white/30 rounded-full overflow-hidden backdrop-blur-sm relative"
                onClick={handleSeek}
              >
                <div
                  className="absolute top-0 left-0 h-full bg-white transition-all duration-100 ease-linear rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      <div className="flex flex-col gap-32">
        <ProjectSection
          title="Minimalisme Radical (Landing Page)"
          description={
            <span>
              Pour rester cohérent avec la philosophie de l'outil, la page de
              présentation est une prouesse de minimalisme :{" "}
              <strong>un unique fichier HTML</strong>. Pas de framework, pas de
              requête externe. Le CSS et le JS sont <i>inlinés</i>. Résultat :
              un poids plume, un chargement instantané et un score de
              performance parfait.
            </span>
          }
          icon={<Zap />}
          imgArray={LANDING_DATA}
        />

        <ProjectSection
          title="Architecture : Electron vs Tauri"
          description={
            <span>
              Initialement codé en Electron, le projet souffrait de lourdeur
              (Chromium embarqué). J'ai utilisé l'IA pour migrer le cœur vers{" "}
              <strong>Tauri (Rust)</strong>. Ce changement d'architecture a
              révolutionné l'app : binaire minuscule et consommation RAM divisée
              par 10. Tout le traitement se fait en local via les API natives du
              système, sans aucun cloud.
              <br />
              <br />
              Pour rendre l'outil accessible, j'ai build l'application en
              <strong> .dmg pour macOS</strong> et en{" "}
              <strong>.exe pour Windows</strong>, rendant les versions finales
              disponibles directement via les
              <strong> GitHub Releases</strong> du projet.
            </span>
          }
          icon={<Cpu size={24} />}
          imgArray={APP_DATA}
        />
      </div>
    </ProjectLayoutGlobal>
  );
}
