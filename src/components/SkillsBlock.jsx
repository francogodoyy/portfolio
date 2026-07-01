"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiAmazonwebservices, SiDjango, SiJavascript, SiMysql, SiNestjs, SiNextdotjs, SiRailway, SiVercel } from "react-icons/si";

const skills = [
  { name: "Next.js", icon: <SiNextdotjs size={28} />, desc: "Fullstack Development.", color: "text-foreground", bg: "var(--bg-card)" },
  { name: "React.js", icon: <FaReact size={28} />, desc: "Frontend & UI Development.", color: "text-cyan-400", bg: "rgba(34,211,238,0.1)" },
  { name: "JavaScript", icon: <SiJavascript size={28} />, desc: "Frontend & Backend Development.", color: "text-yellow-400", bg: "rgba(250,204,21,0.1)" },
  { name: "Node.js & Express", icon: <FaNodeJs size={28} />, desc: "Backend API Development.", color: "text-green-500", bg: "rgba(34,197,94,0.1)" },
  { name: "MySQL", icon: <SiMysql size={28} />, desc: "Database Management.", color: "text-blue-500", bg: "rgba(59,130,246,0.1)" },
  { name: "Nest.js", icon: <SiNestjs size={28} />, desc: "Fullstack Development.", color: "text-red-500", bg: "rgba(239,68,68,0.1)" },
  { name: "Python", icon: <FaPython size={28} />, desc: "Backend Development.", color: "text-green-600", bg: "rgba(22,163,74,0.1)" },
  { name: "Django", icon: <SiDjango size={28} />, desc: "Web Development.", color: "text-green-700", bg: "rgba(21,128,61,0.1)" },
  { name: "AWS RDS", icon: <SiAmazonwebservices size={28} />, desc: "Cloud Database Management.", color: "text-orange-400", bg: "rgba(251,146,60,0.1)" },
  { name: "Vercel", icon: <SiVercel size={28} />, desc: "Web Deployment.", color: "text-foreground", bg: "var(--bg-card)" },
  { name: "Railway", icon: <SiRailway size={28} />, desc: "Web Deployment.", color: "text-purple-400", bg: "rgba(192,132,252,0.1)" },
];

export default function SkillsBlock() {
  return (
    <section className="w-full px-4 pb-16 md:pb-24" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6">
          {skills.map((skill, index) => {
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div
                  className="group relative h-full overflow-hidden rounded-2xl border p-5 transition-all hover:shadow-xl"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: "var(--border-accent)",
                  }}
                >
                  <motion.div
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: skill.bg }}
                  />

                  <div className="relative z-10">
                    <motion.div transition={{ duration: 0.6 }} className="mb-3">
                      <div
                        className="w-fit rounded-xl p-3"
                        style={{ backgroundColor: skill.bg }}
                      >
                        <span className={skill.color}>{skill.icon}</span>
                      </div>
                    </motion.div>

                    <h3 className="mb-1 text-lg font-semibold" style={{ color: "var(--text-primary)" }}>
                      {skill.name}
                    </h3>
                    <p style={{ color: "var(--text-muted)" }} className="text-sm">
                      {skill.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
