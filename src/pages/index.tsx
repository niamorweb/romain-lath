import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Braces,
  Code2,
  Github,
  Linkedin,
  Mail,
  MoveDown,
  Server,
} from "lucide-react";

import {
  projectsNewVersion,
  skillsNewVersion,
} from "@/components/newVersion/projets/data/data";

import ProjectDetailViewCayo from "@/components/newVersion/projets/cayo";
import ProjectDetailViewCarnet from "@/components/newVersion/projets/moncarnetderecettes";
import ProjectDetailViewIntheair from "@/components/newVersion/projets/sitevitrine";
import ProjectDetailViewSaas from "@/components/newVersion/projets/plateformesaas";
import Link from "next/link";

const ModernBackground = () => (
  <div className="fixed inset-0 -z-20 overflow-hidden bg-[#020408]">
    <motion.div
      animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[-20%] left-[10%] w-[60vw] h-[60vw] bg-indigo-900/40 rounded-full blur-[150px] mix-blend-screen"
    />
    <motion.div
      animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-slate-800/30 rounded-full blur-[150px] mix-blend-screen"
    />
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay" />
  </div>
);

const ModernSkillCard = ({ title, icon: Icon, skills, accentColor }: any) => (
  <div
    className={`group ${
      title === "Frontend" && "col-span-2"
    } relative bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-2xl p-6 flex flex-col gap-5 overflow-hidden transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]`}
  >
    <div className="flex items-center gap-3">
      <div
        className={`p-2 rounded-lg bg-white/5 ${accentColor} bg-clip-text text-transparent`}
      >
        <Icon
          size={22}
          className={accentColor.replace("bg-gradient-to-br", "text")}
        />
      </div>
      <h4 className="text-white font-semibold text-lg tracking-tight">
        {title}
      </h4>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill: any, i: number) => (
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-black/20 transition-all duration-300 hover:text-white hover:border-white/30 hover:shadow-[0_0_10px_rgba(255,255,255,0.1)_inset]">
          <Image width={16} height={16} src={skill.icon} key={i} alt="" />
          <span key={i} className="text-[11px] font-medium text-neutral-300 ">
            {skill.label}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default function PortfolioModern() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedProject]);

  const frontendSkills = skillsNewVersion[0]?.elems || [];
  const designSkills = skillsNewVersion[1]?.elems || [];
  const backendSkills = skillsNewVersion[2]?.elems || [];

  const handleNextProject = (currentUrl: string) => {
    const currentIndex = projectsNewVersion.findIndex(
      (p: any) => p.url === currentUrl
    );

    const nextIndex = currentIndex + 1;

    if (nextIndex < projectsNewVersion.length) {
      setSelectedProject(projectsNewVersion[nextIndex]);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setSelectedProject(null);
    }
  };

  const renderProjectDetail = () => {
    if (!selectedProject) return null;

    const nextProject =
      projectsNewVersion[
        projectsNewVersion.findIndex(
          (p: any) => p.url === selectedProject.url
        ) + 1
      ];

    const commonProps = {
      project: selectedProject,
      onClose: () => setSelectedProject(null),
      onNextProject: () => handleNextProject(selectedProject.url),
      nextProjectName: nextProject?.title || "Retour à l'accueil",
    };

    switch (selectedProject.url) {
      case "moncarnetderecettes":
        return <ProjectDetailViewCarnet {...commonProps} />;
      case "cayo":
        return <ProjectDetailViewCayo {...commonProps} />;
      case "intheair":
        return <ProjectDetailViewIntheair {...commonProps} />;
      case "intheairlabs":
        return <ProjectDetailViewSaas {...commonProps} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Head>
        <title>
          Romain Lathuiliere — Fullstack Developer JavaScript / TypeScript
        </title>
      </Head>

      <ModernBackground />

      <main className="min-h-screen text-white font-sans selection:bg-white/20 selection:text-white">
        {/* NAV */}
        <nav className="fixed top-0 left-0 w-full z-40 px-8 py-6 flex justify-between items-center mix-blend-screen pointer-events-none">
          <span className="text-lg font-bold tracking-tight pointer-events-auto flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            Romain Lathuiliere
          </span>
          <div className="flex items-center gap-2">
            <Link
              target="_blank"
              href="mailto:romain.lathuiliere@icloud.com"
              className="bg-black/40 pointer-events-auto backdrop-blur-md border border-white/10 text-white p-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              <Mail />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/romain-lathuiliere-681221268/"
              className="bg-black/40 pointer-events-auto backdrop-blur-md border border-white/10 text-white p-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              <Linkedin />
            </Link>
            <Link
              href="https://github.com/niamorweb"
              target="_blank"
              className="bg-black/40 pointer-events-auto backdrop-blur-md border border-white/10 text-white p-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              <Github />
            </Link>
          </div>
        </nav>

        {/* HERO SECTION */}
        <section className="pt-44 pb-20 px-8 max-w-[1400px] mx-auto min-h-[90vh] flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 h-1 w-10 bg-neutral-300 text-neutral-400 font-mono text-sm tracking-widest uppercase"
              ></motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-6xl md:text-8xl font-bold tracking-tighter leading-[1] mb-8 text-neutral-500"
              >
                Développeur <br />
                <span className="text-white">Fullstack JS/TS.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-neutral-400 max-w-xl leading-relaxed"
              >
                Je construis des applications web de bout en bout avec
                l'écosystème{" "}
                <span className="text-white font-medium border-b border-white/30 pb-0.5">
                  TypeScript
                </span>
                . Expert <span className="text-white">Next.js & NestJS</span>,
                je développe des solutions de la{" "}
                <span className="text-white font-medium border-b border-white/30 pb-0.5">
                  base de données (Prisma/SQL)
                </span>{" "}
                jusqu'à l'interface utilisateur, avec une forte sensibilité{" "}
                <span className="text-white font-medium">UI/UX</span>.
              </motion.p>
              <motion.a
                href="/#projects"
                className="bg-indigo-500/10 group text-indigo-300 border border-indigo-500/20 px-8 py-3.5 rounded-full font-medium hover:bg-indigo-500/20 hover:text-white transition-all w-fit mt-12 flex items-center gap-2 backdrop-blur-md text-sm cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <span className="font-light tracking-wide uppercase text-sm ">
                  Etude de cas
                </span>

                <MoveDown className="size-5 group-hover:translate-y-1 duration-300 ease-out" />
              </motion.a>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="grid grid-cols-2 gap-4"
              >
                <ModernSkillCard
                  title="Frontend"
                  icon={Code2}
                  accentColor="text-blue-400"
                  skills={frontendSkills.slice(0, 8)}
                />
                <ModernSkillCard
                  title="Backend"
                  icon={Braces}
                  accentColor="text-purple-400"
                  skills={designSkills.slice(0, 6)}
                />
                <ModernSkillCard
                  title="BDD et outils"
                  icon={Server}
                  accentColor="text-emerald-400"
                  skills={backendSkills.slice(0, 4)}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* PROJECTS GRID */}
        <section className="px-8 py-32 max-w-[1400px] mx-auto" id="projects">
          <div className="flex flex-col mb-16">
            <span className="text-neutral-500 font-mono text-sm tracking-widest uppercase mb-2">
              Projets sélectionnés 24-26
            </span>
            <h2 className="text-3xl font-bold text-white">Études de cas</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            {projectsNewVersion.map((project: any, i: number) => (
              <motion.div
                key={i}
                layoutId={`card-container-${project.url}`}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="relative aspect-[16/11] rounded-xl overflow-hidden bg-[#0a0a0a] border border-white/10 mb-6 transition-all duration-500 group-hover:border-white/30">
                  <motion.div
                    layoutId={`image-container-${project.url}`}
                    className="w-full h-full relative"
                  >
                    <Image
                      src={project.img}
                      fill
                      alt={project.title}
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                  </motion.div>
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/20 -translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight className="text-white w-5 h-5" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold text-white group-hover:underline decoration-white/30 underline-offset-4 transition-all">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    {project.skills.map((s: any, idx: number) => (
                      <span key={idx} className="text-xs text-neutral-400">
                        {s.label} {project.skills.length - 1 > idx && "•"}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* MODAL PROJET (Dynamique) */}
        <AnimatePresence>
          {selectedProject && renderProjectDetail()}
        </AnimatePresence>
      </main>
    </>
  );
}
