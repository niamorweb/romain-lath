import ProjectCayo from "@/components/newVersion/projets/cayo";
import ProjectPlateformeSaas from "@/components/newVersion/projets/plateformesaas";
import ProjectSiteVitrine from "@/components/newVersion/projets/sitevitrine";
import {
  projectsNewVersion,
  skillsNewVersion,
} from "@/components/newVersion/projets/data/data";
import {
  ChevronLeft,
  Github,
  Globe,
  Linkedin,
  Mail,
  Mic,
  Notebook,
  User,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { LiaLinkedin } from "react-icons/lia";
import ProjectOneClean from "@/components/newVersion/projets/oneclean";
import ProjectBambinets from "@/components/newVersion/projets/lesbambinets";

export default function Version2() {
  const [activeProject, setActiveProject] = useState<any>(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [activeProject]);

  const [activeTab, setActiveTab] = useState("projets");

  const UX_VEILLE_SOURCES = [
    {
      name: "Parlons Design",
      type: "podcast",
      summary:
        "Podcast francophone essentiel pour suivre la culture du design, les outils et les réflexions sur les défis actuels de l'UX/UI.",
      topics: ["Actualités UX", "Culture Design", "Tendances UI", "Outils UX"],
      // Exemple d'URL : à remplacer
      url: "https://podcasts.apple.com/fr/podcast/parlons-design/id1455589133",
    },
    {
      name: "Basti UI",
      type: "youtube",
      summary:
        "Chaîne YouTube francophone axée sur le design d'interface (UI), les critiques de design et les tutoriels pratiques sur les outils de conception.",
      topics: ["Actualités UX", "UI Design", "Outils UX", "Veille Visuelle"],
      // Exemple d'URL : à remplacer
      url: "[Lien de la chaîne Basti UI]",
    },
    {
      name: "Nielsen Norman Group (NN/g)",
      type: "blog",
      summary:
        "La référence mondiale. Fournit des analyses empiriques et des études approfondies sur l'utilisabilité, la recherche utilisateur et les principes fondamentaux de l'UX.",
      topics: ["Méthodes UX", "Ergonomie", "Actualités UX", "Accessibilité UX"],
      // Exemple d'URL : à remplacer
      url: "[Lien Nielsen Norman Group]",
    },
    {
      name: "Usabilis (Blog)",
      type: "blog",
      summary:
        "Blog francophone spécialisé en ergonomie et en Méthodes de Conception Centrée Utilisateur (CCU). Idéal pour valider la méthodologie et les bonnes pratiques.",
      topics: ["Méthodes UX", "Ergonomie", "Accessibilité UX"],
      // Exemple d'URL : à remplacer
      url: "https://usabilis.com/blog/",
    },
    {
      name: "Arquen UX (Blog)",
      type: "blog",
      summary:
        "Blog francophone clé sur l'Éco-conception numérique et le design durable. Une source incontournable pour les pratiques responsables.",
      topics: ["Écodéveloppement", "Durabilité", "Conception Responsable"],
      // Exemple d'URL : à remplacer
      url: "https://www.arquen.fr/blog/",
    },
    {
      name: "Smashing Magazine",
      type: "blog",
      summary:
        "Magazine reconnu couvrant un large éventail de sujets, de l'UX/UI aux meilleures pratiques de développement front-end et aux Design Systems.",
      topics: [
        "Actualités UX",
        "Outils UX",
        "Développement Front-end",
        "Accessibilité UX",
      ],
      // Exemple d'URL : à remplacer
      url: "[Lien Smashing Magazine]",
    },
    {
      name: "Articles sur Medium",
      type: "blog",
      summary:
        "Plateforme dynamique pour des revues d'outils, des études de cas détaillées et des retours d'expérience divers de la communauté internationale.",
      topics: [
        "Outils UX",
        "Méthodes UX",
        "Business & Marketing",
        "Durabilité",
      ],
      // Exemple d'URL : à remplacer
      url: "[Lien vers la catégorie UX sur Medium]",
    },
  ];

  const getSourceIcon = (type) => {
    switch (type) {
      case "podcast":
        return <Mic className="size-5 text-indigo-600" />;
      case "youtube":
        return <Youtube className="size-5 text-red-600" />;
      case "social":
        return <User className="size-5 text-blue-600" />;
      case "organisation":
        return <Globe className="size-5 text-teal-600" />;
      default: // blog, organisation, etc.
        return <Notebook className="size-5 text-gray-600" />;
    }
  };
  return (
    <main className="min-h-screen p-6 bg-neutral-100 ">
      <div className="max-w-[1240px] mx-auto gap-4 bg-neutral-100 flex flex-col md:grid md:grid-cols-3 ">
        <div
          className={`w-full md:sticky top-6 h-fit text-neutral-800 flex flex-col gap-4 md:col-span-1 ${
            activeProject && "hidden md:flex"
          }`}
        >
          <div className=" bg-neutral-50 h-fit rounded-2xl p-6 border border-neutral-200">
            <div className="flex flex-col justify-start items-start gap-4">
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl font-semibold geist tracking-tighter ">
                  Romain Lathuiliere
                </h1>
                <h2 className="text-2xl font-medium text-black/70 geist tracking-tighter">
                  UX/UI Designer - Développeur frontend
                </h2>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <Link
                  className="bg-neutral-800 duration-150 hover:bg-neutral-600 flex items-center gap-2 py-2 px-3 text-neutral-50 rounded-lg"
                  href="mailto:romain.lathuiliere@proton.me"
                >
                  <Mail className="size-5" />
                  Me contacter
                </Link>
                <span className="text-wrap ">romain.lathuiliere@proton.me</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-10">
              <div className="flex flex-col items-start gap-4">
                {skillsNewVersion.map((category, catIndex) => (
                  <div
                    key={catIndex}
                    className="flex flex-wrap items-center gap-2"
                  >
                    {category.elems.map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 bg-neutral-100 border border-neutral-200 p-2 rounded-xl"
                      >
                        <Image
                          width={100}
                          height={100}
                          src={skill.icon}
                          alt={skill.label}
                          className="w-5 h-5 object-contain"
                        />
                        <span className="text-sm text-neutral-800">
                          {skill.label}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-neutral-50 h-fit rounded-2xl p-6 border border-neutral-200 flex items-center gap-2">
            <Link
              className="flex items-center gap-2 bg-neutral-100 hover:bg-neutral-50 duration-150 border border-neutral-200 p-2 rounded-xl"
              href="https://github.com/niamorweb"
              target="_blank"
            >
              <Github className="size-5" />
              Github
            </Link>{" "}
            <Link
              className="flex items-center gap-2 bg-neutral-100 hover:bg-neutral-50 duration-150 border border-neutral-200 p-2 rounded-xl"
              href="https://www.linkedin.com/in/romain-lathuiliere-681221268/"
              target="_blank"
            >
              <LiaLinkedin className="size-5" />
              LinkedIn
            </Link>
          </div>
        </div>
        <div className=" text-neutral-800  col-span-2 ">
          <div className="bg-neutral-50 rounded-2xl flex items-center gap-3 justify-between border border-neutral-200 p-3 md:p-6  mb-4">
            {activeProject ? (
              <button
                onClick={() => setActiveProject(null)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-neutral-600/5 duration-150 "
              >
                <ChevronLeft className="size-5" />
                <span className="hidden md:inline-block">
                  Voir tous les projets
                </span>
                <span className=" md:hidden">Retour</span>
              </button>
            ) : (
              // <h2 className="text-2xl bg-neutral-50 rounded-2xl border border-neutral-200 p-6 font-medium">
              <div className="relative mx-auto grid grid-cols-2 rounded-full">
                <button
                  className={`text-center cursor-pointer text-xl z-10 py-2 px-4 ${
                    activeTab === "projets" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("projets")}
                >
                  Mes projets
                </button>
                <button
                  className={`text-center cursor-pointer text-xl z-10 py-2 px-4 ${
                    activeTab === "veille" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("veille")}
                >
                  Ma veille
                </button>

                <div
                  className={`bg-neutral-200 duration-300 rounded-full w-1/2 absolute left-0 top-0 bottom-0 ${
                    activeTab === "projets"
                      ? "translate-x-[0%]"
                      : "translate-x-[100%]"
                  }`}
                ></div>
              </div>
            )}
            {activeProject && (
              <Link
                className="bg-neutral-800 duration-150 hover:bg-neutral-600 flex items-center gap-2 py-2 px-3 text-neutral-50 rounded-lg"
                href={activeProject.link}
                target="_blank"
              >
                Aller sur le site
              </Link>
            )}
          </div>
          {activeProject && activeProject.id === 0 && <ProjectCayo />}
          {activeProject && activeProject.id === 1 && <ProjectPlateformeSaas />}
          {activeProject && activeProject.id === 2 && <ProjectSiteVitrine />}
          {activeProject && activeProject.id === 3 && <ProjectOneClean />}
          {activeProject && activeProject.id === 4 && <ProjectBambinets />}
          {!activeProject && activeTab === "projets" ? (
            <div className="flex flex-col gap-6 mt-4">
              {projectsNewVersion &&
                projectsNewVersion.map((project: any, i: any) => (
                  <div
                    key={i}
                    className="bg-neutral-50 flex flex-col gap-3 p-4 rounded-2xl border border-neutral-200 "
                  >
                    <Image
                      className="rounded-xl"
                      width={840}
                      height={840}
                      src={project.img}
                      alt=""
                    />
                    <div className="">
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        {project.skills.map((skill: any, index: any) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 bg-neutral-100 border border-neutral-200 p-2 rounded-xl"
                          >
                            <Image
                              width={100}
                              height={100}
                              src={skill.icon}
                              alt={skill.label}
                              className="w-5 h-5 object-contain"
                            />
                            <span className="text-sm text-neutral-800">
                              {skill.label}
                            </span>
                          </div>
                        ))}
                      </div>{" "}
                      <h3 className="text-xl font-medium mb-1">
                        {project.title}
                      </h3>
                      <p className="text-neutral-500">{project.description}</p>
                      <div className="flex justify-end items-center gap-2 mt-6">
                        <button
                          onClick={() => setActiveProject(project)}
                          className="bg-neutral-100 flex items-center gap-2 p-3 hover:bg-neutral-50 duration-150 border border-neutral-200 text-neutral-800 rounded-xl"
                        >
                          Plus de détails
                        </button>
                        <Link
                          className="bg-neutral-800 flex items-center gap-2 p-3 hover:bg-neutral-600 duration-150 border border-neutral-200 text-neutral-50 rounded-xl"
                          href={project.link}
                          target="_blank"
                        >
                          Aller sur le site
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <div className="bg-neutral-50 rounded-2xl flex items-center gap-3 justify-between border border-neutral-200 p-3 md:p-6">
              <div className="flex flex-col gap-2 ">
                <h4 className="text-xl font-bold mb-6 text-neutral-800 flex items-center gap-2">
                  Mes Sources de Veille UX/UI
                </h4>

                <div className="grid gap-8">
                  {UX_VEILLE_SOURCES.map((source) => (
                    <a
                      key={source.name}
                      // REMPLACER par la véritable URL de la source
                      href={source.url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      // Style de la carte: Bordure subtile, Ombre légère, Effet hover
                      className="block bg-neutral-100 hover:bg-neutral-50 duration-150 border border-neutral-200 p-4 rounded-xl transition-all"
                    >
                      <div className="flex justify-between items-start mb-2">
                        {/* Titre et Type */}
                        <div className="flex flex-col">
                          <span className="font-semibold text-lg text-neutral-900">
                            {source.name}
                          </span>
                          <span
                            className={`font-light uppercase text-xs ${
                              source.type === "podcast"
                                ? "text-indigo-600"
                                : source.type === "youtube"
                                ? "text-red-600"
                                : source.type === "blog"
                                ? "text-green-600"
                                : "text-neutral-500"
                            }`}
                          >
                            {source.type}
                          </span>
                        </div>

                        {/* Icône basée sur le type */}
                        <div className="flex-shrink-0">
                          {/* Utilisation de la fonction d'icône */}
                          {/* {getSourceIcon(source.type)} */}
                        </div>
                      </div>

                      {/* Résumé */}
                      <p className="text-sm text-neutral-600 mb-3">
                        {source.summary}
                      </p>

                      {/* Tags des Sujets Abordés */}
                      <div className="flex flex-wrap gap-2">
                        {source.topics.map((topic) => (
                          <span
                            key={topic}
                            // Style du Tag: Couleurs douces et aérées
                            className={`px-2 py-0.5 rounded-full text-xs font-medium border ${
                              source.type === "podcast"
                                ? "bg-indigo-100 text-indigo-800"
                                : source.type === "youtube"
                                ? "bg-red-100 text-red-800"
                                : source.type === "blog"
                                ? "bg-green-100 text-green-800"
                                : "bg-neutral-100 text-neutral-800"
                            }`}
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
