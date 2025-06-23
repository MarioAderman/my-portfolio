import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Header from "@/components/Header"

export default function HomePage() {
  return (
    <>
      <main className="scroll-smooth">
        <section id="hero" className="min-h-screen">
          <Hero />
        </section>
        <section id="about" className="min-h-screen">
          <About />
        </section>
        <section id="projects" className="min-h-screen">
          <Projects />
        </section>
        <section id="contact" className="min-h-screen">
          <Contact />
        </section>
      </main>
    </>
  )
}
