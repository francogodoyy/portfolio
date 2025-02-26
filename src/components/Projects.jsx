import { motion } from "framer-motion";

const projects = [
  {
    title: "Sistema de Gestión de Pagos",
    description: "Aplicación para administrar pagos.",
    video: "/projects/pagoss.mp4", 
    github: "https://github.com/francogodoyy/pagos",
    demo: "https://shine-pagos.vercel.app/admin/login",
  },
  {
    title: "E-commerce con Next.js",
    description: "Tienda online con pagos integrados.",
    video: "/projects/chatbot.mp4",
    github: "https://github.com/francogodoyy/chatbot-frontend",
    demo: "https://chatbot-frontend.up.railway.app/",
  },
];

const ProjectCard = ({ project }) => (
  <motion.div
    className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
    whileHover={{ scale: 1.2 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
  >
    {/* Video de preview */}
    <video
      src={project.video}
      autoPlay
      loop
      muted
      className="rounded-xl w-full h-56 object-cover"
    />

    {/* Overlay con detalles */}
    <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-100 flex flex-col justify-center items-center text-white transition-opacity duration-300">
      <h3 className="text-lg font-bold">{project.title}</h3>
      <p className="text-sm text-gray-300 text-center px-4">{project.description}</p>
      <div className="flex gap-4 mt-3">
        <a href={project.github} target="_blank" className="bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-600 transition">🔗 GitHub</a>
        <a href={project.demo} target="_blank" className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-500 transition">🌎 Demo</a>
      </div>
    </div>
  </motion.div>
);

export default function Projects() {
  return (
    <section className="min-h-screen bg-black text-white py-0 mb-0">
      <h2 className="text-4xl font-bold text-center text-gray-200">My <span className="text-purple-950">Projects</span></h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
