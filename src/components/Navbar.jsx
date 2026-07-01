"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme, useLang, useColorTheme } from "@/context/AppContext";
import { FaSun, FaMoon, FaPalette } from "react-icons/fa";

const sectionIds = ["home", "about", "projects", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const menuRef = useRef(null);
  const { theme, toggleTheme, mounted } = useTheme();
  const { lang, toggleLang, t } = useLang();
  const { colorTheme, setColorTheme, themes } = useColorTheme();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowThemeMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-2 mt-4 px-4">
      <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-[var(--navbar-bg)] border border-[var(--border)] backdrop-blur-md">
        {t.nav.map((label, i) => {
          const id = sectionIds[i];
          return (
            <a
              key={id}
              href={`#${id}`}
              className={`px-4 py-2 text-sm rounded-full transition-all ${
                active === id
                  ? "bg-[var(--accent)] text-white"
                  : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              }`}
            >
              {label}
            </a>
          );
        })}
      </div>

      <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-[var(--navbar-bg)] border border-[var(--border)] backdrop-blur-md">
        <button
          onClick={toggleLang}
          className="px-2 py-1.5 text-xs font-semibold rounded-full text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors uppercase tracking-wider"
        >
          {lang === "en" ? "ES" : "EN"}
        </button>

        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setShowThemeMenu((v) => !v)}
            className="p-1.5 rounded-full text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            aria-label="Pick color theme"
          >
            <FaPalette size={14} />
          </button>
          {showThemeMenu && (
            <div className="absolute right-0 top-full mt-2 w-44 py-1 rounded-xl border bg-[var(--bg-card)] border-[var(--border)] shadow-lg backdrop-blur-md z-50"
              style={{ backgroundColor: "var(--bg-card)" }}
            >
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => { setColorTheme(t.id); setShowThemeMenu(false); }}
                  className={`w-full text-left px-3 py-1.5 text-sm transition-colors ${
                    colorTheme === t.id
                      ? "text-[var(--accent)] font-semibold"
                      : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <button
          onClick={toggleTheme}
          className="p-1.5 rounded-full text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          aria-label="Toggle theme"
        >
          {mounted && theme === "dark" ? <FaSun size={14} /> : <FaMoon size={14} />}
        </button>
      </div>
    </nav>
  );
}