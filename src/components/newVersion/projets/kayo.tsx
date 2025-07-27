import Image from "next/image";
import React, { useState } from "react";

export default function ProjectKayo() {
  const methodesChiffrement = [
    {
      textBtn: "Table Profiles",
      image: "/images/newversion/KAYO/supabase-profiles.png",
    },
    {
      textBtn: "Table Passwords",
      image: "/images/newversion/KAYO/supabase-passwords.png",
    },
  ];

  const [chiffrementSelected, setChiffrementSelected] = useState(0);

  const interfaces = [
    {
      textBtn: "Tableau de bord",
      image: "/images/newversion/KAYO/dashboard2.png",
    },
    {
      textBtn: "Création d'identifiant",
      image: "/images/newversion/KAYO/create-pw.png",
    },
  ];

  const [interfaceSelected, setInterfaceSelected] = useState(0);

  return (
    <div className="bg-neutral-50 mt-4 flex flex-col gap-16 px-4 py-8 rounded-2xl border border-neutral-200">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1 project-text-container">
          <h2 className="text-3xl font-medium">Kayo (Version alpha)</h2>
          <p>
            Kayo est une application de gestion de mots de passe collaborative
            dotée d'un chiffrement de bout en bout, permettant aux équipes de
            partager leurs identifiants en toute sécurité.
          </p>
        </div>
        <div className="p-4 rounded-xl bg-neutral-100">
          <Image
            src="/images/newversion/KAYO/hp.png"
            width={1600}
            height={1600}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1 project-text-container">
          <h2 className="text-3xl font-medium">Les méthodes de chiffrement</h2>
          <p>
            Kayo implémente une architecture de chiffrement hybride robuste pour
            garantir la confidentialité des données. Chaque utilisateur dispose
            d'une clé AES unique, sécurisée par un chiffrement utilisant un
            vecteur d'initialisation (IV), un salt cryptographique et le mot de
            passe maître de l'utilisateur. <br />
            <br />
            Pour la gestion collaborative des groupes, l'application utilise un
            système de chiffrement RSA à clés asymétriques : chaque utilisateur
            possède une paire de clés (privée/publique). Cette architecture
            permet aux propriétaires de groupes de partager en toute sécurité la
            clé AES du groupe avec de nouveaux membres en la chiffrant
            directement avec leur clé publique RSA. <br />
            <br />
            Cette double approche garantit que les données restent inaccessibles
            même aux serveurs de l'application, seuls les utilisateurs autorisés
            pouvant déchiffrer les informations avec leurs clés personnelles.
          </p>
          <div className="flex items-center gap-2 mt-3">
            {methodesChiffrement &&
              methodesChiffrement.map((item: any, i: any) => (
                <div
                  key={i}
                  onClick={() => setChiffrementSelected(i)}
                  className={`flex items-center duration-150 cursor-pointer gap-2 text-sm border border-neutral-200 p-2 rounded-3xl ${
                    chiffrementSelected === i
                      ? "bg-blue-600 text-neutral-50 hover:brightness-105"
                      : "bg-neutral-100 hover:brightness-95"
                  }`}
                >
                  <span>{item.textBtn}</span>
                </div>
              ))}
          </div>
        </div>
        <div className="p-4 rounded-xl bg-neutral-100">
          <Image
            src={methodesChiffrement[chiffrementSelected].image}
            width={1600}
            height={1600}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1 project-text-container">
          <h2 className="text-3xl font-medium">L'interface dans l'app</h2>
          <p>
            Interface sobre et fonctionnelle regroupant l'essentiel : ajout de
            mots de passe, gestion des groupes collaboratifs, et générateur de
            mots de passe sécurisés.
          </p>
          <div className="flex items-center gap-2 mt-3">
            {interfaces &&
              interfaces.map((item: any, i: any) => (
                <div
                  key={i}
                  onClick={() => setInterfaceSelected(i)}
                  className={`flex items-center cursor-pointer gap-2 text-sm border border-neutral-200 p-2 rounded-3xl ${
                    interfaceSelected === i
                      ? "bg-blue-600 text-neutral-50 hover:brightness-105"
                      : "bg-neutral-100 hover:brightness-95"
                  }`}
                >
                  <span>{item.textBtn}</span>
                </div>
              ))}
          </div>
        </div>
        <div className="p-4 rounded-xl bg-neutral-100">
          <Image
            src={interfaces[interfaceSelected].image}
            width={1600}
            height={1600}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
