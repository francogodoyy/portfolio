"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();
const LangContext = createContext();
const ColorThemeContext = createContext();

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
      value1Title: "Clean Code",
      value1Desc: "I write maintainable, scalable code that stands the test of time.",
      value2Title: "Problem Solving",
      value2Desc: "I break down complex challenges into simple, elegant solutions.",
      value3Title: "Continuous Learning",
      value3Desc: "Always exploring new technologies and best practices to stay ahead.",
      value4Title: "Collaboration",
      value4Desc: "I believe great products are built through teamwork and clear communication.",
      ctaTitle: "Let's Build Something Together",
      ctaText: "I'm always open to new opportunities and collaborations.",
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
        { title: "Vintage E-Commerce", description: "Full-stack e-commerce with Stripe, Sanity CMS & Redis" },
        { title: "Payment Management System", description: "Clients payment data is managed" },
        { title: "Turnos App", description: "Appointments scheduling system" },
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
      value1Title: "Código Limpio",
      value1Desc: "Escribo código mantenible y escalable que perdura en el tiempo.",
      value2Title: "Resolución de Problemas",
      value2Desc: "Convierto desafíos complejos en soluciones simples y elegantes.",
      value3Title: "Aprendizaje Continuo",
      value3Desc: "Siempre explorando nuevas tecnologías y mejores prácticas.",
      value4Title: "Colaboración",
      value4Desc: "Creo que los grandes productos se construyen en equipo con comunicación clara.",
      ctaTitle: "Construyamos Algo Juntos",
      ctaText: "Siempre estoy abierto a nuevas oportunidades y colaboraciones.",
      skillsTitle: "Habilidades &",
      skillsHighlight: "Conocimiento",
      journeyTitle: "Mi",
      journeyHighlight: "Trayectoria",
      timeline: [
        { year: "2022", event: "Comencé la Tecnicatura en Desarrollo de Software." },
        { year: "2023", event: "Ingresé al Informatorio Chaco — 1ra instancia. Formación formal en desarrollo web." },
        { year: "2024", event: "Completé el Informatorio Chaco — 2da instancia, enfocada en backend con Python y Django. Me gradué como Técnico Superior en Desarrollo de Software." },
        { year: "2025", event: "Trabajé como Mentor de Programación en el Informatorio Chaco, ayudando a estudiantes a fortalecer sus habilidades en Python y Django. Actualmente profundizo en Fullstack, construyendo y deployando aplicaciones reales." },
      ],
    },
    projects: {
      title: "Mis",
      highlight: "Proyectos",
      items: [
        { title: "Vintage E-Commerce", description: "E-commerce completo con Stripe, Sanity CMS y Redis" },
        { title: "Sistema de Gestión de Pagos", description: "Administración de datos de pago de clientes" },
        { title: "App de Turnos", description: "Sistema de programación de citas" },
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

const themes = [
  { id: "default", label: "Default" },
  { id: "violet-bloom", label: "Violet Bloom" },
  { id: "catppuccin", label: "Catppuccin" },
  { id: "cosmic-night", label: "Cosmic Night" },
  { id: "tangerine", label: "Tangerine" },
  { id: "bold-tech", label: "Bold Tech" },
];

export function AppProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const [lang, setLang] = useState("en");
  const [colorTheme, setColorTheme] = useState("default");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "dark";
    const storedLang = localStorage.getItem("lang") || "en";
    const storedColor = localStorage.getItem("colorTheme") || "default";
    setTheme(storedTheme);
    setLang(storedLang);
    setColorTheme(storedColor);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute("data-theme", colorTheme);
    localStorage.setItem("colorTheme", colorTheme);
  }, [colorTheme, mounted]);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("lang", lang);
  }, [lang, mounted]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  const toggleLang = () => setLang((l) => (l === "en" ? "es" : "en"));

  const t = translations[lang];

  return (
    <ColorThemeContext.Provider value={{ colorTheme, setColorTheme, themes }}>
      <ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
        <LangContext.Provider value={{ lang, toggleLang, t }}>
          {children}
        </LangContext.Provider>
      </ThemeContext.Provider>
    </ColorThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
export const useLang = () => useContext(LangContext);
export const useColorTheme = () => useContext(ColorThemeContext);