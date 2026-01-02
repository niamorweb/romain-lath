import { IconType } from "react-icons";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiHtml5,
  SiCss3,
  SiSupabase,
  SiFirebase,
  SiGit,
  SiTailwindcss,
  SiFigma,
  SiDjango,
  SiVuedotjs,
  SiStripe,
  SiNuxtdotjs,
} from "react-icons/si";

const icons = [
  {
    label: "Figma",
    icon: "/images/icons/figma.svg",
  },
  {
    label: "Photoshop",
    icon: "/images/icons/photoshop.svg",
  },
  {
    label: "TailwindCSS",
    icon: "/images/icons/tailwindcss.svg",
  },
  {
    label: "React",
    icon: "/images/icons/react.svg",
  },
  {
    label: "Next.js",
    icon: "/images/icons/nextjs.svg",
  },
  {
    label: "Vue.js",
    icon: "/images/icons/vuejs.svg",
  },
  {
    label: "Nuxt",
    icon: "/images/icons/nuxt.svg",
  },
  {
    label: "JavaScript",
    icon: "/images/icons/javascript.svg",
  },
  {
    label: "TypeScript",
    icon: "/images/icons/typescript.svg",
  },
  {
    label: "Node.js",
    icon: "/images/icons/nodejs.svg",
  },
  {
    label: "Django",
    icon: "/images/icons/django.svg",
  },
  {
    label: "Webflow",
    icon: "/images/icons/webflow.svg",
  },
  // {
  //   label: "Wordpress",
  //   icon: "/images/icons/wordpress.svg",
  // },
  {
    label: "Framer",
    icon: "/images/icons/framer.svg",
  },
  {
    label: "Supabase",
    icon: "/images/icons/supabase.svg",
  },
];

const designLabels = ["Figma", "Photoshop"];
const codeLabels = [
  "TailwindCSS",
  "React",
  "Next.js",
  "Vue.js",
  "Nuxt",
  "JavaScript",
  "TypeScript",
  "Django",
  "Node.js",
];
const cmsLabels = ["Webflow", "Framer", "Supabase"];

export const skillsNewVersion = [
  {
    category: "Design",
    elems: icons.filter((item) => designLabels.includes(item.label)),
  },
  {
    category: "Code",
    elems: icons.filter((item) => codeLabels.includes(item.label)),
  },
  {
    category: "CMS",
    elems: icons.filter((item) => cmsLabels.includes(item.label)),
  },
];

export const projectsNewVersion = [
  {
    id: 2,
    url: "intheair",
    title: "Site vitrine",
    description:
      "Le site vitrine de l’entreprise Intheair. Refonte complète du site en allant du design, à l’architecture des pages avec une toute nouvelle navigation. Intégrations avec des applications externes comme Hubspot (pour le côté marketing), Zapier.",
    link: "https://intheair.co/",
    img: "/images/newversion/SITE_VITRINE/intheair-hp.avif",
    skills: icons.filter((icon) =>
      ["Figma", "Photoshop", "Webflow", "JavaScript"].includes(icon.label)
    ),
  },
  {
    id: 1,
    url: "intheairlabs",
    title: "IntheairLabs",
    description:
      "IntheairLabs, une web app pour l'instant B2B permettant aux clients de gérer leur projets, de télécharger leur livrables et de les visualiser directement sur la plateforme. Espace admin et espace client.",
    link: "https://labs.intheair.co/login",
    img: "/images/newversion/INTHEAIRLABS/intheairlabs-login2.avif",
    skills: icons.filter((icon) =>
      ["Figma", "React", "JavaScript", "Django"].includes(icon.label)
    ),
  },
  {
    id: 0,
    url: "cayo",
    title: "Cayo",
    repoUrl: "https://github.com/niamorweb/cayo",
    description:
      "Cayo est une application de gestion de mots de passe collaborative dotée d'un chiffrement de bout en bout, permettant aux familles, équipes de partager leurs identifiants en toute sécurité.",
    link: "https://cayo-zeta.vercel.app",
    img: "/images/newversion/CAYO/hp.avif",
    skills: icons.filter((icon) =>
      [
        "Figma",
        "TailwindCSS",
        "React",
        "Next.js",
        "TypeScript",
        "Supabase",
      ].includes(icon.label)
    ),
  },
  {
    id: 4,
    url: "lesbambinets",
    title: "Les Bambinets",
    description:
      "Projet complètement axé UX et conception UI, application mobile d'apprentissage de la langue des signes pour bébé avec glossaire vidéo et favoris pour améliorer la communication précoce.",
    link: null,
    img: "/images/newversion/LES_BAMBINETS/illustration.avif",
    skills: icons.filter((icon) => ["Figma"].includes(icon.label)),
  },
  {
    id: 5,
    url: "moncarnetderecettes",
    title: "Mon Carnet de Recettes",
    repoUrl: "https://github.com/niamorweb/moncarnetderecettes",
    description:
      "Plateforme de création et d'organisation de recettes avec un système automatisé de génération de livres de cuisine (PDF haute définition) prêts pour l'impression.",
    link: "https://moncarnetderecettes.vercel.app/",
    img: "/images/newversion/MON_CARNET_DE_RECETTES/hp.webp",
    skills: icons.filter((icon) =>
      ["Figma", "TailwindCSS", "TypeScript", "React", "Supabase"].includes(
        icon.label
      )
    ),
  },
  // {
  //   id: 3,
  //   title: "Oneclean",
  //   description:
  //     "Nettoyage de boîte mail par regroupement intelligent des expéditeurs pour une réduction rapide de l'empreinte numérique.",
  //   link: "https://oneclean.vercel.app/",
  //   img: "/images/newversion/ONECLEAN/home.avif",
  //   skills: icons.filter((icon) =>
  //     ["Figma", "TailwindCSS", "JavaScript", "React", "Next.js"].includes(
  //       icon.label
  //     )
  //   ),
  // },
];
