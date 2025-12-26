import ProjectHeader from "@/components/ProjectHeader";
import ProjectLayout from "@/components/ProjectLayout";
import ProjectLayoutGlobal from "@/components/ProjectLayoutGlobal";
import ProjectSection from "@/components/ProjectSection";
import Separator from "@/components/Separator";
import Image from "next/image";

export default function ProjectBambinets() {
  const tools = [
    {
      label: "Figma",
      icon: "/images/icons/figma.svg",
    },
  ];

  const UX_FEATURES = [
    {
      textBtn: "Personas",
      image: "/images/newversion/LES_BAMBINETS/personas.webp",
    },
    {
      textBtn: "Wireframe Glossaire",
      image: "/images/newversion/LES_BAMBINETS/wireframes1.avif",
    },
    {
      textBtn: "Wireframe Quiz",
      image: "/images/newversion/LES_BAMBINETS/wireframes2.avif",
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
    {
      textBtn: "Prototype",
      image: "/images/newversion/LES_BAMBINETS/proto-lines.webp",
    },
    {
      textBtn: "Quiz",
      image: "/images/newversion/LES_BAMBINETS/proto-quiz.webp",
    },
    {
      textBtn: "Glossaire",
      image: "/images/newversion/LES_BAMBINETS/proto-librairy.webp",
    },
    {
      textBtn: "Login + Accueil",
      image: "/images/newversion/LES_BAMBINETS/proto-librairy.webp",
    },
    {
      textBtn: "Autres écrans",
      image: "/images/newversion/LES_BAMBINETS/proto-faq-favs.webp",
    },
  ];

  return (
    <ProjectLayoutGlobal>
      <ProjectHeader
        badgeStatus="Projet Académique"
        badgeRoles={["UX/UI Designer"]}
        title="Les Bambinets"
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
              La communication avec les enfants de 0 à 3 ans représente un défi
              majeur pour les parents et professionnels, le langage verbal
              n'étant pas encore acquis. <strong>Les Bambinets</strong> relève
              ce défi en démocratisant l'usage de la{" "}
              <strong>Langue des Signes associée à la Parole (LSF)</strong>.
            </p>
            <p>
              L'objectif était de concevoir une application mobile pédagogique
              et bienveillante, capable d'accompagner les adultes dans
              l'apprentissage des signes pour fluidifier les échanges quotidiens
              avec les tout-petits.
            </p>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-xl border border-neutral-200 bg-white p-2">
          <Image
            src="/images/newversion/LES_BAMBINETS/illustration.avif"
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
        title="Conception de tous les écrans"
        description={
          <div className="flex flex-col gap-4 text-neutral-600">
            <p>
              La première étape a consisté à traduire la vision pédagogique du
              client en une <strong>expérience utilisateur cohérente</strong> :
            </p>
            <ul className="list-disc ml-5 space-y-2">
              <li>
                <strong>Personas :</strong> Définition de profils types (parents
                débutants cherchant à réduire les frustrations de leur enfant,
                ou professionnels en crèche souhaitant uniformiser leurs
                pratiques) pour guider chaque décision de design.
              </li>
              <li>
                <strong>Analyse des besoins :</strong> Identification des
                fonctionnalités clés (dictionnaire de signes, parcours
                d'apprentissage, favoris).
              </li>
              <li>
                <strong>Arborescence :</strong> Structuration de l'application
                pour garantir un accès rapide à l'information, essentiel dans un
                contexte de parentalité parfois stressant.
              </li>
              <li>
                <strong>Wireframing :</strong> Création de prototypes basse
                fidélité pour valider la hiérarchie visuelle avant l'application
                de la couche graphique.
              </li>
              <li>
                <strong>Évolution du Design System :</strong> Adaptation de
                l'identité existante et création de nouveaux composants
                dynamiques pour enrichir l'interactivité de l'app.
              </li>
            </ul>
          </div>
        }
        imgArray={UX_FEATURES}
      />
      <Separator />
      <ProjectSection
        subtitle="2"
        title="Conception de l'application"
        description={
          <div className="flex flex-col gap-4 text-neutral-600">
            <p>
              Le design visuel a été pensé pour être à la fois{" "}
              <strong>ludique et extrêmement accessible</strong> :
            </p>
            <ul className="list-disc ml-5 space-y-2">
              <li>
                <strong>Inclusivité :</strong> Utilisation de plugins
                spécialisés pour auditer les contrastes et s'assurer que
                l'interface est lisible par tous les profils d'utilisateurs.
              </li>
              <li>
                <strong>Prototype Haute Fidélité :</strong> Réalisation d'un
                prototype animé sur Figma pour simuler les interactions réelles
                et tester la fluidité des transitions entre les leçons de
                signes.
              </li>
              <li>
                <strong>Composants UI :</strong> Développement d'une
                bibliothèque de composants spécifiques (cartes d'apprentissage,
                lecteurs vidéo intégrés) respectant les standards de
                l'accessibilité mobile.
              </li>
            </ul>
          </div>
        }
        imgArray={UI_DESIGN_SYSTEM}
      />
    </ProjectLayoutGlobal>
  );
}
