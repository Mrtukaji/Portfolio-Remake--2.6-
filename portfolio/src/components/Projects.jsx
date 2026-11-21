import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "DeepState App",
    image: "/img/deepstate.png",
    description: "Track, manage, and organize your time effortlessly.",
    link: "https://deepstateapp.netlify.app/",
  },
  {
    title: "QuickQR!",
    image: "/img/QuickQR.png",
    description: "Generate and customize QR codes instantly. No sign-up required.",
    link: "https://quick-qr-tech.vercel.app/",
  },
  {
    title: "Snap-Flow",
    image: "/img/Snap-flow.png",
    description: "Currently developing — an experimental flow-based capture tool.",
    link: "https://snap-flow-one.vercel.app/",
    badge: "In Progress",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-3">
          Selected Work
        </h2>
        <p className="text-gray-400">A few things I've built recently</p>
        <div className="w-10 h-0.5 bg-brand-gradient mx-auto mt-5 rounded-full opacity-60" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}