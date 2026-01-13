import React from "react";
import ProjectLayout from "@/components/projects/ProjectLayout";
import {
  ProjectHero,
  ProjectIntro,
  ProjectSection,
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
} from "lucide-react";
import { projectsNewVersion } from "@/components/newVersion/projets/data/data";
import { useRouter } from "next/navigation";

interface ProjectImageData {
  textBtn: string;
  image: string;
}

const TOOLS = [
  { label: "Next.js App Router", icon: "/images/icons/nextjs.svg" },
  { label: "Supabase", icon: "/images/icons/supabase.svg" },
  { label: "AES-256-GCM", icon: Key },
  { label: "Zustand", icon: Store },
  { label: "Typescript", icon: "/images/icons/typescript.svg" },
];

export default function CayoProjectPage() {
  const THEME = "indigo";
  const router = useRouter();
  const currentSlug = "cayo";

  // Trouver le projet actuel et le suivant dans la liste
  const currentIndex = projectsNewVersion.findIndex(
    (p) => p.url === currentSlug
  );
  const project = projectsNewVersion[currentIndex];
  const nextProject =
    projectsNewVersion[currentIndex + 1] || projectsNewVersion[0];

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

  const DEMO_VIDEO_URL =
    "https://res.cloudinary.com/dfez6bupb/video/upload/v1768160482/202601111931_qhgtnc.mp4";

  return (
    <ProjectLayout onClose={() => router.push("/#projects")}>
      {(onMediaClick) => (
        <>
          <ProjectHero
            title="Cayo"
            subtitle="Zero-Knowledge Password Protocol."
            image={project.img}
            layoutId={`image-container-${project.url}`}
            liveUrl="https://cayo-zeta.vercel.app"
            repoUrl="https://github.com/niamorweb/cayo"
            onDemoClick={() =>
              onMediaClick({
                image: DEMO_VIDEO_URL,
                textBtn: "Démonstration Complète",
                isVideo: true,
              })
            }
            tags={[
              {
                label: "End-to-End Encryption",
                icon: ShieldCheck,
                color: "text-indigo-400",
              },
              {
                label: "Real-time Mesh",
                icon: RefreshCw,
                color: "text-blue-400",
              },
              {
                label: "Web Crypto API",
                icon: Code2,
                color: "text-neutral-300",
              },
            ]}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-neutral-200">
            {/* INTRO : Le Challenge Technique */}
            <ProjectIntro
              context={{
                headline: (
                  <span>
                    Un gestionnaire de secrets <strong>Zero-Knowledge</strong> :
                    la sécurité par le chiffrement côté client.
                  </span>
                ),
                content: (
                  <div className="space-y-4">
                    <p>
                      Cayo est né d'un constat simple : beaucoup de familles et
                      de petites entreprises partagent encore leurs accès via
                      des canaux non sécurisés (SMS, Excel, emails). L'objectif
                      était de créer un espace de partage collaboratif où{" "}
                      <strong>le serveur n'a jamais accès aux données</strong>.
                    </p>
                    <p>
                      Le défi technique a été d'implémenter un{" "}
                      <strong>chiffrement hybride</strong> directement dans le
                      navigateur : les données sont sécurisées en{" "}
                      <strong>AES-256</strong>, tandis que les clés de partage
                      entre utilisateurs sont gérées via <strong>RSA</strong>.
                      Ainsi, même en cas de compromission de la base de données
                      (Supabase), les secrets restent indéchiffrables.
                    </p>
                    <p>
                      Le résultat est une application web fluide qui permet de
                      collaborer sur des dossiers sensibles sans compromis sur
                      la vie privée, tout en gardant une expérience utilisateur
                      proche d'un outil de gestion classique.
                    </p>
                    <div className="flex gap-4 text-sm text-neutral-400 border-l-2 border-indigo-500/30 pl-4 mt-2 font-mono">
                      <span>AES-256-GCM</span>
                      <span>•</span>
                      <span>RSA-OAEP</span>
                      <span>•</span>
                      <span>Supabase RLS</span>
                    </div>
                  </div>
                ),
              }}
              stack={TOOLS}
            />

            <div className="flex flex-col gap-32">
              <ProjectSection
                title="Cryptographie & Architecture"
                description={
                  <span>
                    Au cœur du système : l'implémentation de{" "}
                    <strong>AES-256-GCM</strong>. Le mot de passe maître de
                    l'utilisateur permet de dériver une clé de chiffrement via
                    PBKDF2. Cette clé sert à chiffrer le "Vault" personnel
                    localement, garantissant qu'aucune donnée en clair ne quitte
                    jamais l'appareil.
                  </span>
                }
                icon={<ShieldCheck size={24} className="text-indigo-400" />}
                images={CRYPTO_DATA}
                onImageClick={onMediaClick}
                accentColor="indigo"
              />

              <ProjectSection
                title="Protocole de Partage Asymétrique"
                description={
                  <span>
                    Pour permettre le partage familial sans compromettre les
                    clés privées, Cayo utilise le chiffrement{" "}
                    <strong>RSA (Asymétrique)</strong>. Chaque utilisateur
                    possède une paire de clés. Lorsqu'un secret est partagé, sa
                    clé AES est "enveloppée" (wrapped) avec la{" "}
                    <strong>clé publique</strong> du destinataire. Seule la{" "}
                    <strong>clé privée</strong> du membre de la famille peut
                    alors déverrouiller l'accès.
                  </span>
                }
                icon={<KeyRound size={24} className="text-blue-400" />}
                images={GROUP_CRYPTO_DATA}
                reversed={true}
                onImageClick={onMediaClick}
                accentColor="blue"
              />
              <ProjectSection
                title="Infra Temps Réel & Sécurité BDD"
                description={
                  <span>
                    Utilisation de <strong>Supabase</strong> pour le backend. La
                    sécurité est déléguée au niveau le plus bas : la base de
                    données. Des politiques{" "}
                    <strong>RLS (Row Level Security)</strong> strictes empêchent
                    toute lecture non autorisée, même en cas de faille API. Côté
                    client, <strong>Zustand</strong> gère l'état global et la
                    réhydratation du coffre-fort.
                  </span>
                }
                icon={<Database size={24} className="text-blue-400" />}
                images={BACKEND_DATA}
                reversed
                onImageClick={onMediaClick}
                accentColor="blue"
              />
              <ProjectSection
                title="Fiabilité & Tests"
                description={
                  <span>
                    Le chiffrement ne laisse aucune place à l'erreur. J'ai mis
                    en place une suite de tests avec <strong>Jest</strong> pour
                    valider chaque étape de la manipulation des clés
                    (chiffrement/déchiffrement). L'objectif est de garantir que
                    les données restent toujours accessibles et d'éviter toute
                    régression sur les fonctions critiques lors des mises à
                    jour.
                  </span>
                }
                icon={<TestTube2 size={24} className="text-emerald-400" />}
                images={JEST_DATA}
                reversed={true}
                onImageClick={onMediaClick}
                accentColor="emerald"
              />

              <ProjectSection
                title="UX & Sécurité"
                description={
                  <span>
                    Le défi était de rendre le chiffrement transparent pour
                    l'utilisateur. L'interface utilise <strong>Next.js</strong>{" "}
                    pour valider les droits d'accès côté serveur (SSR) avant
                    d'afficher les coffres-forts. On obtient ainsi un outil
                    réactif qui masque toute la complexité technique du
                    déchiffrement des données en local.
                  </span>
                }
                icon={<Fingerprint size={24} className="text-purple-400" />}
                images={UX_DATA}
                onImageClick={onMediaClick}
                accentColor="purple"
              />
            </div>

            <ProjectFooter
              onNextProject={() => router.push(`/projects/${nextProject.url}`)}
              onClose={() => router.push("/#projects")}
              nextTitle="Suivant : Un SaaS B2B"
              accentColor={THEME}
            />
          </div>
        </>
      )}
    </ProjectLayout>
  );
}
