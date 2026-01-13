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
            title="Intheair."
            subtitle="Product Design & Technical SEO."
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
                    Choix d'une architecture{" "}
                    <span className="text-cyan-400 font-medium">Low-Code</span>{" "}
                    pour maximiser la vélocité et l'autonomie des équipes
                    marketing.
                  </span>
                ),
                content: (
                  <div className="space-y-4">
                    <p>
                      En tant que développeur, il est crucial de choisir le bon
                      outil. Pour ce site vitrine, une SPA (React/Vue) aurait
                      été une sur-ingénierie ("Overkill").
                    </p>
                    <p>
                      J'ai opté pour <strong>Webflow</strong> couplé à du{" "}
                      <strong>JavaScript vanilla</strong> pour garantir un temps
                      de déploiement record, une gestion CMS native pour le
                      client, tout en maintenant un contrôle strict sur le DOM
                      et les performances (Core Web Vitals).
                    </p>
                    <div className="flex gap-4 text-sm text-neutral-400 border-l-2 border-cyan-500/30 pl-4 mt-2">
                      <span>⚡ Lighthouse : 98/100</span>
                      <span>🔍 SEO Sémantique</span>
                      <span>📱 Mobile First</span>
                    </div>
                  </div>
                ),
              }}
              stack={TOOLS}
            />

            <div className="flex flex-col gap-32">
              <ProjectSection
                title="Audit & Architecture de Données"
                description={
                  <span>
                    Avant le design, une phase d'ingénierie a permis de
                    restructurer le contenu. Modélisation des collections CMS
                    (comme une BDD relationnelle) pour lier les{" "}
                    <em>Services</em> aux <em>Études de cas</em> dynamiquement.
                    Analyse de l'existant pour identifier les goulots
                    d'étranglement SEO.
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
                title="Performance & Conversion"
                description={
                  <div className="space-y-4">
                    <p>
                      Le résultat n'est pas seulement esthétique. C'est un
                      produit optimisé pour la conversion. Le temps de
                      chargement (LCP) a été réduit de <strong>40%</strong> par
                      rapport à l'ancienne version WordPress.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white/5 p-3 rounded-lg border border-white/10 flex items-center gap-2">
                        <LineChart size={16} className="text-green-400" />
                        <span className="text-xs font-mono">Lead Gen +25%</span>
                      </div>
                      <div className="bg-white/5 p-3 rounded-lg border border-white/10 flex items-center gap-2">
                        <Gauge size={16} className="text-cyan-400" />
                        <span className="text-xs font-mono">
                          SEO Score 100%
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
