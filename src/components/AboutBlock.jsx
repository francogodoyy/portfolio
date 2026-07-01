"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/AppContext";

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
          className="text-center"
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
      </div>
    </section>
  );
}
