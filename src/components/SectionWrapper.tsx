import React from "react"
import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  id: string
  title: string
  children: React.ReactNode
  className?: string
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  title,
  children,
  className,
}) => {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Path-style section label */}
        <p className="section-label mb-10 md:mb-14">
          <span className="text-text-muted/50">...</span>
          {" /"}
          {title}
          {" "}
          <span className="text-text-muted/50">...</span>
        </p>
        {children}
      </div>
    </section>
  )
}

export default SectionWrapper
