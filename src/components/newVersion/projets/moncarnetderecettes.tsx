import ProjectLayout from "@/components/ProjectLayout";
import Image from "next/image";
import React, { useState } from "react";

export default function ProjectMonCarnetDeRecettes() {
  // Données UI (Design System & Maquettes)
  const UI_DATA = [
    {
      textBtn: "Figma UI",
      image: "/images/newversion/MON_CARNET_DE_RECETTES/figma-hp.webp",
    },
    {
      textBtn: "Design System",
      image: "/images/newversion/MON_CARNET_DE_RECETTES/ui-figma.webp",
    },
  ];

  // Données UX (Flux et interactions)
  const UX_DATA = [
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

  const RESULTS_DATA = [
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

  return (
    <ProjectLayout
      badgeStatus="Projet Personnel"
      badgeRoles="UX / UI / Frontend"
      title="Mon Carnet de Recettes"
      url="https://moncarnetderecettes.vercel.app"
      competitiveAnalysis={[
        {
          competitor: "Paprika / Cookmate",
          strength:
            "Excellente gestion technique (import auto, mise à l'échelle des portions).",
          weakness:
            "Outil froid, aucune sortie physique. Opportunité : transformer ces données en un bel objet de famille.",
        },
        {
          competitor: "Blurb / Lulu",
          strength:
            "Logistique d'impression mondiale et qualité de papier professionnelle.",
          weakness:
            "Trop complexe, demande des compétences en graphisme. Opportunité : mise en page automatique.",
        },
        {
          competitor: "Photobox / Cheerz",
          strength: "Processus d'upload d'images simple et très émotionnel.",
          weakness:
            "Inadapté au texte et aux recettes. Opportunité : design 'Notion-style' optimisé pour la lecture.",
        },
        {
          competitor: "Marmiton / Cookpad",
          strength:
            "Communauté immense et accès gratuit à des millions de recettes.",
          weakness:
            "Bruit visuel (pub) et perte de propriété. Opportunité : 'coffre-fort' privé pour l'héritage familial.",
        },
        {
          competitor: "Carnets manuscrits",
          strength: "Charme inégalable et forte valeur sentimentale.",
          weakness:
            "Fragile et non reproductible. Opportunité : le numérique pour la sauvegarde, le papier pour la transmission.",
        },
      ]}
      competitiveAnalysisCcl={
        "Le marché propose soit du stockage numérique 'froid', soit des outils d'impression trop complexes. L'opportunité ici est de créer le chaînon manquant : automatiser la mise en page pro pour transformer instantanément des données volatiles en un bel objet personnel."
      }
      problematic={{
        title:
          "Passer d'une collection de recettes numériques éparpillées à la création d'un bel objet personnel.",
        mainImage: "/images/newversion/MON_CARNET_DE_RECETTES/hp.webp",
        description: (
          <p>
            Le défi est de simplifier au maximum la création d'un carnet de
            recette physique, grâce à une
            <strong>interface web intuitive et rapide</strong>
          </p>
        ),
      }}
      realization={{
        title: "Une approche 'Design-to-Code' rigoureuse",
        description:
          "En tant qu'UX/Dev, j'ai piloté toute la chaîne : du Design System au développement de l'API PDF.",
        uxAssets: UX_DATA,
        uiAssets: UI_DATA,
        resultsAssets: RESULTS_DATA,
      }}
      results={{
        title: "Impact & Valeur ajoutée",
        items: [
          {
            title: "Automatisation Print",
            description:
              "Génération d'un fichier PDF HD instantané respectant les normes imprimeurs.",
          },
          {
            title: "Performance Frontend",
            description: "Interface ultra-réactive conçue avec Next.js.",
          },
          {
            title: "Scalabilité Design",
            description:
              "Système de composants permettant une évolution rapide.",
          },
          {
            title: "User Empowerment",
            description:
              "Les utilisateurs deviennent créateurs de leur propre contenu.",
          },
        ],
      }}
    />
  );
}
