import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative flex min-h-screen h-full bg-gradient-to-b from-[#321b4b] to-black text-gray-200 flex-col items-center justify-center px-8 overflow-hidden">
      {/* Available for work */}
      <h1 className="flex items-center space-x-2 text-lg sm:text-2xl font-bold text-gray-200">
        <FaCode className="text-purple-500 text-4xl sm:text-3xl animate-pulse" />
        <span className="tracking-widest">Franco Godoy</span>
      </h1>

      <motion.button
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="absolute top-8 sm:top-4 left-8 sm:left-4 text-sm sm:text-xs uppercase tracking-widest bg-white/10 px-4 sm:px-2 py-1 rounded-md shadow-md text-gray-300 border border-white/20 backdrop-blur-md animate-fadeIn z-20"
        onClick={() =>
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        ✦ Available for work ✦
      </motion.button>

      {/* Animación y título principal */}
      <div className="text-center relative z-10 font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#341b4b] to-blue-500 drop-shadow-md animate-glow">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-7xl"
        >
          SOFTWARE DEVELOPER
        </motion.h2>

        <TypeAnimation
          sequence={[
            "Specialized in web development & business solutions",
            2000,
            "",
          ]}
          speed={50}
          repeat={Infinity}
          className="text-lg text-gray-300 mt-4 tracking-wider relative before:absolute before:bottom-[-2px] before:left-0 before:w-full before:h-[2px] "
        />
      </div>

      {/* Botón con animación */}
      <motion.button
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="z-20 mt-6 px-8 py-3 bg-purple-950 text-white font-semibold rounded-xl shadow-lg shadow-purple-900/50 hover:bg-purple-400 hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
        onClick={() =>
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        Get in Touch
      </motion.button>
      <style jsx>{`
        @keyframes glow {
          0% {
            text-shadow: 0 0 5px #8b5cf6, 0 0 10px #8b5cf6, 0 0 15px #3b82f6;
          }
          50% {
            text-shadow: 0 0 10px #9333ea, 0 0 15px #2563eb, 0 0 20px #1e40af;
          }
          100% {
            text-shadow: 0 0 5px #8b5cf6, 0 0 10px #8b5cf6, 0 0 15px #3b82f6;
          }
        }

        .animate-glow {
          animation: glow 2s infinite alternate ease-in-out;
        }
      `}</style>
    </main>
  );
}
