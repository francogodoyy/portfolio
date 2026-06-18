"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useLang } from "@/context/AppContext";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const { t } = useLang();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const res = await fetch("https://formspree.io/f/mdavbweq", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    if (res.ok) setSent(true);
  };

  return (
    <footer id="contact" className="py-16" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="max-w-xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
          {t.contact.title} <span style={{ color: "var(--accent)" }}>{t.contact.highlight}</span>
        </h2>
        <p className="mb-8" style={{ color: "var(--text-muted)" }}>
          {t.contact.subtitle}
        </p>

        {sent ? (
          <p className="text-green-400 mb-8">{t.contact.thanks}</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mb-10">
            <input
              type="text"
              name="name"
              placeholder={t.contact.namePlaceholder}
              required
              className="w-full px-4 py-3 rounded-lg border focus:outline-none transition-colors"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border)",
                color: "var(--text-primary)",
              }}
            />
            <input
              type="email"
              name="email"
              placeholder={t.contact.emailPlaceholder}
              required
              className="w-full px-4 py-3 rounded-lg border focus:outline-none transition-colors"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border)",
                color: "var(--text-primary)",
              }}
            />
            <textarea
              name="message"
              placeholder={t.contact.messagePlaceholder}
              rows={4}
              required
              className="w-full px-4 py-3 rounded-lg border focus:outline-none transition-colors resize-none"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border)",
                color: "var(--text-primary)",
              }}
            />
            <button
              type="submit"
              className="w-full py-3 text-white font-semibold rounded-lg transition-colors"
              style={{ backgroundColor: "var(--accent)" }}
            >
              {t.contact.send}
            </button>
          </form>
        )}

        <div className="flex justify-center gap-6 text-2xl mb-4">
          <a href="https://github.com/francogodoyy" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-[var(--accent-light)] transition-colors" style={{ color: "var(--text-muted)" }} />
          </a>
          <a href="https://www.linkedin.com/in/franco-godoyy/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-[var(--accent-light)] transition-colors" style={{ color: "var(--text-muted)" }} />
          </a>
          <a href="https://www.instagram.com/franco.godoy__/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-[var(--accent-light)] transition-colors" style={{ color: "var(--text-muted)" }} />
          </a>
          <a href="mailto:alanfrancogodoy@gmail.com">
            <FaEnvelope className="hover:text-[var(--accent-light)] transition-colors" style={{ color: "var(--text-muted)" }} />
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm mb-2" style={{ color: "var(--text-dim)" }}>
          <FaMapMarkerAlt />
          <span>{t.footer.location}</span>
        </div>

        <p className="text-sm" style={{ color: "var(--text-dim)" }}>
          &copy; 2026 Franco Godoy.
        </p>
      </div>
    </footer>
  );
}