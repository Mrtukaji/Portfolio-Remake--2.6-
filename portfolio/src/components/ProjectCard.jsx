import { FiExternalLink } from "react-icons/fi";

export default function ProjectCard({ title, image, description, link, badge }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="group glass-card overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(138,43,226,0.35)]"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base via-base/40 to-transparent opacity-90" />
        {badge && (
          <span className="absolute top-3 right-3 text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-violet/80 text-white font-semibold">
            {badge}
          </span>
        )}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/60 transition-opacity duration-300">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-gradient text-sm font-medium">
            View Live <FiExternalLink />
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold mb-1 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
      </div>
    </a>
  );
}