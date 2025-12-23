// import Image from "next/image";
// import React, { useState } from "react";

import ProjectLayout from "@/components/ProjectLayout";

// export default function ProjectPlateformeSaas() {
//   const previous = [
//     {
//       textBtn: "Admin tableau",
//       image:
//         "/images/newversion/INTHEAIRLABS/previous-admin-projects-blur.avif",
//     },
//     {
//       textBtn: "Admin form",
//       image:
//         "/images/newversion/INTHEAIRLABS/previous-admin-create-project.avif",
//     },
//     {
//       textBtn: "Projets",
//       image: "/images/newversion/INTHEAIRLABS/italabs-client-previous-1.avif",
//     },
//     {
//       textBtn: "Compte",
//       image: "/images/newversion/INTHEAIRLABS/italabs-client-previous-2.avif",
//     },
//     {
//       textBtn: "Model 3D",
//       image: "/images/newversion/INTHEAIRLABS/italabs-client-previous-3.avif",
//     },
//   ];

//   const [previousSelected, setPreviousSelected] = useState(0);

//   const after = [
//     {
//       textBtn: "Conception UI Figma",
//       image: "/images/newversion/INTHEAIRLABS/figma-designs.webp",
//     },
//     {
//       textBtn: "Présentation nouveau design",
//       image: "/images/newversion/INTHEAIRLABS/figma-validation.webp",
//     },
//     {
//       textBtn: "Admin tableau",
//       image: "/images/newversion/INTHEAIRLABS/companies-table.avif",
//     },
//     {
//       textBtn: "Admin form",
//       image: "/images/newversion/INTHEAIRLABS/client-form.avif",
//     },
//     {
//       textBtn: "Projets",
//       image: "/images/newversion/INTHEAIRLABS/intheairlabs-dashboard.avif",
//     },
//     {
//       textBtn: "Compte",
//       image: "/images/newversion/INTHEAIRLABS/account.avif",
//     },
//     {
//       textBtn: "Model 3D",
//       image: "/images/newversion/INTHEAIRLABS/3dmodel.avif",
//     },
//   ];

//   const [afterSelected, setAfterSelected] = useState(0);

//   return (
//     <div className="bg-neutral-50 mt-4 flex flex-col gap-16 px-4 py-8 rounded-2xl border border-neutral-200">
//       <div className="flex flex-col gap-6">
//         <div className="flex flex-col gap-1 project-text-container">
//           <div className="flex items-center gap-3 mb-2">
//             <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2 py-1 rounded uppercase">
//               Projet professionel
//             </span>
//             <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded uppercase">
//               UX / UI / Frontend
//             </span>
//           </div>
//           <h2 className="text-3xl mb-1 font-medium">IntheairLabs</h2>
//           <p>
//             IntheairLabs est une plateforme web collaborative dédiée à la
//             gestion de projets et au partage de livrables. Actuellement orientée
//             B2B, elle permet aux clients de suivre l'avancement de leurs
//             projets, télécharger leurs fichiers et visualiser leurs contenus
//             directement depuis l'interface. <br />
//             <br />
//             La plateforme propose deux environnements distincts : un espace
//             administrateur pour la gestion des projets et un espace client pour
//             le suivi et l'accès aux ressources. <br />
//           </p>
//         </div>
//         <div className="mt-2 md:mt-0 md:p-4 rounded-xl bg-neutral-100">
//           <Image
//             src="/images/newversion/INTHEAIRLABS/intheairlabs-login2.avif"
//             width={760}
//             height={760}
//             alt=""
//             className="rounded-lg"
//           />
//         </div>
//       </div>
//       <div className="flex flex-col gap-2">
//         <div className="flex flex-col gap-1 project-text-container">
//           <h2 className="text-3xl mb-1 font-medium">
//             Ancienne version de la plateforme
//           </h2>
//           <p>
//             Cette première version proposait deux espaces distincts : un tableau
//             de bord administrateur pour gérer tous les projets, clients et
//             entreprises, et un espace client permettant de visualiser les
//             projets, accéder aux livrables, consulter les modélisations 3D et
//             gérer son compte personnel.
//           </p>
//           <div className="flex flex-wrap items-center gap-2 mt-6">
//             {previous &&
//               previous.map((item: any, i: any) => (
//                 <div
//                   key={i}
//                   onClick={() => setPreviousSelected(i)}
//                   className={`flex items-center duration-150 cursor-pointer gap-2 text-sm border border-neutral-200 p-2 rounded-3xl ${
//                     previousSelected === i
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
//             src={previous[previousSelected].image}
//             width={760}
//             height={760}
//             alt=""
//             className="rounded-lg"
//           />
//         </div>
//       </div>
//       <div className="flex flex-col gap-2">
//         <div className="flex flex-col gap-1 project-text-container">
//           <h2 className="text-3xl mb-1 font-medium">
//             Nouvelle version de la plateforme
//           </h2>
//           <p>
//             Cette version conserve l'ensemble des fonctionnalités existantes
//             tout en bénéficiant d'une refonte graphique complète. Le design a
//             été entièrement repensé avec une nouvelle charte graphique moderne,
//             offrant une expérience utilisateur améliorée.
//           </p>
//           <div className="flex flex-wrap items-center gap-2 mt-6">
//             {after &&
//               after.map((item: any, i: any) => (
//                 <div
//                   key={i}
//                   onClick={() => setAfterSelected(i)}
//                   className={`flex items-center duration-150 cursor-pointer gap-2 text-sm border border-neutral-200 p-2 rounded-3xl ${
//                     afterSelected === i
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
//             src={after[afterSelected].image}
//             width={760}
//             height={760}
//             alt=""
//             className="rounded-lg"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

export default function ProjectPlateformeSaas() {
  const PREVIOUS_DATA = [
    {
      textBtn: "Dashboard Admin (Ancien)",
      image:
        "/images/newversion/INTHEAIRLABS/previous-admin-projects-blur.avif",
    },
    {
      textBtn: "Formulaire (Ancien)",
      image:
        "/images/newversion/INTHEAIRLABS/previous-admin-create-project.avif",
    },
    {
      textBtn: "Vue Projets (Ancien)",
      image: "/images/newversion/INTHEAIRLABS/italabs-client-previous-1.avif",
    },
    {
      textBtn: "Visualisation 3D (Ancienne)",
      image: "/images/newversion/INTHEAIRLABS/italabs-client-previous-3.avif",
    },
  ];

  const NEW_UI_DATA = [
    {
      textBtn: "Design Figma",
      image: "/images/newversion/INTHEAIRLABS/figma-designs.webp",
    },
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
    <ProjectLayout
      badgeStatus="Projet Professionnel"
      badgeRoles="UX / UI / Frontend"
      title="IntheairLabs - Plateforme SaaS Collaborative"
      personas={[
        {
          name: "Marc",
          role: "Responsable Opérationnel",
          goal: "Centraliser les livrables de 50 chantiers annuels pour ses clients.",
          painPoint:
            "Perd un temps immense à chercher les derniers modèles 3D dans des chaînes d'emails interminables.",
        },
        {
          name: "Sophie",
          role: "Client B2B (Investisseur)",
          goal: "Visualiser l'avancement concret de son projet sans installer de logiciel technique.",
          painPoint:
            "Se sent dépassée par les outils trop complexes et veut une interface claire et accessible.",
        },
      ]}
      problematic={{
        title:
          "Comment simplifier la gestion de livrables complexes dans un environnement B2B ?",
        mainImage: "/images/newversion/INTHEAIRLABS/intheairlabs-login2.avif",
        description: (
          <div className="flex flex-col gap-4">
            <p>
              IntheairLabs est un outil critique pour la collaboration entre
              l'entreprise et ses clients B2B. L'ancienne interface souffrait
              d'une <strong>dette de design</strong> importante, rendant la
              navigation laborieuse et la gestion des fichiers peu intuitive.
            </p>
            <p>
              L'enjeu était de transformer cet outil technique en une plateforme
              moderne, capable de supporter des{" "}
              <strong>modélisations 3D</strong> tout en offrant un espace
              administrateur performant pour la gestion quotidienne.
            </p>
          </div>
        ),
      }}
      realization={{
        title: "Audit, Test Utilisateurs et Refonte Graphique",
        description: (
          <div className="flex flex-col gap-4">
            <p>
              Mon approche a été centrée sur l'utilisateur : j'ai réalisé un{" "}
              <strong>audit complet</strong> de l'application et mené des{" "}
              <strong>entretiens avec les équipes internes</strong> pour lister
              les points de friction majeurs.
            </p>
            <p>
              J'ai mis en place des{" "}
              <strong>sessions de tests utilisateurs</strong> itératifs avec les
              équipes métiers pour valider chaque nouvelle vue sur Figma avant
              la phase de développement. Cette collaboration étroite a permis de
              corriger les problèmes d'ergonomie sur les formulaires complexes
              et les tableaux de données.
            </p>
          </div>
        ),
        uxAssets: PREVIOUS_DATA,
        uiAssets: NEW_UI_DATA,
      }}
      results={{
        title: "Efficacité & Expérience Client",
        items: [
          {
            title: "Réduction de la charge cognitive",
            description:
              "Une hiérarchie de l'information clarifiée permettant aux clients de trouver leurs livrables 2x plus vite.",
          },
          {
            title: "Validation métier à 100%",
            description:
              "L'interface a été co-construite avec les utilisateurs finaux, garantissant une adoption immédiate.",
          },
          {
            title: "Interface Admin Optimisée",
            description:
              "Les formulaires de création de projets ont été simplifiés pour réduire les erreurs de saisie.",
          },
          {
            title: "Modernisation Technologique",
            description:
              "Une refonte visuelle qui aligne la plateforme avec les standards actuels des outils SaaS B2B.",
          },
        ],
      }}
    />
  );
}
