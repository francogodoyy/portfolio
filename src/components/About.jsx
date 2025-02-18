"use client";

import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaReact, FaNodeJs, FaPython, FaSchool } from "react-icons/fa";
import {
  SiAmazonwebservices,
  SiDjango,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiRailway,
  SiVercel,
} from "react-icons/si";
import { Code, Code2, School } from "lucide-react";

const timeline = [
  {
    year: "2022-2024",
    event: "I started my career in Software Development",
    icon: FaSchool,
  },
  {
    year: "2023-2024",
    event: "At the same time I started the Informatorio-Chaco 1st & 2nd instance",
    icon: Code2,
  },
  {
    year: "2022-2025",
    event:
      "Learned programming languages and technologies such as: Node.js, Next.js, Nest.js, React, JavaScript, Python, Django, Java, HTML5, CSS, Bootstrap",
    icon: FaNodeJs,
  },
  {
    year: "2024-2025",
    event: "I am currently focused on Web Development with Node.js, Next.js, Nest.js, React.js and AI",
    icon: SiNestjs,
  },
];

const skills = [
  {
    name: "Node.js & Express.js",
    icon: FaNodeJs,
    desc: "Backend API Development.",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    desc: "Fullstack Development.",
  },
  {
    name: "Nest.js",
    icon: SiNestjs,
    desc: "Fullstack Developer.",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    desc: "Backend Development",
  },
  {
    name: "React.js",
    icon: FaReact,
    desc: "Frontend y UI Development.",
  },
  {
    name: "Python",
    icon: FaPython,
    desc: "Backend Development.",
  },
  {
    name: "Django",
    icon: SiDjango,
    desc: "Web Development.",
  },
  {
    name: "MYSQL Workbench",
    icon: SiMysql,
    desc: "Database Management.",
  },
  {
    name: "AWS RDS",
    icon: SiAmazonwebservices,
    desc: "Database Management.",
  },
  {
    name: "Railway",
    icon: SiRailway,
    desc: "Web Deployment.",
  },
  {
    name: "Vercel",
    icon: SiVercel,
    desc: "Web Deployment.",
  },
];

const SkillCard = ({ skill }) => {
  const IconComponent = skill.icon;
  return (
    <motion.div
      className="relative bg-[#161616] border border-gray-700 p-6 rounded-2xl shadow-lg text-center w-64 h-56 flex flex-col items-center justify-center
                 transition-all duration-500 ease-in-out hover:border-purple-950 hover:shadow-blue-500/50 hover:scale-105"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
    >
      <IconComponent size={50} color="white" />
      <h3 className="text-lg font-semibold mt-3">{skill.name}</h3>
      <p className="text-sm text-gray-400">{skill.desc}</p>
    </motion.div>
  );
};

export default function About() {
  return (
    <section className="min-h-screen bg-black text-white py-12">
      {/* About Me */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-200">
          About <span className="text-purple-950">Me</span>
        </h2>
        <p className="text-gray-400 mt-4 leading-relaxed">
          Hi, I'm{" "}
          <span className="text-purple-950 font-semibold">Franco Godoy</span>, a
          <span className="text-purple-950 font-semibold">
            {" "}
            Software Developer
          </span>{" "}
          from Argentina,
          <span className="text-purple-950 font-semibold">
            {" "}
            passionate about creating AI and other solutions for companies.
          </span>{" "}
          I specialize in
          <span className="text-purple-950 font-semibold">
            {" "}
            Fullstack Web Development
          </span>
          , working with technologies such as:
        </p>
      </div>

      {/* Skills Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-200">
          Skills & <span className="text-purple-950">Technologies</span>
        </h2>
        <p className="text-gray-400 mt-2">
          These are my skills and knowledge that I have acquired.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>

      {/* Timeline Section */}
      <div className="text-center mt-20 mb-16">
        <h2 className="text-4xl font-bold text-gray-200">
          My <span className="text-purple-950">Journey</span>
        </h2>
      </div>

      <VerticalTimeline>
        {timeline.map((item, index) => {
          const IconComponent = item.icon; // Extraemos el icono como componente React
          return (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#161616",
                color: "#fff",
                border: "1px solid #2D3748",
              }}
              contentArrowStyle={{ borderRight: "7px solid #2D3748" }}
              date={item.year}
              iconStyle={{ background: "#2D3748", color: "#fff" }}
              icon={<IconComponent size={30} color="purple" />} // Renderizamos el icono correctamente
            >
              <h3 className="vertical-timeline-element-title text-lg font-semibold">
                {item.year}
              </h3>
              <p className="text-gray-400">{item.event}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </section>
  );
}
