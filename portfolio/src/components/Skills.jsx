import { FiCode, FiServer, FiCpu } from "react-icons/fi";

const stacks = [
  { icon: <FiCode />, title: "Frontend", items: ["HTML5 / CSS3", "JavaScript", "React.js", "TailwindCSS", "Responsive Design"] },
  { icon: <FiServer />, title: "Backend", items: ["Node.js", "EmailJS API", "MongoDB", "MySQL", "Git & GitHub"] },
  { icon: <FiCpu />, title: "Languages", items: ["Python", "JavaScript", "SQL"] },
];

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-3">Technical Stack</h2>
        <p className="text-gray-400 max-w-xl mx-auto">Tools and technologies I use to bring ideas to life.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {stacks.map((s) => (
          <div key={s.title} className="glass-card p-8 hover:-translate-y-2 hover:border-accent/40 hover:shadow-[0_10px_40px_-10px_rgba(0,191,255,0.3)] transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-brand-gradient-135 flex items-center justify-center text-xl text-white mb-5">
              {s.icon}
            </div>
            <h3 className="text-xl font-semibold mb-4 gradient-text">{s.title}</h3>
            <ul className="space-y-2">
              {s.items.map((item) => (
                <li key={item} className="text-sm text-gray-400 border-b border-white/5 pb-2 last:border-0 hover:text-accent hover:pl-1 transition-all">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}