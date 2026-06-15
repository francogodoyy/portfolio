import { motion } from "framer-motion";

const projects = [
  {
    title: "Payment Management System",
    description: "Clients payment data is managed",
    github: "https://github.com/francogodoyy/pagos",
    demo: "https://shine-pagos.vercel.app/admin/login",
  },
  {
    title: "ChatBot with ChatGPT 3.5-turbo",
    description: "Chat with the IA",
    github: "https://github.com/francogodoyy/chatbot-frontend",
    demo: "https://chatbot-frontend.up.railway.app/",
  },
];

const ProjectCard = ({ project }) => (
  <motion.div
    className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
  >
    <div className="w-full h-56 bg-gradient-to-br from-[#321b4b] to-black flex items-center justify-center rounded-xl">
      <h3 className="text-xl font-bold text-gray-300 text-center px-4">{project.title}</h3>
    </div>

    <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white transition-opacity duration-300 rounded-xl">
      <p className="text-sm text-gray-300 text-center px-4 mb-3">{project.description}</p>
      <div className="flex gap-4">
        <a href={project.github} target="_blank" className="bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-600 transition">GitHub</a>
        <a href={project.demo} target="_blank" className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-500 transition">Demo</a>
      </div>
    </div>
  </motion.div>
);

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-black text-white py-0 mb-0">
      <h2 className="text-4xl font-bold text-center text-gray-200">My <span className="text-purple-950">Projects</span></h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
