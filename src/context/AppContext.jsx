"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();
const LangContext = createContext();

const translations = {
  en: {
    nav: ["Home", "About", "Projects", "Contact"],
    home: {
      title: "Software Developer",
      typing: "Open to freelance & full-time work · From 🇦🇷",
      available: "✦ Available for work ✦",
      cta: "Get in Touch",
    },
    about: {
      title: "About",
      highlight: "Me",
      intro: "Hi, I'm",
      name: "Franco Godoy",
      role: "Software Developer",
      from: "from Argentina.",
      focus: "I focus on building web applications that are practical, clean, and built to last.",
      specializes: "I specialize in",
      fullstack: "Fullstack Web Development",
      techs: "working with technologies such as:",
      skillsTitle: "Skills &",
      skillsHighlight: "Knowledge",
      journeyTitle: "My",
      journeyHighlight: "Journey",
    },
    projects: {
      title: "My",
      highlight: "Projects",
    },
    contact: {
      title: "Get in",
      highlight: "Touch",
      subtitle: "I'm currently open to freelance and full-time opportunities. Let's build something together.",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      messagePlaceholder: "Your message",
      send: "Send Message",
      thanks: "Thanks! I'll get back to you soon.",
    },
    footer: {
      location: "Argentina",
    },
  },
  es: {
    nav: ["Inicio", "Sobre mí", "Proyectos", "Contacto"],
    home: {
      title: "Desarrollador de Software",
      typing: "Abierto a trabajos freelance y full-time · Desde 🇦🇷",
      available: "✦ Disponible para trabajar ✦",
      cta: "Contactarme",
    },
    about: {
      title: "Sobre",
      highlight: "Mí",
      intro: "Hola, soy",
      name: "Franco Godoy",
      role: "Desarrollador de Software",
      from: "de Argentina.",
      focus: "Me enfoco en construir aplicaciones web prácticas, limpias y duraderas.",
      specializes: "Me especializo en",
      fullstack: "Desarrollo Web Fullstack",
      techs: "trabajando con tecnologías como:",
      skillsTitle: "Habilidades &",
      skillsHighlight: "Conocimiento",
      journeyTitle: "Mi",
      journeyHighlight: "Trayectoria",
    },
    projects: {
      title: "Mis",
      highlight: "Proyectos",
    },
    contact: {
      title: "Ponte en",
      highlight: "Contacto",
      subtitle: "Actualmente estoy abierto a oportunidades freelance y full-time. Construyamos algo juntos.",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "Tu email",
      messagePlaceholder: "Tu mensaje",
      send: "Enviar mensaje",
      thanks: "¡Gracias! Te responderé pronto.",
    },
    footer: {
      location: "Argentina",
    },
  },
};

export function AppProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const [lang, setLang] = useState("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "dark";
    const storedLang = localStorage.getItem("lang") || "en";
    setTheme(storedTheme);
    setLang(storedLang);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("lang", lang);
  }, [lang, mounted]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  const toggleLang = () => setLang((l) => (l === "en" ? "es" : "en"));

  const t = translations[lang];

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
      <LangContext.Provider value={{ lang, toggleLang, t }}>
        {children}
      </LangContext.Provider>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
export const useLang = () => useContext(LangContext);