'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import SectionWrapper from './SectionWrapper'
import ThemeIcon from './ThemeIcon'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

interface Project {
  id: string
  title: string
  description: string
  images?: string[]
  tags: string[]
  link?: string
  github?: string
}

const projects: Project[] = [
  {
    id: 'deepcritical',
    title: 'DeepCritical Project',
    description:
      'Agentic framework for scientific deep research. Generates datasets of hypotheses, tests them systematically, and produces reports through configurable workflows.',
    tags: ['Python', 'LLM', 'Hydra', 'Pydantic'],
    github: 'https://github.com/DeepCritical',
  },
  {
    id: 'determinator',
    title: 'The DETERMINATOR Demo',
    description:
      'Lightweight app based on DeepCritical. Deployed on Hugging Face Spaces for the MCP-1st-Birthday Hackathon by Anthropic and Gradio.',
    tags: ['Gradio', 'HuggingFace', 'Modal', 'TTS'],
    link: 'https://huggingface.co/spaces/DataQuests/DETERMINATOR-TEST',
  },
  {
    id: 'cashy',
    title: 'Cashy — Financial Assistant',
    description:
      'Agentic-AI assistant for personal finance with PostgreSQL backend and Excel frontend via ODBC. Built with Langflow and LangChain.',
    images: ['/images/cashy.png'],
    tags: ['LangChain', 'PostgreSQL', 'Langflow'],
    link: 'https://drive.google.com/file/d/16xtPmNV8Ja5Cq1FuM_2F274gx0MuhMCI/view?usp=drive_link',
  },
  {
    id: 'ctgan',
    title: 'CTGAN Portfolio Optimization',
    description:
      'Research on investment portfolio optimization using Conditional Tabular GANs for synthetic scenario generation.',
    images: ['/images/ctgan.png'],
    tags: ['PyTorch', 'CTGAN', 'Finance'],
    github: 'https://github.com/MarioAderman/ctgan-portfolio-research',
  },
]

export default function Work() {
  return (
    <>
      {/* Big "Work" title — no section wrapper, standalone like Hero title */}
      <section id="work" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <motion.h2
            className="font-mono text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-text-primary text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Work
          </motion.h2>

          {/* Compact project list — minimal rows linking to detail below */}
          <motion.div
            className="mt-10 flex flex-col divide-y divide-border-default border-y border-border-default -mx-5 sm:-mx-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {projects.map((project, idx) => (
              <motion.a
                key={project.id}
                href={`#project-${project.id}`}
                variants={fadeUp}
                custom={idx}
                className="flex items-center justify-between py-4 px-5 sm:px-8 hover:bg-text-primary hover:text-bg-primary transition-colors duration-200 group"
              >
                <span className="font-mono text-sm md:text-base font-medium text-text-primary group-hover:text-bg-primary transition-colors">
                  {project.title}
                </span>
                <span className="text-xs text-text-muted font-mono hidden sm:block group-hover:text-bg-primary/70 transition-colors">
                  {project.tags.slice(0, 3).join(' / ')}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects detail subsection */}
      <SectionWrapper id="projects" title="Projects">
        <motion.div
          className="flex flex-col gap-16 md:gap-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              id={`project-${project.id}`}
              variants={fadeUp}
              custom={idx}
              className="scroll-mt-24"
            >
              {/* Rounded images */}
              {project.images && project.images.length > 0 && (
                <div className="flex gap-3 mb-6 overflow-x-auto">
                  {project.images.map((img, i) => (
                    <div
                      key={i}
                      className="relative w-full max-w-md aspect-[16/10] rounded-2xl overflow-hidden shrink-0"
                    >
                      <Image
                        src={img}
                        alt={`${project.title} screenshot ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Title */}
              <h3 className="font-mono text-lg md:text-xl font-bold text-text-primary mb-3">
                {project.title}
              </h3>

              {/* Tags as pills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-3 py-1 rounded-full border border-border-default text-text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-sm text-text-secondary leading-relaxed max-w-xl mb-5">
                {project.description}
              </p>

              {/* GitHub + arrow link */}
              <div className="flex items-center gap-0">
                {project.github ? (
                  <>
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border-default">
                      <ThemeIcon src="/images/gh_logo.png" alt="GitHub" size={18} invertInDark />
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="-ml-3 inline-flex items-center justify-center w-10 h-10 rounded-full border border-border-default bg-bg-surface hover:border-text-muted transition-all duration-200 z-10"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </>
                ) : project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border-default hover:border-text-muted transition-all duration-200"
                    aria-label={`View ${project.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                ) : null}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>
    </>
  )
}
