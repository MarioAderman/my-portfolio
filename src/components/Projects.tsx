// src/components/Projects.tsx
import ProjectCard from "./ProjectCard"

const projects = [
  {
    title: "Inventory System",
    description:
      "A responsive full-stack web app built with React, Node.js, and PostgreSQL. Features user login, dashboards, and real-time updates.",
    image: "/images/inventory-system.png",
    link: "https://inventory-system-git-main-mario-adermans-projects.vercel.app/",
    repo: "https://github.com/MarioAderman/inventory-system",
  },
  {
    title: "Portfolio Website",
    description:
      "This portfolio site built with Next.js, Tailwind CSS, and dark/light mode toggle support.",
    image: "/images/project2.png",
    link: "https://your-portfolio-url.com",
  },
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
