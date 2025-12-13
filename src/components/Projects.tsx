// src/components/Projects.tsx
import ProjectCard from "./ProjectCard"

const projects = [
  {
    title: "Cashy - Financial Assistant",
    description:
      "Agentic-AI assistant for personal finance management with PostgreSQL backend and Excel frontend via ODBC. Built proof-of-concept agentic workflow using Langflow with autonomous CRUD operations through LangChain components and Python code execution.",
    image: "/images/cashy.png",
    link: "https://drive.google.com/file/d/16xtPmNV8Ja5Cq1FuM_2F274gx0MuhMCI/view?usp=drive_link",
    linkText: "Watch Demo",
    date: "Oct 2025"
  },
  {
    title: "CTGAN-based Portfolio Optimization",
    description:
      "Extending research on investment portfolio optimization using Conditional Tabular Generative Adversarial Networks (GANs) for synthetic scenario generation. Implementing and validating methods from Cifuentes et al. (arXiv:2302.02269). Built modular architecture for CTGAN generation, constraint optimization, and performance visualization.",
    image: "/images/ctgan.png",
    repo: "https://github.com/MarioAderman/ctgan-portfolio-research",
    date: "Aug 2025"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20 text-center">
      <h2 className="text-3xl font-semibold mb-10">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}
