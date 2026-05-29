# Portfolio Personal — Franco Godoy

Portfolio web personal desarrollado con Next.js, donde presento mi perfil como desarrollador, mis conocimientos, trayectoria y proyectos realizados.

 **Demo en vivo:** [portfoliofrann.vercel.app](https://portfoliofrann.vercel.app)

---

## 📸 Capturas de pantalla

> _Próximamente / agregar capturas

---

##  Secciones

- **Hero** — Presentación principal con efecto typewriter y partículas animadas de fondo
- **Sobre mí** — Descripción personal y perfil profesional
- **Conocimientos** — Lenguajes y tecnologías que manejo
- **Mi travesía** — Timeline vertical con formación académica y recorrido hasta hoy
- **Proyectos** — Cards con videos descriptivos de cada proyecto desarrollado
- **Contacto** — Links a GitHub, email e Instagram + botones *Get in Touch* y *Available to Work*

---

##  Stack tecnológico

| Tecnología | Uso |
|---|---|
| [Next.js 16](https://nextjs.org/) | Framework principal (con Turbopack) |
| [React 19](https://react.dev/) | Librería de UI |
| [Framer Motion](https://www.framer.com/motion/) | Animaciones y transiciones |
| [tsparticles](https://particles.js.org/) | Efecto de partículas en el hero |
| [react-type-animation](https://github.com/maxeth/react-type-animation) | Efecto typewriter en el hero |
| [react-vertical-timeline-component](https://github.com/stephane-monnot/react-vertical-timeline) | Timeline de trayectoria |
| [lucide-react](https://lucide.dev/) | Íconos |
| [react-icons](https://react-icons.github.io/react-icons/) | Íconos adicionales |
| [Tailwind CSS](https://tailwindcss.com/) | Estilos utilitarios |
| [Vercel](https://vercel.com/) | Deploy |

---

##  Estructura del proyecto

```
portfolio/
├── public/           # Imágenes, videos y assets estáticos
├── src/              # Código fuente
│   ├── components/   # Componentes por sección
│   └── ...
├── data.jsx          # Datos centralizados (proyectos, skills, timeline)
└── ...
```

---

##  Correr el proyecto localmente

### 1. Clonar el repositorio

```
git clone https://github.com/francogodoyy/portfolio.git
cd portfolio
```

### 2. Instalar dependencias

```
npm install
```

### 3. Iniciar el servidor de desarrollo

```
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

---

##  Scripts disponibles

```
npm run dev      # Servidor de desarrollo (con Turbopack)
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Linter
```

---

##  Autor

**Franco Godoy** — Software Developer

(https://github.com/francogodoyy)
