import ProjectCayo from "@/components/newVersion/projets/cayo";
import ProjectPlateformeSaas from "@/components/newVersion/projets/plateformesaas";
import ProjectSiteVitrine from "@/components/newVersion/projets/sitevitrine";
import {
  projectsNewVersion,
  skillsNewVersion,
} from "@/components/newVersion/projets/data/data";
import {
  ChevronLeft,
  ExternalLink,
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
import Head from "next/head";
import ProjectMonCarnetDeRecettes from "@/components/newVersion/projets/moncarnetderecettes";

export default function Version2() {
  const pageTitle = "Romain Lathuiliere - Portfolio";
  const pageDescription =
    "Découvrez mes réalisations en UX/UI Design et développement front-end";
  const keywords =
    "portfolio, UX design, UI design, développement front-end, react, Next.js,  site web";

  const [activeProject, setActiveProject] = useState<any>(null);

  const [activeTab, setActiveTab] = useState("projets");

  const UX_VEILLE_SOURCES = [
    {
      name: "Parlons Design",
      type: "podcast",
      summary:
        "Actualités, méthodes et réflexions sur le métier (format podcast).",
      topics: ["Actualités UX", "Méthodes UX", "Réflexions Métier"],
      url: "https://podcasts.apple.com/fr/podcast/parlons-design/id1455589133",
    },
    {
      name: "Basti UI",
      type: "youtube",
      summary: "Actualités UX/UI et tutoriels Figma/outils (format vidéo).",
      topics: ["Outils UX", "UI Design", "Figma"],
      url: "https://www.youtube.com/@BastiUI",
    },
    {
      name: "Nielsen Norman Group (NN/g)",
      type: "blog",
      summary: "La référence mondiale en recherche scientifique et ergonomie.",
      topics: ["Méthodes UX", "Ergonomie", "Recherche Utilisateur"],
      url: "https://www.nngroup.com/",
    },
    {
      name: "La Grande Ourse",
      type: "blog",
      summary: "Études de cas concrètes et méthodologies de conception.",
      topics: ["Méthodes UX", "Études de cas", "Conception"],
      url: "https://lagrandeourse.design/blog/",
    },
    {
      name: "Arquen",
      type: "blog",
      summary: "Explications de concepts UX et conseils stratégiques.",
      topics: ["Concepts UX", "Conseils", "Stratégie"],
      url: "https://www.arquen.fr/blog/",
    },
    {
      name: "Articles sur Medium",
      type: "blog",
      summary: "Retours d’expérience et tendances émergentes de la communauté.",
      topics: ["Tendances", "Retours d'expérience", "Communauté"],
      url: "https://medium.com/",
    },
    {
      name: "Inspirations (Mobbin, SiteInspire, Awwwards)",
      type: "web",
      summary: "Veille visuelle et références UI pour la conception.",
      topics: ["Veille Visuelle", "Inspiration UI", "Références"],
      url: "https://mobbin.com/",
    },
  ];

  const getSourceIcon = (type: any) => {
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
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen p-6 bg-neutral-100 ">
        <div className="max-w-[1000px] mx-auto gap-4 flex flex-col">
          <div
            className={`w-full h-fit text-neutral-800 flex flex-col gap-4 md:col-span-1 `}
          >
            <div className="flex items-center justify-between">
              <div className="flex flex-col justify-start items-start gap-4 pt-12">
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
                    href="mailto:romain.lathuiliere@icloud.com"
                  >
                    <Mail className="size-5" />
                    Me contacter
                  </Link>
                  <span className="text-wrap ">
                    romain.lathuiliere@icloud.com
                  </span>
                </div>
                <div className="flex items-center gap-2">
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
              <div className="flex flex-col gap-4 mt-10">
                <h3 className="text-2xl font-semibold">Mes compétences</h3>
                <div className="flex flex-col items-start gap-4 max-w-[400px]">
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
          </div>

          <div className="bg-neutral-300 w-full h-[1px] my-6 "></div>
          <div className="flex flex-col gap-8 mt-4">
            <h2 className="text-3xl font-semibold">Mes projets sélectionnés</h2>
            <div className="flex flex-col gap-6 mt-4">
              {projectsNewVersion &&
                projectsNewVersion.map((project: any, i: any) => (
                  <div
                    key={i}
                    className="cursor-pointer bg-neutral-100 hover:bg-neutral-50 duration-150 border border-neutral-200 p-4 rounded-xl transition-all grid grid-cols-3 items-center gap-6"
                  >
                    <Image
                      className="rounded-lg"
                      width={840}
                      height={840}
                      src={project.img}
                      alt=""
                    />
                    <div className="col-span-2">
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
                      {/* <div className="flex items-center gap-2 mt-6">
                      <button
                        onClick={() => setActiveProject(project)}
                        className="bg-neutral-100 flex items-center gap-2 p-3 hover:bg-neutral-50 duration-150 border border-neutral-200 text-neutral-800 rounded-xl"
                      >
                        Plus de détails
                      </button>
                      {project.link && (
                        <Link
                          className="bg-neutral-800 flex items-center gap-2 p-3 hover:bg-neutral-600 duration-150 border border-neutral-200 text-neutral-50 rounded-xl"
                          href={project.link}
                          target="_blank"
                        >
                          Aller sur le site
                        </Link>
                      )}
                    </div> */}
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="bg-neutral-300 w-full h-[1px] my-12 "></div>
          <div className="flex flex-col gap-2 w-full">
            <h4 className="text-3xl font-bold mb-6 text-neutral-800 flex items-center gap-2">
              Mes Sources de Veille UX/UI
            </h4>

            <div className="grid rounded-2xl overflow-hidden border border-neutral-200">
              {UX_VEILLE_SOURCES.map((source) => (
                <a
                  key={source.name}
                  // REMPLACER par la véritable URL de la source
                  href={source.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  // Style de la carte: Bordure subtile, Ombre légère, Effet hover
                  className="flex items-start justify-between gap-4 bg-neutral-100 hover:bg-neutral-50 duration-150 border border-neutral-200 p-3 transition-all"
                >
                  <div className="">
                    <div className="flex justify-between items-start mb-2">
                      {/* Titre et Type */}
                      <div className="flex flex-col">
                        <span className="font-semibold text-lg text-neutral-900">
                          {source.name}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-neutral-600 mb-3">
                      {source.summary}
                    </p>
                  </div>
                  <ExternalLink className="text-neutral-600 size-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
