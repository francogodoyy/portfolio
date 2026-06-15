import { useState, useEffect } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    links.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center">
      <div className="flex items-center gap-1 mt-4 px-2 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
        {links.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className={`px-4 py-2 text-sm rounded-full transition-all ${
              active === href.slice(1)
                ? "bg-purple-950 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}