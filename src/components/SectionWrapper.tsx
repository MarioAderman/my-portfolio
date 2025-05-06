import React from "react"

interface SectionWrapperProps {
  id: string
  title: string
  children: React.ReactNode
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-semibold text-primary mb-8">{title}</h2>
        {children}
      </div>
    </section>
  )
}

export default SectionWrapper
