import { ExternalLink, Github, Globe, MoveLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface projectHeaderType {
  badgeStatus: string;
  badgeRoles: string[];
  title: string;
  skills: any[];
  websiteUrl?: string;
  repoUrl?: string;
}

export default function ProjectHeader({
  badgeStatus,
  badgeRoles,
  title,
  skills,
  websiteUrl,
  repoUrl,
}: projectHeaderType) {
  return (
    <div className="flex flex-col w-full gap-4 max-w-[700px] mx-auto">
      <div className="flex items-center gap-4 justify-between mb-6">
        <Link
          href="/"
          className="group text-neutral-700 flex items-center gap-3"
        >
          <MoveLeft className="group-hover:-translate-x-1 duration-150" />
          Retour
        </Link>
        <div className="flex items-center gap-2">
          {repoUrl && (
            <Link
              href={repoUrl}
              target="_blank"
              className="bg-neutral-100 flex aspect-square md:aspect-auto items-center gap-2 px-4 py-2 hover:bg-neutral-50 duration-150 border border-neutral-200 text-neutral-800 rounded-lg"
            >
              <span className="hidden md:flex">Code source</span>
              <Github className="size-4" />
            </Link>
          )}
          {websiteUrl && (
            <Link
              href={websiteUrl}
              target="_blank"
              className="bg-neutral-800 aspect-square md:aspect-auto hover:bg-neutral-900 duration-150 text-neutral-100 w-fit px-4 py-2 rounded-lg flex items-center gap-3"
            >
              <span className="hidden md:flex">Voir le site</span>
              <Globe className="size-4" />
            </Link>
          )}
        </div>
      </div>

      <div className="flex items-center gap-3 flex-wrap">
        <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
          {badgeStatus}
        </span>
        <div className="flex items-center gap-3">
          {badgeRoles.map((role, i) => (
            <span
              key={i}
              className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider"
            >
              {role}
            </span>
          ))}
        </div>
      </div>
      <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
        {title}
      </h1>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {skills &&
          skills.map((skill: any, index: any) => (
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
              <span className="text-sm text-neutral-800">{skill.label}</span>
            </div>
          ))}
      </div>
    </div>
  );
}
