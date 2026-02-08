"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Globe, MoveRight } from "lucide-react";

interface Skill {
  label: string;
  icon: string;
}

export default function ProjectList({ projects }: any) {
  const [activeTab, setActiveTab] = useState<
    "Projets pro" | "Projets personnels"
  >("Projets pro");

  const tabs = ["Projets pro", "Projets personnels"] as const;

  const filteredProjects = projects.filter((p: any) => p.type === activeTab);

  return (
    <div className="w-full flex flex-col gap-8">
      {/* HEADER & TABS */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <h2 className="text-3xl font-semibold text-neutral-800 tracking-tight">
          Mes projets sélectionnés
        </h2>

        {/* Segmented Control UX */}
        <div className="flex p-1 bg-neutral-100/80 backdrop-blur-sm border border-neutral-200 rounded-xl w-fit shadow-inner">
          {tabs.map((tab) => {
            const count = projects.filter((p: any) => p.type === tab).length;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-lg flex items-center gap-2 ${
                  activeTab === tab
                    ? "bg-white text-neutral-900 shadow-md border border-neutral-100"
                    : "text-neutral-500 hover:text-neutral-700 hover:bg-neutral-200/50"
                }`}
              >
                {tab}
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full border ${
                    activeTab === tab
                      ? "bg-neutral-50 border-neutral-200 text-neutral-600"
                      : "bg-neutral-200 border-transparent text-neutral-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* PROJECTS GRID */}
      <div className="grid grid-cols-1 gap-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project: any, i: number) => (
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
          ))
        ) : (
          <div className="py-32 flex flex-col items-center justify-center text-center border-2 border-dashed border-neutral-200 rounded-3xl">
            <p className="text-neutral-400 font-medium">
              Aucun projet répertorié ici.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
