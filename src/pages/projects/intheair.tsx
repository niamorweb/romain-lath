import React from "react";
import ProjectViewLayout from "@/components/projects/ProjectLayout";
import {
  ProjectHero,
  ProjectIntro,
  ProjectSection,
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
    textBtn: "Audit Legacy System",
    image: "/images/newversion/SITE_VITRINE/previous-hp.avif",
  },
  {
    textBtn: "Sitemap & CMS Modeling",
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
    textBtn: "Component Library (Figma)",
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
    textBtn: "Product Release (Home)",
    image: "/images/newversion/SITE_VITRINE/intheair-hp.avif",
  },
  {
    textBtn: "Lighthouse Score (95+)",
    image: "/images/newversion/SITE_VITRINE/lighthouse-after.webp",
  },
  {
    textBtn: "Lead Gen Optimization",
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
    <ProjectViewLayout
      onClose={() => router.push("/#projects")}
      accentColor={THEME}
    >
      {(onImageClick) => (
        <>
          <ProjectHero
            title="Intheair"
            subtitle=". Refonte d'un site vitrine"
            image="/images/newversion/SITE_VITRINE/intheair-hp.avif"
            layoutId={`image-container-${project.url}`}
            liveUrl="https://intheair.co/"
            tags={[
              {
                label: "Low-Code Architecture",
                icon: Workflow,
                color: "text-cyan-400",
              },
              {
                label: "Frontend Performance",
                icon: Gauge,
                color: "text-emerald-400",
              },
            ]}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-neutral-200">
            <ProjectIntro
              context={{
                headline: (
                  <span>
                    Priorité à l'<strong>efficacité</strong> : une architecture
                    hybride pour un site vitrine performant.
                  </span>
                ),
                content: (
                  <div className="space-y-4">
                    <p>
                      L'objectif était simple : livrer rapidement tout en
                      laissant la main aux équipes marketing pour le contenu.
                      Utiliser un framework JS lourd aurait été
                      contre-productif.
                    </p>
                    <p>
                      J'ai choisi <strong>Webflow</strong> pour la rapidité de
                      mise en ligne et son CMS, complété par du{" "}
                      <strong>JavaScript sur mesure</strong> pour les
                      interactions complexes. Résultat : un code léger, un SEO
                      optimisé et une maintenance simplifiée.
                    </p>
                    <div className="flex gap-4 text-sm text-neutral-400 border-l-2 border-cyan-500/30 pl-4 mt-2">
                      <span>⚡ Perf : 98/100</span>
                      <span>🛠 Custom JS</span>
                      <span>📈 SEO Ready</span>
                    </div>
                  </div>
                ),
              }}
              stack={TOOLS}
            />

            <div className="flex flex-col gap-32">
              <ProjectSection
                title="Audit & Structure du contenu"
                description={
                  <span>
                    Le projet a commencé par un{" "}
                    <strong>audit de l'existant</strong> pour identifier les
                    manques en SEO et en navigation. J'ai entièrement{" "}
                    <strong>repensé l'arborescence</strong> du site et intégré
                    de nouvelles pages de services qui n'étaient pas
                    répertoriées, tout en automatisant les liens entre ces
                    services et les études de cas via le CMS.
                  </span>
                }
                icon={<Database size={24} className="text-orange-400" />}
                images={ARCHITECTURE_DATA}
                onImageClick={onImageClick}
                accentColor="orange"
              />

              <ProjectSection
                title="Développement Hybride"
                description={
                  <span>
                    Intégration "Pixel Perfect" depuis Figma. Injection de
                    scripts <strong>JavaScript personnalisés</strong> pour gérer
                    des interactions complexes que le No-Code ne permettait pas
                    (sliders custom, validation de formulaires avancée).
                    Nettoyage du code généré pour assurer la propreté
                    sémantique.
                  </span>
                }
                icon={<Code size={24} className="text-blue-400" />}
                images={BUILD_DATA}
                reversed
                onImageClick={onImageClick}
                accentColor="blue"
              />

              <ProjectSection
                title="Performance & Impact"
                description={
                  <div className="space-y-4">
                    <p>
                      L'objectif était de dépasser les performances de
                      l'ancienne version développée en{" "}
                      <strong>HTML/JS statique (Gulp)</strong>. En optimisant
                      les assets et le rendu, j'ai réduit le temps de chargement
                      (LCP) de <strong>40%</strong>.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white/5 p-3 rounded-lg border border-white/10 flex items-center gap-2">
                        <LineChart size={16} className="text-green-400" />
                        <span className="text-xs font-mono">
                          +25% de contacts
                        </span>
                      </div>
                      <div className="bg-white/5 p-3 rounded-lg border border-white/10 flex items-center gap-2">
                        <Gauge size={16} className="text-cyan-400" />
                        <span className="text-xs font-mono">
                          Score SEO : 100
                        </span>
                      </div>
                    </div>
                  </div>
                }
                icon={
                  <MonitorSmartphone size={24} className="text-emerald-400" />
                }
                images={KPI_DATA}
                onImageClick={onImageClick}
                accentColor="emerald"
              />
            </div>

            <ProjectFooter
              onNextProject={() => router.push(`/projects/${nextProject.url}`)}
              onClose={() => router.push("/#projects")}
              nextTitle="Retour sur l'écran d'accueil"
              accentColor={THEME}
            />
          </div>
        </>
      )}
    </ProjectViewLayout>
  );
}
