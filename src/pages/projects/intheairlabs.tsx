import ProjectHeader from "@/components/ProjectHeader";
import ProjectLayout from "@/components/ProjectLayout";
import ProjectLayoutGlobal from "@/components/ProjectLayoutGlobal";
import ProjectSection from "@/components/ProjectSection";
import Separator from "@/components/Separator";
import Image from "next/image";

export default function ProjectPlateformeSaas() {
  const tools = [
    {
      label: "Figma",
      icon: "/images/icons/figma.svg",
    },
    {
      label: "React",
      icon: "/images/icons/react.svg",
    },
    {
      label: "JavaScript",
      icon: "/images/icons/javascript.svg",
    },
  ];

  const PREVIOUS_DATA = [
    {
      textBtn: "Dashboard Admin",
      image:
        "/images/newversion/INTHEAIRLABS/previous-admin-projects-blur.avif",
    },
    {
      textBtn: "Formulaire",
      image:
        "/images/newversion/INTHEAIRLABS/previous-admin-create-project.avif",
    },
    {
      textBtn: "Vue Projets",
      image: "/images/newversion/INTHEAIRLABS/italabs-client-previous-1.avif",
    },
    {
      textBtn: "Visualisation 3D",
      image: "/images/newversion/INTHEAIRLABS/italabs-client-previous-3.avif",
    },
  ];

  const NEW_UI_DATA = [
    {
      textBtn: "Maquettes dashboards",
      image: "/images/newversion/INTHEAIRLABS/figma-designs.webp",
    },
    {
      textBtn: "Maquettes visualisation 3D",
      image: "/images/newversion/INTHEAIRLABS/figma-designs2.webp",
    },
    {
      textBtn: "Présentation maquettes aux équipes",
      image: "/images/newversion/INTHEAIRLABS/figma-validation.webp",
    },
  ];

  const RESULTS_DATA = [
    {
      textBtn: "Dashboard Projets",
      image: "/images/newversion/INTHEAIRLABS/intheairlabs-dashboard.avif",
    },
    {
      textBtn: "Tableau Admin",
      image: "/images/newversion/INTHEAIRLABS/companies-table.avif",
    },
    {
      textBtn: "Nouveau Formulaire",
      image: "/images/newversion/INTHEAIRLABS/client-form.avif",
    },
    {
      textBtn: "Visualisation 3D",
      image: "/images/newversion/INTHEAIRLABS/3dmodel.avif",
    },
  ];

  return (
    <ProjectLayoutGlobal>
      <ProjectHeader
        badgeStatus="Projet Professionnel"
        badgeRoles={["UX/UI Designer", "Développeur Frontend"]}
        title="IntheairLabs - Refonte"
        websiteUrl="https://labs.intheair.co/login"
        skills={tools}
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
      <Separator />
      <ProjectSection
        subtitle="1"
        title="Etat de l'application actuel"
        description={
          <div className="flex flex-col gap-4">
            <p>
              L'audit a révélé des{" "}
              <strong>frictions opérationnelles critiques</strong>,
              particulièrement sur le workflow de gestion de données :
            </p>
            <ul className="list-disc ml-5 space-y-2">
              <li>
                <strong>Côté Admin :</strong> Un processus d'upload obsolète
                forçant l'envoi de fichiers un par un avec rafraîchissement de
                page systématique, entraînant une perte de productivité majeure.
              </li>
              <li>
                <strong>Côté Client :</strong> Une interface visuelle
                vieillissante ne reflétant pas l'aspect innovant et
                technologique des services proposés par Labs.
              </li>
              <li>
                <strong>Performance :</strong> Une lourdeur ressentie lors de la
                manipulation des livrables volumineux.
              </li>
            </ul>
          </div>
        }
        imgArray={PREVIOUS_DATA}
      />
      <Separator />
      <ProjectSection
        subtitle="2"
        title="Améliorer l'expérience côté admin et client"
        description={
          <div className="flex flex-col gap-4">
            <p>
              Mon rôle a été central dans la coordination du projet, agissant
              comme{" "}
              <strong>
                passerelle entre les besoins métiers locaux et l'équipe de
                développement à distance
              </strong>
              .
            </p>
            <ul className="list-disc ml-5 space-y-2">
              <li>
                <strong>Gestion Agile :</strong> Travail en sprints avec des
                synchronisations en visio toutes les 48h pour assurer un suivi
                rigoureux du déploiement.
              </li>
              <li>
                <strong>Design System :</strong> Refonte complète des composants
                d'interface sur Figma tout en conservant la structure
                structurelle pour minimiser l'impact technique lors de la
                migration.
              </li>
              <li>
                <strong>Optimisation Workflow :</strong> Conception d'un nouveau
                système d'upload multiple (batch upload) avec indicateurs de
                progression en temps réel.
              </li>
            </ul>
          </div>
        }
        imgArray={NEW_UI_DATA}
      />
      <Separator />
      <ProjectSection
        subtitle="3"
        title="Une application plus fluide, plus moderne"
        description={
          <div className="flex flex-col gap-4">
            <p>
              La refonte a transformé l'outil de travail quotidien des équipes
              et des clients en une{" "}
              <strong>interface intuitive, rapide et esthétique</strong>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-100">
                <span className="block font-bold text-neutral-800">
                  Efficacité Admin
                </span>
                <p className="text-sm">
                  Réduction drastique du temps de gestion des livrables grâce au
                  nouvel outil d'upload.
                </p>
              </div>
              <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-100">
                <span className="block font-bold text-neutral-800">
                  UX Client
                </span>
                <p className="text-sm">
                  Visualisation fluide des données 3D et navigation simplifiée
                  dans l'historique de projet.
                </p>
              </div>
            </div>
          </div>
        }
        imgArray={RESULTS_DATA}
      />
    </ProjectLayoutGlobal>
  );
}
