const icons = [
  {
    label: "React",
    icon: "/images/icons/react.svg",
  },
  {
    label: "Next.js",
    icon: "/images/icons/nextjs.svg",
  },
  {
    label: "Nuxt",
    icon: "/images/icons/nuxt.svg",
  },
  {
    label: "Jest",
    icon: "/images/icons/jest.svg",
  },
  {
    label: "Nest.js",
    icon: "/images/icons/nestjs.svg",
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
    label: "Express",
    icon: "/images/icons/expressjs.svg",
  },
  {
    label: "Postgresql",
    icon: "/images/icons/postgresql.svg",
  },
  {
    label: "Prisma",
    icon: "/images/icons/prisma.svg",
  },
  {
    label: "Git",
    icon: "/images/icons/git.svg",
  },
  {
    label: "Vue.js",
    icon: "/images/icons/vuejs.svg",
  },
  {
    label: "Postman",
    icon: "/images/icons/postman.svg",
  },
  {
    label: "Docker",
    icon: "/images/icons/docker.svg",
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
  {
    label: "Framer",
    icon: "/images/icons/framer.svg",
  },
  {
    label: "Supabase",
    icon: "/images/icons/supabase.svg",
  },
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
];

const frontendLabels = [
  "Figma",
  "TailwindCSS",
  "React",
  "Next.js",
  "Vue.js",
  "Nuxt",
  "JavaScript",
  "TypeScript",
];

const backendLabels = ["Node.js", "Express", "Nest.js", "Django"];

const dbAndOtherLabels = ["Prisma", "Postgresql", "Git", "Docker", "Postman"];

export const skillsNewVersion = [
  {
    category: "Frontend",
    elems: icons.filter((item) => frontendLabels.includes(item.label)),
  },
  {
    category: "Backend",
    elems: icons.filter((item) => backendLabels.includes(item.label)),
  },
  {
    category: "BDD et autre",
    elems: icons.filter((item) => dbAndOtherLabels.includes(item.label)),
  },
];

export const projectsNewVersion = [
  {
    id: 5,
    url: "moncarnetderecettes",
    title: "Mon Carnet de Recettes",
    repoUrl: "https://github.com/niamorweb/moncarnetderecettes",
    description:
      "Plateforme de création et d'organisation de recettes avec un système automatisé de génération de livres de cuisine (PDF haute définition) prêts pour l'impression.",
    link: "https://moncarnetderecettes.vercel.app/",
    img: "/images/newversion/MON_CARNET_DE_RECETTES/hp-heroo.avif",
    skills: icons.filter((icon) =>
      [
        "Nuxt",
        "Nest.js",
        "Postgresql",
        "Prisma",
        "TypeScript",
        "Figma",
        "TailwindCSS",
        "Vue.js",
        "Docker",
      ].includes(icon.label),
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
    img: "/images/newversion/CAYO/hp-hero.avif",
    skills: icons.filter((icon) =>
      [
        "Figma",
        "TailwindCSS",
        "React",
        "Next.js",
        "TypeScript",
        "Supabase",
        "Jest",
      ].includes(icon.label),
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
      ["Figma", "React", "JavaScript", "Django"].includes(icon.label),
    ),
  },
  {
    id: 2,
    url: "intheair",
    title: "Intheair - Site vitrine",
    description:
      "Le site vitrine de l’entreprise Intheair. Refonte complète du site en allant du design, à l’architecture des pages avec une toute nouvelle navigation. Intégrations avec des applications externes comme Hubspot (pour le côté marketing), Zapier.",
    link: "https://intheair.co/",
    img: "/images/newversion/SITE_VITRINE/intheair-hp.avif",
    skills: icons.filter((icon) =>
      ["Figma", "Photoshop", "Webflow", "JavaScript"].includes(icon.label),
    ),
  },
  // {
  //   id: 4,
  //   url: "lesbambinets",
  //   title: "Les Bambinets",
  //   description:
  //     "Projet complètement axé UX et conception UI, application mobile d'apprentissage de la langue des signes pour bébé avec glossaire vidéo et favoris pour améliorer la communication précoce.",
  //   link: null,
  //   img: "/images/newversion/LES_BAMBINETS/illustration.avif",
  //   skills: icons.filter((icon) => ["Figma"].includes(icon.label)),
  // },
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
