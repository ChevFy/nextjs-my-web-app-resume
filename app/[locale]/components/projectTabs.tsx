"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "./projectCard";

type ProjectItem = {
  name: string;
  description: string;
  techstack: string[];
  img: string;
  src: string;
};

type SchoolProjectItem = {
  name: string;
  description: string;
  techstack: string[];
  src: string;
};

type ProjectTabsProps = {
  projects: ProjectItem[];
  schoolProjects: SchoolProjectItem[];
  sideLabel: string;
  schoolLabel: string;
  githubLabel: string;
};

export default function ProjectTabs({ projects, schoolProjects, sideLabel, schoolLabel, githubLabel }: ProjectTabsProps) {
  const [tab, setTab] = useState<"side" | "42">("side");

  const tabs = [
    { id: "side" as const, label: sideLabel },
    { id: "42" as const, label: schoolLabel },
  ];

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-center gap-3 mt-10 px-6">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`relative px-5 py-2 rounded-full text-sm md:text-base font-semibold transition-colors duration-300 cursor-pointer ${tab === t.id ? "text-white" : "text-slate-300 hover:text-white"
              }`}
          >
            {tab === t.id && (
              <motion.span
                layoutId="project-tab-pill"
                className="absolute inset-0 rounded-full bg-blue-600 "
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{t.label}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {tab === "side" ? (
            projects.length > 0 ? (
              projects.map((project, index) => (
                <ProjectCard key={`${project.name}-${index}`} project={project} index={index} />
              ))
            ) : (
              <p className="text-center text-slate-300 mt-10">No project data</p>
            )
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-6 md:px-20 pb-10">
              {schoolProjects.map((project) => (
                <a
                  key={project.name}
                  href={project.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col p-6 rounded-2xl bg-slate-800/70 border border-transparent text-white shadow-xl hover:scale-105 hover:border-blue-500/50 hover:shadow-[0_0_35px_rgba(59,130,246,0.35)] transition-all duration-300 ease-out"
                >
                  <h3 className="font-bold text-2xl text-blue-500">{project.name}</h3>
                  <p className="mt-4 leading-relaxed text-slate-200 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.techstack.map((tech) => (
                      <span
                        key={`${project.name}-${tech}`}
                        className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/40 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="mt-6 text-sm text-blue-400 group-hover:text-blue-300">{githubLabel} →</span>
                </a>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
