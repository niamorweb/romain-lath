import ProjectLayout from "@/components/ProjectLayout";
import Image from "next/image";
import React, { useState } from "react";

// export default function ProjectSiteVitrine() {
//   const previous = [
//     {
//       textBtn: "Page d'accueil",
//       image: "/images/newversion/SITE_VITRINE/previous-hp.avif",
//     },
//     {
//       textBtn: "Une section",
//       image: "/images/newversion/SITE_VITRINE/previous-section.avif",
//     },
//   ];

//   const [previousSelected, setPreviousSelected] = useState(0);

//   const repenserExperience = [
//     {
//       textBtn: "Arborescence des pages",
//       image: "/images/newversion/SITE_VITRINE/pages-tree.webp",
//     },
//     {
//       textBtn: "Wireframes",
//       image: "/images/newversion/SITE_VITRINE/wireframes.webp",
//     },
//     {
//       textBtn: "Inspirations héro",
//       image: "/images/newversion/SITE_VITRINE/inspirations.webp",
//     },
//     {
//       textBtn: "Inpirations pour d'autres sections",
//       image: "/images/newversion/SITE_VITRINE/inspirations2.webp",
//     },
//   ];

//   const [repenserExperienceSelected, setRepenserExperienceSelected] =
//     useState(0);

//   const after = [
//     {
//       textBtn: "Page d'accueil",
//       image: "/images/newversion/SITE_VITRINE/intheair-hp.avif",
//     },
//     {
//       textBtn: "Une section",
//       image: "/images/newversion/SITE_VITRINE/chiffres.avif",
//     },
//     {
//       textBtn: "Service",
//       image: "/images/newversion/SITE_VITRINE/pages-services.avif",
//     },
//     {
//       textBtn: "Contact",
//       image: "/images/newversion/SITE_VITRINE/nous-contacter.avif",
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
//           <h2 className="text-3xl mb-1 font-medium">Site Vitrine</h2>
//           <p>
//             Le site vitrine de l’entreprise Intheair. Refonte complète du site
//             en allant du design, à l’architecture des pages avec une toute
//             nouvelle navigation. Intégrations avec des applications externes
//             comme Hubspot (pour le côté marketing), Zapier.
//           </p>
//         </div>
//         <div className="mt-2 md:mt-0 md:p-4 rounded-xl bg-neutral-100">
//           <Image
//             src="/images/newversion/SITE_VITRINE/intheair-hp.avif"
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
//             Ancienne version du site
//           </h2>
//           <p>
//             La version précédente du site Intheair présentait un design et une
//             navigation qui nécessitaient une modernisation pour mieux refléter
//             l'évolution de l'entreprise.
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
//           <h2 className="text-3xl mb-1 font-medium">Repenser l'expérience</h2>
//           <p>
//             Avant de passer au design final, il a fallu repenser toute
//             l'architecture du site. Cela passe par une définition claire de
//             l'arborescence, une analyse concurrentielle, la création de
//             wireframes et une phase de recherche graphique pour définir la
//             nouvelle direction artistique.
//           </p>
//           <div className="flex flex-wrap items-center gap-2 mt-6">
//             {repenserExperience.map((item: any, i: any) => (
//               <div
//                 key={i}
//                 onClick={() => setRepenserExperienceSelected(i)}
//                 className={`flex items-center duration-150 cursor-pointer gap-2 text-sm border border-neutral-200 p-2 rounded-3xl ${
//                   repenserExperienceSelected === i
//                     ? "bg-blue-600 text-neutral-50 hover:brightness-105"
//                     : "bg-neutral-100 hover:brightness-95"
//                 }`}
//               >
//                 <span>{item.textBtn}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="mt-2 md:mt-0 md:p-4 rounded-xl bg-neutral-100">
//           <Image
//             src={repenserExperience[repenserExperienceSelected].image}
//             width={1000}
//             height={1000}
//             alt="Phase de conception"
//             className="rounded-lg"
//           />
//         </div>
//       </div>

//       <div className="flex flex-col gap-2">
//         <div className="flex flex-col gap-1 project-text-container">
//           <h2 className="text-3xl mb-1 font-medium">
//             Nouvelle version du site
//           </h2>
//           <p>
//             Version actualisée du site avec un design épuré et une nouvelle
//             identité visuelle reflétant mieux l'image de l'entreprise.
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
//             width={1000}
//             height={1000}
//             alt=""
//             className="rounded-lg"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

export default function ProjectSiteVitrine() {
  const CONCEPTION_DATA = [
    {
      textBtn: "Ancienne version",
      image: "/images/newversion/SITE_VITRINE/previous-hp.avif",
    },
    {
      textBtn: "Audit du site",
      image: "/images/newversion/SITE_VITRINE/lighthouse-before.webp",
    },
    {
      textBtn: "Arborescence",
      image: "/images/newversion/SITE_VITRINE/pages-tree.webp",
    },
    {
      textBtn: "Wireframes",
      image: "/images/newversion/SITE_VITRINE/wireframes.webp",
    },
  ];

  const FINAL_UI_DATA = [
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
    <ProjectLayout
      badgeStatus="Projet Professionnel"
      badgeRoles="UX / UI / Frontend"
      title="Intheair - Refonte Digitale"
      problematic={{
        title:
          "Comment moderniser une image de marque et optimiser la conversion B2B ?",
        mainImage: "/images/newversion/SITE_VITRINE/intheair-hp.avif",
        description: (
          <p>
            Le site existant ne reflétait plus l'expertise de l'entreprise et
            souffrait d'une navigation complexe. L'enjeu était de{" "}
            <strong>repenser intégralement l'expérience utilisateur</strong>{" "}
            pour clarifier l'offre de services tout en automatisant la capture
            de leads via des outils marketing.
          </p>
        ),
      }}
      realization={{
        title: "De l'audit à l'intégration marketing",
        description: (
          <div className="flex flex-col gap-4">
            <p>
              Le projet a débuté par une phase de restructuration : définition
              d'une nouvelle <strong>arborescence</strong> et création de{" "}
              <strong>wireframes</strong> pour valider les flux de conversion.
            </p>
            <p>
              Côté développement, j'ai assuré l'intégration du site vitrine avec
              une attention particulière sur la <strong>performance</strong> et
              la connexion aux API tierces comme <strong>Hubspot</strong> et{" "}
              <strong>Zapier</strong> pour synchroniser les données
              commerciales.
            </p>
          </div>
        ),
        uxAssets: CONCEPTION_DATA,
        uiAssets: FINAL_UI_DATA,
        resultsAssets: RESULTS_DATA,
      }}
      results={{
        title: "Transformation & Performance",
        items: [
          {
            title: "Identité Modernisée",
            description:
              "Une nouvelle direction artistique épurée qui renforce la crédibilité de l'entreprise.",
          },
          {
            title: "Lead Gen Automatisée",
            description:
              "Intégration fluide de Hubspot permettant une gestion optimisée des formulaires de contact.",
          },
          {
            title: "Expérience Clarifiée",
            description:
              "Réduction du nombre de clics pour accéder aux services clés grâce à une nouvelle navigation.",
          },
          {
            title: "Stack Robuste",
            description:
              "Développement Frontend optimisé pour le SEO et la rapidité de chargement.",
          },
        ],
      }}
    />
  );
}
