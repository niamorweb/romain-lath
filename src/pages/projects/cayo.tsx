// import Image from "next/image";
// import React, { useState } from "react";

import ProjectHeader from "@/components/ProjectHeader";
import ProjectLayout from "@/components/ProjectLayout";
import ProjectLayoutGlobal from "@/components/ProjectLayoutGlobal";
import ProjectSection from "@/components/ProjectSection";
import Separator from "@/components/Separator";
import Image from "next/image";

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
      icon: "/images/icons/javascript.svg",
    },
    {
      label: "Next.js",
      icon: "/images/icons/nextjs.svg",
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

  const CRYPTO_DATA = [
    {
      textBtn: "Analyse concurrentielle",
      image: "/images/newversion/CAYO/analyse-concurrentielle.webp",
    },
    {
      textBtn: "Personas",
      image: "/images/newversion/CAYO/personas.webp",
    },
  ];

  const UI_DATA = [
    {
      textBtn: "Chiffrement Inscription",
      image: "/images/newversion/CAYO/crypto-process-signup.webp",
    },
    {
      textBtn: "Chiffrement Création groupe",
      image: "/images/newversion/CAYO/crypto-process-group-creation.webp",
    },
    {
      textBtn: "Chiffrement Invitation Groupe",
      image: "/images/newversion/CAYO/crypto-process-group-invitation.webp",
    },
    {
      textBtn: "Flowchart",
      image: "/images/newversion/CAYO/flowchart.webp",
    },
    {
      textBtn: "Wireframes",
      image: "/images/newversion/CAYO/wireframes-samples.webp",
    },
    {
      textBtn: "Design system",
      image: "/images/newversion/CAYO/design-system.webp",
    },
    {
      textBtn: "Maquette figma dashboard",
      image: "/images/newversion/CAYO/figma-design.webp",
    },
  ];

  const RESULTS_DATA = [
    {
      textBtn: "Store via Zudstand",
      image: "/images/newversion/CAYO/code-store.webp",
    },
    {
      textBtn: "Chiffrement",
      image: "/images/newversion/CAYO/code-encryption.webp",
    },
    {
      textBtn: "Route Next.js",
      image: "/images/newversion/CAYO/code-route.webp",
    },
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
    {
      textBtn: "Stockage Chiffré",
      image: "/images/newversion/CAYO/supabase-passwords.avif",
    },
    {
      textBtn: "Structure Profils (BDD)",
      image: "/images/newversion/CAYO/supabase-profiles.avif",
    },
  ];

  return (
    <ProjectLayoutGlobal>
      <ProjectHeader
        badgeStatus="Projet Personnel"
        badgeRoles={["UX/UI Designer", "Développeur Frontend"]}
        title="Cayo - Un gestionnaire de mots de passe axé sur les groupes"
        websiteUrl="https://cayo-zeta.vercel.app"
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
              Le marché des gestionnaires de mots de passe est saturé d'outils
              souvent complexes ou peu esthétiques. Partant du constat que le{" "}
              <strong>partage sécurisé au sein d'un groupe</strong> (famille,
              amis, micro-entreprise) est souvent une option payante ou mal
              conçue, j'ai créé <strong>Cayo</strong>.
            </p>
            <p>
              L'objectif était de concevoir une application où la{" "}
              <strong>sécurité de haut niveau</strong> ne sacrifie jamais la
              simplicité d'utilisation, en plaçant le partage collaboratif au
              cœur de l'expérience.
            </p>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-xl border border-neutral-200 bg-white p-2">
          <Image
            src="/images/newversion/CAYO/hp.avif"
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
          <div className="text-neutral-600 text-balance leading-relaxed flex flex-col gap-3">
            <p>
              Le marché des gestionnaires de mots de passe est saturé d'outils
              souvent complexes ou peu esthétiques. Partant du constat que le{" "}
              <strong>partage sécurisé au sein d'un groupe</strong> (famille,
              amis, micro-entreprise) est souvent une option payante ou mal
              conçue, j'ai créé <strong>Cayo</strong>.
            </p>
            <p>
              L'objectif était de concevoir une application où la{" "}
              <strong>sécurité de haut niveau</strong> ne sacrifie jamais la
              simplicité d'utilisation, en plaçant le partage collaboratif au
              cœur de l'expérience.
            </p>
          </div>
        }
        imgArray={CRYPTO_DATA}
      />
      <Separator />
      <ProjectSection
        subtitle="2"
        title="Conception de l'application"
        description={
          <div className="flex flex-col gap-4">
            <p>
              Le défi majeur a été de vulgariser une{" "}
              <strong>logique de chiffrement complexe</strong> en une interface
              intuitive.
            </p>
            <ul className="list-disc ml-5 space-y-2">
              <li>
                <strong>User Flow :</strong> Modélisation des parcours
                d'invitation et d'échange de clés de sécurité entre membres d'un
                groupe sans friction apparente.
              </li>
              <li>
                <strong>Prototypage :</strong> Création de wireframes basse
                fidélité pour tester la clarté de la hiérarchie de
                l'information.
              </li>
              <li>
                <strong>Design System :</strong> Mise en place d'une identité
                visuelle rassurante et moderne sur Figma, déclinée en composants
                réutilisables.
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
          <div className="flex flex-col gap-4">
            <p>
              Pour répondre aux exigences d'un coffre-fort numérique, j'ai
              architecturé une stack
              <strong> "Bleeding Edge"</strong> alliant sécurité bancaire et
              fluidité applicative :
            </p>
            <ul className="list-disc ml-5 space-y-2">
              <li>
                <strong>Sécurité Zero-Knowledge :</strong> Mise en œuvre d'une
                cryptographie hybride (AES-256-CBC & RSA) avec dérivation de clé{" "}
                <strong>PBKDF2</strong>. Le déchiffrement s'opère exclusivement
                en mémoire vive côté client, garantissant que le serveur ne voit
                que des fragments chiffrés.
              </li>
              <li>
                <strong>Design System sur mesure :</strong> Utilisation de{" "}
                <strong>Shadcn/UI</strong> et <strong>Radix UI</strong>,
                entièrement refactorisés pour créer un langage visuel unique.
                J'ai personnalisé chaque composant pour garantir une
                accessibilité totale et une cohérence UX parfaite.
              </li>
              <li>
                <strong>State Management & Performance :</strong> Gestion
                d'états complexes via <strong>Zustand</strong>. J'ai optimisé
                les flux de données avec <strong>useMemo</strong> et des
                patterns de filtrage amont pour maintenir une fluidité
                constante, même lors du déchiffrement massif de centaines
                d'entrées.
              </li>
              <li>
                <strong>Robustesse TypeScript :</strong> Typage strict de bout
                en bout pour sécuriser les échanges entre le store global et les
                interfaces de gestion des organisations, éliminant ainsi les
                risques d'erreurs au runtime.
              </li>
              <li>
                <strong>Stack Moderne :</strong> Développement sous{" "}
                <strong>Next.js 16 (Canary)</strong> et{" "}
                <strong>React 19</strong>, anticipant les dernières normes de
                sécurité et de rendu (Server Components & Actions).
              </li>
            </ul>
          </div>
        }
        imgArray={RESULTS_DATA}
      />
    </ProjectLayoutGlobal>
  );
}
