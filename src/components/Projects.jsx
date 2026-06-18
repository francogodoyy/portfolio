"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/AppContext";

const projects = [
  {
    key: "pagos",
    image: "/projects/pagos.jpg",
    github: "https://github.com/francogodoyy/pagos",
    demo: "https://shine-pagos.vercel.app/admin/login",
  },
  {
    key: "turnos",
    image: "/projects/turnos.jpg",
    github: "https://github.com/francogodoyy/turnos-app",
    demo: "https://turnos-app-web.vercel.app/",
  },
  {
    key: "chatbot",
    image: "/projects/chatbot.jpg",
    github: "https://github.com/francogodoyy/chatbot-frontend",
    demo: "https://chatbot-frontend.up.railway.app/",
  },
];

function ProjectCard({ project, lang }) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div
        className="w-full h-56 rounded-xl bg-cover bg-center"
        style={{ backgroundImage: `url(${project.image})` }}
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white transition-opacity duration-300 rounded-xl"
        style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
      >
        <h3 className="text-lg font-bold mb-1">{lang.title}</h3>
        <p className="text-sm text-gray-300 text-center px-4 mb-3">{lang.description}</p>
        <div className="flex gap-4">
          <a href={project.github} target="_blank" className="bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-600 transition">GitHub</a>
          <a href={project.demo} target="_blank" className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-500 transition">Demo</a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { t } = useLang();

  return (
    <section id="projects" className="min-h-screen py-0 mb-0" style={{ backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
      <h2 className="text-4xl font-bold text-center pt-12" style={{ color: "var(--text-primary)" }}>
        {t.projects.title} <span style={{ color: "var(--accent)" }}>{t.projects.highlight}</span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
        {projects.map((project) => {
          const lang = t.projects.items.find((_, i) => projects[i].key === project.key);
          return <ProjectCard key={project.key} project={project} lang={lang} />;
        })}
      </div>
    </section>
  );
}