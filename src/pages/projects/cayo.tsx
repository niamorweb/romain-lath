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
  const currentSlug = "cayo";
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const currentIndex = projectsNewVersion.findIndex(
    (p) => p.url === currentSlug
  );
  const project = projectsNewVersion[currentIndex];

  if (!project) return null;
  const CRYPTO_DATA: ProjectImageData[] = [
    {
      textBtn: "Chiffrement String via AES-256",
      image: "/images/newversion/CAYO/text-encryption.avif",
    },
    {
      textBtn: "Dérivation de clé (PBKDF2)",
      image: "/images/newversion/CAYO/code-encryption.webp",
    },
    {
      textBtn: "Stockage Chiffré (Vault)",
      image: "/images/newversion/CAYO/supabase-passwords.avif",
    },
  ];

  const BACKEND_DATA: ProjectImageData[] = [
    {
      textBtn: "Row Level Security (RLS)",
      image: "/images/newversion/CAYO/code-route.webp",
    },
    {
      textBtn: "Store Zustand & Optimistic UI",
      image: "/images/newversion/CAYO/code-store.webp",
    },
    {
      textBtn: "Modèle de Données Profils",
      image: "/images/newversion/CAYO/supabase-profiles.avif",
    },
  ];

  const GROUP_CRYPTO_DATA: ProjectImageData[] = [
    {
      textBtn: "Échange de clés RSA",
      image: "/images/newversion/CAYO/crypto-process-group-creation.webp",
    },
    {
      textBtn: "Système d'invitation",
      image: "/images/newversion/CAYO/crypto-process-group-invitation.webp",
    },
    {
      textBtn: "Echange de clés via RSA",
      image: "/images/newversion/CAYO/sharing-key-code.avif",
    },
  ];

  const JEST_DATA: ProjectImageData[] = [
    {
      textBtn: "Structure des tests",
      image: "/images/newversion/CAYO/jest-files.avif",
    },
    {
      textBtn: "Tests Unitaires Crypto",
      image: "/images/newversion/CAYO/jest-code.avif",
    },
    {
      textBtn: "Résultat",
      image: "/images/newversion/CAYO/jest-terminal.avif",
    },
  ];

  const WEBSOCKET_DATA: ProjectImageData[] = [
    {
      textBtn: "Interface par defaut",
      image: "/images/newversion/CAYO/websocket-inactive.avif",
    },
    {
      textBtn: "Indication visuel",
      image: "/images/newversion/CAYO/websocket-active.avif",
    },
    {
      textBtn: "Intégration du Websocket en code",
      image: "/images/newversion/CAYO/websocket-code.avif",
    },
  ];

  const UX_DATA: ProjectImageData[] = [
    {
      textBtn: "Page Login",
      image: "/images/newversion/CAYO/login.avif",
    },
    {
      textBtn: "Onboarding Flow",
      image: "/images/newversion/CAYO/onboarding.avif",
    },
    {
      textBtn: "Dashboard Sécurisé",
      image: "/images/newversion/CAYO/dashboard.avif",
    },
    {
      textBtn: "Identifiant",
      image: "/images/newversion/CAYO/credential.avif",
    },
    {
      textBtn: "Secure Share",
      image: "/images/newversion/CAYO/secure-share.avif",
    },
    {
      textBtn: "Import CSV",
      image: "/images/newversion/CAYO/import.avif",
    },
    {
      textBtn: "Organisation Gestion",
      image: "/images/newversion/CAYO/org-settings.avif",
    },
    {
      textBtn: "Nouvelle Organisation",
      image: "/images/newversion/CAYO/new-org.avif",
    },
    {
      textBtn: "Organisation Membres",
      image: "/images/newversion/CAYO/members.avif",
    },
  ];

  const VIDEO_URL =
    "https://res.cloudinary.com/dfez6bupb/video/upload/v1768160482/202601111931_qhgtnc.mp4";
  const POSTER_URL = "/images/newversion/CAYO/hp.avif";

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
        title="Cayo - Un gestionnaire de mots de passe axé sur les groupes"
        websiteUrl="https://cayo-zeta.vercel.app"
        repoUrl="https://github.com/niamorweb/cayo"
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
              Le marché des gestionnaires de mots de passe est saturé d'outils
              souvent complexes ou peu esthétiques. Partant du constat que le{" "}
              <strong>partage sécurisé au sein d'un groupe</strong> (famille,
              amis, micro-entreprise) est souvent une option payante ou mal
              conçue, j'ai créé <strong>Cayo</strong>.
            </p>
            <p>
              L'objectif était de concevoir une application où la{" "}
              <strong>sécurité de haut niveau</strong> ne sacrifie jamais la
              simplicité d'utilisation, en plaçant le partage collaboratif au
              cœur de l'expérience.
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
          title="Cryptographie & Architecture"
          description={
            <span>
              Au cœur du système : l'implémentation de{" "}
              <strong>AES-256-GCM</strong>. Le mot de passe maître de
              l'utilisateur permet de dériver une clé de chiffrement via PBKDF2.
              Cette clé sert à chiffrer le "Vault" personnel localement,
              garantissant qu'aucune donnée en clair ne quitte jamais
              l'appareil.
            </span>
          }
          icon={<ShieldCheck />}
          imgArray={CRYPTO_DATA}
        />
        <ProjectSection
          subtitle="1"
          title="Protocole de Partage Asymétrique"
          description={
            <div className="text-neutral-600 text-balance leading-relaxed flex flex-col gap-3">
              <span>
                Pour permettre le partage familial sans compromettre les clés
                privées, Cayo utilise le chiffrement{" "}
                <strong>RSA (Asymétrique)</strong>. Chaque utilisateur possède
                une paire de clés. Lorsqu'un secret est partagé, sa clé AES est
                "enveloppée" (wrapped) avec la <strong>clé publique</strong> du
                destinataire. Seule la <strong>clé privée</strong> du membre de
                la famille peut alors déverrouiller l'accès.
              </span>
            </div>
          }
          imgArray={GROUP_CRYPTO_DATA}
          icon={<Key size={24} />}
        />

        <ProjectSection
          title="Infra Temps Réel & Sécurité BDD"
          description={
            <span>
              Utilisation de <strong>Supabase</strong> pour le backend. La
              sécurité est déléguée au niveau le plus bas : la base de données.
              Des politiques <strong>RLS (Row Level Security)</strong> strictes
              empêchent toute lecture non autorisée, même en cas de faille API.
              Côté client, <strong>Zustand</strong> gère l'état global et la
              réhydratation du coffre-fort.
            </span>
          }
          icon={<Database size={24} />}
          imgArray={BACKEND_DATA}
        />
        <ProjectSection
          title="Fiabilité & Tests"
          description={
            <span>
              Le chiffrement ne laisse aucune place à l'erreur. J'ai mis en
              place une suite de tests avec <strong>Jest</strong> pour valider
              chaque étape de la manipulation des clés
              (chiffrement/déchiffrement). L'objectif est de garantir que les
              données restent toujours accessibles et d'éviter toute régression
              sur les fonctions critiques lors des mises à jour.
            </span>
          }
          icon={<TestTube2 size={24} />}
          imgArray={JEST_DATA}
        />
        <ProjectSection
          title="WebSockets & Sync Temps Réel"
          description={
            <span>
              Implémentation de <strong>Supabase Realtime</strong> pour
              synchroniser le coffre-fort sans rechargement de page. Le système
              utilise les <strong>WebSockets</strong> pour détecter
              instantanément l'ajout de nouveaux mots de passe et gérer les
              <strong> conflits d'édition</strong> via un indicateur de
              présence. Dès qu'une donnée est modifiée en base, elle est
              poussée, déchiffrée et injectée automatiquement dans l'état local
              du client.
            </span>
          }
          icon={<Zap size={24} />}
          imgArray={WEBSOCKET_DATA}
        />
        <ProjectSection
          title="UX & Sécurité"
          description={
            <span>
              Le défi était de rendre le chiffrement transparent pour
              l'utilisateur avec une meilleur interface que la plupart des
              gestionnaire de mots de passes. L'interface utilise{" "}
              <strong>Next.js</strong> combiné à TailwindCSS pour le style,
              Next.js à quant à lui l'avantage d'avoir directement un côté
              client et un côté serveur sur l'application, idéal pour faire des
              requêtes avant que la page du client ne soit chargée.
            </span>
          }
          icon={<Fingerprint size={24} />}
          imgArray={UX_DATA}
        />
      </div>
    </ProjectLayoutGlobal>
  );
}
