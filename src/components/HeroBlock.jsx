"use client";

import { motion } from "framer-motion";
import { FaCode, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { useLang } from "@/context/AppContext";

export default function HeroBlock() {
  const { t } = useLang();

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(to bottom, var(--bg-gradient-from), var(--bg-gradient-to))" }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-6 inline-block"
          >
            <div className="mx-auto h-24 w-24 rounded-full border-4 flex items-center justify-center"
              style={{
                borderColor: "var(--border-accent)",
                background: "var(--accent-bg)",
                boxShadow: "0 0 30px var(--accent-bg)"
              }}
            >
              <FaCode className="text-4xl" style={{ color: "var(--accent-light)" }} />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-2 text-5xl font-bold md:text-7xl"
            style={{ color: "var(--text-primary)" }}
          >
            Franco Godoy
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mb-4 text-2xl font-semibold md:text-3xl"
            style={{ color: "var(--accent-light)" }}
          >
            {t.home.title}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mx-auto mb-8 max-w-3xl"
          >
            <TypeAnimation
              sequence={[t.home.typing, 2000]}
              speed={50}
              repeat={Infinity}
              className="text-lg md:text-xl"
              style={{ color: "var(--text-secondary)" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-12 flex flex-wrap justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScroll("contact")}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-white shadow-lg transition-all"
              style={{ backgroundColor: "var(--accent)" }}
            >
              <FaEnvelope className="h-4 w-4" />
              {t.home.cta}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScroll("projects")}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold shadow-lg transition-all"
              style={{
                color: "var(--accent)",
                border: "2px solid var(--accent)",
                backgroundColor: "transparent"
              }}
            >
              {t.projects.title} {t.projects.highlight}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex justify-center gap-4"
          >
            {[
              { icon: FaGithub, href: "https://github.com/francogodoyy" },
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/franco-godoyy/ " },
              { icon: FaEnvelope, href: "mailto:alanfrancogodoy@gmail.com" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-12 w-12 items-center justify-center rounded-full transition-colors"
                style={{
                  backgroundColor: "var(--bg-card)",
                  color: "var(--text-muted)",
                  border: "1px solid var(--border)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--accent)";
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.borderColor = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--bg-card)";
                  e.currentTarget.style.color = "var(--text-muted)";
                  e.currentTarget.style.borderColor = "var(--border)";
                }}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.6 },
          y: { delay: 1.5, duration: 1.5, repeat: Infinity },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          style={{ color: "var(--text-muted)" }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
