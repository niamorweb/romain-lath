import React from "react";
import ProjectViewLayout from "@/components/projects/ProjectLayout";
import {
  ProjectHero,
  ProjectIntro,
  ProjectSection,
  ProjectFooter,
} from "@/components/projects/ProjectComponents";
import {
  Server,
  CreditCard,
  Layout,
  Database,
  Mail,
  ShieldCheck,
  Cloud,
  Code2,
  Laptop,
  DollarSign,
  Image,
} from "lucide-react";
import { projectsNewVersion } from "@/components/newVersion/projets/data/data";
import { useRouter } from "next/navigation";

interface ProjectImageData {
  textBtn: string;
  image: string;
}

interface CarnetProjectProps {
  project: {
    img: string;
    url: string;
  };
  onClose: () => void;
  onNextProject: () => void;
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
  const THEME = "orange";
  const router = useRouter();
  const currentSlug = "moncarnetderecettes";

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
  const DEMO_VIDEO_URL =
    "https://res.cloudinary.com/dfez6bupb/video/upload/v1768160482/202601112016_1_ezqjgj.mp4";

  return (
    <ProjectViewLayout
      onClose={() => router.push("/#projects")}
      accentColor={THEME}
    >
      {(onMediaClick) => (
        <>
          <ProjectHero
            title="Mon Carnet De Recettes"
            subtitle="Architecture Fullstack : NestJS, Prisma & Nuxt."
            image={project.img}
            layoutId={`image-container-${project.url}`}
            liveUrl="https://moncarnetderecettes.vercel.app"
            repoUrl="https://github.com/niamorweb/moncarnetderecettes"
            onDemoClick={() =>
              onMediaClick({
                image: DEMO_VIDEO_URL,
                textBtn: "Démonstration Complète",
                isVideo: true,
              })
            }
            tags={[
              {
                label: "Backend Architecture",
                icon: Server,
                color: "text-red-400",
              },
              {
                label: "Payment System",
                icon: CreditCard,
                color: "text-indigo-400",
              },
              {
                label: "Type Safety",
                icon: Code2,
                color: "text-blue-400",
              },
            ]}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-neutral-200">
            <ProjectIntro
              context={{
                headline: (
                  <span>
                    Conception d'une architecture{" "}
                    <span className="text-orange-400 font-medium">
                      SaaS modulaire
                    </span>{" "}
                    séparant strictement la logique métier (NestJS) de
                    l'interface client (Nuxt).
                  </span>
                ),
                content: (
                  <div className="space-y-4">
                    <p>
                      L'objectif était de créer une{" "}
                      <strong>expérience verticale dédiée</strong> à
                      l'organisation culinaire, s'affranchissant de la
                      complexité des outils généralistes comme Notion. J'ai
                      conçu une interface métier optimisée pour la saisie et la
                      consultation, supprimant toute friction cognitive.
                    </p>
                    <p>
                      La fonctionnalité phare du projet est la{" "}
                      <strong>
                        passerelle entre le numérique et le physique
                      </strong>{" "}
                      : un moteur d'édition permettant de générer instantanément
                      un carnet de recettes prêt pour l'impression. La stack
                      technique actuelle assure la génération dynamique de
                      fichiers PDF "pixel-perfect" hautement personnalisés.
                    </p>
                    <p>
                      Au-delà de l'interface, l'enjeu majeur résidait dans l'
                      <strong>industrialisation du prototype</strong> : mise en
                      place d'une architecture robuste, typage strict de bout en
                      bout et orchestration de services tiers (Stripe,
                      Cloudinary, Resend) au sein d'une API NestJS sécurisée.
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-neutral-400 border-t border-neutral-800 pt-4 mt-4">
                      <span className="flex items-center gap-2">
                        <Database size={14} className="text-orange-400" /> ORM :
                        Prisma
                      </span>
                      <span className="flex items-center gap-2">
                        <Server size={14} className="text-orange-400" /> Infra :
                        Railway + Vercel
                      </span>
                      <span className="flex items-center gap-2">
                        <ShieldCheck size={14} className="text-orange-400" />{" "}
                        Auth : JWT Strategy
                      </span>
                    </div>
                  </div>
                ),
              }}
              stack={TOOLS}
            />

            <div className="flex flex-col gap-32">
              <ProjectSection
                title="Architecture Backend & Data"
                description={
                  <span>
                    Structure modulaire sous <strong>NestJS</strong> utilisant
                    l'injection de dépendances pour une testabilité maximale.
                    Modélisation des données relationnelles complexes (Recettes,
                    Catégories, Users, Abonnements) via <strong>Prisma</strong>{" "}
                    sur une base <strong>PostgreSQL</strong> hébergée chez
                    Railway.
                  </span>
                }
                icon={<Database size={24} className="text-orange-400" />}
                images={ARCHITECTURE_DATA}
                onImageClick={onMediaClick}
                accentColor="orange"
              />

              <ProjectSection
                title="Sécurité & Communication"
                description={
                  <span>
                    Implémentation d'un système d'authentification robuste
                    (Guards, Interceptors). Intégration de l'API{" "}
                    <strong>Resend</strong> pour gérer les emails de manière
                    asynchrone (confirmation de compte, reset password)
                    directement depuis les services NestJS.
                  </span>
                }
                icon={<Mail size={24} className="text-blue-400" />}
                images={AUTH_DATA}
                reversed
                onImageClick={onMediaClick}
                accentColor="blue"
              />

              <ProjectSection
                title="Monétisation via Stripe"
                description={
                  <span>
                    Logique de paiement complète. Création de sessions de
                    paiement sécurisées et, surtout, mise en place de{" "}
                    <strong>Webhooks</strong> pour écouter les événements Stripe
                    (`invoice.paid`, `subscription.deleted`) afin de
                    synchroniser l'état de la base de données en temps réel sans
                    dépendre du client.
                  </span>
                }
                icon={<CreditCard size={24} className="text-indigo-400" />}
                images={PAYMENT_DATA}
                onImageClick={onMediaClick}
                accentColor="indigo"
              />

              <ProjectSection
                title="Frontend State & Media"
                description={
                  <span>
                    Côté client, <strong>Nuxt 3</strong> gère le SSR pour le
                    SEO. Utilisation de <strong>Pinia</strong> pour la gestion
                    d'état global (User session). Intégration de{" "}
                    <strong>Cloudinary</strong> pour l'optimisation à la volée
                    et le stockage sécurisé des images utilisateurs.
                  </span>
                }
                icon={<Cloud size={24} className="text-emerald-400" />}
                images={FRONT_LOGIC_DATA}
                reversed
                onImageClick={onMediaClick}
                accentColor="emerald"
              />

              <ProjectSection
                title="Intégration Client & UX"
                description={
                  <span>
                    Le Frontend <strong>Nuxt 3</strong> ne se contente pas
                    d'afficher des pixels. Il gère une logique complexe :{" "}
                    <strong>SSR</strong> pour le référencement des profils
                    publics,
                    <strong>Pinia</strong> pour la persistance de session
                    utilisateur, et des composants interactifs (Drag & Drop,
                    Modales) connectés en temps réel à l'API via{" "}
                    <strong>$fetch</strong>.
                  </span>
                }
                icon={<Laptop size={24} className="text-emerald-400" />}
                images={FRONTEND_INTEGRATION_DATA}
                onImageClick={onMediaClick}
                accentColor="emerald"
              />
            </div>

            <ProjectFooter
              nextTitle="Explorer le projet suivant"
              accentColor={THEME}
              onNextProject={() => router.push(`/projects/${nextProject.url}`)}
              onClose={() => router.push("/#projects")}
            />
          </div>
        </>
      )}
    </ProjectViewLayout>
  );
}
