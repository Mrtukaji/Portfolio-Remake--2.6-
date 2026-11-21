import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-base/80 backdrop-blur border-b border-white/5" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#about" className="text-xl font-bold gradient-text tracking-tight">
          Ardy<span className="text-white">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-gray-300 hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/Mrtukaji"
              target="_blank"
              rel="noreferrer"
              className="text-sm px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-accent hover:text-accent transition-all"
            >
              GitHub
            </a>
          </li>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-gray-200"
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden bg-surface border-t border-white/5 px-6 py-4 space-y-3">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-gray-300 hover:text-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/Mrtukaji"
              target="_blank"
              rel="noreferrer"
              className="block text-accent font-medium"
            >
              GitHub ↗
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}