"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiAmazonwebservices, SiDjango, SiJavascript, SiMongodb, SiMysql, SiNestjs, SiNextdotjs, SiRailway, SiVercel } from "react-icons/si";

const skills = [
  { name: "Node.js & Express.js", icon: <FaNodeJs size={50} color="white" />, desc: "Backend API Development." },
  { name: "Next.js", icon: <SiNextdotjs size={50} color="white" />, desc: "Fullstack Development." },
  { name: "Nest.js", icon: <SiNestjs size={50} color="red" />, desc: "Fullstack Developer." },
  { name: "JavaScript", icon: <SiJavascript size={50} color="yellow" />, desc: "Backend Development" },
  { name: "React.js", icon: <FaReact size={50} color="#61DBFB" />, desc: "Frontend y UI Development." },
  { name: "Python", icon: <FaPython size={50} color="#3C873A" />, desc: "Backend Development." },
  { name: "Django", icon: <SiDjango size={50} color="white" />, desc: "Web Development." },
  { name: "MYSQL Workbench", icon: <SiMysql size={50} color="blue" />, desc: "Database Management." },
  { name: "AWS RDS", icon: <SiAmazonwebservices size={50} color="white" />, desc: "Database Management." },
  { name: "Railway", icon: <SiRailway size={50} color="white" />, desc: "Web Deployment." },
  { name: "Vercel", icon: <SiVercel size={50} color="black" />, desc: "Web Deployment." },
];

const timeline = [
  { year: "2022-2024", event: "I started my career in software development" },
  { year: "2023-2024", event: "At the same time I initiated Informatorio-Chaco 1st & 2nd instance" },
  { year: "2022-2025", event: "Learned programming languages & technologies such as: Node.js, Next.js, Nest.js, React, JavaScript, Python, Django, Java, HTML5, CSS, Bootstrap" },
  { year: "2024-2025", event: "Delved into Web Development with Node.js, Next.js, Nest.js, React.js, and AI" },
];

const SkillCard = ({ skill }) => {
  return (
    <motion.div
      className="relative bg-[#161616] border border-purple-950 p-6 rounded-2xl shadow-lg text-center w-64 h-56 flex flex-col items-center justify-center transition-all duration-500 ease-in-out hover:border-purple-950 hover:shadow-blue-500/50 hover:scale-105"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
    >
      {skill.icon}
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
          Hi, I'm <span className="text-purple-950 font-semibold">Franco Godoy</span>, a <span className="text-purple-950 font-semibold">Software Developer</span> from Argentina, passionate about creating AI and other solutions for companies. I specialize in <span className="text-purple-950 font-semibold">Fullstack Web Development</span>, working on technologies such as:
        </p>
      </div>

      {/* Skills Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-200">
          Skills & <span className="text-purple-950">Knowledges</span>
        </h2>
        <p className="text-gray-400 mt-2">These are my skills and knowledge that I have.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>

      {/* Timeline Section */}
      <div className="text-center mb-16 py-6">
        <h2 className="text-4xl font-bold text-gray-200">
          My <span className="text-purple-950">Journey</span>
        </h2>
      </div>

      <div className="max-w-2xl mx-auto px-6">
        <ol className="border-l border-purple-600">
          {timeline.map((item, index) => (
            <motion.li
              key={index}
              className="mb-6 ml-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="absolute w-3 h-3 bg-blue-400 rounded-full -left-[6px] mt-1.5"></div>
              <div className="pl-4">
                <h3 className="text-lg font-semibold">{item.year}</h3>
                <p className="text-gray-300">{item.event}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
