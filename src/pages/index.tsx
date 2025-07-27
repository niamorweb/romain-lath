import ProjectKayo from "@/components/newVersion/projets/kayo";
import ProjectPlateformeSaas from "@/components/newVersion/projets/plateformesaas";
import ProjectSiteVitrine from "@/components/newVersion/projets/sitevitrine";
import { projectsNewVersion, skillsNewVersion } from "@/data/data";
import { ChevronLeft, Github, Globe, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { LiaLinkedin } from "react-icons/lia";

export default function Version2() {
  const [activeProject, setActiveProject] = useState<any>(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [activeProject]);

  return (
    <main className="min-h-screen p-6 bg-neutral-100 ">
      <div className="max-w-[1240px] mx-auto gap-4 bg-neutral-100 flex flex-col md:grid md:grid-cols-3 ">
        <div
          className={`w-full md:sticky top-6 h-fit text-neutral-800 flex flex-col gap-4 md:col-span-1 ${
            activeProject && "hidden md:block"
          }`}
        >
          <div className=" bg-neutral-50 h-fit rounded-2xl p-6 border border-neutral-200">
            <div className="flex flex-col justify-start items-start gap-4">
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl font-semibold ">
                  Hey, <br /> Je suis Romain Lathuiliere
                </h1>
                <h2 className="text-2xl">
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
              </div>{" "}
              {/* <div className="flex flex-wrap items-center gap-2">
                {skillsNewVersion &&
                  skillsNewVersion[1].elems.map((skill: any, index: any) => (
                    <div className="flex items-center gap-2 bg-neutral-100 border border-neutral-200 p-2 rounded-xl">
                      <skill.icon className=" " />
                      <span>{skill.text}</span>
                    </div>
                  ))}
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {skillsNewVersion &&
                  skillsNewVersion[2].elems.map((skill: any, index: any) => (
                    <div className="flex items-center gap-2 bg-neutral-100 border border-neutral-200 p-2 rounded-xl">
                      <skill.icon className=" " />
                      <span>{skill.text}</span>
                    </div>
                  ))}
              </div> */}
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
        <div className=" text-neutral-800  col-span-2">
          <div className="bg-neutral-50 rounded-2xl flex items-center gap-3 justify-between border border-neutral-200 p-3 md:p-6 ">
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
              <h2 className="text-2xl font-medium">
                Quelques uns de mes projets
              </h2>
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
          {activeProject && activeProject.id === 0 && <ProjectKayo />}
          {activeProject && activeProject.id === 1 && <ProjectPlateformeSaas />}
          {activeProject && activeProject.id === 2 && <ProjectSiteVitrine />}
          {!activeProject && (
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
          )}
        </div>
      </div>
    </main>
  );
}
