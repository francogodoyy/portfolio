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
      timeline: [
        { year: "2022", event: "Started the Technical Degree in Software Development." },
        { year: "2023", event: "Joined Informatorio Chaco — 1st instance. In formal training in web development." },
        { year: "2024", event: "Completed Informatorio Chaco — 2nd instance, focused on backend development with Python and Django. Graduated as a Higher Technician in Software Development." },
        { year: "2025", event: "Worked as a Programming Mentor at Informatorio Chaco, helping students strengthen their skills in Python and Django. Currently deepening my own skills in Fullstack Development, building and deploying real-world applications." },
      ],
    },
    projects: {
      title: "My",
      highlight: "Projects",
      items: [
        { title: "Payment Management System", description: "Clients payment data is managed" },
        { title: "Turnos App", description: "Appointments scheduling system" },
        { title: "ChatBot with ChatGPT 3.5-turbo", description: "Chat with the IA" },
      ],
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
      timeline: [
        { year: "2022", event: "Comencé mi camino autodidacta en el desarrollo de software." },
        { year: "2023", event: "Ingresé al Informatorio Chaco — 1ra instancia. Primera formación formal en desarrollo web." },
        { year: "2024", event: "Completé el Informatorio Chaco — 2da instancia, enfocada en backend con Node.js, Python y Django. Me gradué como Técnico Superior en Desarrollo de Software." },
        { year: "2025", event: "Trabajé como Mentor de Programación en el Informatorio Chaco, ayudando a estudiantes a fortalecer sus habilidades en Python y Django. Actualmente profundizo en Fullstack, construyendo y deployando aplicaciones reales." },
      ],
    },
    projects: {
      title: "Mis",
      highlight: "Proyectos",
      items: [
        { title: "Sistema de Gestión de Pagos", description: "Administración de datos de pago de clientes" },
        { title: "App de Turnos", description: "Sistema de programación de citas" },
        { title: "ChatBot con ChatGPT 3.5-turbo", description: "Chatea con la IA" },
      ],
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