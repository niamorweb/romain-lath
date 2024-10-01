import { IconType } from "react-icons";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiAmazonaws,
  SiSupabase,
  SiFirebase,
  SiRedux,
  SiGit,
  SiDocker,
  SiBootstrap,
  SiMui,
  SiPrisma,
  SiFlutter,
  SiHeroku,
  SiTailwindcss,
  SiFigma,
  SiDjango,
  SiVuedotjs,
  SiStripe,
  SiNuxtdotjs,
} from "react-icons/si";

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
    img: "/images/projects/kuta.png",
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
    img: "/images/projects/journey.png",
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
    img: "/images/projects/openfiles.png",
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
  //   img: "/images/projects/technews.png",
  // },
  // {
  //   title: "Page d'acceuil de Github",
  //   description:
  //     "Page d'accueil de Github recréée. En Next.js, Framer Motion pour les animations, Tailwindcss, TypeScript",
  //   link: "https://github-homepage-pearl.vercel.app/",
  //   img: "/images/projects/githubhome.png",
  // },
  // {
  //   title: "Audiophile",
  //   description:
  //     "Site e-commerce pour les audiophiles réalisé avec React et stylisé avec du SASS.",
  //   link: "https://audiophile-six-gules.vercel.app/",
  //   img: "/images/projects/audiophile.png",
  // },
  {
    title: "Intheair",
    description:
      "Refonte du site actuel de la startup Intheair avec Next.js et Framer Motion pour toutes les animations",
    link: "https://demo-ita.vercel.app/",
    img: "/images/projects/intheair.png",
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
  //   img: "/images/projects/metaplace.png",
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
