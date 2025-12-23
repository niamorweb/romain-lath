// import Image from "next/image";
// import React, { useState } from "react";

import ProjectLayout from "@/components/ProjectLayout";

// export default function ProjectCayo() {
//   const methodesChiffrement = [
//     {
//       textBtn: "Table Profiles",
//       image: "/images/newversion/CAYO/supabase-profiles.avif",
//     },
//     {
//       textBtn: "Table Passwords",
//       image: "/images/newversion/CAYO/supabase-passwords.avif",
//     },
//   ];

//   const [chiffrementSelected, setChiffrementSelected] = useState(0);

//   const interfaces = [
//     {
//       textBtn: "Tableau de bord",
//       image: "/images/newversion/CAYO/dashboard.avif",
//     },
//     {
//       textBtn: "Création d'identifiant",
//       image: "/images/newversion/CAYO/create-pw.avif",
//     },
//     {
//       textBtn: "Gestion d'organisations",
//       image: "/images/newversion/CAYO/orgs.avif",
//     },
//   ];

//   const [interfaceSelected, setInterfaceSelected] = useState(0);

//   return (
//     <div className="bg-neutral-50 mt-4 flex flex-col gap-16 px-4 py-8 rounded-2xl border border-neutral-200">
//       <div className="flex flex-col gap-6">
//         <div className="flex flex-col gap-1 project-text-container">
//           <div className="flex items-center gap-3 mb-2">
//             <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2 py-1 rounded uppercase">
//               Projet personnel
//             </span>
//             <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded uppercase">
//               UX / UI / Fullstack
//             </span>
//           </div>
//           <h2 className="text-3xl mb-1 font-medium">Cayo (Version bêta)</h2>
//           <p>
//             Cayo est une application de gestion de mots de passe collaborative
//             dotée d'un chiffrement de bout en bout, permettant aux équipes de
//             partager leurs identifiants en toute sécurité.
//           </p>
//         </div>
//         <div className="mt-2 md:mt-0 md:p-4 rounded-xl bg-neutral-100">
//           <Image
//             src="/images/newversion/CAYO/hp.avif"
//             width={760}
//             height={760}
//             alt=""
//           />
//         </div>
//       </div>
//       <div className="flex flex-col gap-2">
//         <div className="flex flex-col gap-1 project-text-container">
//           <h2 className="text-3xl mb-1 font-medium">
//             Les méthodes de chiffrement
//           </h2>
//           <p>
//             Cayo implémente une architecture de chiffrement hybride robuste pour
//             garantir la confidentialité des données. Chaque utilisateur dispose
//             d'une clé AES unique, sécurisée par un chiffrement utilisant un
//             vecteur d'initialisation (IV), un salt cryptographique et le mot de
//             passe maître de l'utilisateur. <br />
//             <br />
//             Pour la gestion collaborative des groupes, l'application utilise un
//             système de chiffrement RSA à clés asymétriques : chaque utilisateur
//             possède une paire de clés (privée/publique). Cette architecture
//             permet aux propriétaires de groupes de partager en toute sécurité la
//             clé AES du groupe avec de nouveaux membres en la chiffrant
//             directement avec leur clé publique RSA. <br />
//             <br />
//             Cette double approche garantit que les données restent inaccessibles
//             même aux serveurs de l'application, seuls les utilisateurs autorisés
//             pouvant déchiffrer les informations avec leurs clés personnelles.
//           </p>
//           <div className="flex flex-wrap items-center gap-2 mt-6">
//             {methodesChiffrement &&
//               methodesChiffrement.map((item: any, i: any) => (
//                 <div
//                   key={i}
//                   onClick={() => setChiffrementSelected(i)}
//                   className={`flex items-center duration-150 cursor-pointer gap-2 text-sm border border-neutral-200 p-2 rounded-3xl ${
//                     chiffrementSelected === i
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
//             src={methodesChiffrement[chiffrementSelected].image}
//             width={760}
//             height={760}
//             alt=""
//           />
//         </div>
//       </div>
//       <div className="flex flex-col gap-2">
//         <div className="flex flex-col gap-1 project-text-container">
//           <h2 className="text-3xl mb-1 font-medium">L'interface dans l'app</h2>
//           <p>
//             Interface sobre et fonctionnelle regroupant l'essentiel : ajout de
//             mots de passe, gestion des groupes collaboratifs, et générateur de
//             mots de passe sécurisés.
//           </p>
//           <div className="flex flex-wrap items-center gap-2 mt-6">
//             {interfaces &&
//               interfaces.map((item: any, i: any) => (
//                 <div
//                   key={i}
//                   onClick={() => setInterfaceSelected(i)}
//                   className={`flex items-center cursor-pointer gap-2 text-sm border border-neutral-200 p-2 rounded-3xl ${
//                     interfaceSelected === i
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
//             src={interfaces[interfaceSelected].image}
//             width={760}
//             height={760}
//             alt=""
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

export default function ProjectCayo() {
  const CRYPTO_DATA = [
    {
      textBtn: "Structure Profils (Supabase)",
      image: "/images/newversion/CAYO/supabase-profiles.avif",
    },
    {
      textBtn: "Stockage Chiffré",
      image: "/images/newversion/CAYO/supabase-passwords.avif",
    },
  ];

  const UI_DATA = [
    {
      textBtn: "Tableau de bord",
      image: "/images/newversion/CAYO/dashboard.avif",
    },
    {
      textBtn: "Création d'identifiant",
      image: "/images/newversion/CAYO/create-pw.avif",
    },
    {
      textBtn: "Gestion d'organisations",
      image: "/images/newversion/CAYO/orgs.avif",
    },
    { textBtn: "Aperçu Landing", image: "/images/newversion/CAYO/hp.avif" },
  ];

  const RESULTS_DATA = [
    {
      textBtn: "Tableau de bord",
      image: "/images/newversion/CAYO/dashboard.avif",
    },
    {
      textBtn: "Création d'identifiant",
      image: "/images/newversion/CAYO/create-pw.avif",
    },
    {
      textBtn: "Gestion d'organisations",
      image: "/images/newversion/CAYO/orgs.avif",
    },
    { textBtn: "Aperçu Landing", image: "/images/newversion/CAYO/hp.avif" },
  ];

  return (
    <ProjectLayout
      badgeStatus="Projet Personnel"
      badgeRoles="UX / UI / Fullstack"
      competitiveAnalysisCcl="Face aux outils payants et surchargés, l'opportunité était de proposer un minimalisme collaboratif. Cayo rend la sécurité accessible en se concentrant sur le partage de groupe, gratuitement et sans fioritures."
      competitiveAnalysis={[
        {
          competitor: "Google Password Manager / iCloud",
          strength: "Gratuit et intégré nativement au système.",
          weakness:
            "Le partage de mots de passe en groupe (famille ou petite équipe) est limité, complexe ou peu sécurisé.",
        },
        {
          competitor: "1Password / Dashlane",
          strength: "Fonctionnalités de partage très avancées.",
          weakness:
            "Modèle économique par abonnement coûteux. Les fonctions de groupe sont souvent bloquées derrière un paywall élevé.",
        },
        {
          competitor: "Bitwarden",
          strength: "Possibilité de partage gratuit (Open Source).",
          weakness:
            "L'ergonomie des 'Organisations' et des 'Collections' est complexe pour un utilisateur qui veut juste partager un code Netflix ou une clé API en 2 clics.",
        },
      ]}
      personas={[
        {
          name: "Thomas",
          role: "Le Colocataire Organisé",
          goal: "Partager les codes Wi-Fi et les comptes de factures (EDF, Netflix) avec ses 3 colocataires.",
          painPoint:
            "Utilise WhatsApp pour copier-coller des mots de passe en clair. Refuse de payer un abonnement 'Famille' pour un usage domestique.",
        },
        {
          name: "Sarah",
          role: "La Freelance Multi-Projets",
          goal: "Donner un accès temporaire à des outils (CMS, réseaux sociaux) à des partenaires externes.",
          painPoint:
            "Les outils pros sont trop complexes pour des collaborateurs ponctuels. Veut une solution où le partage de groupe se fait en 2 clics.",
        },
        {
          name: "Marc",
          role: "Le Référent Numérique Familial",
          goal: "Sécuriser les comptes de ses parents âgés et pouvoir intervenir en cas d'oubli.",
          painPoint:
            "Ses parents sont perdus face aux interfaces denses type Bitwarden. Il a besoin d'une UX ultra-dépouillée pour éviter les erreurs.",
        },
      ]}
      title="Cayo — Gestionnaire de mots de passe"
      problematic={{
        title:
          "Comment offrir un partage de mots de passe en groupe ultra-sécurisé tout en restant simple et gratuit ?",
        mainImage: "/images/newversion/CAYO/hp.avif",
        description: (
          <div className="flex flex-col gap-4">
            <p>
              La plupart des outils de gestion de mots de passe grand public
              manquent d'accessibilité pour les personnes non-techs, et peu de
              services proposent des plans gratuit pour coffres en groupe, et
              les outils pro qui les proposent sont souvent trop complexes et
              cher pour des personnes qui n'accordent pas une grande importance
              à la sécurité.
            </p>
            <p>
              L'enjeu de <strong>Cayo</strong> est de construire une application
              "Zero-Knowledge" : un système où même les serveurs n'ont jamais
              accès aux données en clair, tout en permettant un partage fluide
              des accès en groupe via une interface web intuitive.
            </p>
          </div>
        ),
      }}
      realization={{
        title: "Architecture de Chiffrement Hybride & UX Minimaliste",
        description: (
          <div className="flex flex-col gap-4">
            <p>
              Le cœur du projet repose sur une{" "}
              <strong>architecture hybride AES/RSA</strong>. J'ai implémenté un
              système où chaque utilisateur possède son propre couple de clés
              asymétriques, permettant de partager des clés de coffre-fort (AES)
              de manière sécurisée sans jamais transmettre le mot de passe
              maître.
            </p>

            <p>
              Côté <strong>Frontend</strong>, le défi était de masquer cette
              complexité technique derrière une interface sobre. J'ai utilisé{" "}
              <strong>Supabase</strong> pour la gestion de la base de données et
              l'authentification, en veillant à ce que chaque transaction de
              donnée soit chiffrée côté client avant l'envoi.
            </p>
          </div>
        ),
        uxAssets: CRYPTO_DATA,
        uiAssets: UI_DATA,
        resultsAssets: RESULTS_DATA,
      }}
      results={{
        title: "Sécurité & Accessibilité",
        items: [
          {
            title: "Architecture Zero-Knowledge",
            description:
              "Confidentialité totale : les données sont inaccessibles aux serveurs de l'application.",
          },
          {
            title: "Partage Sécurisé",
            description:
              "Implémentation réussie du chiffrement asymétrique pour la gestion de groupes collaboratifs.",
          },
          {
            title: "Interface Fonctionnelle",
            description:
              "Un dashboard épuré qui permet une gestion rapide des identifiants au quotidien.",
          },
          {
            title: "Stack Moderne",
            description:
              "Utilisation de Supabase pour une synchronisation en temps réel et une sécurité robuste.",
          },
        ],
      }}
    />
  );
}
