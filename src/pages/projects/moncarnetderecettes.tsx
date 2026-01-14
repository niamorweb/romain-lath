import React, { useEffect, useRef, useState } from "react";
import {
  CreditCard,
  Database,
  Mail,
  Cloud,
  Laptop,
  DollarSign,
  Minimize,
  Maximize,
  RotateCcw,
  Play,
} from "lucide-react";
import { projectsNewVersion } from "@/components/newVersion/projets/data/data";
import ProjectLayoutGlobal from "@/components/project/ProjectLayoutGlobal";
import ProjectHeader from "@/components/project/ProjectHeader";
import ProjectSection from "@/components/project/ProjectSection";
import Separator from "@/components/project/Separator";
import Image from "next/image";

interface ProjectImageData {
  textBtn: string;
  image: string;
}

const TOOLS = [
  { label: "NestJS", icon: "/images/icons/nestjs.svg" },
  { label: "Nuxt", icon: "/images/icons/nuxt.svg" },
  { label: "PostgreSQL", icon: "/images/icons/postgresql.svg" },
  { label: "Prisma", icon: "/images/icons/prisma.svg" },
  { label: "Stripe", icon: DollarSign },
  { label: "Cloudinary", icon: Image },
  { label: "TypeScript", icon: "/images/icons/typescript.svg" },
  { label: "Docker", icon: "/images/icons/docker.svg" },
  { label: "Resend", icon: "/images/icons/resend.svg" },
];

export default function ProjectDetailViewCarnet() {
  const currentSlug = "moncarnetderecettes";
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Trouver le projet actuel et le suivant dans la liste
  const currentIndex = projectsNewVersion.findIndex(
    (p) => p.url === currentSlug
  );
  const project = projectsNewVersion[currentIndex];
  const nextProject =
    projectsNewVersion[currentIndex + 1] || projectsNewVersion[0];

  const ARCHITECTURE_DATA: ProjectImageData[] = [
    {
      textBtn: "Schéma Prisma & Relations",
      image: "/images/newversion/MON_CARNET_DE_RECETTES/prisma-schema.avif",
    },
    {
      textBtn: "Structure BDD PostgreSQL",
      image: "/images/newversion/MON_CARNET_DE_RECETTES/bdd.avif",
    },
    {
      textBtn: "Déploiement Railway",
      image: "/images/newversion/MON_CARNET_DE_RECETTES/railway.avif",
    },
  ];

  const AUTH_DATA: ProjectImageData[] = [
    {
      textBtn: "Stratégie JWT & Guards",
      image: "/images/newversion/MON_CARNET_DE_RECETTES/jwt.avif",
    },
    {
      textBtn: "Intégration Code Resend",
      image: "/images/newversion/MON_CARNET_DE_RECETTES/resend-code.avif",
    },
    {
      textBtn: "Flux Email Transactionnel",
      image: "/images/newversion/MON_CARNET_DE_RECETTES/mail.avif",
    },
  ];

  const PAYMENT_DATA: ProjectImageData[] = [
    {
      textBtn: "Logique Backend Stripe",
      image: "/images/newversion/MON_CARNET_DE_RECETTES/stripe-code.avif",
    },
    {
      textBtn: "Webhooks & Events",
      image: "/images/newversion/MON_CARNET_DE_RECETTES/stripe-code2.avif",
    },
    {
      textBtn: "Interface Abonnement",
      image: "/images/newversion/MON_CARNET_DE_RECETTES/offers.avif",
    },
  ];

  const FRONT_LOGIC_DATA: ProjectImageData[] = [
    {
      textBtn: "Store Pinia (State Management)",
      image: "/images/newversion/MON_CARNET_DE_RECETTES/pinia.avif",
    },
    {
      textBtn: "Middleware & Refresh Token",
      image: "/images/newversion/MON_CARNET_DE_RECETTES/middleware.avif",
    },
    {
      textBtn: "Cloudinary Upload API",
      image: "/images/newversion/MON_CARNET_DE_RECETTES/cloudinary.avif",
    },
  ];

  const FRONTEND_INTEGRATION_DATA: ProjectImageData[] = [
    {
      textBtn: "Dashboard (Consommation API)",
      image:
        "/images/newversion/MON_CARNET_DE_RECETTES/dashboard-selection.webp",
    },
    {
      textBtn: "SSR Profil Public (SEO)",
      image: "/images/newversion/MON_CARNET_DE_RECETTES/profile-page.avif",
    },
    {
      textBtn: "Générateur de pdf",
      image: "/images/newversion/MON_CARNET_DE_RECETTES/pdf.webp",
    },
    {
      textBtn: "Gestion erreurs",
      image:
        "/images/newversion/MON_CARNET_DE_RECETTES/create-recipe-errors.avif",
    },
    {
      textBtn: "SSR Recette Publique (SEO)",
      image: "/images/newversion/MON_CARNET_DE_RECETTES/public-recipe.avif",
    },
  ];
  const VIDEO_URL =
    "https://res.cloudinary.com/dfez6bupb/video/upload/v1768160482/202601112016_1_ezqjgj.mp4";
  const POSTER_URL = "/images/newversion/MON_CARNET_DE_RECETTES/hp-heroo.avif";

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

  return (
    <ProjectLayoutGlobal>
      <ProjectHeader
        badgeStatus="Projet Personnel"
        badgeRoles={["Développeur Fullstack"]}
        title="Mon carnet de recettes - Du numérique au papier"
        websiteUrl="https://moncarnetderecettes.vercel.app"
        repoUrl="https://github.com/niamorweb/moncarnetderecettes"
        skills={project.skills}
      />

      <Separator />
      <section className="grid grid-cols-1 gap-10 items-center w-full max-w-[1240px] mx-auto">
        <div className="flex flex-col gap-4 max-w-[700px] mx-auto">
          <h3 className="text-3xl text-balance font-bold text-neutral-800 leading-tight">
            Contexte
          </h3>
          <div className="text-neutral-600 text-balance leading-relaxed flex flex-col gap-3">
            <p>
              S'il existe de nombreuses plateformes pour centraliser ses
              recettes numériquement, il manque souvent un pont vers le monde
              physique. <strong>Mon Carnet de Recettes</strong> répond à ce
              besoin en permettant de transformer une collection digitale en un{" "}
              <strong>véritable livre de cuisine soigné et personnalisé</strong>
              .
            </p>
            <p>
              Le défi : offrir une interface de gestion de contenu simple qui se
              traduit automatiquement en une mise en page print professionnelle,
              prête à être imprimée.
            </p>
          </div>
        </div>
        <div
          ref={containerRef} // C'est lui qui passera en fullscreen
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
            // En fullscreen, on préfère "contain" pour voir toute la vidéo sans crop
            playsInline
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleVideoEnd}
          />

          {/* Overlay Noir (disparait au play) */}
          <div
            className={`absolute inset-0 bg-black/10 transition-opacity duration-500 pointer-events-none ${
              isPlaying ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* Bouton Play Central */}
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

          {/* --- UI DU BAS (CONTROLS) --- */}
          <div
            className={`absolute bottom-0 left-0 w-full flex flex-col justify-end transition-opacity duration-300 px-4 pb-4 ${
              isPlaying || isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Bouton Fullscreen (Flottant en bas à droite) */}
            <div className="flex justify-end mb-2">
              <button
                onClick={toggleFullscreen}
                className="p-2 rounded-full bg-black/50 backdrop-blur-md text-white border border-white/10 hover:bg-white hover:text-black transition-all duration-300 z-20 group/btn"
                title={isFullscreen ? "Réduire" : "Plein écran"}
              >
                {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
              </button>
            </div>

            {/* Barre de progression */}
            <div
              className="w-full h-2 group/progress cursor-pointer relative py-2" // Zone clickable augmentée verticalement (py-2)
              onClick={(e) => e.stopPropagation()}
            >
              <div
                ref={progressBarRef}
                className="w-full h-1 bg-black/30 rounded-full overflow-hidden backdrop-blur-sm relative"
                onClick={handleSeek}
              >
                <div
                  className="absolute top-0 left-0 h-full bg-red-600 transition-all duration-100 ease-linear rounded-full"
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
          title="Architecture Backend & Data"
          description={
            <span>
              Structure modulaire sous <strong>NestJS</strong>. Modélisation des
              données relationnelles (Recettes, Catégories, Users,
              Abonnements..) via <strong>Prisma</strong> sur une base{" "}
              <strong>PostgreSQL</strong>. Serveur hébergé chez Railway et
              PostgreSQL sur Prisma.io.
            </span>
          }
          icon={<Database size={24} />}
          imgArray={ARCHITECTURE_DATA}
        />

        <ProjectSection
          title="Sécurité & Communication"
          description={
            <span>
              Implémentation d'un système d'authentification robuste (JWT et la
              confirmation de mail obligatoire avec Guards ). Intégration de
              l'API <strong>Resend</strong> pour gérer les confirmations de
              compte directement depuis les services NestJS.
            </span>
          }
          icon={<Mail size={24} />}
          imgArray={AUTH_DATA}
        />

        <ProjectSection
          title="Monétisation via Stripe"
          description={
            <span>
              Logique de paiement complète. Création de sessions de paiement
              sécurisées et, surtout, mise en place de <strong>Webhooks</strong>{" "}
              pour écouter les événements Stripe (`invoice.paid`,
              `subscription.deleted`..) afin de synchroniser l'état de la base
              de données en temps réel.
            </span>
          }
          icon={<CreditCard size={24} />}
          imgArray={PAYMENT_DATA}
        />

        <ProjectSection
          title="Frontend State & Media"
          description={
            <span>
              Côté client, <strong>Nuxt</strong> gère le SSR pour le SEO.
              Utilisation de <strong>Pinia</strong> pour la gestion d'état
              global (User session). Intégration de <strong>Cloudinary</strong>{" "}
              pour l'optimisation à la volée et le stockage sécurisé des images
              utilisateurs.
            </span>
          }
          icon={<Cloud size={24} />}
          imgArray={FRONT_LOGIC_DATA}
        />

        <ProjectSection
          title="Intégration Client & UX"
          description={
            <span>
              Le Frontend <strong>Nuxt</strong> ne se contente pas d'afficher
              des pixels. Il gère une logique complexe : <strong>SSR</strong>{" "}
              pour le référencement des profils publics,
              <strong>Pinia</strong> pour la persistance de session utilisateur,
              et des composants interactifs (Drag & Drop, Modales) connectés en
              temps réel à l'API via <strong>$fetch</strong>.
            </span>
          }
          icon={<Laptop size={24} />}
          imgArray={FRONTEND_INTEGRATION_DATA}
        />
      </div>
    </ProjectLayoutGlobal>
  );
}
