import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="section-divider"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
        <div className="bg-[#111827] rounded-xl p-4 flex flex-col items-center">
          <Image
            src="/images/projects/quirra.png"
            alt="Quirra"
            width={300}
            height={200}
          />
          <h3 className="mt-4 text-xl font-semibold">Quirra AI</h3>
          <p className="text-center mt-2 text-[#d1d5db]">
            Next-gen personal AI, built with privacy-first design, persistent memory,
            and emotional intelligence.
          </p>
        </div>
        <div className="bg-[#111827] rounded-xl p-4 flex flex-col items-center">
          <Image
            src="/images/projects/project2.png"
            alt="Project 2"
            width={300}
            height={200}
          />
          <h3 className="mt-4 text-xl font-semibold">Project 2</h3>
          <p className="text-center mt-2 text-[#d1d5db]">
            Another innovation-driven project placeholder.
          </p>
        </div>
      </div>
    </section>
  );
}
