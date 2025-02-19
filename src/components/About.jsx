"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiAmazonwebservices, SiDjango, SiJavascript, SiMongodb, SiMysql, SiNestjs, SiNextdotjs, SiRailway, SiVercel } from "react-icons/si";
import { initParticlesEngine } from "@tsparticles/react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";

const skills = [
  {
    name: "Node.js & Express.js",
    icon: <FaNodeJs size={50} color="white" />,
    desc: "Backend API Development.",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={50} color="white" />,
    desc: "Fullstack Development.",
  },
  {
    name: "Nest.js",
    icon: <SiNestjs size={50} color="red" />,
    desc: "Fullstack Developer.",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={50} color="yellow" />,
    desc: "Backend Development",
  },
  {
    name: "React.js",
    icon: <FaReact size={50} color="#61DBFB" />,
    desc: "Frontend y UI Development.",
  },
  {
    name: "Python",
    icon: <FaPython size={50} color="#3C873A" />,
    desc: "Backend Development.",
  },
  {
    name: "Django",
    icon: <SiDjango size={50} color="white" />,
    desc: "Web Development.",
  },
  {
    name: "MYSQL Workbench",
    icon: <SiMysql size={50} color="blue" />,
    desc: "Database Management.",
  },
  {
    name: "AWS RDS",
    icon: <SiAmazonwebservices size={50} color="white" />,
    desc: "Database Management.",
  },
  {
    name: "Railway",
    icon: <SiRailway size={50} color="white" />,
    desc: "Web Deployment.",
  },
  {
    name: "Vercel",
    icon: <SiVercel size={50} color="black" />,
    desc: "Web Deployment.",
  },
];

const SkillCard = ({ skill }) => {
  return (
    <motion.div
      className="relative bg-[#161616] border border-gray-700 p-6 rounded-2xl shadow-lg text-center w-64 h-56 flex flex-col items-center justify-center
                 transition-all duration-500 ease-in-out hover:border-blue-500 hover:shadow-blue-500/50 hover:scale-105"
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
       {/* About me */}
       <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-200">
          About <span className="text-blue-400">Me</span>
        </h2>
        <p className="text-gray-400 mt-4 leading-relaxed">
          Hi, i'm <span className="text-blue-400 font-semibold">Franco Godoy</span>, a 
          <span className="text-blue-400 font-semibold"> Software Developer</span> from Argentina, 
          <span className="text-blue-400 font-semibold"> passionate about creating AI and others solutions for companies.</span> I specialize in 
          <span className="text-blue-400 font-semibold"> Fullstack Web Development</span>, working on technologies such as: 
          
        </p>
      </div>

       {/* Skills Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-200">
          Skills & <span className="text-blue-400">Knowledges</span>
        </h2>
        <p className="text-gray-400 mt-2">
          These are my skills and knowledge that i have.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
}
