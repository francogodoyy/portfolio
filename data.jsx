import { BookText, CodeSquare, HomeIcon, UserRound, Speech, GithubIcon, InstagramIcon } from "lucide-react";

export const socialNetworks = [
  {
    id: 1,
    logo: <GithubIcon size={30} strokeWidth={1} />,
    src: "https://github.com/francogodoyy/",
  },
  {
    id: 2,
    logo: <InstagramIcon size={30} strokeWidth={1} />,
    src: "https://www.instagram.com/franco.godoy__/",
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    link: "/",
  },
  {
    id: 2,
    title: "User",
    icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
    link: "/about-me",
  },
  {
    id: 3,
    title: "Book",
    icon: <BookText size={25} color="#fff" strokeWidth={1} />,
    link: "/services",
  },
  {
    id: 4,
    title: "Target",
    icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
    link: "/portfolio",
  },
  {
    id: 5,
    title: "Contact",
    icon: <Speech size={25} color="#fff" strokeWidth={1} />,
    link: "/testimonials",
  },
];

export const dataAboutPage = [
  {
    id: 1,
    title: "Desarrollador Backend",
    subtitle: "EducarLAB — Proyecto del Estado Nacional",
    description:
      "Responsable del desarrollo del sistema de autenticación y gestión administrativa de la plataforma. Implementé el módulo de login con OAuth, panel de administrador con control de acceso por roles, y el sistema de carga, edición y eliminación de visitas escolares al laboratorio. Stack: Node.js, MySQL.",
    date: "Jun 2024 – Dic 2024",
  },
];

export const dataCounter = [];

export const serviceData = [
  {
    icon: <CodeSquare />,
    title: "Desarrollo web fullstack",
    description:
      "Desarrollo de aplicaciones web completas, desde el frontend hasta el backend y la base de datos, con foco en rendimiento y escalabilidad.",
  },
  {
    icon: <UserRound />,
    title: "Desarrollo de APIs REST",
    description:
      "Diseño e implementación de APIs con Node.js, Nest.js y Express, con autenticación, validaciones y documentación.",
  },
  {
    icon: <BookText />,
    title: "Integración con IA",
    description:
      "Integración de modelos de lenguaje como GPT en aplicaciones web, desde chatbots hasta asistentes personalizados.",
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: "EducarLAB — Sistema de gestión",
    image: "/image-1.jpg",
    description:
      "Backend para la red de centros de innovación educativa del Estado Nacional. Sistema de login con OAuth, panel de administración y gestión de visitas escolares.",
    urlGithub: "",
    urlDemo: "",
    tags: ["Node.js", "MySQL", "OAuth"],
  },
];

export const dataTestimonials = [];
