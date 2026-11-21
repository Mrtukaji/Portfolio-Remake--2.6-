import { FiGithub, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Ardy Bagnas. Built with React + Tailwind.</p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/Mrtukaji" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accent transition-colors"><FiGithub size={20} /></a>
          <a href="#contact" className="text-gray-400 hover:text-accent transition-colors"><FiMail size={20} /></a>
        </div>
      </div>
    </footer>
  );
}