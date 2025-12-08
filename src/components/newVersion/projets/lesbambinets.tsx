import Image from "next/image";
import React, { useState } from "react";

export default function ProjectBambinets() {
  // --- Données pour la section 'Fonctionnalités Clés et UX' (Wireframes des fonctionnalités) ---
  const uxFeatures = [
    {
      textBtn: "Glossaire Vidéo",
      image: "/images/newversion/LES_BAMBINETS/wireframes1.avif",
    },
    {
      textBtn: "Quiz Interactifs",
      image: "/images/newversion/LES_BAMBINETS/wireframes2.avif",
    },
  ];

  // État pour la sélection des fonctionnalités/UX
  const [featureSelected, setFeatureSelected] = useState(0);

  // --- Données pour la section 'Design System et Composants' ---
  const designSystem = [
    {
      textBtn: "Design System Global",
      image: "/images/newversion/LES_BAMBINETS/design-system1.avif",
    },
    {
      textBtn: "Composants Mobiles",
      image: "/images/newversion/LES_BAMBINETS/mobile-components.avif",
    },
    {
      textBtn: "Composants Divers",
      image: "/images/newversion/LES_BAMBINETS/components.avif",
    },
  ];

  // État pour la sélection du Design System
  const [designSelected, setDesignSelected] = useState(0);

  // --- Données pour la section 'Prototype et Flux Utilisateur' (Wireframes et Écrans) ---
  const appStructure = [
    {
      textBtn: "Écran d'Accueil",
      image: "/images/newversion/LES_BAMBINETS/proto-home-connexion.avif",
    },
    {
      textBtn: "Début du Quiz",
      image: "/images/newversion/LES_BAMBINETS/proto-quiz1.avif",
    },
    {
      textBtn: "Question de Quiz",
      image: "/images/newversion/LES_BAMBINETS/proto-quiz2.avif",
    },
    {
      textBtn: "Fin du Quiz",
      image: "/images/newversion/LES_BAMBINETS/proto-quiz3.avif",
    },
    {
      textBtn: "Liste du Glossaire",
      image: "/images/newversion/LES_BAMBINETS/proto-glossaire.avif",
    },
    {
      textBtn: "FAQ et Favoris",
      image: "/images/newversion/LES_BAMBINETS/proto-faq-favs-settings.avif",
    },
  ];

  // État pour la sélection des étapes/écrans
  const [screenSelected, setScreenSelected] = useState(0);

  return (
    <div className="bg-neutral-50 mt-4 flex flex-col gap-16 px-4 py-8 rounded-2xl border border-neutral-200">
      {/* --- Section 1: Présentation du Projet --- */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1 project-text-container">
          <h2 className="text-3xl mb-1 font-medium">
            Les Bambinets : Langue des Signes avec Bébé
          </h2>
          <p>
            Conception et développement d'une application mobile dédiée aux
            professionnels de la petite enfance et aux parents pour faciliter la
            communication précoce grâce au langage des signes pour bébé.
            L'objectif est de donner aux adultes les outils nécessaires pour
            mieux comprendre et interagir avec les enfants avant l'acquisition
            du langage verbal structuré (2-3 ans).
          </p>
        </div>
        <div className="mt-2 md:mt-0 md:p-4 rounded-xl bg-neutral-100">
          <Image
            src="/images/newversion/LES_BAMBINETS/illustration.avif"
            width={760}
            height={760}
            alt="Illustration principale de l'application Les Bambinets"
          />
        </div>
      </div>

      {/* --- Section 2: Fonctionnalités Clés et UX (Wireframes) --- */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1 project-text-container">
          <h2 className="text-3xl mb-1 font-medium">
            Fonctionnalités et Expérience d'Apprentissage
          </h2>
          <p>
            L'architecture de l'application est pensée pour une consultation
            rapide et un apprentissage efficace, en mettant la vidéo au cœur de
            chaque interaction pour illustrer les gestes. Nous mettons en place
            un **Glossaire vidéo** (20 mots de base, tirés de Sophie D’olce),
            des outils de validation (quiz) et une FAQ.
          </p>
          <div className="flex flex-wrap items-center gap-2 mt-6">
            {uxFeatures &&
              uxFeatures.map((item: any, i: any) => (
                <div
                  key={i}
                  onClick={() => setFeatureSelected(i)}
                  className={`flex items-center duration-150 cursor-pointer gap-2 text-sm border border-neutral-200 p-2 rounded-3xl ${
                    featureSelected === i
                      ? "bg-blue-600 text-neutral-50 hover:brightness-105"
                      : "bg-neutral-100 hover:brightness-95"
                  }`}
                >
                  <span>{item.textBtn}</span>
                </div>
              ))}
          </div>
        </div>
        <div className="mt-2 md:mt-0 md:p-4 rounded-xl bg-neutral-100">
          <Image
            src={uxFeatures[featureSelected].image}
            width={760}
            height={760}
            alt={`Wireframe de la fonctionnalité : ${uxFeatures[featureSelected].textBtn}`}
          />
        </div>

        <div className="project-text-container mt-6">
          <h3 className="text-xl font-medium mt-4">Spécifications Clés :</h3>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>
              **Glossaire :** 20 mots signés (évolutif), tri alphabétique et
              **filtrage par catégorie** (Essentiel, Émotions, Loisirs,
              Nature...).
            </li>
            <li>
              **Contenu Média :** Chaque signe est illustré par une **vidéo** de
              démonstration.
            </li>
            <li>
              **Fonction Favoris :** Ajout rapide à une bibliothèque
              personnalisée (via icône "Cœur") pour identifier les signes les
              plus utilisés.
            </li>
            <li>
              **Quiz :** Microquiz basés sur la reconnaissance des signes
              présentés en vidéo pour valider les acquis.
            </li>
            <li>
              **FAQ :** Réponses aux questions fréquentes sur l'utilisation des
              signes avec les tout-petits.
            </li>
          </ul>
        </div>
      </div>

      {/* --- Section 3: Design System et Composants --- */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1 project-text-container">
          <h2 className="text-3xl mb-1 font-medium">
            Design System et Composants
          </h2>
          <p>
            Présentation du système de design (couleurs, typographie, icônes) et
            des composants réutilisables qui garantissent la cohérence et
            l'évolutivité de l'interface mobile.
          </p>
          <div className="flex flex-wrap items-center gap-2 mt-6">
            {designSystem &&
              designSystem.map((item: any, i: any) => (
                <div
                  key={i}
                  onClick={() => setDesignSelected(i)}
                  className={`flex items-center cursor-pointer gap-2 text-sm border border-neutral-200 p-2 rounded-3xl ${
                    designSelected === i
                      ? "bg-blue-600 text-neutral-50 hover:brightness-105"
                      : "bg-neutral-100 hover:brightness-95"
                  }`}
                >
                  <span>{item.textBtn}</span>
                </div>
              ))}
          </div>
        </div>
        <div className="mt-2 md:mt-0 md:p-4 rounded-xl bg-neutral-100">
          <Image
            src={designSystem[designSelected].image}
            width={760}
            height={760}
            alt={`Aperçu du Design System : ${designSystem[designSelected].textBtn}`}
          />
        </div>
      </div>

      {/* --- Section 4: Prototype et Flux Utilisateur --- */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1 project-text-container">
          <h2 className="text-3xl mb-1 font-medium">
            Prototype et Flux Utilisateur
          </h2>
          <p>
            Parcours de l'utilisateur à travers les écrans clés, de l'accueil
            aux différentes sections (Quiz, Glossaire, FAQ).
          </p>
          <div className="flex flex-wrap items-center gap-2 mt-6">
            {appStructure &&
              appStructure.map((item: any, i: any) => (
                <div
                  key={i}
                  onClick={() => setScreenSelected(i)}
                  className={`flex items-center cursor-pointer gap-2 text-sm border border-neutral-200 p-2 rounded-3xl ${
                    screenSelected === i
                      ? "bg-blue-600 text-neutral-50 hover:brightness-105"
                      : "bg-neutral-100 hover:brightness-95"
                  }`}
                >
                  <span>{item.textBtn}</span>
                </div>
              ))}
          </div>
        </div>
        <div className="mt-2 md:mt-0 md:p-4 rounded-xl bg-neutral-100">
          <Image
            src={appStructure[screenSelected].image}
            width={760}
            height={760}
            alt={`Maquette du Prototype : ${appStructure[screenSelected].textBtn}`}
          />
        </div>
      </div>
    </div>
  );
}
