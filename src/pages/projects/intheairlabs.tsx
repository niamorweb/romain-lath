import React from "react";
import { Database, Layers, Terminal } from "lucide-react";
import { projectsNewVersion } from "@/components/newVersion/projets/data/data";
import ProjectLayoutGlobal from "@/components/project/ProjectLayoutGlobal";
import ProjectHeader from "@/components/project/ProjectHeader";
import Separator from "@/components/project/Separator";
import Image from "next/image";
import ProjectSection from "@/components/project/ProjectSection";

const TOOLS = [
  { label: "React", icon: "/images/icons/react.svg" },
  { label: "Django (Python)", icon: "/images/icons/django.svg" },
  { label: "PostgreSQL", icon: "/images/icons/postgresql.svg" },
  { label: "Figma to Code", icon: "/images/icons/figma.svg" },
];

const ARCHITECTURE_DATA = [
  {
    textBtn: "Ancienne version",
    image: "/images/newversion/INTHEAIRLABS/previous-admin-projects-blur.avif",
  },
  {
    textBtn: "Formulaire",
    image: "/images/newversion/INTHEAIRLABS/previous-admin-create-project.avif",
  },
  {
    textBtn: "Page model 3D",
    image: "/images/newversion/INTHEAIRLABS/italabs-client-previous-3.avif",
  },
];

const COMPONENT_DATA = [
  {
    textBtn: "Nouveau Design",
    image: "/images/newversion/INTHEAIRLABS/figma-designs.webp",
  },
  {
    textBtn: "Intégration de la map en code",
    image: "/images/newversion/INTHEAIRLABS/map-code.avif",
  },
  {
    textBtn: "Mise à jour du backend",
    image: "/images/newversion/INTHEAIRLABS/code-backend.avif",
  },
];

const INTEGRATION_DATA = [
  {
    textBtn: "CRUD Admin Panel",
    image: "/images/newversion/INTHEAIRLABS/companies-table.avif",
  },
  {
    textBtn: "Nouveau formulaires",
    image: "/images/newversion/INTHEAIRLABS/client-form.avif",
  },
  {
    textBtn: "Nouvelle page Model 3D",
    image: "/images/newversion/INTHEAIRLABS/3dmodel.avif",
  },
  {
    textBtn: "Map interactive",
    image: "/images/newversion/INTHEAIRLABS/map-area.avif",
  },
];

export default function ProjectPlateformeSaas() {
  const currentSlug = "intheairlabs";

  // Trouver le projet actuel et le suivant dans la liste
  const currentIndex = projectsNewVersion.findIndex(
    (p) => p.url === currentSlug,
  );
  const project = projectsNewVersion[currentIndex];

  return (
    <ProjectLayoutGlobal>
      <ProjectHeader
        badgeStatus="Projet Professionnel"
        badgeRoles={["Développeur Fullstack", "UX/UI Designer"]}
        title="IntheairLabs - Refonte"
        websiteUrl="https://labs.intheair.co/login"
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
              IntheairLabs est une{" "}
              <strong>
                plateforme SaaS B2B spécialisée dans la gestion de données
                géospatiales
              </strong>
              . L'application permet aux clients de piloter leurs projets via
              une interface cartographique, de suivre l'avancement des chantiers
              et de visualiser des données techniques lourdes (nuages de points
              3D, orthomosaïques) directement dans le navigateur.
            </p>
            <p>
              L'objectif de la refonte était d'industrialiser les processus
              métiers et de monter en gamme sur l'expérience utilisateur
              globale.
            </p>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-xl border border-neutral-200 bg-white p-2">
          <Image
            src="/images/newversion/INTHEAIRLABS/previous-admin-projects-blur.avif"
            width={1200}
            height={700}
            alt="Main preview"
            className="rounded-xl w-full object-cover"
          />
        </div>
      </section>

      <div className="flex flex-col gap-32">
        <ProjectSection
          title="Audit de l'ancienne version"
          description={
            <span>
              Le point critique de l'ancien système était la gestion des
              fichiers : les utilisateurs devaient uploader leurs assets un par
              un, sans aucun retour sur l'état d'avancement. J'ai refondu la
              structure de données <strong>Projets / Livrables / Assets</strong>{" "}
              pour permettre une gestion globale des fichiers, tout en
              fiabilisant les retours d'état (succès/erreur) lors de l'envoi
              vers le serveur.
            </span>
          }
          icon={<Terminal size={24} />}
          imgArray={ARCHITECTURE_DATA}
        />

        <ProjectSection
          title="Conception & Intégration"
          description={
            <span>
              Création d'un Design System complet sur Figma, puis traduction
              immédiate en <strong>Composants React réutilisables</strong>.
              Cette approche a permis d'accélérer le développement des vues
              Admin complexes (Tableaux de données, Filtres avancés..).
            </span>
          }
          icon={<Layers size={24} />}
          imgArray={COMPONENT_DATA}
        />

        <ProjectSection
          title="Intégration Fullstack & 3D"
          description={
            <span>
              La partie critique du projet. Intégration des endpoints API pour
              le CRUD des projets. Intervention sur le code{" "}
              <strong>Python/Django</strong> pour ajuster les serializers et
              optimiser les payloads envoyés au Front, gestion de fichiers KML
              depuis Django afin d'avoir les zones des projets clients dessinées
              côté frontend. Intégration d'un viewer 3D WebGL interagissant en
              temps réel avec l'état de l'application.
            </span>
          }
          icon={<Database size={24} />}
          imgArray={INTEGRATION_DATA}
        />
      </div>
    </ProjectLayoutGlobal>
  );
}
