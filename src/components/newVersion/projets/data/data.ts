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
];

const designLabels = ["Figma", "Photoshop"];
const codeLabels = [
  "TailwindCSS",
  "React",
  "Next.js",
  "Vue.js",
  "Nuxt",
  "JavaScript",
];
const cmsLabels = ["Webflow", "Framer"];

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

export const skills = [
  {
    category: "language",
    elems: [
      {
        icon: SiTypescript,
        text: "TypeScript",
      },
      {
        icon: SiJavascript,
        text: "JavaScript",
      },
      {
        icon: SiPython,
        text: "Python",
      },
    ],
  },

  {
    category: "frontend",
    elems: [
      {
        icon: SiReact,
        text: "React",
      },
      {
        icon: SiNextdotjs,
        text: "Next",
      },
      {
        icon: SiNuxtdotjs,
        text: "Nuxt",
      },
      {
        icon: SiVuedotjs,
        text: "Vue",
      },
      {
        icon: SiTailwindcss,
        text: "Tailwind",
      },
      {
        icon: SiHtml5,
        text: "HTML5",
      },
      {
        icon: SiCss3,
        text: "CSS3",
      },
    ],
  },
  {
    category: "backend",
    elems: [
      {
        icon: SiDjango,
        text: "Django",
      },
      {
        icon: SiNodedotjs,
        text: "Node",
      },
      // {
      //   icon: SiExpress,
      //   text: "Express",
      // },
      // {
      //   icon: SiMongodb,
      //   text: "MongoDB",
      // },
    ],
  },
  {
    category: "other",
    elems: [
      {
        icon: SiSupabase,
        text: "Supabase",
      },
      {
        icon: SiFirebase,
        text: "Firebase",
      },
      {
        icon: SiFigma,
        text: "Figma",
      },
      {
        icon: SiGit,
        text: "Git",
      },
    ],
  },
];

export interface Project {
  id?: number;
  title: string;
  description: string;
  link: string;
  img: string;
  skills: { icon: IconType; text: string }[];
}

export const projects: Project[] = [
  {
    title: "Asuaya",
    description:
      "Une alternative à linktree axée sur le partage de photo construit sur Next.js et Tailwind. Avec Supabase pour gérer la base de données et Cloudinary pour stocker les images. Intégration avec Stripe en cours pour ajouter des abonnements payants",
    link: "https://asuaya.vercel.app/",
    img: "/images/projects/kuta.avif",
    skills: [
      {
        icon: SiReact,
        text: "React",
      },
      {
        icon: SiNextdotjs,
        text: "Next",
      },
      {
        icon: SiSupabase,
        text: "Supabase",
      },
      {
        icon: SiTailwindcss,
        text: "Tailwind",
      },
      {
        icon: SiStripe,
        text: "Stripe",
      },
    ],
  },
  {
    title: "Journey",
    description:
      "Une web app permettant aux utilisateurs de s'inscrire afin d'avoir leur propre blog où ils pourront créer des posts et ensuite partager leur username pour que tout le monde puisse voir leur posts, réalisé en Nuxt(Vue.js) et Supabase.",
    link: "https://journeyapp.vercel.app/",
    img: "/images/projects/journey.avif",
    skills: [
      {
        icon: SiNuxtdotjs,
        text: "Nuxt",
      },
      {
        icon: SiVuedotjs,
        text: "Vue.js",
      },
      {
        icon: SiTailwindcss,
        text: "Tailwind",
      },
      {
        icon: SiSupabase,
        text: "Supabase",
      },
    ],
  },
  {
    title: "Openfiles",
    description:
      "Une app pour stocker ses fichiers avec les méthodes de chiffrement les plus robustes ( chiffrement avec clés AES, et chiffrement avec paire de clés RSA ). Frontend réalisé avec Next.js, le backend et le chiffrement en python avec Django. Ce projet à pour but d'être Open Source prochainement",
    link: "https://openfiles-omega.vercel.app/",
    img: "/images/projects/openfiles.avif",
    skills: [
      {
        icon: SiReact,
        text: "React",
      },
      {
        icon: SiNextdotjs,
        text: "Next",
      },
      {
        icon: SiDjango,
        text: "Django",
      },
      {
        icon: SiTailwindcss,
        text: "Tailwind",
      },
    ],
  },

  // {
  //   title: "TechNews",
  //   description: "Un site de blog réalisé avec Nextjs et ContentLayer",
  //   link: "https://tech-news-gold.vercel.app/",
  //   img: "/images/projects/technews.avif",
  // },
  // {
  //   title: "Page d'acceuil de Github",
  //   description:
  //     "Page d'accueil de Github recréée. En Next.js, Framer Motion pour les animations, Tailwindcss, TypeScript",
  //   link: "https://github-homepage-pearl.vercel.app/",
  //   img: "/images/projects/githubhome.avif",
  // },
  // {
  //   title: "Audiophile",
  //   description:
  //     "Site e-commerce pour les audiophiles réalisé avec React et stylisé avec du SASS.",
  //   link: "https://audiophile-six-gules.vercel.app/",
  //   img: "/images/projects/audiophile.avif",
  // },
  {
    title: "Intheair",
    description:
      "Refonte du site actuel de la startup Intheair avec Next.js et Framer Motion pour toutes les animations",
    link: "https://demo-ita.vercel.app/",
    img: "/images/projects/intheair.avif",
    skills: [
      {
        icon: SiReact,
        text: "React",
      },
      {
        icon: SiNextdotjs,
        text: "Next",
      },
      {
        icon: SiTailwindcss,
        text: "Tailwind",
      },
    ],
  },
  // {
  //   title: "MetaPlace",
  //   description: "Site statique avec des animations au scroll.",
  //   link: "https://metaplace-mocha.vercel.app/",
  //   img: "/images/projects/metaplace.avif",
  //   skills: [
  //     {
  //       icon: SiReact,
  //       text: "React",
  //     },
  //     {
  //       icon: SiNextdotjs,
  //       text: "Next",
  //     },
  //     {
  //       icon: SiTailwindcss,
  //       text: "Tailwind",
  //     },
  //   ],
  // },
];

export const projectsNewVersion = [
  {
    id: 2,
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
    title: "IntheairLabs",
    description:
      "IntheairLabs, une web app pour l'instant B2B permettant aux clients de gérer leur projets, de télécharger leur livrables et de les visualiser directement sur la plateforme. Espace admin et espace client.",
    link: "https://labs.intheair.co/login",
    img: "/images/newversion/INTHEAIRLABS/intheairlabs-login2.avif",
    skills: icons.filter((icon) =>
      ["Figma", "React", "JavaScript"].includes(icon.label)
    ),
  },
  {
    id: 0,
    title: "Cayo (Version bêta)",
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
        "JavaScript",
        "Photoshop",
      ].includes(icon.label)
    ),
  },
  {
    id: 4,
    title: "Les Bambinets",
    description:
      "Projet complètement axé UX et conception UI, application mobile d'apprentissage de la langue des signes pour bébé avec glossaire vidéo et favoris pour améliorer la communication précoce.",
    link: null,
    img: "/images/newversion/LES_BAMBINETS/illustration.avif",
    skills: icons.filter((icon) => ["Figma"].includes(icon.label)),
  },
  {
    id: 5,
    title: "Mon Carnet de Recettes",
    description:
      "Plateforme de création et d'organisation de recettes avec un système automatisé de génération de livres de cuisine (PDF haute définition) prêts pour l'impression.",
    link: "https://moncarnetderecettes.vercel.app/",
    img: "/images/newversion/MON_CARNET_DE_RECETTES/hp.webp",
    skills: icons.filter((icon) =>
      ["Figma", "TailwindCSS", "TypeScript", "React"].includes(icon.label)
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
