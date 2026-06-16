"use client";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { useLang } from "@/context/AppContext";

export default function Home() {
  const { t } = useLang();

  return (
    <section id="home" className="relative flex min-h-screen flex-col items-center justify-center px-8 overflow-hidden" style={{
      background: "linear-gradient(to bottom, var(--bg-gradient-from), var(--bg-gradient-to))"
    }}>
      <h1 className="flex items-center space-x-2 text-lg sm:text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
        <FaCode className="text-[var(--accent-light)] text-4xl sm:text-3xl animate-pulse" />
        <span className="tracking-widest">Franco Godoy</span>
      </h1>

      <motion.button
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="absolute top-20 sm:top-4 left-8 sm:left-4 text-sm sm:text-xs uppercase tracking-widest px-4 sm:px-2 py-1 rounded-md border backdrop-blur-md animate-fadeIn z-20"
        style={{
          color: "var(--text-muted)",
          backgroundColor: "var(--accent-bg)",
          borderColor: "var(--border-accent)",
        }}
        onClick={() =>
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        {t.home.available}
      </motion.button>

      <div className="text-center relative z-10 font-bold">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-7xl"
          style={{ color: "var(--text-primary)" }}
        >
          {t.home.title}
        </motion.h2>

        <TypeAnimation
          sequence={[t.home.typing, 2000]}
          speed={50}
          repeat={Infinity}
          className="text-lg mt-4 tracking-wider"
          style={{ color: "var(--text-secondary)" }}
        />
      </div>

      <motion.button
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="z-20 mt-6 px-8 py-3 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
        style={{ backgroundColor: "var(--accent)" }}
        onClick={() =>
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        {t.home.cta}
      </motion.button>
    </section>
  );
}