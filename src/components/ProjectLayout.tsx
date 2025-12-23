import Image from "next/image";
import React, { useState } from "react";

interface ProjectAsset {
  textBtn: string;
  image: string;
}
interface Persona {
  name: string;
  role: string;
  goal: string;
  painPoint: string;
}
interface CompetitiveAnalysis {
  competitor: string;
  strength: string;
  weakness: string;
}

interface ProjectLayoutProps {
  badgeStatus: string; // ex: "Projet Personnel"
  badgeRoles: string; // ex: "UX / UI / Frontend"
  title: string;
  url?: string;
  problematic: {
    title: string;
    description: React.ReactNode;
    mainImage: string;
  };
  realization: {
    title: string;
    description: React.ReactNode;
    uxAssets: ProjectAsset[];
    uiAssets: ProjectAsset[];
  };
  results: {
    title: string;
    items: { title: string; description: string }[];
  };
  personas?: Persona[];
  competitiveAnalysis?: CompetitiveAnalysis[];
  competitiveAnalysisCcl: string;
}

export default function ProjectLayout({
  badgeStatus,
  badgeRoles,
  title,
  url,
  problematic,
  realization,
  results,
  personas,
  competitiveAnalysis,
  competitiveAnalysisCcl,
}: ProjectLayoutProps) {
  const [uxSelected, setUxSelected] = useState(0);
  const [uiSelected, setUiSelected] = useState(0);

  return (
    <div className="bg-neutral-50 mt-4 flex flex-col gap-20 px-6 lg:px-24 py-12 rounded-2xl font-sans">
      {/* HEADER */}
      <div className="flex flex-col w-full gap-4 border-b max-w-[700px] mx-auto border-neutral-200 pb-10">
        <div className="flex items-center gap-3">
          <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
            {badgeStatus}
          </span>
          <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
            {badgeRoles}
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
          {title}
        </h1>
      </div>

      {/* 1. PROBLÉMATIQUE */}
      <section className="grid grid-cols-1 gap-10 items-center">
        <div className="flex flex-col gap-4 max-w-[700px] mx-auto">
          <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest">
            01. Problématique
          </h2>
          <h3 className="text-3xl text-balance font-bold text-neutral-800 leading-tight">
            {problematic.title}
          </h3>
          <div className="text-neutral-600 text-balance leading-relaxed">
            {problematic.description}
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-xl border border-neutral-200 bg-white p-2">
          <Image
            src={problematic.mainImage}
            width={1200}
            height={700}
            alt="Main preview"
            className="rounded-xl w-full object-cover"
          />
        </div>
      </section>

      {competitiveAnalysis && (
        <section className="flex flex-col gap-6">
          <div className="w-full max-w-[700px] mx-auto">
            <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest">
              Analyse concurrentielle
            </h2>
            <h3 className="text-2xl font-bold text-neutral-800">
              Quelles sont les opportunités qui s'offrent à nous ?
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-200">
              <thead>
                <tr className="bg-neutral-100 text-neutral-700 text-xs uppercase font-bold">
                  <th className="p-4">Concurrent</th>
                  <th className="p-4">Leur force</th>
                  <th className="p-4">Leur faiblesse (Mon opportunité)</th>
                </tr>
              </thead>
              <tbody className="text-sm text-neutral-600">
                {competitiveAnalysis.map((item, i) => (
                  <tr key={i} className="border-t border-neutral-100">
                    <td className="p-4 font-bold text-neutral-900">
                      {item.competitor}
                    </td>
                    <td className="p-4 italic">{item.strength}</td>
                    <td className="p-4 text-orange-600 font-medium">
                      {item.weakness}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {competitiveAnalysisCcl && (
              <p className="mt-4 w-full max-w-[700px] mx-auto">
                {competitiveAnalysisCcl}
              </p>
            )}
          </div>
        </section>
      )}

      {/* NOUVELLE SECTION : PERSONAS */}
      {personas && personas.length > 0 && (
        <section className="flex flex-col gap-8">
          <div className="flex flex-col gap-2 full max-w-[700px] mx-auto">
            <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest">
              Target Users
            </h2>
            <h3 className="text-2xl font-bold text-neutral-800">
              Pour qui avons-nous conçu cette solution ?
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {personas.map((persona, i) => (
              <div
                key={i}
                className="bg-white border border-neutral-200 p-6 rounded-2xl shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold">
                    {persona.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 leading-none">
                      {persona.name}
                    </h4>
                    <span className="text-xs text-neutral-500 uppercase">
                      {persona.role}
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-neutral-600">
                    <strong>Objectif :</strong> {persona.goal}
                  </p>
                  <p className="text-sm text-neutral-600">
                    <strong>Point de friction :</strong> {persona.painPoint}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 2. RÉALISATION */}
      <section className="flex flex-col gap-10">
        <div className="flex flex-col gap-4 max-w-[700px] mx-auto">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest">
            02. Réalisation
          </h2>
          <h3 className="text-3xl text-balance font-bold text-neutral-800">
            {realization.title}
          </h3>
          <div className="text-neutral-600 text-balance">
            {realization.description}
          </div>
        </div>

        {/* Tab UX */}
        {realization.uxAssets.length > 0 && (
          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm">
            <h4 className="font-bold text-neutral-800 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs">
                UX
              </span>
              Expérience & Flux
            </h4>
            <div className="flex flex-wrap gap-2 mb-8">
              {realization.uxAssets.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setUxSelected(i)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    uxSelected === i
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                  }`}
                >
                  {item.textBtn}
                </button>
              ))}
            </div>
            <div className="bg-neutral-50 rounded-xl p-2 border border-neutral-100">
              <Image
                src={realization.uxAssets[uxSelected].image}
                width={1200}
                height={700}
                alt="UX View"
                className="rounded-lg w-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Tab UI */}
        {realization.uiAssets.length > 0 && (
          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm">
            <h4 className="font-bold text-neutral-800 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center text-xs">
                UI
              </span>
              Interface & Design System
            </h4>
            <div className="flex flex-wrap gap-2 mb-8">
              {realization.uiAssets.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setUiSelected(i)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    uiSelected === i
                      ? "bg-orange-600 text-white shadow-md"
                      : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                  }`}
                >
                  {item.textBtn}
                </button>
              ))}
            </div>
            <div className="bg-neutral-50 rounded-xl p-2 border border-neutral-100">
              <Image
                src={realization.uiAssets[uiSelected].image}
                width={1200}
                height={700}
                alt="UI View"
                className="rounded-lg w-full object-cover"
              />
            </div>
          </div>
        )}
      </section>

      {/* 3. RÉSULTATS */}
      <section className="grid grid-cols-1 gap-8 pb-8">
        <div className="w-full max-w-[700px] mx-auto">
          <h2 className="text-sm font-bold text-green-600 uppercase tracking-widest mb-4">
            03. Résultats
          </h2>
          <h3 className="text-3xl text-balance font-bold text-neutral-800 mb-4">
            {results.title}
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {results.items.map((result, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl border border-neutral-200"
            >
              <h4 className="font-bold text-balance text-neutral-900 mb-2">
                {result.title}
              </h4>
              <p className="text-neutral-600 text-balance text-sm">
                {result.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
