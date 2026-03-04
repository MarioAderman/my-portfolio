'use client'

import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
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

const contactLinks = [
  {
    href: 'https://github.com/MarioAderman',
    label: 'GitHub',
    logo: '/images/gh_logo.png',
    invertInDark: true,
  },
  {
    href: 'mailto:mario.aderman@gmail.com',
    label: 'E-mail',
    icon: 'mail' as const,
  },
  {
    href: 'https://linkedin.com/in/mario-aderman',
    label: 'LinkedIn',
    logo: '/images/linkedin_logo.png',
    invertInDark: true,
  },
  {
    href: 'https://www.upwork.com/freelancers/~01de5a92e5fb56c8c6',
    label: 'Upwork',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
      <motion.div
        className="flex flex-col items-center text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {/* Large name */}
        <motion.h2
          className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary leading-tight"
          variants={fadeUp}
          custom={0}
        >
          Mario<br />Aderman
        </motion.h2>

        {/* Role */}
        <motion.p
          className="mt-3 text-sm text-text-muted font-sans"
          variants={fadeUp}
          custom={1}
        >
          AI Software Engineer
        </motion.p>

        {/* Contact link pills */}
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-3"
          variants={fadeUp}
          custom={2}
        >
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className="social-pill inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-border-default text-sm text-text-muted font-sans hover:text-text-primary hover:border-text-muted transition-all duration-200"
            >
              {link.logo ? (
                <ThemeIcon
                  src={link.logo}
                  alt={link.label}
                  size={18}
                  invertInDark={link.invertInDark}
                />
              ) : link.icon === 'mail' ? (
                <Mail className="w-[18px] h-[18px]" />
              ) : null}
              <span>{link.label}</span>
            </a>
          ))}
        </motion.div>
      </motion.div>
      </div>
    </section>
  )
}
