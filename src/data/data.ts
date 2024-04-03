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
        icon: SiTailwindcss,
        text: "Tailwind",
      },
      {
        icon: SiRedux,
        text: "Redux",
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
        icon: SiNodedotjs,
        text: "Node",
      },
      {
        icon: SiExpress,
        text: "Express",
      },
      {
        icon: SiMongodb,
        text: "MongoDB",
      },
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
}

export const projects: Project[] = [
  {
    title: "Kuta",
    description:
      "Une alternative à linktree axée sur le partage de photo construit sur Next.js et Tailwind. Avec Supabase pour gérer la base de données et Cloudinary pour stocker les images.",
    link: "https://kuta.vercel.app/",
    img: "/images/projects/kuta.png",
  },
  {
    title: "TechNews",
    description: "Un site de blog réalisé avec Nextjs et ContentLayer",
    link: "https://tech-news-gold.vercel.app/",
    img: "/images/projects/technews.png",
  },
  {
    title: "Page d'acceuil de Github",
    description:
      "Page d'accueil de Github recréée. En Next.js, Framer Motion pour les animations, Tailwindcss, TypeScript",
    link: "https://github-homepage-pearl.vercel.app/",
    img: "/images/projects/githubhome.png",
  },
  {
    title: "Audiophile",
    description:
      "Site e-commerce pour les audiophiles réalisé avec React et stylisé avec du SASS.",
    link: "https://audiophile-six-gules.vercel.app/",
    img: "/images/projects/audiophile.png",
  },
  {
    title: "MetaPlace",
    description: "Site statique avec des animations au scroll.",
    link: "https://metaplace-mocha.vercel.app/",
    img: "/images/projects/metaplace.png",
  },
];
