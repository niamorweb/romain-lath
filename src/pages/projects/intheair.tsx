import ProjectHeader from "@/components/ProjectHeader";
import ProjectLayout from "@/components/ProjectLayout";
import ProjectLayoutGlobal from "@/components/ProjectLayoutGlobal";
import ProjectSection from "@/components/ProjectSection";
import Separator from "@/components/Separator";
import Image from "next/image";
import React, { useState } from "react";

export default function ProjectSiteVitrine() {
  const tools = [
    {
      label: "Figma",
      icon: "/images/icons/figma.svg",
    },
    {
      label: "Photoshop",
      icon: "/images/icons/photoshop.svg",
    },
    {
      label: "JavaScript",
      icon: "/images/icons/javascript.svg",
    },
    {
      label: "Webflow",
      icon: "/images/icons/webflow.svg",
    },
  ];
  const CONCEPTION_DATA = [
    {
      textBtn: "Ancienne page d'accueil",
      image: "/images/newversion/SITE_VITRINE/previous-hp.avif",
    },
    {
      textBtn: "Ancienne section d'une page",
      image: "/images/newversion/SITE_VITRINE/previous-section.avif",
    },
    {
      textBtn: "Audit du site",
      image: "/images/newversion/SITE_VITRINE/lighthouse-before.webp",
    },
    {
      textBtn: "Arborescence",
      image: "/images/newversion/SITE_VITRINE/previous-pages-tree.webp",
    },
  ];

  const FINAL_UI_DATA = [
    {
      textBtn: "Nouvelle arborescence",
      image: "/images/newversion/SITE_VITRINE/pages-tree.webp",
    },
    {
      textBtn: "Wireframes",
      image: "/images/newversion/SITE_VITRINE/wireframes.webp",
    },
    {
      textBtn: "Inspirations Héro",
      image: "/images/newversion/SITE_VITRINE/inspirations.webp",
    },
    {
      textBtn: "Inspirations d'autres sections",
      image: "/images/newversion/SITE_VITRINE/inspirations2.webp",
    },
    {
      textBtn: "Conception sur webflow",
      image: "/images/newversion/SITE_VITRINE/webflow.webp",
    },
  ];

  const RESULTS_DATA = [
    {
      textBtn: "Nouvelle Home",
      image: "/images/newversion/SITE_VITRINE/intheair-hp.avif",
    },
    {
      textBtn: "Perfomances du site",
      image: "/images/newversion/SITE_VITRINE/lighthouse-after.webp",
    },
    {
      textBtn: "Chiffres clés",
      image: "/images/newversion/SITE_VITRINE/chiffres.avif",
    },
    {
      textBtn: "Services",
      image: "/images/newversion/SITE_VITRINE/pages-services.avif",
    },
    {
      textBtn: "Contact",
      image: "/images/newversion/SITE_VITRINE/nous-contacter.avif",
    },
  ];

  return (
    <ProjectLayoutGlobal>
      <ProjectHeader
        badgeStatus="Projet Professionnel"
        badgeRoles={["UX/UI Designer", "Développeur Frontend"]}
        title="Intheair - Refonte Digitale"
        websiteUrl="https://intheair.co/"
        skills={tools}
      />
      <Separator />
      <section className="grid grid-cols-1 gap-10 items-center w-full max-w-[1240px] mx-auto">
        <div className="flex flex-col gap-4 max-w-[700px] mx-auto">
          <h3 className="text-3xl text-balance font-bold text-neutral-800 leading-tight">
            Contexte
          </h3>
          <div className="text-neutral-600 text-balance leading-relaxed">
            Le site original d'Intheair accusait un décalage entre l'image de
            marque de l'entreprise et son interface digitale. L'objectif était
            de transformer ce site vitrine en une expérience moderne, créative
            et immersive, capable de refléter les ambitions de croissance de
            l'agence tout en intégrant des micro-interactions fluides
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-xl border border-neutral-200 bg-white p-2">
          <Image
            src="/images/newversion/SITE_VITRINE/previous-hp.avif"
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
        title="Etat du site actuel"
        description={
          <div className="flex flex-col gap-4">
            <p>
              Le projet a débuté par un{" "}
              <strong>audit technique et UX complet</strong>. Plusieurs points
              de friction majeurs ont été identifiés :
            </p>
            <ul className="list-disc ml-5 space-y-2">
              <li>
                <strong>Ergonomie :</strong> 50% de la ligne de flottaison était
                occupée par un bloc de titre statique, limitant l'accès direct
                aux informations clés.
              </li>
              <li>
                <strong>Contenu :</strong> Les services présentés n'étaient plus
                alignés avec l'offre réelle de l'entreprise.
              </li>
              <li>
                <strong>Technique :</strong> Des performances SEO limitées et
                une maintenance laborieuse car chaque modification de contenu
                nécessitait une intervention directe dans le code.
              </li>
            </ul>
          </div>
        }
        imgArray={CONCEPTION_DATA}
      />
      <Separator />
      <ProjectSection
        subtitle="2"
        title="Repenser l'architecture des pages"
        description={
          <div className="flex flex-col gap-4">
            <p>
              Après une analyse concurrentielle et une phase de benchmark, j'ai
              repensé l'arborescence pour{" "}
              <strong>optimiser le parcours utilisateur</strong>.
            </p>
            <p>
              La phase de conception (wireframes) a permis de valider la
              structure avant de passer à la haute fidélité. Pour le
              développement, j'ai préconisé <strong>Webflow</strong> :
            </p>
            <ul className="list-disc ml-5 space-y-2">
              <li>
                <strong>Liberté créative :</strong> Possibilité de créer des
                animations sur-mesure et complexes.
              </li>
              <li>
                <strong>Performance & SEO :</strong> Compression d'images native
                et infrastructure serveur optimisée.
              </li>
              <li>
                <strong>Autonomie client :</strong> Mise en place d'un CMS
                intuitif pour permettre à l'équipe de mettre à jour leurs
                projets sans toucher au code.
              </li>
            </ul>
          </div>
        }
        imgArray={FINAL_UI_DATA}
      />
      <Separator />
      <ProjectSection
        subtitle="3"
        title="Un site vitrine à l'image de l'entreprise"
        description={
          <div className="flex flex-col gap-4">
            <p>
              Le résultat final est une plateforme dynamique qui incarne
              parfaitement l'identité d'Intheair, alliant{" "}
              <strong>esthétique et performance technique</strong>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-100">
                <span className="block font-bold text-neutral-800">
                  Performance
                </span>
                <p className="text-sm">
                  Scores SEO et temps de chargement nettement améliorés.
                </p>
              </div>
              <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-100">
                <span className="block font-bold text-neutral-800">
                  Maintenance
                </span>
                <p className="text-sm">
                  Gestion du contenu simplifiée et 100% autonome pour l'équipe.
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
