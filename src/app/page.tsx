import Hero from "@/components/Hero"
import ArticleCarousel from "@/components/ArticleCarousel"
import About from "@/components/About"
import Projects from "@/components/Work"
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
        <Projects />
        <Contact />
      </main>
    </>
  )
}
