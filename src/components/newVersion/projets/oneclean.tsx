import Image from "next/image";
import React, { useState } from "react";

export default function ProjectOneClean() {
  // --- Données pour la section 'Les étapes clés' ---
  const steps = [
    {
      textBtn: "Récupération des mails",
      image: "/images/newversion/ONECLEAN/mails-collect.avif",
    },
    {
      textBtn: "Mails récupérés",
      image: "/images/newversion/ONECLEAN/collected-mails.avif",
    },
    {
      textBtn: "Tableau de bord",
      image: "/images/newversion/ONECLEAN/dashboard.avif",
    },
    {
      textBtn: "Processus de suppression",
      image: "/images/newversion/ONECLEAN/deletion.avif",
    },
    {
      textBtn: "Suppression terminée",
      image: "/images/newversion/ONECLEAN/deleted.avif",
    },
  ];

  // État pour la sélection des étapes
  const [interfaceSelected, setInterfaceSelected] = useState(0);

  // --- Données pour la section 'UX et Fonctionnalités' ---
  const uxFeatures = [
    {
      textBtn: "Filtrage et sélection",
      image: "/images/newversion/ONECLEAN/mails-collect.avif",
    },
    {
      textBtn: "Statistiques",
      image: "/images/newversion/ONECLEAN/dashboard.avif",
    },
  ];

  // État pour la sélection des fonctionnalités/UX
  const [featureSelected, setFeatureSelected] = useState(0);

  return (
    <div className="bg-neutral-50 mt-4 flex flex-col gap-16 px-4 py-8 rounded-2xl border border-neutral-200">
      {/* --- Section Présentation du Projet --- */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1 project-text-container">
          <h2 className="text-3xl mb-1 font-medium">OneClean</h2>
          <p>
            OneClean est une application web qui simplifie radicalement le
            nettoyage de votre boîte de réception. En se connectant de manière
            sécurisée, elle identifie et regroupe les emails inutiles, vous
            permettant de supprimer des milliers de courriers obsolètes en
            quelques clics et de réduire ainsi votre empreinte numérique.
          </p>
        </div>
        <div className="mt-2 md:mt-0 md:p-4 rounded-xl bg-neutral-100">
          <Image
            src="/images/newversion/ONECLEAN/home.avif"
            width={760}
            height={760}
            alt="Page d'accueil de l'application OneClean"
          />
        </div>
      </div>

      {/* --- Section UX et Fonctionnalités --- */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1 project-text-container">
          <h2 className="text-3xl mb-1 font-medium">
            Le Nettoyage par Regroupement Intelligent{" "}
          </h2>
          <p>
            L'efficacité de OneClean repose sur un principe simple : **le
            regroupement automatique des expéditeurs.** Une fois les emails
            récupérés, le tableau de bord les organise de manière intuitive.
            <br />
            <br />
            Tous les emails provenant d'une même adresse sont regroupés (ex:
            `newsletter@shop.com`). De plus, tous les expéditeurs différents
            partageant le même nom de domaine sont également consolidés (ex:
            `support@amazon.fr`, `facturation@amazon.fr`). Cette méthode permet
            de cibler et de nettoyer rapidement des sources entières de spam ou
            de newsletters en une seule action.
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
            alt="Capture d'écran de la fonctionnalité sélectionnée"
          />
        </div>
      </div>

      {/* --- Section Les étapes clés (Interface) --- */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1 project-text-container">
          <h2 className="text-3xl mb-1 font-medium">Le Parcours Utilisateur</h2>
          <p>
            Parcourez les différentes vues de l'application, de la connexion
            sécurisée (via OAuth) à la page de confirmation de la suppression,
            en passant par le tableau de bord d'analyse.
          </p>
          <div className="flex flex-wrap items-center gap-2 mt-6">
            {steps &&
              steps.map((item: any, i: any) => (
                <div
                  key={i}
                  onClick={() => setInterfaceSelected(i)}
                  className={`flex items-center cursor-pointer gap-2 text-sm border border-neutral-200 p-2 rounded-3xl ${
                    interfaceSelected === i
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
            src={steps[interfaceSelected].image}
            width={760}
            height={760}
            alt={`Étape ${interfaceSelected + 1} de l'interface OneClean : ${
              steps[interfaceSelected].textBtn
            }`}
          />
        </div>
      </div>
    </div>
  );
}
