// import Image from "next/image";
// import React, { useState } from "react";

import ProjectLayout from "@/components/ProjectLayout";

// export default function ProjectBambinets() {
//   // --- Données pour la section 'Fonctionnalités Clés et UX' (Wireframes des fonctionnalités) ---
//   const uxFeatures = [
//     {
//       textBtn: "Glossaire Vidéo",
//       image: "/images/newversion/LES_BAMBINETS/wireframes1.avif",
//     },
//     {
//       textBtn: "Quiz Interactifs",
//       image: "/images/newversion/LES_BAMBINETS/wireframes2.avif",
//     },
//   ];

//   // État pour la sélection des fonctionnalités/UX
//   const [featureSelected, setFeatureSelected] = useState(0);

//   // --- Données pour la section 'Design System et Composants' ---
//   const designSystem = [
//     {
//       textBtn: "Design System Global",
//       image: "/images/newversion/LES_BAMBINETS/design-system1.avif",
//     },
//     {
//       textBtn: "Composants Mobiles",
//       image: "/images/newversion/LES_BAMBINETS/mobile-components.avif",
//     },
//     {
//       textBtn: "Composants Divers",
//       image: "/images/newversion/LES_BAMBINETS/components.avif",
//     },
//   ];

//   // État pour la sélection du Design System
//   const [designSelected, setDesignSelected] = useState(0);

//   // --- Données pour la section 'Prototype et Flux Utilisateur' (Wireframes et Écrans) ---
//   const appStructure = [
//     {
//       textBtn: "Écran d'Accueil",
//       image: "/images/newversion/LES_BAMBINETS/proto-home-connexion.avif",
//     },
//     {
//       textBtn: "Début du Quiz",
//       image: "/images/newversion/LES_BAMBINETS/proto-quiz1.avif",
//     },
//     {
//       textBtn: "Question de Quiz",
//       image: "/images/newversion/LES_BAMBINETS/proto-quiz2.avif",
//     },
//     {
//       textBtn: "Fin du Quiz",
//       image: "/images/newversion/LES_BAMBINETS/proto-quiz3.avif",
//     },
//     {
//       textBtn: "Liste du Glossaire",
//       image: "/images/newversion/LES_BAMBINETS/proto-glossaire.avif",
//     },
//     {
//       textBtn: "FAQ et Favoris",
//       image: "/images/newversion/LES_BAMBINETS/proto-faq-favs-settings.avif",
//     },
//   ];

//   // État pour la sélection des étapes/écrans
//   const [screenSelected, setScreenSelected] = useState(0);

//   return (
//     <div className="bg-neutral-50 mt-4 flex flex-col gap-16 px-4 py-8 rounded-2xl border border-neutral-200">
//       {/* --- Section 1: Présentation du Projet --- */}
//       <div className="flex flex-col gap-6">
//         <div className="flex flex-col gap-1 project-text-container">
//           <div className="flex items-center gap-3 mb-2">
//             <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2 py-1 rounded uppercase">
//               Projet académique
//             </span>
//             <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded uppercase">
//               UX / UI
//             </span>
//           </div>
//           <h2 className="text-3xl mb-1 font-medium">
//             Les Bambinets : Langue des Signes avec Bébé
//           </h2>
//           <p>
//             Conception et développement d'une application mobile dédiée aux
//             professionnels de la petite enfance et aux parents pour faciliter la
//             communication précoce grâce au langage des signes pour bébé.
//             L'objectif est de donner aux adultes les outils nécessaires pour
//             mieux comprendre et interagir avec les enfants avant l'acquisition
//             du langage verbal structuré (2-3 ans).
//           </p>
//         </div>
//         <div className="mt-2 md:mt-0 md:p-4 rounded-xl bg-neutral-100">
//           <Image
//             src="/images/newversion/LES_BAMBINETS/illustration.avif"
//             width={760}
//             height={760}
//             alt="Illustration principale de l'application Les Bambinets"
//           />
//         </div>
//       </div>

//       {/* --- Section 2: Fonctionnalités Clés et UX (Wireframes) --- */}
//       <div className="flex flex-col gap-2">
//         <div className="flex flex-col gap-1 project-text-container">
//           <h2 className="text-3xl mb-1 font-medium">
//             Fonctionnalités et Expérience d'Apprentissage
//           </h2>
//           <p>
//             L'architecture de l'application est pensée pour une consultation
//             rapide et un apprentissage efficace, en mettant la vidéo au cœur de
//             chaque interaction pour illustrer les gestes. Nous mettons en place
//             un <strong>Glossaire vidéo</strong> (20 mots de base, tirés de
//             Sophie D’olce), des outils de validation (quiz) et une FAQ.
//           </p>
//           <div className="flex flex-wrap items-center gap-2 mt-6">
//             {uxFeatures &&
//               uxFeatures.map((item: any, i: any) => (
//                 <div
//                   key={i}
//                   onClick={() => setFeatureSelected(i)}
//                   className={`flex items-center duration-150 cursor-pointer gap-2 text-sm border border-neutral-200 p-2 rounded-3xl ${
//                     featureSelected === i
//                       ? "bg-blue-600 text-neutral-50 hover:brightness-105"
//                       : "bg-neutral-100 hover:brightness-95"
//                   }`}
//                 >
//                   <span>{item.textBtn}</span>
//                 </div>
//               ))}
//           </div>
//         </div>
//         <div className="mt-2 md:mt-0 md:p-4 rounded-xl bg-neutral-100">
//           <Image
//             src={uxFeatures[featureSelected].image}
//             width={760}
//             height={760}
//             alt={`Wireframe de la fonctionnalité : ${uxFeatures[featureSelected].textBtn}`}
//           />
//         </div>

//         <div className="project-text-container mt-6">
//           <h3 className="text-xl font-medium mt-4">Spécifications Clés :</h3>
//           <ul className="list-disc list-inside space-y-2 mt-2">
//             <li>
//               <strong>Glossaire :</strong> 20 mots signés (évolutif), tri
//               alphabétique et
//               <strong>filtrage par catégorie</strong> (Essentiel, Émotions,
//               Loisirs, Nature...).
//             </li>
//             <li>
//               <strong>Contenu Média :</strong> Chaque signe est illustré par une
//               <strong>vidéo</strong> de démonstration.
//             </li>
//             <li>
//               <strong>Fonction Favoris :</strong> Ajout rapide à une
//               bibliothèque personnalisée (via icône "Cœur") pour identifier les
//               signes les plus utilisés.
//             </li>
//             <li>
//               <strong>Quiz :</strong> Microquiz basés sur la reconnaissance des
//               signes présentés en vidéo pour valider les acquis.
//             </li>
//             <li>
//               <strong>FAQ :</strong> Réponses aux questions fréquentes sur
//               l'utilisation des signes avec les tout-petits.
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* --- Section 3: Design System et Composants --- */}
//       <div className="flex flex-col gap-2">
//         <div className="flex flex-col gap-1 project-text-container">
//           <h2 className="text-3xl mb-1 font-medium">
//             Design System et Composants
//           </h2>
//           <p>
//             Présentation du système de design (couleurs, typographie, icônes) et
//             des composants réutilisables qui garantissent la cohérence et
//             l'évolutivité de l'interface mobile.
//           </p>
//           <div className="flex flex-wrap items-center gap-2 mt-6">
//             {designSystem &&
//               designSystem.map((item: any, i: any) => (
//                 <div
//                   key={i}
//                   onClick={() => setDesignSelected(i)}
//                   className={`flex items-center cursor-pointer gap-2 text-sm border border-neutral-200 p-2 rounded-3xl ${
//                     designSelected === i
//                       ? "bg-blue-600 text-neutral-50 hover:brightness-105"
//                       : "bg-neutral-100 hover:brightness-95"
//                   }`}
//                 >
//                   <span>{item.textBtn}</span>
//                 </div>
//               ))}
//           </div>
//         </div>
//         <div className="mt-2 md:mt-0 md:p-4 rounded-xl bg-neutral-100">
//           <Image
//             src={designSystem[designSelected].image}
//             width={760}
//             height={760}
//             alt={`Aperçu du Design System : ${designSystem[designSelected].textBtn}`}
//           />
//         </div>
//       </div>

//       {/* --- Section 4: Prototype et Flux Utilisateur --- */}
//       <div className="flex flex-col gap-2">
//         <div className="flex flex-col gap-1 project-text-container">
//           <h2 className="text-3xl mb-1 font-medium">
//             Prototype et Flux Utilisateur
//           </h2>
//           <p>
//             Parcours de l'utilisateur à travers les écrans clés, de l'accueil
//             aux différentes sections (Quiz, Glossaire, FAQ).
//           </p>
//           <div className="flex flex-wrap items-center gap-2 mt-6">
//             {appStructure &&
//               appStructure.map((item: any, i: any) => (
//                 <div
//                   key={i}
//                   onClick={() => setScreenSelected(i)}
//                   className={`flex items-center cursor-pointer gap-2 text-sm border border-neutral-200 p-2 rounded-3xl ${
//                     screenSelected === i
//                       ? "bg-blue-600 text-neutral-50 hover:brightness-105"
//                       : "bg-neutral-100 hover:brightness-95"
//                   }`}
//                 >
//                   <span>{item.textBtn}</span>
//                 </div>
//               ))}
//           </div>
//         </div>
//         <div className="mt-2 md:mt-0 md:p-4 rounded-xl bg-neutral-100">
//           <Image
//             src={appStructure[screenSelected].image}
//             width={760}
//             height={760}
//             alt={`Maquette du Prototype : ${appStructure[screenSelected].textBtn}`}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// import ProjectLayout from "./ProjectLayout";

export default function ProjectBambinets() {
  const UX_FEATURES = [
    {
      textBtn: "Wireframe Glossaire",
      image: "/images/newversion/LES_BAMBINETS/wireframes1.avif",
    },
    {
      textBtn: "Wireframe Quiz",
      image: "/images/newversion/LES_BAMBINETS/wireframes2.avif",
    },
    {
      textBtn: "Arborescence Quiz",
      image: "/images/newversion/LES_BAMBINETS/proto-quiz1.avif",
    },
  ];

  const UI_DESIGN_SYSTEM = [
    {
      textBtn: "Design System Global",
      image: "/images/newversion/LES_BAMBINETS/design-system1.avif",
    },
    {
      textBtn: "Composants Mobiles",
      image: "/images/newversion/LES_BAMBINETS/mobile-components.avif",
    },
  ];

  const RESULTS_DATA = [
    {
      textBtn: "Écran d'Accueil",
      image: "/images/newversion/LES_BAMBINETS/proto-home-connexion.avif",
    },
    {
      textBtn: "Glossaire Final",
      image: "/images/newversion/LES_BAMBINETS/proto-glossaire.avif",
    },
    {
      textBtn: "Interface Quiz",
      image: "/images/newversion/LES_BAMBINETS/proto-quiz2.avif",
    },
  ];

  return (
    <ProjectLayout
      badgeStatus="Projet Académique"
      badgeRoles="UX / UI Designer"
      title="Les Bambinets — Communication Signée"
      personas={[
        {
          name: "Julie",
          role: "Professionnelle de la petite enfance",
          goal: "Instaurer des rituels de communication signée au sein de sa structure (crèche/mam).",
          painPoint:
            "A besoin d'un outil de référence rapide et visuel pour vérifier un signe entre deux activités sans perdre le fil de sa journée.",
        },
        {
          name: "Léa",
          role: "Maman d'un enfant de 10 mois",
          goal: "Comprendre les besoins de son bébé (faim, sommeil, change) avant qu'il ne puisse parler.",
          painPoint:
            "Est fatiguée par les pleurs qu'elle ne comprend pas toujours. Cherche une méthode d'apprentissage ludique et décomplexée.",
        },
        {
          name: "Antoine",
          role: "Proche de la famille (Oncle/Grand-parent)",
          goal: "Apprendre quelques signes de base pour interagir et créer un lien privilégié avec son neveu.",
          painPoint:
            "Trouve les formations classiques trop longues ou académiques. Veut un glossaire simple pour apprendre 5 à 10 signes essentiels.",
        },
      ]}
      problematic={{
        title:
          "Comment faciliter la communication avec les enfants avant l'acquisition du langage ?",
        mainImage: "/images/newversion/LES_BAMBINETS/illustration.avif",
        description: (
          <div className="flex flex-col gap-4">
            <p>
              Les enfants entre 0 et 3 ans ont des besoins qu'ils ne peuvent pas
              encore exprimer verbalement, ce qui génère souvent de la
              frustration.
            </p>
            <p>
              L'objectif était de concevoir une application mobile pour les
              parents et professionnels de la petite enfance, rendant
              l'apprentissage de la{" "}
              <strong>Langue des Signes pour Bébé (LSB)</strong> ludique, rapide
              et accessible au quotidien.
            </p>
          </div>
        ),
      }}
      realization={{
        title: "De la stratégie d'apprentissage au Design System",
        description: (
          <div className="flex flex-col gap-4">
            <p>
              L'architecture a été pensée pour une consultation{" "}
              <strong>"mains libres"</strong> et rapide. J'ai placé la vidéo au
              cœur de l'expérience avec un glossaire filtrable par catégories
              (Émotions, Besoins, Nature).
            </p>
            <p>
              J'ai conçu un <strong>Design System</strong> aux tons doux et
              rassurants, adapté à l'univers de la petite enfance, tout en
              garantissant une ergonomie mobile optimale pour une utilisation
              d'une seule main. Le parcours inclut des{" "}
              <strong>quiz interactifs</strong> pour valider la mémorisation des
              signes.
            </p>
          </div>
        ),
        uxAssets: UX_FEATURES,
        uiAssets: UI_DESIGN_SYSTEM,
        resultsAssets: RESULTS_DATA,
      }}
      results={{
        title: "Pédagogie & Ergonomie Mobile",
        items: [
          {
            title: "Apprentissage Ludique",
            description:
              "Système de Quiz et de favoris pour encourager une pratique régulière des signes.",
          },
          {
            title: "Accessibilité Vidéo",
            description:
              "Contenu média centralisé permettant une reproduction fidèle des gestes.",
          },
          {
            title: "Cohérence Visuelle",
            description:
              "Création d'une bibliothèque de composants réutilisables pour une interface homogène.",
          },
          {
            title: "Navigation Intuitive",
            description:
              "Filtrage par thématiques permettant de trouver un signe en moins de 5 secondes.",
          },
        ],
      }}
    />
  );
}
