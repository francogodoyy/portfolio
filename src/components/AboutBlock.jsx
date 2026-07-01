"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/AppContext";
import { FaCode, FaBrain, FaRocket, FaHandshake } from "react-icons/fa";

const values = [
  { icon: FaCode, titleKey: "value1Title", descKey: "value1Desc" },
  { icon: FaBrain, titleKey: "value2Title", descKey: "value2Desc" },
  { icon: FaRocket, titleKey: "value3Title", descKey: "value3Desc" },
  { icon: FaHandshake, titleKey: "value4Title", descKey: "value4Desc" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function AboutBlock() {
  const { t } = useLang();
  const a = t.about;

  return (
    <section className="px-4 py-20 md:py-24" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl" style={{ color: "var(--text-primary)" }}>
            {a.title} <span style={{ color: "var(--accent)" }}>{a.highlight}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg" style={{ color: "var(--text-muted)" }}>
            {a.intro} <span style={{ color: "var(--accent)" }}>{a.name}</span>, {a.role} {a.from}
          </p>
          <p className="mx-auto mt-4 max-w-2xl" style={{ color: "var(--text-muted)" }}>
            {a.focus}
          </p>
          <p className="mx-auto mt-2 max-w-2xl" style={{ color: "var(--text-muted)" }}>
            {a.specializes}{" "}
            <span style={{ color: "var(--accent)" }}>{a.fullstack}</span>, {a.techs}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2"
        >
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <motion.div key={value.titleKey} variants={itemVariants}>
                <div
                  className="group h-full rounded-2xl border-2 p-6 transition-all hover:shadow-lg"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: "var(--border-accent)",
                  }}
                >
                  <div
                    className="mb-4 inline-flex rounded-xl p-3"
                    style={{ backgroundColor: "var(--accent)", color: "white" }}
                  >
                    <Icon className="h-6 w-6 transition-transform group-hover:scale-110" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold" style={{ color: "var(--text-primary)" }}>
                    {a[value.titleKey]}
                  </h3>
                  <p style={{ color: "var(--text-muted)" }}>{a[value.descKey]}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 rounded-2xl border-2 p-8 text-center"
          style={{
            borderColor: "var(--accent)",
            backgroundColor: "var(--bg-card)",
          }}
        >
          <h3 className="mb-4 text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
            {a.ctaTitle || "Let's Build Something Together"}
          </h3>
          <p className="mx-auto max-w-2xl" style={{ color: "var(--text-muted)" }}>
            {a.ctaText || "I'm always open to new opportunities and collaborations."}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
