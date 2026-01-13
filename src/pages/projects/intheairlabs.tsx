import React from "react";
import ProjectViewLayout from "@/components/projects/ProjectLayout";
import {
  ProjectHero,
  ProjectIntro,
  ProjectSection,
  ProjectFooter,
} from "@/components/projects/ProjectComponents";
import {
  Database,
  LayoutDashboard,
  GitMerge,
  Braces,
  Layers,
  Terminal,
  Box,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { projectsNewVersion } from "@/components/newVersion/projets/data/data";

const TOOLS = [
  { label: "React", icon: "/images/icons/react.svg" },
  { label: "Django (Python)", icon: "/images/icons/django.svg" },
  { label: "PostgreSQL", icon: "/images/icons/postgresql.svg" },
  { label: "Figma to Code", icon: "/images/icons/figma.svg" },
];

const ARCHITECTURE_DATA = [
  {
    textBtn: "Architecture Monolithique",
    image: "/images/newversion/INTHEAIRLABS/previous-admin-projects-blur.avif",
  },
  {
    textBtn: "Dette Technique UI",
    image: "/images/newversion/INTHEAIRLABS/previous-admin-create-project.avif",
  },
  {
    textBtn: "Modélisation des Données",
    image: "/images/newversion/INTHEAIRLABS/italabs-client-previous-3.avif",
  },
];

const COMPONENT_DATA = [
  {
    textBtn: "Atomic Design System",
    image: "/images/newversion/INTHEAIRLABS/figma-designs.webp",
  },
  {
    textBtn: "React Component Library",
    image: "/images/newversion/INTHEAIRLABS/intheairlabs-dashboard.avif",
  },
];

const INTEGRATION_DATA = [
  {
    textBtn: "CRUD Admin Panel",
    image: "/images/newversion/INTHEAIRLABS/companies-table.avif",
  },
  {
    textBtn: "Forms & Validation",
    image: "/images/newversion/INTHEAIRLABS/client-form.avif",
  },
  {
    textBtn: "Intégration Viewer 3D",
    image: "/images/newversion/INTHEAIRLABS/3dmodel.avif",
  },
];

export default function ProjectPlateformeSaas() {
  const THEME = "indigo";
  const router = useRouter();
  const currentSlug = "intheairlabs";

  // Trouver le projet actuel et le suivant dans la liste
  const currentIndex = projectsNewVersion.findIndex(
    (p) => p.url === currentSlug
  );
  const project = projectsNewVersion[currentIndex];
  const nextProject =
    projectsNewVersion[currentIndex + 1] || projectsNewVersion[0];

  return (
    <ProjectViewLayout
      onClose={() => router.push("/#projects")}
      accentColor={THEME}
    >
      {(onImageClick) => (
        <>
          <ProjectHero
            title="IntheairLabs"
            subtitle="SaaS B2B : React & Django Integration."
            image="/images/newversion/INTHEAIRLABS/intheairlabs-login2.avif"
            layoutId={`image-container-${project.url}`}
            liveUrl="https://labs.intheair.co/login"
            tags={[
              {
                label: "Fullstack Integration",
                icon: GitMerge,
                color: "text-indigo-400",
              },
              {
                label: "Django Backend",
                icon: Database,
                color: "text-emerald-400",
              },
              {
                label: "Complex Data Visualization",
                color: "text-neutral-300",
              },
            ]}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-neutral-200">
            <ProjectIntro
              context={{
                headline: (
                  <span>
                    Modernisation d'un SaaS 3D : refonte de l'interface et
                    <span className="text-indigo-400 font-medium">
                      {" "}
                      optimisation du backend Django
                    </span>
                    .
                  </span>
                ),
                content: (
                  <div className="space-y-4">
                    <p>
                      IntheairLabs est une plateforme de gestion de livrables
                      3D. Le challenge principal était de reconstruire
                      entièrement le frontend sans perturber la logique métier
                      déjà en place sur le backend Django.
                    </p>
                    <p>
                      J'ai travaillé en binôme avec le développeur backend pour
                      fluidifier l'échange de données. Je suis intervenu
                      directement sur les <strong>vues Django</strong> et les{" "}
                      <strong>modèles</strong> pour adapter l'API et faciliter
                      l'intégration des nouveaux composants React.
                    </p>
                    <p>
                      Cette collaboration étroite a permis de transformer une
                      interface vieillissante en une application moderne,
                      capable de gérer des visualisations 3D complexes de
                      manière fluide.
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-neutral-400 border-t border-neutral-800 pt-4 mt-2 font-mono">
                      <span className="flex items-center gap-2">
                        <GitMerge size={14} /> Pair Programming
                      </span>
                      <span className="flex items-center gap-2">
                        <Braces size={14} /> Django API
                      </span>
                      <span className="flex items-center gap-2">
                        <Box size={14} /> WebGL / 3D
                      </span>
                    </div>
                  </div>
                ),
              }}
              stack={TOOLS}
            />

            <div className="flex flex-col gap-32">
              <ProjectSection
                title="Refactoring & Gestion d'assets"
                description={
                  <span>
                    Le point critique de l'ancien système était la gestion des
                    fichiers : les utilisateurs devaient uploader leurs assets
                    un par un, sans aucun retour sur l'état d'avancement. J'ai
                    refondu la structure de données{" "}
                    <strong>Projets / Livrables / Assets</strong> pour permettre
                    une gestion globale des fichiers, tout en fiabilisant les
                    retours d'état (succès/erreur) lors de l'envoi vers le
                    serveur.
                  </span>
                }
                icon={<Terminal size={24} className="text-orange-400" />}
                images={ARCHITECTURE_DATA}
                onImageClick={onImageClick}
                accentColor="orange"
              />

              <ProjectSection
                title="Design System & Composants React"
                description={
                  <span>
                    Industrialisation de l'UI. Création d'un Design System
                    complet sur Figma, puis traduction immédiate en{" "}
                    <strong>Composants React réutilisables</strong>. Cette
                    approche a permis d'accélérer le développement des vues
                    Admin complexes (Tableaux de données, Filtres avancés).
                  </span>
                }
                icon={<Layers size={24} className="text-pink-400" />}
                images={COMPONENT_DATA}
                reversed
                onImageClick={onImageClick}
                accentColor="pink"
              />

              <ProjectSection
                title="Intégration Fullstack & 3D"
                description={
                  <span>
                    La partie critique du projet. Intégration des endpoints API
                    pour le CRUD des projets. Intervention sur le code{" "}
                    <strong>Python/Django</strong> pour ajuster les serializers
                    et optimiser les payloads envoyés au Front. Intégration d'un
                    viewer 3D WebGL interagissant en temps réel avec l'état de
                    l'application.
                  </span>
                }
                icon={<Database size={24} className="text-indigo-400" />}
                images={INTEGRATION_DATA}
                onImageClick={onImageClick}
                accentColor={THEME}
              />
            </div>

            <ProjectFooter
              nextTitle="La refonte de leur site vitrine"
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
