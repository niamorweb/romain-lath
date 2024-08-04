import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { SiJavascript, SiTypescript } from "react-icons/si";
import { skills, projects } from "@/data/data";
import { useEffect, useState } from "react";
import ContactForm from "@/components/Contact";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaHamburger } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

const inter = Inter({ subsets: ["latin"] });

const project = [1, 2, 3, 4];
export default function Home() {
  const [isMobileNav, setIsMobileNav] = useState(false);

  const linksHomePage = [
    {
      name: "Accueil",
      link: "/",
    },
    {
      name: "Projets",
      link: "/#projets",
    },
    {
      name: "Compétences",
      link: "/#competences",
    },
    {
      name: "Contact",
      link: "/#contact",
    },
  ];

  return (
    <div className="bg-white text-[#494949]">
      <div
        className={`min-h-screen relative bg-white border-x-[1px] border-x-black w-[90vw] mx-auto max-w-[1280px] ${inter.className}`}
      >
        {isMobileNav && (
          <div className="lg:hidden absolute border-b-black border-b-[1px] top-[10vh] bg-white w-full py-3 px-3 flex items-center gap-5">
            {linksHomePage.map((x, index) => (
              <Link key={index} href={x.link}>
                {x.name}
              </Link>
            ))}
          </div>
        )}
        <header className="h-[10vh] lg:h-[15vh] z-30 sticky  top-0 bg-white flex items-end py-3 px-4 border-b-[1px] border-b-black justify-between">
          <span className="text-2xl font-medium">ROMAIN LATHUILIERE</span>
          {isMobileNav ? (
            <CgClose
              onClick={() => setIsMobileNav(false)}
              className="cursor-pointer block h-6 w-6 lg:hidden"
            />
          ) : (
            <GiHamburgerMenu
              onClick={() => setIsMobileNav(true)}
              className="cursor-pointer block h-6 w-6 lg:hidden"
            />
          )}

          <div className="hidden lg:flex items-center gap-5">
            {linksHomePage.map((x, index) => (
              <Link key={index} href={x.link}>
                {x.name}
              </Link>
            ))}
          </div>
        </header>
        <section className="h-[90vh] lg:h-[85vh] px-4 pt-14 flex items-center hero_bg">
          <div className="flex flex-col items-start -translate-y-10 gap-4 max-w-[600px] ">
            <h1 className="text-4xl lg:text-6xl font-black uppercase">
              Je suis un développeur web frontend / intégrateur web
              {/* JE CONSTRUIS DES CHOSES AVEC MA SOURIS ET MON CLAVIER. */}
            </h1>
            <Link
              href="/#projets"
              className="text-md lg:text-xl font-medium uppercase flex items-center gap-3 hover:gap-6 duration-150"
            >
              <span>Voir mes projets créés</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </section>
        <section
          className="h-[50px] border-y-[1px] border-y-black"
          style={{
            backgroundColor: "#fff",
            opacity: 0.6,
            background:
              "repeating-linear-gradient( -45deg, #000000, #000000 1px, #ffffff 1px, #ffffff 25px );",
          }}
        ></section>

        <section id="projets" className="px-6 py-20">
          <h1 className="py-14 text-4xl lg:text-6xl font-black uppercase">
            Projets sélectionnés
          </h1>
          <div className="grid gap-10 lg:gap-6">
            {projects.map((x, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row items-center px-6 py-6 lg:py-0 lg:gap-6 border-[1px] border-black overflow-hidden"
              >
                <div className="lg:w-1/2 lg:px-8 grid gap-3">
                  <h2 className="text-3xl font-extrabold">{x.title}</h2>
                  <div className="h-[1px] bg-opacity-20  bg-slate-600"></div>
                  <p>{x.description}</p>
                  <Link
                    target="_blank"
                    className="duration-150 underline underline-offset-2 hover:underline-offset-4  w-fit "
                    href={x.link}
                  >
                    Site Web
                  </Link>
                </div>
                <div className="lg:w-1/2 translate-y-1/4 border border-black p-1 lg:p-3 hover:translate-y-[20%] duration-150 rounded-xl lg:rounded-3xl">
                  <img
                    className="rounded-xl lg:rounded-2xl border border-black"
                    src={x.img}
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="competences"
          className="border-y border-y-black px-6 py-20 flex flex-col gap-10"
        >
          <h1 className="uppercase py-14 text-4xl lg:text-6xl font-black">
            Mes compétences
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((x, index) => (
              <div
                key={index}
                className="p-6 border-black border flex flex-col gap-4"
              >
                <h2 className="text-xl font-semibold uppercase">
                  {x.category}
                </h2>
                <div className="flex flex-wrap gap-4 w-fit max-w-[400px]">
                  {x.elems.map((elem, index) => (
                    <div
                      key={index}
                      className="px-3 py-1 rounded-sm bg-slate-200 flex-shrink gap-3 w-fit flex justify-start items-center"
                    >
                      <elem.icon className=" flex-grow " />
                      <span className=" flex-grow ">{elem.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <ContactForm />
        <footer className="border-y border-y-black px-6 py-20 flex flex-col gap-6 ">
          <span>©2024 niamorweb </span>
          <span>Design inspired by George Christeas </span>
        </footer>
      </div>
    </div>
  );
}
