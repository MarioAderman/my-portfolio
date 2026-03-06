'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import ThemeIcon from './ThemeIcon'
import { useTranslation } from '@/i18n/LanguageContext'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

const socialLinks: { href: string; label: string; ariaLabel: string; logo: string; invertInDark: boolean; logoSize?: number }[] = [
  { href: 'https://github.com/MarioAderman', label: 'GitHub', ariaLabel: 'GitHub', logo: '/images/gh_logo.png', invertInDark: true },
  { href: 'https://linkedin.com/in/mario-aderman', label: 'LinkedIn', ariaLabel: 'LinkedIn', logo: '/images/linkedin_logo.png', invertInDark: true },
  { href: 'https://x.com/MarioAderman', label: '', ariaLabel: 'X (Twitter)', logo: '/images/x_logo.png', invertInDark: true, logoSize: 24 },
  { href: 'https://huggingface.co/SeasonalFall84', label: 'Hugging Face', ariaLabel: 'Hugging Face', logo: '/images/huggingface_logo.png', invertInDark: false },
  { href: 'https://www.kaggle.com/marioaderman/code', label: 'Kaggle', ariaLabel: 'Kaggle', logo: '/images/kaggle_logo.png', invertInDark: false },
]

export default function Hero() {
  const { t } = useTranslation()
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center bg-bg-primary overflow-hidden"
    >
      <div className="relative max-w-5xl mx-auto px-5 sm:px-8 w-full pt-24 pb-16">

        {/* Row 1: "AI Software" + Projects button */}
        <motion.div
          className="flex items-center justify-between gap-8"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
        >
          <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            {t.hero.titleLine1}
          </h1>

          {/* Projects pill button */}
          <a
            href="#projects"
            className="hidden sm:inline-flex items-center gap-3 shrink-0"
          >
            <span className="px-14 py-3.5 rounded-full border border-border-default hover:border-text-muted text-sm font-sans text-text-primary transition-all duration-200">
              {t.hero.projectsButton}
            </span>
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-border-default hover:border-text-muted transition-all duration-200">
              <ArrowRight className="w-5 h-5" />
            </span>
          </a>
        </motion.div>

        {/* Row 2: Tagline (left) + "Engineer" (right) */}
        <motion.div
          className="flex flex-col-reverse md:flex-row md:items-end md:justify-between gap-6 md:gap-12 mt-4 md:mt-6"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
        >
          {/* Tagline — left side */}
          <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-md">
            {t.hero.tagline.start}<strong className="text-text-primary font-semibold">{t.hero.tagline.bold}</strong>{t.hero.tagline.mid}{' '}
            <em className="text-text-primary font-semibold">{t.hero.tagline.italic}</em>{t.hero.tagline.end}
          </p>

          {/* "Engineer" — right side, large */}
          <span className="font-mono text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-right">
            {t.hero.titleLine2}
          </span>
        </motion.div>

        {/* Mobile: Projects button */}
        <motion.div
          className="sm:hidden mt-8"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={2}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-3"
          >
            <span className="px-14 py-3.5 rounded-full border border-border-default text-sm font-sans text-text-primary">
              {t.hero.projectsButton}
            </span>
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-border-default">
              <ArrowRight className="w-5 h-5" />
            </span>
          </a>
        </motion.div>

        {/* Social pills with logo images */}
        <motion.div
          className="mt-10 md:mt-14 flex flex-wrap gap-3"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={3}
        >
          {socialLinks.map((social) => (
            <a
              key={social.ariaLabel}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-border-default text-sm text-text-muted font-sans"
              aria-label={social.ariaLabel}
            >
              <ThemeIcon
                src={social.logo}
                alt={social.ariaLabel}
                size={social.logoSize ?? 18}
                invertInDark={social.invertInDark}
              />
              {social.label && <span>{social.label}</span>}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
