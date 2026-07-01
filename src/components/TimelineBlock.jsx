"use client";

import { motion, useInView } from "framer-motion";
import { FaGraduationCap, FaLaptopCode, FaChalkboardTeacher, FaRocket, FaBrain } from "react-icons/fa";
import { useLang } from "@/context/AppContext";
import { useRef } from "react";

const icons = [FaGraduationCap, FaLaptopCode, FaGraduationCap, FaChalkboardTeacher, FaBrain];

export default function TimelineBlock() {
  const { t } = useLang();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="w-full px-4 py-16 md:py-24"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16"
        >
          <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full"
            style={{
              color: "var(--accent)",
              backgroundColor: "var(--accent-bg)",
              border: "1px solid var(--border-accent)",
            }}
          >
            <svg className="inline h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {t.about.journeyTitle} {t.about.journeyHighlight}
          </span>
          <p className="mx-auto max-w-2xl text-base md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            {t.about.focus}
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="absolute left-4 top-0 h-full w-0.5 md:left-1/2 md:-translate-x-1/2"
            style={{
              background: "linear-gradient(to bottom, var(--accent), var(--accent-light), transparent)",
            }}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            styleOrigin={{ transformOrigin: "top" }}
          />

          <div className="space-y-12 md:space-y-16">
            {t.about.timeline.map((item, i) => {
              const Icon = icons[i] || FaRocket;
              const isEven = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.2, duration: 0.5, ease: "easeOut" }}
                  className={`relative flex items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="absolute left-4 flex h-8 w-8 items-center justify-center md:left-1/2 md:-translate-x-1/2">
                    <motion.div
                      className="flex h-8 w-8 items-center justify-center rounded-full border-4"
                      style={{
                        backgroundColor: "var(--accent)",
                        borderColor: "var(--bg-secondary)",
                        color: "white",
                      }}
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: i * 0.2 + 0.3, type: "spring" }}
                    >
                      <Icon className="h-4 w-4" />
                    </motion.div>
                    <motion.div
                      className="absolute h-8 w-8 rounded-full"
                      style={{ backgroundColor: "var(--accent-bg)" }}
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    />
                  </div>

                  <div className={`ml-16 w-full md:ml-0 md:w-5/12 ${isEven ? "md:pr-12" : "md:pl-12"}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="relative overflow-hidden rounded-xl p-4 shadow-lg md:p-6"
                        style={{
                          backgroundColor: "var(--bg-card)",
                          border: "1px solid var(--border)",
                        }}
                      >
                        <motion.div
                          className="absolute inset-0 opacity-0 transition-opacity duration-300"
                          style={{
                            background: "linear-gradient(to bottom right, var(--accent-bg), transparent)",
                          }}
                          whileHover={{ opacity: 1 }}
                        />

                        <div className="relative z-10">
                          <span className="inline-block mb-3 px-2 py-0.5 text-xs font-semibold rounded-md"
                            style={{
                              color: "var(--accent)",
                              border: "1px solid var(--border-accent)",
                            }}
                          >
                            {item.year}
                          </span>
                          <p className="text-sm md:text-base"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            {item.event}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <div className="hidden w-5/12 md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: t.about.timeline.length * 0.2 + 0.5 }}
          className="mt-12 text-center md:mt-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full px-6 py-3"
            style={{
              border: "1px solid var(--border)",
              backgroundColor: "var(--bg-card)",
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: "var(--accent)" }}
            />
            <span className="text-sm font-medium" style={{ color: "var(--text-muted)" }}>
              And the journey continues...
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
