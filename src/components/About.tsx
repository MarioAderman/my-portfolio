import SectionWrapper from "./SectionWrapper"
import Image from "next/image"

export default function About() {
  return (
    <SectionWrapper id="about" title="About Me">
      <div className="flex flex-col md:flex-row items-center gap-8 py-16">
        {/* Profile Picture */}
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden mb-4 md:mb-0">
          <Image
            src="/images/profile.jpg" // Replace with your image path
            alt="Profile Photo"
            width={192}
            height={192}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Biography */}
        <div className="text-center md:text-left max-w-3xl">
          <p className="text-lg text-muted-foreground mb-4">
            Hello! I'm a passionate developer with a strong focus on AI, full-stack web development, and innovative product engineering. With years of experience, I’ve honed my skills in building scalable, user-centric software that pushes the boundaries of what’s possible. I thrive in dynamic environments and love to turn ideas into fully functional solutions.
          </p>
          <p className="text-lg text-muted-foreground">
            As a future startup CTO and AI Engineer, I am constantly exploring new technologies and methodologies to create products that make an impact. When I’m not coding, I enjoy learning about new advancements in tech, experimenting with new tools, and collaborating with other like-minded innovators. 
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}
