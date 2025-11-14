// Hero Section
const Hero = () => (
  <section
    id="hero"
    className="relative flex flex-col justify-start items-start text-left px-12 pt-15 pb-20 min-h-[85vh] bg-[#020617]"
  >
    {/* Subtle background gradient for depth */}
    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#020617] via-[#0b1120] to-[#0f172a]" />

    <h1 className="text-6xl font-semibold text-white mb-4">
      Hatem Hamdy
    </h1>
    <p className="max-w-xl text-gray-300 text-lg leading-relaxed">
      Your mission-driven AI & tech visionary portfolio. Explore my projects, vision, and team.
    </p>
  </section>
);
