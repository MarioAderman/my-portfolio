import SectionWrapper from "./SectionWrapper"
import Image from "next/image"

export default function About() {
  return (
    <SectionWrapper id="about" title="About Me">
      <div className="max-w-5xl mx-auto py-12">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start mb-12">
          {/* Image */}
          <div className="flex-shrink-0">
            <Image
              src="/images/talk.jpeg"
              alt="Mario Aderman"
              width={500}
              height={500}
              className="rounded-lg object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400">
              <p>
                I&apos;m an <strong className="text-gray-900 dark:text-gray-100">autodidact AI Engineer</strong> based in Mexico,
                passionate about making AI accessible and empowering human reasoning through open-source technology.
              </p>

              <p>
                My work centers on <strong className="text-gray-900 dark:text-gray-100">building agentic systems</strong> and contributing to
                open-source ML tools that solve real-world problems. I believe the future of AI will be driven by collective effort,
                and I&apos;m committed to being part of that movement through technical contribution and collaboration.
              </p>

              <div className="pt-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Education</h3>
                <div className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-4">
                  <p className="font-medium text-gray-900 dark:text-gray-100">
                    Bachelor of Science in Mechatronics Engineering
                  </p>
                  <p className="text-base text-gray-600 dark:text-gray-400">
                    Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM)
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    Querétaro, Mexico • Graduated December 2022 • GPA: 94/100
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills - Full Width Below */}
        <div className="pt-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Technical Skills</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Python", "PyTorch", "Transformers", "LLMs",
              "Agentic Architectures", "Pydantic", "FastAPI",
              "Gradio", "LangChain", "Hydra", "PostgreSQL",
              "TypeScript", "React", "Next.js", "Git/GitHub"
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
