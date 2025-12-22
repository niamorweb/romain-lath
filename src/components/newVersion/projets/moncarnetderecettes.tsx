import Image from "next/image";
import React, { useState } from "react";

export default function ProjectMonCarnetDeRecettes() {
  const UI = [
    {
      textBtn: "Figma UI",
      image: "/images/newversion/MON_CARNET_DE_RECETTES/figma-hp.webp",
    },
    {
      textBtn: "Design System",
      image: "/images/newversion/MON_CARNET_DE_RECETTES/ui-figma.webp",
    },
    {
      textBtn: "Page d'accueil héro",
      image: "/images/newversion/MON_CARNET_DE_RECETTES/hp.webp",
    },
    {
      textBtn: "Page d'accueil section",
      image: "/images/newversion/MON_CARNET_DE_RECETTES/hp2.webp",
    },
    {
      textBtn: "Compte",
      image: "/images/newversion/MON_CARNET_DE_RECETTES/account.webp",
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
  ];

  const [uiSelected, setUiSelected] = useState(0);

  const UX = [
    {
      textBtn: "Ajout catégorie",
      image: "/images/newversion/MON_CARNET_DE_RECETTES/add-category.webp",
    },
    {
      textBtn: "Sélection recettes",
      image:
        "/images/newversion/MON_CARNET_DE_RECETTES/dashboard-selection.webp",
    },
    {
      textBtn: "Sélection de recettes depuis une catégorie",
      image:
        "/images/newversion/MON_CARNET_DE_RECETTES/select-recipes-category.webp",
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
    {
      textBtn: "Catégorie vide",
      image: "/images/newversion/MON_CARNET_DE_RECETTES/empty-category.webp",
    },
    {
      textBtn: "Ajout catégorie input",
      image:
        "/images/newversion/MON_CARNET_DE_RECETTES/input-category-filled.webp",
    },
  ];

  const [uxSelected, setUxSelected] = useState(0);

  return (
    <div className="bg-neutral-50 mt-4 flex flex-col gap-16 px-4 py-8 rounded-2xl border border-neutral-200">
      {/* 1. INTRODUCTION DU PROJET */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1 project-text-container">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2 py-1 rounded uppercase">
              Projet Personnel
            </span>
            <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded uppercase">
              UX / UI / Frontend
            </span>
          </div>
          <h2 className="text-4xl mb-2 font-bold text-neutral-900">
            Mon Carnet de Recettes
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Mon Carnet de Recettes est une plateforme pensée pour la{" "}
            <strong>transmission culinaire</strong>. L'enjeu est de permettre
            aux utilisateurs de transformer une collection numérique éparse en
            un véritable objet physique : un livre de cuisine personnalisé.{" "}
            <br />
            <br />
            En tant qu'UX Designer et Développeur, j'ai conçu l'intégralité du
            produit, de la recherche utilisateur à la mise en place d'une API de
            génération de documents haute définition destinés à l'impression.
          </p>
        </div>
        <div className="mt-2 md:mt-0 md:p-4 rounded-xl bg-neutral-100 border border-neutral-200">
          <Image
            src="/images/newversion/MON_CARNET_DE_RECETTES/hp.webp"
            width={760}
            height={760}
            alt="Dashboard principal de l'application"
            className="rounded-lg shadow-sm"
          />
        </div>
      </div>

      {/* 2. VISION UX ET LOGIQUE DE NAVIGATION */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1 project-text-container">
          <h2 className="text-3xl mb-1 font-medium text-neutral-800">
            Expérience Utilisateur (UX)
          </h2>
          <p className="text-neutral-600">
            Le défi majeur résidait dans la{" "}
            <strong>gestion de données complexes</strong> (unités, ingrédients,
            étapes) tout en gardant une interface légère. J'ai travaillé sur des
            flux permettant une édition rapide et une organisation intuitive par
            catégories. L'interface s'adapte aux usages : consultation rapide en
            cuisine ou gestion de bibliothèque sur desktop.
          </p>
          <div className="flex flex-wrap items-center gap-2 mt-6">
            {UX.map((item, i) => (
              <div
                key={i}
                onClick={() => setUxSelected(i)}
                className={`flex items-center duration-150 cursor-pointer gap-2 text-sm border border-neutral-200 p-2 rounded-3xl ${
                  uxSelected === i
                    ? "bg-blue-600 text-neutral-50"
                    : "bg-neutral-100 hover:bg-neutral-200"
                }`}
              >
                <span>{item.textBtn}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-2 md:mt-0 md:p-4 rounded-xl bg-neutral-100 border border-neutral-200">
          <Image
            src={UX[uxSelected].image}
            width={760}
            height={760}
            alt={UX[uxSelected].textBtn}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* 3. L'AUTOMATISATION PRINT (LE COEUR DU PROJET) */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1 project-text-container">
          <h2 className="text-3xl mb-1 font-medium text-neutral-800">
            Du Digital au Physique : L'API PDF
          </h2>
          <p className="text-neutral-600">
            L'originalité du projet repose sur sa capacité à générer
            automatiquement un livre prêt à imprimer. J'ai développé une{" "}
            <strong>API spécifique</strong> qui traite le contenu de
            l'utilisateur pour le mettre en page selon des standards
            professionnels. <br />
            <br />
            Actuellement, la génération PDF est totalement fonctionnelle,
            structurant les données pour répondre aux exigences des API
            d'impression (marges de reliure, fonds perdus, gestion automatique
            des sauts de page).
          </p>
        </div>
        <div className="mt-2 md:mt-0 md:p-4 rounded-xl bg-orange-50 border border-orange-100">
          <Image
            src="/images/newversion/MON_CARNET_DE_RECETTES/full-pdf-generator.webp"
            width={760}
            height={760}
            alt="Rendu de la génération PDF"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* 4. DESIGN SYSTEM & UI */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1 project-text-container">
          <h2 className="text-3xl mb-1 font-medium text-neutral-800">
            Design System & Intégration
          </h2>
          <p className="text-neutral-600">
            Pour ce projet, j'ai adopté une approche{" "}
            <strong>Design First</strong>. J'ai débuté par une phase de
            conception sur Figma afin de définir un système de composants
            robuste et une identité visuelle cohérente avant d'écrire la moindre
            ligne de code. <br />
            <br />
            Ce <strong>Design System</strong> m'a permis de garantir une
            homogénéité parfaite entre l'interface de l'application web, les
            profils publics et, surtout, le rendu final imprimé qui exige une
            précision rigoureuse.
          </p>
          <div className="flex flex-wrap items-center gap-2 mt-6">
            {UI.map((item, i) => (
              <div
                key={i}
                onClick={() => setUiSelected(i)}
                className={`flex items-center duration-150 cursor-pointer gap-2 text-sm border border-neutral-200 p-2 rounded-3xl ${
                  uiSelected === i
                    ? "bg-blue-600 text-neutral-50"
                    : "bg-neutral-100 hover:bg-neutral-200"
                }`}
              >
                <span>{item.textBtn}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-2 md:mt-0 md:p-4 rounded-xl bg-neutral-100 border border-neutral-200">
          <Image
            src={UI[uiSelected].image}
            width={760}
            height={760}
            alt={UI[uiSelected].textBtn}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
