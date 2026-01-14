import React from "react";
import ProjectViewLayout from "@/components/projects/ProjectLayout";
import {
  ProjectHero,
  ProjectIntro,
  ProjectFooter,
} from "@/components/projects/ProjectComponents";
import {
  MonitorSmartphone,
  Layout,
  Target,
  LineChart,
  Gauge, // Pour la performance
  Workflow, // Pour l'aspect process
  Code, // Pour le custom code
  Database, // Pour le CMS
} from "lucide-react";
import { useRouter } from "next/navigation";
import { projectsNewVersion } from "@/components/newVersion/projets/data/data";
import Separator from "@/components/project/Separator";
import ProjectLayoutGlobal from "@/components/project/ProjectLayoutGlobal";
import ProjectHeader from "@/components/project/ProjectHeader";
import ProjectSection from "@/components/project/ProjectSection";
import Image from "next/image";
// --- TYPES ---
// (Si tu utilises TypeScript, assure-toi que les interfaces match celles de tes composants ProjectComponents)

// --- DONNÉES TECHNIQUES ---
const TOOLS = [
  { label: "Webflow (CMS)", icon: "/images/icons/webflow.svg" },
  { label: "JavaScript (Custom)", icon: "/images/icons/javascript.svg" },
  { label: "Figma (UI System)", icon: "/images/icons/figma.svg" },
  { label: "SEO Technical", icon: Target }, // Icône générique si pas d'image
];

// 1. PHASE D'ANALYSE & ARCHITECTURE
const ARCHITECTURE_DATA = [
  {
    textBtn: "Ancienne version du site",
    image: "/images/newversion/SITE_VITRINE/previous-hp.avif",
  },
  {
    textBtn: "Arborescence des pages",
    image: "/images/newversion/SITE_VITRINE/pages-tree.webp",
  },
  {
    textBtn: "Benchmark Performance",
    image: "/images/newversion/SITE_VITRINE/lighthouse-before.webp",
  },
];

// 2. BUILD & INTEGRATION
const BUILD_DATA = [
  {
    textBtn: "Wireframes sur figma",
    image: "/images/newversion/SITE_VITRINE/wireframes.webp",
  },
  {
    textBtn: "Intégration Low-Code",
    image: "/images/newversion/SITE_VITRINE/webflow.webp",
  },
  {
    textBtn: "Custom CSS/JS Injection",
    image: "/images/newversion/SITE_VITRINE/inspirations2.webp", // Placeholder pour du code si tu as, sinon garde l'UI
  },
];

// 3. DELIVERY & KPI
const KPI_DATA = [
  {
    textBtn: "Version final (Home)",
    image: "/images/newversion/SITE_VITRINE/intheair-hp.avif",
  },
  {
    textBtn: "Performances globales améliorées",
    image: "/images/newversion/SITE_VITRINE/lighthouse-after.webp",
  },
  {
    textBtn: "Nouvelle interface",
    image: "/images/newversion/SITE_VITRINE/nous-contacter.avif",
  },
];

export default function ProjectSiteVitrine() {
  const THEME = "cyan";
  const router = useRouter();
  const currentSlug = "intheair";

  // Trouver le projet actuel et le suivant dans la liste
  const currentIndex = projectsNewVersion.findIndex(
    (p) => p.url === currentSlug
  );
  const project = projectsNewVersion[currentIndex];
  const nextProject =
    projectsNewVersion[currentIndex + 1] || projectsNewVersion[0];

  return (
    <ProjectLayoutGlobal>
      <ProjectHeader
        badgeStatus="Projet Professionnel"
        badgeRoles={["UX/UI Designer", "Développeur Frontend"]}
        title="Intheair - Refonte Digitale"
        websiteUrl="https://intheair.co/"
        skills={project.skills}
      />
      <Separator />
      <section className="grid grid-cols-1 gap-10 items-center w-full max-w-[1240px] mx-auto">
        <div className="flex flex-col gap-4 max-w-[700px] mx-auto">
          <h3 className="text-3xl text-balance font-bold text-neutral-800 leading-tight">
            Contexte
          </h3>
          <div className="text-neutral-600 text-balance leading-relaxed">
            Le site original d'Intheair accusait un décalage entre l'image de
            marque de l'entreprise et son interface digitale. L'objectif était
            de transformer ce site vitrine en une expérience moderne, créative
            et immersive, capable de refléter les ambitions de croissance de
            l'agence tout en intégrant des micro-interactions fluides{" "}
            <p>
              J'ai choisi <strong>Webflow</strong> pour la rapidité de mise en
              ligne et son CMS, complété par du{" "}
              <strong>JavaScript sur mesure</strong> pour les interactions
              complexes. Résultat : un code léger, un SEO optimisé et une
              maintenance simplifiée.
            </p>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-xl border border-neutral-200 bg-white p-2">
          <Image
            src="/images/newversion/SITE_VITRINE/previous-hp.avif"
            width={1200}
            height={700}
            alt="Main preview"
            className="rounded-xl w-full object-cover"
          />
        </div>
      </section>

      <div className="flex flex-col gap-32">
        <ProjectSection
          title="Audit & Structure du contenu"
          description={
            <span>
              Le projet a commencé par un <strong>audit de l'existant</strong>{" "}
              pour identifier les manques en SEO et en navigation. J'ai
              entièrement <strong>repensé l'arborescence</strong> du site et
              intégré de nouvelles pages de services qui n'étaient pas
              répertoriées, tout en automatisant les liens entre ces services et
              les études de cas via le CMS.
            </span>
          }
          icon={<Database size={24} />}
          imgArray={ARCHITECTURE_DATA}
        />

        <ProjectSection
          title="Développement Hybride"
          description={
            <span>
              Intégration "Pixel Perfect" depuis Figma. Injection de scripts{" "}
              <strong>JavaScript personnalisés</strong> pour gérer des
              interactions complexes que le No-Code ne permettait pas (sliders
              custom, validation de formulaires avancée). Nettoyage du code
              généré pour assurer la propreté sémantique.
            </span>
          }
          icon={<Code size={24} />}
          imgArray={BUILD_DATA}
        />

        <ProjectSection
          title="Performance & Impact"
          description={
            <div className="space-y-4">
              <p>
                L'objectif était de dépasser les performances de l'ancienne
                version développée en <strong>HTML/JS statique (Gulp)</strong>.
                En optimisant les assets et le rendu, j'ai réduit le temps de
                chargement (LCP) de <strong>40%</strong>.
              </p>
            </div>
          }
          icon={<MonitorSmartphone />}
          imgArray={KPI_DATA}
        />
      </div>
    </ProjectLayoutGlobal>
  );
}
