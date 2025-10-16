import Image from "next/image";
import React, { useState } from "react";

export default function ProjectSiteVitrine() {
  const previous = [
    {
      textBtn: "Page d'accueil",
      image: "/images/newversion/SITE_VITRINE/previous-hp.avif",
    },
    {
      textBtn: "Une section",
      image: "/images/newversion/SITE_VITRINE/previous-section.avif",
    },
  ];

  const [previousSelected, setPreviousSelected] = useState(0);

  const after = [
    {
      textBtn: "Page d'accueil",
      image: "/images/newversion/SITE_VITRINE/intheair-hp.avif",
    },
    {
      textBtn: "Une section",
      image: "/images/newversion/SITE_VITRINE/chiffres.avif",
    },
    {
      textBtn: "Service",
      image: "/images/newversion/SITE_VITRINE/pages-services.avif",
    },
    {
      textBtn: "Contact",
      image: "/images/newversion/SITE_VITRINE/nous-contacter.avif",
    },
  ];

  const [afterSelected, setAfterSelected] = useState(0);

  return (
    <div className="bg-neutral-50 mt-4 flex flex-col gap-16 px-4 py-8 rounded-2xl border border-neutral-200">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1 project-text-container">
          <h2 className="text-3xl mb-1 font-medium">Site Vitrine</h2>
          <p>
            Le site vitrine de l’entreprise Intheair. Refonte complète du site
            en allant du design, à l’architecture des pages avec une toute
            nouvelle navigation. Intégrations avec des applications externes
            comme Hubspot (pour le côté marketing), Zapier.
          </p>
        </div>
        <div className="mt-2 md:mt-0 md:p-4 rounded-xl bg-neutral-100">
          <Image
            src="/images/newversion/SITE_VITRINE/intheair-hp.avif"
            width={760}
            height={760}
            alt=""
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1 project-text-container">
          <h2 className="text-3xl mb-1 font-medium">
            Ancienne version du site
          </h2>
          <p>
            La version précédente du site Intheair présentait un design et une
            navigation qui nécessitaient une modernisation pour mieux refléter
            l'évolution de l'entreprise.
          </p>
          <div className="flex flex-wrap items-center gap-2 mt-6">
            {previous &&
              previous.map((item: any, i: any) => (
                <div
                  key={i}
                  onClick={() => setPreviousSelected(i)}
                  className={`flex items-center duration-150 cursor-pointer gap-2 text-sm border border-neutral-200 p-2 rounded-3xl ${
                    previousSelected === i
                      ? "bg-blue-600 text-neutral-50 hover:brightness-105"
                      : "bg-neutral-100 hover:brightness-95"
                  }`}
                >
                  <span>{item.textBtn}</span>
                </div>
              ))}
          </div>
        </div>
        <div className="mt-2 md:mt-0 md:p-4 rounded-xl bg-neutral-100">
          <Image
            src={previous[previousSelected].image}
            width={760}
            height={760}
            alt=""
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1 project-text-container">
          <h2 className="text-3xl mb-1 font-medium">
            Nouvelle version du site
          </h2>
          <p>
            Version actualisée du site avec un design épuré et une nouvelle
            identité visuelle reflétant mieux l'image de l'entreprise.
          </p>
          <div className="flex flex-wrap items-center gap-2 mt-6">
            {after &&
              after.map((item: any, i: any) => (
                <div
                  key={i}
                  onClick={() => setAfterSelected(i)}
                  className={`flex items-center duration-150 cursor-pointer gap-2 text-sm border border-neutral-200 p-2 rounded-3xl ${
                    afterSelected === i
                      ? "bg-blue-600 text-neutral-50 hover:brightness-105"
                      : "bg-neutral-100 hover:brightness-95"
                  }`}
                >
                  <span>{item.textBtn}</span>
                </div>
              ))}
          </div>
        </div>
        <div className="mt-2 md:mt-0 md:p-4 rounded-xl bg-neutral-100">
          <Image
            src={after[afterSelected].image}
            width={1000}
            height={1000}
            alt=""
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
