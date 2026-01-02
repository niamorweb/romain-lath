import ProjectHeader from "@/components/ProjectHeader";
import ProjectLayout from "@/components/ProjectLayout";
import ProjectLayoutGlobal from "@/components/ProjectLayoutGlobal";
import ProjectSection from "@/components/ProjectSection";
import Separator from "@/components/Separator";
import Image from "next/image";
import React, { useState } from "react";

export default function ProjectMonCarnetDeRecettes() {
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
      label: "TypeScript",
      icon: "/images/icons/typscript.svg",
    },
    {
      label: "TailwindCSS",
      icon: "/images/icons/tailwindcss.svg",
    },
    {
      label: "Supabase",
      icon: "/images/icons/supabase.svg",
    },
  ];

  // Données UI (Design System & Maquettes)
  const UX_DATA = [
    {
      textBtn: "Analyse concurrentielle",
      image: "/images/newversion/MON_CARNET_DE_RECETTES/ac.webp",
    },
    {
      textBtn: "Personas",
      image: "/images/newversion/MON_CARNET_DE_RECETTES/personas.webp",
    },
    {
      textBtn: "Flowchart",
      image: "/images/newversion/MON_CARNET_DE_RECETTES/flowchart.webp",
    },
  ];

  // Données UX (Flux et interactions)
  const UI_DATA = [
    {
      textBtn: "Wireframes",
      image:
        "/images/newversion/MON_CARNET_DE_RECETTES/wireframes-samples.webp",
    },
    {
      textBtn: "Design system",
      image: "/images/newversion/MON_CARNET_DE_RECETTES/design-system1.webp",
    },
    {
      textBtn: "Design system cards",
      image:
        "/images/newversion/MON_CARNET_DE_RECETTES/design-system-card.webp",
    },
    {
      textBtn: "Prototypage sur Figma",
      image: "/images/newversion/MON_CARNET_DE_RECETTES/proto.webp",
    },
  ];

  const RESULTS_DATA = [
    {
      textBtn: "Drag and drop en code",
      image: "/images/newversion/MON_CARNET_DE_RECETTES/code-dand.webp",
    },
    {
      textBtn: "Protection de page par authentification",
      image:
        "/images/newversion/MON_CARNET_DE_RECETTES/code-protected-page.webp",
    },
    {
      textBtn: "Profil public",
      image: "/images/newversion/MON_CARNET_DE_RECETTES/public-profile.webp",
    },
    {
      textBtn: "Générateur de PDF",
      image:
        "/images/newversion/MON_CARNET_DE_RECETTES/full-pdf-generator.webp",
    },
    {
      textBtn: "Sélection recettes",
      image:
        "/images/newversion/MON_CARNET_DE_RECETTES/dashboard-selection.webp",
    },
    {
      textBtn: "Ordre des pages PDF",
      image: "/images/newversion/MON_CARNET_DE_RECETTES/pdf-pages-order.webp",
    },
    {
      textBtn: "Modification recette",
      image: "/images/newversion/MON_CARNET_DE_RECETTES/edit-recipe.webp",
    },
    {
      textBtn: "Nouvelle recette",
      image: "/images/newversion/MON_CARNET_DE_RECETTES/new-recipe.webp",
    },
  ];

  return (
    <ProjectLayoutGlobal>
      <ProjectHeader
        badgeStatus="Projet Personnel"
        badgeRoles={["UX/UI Designer", "Développeur Frontend"]}
        title="Mon carnet de recettes - Du numérique au papier"
        websiteUrl="https://moncarnetderecettes.vercel.app"
        repoUrl="https://github.com/niamorweb/moncarnetderecettes"
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
        <div className="rounded-2xl overflow-hidden shadow-xl border border-neutral-200 bg-white p-2">
          <Image
            src="/images/newversion/MON_CARNET_DE_RECETTES/hp.webp"
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
        title="Analyse du marché et des besoins des personnes"
        description={
          <div className="flex flex-col gap-4 text-neutral-600">
            <p>
              L'étude du projet a commencé par une phase d'
              <strong>analyse stratégique</strong> pour valider la viabilité de
              l'idée :
            </p>
            <ul className="list-disc ml-5 space-y-2">
              <li>
                <strong>Analyse concurrentielle :</strong> Identification du
                manque de solutions "Direct-to-Print" accessibles aux
                particuliers pour des carnets unitaires.
              </li>
              <li>
                <strong>Recherche utilisateur :</strong> Analyse des forums et
                réseaux sociaux pour comprendre les attentes (besoin de
                personnalisation, importance de la lisibilité des polices en
                cuisine).
              </li>
              <li>
                <strong>Personas :</strong> Création de profils comme "Le
                passionné de transmission" qui souhaite léguer ses recettes, ou
                "L'organisateur" qui veut désencombrer sa cuisine des feuilles
                volantes.
              </li>
            </ul>
          </div>
        }
        imgArray={UX_DATA}
      />
      <Separator />
      <ProjectSection
        subtitle="2"
        title="Conception de l'expérience (UX/UI)"
        description={
          <div className="flex flex-col gap-4 text-neutral-600">
            <p>
              Le design a été pensé pour simplifier au maximum la{" "}
              <strong>prévisualisation du produit final</strong> :
            </p>
            <ul className="list-disc ml-5 space-y-2">
              <li>
                <strong>User Journey :</strong> Conception d'un parcours fluide
                allant de la saisie de la recette (ingrédients, étapes) à la
                configuration de la couverture du carnet.
              </li>
              <li>
                <strong>Design System :</strong> Création d'une identité
                visuelle chaleureuse et épurée, centrée sur la photographie
                culinaire.
              </li>
              <li>
                <strong>Prototypage :</strong> Mise en place de wireframes sur
                Figma pour tester l'ergonomie de l'éditeur de recettes et la
                gestion des catégories.
              </li>
            </ul>
          </div>
        }
        imgArray={UI_DATA}
      />
      <Separator />
      <ProjectSection
        subtitle="3"
        title="Intégration technique et résultat"
        description={
          <div className="flex flex-col gap-4 text-neutral-600">
            <p>
              Pour garantir une application rapide et scalable, j'ai choisi une
              stack moderne orientée{" "}
              <strong>BaaS (Backend as a Service)</strong> :
            </p>
            <ul className="list-disc ml-5 space-y-2">
              <li>
                <strong>Frontend :</strong> Développement avec{" "}
                <strong>React (Vite)</strong> pour une expérience SPA
                ultra-fluide et légère, stylisé avec{" "}
                <strong>Tailwind CSS</strong>.
              </li>
              <li>
                <strong>Backend & Data :</strong> Utilisation de{" "}
                <strong>Supabase</strong> pour la gestion de l'authentification
                et de la base de données en temps réel.
              </li>
              <li>
                <strong>Génération Print :</strong> Implémentation d'un moteur
                de génération de PDF structuré. L'architecture est pensée pour
                s'interfacer prochainement avec une API d'impression à la
                demande (Print-on-Demand).
              </li>
            </ul>
          </div>
        }
        imgArray={RESULTS_DATA}
      />
    </ProjectLayoutGlobal>
  );
}
