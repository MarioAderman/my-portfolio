'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionWrapper from './SectionWrapper'
import ThemeIcon from './ThemeIcon'
import { useTranslation } from '@/i18n/LanguageContext'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

const skillCategories = [
  {
    name: 'AI / ML',
    skills: ['Python', 'PyTorch', 'Scikit-Learn', 'Transformers', 'LLMs (Proprietary & Open-weights)', 'LangChain', 'LangGraph', 'Pgvector', 'RAG', 'MCP', 'A2A Protocol'],
  },
  {
    name: 'Backend',
    skills: ['FastAPI', 'FastMCP', 'Express', 'PostgreSQL', 'Supabase', 'Render'],
  },
  {
    name: 'Frontend',
    skills: ['TypeScript', 'React', 'Next.js', 'Gradio'],
  },
  {
    name: 'DevOps / Tools',
    skills: ['Git', 'GitHub Actions', 'Docker', 'Hugging Face Spaces', 'Claude Code', 'CI/CD'],
  },
]

export default function About() {
  const { t } = useTranslation()

  const categoryNames = [t.about.categories.aiml, t.about.categories.backend, t.about.categories.frontend, t.about.categories.devops]

  return (
    <SectionWrapper id="about" title={t.about.sectionTitle}>
      {/* Intro text — right-aligned like Nikita */}
      <motion.p
        className="text-base md:text-lg text-text-secondary leading-relaxed max-w-md md:ml-auto mb-12 md:mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={fadeUp}
        custom={0}
      >
        {t.about.intro.start}
        <strong className="text-text-primary font-semibold">{t.about.intro.role}</strong>
        {t.about.intro.mid}<em className="text-text-primary font-semibold">{t.about.intro.opensource}</em>{t.about.intro.and}
        <strong className="text-text-primary font-semibold">{t.about.intro.hackathons}</strong>{t.about.intro.end}
      </motion.p>

      {/* 2-column layout: skill boxes (left) + photo (right) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
        {/* Left: Skill category boxes with interleaved elements */}
        <motion.div
          className="flex flex-col gap-4 order-2 md:order-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* AI / ML — full width */}
          <motion.div variants={fadeUp} custom={0} className="rounded-xl border border-border-default p-5">
            <h3 className="font-mono text-sm font-semibold text-text-primary mb-2">
              {categoryNames[0]}
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              {skillCategories[0].skills.join(' / ')}
            </p>
          </motion.div>

          {/* Backend (narrower) + GH/arrow buttons — same row */}
          <motion.div className="flex items-start gap-4" variants={fadeUp} custom={1}>
            <div className="rounded-xl border border-border-default p-5 flex-1 max-w-xs">
              <h3 className="font-mono text-sm font-semibold text-text-primary mb-2">
                {categoryNames[1]}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {skillCategories[1].skills.join(' / ')}
              </p>
            </div>

            {/* Decorative GH + arrow (overlapping) */}
            <div className="flex items-center pt-3">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border-default">
                <ThemeIcon src="/images/gh_logo.png" alt="GitHub" size={18} invertInDark />
              </div>
              <a
                href="https://github.com/MarioAderman"
                target="_blank"
                rel="noopener noreferrer"
                className="-ml-3 inline-flex items-center justify-center w-10 h-10 rounded-full border border-border-default bg-bg-surface hover:border-text-muted transition-all duration-200 z-10"
                aria-label={t.aria.viewGithub}
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Frontend — full width */}
          <motion.div variants={fadeUp} custom={3} className="rounded-xl border border-border-default p-5">
            <h3 className="font-mono text-sm font-semibold text-text-primary mb-2">
              {categoryNames[2]}
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              {skillCategories[2].skills.join(' / ')}
            </p>
          </motion.div>

          {/* Small text + DevOps — same row */}
          <motion.div className="flex items-start gap-4" variants={fadeUp} custom={4}>
            <p className="hidden md:block text-xs text-text-muted pt-2 w-[140px] shrink-0">
              {t.about.techLabel.start}
              <em className="text-text-secondary font-medium">{t.about.techLabel.bold}</em>{' '}
              {t.about.techLabel.end}
            </p>

            <div className="rounded-xl border border-border-default p-5 flex-1">
              <h3 className="font-mono text-sm font-semibold text-text-primary mb-2">
                {categoryNames[3]}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {skillCategories[3].skills.join(' / ')}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Profile photo */}
        <motion.div
          className="order-1 md:order-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeUp}
          custom={0}
        >
          <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src="/images/profile_picture_edited.png"
              alt="Mario Aderman"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
