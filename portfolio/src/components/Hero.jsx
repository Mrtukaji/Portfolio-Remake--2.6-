import { FiArrowDown, FiDownload } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 pt-28 pb-20 relative"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-violet/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-14 items-center relative z-10">
        {/* Text */}
        <div className="order-2 md:order-1 text-center md:text-left animate-fade-up">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent mb-4">
            Portfolio · 2025
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-3">
            <span className="gradient-text">Ardy Bagnas</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-6 font-light">
            Web Developer & IT Student
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0 mb-8">
            I build clean, functional web applications that solve real problems —
            blending thoughtful design with solid engineering.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-gradient-135 font-semibold text-white shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-0.5 transition-all"
            >
              View Work <FiArrowDown />
            </a>
            <a
              href="/assets/Your_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 text-gray-200 hover:border-accent hover:text-accent transition-all"
            >
              <FiDownload /> Download CV
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative animate-float">
            <div className="absolute -inset-3 rounded-full bg-brand-gradient-135 blur-lg opacity-60" />
            <img
              src="/img/Profie_pic.JPG"
              alt="Ardy Bagnas"
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-base"
            />
          </div>
        </div>
      </div>
    </section>
  );
}