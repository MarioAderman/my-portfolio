'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import ThemeIcon from './ThemeIcon'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

interface ProjectLink {
  label: string
  href: string
  type: 'github' | 'demo' | 'video' | 'external'
}

interface Project {
  id: string
  title: string
  description: string
  images?: string[]
  imageStyles?: string[]
  tags: string[]
  links: ProjectLink[]
}

const projects: Project[] = [
  {
    id: 'cashy',
    title: 'Cashy — AI Financial Advisor',
    description:
      'An AI-powered personal finance agent that answers natural language queries about a customized financial-structured database. Features multi-provider LLM support (OpenAI, Anthropic, Google, HuggingFace), specialized tool-calling, human-in-the-loop for write operations, chart generation, and a free tier.',
    images: [
      '/images/projects/cashy/cashy_edited.png',
      '/images/projects/cashy/demo_cashy.png',
      '/images/projects/cashy/cashy_wf.png',
    ],
    imageStyles: ['object-cover', 'object-cover', 'object-cover object-top'],
    tags: ['LangGraph', 'LangChain', 'PostgreSQL', 'Gradio', 'Python'],
    links: [
      { label: 'GitHub', href: 'https://github.com/MarioAderman/cashy-poc', type: 'github' },
      { label: 'Live Demo', href: 'https://huggingface.co/spaces/SeasonalFall84/cashy', type: 'demo' },
      { label: 'Video Demo', href: 'https://youtu.be/Ln5vl8dd5aI', type: 'video' },
    ],
  },
  {
    id: 'determinator',
    title: 'The DETERMINATOR',
    description:
      'A generalist deep research agent that uses iterative search-and-judge loops to investigate complex questions from any domain. Built for the MCP-1st-Birthday Hackathon. Features multi-source search, MCP integration, HuggingFace OAuth, Modal sandboxed code execution and LlamaIndex RAG. I contributed the output text-to-speech task using Kokoro-82M model sandboxed on Modal GPU.',
    images: [
      '/images/projects/the_determinator/determinator_card_square.png',
      '/images/projects/the_determinator/determinator_demo.png',
      '/images/projects/the_determinator/mcp_hack_edited.png',
    ],
    imageStyles: ['object-cover', 'object-cover', 'object-contain bg-black'],
    tags: ['Pydantic AI', 'Gradio', 'LlamaIndex', 'Modal', 'MCP'],
    links: [
      { label: 'GitHub', href: 'https://github.com/DeepCritical/GradioDemo', type: 'github' },
      { label: 'Live Demo', href: 'https://huggingface.co/spaces/DataQuests/DeepCritical', type: 'demo' },
    ],
  },
  {
    id: 'fintegra-chatbot',
    title: 'Fintegra Receptionist Chatbot',
    description:
      'Multi-platform receptionist chatbot for a financial services firm. Routes user intent through a three-agent system: an intent classifier, an appointment booking agent with Cal.com integration, and a RAG-powered FAQ agent. Supports Instagram DM, WhatsApp, and Telegram with voice transcription (Whisper) and image analysis (GPT-4o). Built on n8n with Redis message batching and Supabase pgvector for knowledge retrieval.',
    images: ['/images/projects/chatbot_recepcionist/chatbot_card_edited.png'],
    tags: ['n8n', 'OpenAI', 'Supabase', 'Cal.com', 'Redis'],
    links: [
      { label: 'Video Demo', href: 'https://www.youtube.com/shorts/0mYRDSPPiOo', type: 'video' },
      { label: 'Upwork Post', href: 'https://www.upwork.com/freelancers/~01de5a92e5fb56c8c6?viewMode=1&p=2025814916513570816', type: 'external' },
      { label: 'Demo Chat', href: 'https://www.instagram.com/fintegra.mx/', type: 'demo' },
    ],
  },
]

export default function Projects() {
  return (
    <>
      {/* Big "Projects" title — no section wrapper, standalone like Hero title */}
      <section id="projects" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <motion.h2
            className="font-mono text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-text-primary text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Projects
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

      {/* Project detail cards */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
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
              className={cn(
                'scroll-mt-24 grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6 md:gap-8',
                idx % 2 !== 0 && 'md:grid-cols-[2fr_3fr]'
              )}
            >
              {/* Images */}
              <div className={cn(idx % 2 !== 0 && 'md:order-2')}>
                {project.images && project.images.length > 0 ? (
                  <div className={cn(
                    'grid gap-2 rounded-2xl overflow-hidden',
                    project.images.length > 1
                      ? 'grid-cols-[1fr_1fr] grid-rows-2 aspect-[2/1]'
                      : 'aspect-[16/10]'
                  )}>
                    {/* Main image — spans 2 rows */}
                    <div className={cn(
                      'relative overflow-hidden rounded-lg',
                      project.images.length > 1 ? 'row-span-2' : ''
                    )}>
                      <Image
                        src={project.images[0]}
                        alt={`${project.title} main`}
                        fill
                        className={project.imageStyles?.[0] || 'object-cover'}
                      />
                    </div>
                    {/* Side thumbnails — stacked on the right */}
                    {project.images.slice(1, 3).map((img, i) => (
                      <div key={i} className="relative overflow-hidden rounded-lg">
                        <Image
                          src={img}
                          alt={`${project.title} screenshot ${i + 2}`}
                          fill
                          className={project.imageStyles?.[i + 1] || 'object-cover'}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="w-full aspect-[16/10] rounded-2xl bg-bg-surface-alt flex items-center justify-center px-6">
                    <h3 className="font-mono text-xl md:text-2xl font-bold text-text-primary text-center leading-tight">
                      {project.title}
                    </h3>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className={cn('flex flex-col', idx % 2 !== 0 && 'md:order-1')}>
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
                <p className="text-sm text-text-secondary leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Links: GitHub icon+arrow, then pills for demo/video */}
                {project.links.length > 0 && (
                  <div className="flex items-center gap-3 flex-wrap mt-auto">
                    {project.links.map((link) =>
                      link.type === 'github' ? (
                        <div key={link.label} className="flex items-center">
                          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border-default">
                            <ThemeIcon src="/images/gh_logo.png" alt="GitHub" size={18} invertInDark />
                          </div>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="-ml-3 inline-flex items-center justify-center w-10 h-10 rounded-full border border-border-default bg-bg-surface hover:border-text-muted transition-all duration-200 z-10"
                            aria-label={`${link.label} — ${project.title}`}
                          >
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        </div>
                      ) : (
                        <div key={link.label} className="flex items-center">
                          <span className="inline-flex items-center justify-center h-10 px-4 rounded-full border border-border-default text-xs font-mono text-text-primary">
                            {link.label}
                          </span>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="-ml-3 inline-flex items-center justify-center w-10 h-10 rounded-full border border-border-default bg-bg-surface hover:border-text-muted transition-all duration-200 z-10"
                            aria-label={`${link.label} — ${project.title}`}
                          >
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
        </div>
      </section>
    </>
  )
}
