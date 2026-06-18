"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiAmazonwebservices, SiDjango, SiJavascript, SiMysql, SiNestjs, SiNextdotjs, SiRailway, SiVercel } from "react-icons/si";
import { useLang } from "@/context/AppContext";

const skills = [
  { name: "Next.js", icon: <SiNextdotjs size={50} />, desc: "Fullstack Development." },
  { name: "React.js", icon: <FaReact size={50} color="#61DBFB" />, desc: "Frontend & UI Development." },
  { name: "JavaScript", icon: <SiJavascript size={50} color="yellow" />, desc: "Frontend & Backend Development." },
  { name: "Node.js & Express.js", icon: <FaNodeJs size={50} />, desc: "Backend API Development." },
  { name: "MySQL", icon: <SiMysql size={50} color="blue" />, desc: "Database Management." },
  { name: "Nest.js", icon: <SiNestjs size={50} color="red" />, desc: "Fullstack Development." },
  { name: "Python", icon: <FaPython size={50} color="#3C873A" />, desc: "Backend Development." },
  { name: "Django", icon: <SiDjango size={50} />, desc: "Web Development." },
  { name: "AWS RDS", icon: <SiAmazonwebservices size={50} />, desc: "Cloud Database Management." },
  { name: "Vercel", icon: <SiVercel size={50} />, desc: "Web Deployment." },
  { name: "Railway", icon: <SiRailway size={50} />, desc: "Web Deployment." },
];

function SkillCard({ skill }) {
  return (
    <motion.div
      className="p-6 rounded-2xl shadow-lg text-center w-64 h-56 flex flex-col items-center justify-center transition-all duration-500 ease-in-out hover:scale-105"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border-accent)",
        borderWidth: 1,
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
    >
      {skill.icon}
      <h3 className="text-lg font-semibold mt-3" style={{ color: "var(--text-primary)" }}>{skill.name}</h3>
      <p className="text-sm" style={{ color: "var(--text-muted)" }}>{skill.desc}</p>
    </motion.div>
  );
}

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="min-h-screen py-12" style={{ backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
          {t.about.title} <span style={{ color: "var(--accent)" }}>{t.about.highlight}</span>
        </h2>
        <p className="mt-4" style={{ color: "var(--text-muted)" }}>
          {t.about.intro} <span style={{ color: "var(--accent)" }}>{t.about.name}</span>, {t.about.role} {t.about.from}
          <br />{t.about.focus}<br />
          {t.about.specializes}{" "}
          <span style={{ color: "var(--accent)" }}>{t.about.fullstack}</span>, {t.about.techs}
        </p>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
          {t.about.skillsTitle} <span style={{ color: "var(--accent)" }}>{t.about.skillsHighlight}</span>
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {skills.map((skill, i) => (
          <SkillCard key={i} skill={skill} />
        ))}
      </div>

      <div className="text-center mb-16 py-6">
        <h2 className="text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
          {t.about.journeyTitle} <span style={{ color: "var(--accent)" }}>{t.about.journeyHighlight}</span>
        </h2>
      </div>

      <div className="max-w-2xl mx-auto px-6">
        <ol className="border-l" style={{ borderColor: "var(--accent)" }}>
          {t.about.timeline.map((item, i) => (
            <motion.li
              key={i}
              className="mb-6 ml-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <div className="absolute w-3 h-3 rounded-full -left-[6px] mt-1.5" style={{ backgroundColor: "var(--accent-light)" }}></div>
              <div className="pl-4">
                <h3 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>{item.year}</h3>
                <p style={{ color: "var(--text-secondary)" }}>{item.event}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}