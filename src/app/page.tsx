import Hero from "@/components/Hero"
import ArticleCarousel from "@/components/ArticleCarousel"
import About from "@/components/About"
import OpenSourceContributions from "@/components/OpenSourceContributions"
import Projects from "@/components/Projects"
import ResearchInterests from "@/components/ResearchInterests"
import Contact from "@/components/Contact"

export default function HomePage() {
  return (
    <>
      <main className="scroll-smooth">
        <section id="hero" className="min-h-screen">
          <Hero />
        </section>
        <ArticleCarousel />
        <section id="about" className="min-h-screen">
          <About />
        </section>
        <section id="contributions" className="min-h-screen">
          <OpenSourceContributions />
        </section>
        <section id="projects" className="min-h-screen">
          <Projects />
        </section>
        <section id="research" className="min-h-screen">
          <ResearchInterests />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  )
}
