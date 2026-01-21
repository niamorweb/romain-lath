import {
  projectsNewVersion,
  skillsNewVersion,
} from "@/components/newVersion/projets/data/data";
import {
  Code,
  ExternalLink,
  Github,
  Globe,
  Mail,
  MoveRight,
  Notebook,
  Paintbrush,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LiaLinkedin } from "react-icons/lia";
import Head from "next/head";
import Separator from "@/components/project/Separator";

export default function Version2() {
  const pageTitle = "Romain Lathuiliere - Portfolio Développeur Fullstack";
  const pageDescription =
    "Découvrez mes réalisations en développement fullstack";
  const keywords =
    "portfolio, react, fullstack, développeur, node.js, nest, vue.js";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen p-6 pb-16 bg-neutral-100 ">
        <div className="max-w-[1000px] mx-auto gap-4 flex flex-col">
          <div
            className={`w-full h-fit text-neutral-800 flex flex-col gap-4 md:col-span-1 `}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="flex flex-col justify-start items-start gap-4 pt-12">
                <div className="flex flex-col gap-2">
                  <h1 className="text-4xl font-semibold geist tracking-tighter ">
                    Romain Lathuiliere
                  </h1>
                  <h2 className="text-2xl font-medium text-black/70 geist tracking-tighter">
                    Développeur Fullstack{" "}
                    <span className="text-black">Product-minded</span> — React •
                    Vue • Node
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
              <div className="md:hidden">
                <Separator />
              </div>
              <div className="flex flex-col gap-4 mt-10">
                <h3 className="text-3xl font-semibold">Mes compétences</h3>
                <div className="flex flex-col items-start gap-4 max-w-[500px]">
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

          <Separator />
          <div className="flex flex-col gap-8 mt-4">
            <h2 className="text-3xl font-semibold text-neutral-700">
              Mes projets sélectionnés
            </h2>
            <div className="flex flex-col gap-6 mt-4">
              {projectsNewVersion &&
                projectsNewVersion.map((project: any, i: any) => (
                  <div
                    key={i}
                    className=" bg-neutral-100 hover:bg-neutral-50 duration-150 border border-neutral-200 p-4 rounded-xl transition-all flex flex-col md:grid grid-cols-1 md:grid-cols-5 items-center gap-6"
                  >
                    <Image
                      className="rounded-lg w-full md:col-span-2"
                      width={840}
                      height={840}
                      src={project.img}
                      alt=""
                    />
                    <div className="col-span-3">
                      <h3 className="text-xl text-neutral-700 font-medium mb-1">
                        {project.title}
                      </h3>
                      <p className="text-neutral-500">{project.description}</p>
                      <div className="mt-3 flex flex-wrap items-center gap-2">
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
                      <div className="flex items-center w-full justify-end gap-2 mt-6">
                        {project.repoUrl && (
                          <Link
                            href={project.repoUrl}
                            target="_blank"
                            className="bg-neutral-100 flex items-center gap-2 p-3 hover:bg-neutral-50 duration-150 border border-neutral-200 text-neutral-800 rounded-xl"
                          >
                            <Github className="size-5" />
                          </Link>
                        )}
                        {project.link && (
                          <Link
                            href={project.link}
                            target="_blank"
                            className="bg-neutral-100 flex items-center gap-2 p-3 hover:bg-neutral-50 duration-150 border border-neutral-200 text-neutral-800 rounded-xl"
                          >
                            <Globe className="size-5" />
                          </Link>
                        )}
                        <Link
                          className="bg-neutral-800 flex items-center gap-2 p-3 hover:bg-neutral-600 duration-150 border border-neutral-200 text-neutral-50 rounded-xl"
                          href={"/projects/" + project.url}
                        >
                          Voir plus
                          <MoveRight className="size-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          {/* <Separator /> */}
          {/* <div className="flex flex-col gap-2 w-full mb-8">
            <h4 className="text-3xl font-bold mb-6 text-neutral-800 flex items-center gap-2">
              Mes Sources de Veille principales côté UX/UI
            </h4>

            <div className="grid rounded-2xl overflow-hidden border border-neutral-200">
              {UX_VEILLE_SOURCES.map((source) => (
                <a
                  key={source.name}
                  href={source.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start justify-between gap-4 bg-neutral-100 hover:bg-neutral-50 duration-150 border border-neutral-200 p-3 transition-all"
                >
                  <div className="">
                    <div className="flex justify-between items-start mb-2">
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
          </div> */}
        </div>
      </main>
    </>
  );
}
